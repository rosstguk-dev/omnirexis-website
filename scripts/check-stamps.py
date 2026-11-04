#!/usr/bin/env python3
"""Fail if a change-log stamp claims a time later than the commit that wrote it.

The bug: a stamp typed from a running estimate instead of read off the clock, so
the master says 15:53 inside a commit made at 15:44. The record then claims work
in the future, and every later reader inherits a timeline that never happened.

Method: `git blame` the live file. The commit that owns a stamp's text is the
commit in which that text came into being, so the stamp can never legitimately be
ahead of that commit's time. Small lag (write the file, then commit) is normal and
allowed; anything past TOLERANCE is a claim about a time that had not arrived.

Stamps are local time (Europe/London). Commits carry their own offset, so October
commits are +0100 (BST) and November +0000 (GMT). Comparing in UTC makes every
BST row look an hour out, so both sides are converted to local first.

Usage: check-stamps.py [repo] [--fix]
  --fix  rewrite each offending stamp to its owning commit's local time.
"""
import subprocess, re, sys, datetime
from zoneinfo import ZoneInfo

LOCAL = ZoneInfo("Europe/London")
TOLERANCE = 15 * 60          # seconds of legitimate write-then-commit lag
PATH = "docs/OMNIREXIS-MASTER.md"
STAMP_ROW = re.compile(r"^\| (\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}) \|")

def git(args, repo):
    r = subprocess.run(["git"] + args, cwd=repo, capture_output=True, text=True)
    if r.returncode != 0:
        raise SystemExit(f"git {' '.join(args)} failed: {r.stderr.strip()}")
    return r.stdout

def blame_map(repo, rev):
    """final line number -> (owning commit, commit time in local tz).

    Porcelain blame prints a full header only for the first line of each run from
    the same commit; the rest arrive with no header. Two things are load-bearing:
    carry the previous owner forward, and take the line number from the header's
    final-line field rather than counting content lines (counting drifts by one and
    quietly reports every stamp against its neighbour's commit).
    """
    out = git(["blame", "--line-porcelain", rev, "--", PATH], repo)
    owner, times = {}, {}
    sha, when, cur = None, None, 0
    for ln in out.splitlines():
        if ln.startswith("\t"):
            if sha and when is not None and cur:
                owner[cur] = sha
                times[cur] = datetime.datetime.fromtimestamp(when, LOCAL)
            cur += 1
            continue
        m = re.match(r"^\^?([0-9a-f]{40}) \d+ (\d+)", ln)
        if m:
            sha, cur = m.group(1), int(m.group(2))
            when = None
            continue
        if ln.startswith("author-time "):
            when = int(ln.split()[1])
    return owner, times

def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    fix = "--fix" in sys.argv
    repo = args[0] if args else "."
    git(["fetch", "-q", "origin"], repo)
    rev = "origin/main"

    owner, times = blame_map(repo, rev)
    lines = git(["show", f"{rev}:{PATH}"], repo).splitlines(True)

    bad, checked = [], 0
    for i, raw in enumerate(lines, 1):
        m = STAMP_ROW.match(raw)
        if not m or i not in times:
            continue
        checked += 1
        y, mo, d = map(int, m.group(1).split("-"))
        hh, mm = map(int, m.group(2).split(":"))
        claimed = datetime.datetime(y, mo, d, hh, mm, tzinfo=LOCAL)
        real = times[i]
        ahead = (claimed - real).total_seconds()
        if ahead > TOLERANCE:
            bad.append((i, m.group(1), m.group(2), real, owner[i], int(ahead // 60)))

    if not bad:
        print(f"OK: {checked} stamps, none ahead of the commit that wrote it")
        return 0

    print(f"FAIL: {len(bad)} of {checked} stamps claim a time later than their own commit")
    for i, date, hhmm, real, sha, mins in sorted(bad, key=lambda b: -b[5]):
        print(f"  line {i}: {date} {hhmm} claimed, {sha[:7]} wrote it {real.strftime('%H:%M')} (+{mins} min)")

    if fix:
        for i, date, hhmm, real, sha, mins in bad:
            lines[i - 1] = lines[i - 1].replace(f"| {date} {hhmm} |",
                                                f"| {date} {real.strftime('%H:%M')} |", 1)
        open(PATH, "w").write("".join(lines))
        print(f"\n--fix: rewrote {len(bad)} stamps to their commit times. Commit and re-run.")
    return 1

if __name__ == "__main__":
    sys.exit(main())
