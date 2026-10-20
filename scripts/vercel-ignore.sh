#!/usr/bin/env bash
# Vercel "Ignored Build Step" for omnirexis-website.
# Exit 0 = SKIP the build, exit 1 = BUILD.
#
# DEPLOY FREEZE (until 27 Oct 2026, UK date), to save Vercel credit:
#   - Preview builds: always skipped.
#   - Production: builds ONLY when the commit message contains [daily-deploy].
#     .github/workflows/daily-deploy.yml pushes that commit once a day at 16:00 UK
#     if anything has been merged since the last one. Urgent deploy: run that
#     workflow manually (workflow_dispatch), or push a commit whose message
#     contains [daily-deploy].
# From 27 Oct 2026 the script goes back to normal on its own: it builds everything
# except commits that only touch public/social/ and/or docs/.
# Fail-safe: in production, anything unexpected means BUILD.
#
# Revert early: change FREEZE_END below, or set the project's Ignored Build Step
# back to:  git diff --quiet HEAD^ HEAD -- . ':(exclude)public/social' ':(exclude)docs'

FREEZE_END="2026-10-27"
today="$(TZ=Europe/London date +%F 2>/dev/null)"
env="${VERCEL_ENV:-}"
msg="${VERCEL_GIT_COMMIT_MESSAGE:-}"

if [ -n "$today" ] && [[ "$today" < "$FREEZE_END" ]]; then
  if [ "$env" != "production" ]; then
    echo "Freeze: skipping non-production ($env) build."
    exit 0
  fi
  if [ -z "$msg" ]; then
    echo "Freeze: no commit message available, so building (fail-safe)."
    exit 1
  fi
  if printf '%s' "$msg" | grep -qF '[daily-deploy]'; then
    echo "Freeze: [daily-deploy] commit, so building."
    exit 1
  fi
  echo "Freeze: production commit without [daily-deploy], so skipping until the daily batch."
  exit 0
fi

# Normal mode: skip only when nothing outside public/social and docs changed.
if git diff --quiet HEAD^ HEAD -- . ':(exclude)public/social' ':(exclude)docs' 2>/dev/null; then
  echo "Only public/social and/or docs changed, so skipping."
  exit 0
fi
echo "Building."
exit 1
