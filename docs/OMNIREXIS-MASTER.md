# OMNIREXIS MASTER BRIEF

**Status:** live operating brief  
**Last updated:** 18 September 2026, 07:52 BST  
**Owner:** Ross Gallagher  
**How to use:** fetch the live file. Do not paste a snapshot into a bot’s knowledge and treat that snapshot as current.

This document is the company operating system. If a chat, bot, memory, or repo disagrees with the live file, the live file wins until Ross changes it.

---

## 0. Shared source of truth (locked 18 Sep 2026)

There is one master. Not three. Not a copy inside each bot.

**Live file every Grok and every Grok bot must fetch before acting:**

https://raw.githubusercontent.com/rosstguk-dev/omnirexis-website/main/docs/OMNIREXIS-MASTER.md

Human view: https://github.com/rosstguk-dev/omnirexis-website/blob/main/docs/OMNIREXIS-MASTER.md

**Same text, updated in the same turn:**

| Copy | Role |
|---|---|
| GitHub `rosstguk-dev/omnirexis-website/docs/OMNIREXIS-MASTER.md` | Live source. Bots fetch this. |
| This Grok project `artifacts/OMNIREXIS-MASTER.md` | Working copy. Chief of Staff writes here first. |
| Drive folder OMNIREXIS file `OMNIREXIS-MASTER.md` (`1IDYXONMiu6AEQLfs-cd4qS4HpWcpamtB`) | Mirror for phone / Drive-connected bots. |
| Drive Google Doc `OMNIREXIS-MASTER` (`1MZ_YJatwmR3a_O_xh4wTpFG-_gEqcmx2P9_PPiFFsaY`) | Human reading only. If it disagrees, GitHub wins. |

**Who may write**

- Writer: Grok Chief of Staff (this project chat) only.
- Readers: every Grok bot, every new chat, Ross.
- Bots must not keep a private brief, upload a snapshot into bot knowledge, or invent a second stack.

**When a locked rule changes**

1. CoS updates `artifacts/OMNIREXIS-MASTER.md` and the section 10 changelog.
2. CoS pushes the identical file to GitHub `docs/OMNIREXIS-MASTER.md`.
3. CoS overwrites Drive `OMNIREXIS-MASTER.md`.
4. Only then is the rule live.

**If a bot learns a durable fact**

Report it. Do not fork the brief. CoS writes it into this file.

**Before every bot job**

Fetch the GitHub raw URL. If that fails, read Drive `OMNIREXIS-MASTER.md`. If both fail, stop and say so. Do not operate on last week’s memory.

`AGENTS.md` in this project is the long voice / decision document for Chief of Staff only. Bots use this master, not `AGENTS.md`.

---

## 1. What Omnirexis is

UK consultancy. Practical AI and connected systems for operators.

Founder: Ross Gallagher. 15+ years in fitness and operational management.

Slogan: **Intelligence. Automated.**  
Manchester is the registered / postal address only. It is not the brand and it is not part of the slogan.

Promise: the tools do the work. They do not create more of it.

We do not sell vapour. We do not sell the PT platform as live until it is finished. We do not run two outreach engines. We do not edit the leftover website repo.

**Live site:** https://www.omnirexis.co.uk  
**Business email only:** ross@omnirexis.co.uk  
**Book a call only:** https://scheduler.zoom.us/ross-gallagher-ie9whv/30-mins-with-ross  
Never HubSpot Meetings in CTAs or on the site.

Postal: Bartle House, 9 Oxford Court, Manchester, M2 3WQ  
Phone: 0161 250 0045

---

## 2. How money is made (in this order)

1. **First-touch outreach** — 10 personal emails a day from Outlook. Book a 30-min Zoom.  
2. **Strategy call → scoped implementation** — automation, voice, growth systems. Price from the conversation.  
3. **Rapid studio** — fixed-price content and ops docs (Content Sprint £79, Ops Doc Sprint £149, and the other packaged offers on /rapid-services).  
4. **Leisure systems** — club ops software conversation, not a hard sell on first touch.  
5. **PT platform** — not sold as live. Rebuild lives in private GitHub `rosstguk-dev/Omnirexis-PT` (Next.js 15 + Supabase + Stripe). Live/legacy Supabase project is `mzcuztcamkvuvxjodsgy`. Do not create a second project. Do not run fresh init SQL against it until reconciled. Prices in code: Free £0 / 2 clients, Founding £14.99, Solo £17.99, Pro £24.99. ChatGPT-hosted PT app is deprecated. Site `/pt` CTAs go to `/contact?intent=pt-*`.

Do not invent a fifth product line. Do not raise the daily email cap. Do not blast HubSpot marketing email.

---

## 3. Single pathway (no twins)

| Thing | Use this | Do not use |
|---|---|
| Live website | GitHub `rosstguk-dev/omnirexis-website` · Vercel project **omnirexis-website** · www.omnirexis.co.uk | `rosstguk-dev/Omnirexis` · Vercel project **omnirexis** · omnirexis.vercel.app |
| First-touch send | n8n workflow **Omnirexis Branded Outreach** `cugi7YqiP6PjbVp5` | HubSpot marketing send, Gmail, a second chat engine |
| Prospect queue | Google Sheet `1juxShDVfLGxguzWYnFiD35bX2navk6QWHBfbi7sN6ns` tab Outreach Queue | Ad-hoc lists in chat |
| CRM / suppress / send log | HubSpot | HubSpot as a mailer |
| Calendar CTA | Zoom Scheduler Basic (`ross-gallagher-ie9whv`) | HubSpot Meetings |
| Heavy engineering | This Grok chat (Ross + Grok) | Grok bots |
| Light recurring ops | Grok bots only if credits exist | Bots doing n8n edits, DNS, or site deploys |
| Social scheduler | Buffer (Instagram, Facebook, LinkedIn) | Metricool |
| Social media files | `www.omnirexis.co.uk/social/<file>` from `omnirexis-website/public/social` | uguu, catbox, litter.catbox, tmpfiles, gofile, SSO-gated Vercel `omnirexis-social` / `omnirexis-cdn` |

If you are about to touch the leftover `Omnirexis` repo for a site change: stop.

---

## 4. Agent roster (roles, not a swarm)

Do **not** spawn a new team of Grok bots. Credits already ran out once and outreach stopped.

### A. Ross
Approves copy when needed. Owns price. Owns “go send” if the scheduled run failed. Final call on products.

### B. Grok Chief of Staff (this chat)
Does the heavy work:

- Diagnose and fix n8n
- Website changes on `omnirexis-website` only
- DNS / deliverability guidance
- Architecture decisions
- Update **this master file** whenever a rule changes
- Challenge weak ideas
- Surface broken auth and commercial-path failures immediately. Do not wait to be asked.

Does not burn bot credits on daily busywork.

### Break-glass (locked 17 Sep 2026)

Ross granted standing operational permission for this chat.

If anything that runs Omnirexis is broken or about to break — expired connector, n8n error on a live workflow, empty Approved queue, send path silent, Buffer/media host expiring, site deploy red, DNS/auth fail — Grok must:

1. Tell Ross immediately. Lead with the break. Do not bury it in a status essay.
2. Fix everything that can be fixed without his click.
3. If the only remaining step is human OAuth / a vendor login / money / irreversible delete, put the reauth card or the single click in front of him in the same message and resume the moment it is done.

Do not wait for the next morning agenda. Do not treat “connector needs re-authentication” as a footnote.

Hard limits that still need a Ross click: Microsoft/Google/n8n/HubSpot OAuth screens, spending money, deleting production data, legal commitments.

**Approve-and-send is standing (locked 17 Sep 2026).** Grok does not wait for “go send”. If the 09:15 run has Approved rows that pass the existing gates, send. If the Approved pile is empty, Grok may promote Draft rows that already pass the gates (real first name, business mailbox, verified, DNC clear, not HubSpot-contacted, not PT-platform pitch) up to the daily cap of 10, then send. Do not raise the cap. Do not resend a Sent row.

### Daily fill + daily send (locked 17 Sep 2026)

08:00 Europe/London — Grok automation **Omnirexis daily prospecting** `aaa42891-a2ce-4d10-9fec-7d6dc210bd8f` tops the sheet to 10 gated Approved rows.

09:15 Europe/London — n8n **Omnirexis Branded Outreach** sends up to 10.

09:25 — outreach pulse. If 09:15 mailed zero, Grok refills and sends the same day if cap remains.

n8n **Omnirexis Prospecting Agent** `6oSGzXqhkOTmS4Eu` stays unpublished. It is only the sheet-append machine for Grok’s named batch. Do not turn its OpenAI 08:00/14:00 schedule on.

### C. n8n “Outreach Runner” (machine, not a bot)
Workflow `cugi7YqiP6PjbVp5`, schedule 09:15 Europe/London.

Gate: Status = Approved, Email Verified = Yes, DNC Clear, Approved By Ross, greeting is a real first name, not a consumer mailbox, not on HubSpot last-contacted.

Cap: 10 first-touch / day. Marks sheet Sent. Logs contact in HubSpot.

Live trigger on this workflow is **only** Daily Outreach Trigger. The four leftover ChatGPT webhooks (prospect intake, branded reply, branded follow-up, branded test email) are disabled. Do not turn them back on.

n8n Cloud is Starter (2,500 executions/month). Do not add polling schedules. PT Automatic Reply Stop stays off while PT sequences are paused. Client onboarding closed-won check is daily at 10:10 Europe/London, not hourly.

### D. Light ops bot (only when credits exist)
Allowed: “did today’s 10 send?”, “how many Approved left?”, “summarise replies in Outlook”.  
Forbidden: edit workflows, publish site, change DNS, send extra batches, rewrite copy.

### E. Do not create
- A second outreach agent in chat
- A HubSpot send agent
- A “growth hacker” bot that raises volume
- Bots that all do the same job

---

## 5. Outreach rules (locked 14 Sep 2026, copy tightened 17 Sep 2026)

- From: ross@omnirexis.co.uk via Outlook / Microsoft 365  
- Cap 10 / day  
- Real first names only  
- PT-product outreach paused  
- Footer: reply stop and we will not email again  
- Template (live): logo banner (`https://www.omnirexis.co.uk/og.jpg`), body from sheet, blue **Book a free strategy call** button to Zoom, structured sign-off  
- Do not resend a batch because the footer looked ugly  
- Sheet filter should treat “already has Sent At” as done (add empty-Sent-At filter when next editing the Get Rows node)

### First-touch copy (locked 17 Sep 2026)

The sheet body is the email. The HTML wrapper already adds the Zoom button and Ross’s sign-off. Do not put either in the body.

Write like Ross, not like a sequence:

1. Subject is a specific observation about *their* operation. Never “X enquiries”, “content/ops”, or “a practical automation idea”.
2. Open `Hi FirstName,` then two or three short paragraphs.
3. Paragraph 1: a fact only true of that business (named room, offer mix, who emails them, when they teach).
4. Paragraph 2: the leak that fact creates (enquiry dies while they coach, too many doors into one inbox, class-fit question *is* the sale).
5. Paragraph 3: what Omnirexis actually does for that leak, in plain English. No prices. No Content Sprint / Ops Doc menu. No “if useful”.
6. Do not invent awards, staff names, or services that are not on their site.
7. Two emails in the same batch must not share a skeleton with the town swapped.

### DNS / deliverability (14 Sep 2026)

- MX: Microsoft 365  
- SPF should be: `v=spf1 include:spf.protection.outlook.com include:secureserver.net -all`  
- DKIM: Microsoft signing on for omnirexis.co.uk (selector1 / selector2 CNAMEs at GoDaddy)  
- DMARC: `p=quarantine` for now  
- Test to Gmail landed in Inbox, not spam

### Social (locked 15 Sep 2026)

- Scheduler is **Buffer**. Metricool is abandoned.
- Channels: Instagram `omnirexis`, Facebook `Omnirexis`, LinkedIn `omnirexis`.
- Buffer Grok connector is connected (16 Sep 2026). GraphQL also works when a personal key named `grok` is available. Do not store the key in this file, GitHub, or chat memory.
- n8n workflow `FiW8OghuYwHGs3WF` (Omnirexis Buffer — Today Queue) is a manual reader stub only. Do not add a polling schedule. Do not use it to publish.
- Weekly social is run from **this Chief of Staff chat**, not a second Grok bot and not Metricool.
- Cadence: **three Grok Imagine videos per week, maximum**. 10–15 seconds or longer, with sound and Omnirexis branding. Same video goes to Instagram, Facebook and LinkedIn.
- Branding lock (15 Sep 2026): overlay **only** Drive folder `Logo Files/png/Color logo - no background.png`. Dark scenes may use `White logo - no background.png`. **Never** use `Color logo with background.png`, `og.jpg`, or any invented lockup. Imagine prompts must not draw a logo — stamp the Drive PNG after.
- Slots (Europe/London): **Tue 12:00, Thu 12:00, Sat 09:00** feed. Do not stack a second **feed** post on the same channel the same calendar day.
- **Duplicate lock (17 Sep 2026):** one feed item per channel per calendar day. Never still + video on the same feed day. Never `shareNow` a replacement if that caption already sent today. Quality fixes edit the scheduled row only. Live duplicates on IG/FB/LI can only be deleted in the native apps. Stories at 18:00 are a separate lane and do not count as a second feed post.
- **Stories:** daily 10s 9:16 video, IG+FB at 18:00 Europe/London, separate creative from feed. LinkedIn feed only. Saturday IG may use the Zoom link sticker. Do not cut Stories from feed videos. Do not shareNow a Story that already exists as a scheduled row.
- **Story media lock:** 9:16 only. Never `tonight-2026-09-11/video-tonight-fresh.mp4` (navy square top-right from a failed logo composite). Never landscape week-14 `video-v2.mp4` / `video-v3.mp4`. Never boxed og.jpg lockups. Overlay only `Color logo - no background.png` (or white on dark). Check the first frame before Buffer.
- **Durable media host (locked 18 Sep 2026):** `https://www.omnirexis.co.uk/social/<filename>`. Files live in `omnirexis-website/public/social`. Ingest is GitHub Action `.github/workflows/ingest-social.yml` reading `public/social/manifest.json`. Add a row to the manifest and dispatch the Action — do not hand-push binaries through the GitHub connector. `omnirexis-social-assets` is a leftover text repo, not the live host.
- This chat cannot mint Imagine video files itself. Ross generates the three clips in Grok Imagine, drops them here. Grok writes captions, pushes files, schedules Buffer, then reports the week grid.
- Command to run the week: **“week pack”**.
- n8n **Omnirexis PT — Weekly Consent-Led Content** `JGeQxlShSsRTfH7d` is unpublished. It sold the unfinished PT platform and the old ChatGPT PT URL. Do not turn it back on.
- Never use `litter.catbox.moe`, `uguu.se`, `tmpfiles.org`, or `gofile.io` for Buffer. They die. Vercel project `omnirexis-social` and the 18 Sep probe project `omnirexis-cdn` are SSO-gated — Buffer cannot fetch them.
- Live Buffer queue (18 Sep 07:50 BST) points at the durable `/social` URLs. Fri 12:00 feed `fri-feed-v2-1080.mp4`. Fri 18:00 Stories `fri-story-later-1080.mp4`. Sat 09:00 feed `sat-feed-v3-1080.mp4`. Sat 18:00 Stories `sat-story-answered-1080.mp4`. Quality: 1080×1920 High Profile +faststart before Buffer.
- Capability-first: do not stop at a connector limit. Binaries go through the ingest Action. Buffer edits use the connector `edit_post` on the scheduled row only. Do not ask Ross to click Buffer.
- Social tone lock (15 Sep 2026): specific, dry, a bit funny. Real rooms and real problems. No cyan particle waves, no price-list posts, no “practical AI for operators.” CTA Saturday only unless Ross changes it.
- This week stills (load today): Tue 15 17:30 eleven missed · Wed 16 12:00 called while working · Thu 17 12:00 not a CRM · Fri 18 12:00 follow-up is not a personality trait · Sat 19 09:00 they booked the place that answered + Zoom.
- Next week videos: Ross generates in Imagine with the prompts in that captions file, drops raw 9:16 clips here, Grok stamps Drive colour lockup. Tue 22 / Thu 24 / Sat 26.

---

## 6. Website rules

- Only edit `rosstguk-dev/omnirexis-website`  
- Vercel project to watch: **omnirexis-website**  
- After a push, wait for that project’s green Ready row, then hard-refresh www  
- Book-a-call buttons = Zoom Scheduler only  
- Keep the brand: navy / cyan, official lockup, slogan **Intelligence. Automated.**  
- Do not prefix the slogan with Manchester  
- No dumped orphan text in the hero  
- Hero right-hand blurbs sit in a card labelled “What we actually do” (committed 14 Sep 2026)
- Durable Buffer media lives in `public/social/`. Do not delete that folder. After ingest, confirm `www.omnirexis.co.uk/social/<file>` returns `video/mp4` before pointing Buffer at it.

---

## 7. Product truth

| Offer | Status |
|---|---|
| Automation / implementation | Live, scoped per call |
| Voice / receptionist | Live conversation, not a fake “platform launch” |
| Growth systems | Live conversation |
| Rapid studio (content / ops docs) | Live, fixed price |
| Leisure systems | Live conversation |
| PT platform | Rebuild in `rosstguk-dev/Omnirexis-PT`. Not on Vercel. Do not sell as live. Old ChatGPT app deprecated |
| Book SIGNAL ZERO | Separate personal brand. Do not mix into Omnirexis first-touch |

---

## 8. Working rules for any AI

1. Smallest safe change.  
2. Do not break a working send path.  
3. Do not create a second system “just in case”.  
4. Test, then document the change in section 10 of this file.  
5. Ask before publishing a new product or deleting a repo. Do not ask before a gated first-touch batch — standing send authority 17 Sep 2026.  
6. Never use rosstguk@gmail.com as a business from-address.  
7. Talk sense. No theatre.

---

## 9. Handover / bot boot (paste this — then fetch the live file)

```
You work on Omnirexis for Ross Gallagher.

Before any job, fetch the live master and obey it:
https://raw.githubusercontent.com/rosstguk-dev/omnirexis-website/main/docs/OMNIREXIS-MASTER.md

If GitHub is blocked, read Drive file OMNIREXIS-MASTER.md in folder OMNIREXIS
(id 1NIbvKJLFc7fdEzMCotmY0jlvoOAhA0sQ).

That file is the only source of truth. Do not invent a second stack.
Do not keep a private copy. Do not treat a pasted snapshot as current.

Live site repo: rosstguk-dev/omnirexis-website
Live domain: www.omnirexis.co.uk
Live send: n8n workflow cugi7YqiP6PjbVp5, 10 first-touch emails/day from ross@omnirexis.co.uk
Queue sheet: 1juxShDVfLGxguzWYnFiD35bX2navk6QWHBfbi7sN6ns
Book-a-call: Zoom Scheduler ross-gallagher-ie9whv
Social: Buffer, not Metricool
Social media files: https://www.omnirexis.co.uk/social/ — never uguu or catbox
Do not touch repo rosstguk-dev/Omnirexis for website work.
Do not send HubSpot marketing email.
Do not sell the PT platform as live.
Do not raise the daily cap.
Do not edit n8n, DNS, or the live site unless you are the Chief of Staff chat.
If you learn a durable fact, report it. Only Chief of Staff writes the master.
```

---

## 10. Change log

| When | What |
|---|---|
| 2026-09-14 | Morning scheduled send failed (sanitise JS). Catch-up of 10 sent 14:55 BST after Ross said “Go send”. |
| 2026-09-14 | SPF updated to include Outlook. DKIM keys created and enabled in Microsoft 365. Gmail test landed in Inbox. |
| 2026-09-14 | First-touch HTML: keep og.jpg banner, add Zoom button + structured signature. Sanitise no longer flattens line breaks. |
| 2026-09-14 | Website hero card added on production repo `omnirexis-website`. Leftover repo `Omnirexis` marked do-not-use. |
| 2026-09-14 | This master brief created. One pathway rule locked. |
| 2026-09-14 | Slogan locked as Intelligence. Automated. Manchester is postal only, not brand. |
| 2026-09-15 | Social scheduler locked as Buffer. Metricool abandoned. Live week queue documented. |
| 2026-09-15 | Weekly social loop locked in this chat: 3 Imagine videos, Tue 12:00 / Thu 12:00 / Sat 09:00. PT Monday content pack unpublished. |
| 2026-09-16 | Stories locked: one IG+FB Story per feed day, same still, +15 min, Saturday Zoom sticker only. LinkedIn feed only. |
| 2026-09-16 | Stories revised: daily 10s video Story, IG+FB, 18:00 London, separate from feed. Still-copy Stories pulled from Buffer. |
| 2026-09-15 | Live Tue 12:00 Reel used a boxed lockup. Official Drive PNGs copied to `artifacts/brand`. Video overlay is `Color logo - no background.png` only. |
| 2026-09-15 | Buffer emptied. New still pack + Imagine prompts in `artifacts/week-2026-09-15`. Tone: dry and specific, not corporate waves. |
| 2026-09-17 | Break-glass locked: tell Ross immediately if auth dies or a commercial path breaks; fix what can be fixed; only bounce the unavoidable click. |
| 2026-09-17 | Standing send authority: Grok approves and sends gated first-touch without asking. Catch-up exec 2333 sent 8. |
| 2026-09-17 | Social video quality: noon Reels were 720×1280 so IG/FB looked downscaled. HQ 1080×1920 encodes in `artifacts/week-2026-09-15/hq`. Remaining Buffer queue swapped. Feed videos must be 1080×1920 before Buffer. |
| 2026-09-17 | Duplicate lock: Thu feed went out three times (tmpfiles 12:46, 720p uguu 12:57, HQ 17:02). Never shareNow a caption that already sent that day. One feed post per channel per day. |
| 2026-09-17 | Stories paused. 18:00 Story was a chopped recycle of feed footage. Fri+Sat Story rows deleted. Do not cut Stories from feed videos. Stories off until Ross supplies unused 9:16 Story clips. |
| 2026-09-18 | Shared-source lock: one live master. GitHub raw is what every Grok and every bot fetches. CoS is the only writer. Drive and this project are mirrors updated in the same turn. Snapshots in bot knowledge are forbidden. |
| 2026-09-18 | Durable social host locked: `www.omnirexis.co.uk/social`. Ingest Action `ingest-social.yml` + `public/social/manifest.json` commits the binaries. Buffer Fri/Sat feed + Stories swapped off dead uguu onto those URLs. Never uguu / catbox / litter / tmpfiles / gofile. Vercel `omnirexis-social` and `omnirexis-cdn` stay SSO-gated. |

---

## 11. Where this file lives

See section 0. Short version:

1. GitHub raw — live fetch for every AI  
2. This project `artifacts/OMNIREXIS-MASTER.md` — CoS writes first  
3. Drive `OMNIREXIS-MASTER.md` — mirror  

If copies drift, the GitHub file with the newest section-10 date wins, then Ross. Do not invent a fourth copy.

---

## 12. Next useful work (do not boil the ocean)

1. Friday 09:15 should send the 10 named rows loaded 17 Sep (NW-FIT-051–060). Keep prospecting ahead of the queue; do not reactivate the Prospecting Agent 08:00/14:00 schedule.  
2. Add “Sent At is empty” to the sheet read so old Approved rows cannot resend.  
3. After a week of PASS auth, consider DMARC `p=reject`.  
4. Keep Zoom Scheduler Basic upgraded before 23 Oct 2026.  
5. Finish PT platform before anyone sells it.  
6. Do not hire a swarm of new bots until credits are stable.  
7. After this week’s Buffer queue runs, refill next week in Buffer — do not invent a second scheduler. Put next week’s clips in `public/social/manifest.json` and dispatch `ingest-social.yml` before scheduling.
