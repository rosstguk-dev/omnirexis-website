#!/usr/bin/env bash
# Vercel "Ignored Build Step" for omnirexis-website.
# Exit 0 = SKIP the build, exit 1 = BUILD.
#
# Skip only when every file changed in the commit is under docs/.
# Anything else (including public/social/) builds. Anything unexpected builds.
# (The 2026 deploy freeze ended 30 Oct 2026 and has been removed.)

files="$(git diff --name-only HEAD^ HEAD 2>/dev/null)" || { echo "No diff available, so building."; exit 1; }
if [ -n "$files" ] && ! printf '%s\n' "$files" | grep -qv '^docs/'; then
  echo "Only docs/ changed, so skipping."
  exit 0
fi
echo "Building."
exit 1
