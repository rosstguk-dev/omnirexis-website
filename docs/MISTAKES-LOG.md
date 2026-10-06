# Omnirexis mistakes log

Correction Bot reads this. Any bot that finds content, a draft, a routine or a doc breaking the live master adds a row here through a PR (or tells CoS if it cannot open one). Newest at the bottom. Times are UK time.

| Date and time (UK) | Who or what | What happened | Master rule and SHA | Fix | Status |
|---|---|---|---|---|---|
| 6 Oct 2026, morning (09:25 pulse) | SuperGrok 09:25 Omnirexis outreach pulse | Raised a false cap-of-10 alert after reading a stale Drive copy of the master. The live cap was 20 a day from Mon 5 Oct 2026. | §5 cap schedule; §0 source rule (no Drive fallback added in PR #31) | Drive mirror re-synced (6 Oct 2026); SuperGrok's Omnirexis tasks archived; 09:25 pulse retired; no-Drive-fallback rule in §0 and §9 | Fixed |
| 5 to 6 Oct 2026 (site changed 5 Oct about 23:45; docs fixed 6 Oct 10:14) | Docs not updated with the site change (master §2 and §7, BOT-BOOTSTRAP.md, MARKETING-FUNDAMENTALS.md, SEO-CONTENT-PLAN.md) | Receptionist and "answers calls" wording stayed in the docs after PR #26 and #27 removed it from the site, so bots could still pitch Voice. | §7 Voice parked (Ross, 5 Oct 2026); fixed at commit dc9b5dc, merge 7b88421 | PR #29 marked Voice parked across the docs and rewrote BOT-BOOTSTRAP.md | Fixed (SEO-CONTENT-PLAN.md keeps older receptionist rows under a Voice-parked note) |
