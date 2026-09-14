# OMNIREXIS MASTER BRIEF

**Status:** live operating brief  
**Last updated:** 14 September 2026, 15:50 BST  
**Owner:** Ross Gallagher  
**How to use:** paste this whole file into any AI and say “this is the single source of truth. Do not invent a second stack.”

This document is the company operating system. If a chat, bot, or repo disagrees with this file, this file wins until Ross changes it.

---

## 1. What Omnirexis is

UK consultancy. Practical AI and connected systems for operators.

Founder: Ross Gallagher. Manchester. 15+ years in fitness and operational management.

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
5. **PT platform** — not sold as live. Free plan exists for two clients when the new platform is ready. ChatGPT-hosted PT app is deprecated.

Do not invent a fifth product line. Do not raise the daily email cap. Do not blast HubSpot marketing email.

---

## 3. Single pathway (no twins)

| Thing | Use this | Do not use |
|---|---|---|
| Live website | GitHub `rosstguk-dev/omnirexis-website` · Vercel project **omnirexis-website** · www.omnirexis.co.uk | `rosstguk-dev/Omnirexis` · Vercel project **omnirexis** · omnirexis.vercel.app |
| First-touch send | n8n workflow **Omnirexis Branded Outreach** `cugi7YqiP6PjbVp5` | HubSpot marketing send, Gmail, a second chat engine |
| Prospect queue | Google Sheet `1juxShDVfLGxguzWYnFiD35bX2navk6QWHBfbi7sN6ns` tab Outreach Queue | Ad-hoc lists in chat |
| CRM / suppress / send log | HubSpot | HubSpot as a mailer |
| Calendar CTA | Zoom Scheduler Basic (`ross-gallagher-ie9whv`) | HubSpot Meetings |
| Heavy engineering | This Grok chat (Ross + Grok) | Grok bots |
| Light recurring ops | Grok bots only if credits exist | Bots doing n8n edits, DNS, or site deploys |

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

Does not burn bot credits on daily busywork.

### C. n8n “Outreach Runner” (machine, not a bot)
Workflow `cugi7YqiP6PjbVp5`, schedule 09:15 Europe/London.

Gate: Status = Approved, Email Verified = Yes, DNC Clear, Approved By Ross, greeting is a real first name, not a consumer mailbox, not on HubSpot last-contacted.

Cap: 10 first-touch / day. Marks sheet Sent. Logs contact in HubSpot.

### D. Light ops bot (only when credits exist)
Allowed: “did today’s 10 send?”, “how many Approved left?”, “summarise replies in Outlook”.  
Forbidden: edit workflows, publish site, change DNS, send extra batches, rewrite copy.

### E. Do not create
- A second outreach agent in chat
- A HubSpot send agent
- A “growth hacker” bot that raises volume
- Bots that all do the same job

---

## 5. Outreach rules (locked 14 Sep 2026)

- From: ross@omnirexis.co.uk via Outlook / Microsoft 365  
- Cap 10 / day  
- Real first names only  
- PT-product outreach paused  
- Footer: reply stop and we will not email again  
- Template (live): logo banner (`https://www.omnirexis.co.uk/og.jpg`), body from sheet, blue **Book a free strategy call** button to Zoom, structured sign-off  
- Do not resend a batch because the footer looked ugly  
- Sheet filter should treat “already has Sent At” as done (add empty-Sent-At filter when next editing the Get Rows node)

### DNS / deliverability (14 Sep 2026)

- MX: Microsoft 365  
- SPF should be: `v=spf1 include:spf.protection.outlook.com include:secureserver.net -all`  
- DKIM: Microsoft signing on for omnirexis.co.uk (selector1 / selector2 CNAMEs at GoDaddy)  
- DMARC: `p=quarantine` for now  
- Test to Gmail landed in Inbox, not spam

---

## 6. Website rules

- Only edit `rosstguk-dev/omnirexis-website`  
- Vercel project to watch: **omnirexis-website**  
- After a push, wait for that project’s green Ready row, then hard-refresh www  
- Book-a-call buttons = Zoom Scheduler only  
- Keep the brand: navy / cyan, official lockup, no dumped orphan text in the hero  
- Hero right-hand blurbs sit in a card labelled “What we actually do” (committed 14 Sep 2026)

---

## 7. Product truth

| Offer | Status |
|---|---|
| Automation / implementation | Live, scoped per call |
| Voice / receptionist | Live conversation, not a fake “platform launch” |
| Growth systems | Live conversation |
| Rapid studio (content / ops docs) | Live, fixed price |
| Leisure systems | Live conversation |
| PT platform | Not finished. Do not sell as live. Old ChatGPT app deprecated |
| Book SIGNAL ZERO | Separate personal brand. Do not mix into Omnirexis first-touch |

---

## 8. Working rules for any AI

1. Smallest safe change.  
2. Do not break a working send path.  
3. Do not create a second system “just in case”.  
4. Test, then document the change in section 10 of this file.  
5. Ask before sending live email, publishing a new product, or deleting a repo.  
6. Never use rosstguk@gmail.com as a business from-address.  
7. Talk sense. No theatre.

---

## 9. Handover prompt (paste into the next AI)

```
You are taking over Omnirexis for Ross Gallagher.

Read OMNIREXIS-MASTER.md first. It is the only source of truth.

Live site repo: rosstguk-dev/omnirexis-website
Live domain: www.omnirexis.co.uk
Live send: n8n workflow cugi7YqiP6PjbVp5, 10 first-touch emails/day from ross@omnirexis.co.uk
Queue sheet: 1juxShDVfLGxguzWYnFiD35bX2navk6QWHBfbi7sN6ns
Book-a-call: Zoom Scheduler ross-gallagher-ie9whv
Do not touch repo rosstguk-dev/Omnirexis for website work.
Do not send HubSpot marketing email.
Do not sell the PT platform as live.
Do not raise the daily cap.
Update this master file whenever a locked rule changes.
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

---

## 11. Where this file lives

Keep all three in sync when the brief changes:

1. Google Drive folder **OMNIREXIS** (`1NIbvKJLFc7fdEzMCotmY0jlvoOAhA0sQ`) — Google Doc copy  
2. GitHub `rosstguk-dev/omnirexis-website/docs/OMNIREXIS-MASTER.md`  
3. Local / chat export Ross can download

If they drift, the newest dated changelog in section 10 wins, then Ross.

---

## 12. Next useful work (do not boil the ocean)

1. Confirm www shows the hero card (Vercel **omnirexis-website** deploy green).  
2. Add “Sent At is empty” to the sheet read so old Approved rows cannot resend.  
3. After a week of PASS auth, consider DMARC `p=reject`.  
4. Keep Zoom Scheduler Basic upgraded before 23 Oct 2026.  
5. Finish PT platform before anyone sells it.  
6. Do not hire a swarm of new bots until credits are stable.
