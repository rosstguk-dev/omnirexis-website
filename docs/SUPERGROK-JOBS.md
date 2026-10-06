**RETIRED 6 Oct 2026 (Ross).** This board is closed. CoS does not hand Omnirexis jobs to SuperGrok. SuperGrok runs no Omnirexis scheduled tasks, reports or emails, and does not touch Drive, Sheets, n8n or accounts unless Ross asks it directly. Everything runs through CoS. Live rules: https://github.com/rosstguk-dev/omnirexis-website/blob/main/docs/OMNIREXIS-MASTER.md (§0, §3, §4C).

# SuperGrok job list (retired)

Kept for history only. Do not add jobs here and do not act on anything below.

---

## Done

### JOB-001 (added 24 Sep 2026 23:15, CoS): apply Ross's 23:06 power lock to the master
**Done:** 24 Sep 2026 23:17 BST by SuperGrok.

**Result:** Live master now has full operating authority on CoS, CoS last write, SuperGrok as on-call specialist only, n8n/site/DNS owned by CoS with before-state / verify / rollback, roster create/retire on CoS, 23:11 hard stops, and this job list named as the handoff channel.

**Proof**
- 23:06 power lock first landed in https://github.com/rosstguk-dev/omnirexis-website/commit/fa9975d6b8b6de32b214f75b4a7aa986d64aa3fd
- 23:11 hard stops + job-list handoff: https://github.com/rosstguk-dev/omnirexis-website/commit/56ebf2d5215033e6659888f7ac297d2bc7d33a80

**CoS must know:** Drive cannot overwrite the old file id in place. Newest Drive mirrors sit in folder OMNIREXIS (`1NIbvKJLFc7fdEzMCotmY0jlvoOAhA0sQ`). GitHub raw is the live source. Old Drive file `1SqlWBm6JJ6cR9HIBofCaxlL9DeacRIIP` is stale.
