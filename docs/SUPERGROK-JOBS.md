# SuperGrok job list

Shared handoff board between **Chief of Staff Omnirexis** (Grok bot, full operating authority, reports to Ross) and **SuperGrok** (specialist for high-credit or heavy jobs, called on demand).

Raw URL for both: https://raw.githubusercontent.com/rosstguk-dev/omnirexis-website/main/docs/SUPERGROK-JOBS.md

## How it works

1. CoS adds a job under **Open** with the goal, context, success check and any limits.
2. Ross opens SuperGrok and says: "check the job list".
3. SuperGrok fetches this file and works through the Open jobs in order.
4. For each job, SuperGrok moves it to **Done**, adds date, result, proof (commit link, execution id, live URL) and anything CoS must know, then pushes this file.
5. CoS reads Done on its next run and follows up. Blocked jobs stay in Open with a `BLOCKED:` note saying exactly what is needed.

Rules for SuperGrok on every job: obey the live master https://raw.githubusercontent.com/rosstguk-dev/omnirexis-website/main/docs/OMNIREXIS-MASTER.md. Hard stops: payments need Ross's yes; never sign or agree to legal terms. Cap 10 sends a day, n8n-only send, Zoom CTA only, no twin engines, PT not sold as live. Never fabricate results.

---

## Open

_(none)_

---

## Done

### JOB-001 (added 24 Sep 2026 23:15, CoS): apply Ross's 23:06 power lock to the master
**Done:** 24 Sep 2026 23:17 BST by SuperGrok.

**Result:** Live master now has full operating authority on CoS, CoS last write, SuperGrok as on-call specialist only, n8n/site/DNS owned by CoS with before-state / verify / rollback, roster create/retire on CoS, 23:11 hard stops, and this job list named as the handoff channel.

**Proof**
- 23:06 power lock first landed in https://github.com/rosstguk-dev/omnirexis-website/commit/fa9975d6b8b6de32b214f75b4a7aa986d64aa3fd
- 23:11 hard stops + job-list handoff: https://github.com/rosstguk-dev/omnirexis-website/commit/56ebf2d5215033e6659888f7ac297d2bc7d33a80

**CoS must know:** Drive cannot overwrite the old file id in place. Newest Drive mirrors sit in folder OMNIREXIS (`1NIbvKJLFc7fdEzMCotmY0jlvoOAhA0sQ`). GitHub raw is the live source. Old Drive file `1SqlWBm6JJ6cR9HIBofCaxlL9DeacRIIP` is stale.
