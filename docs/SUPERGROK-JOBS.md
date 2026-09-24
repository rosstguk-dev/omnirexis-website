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

### JOB-001 (added 24 Sep 2026 23:15, CoS): apply Ross's 23:06 power lock to the master
If not already applied from Ross's pasted prompt, update OMNIREXIS-MASTER (sections 4B, 4C, the ownership table, the master write rules, and the "Do not change DNS or the live site unless you are SuperGrok" line), and add a changelog row:
- CoS holds full operating authority and reports only to Ross.
- CoS may edit and rebuild n8n (credit-efficient), publish and change the live site (omnirexis-website, Vercel, Cloudflare), and change DNS. It records the before state, verifies live after, and rolls back on breakage.
- CoS has last write on the master (GitHub plus the Drive mirror). SuperGrok may still draft.
- SuperGrok is a specialist for high-credit or heavy jobs only when CoS or Ross calls on it. It has no standing ownership, approval role or last write.
- CoS may create or retire specialist bots when it benefits Omnirexis. No duplicates. No second outreach engine.
- Hard stops (Ross 23:11): CoS owns production deletes (backup first) and vendor logins with saved credentials; only 2FA, passkey or OAuth consent goes to Ross. Payments need Ross's yes. CoS never signs legal terms.
- Also add this job-list workflow to the master as the CoS-to-SuperGrok handoff channel.
**Done when:** the master on GitHub and Drive shows all of the above. Put the commit link under Done.

---

## Done

_(nothing yet)_
