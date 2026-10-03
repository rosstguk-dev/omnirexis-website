# OMNIREXIS SEO keyword map, page briefs and 6-week content plan

**Owner:** Brand & Social for Ross Gallagher · **Written:** Sat 3 Oct 2026 (BST) · **Status:** draft for Product, Client Delivery and Finance & Quality. Nothing here is live until it is built, checked and published.

**Changelog**
- 3 Oct 2026: Finance & Quality QC fixes applied (re-QC pending); Voice kicker wording from Client Delivery.
- 3 Oct 2026: F&Q re-QC fixes R1-R6 applied.
- 3 Oct 2026: PT claims trimmed to app-confirmed features (no packs, remaining sessions, overdue check-ins, notes or messaging); P9 reframed.
- 3 Oct 2026: Client Delivery preview-check wording aligned (calendar condition on booking, studio hero line, "repeats themselves less", action view, mock-up tile).

**Mission line (use word for word):** Omnirexis gives fitness and leisure businesses their time back. Every enquiry answered, every lead followed up, every booking made, so you can focus on your clients while your business keeps growing.

**Tagline:** Intelligence. Automated.

---

## 1. Intro

**Purpose.** Give every existing and proposed page one clear search phrase, so pages do not compete with each other. Then plan 12 helpful posts over 6 weeks that answer questions gym, studio and PT owners already type into Google, and link each post to the page that solves the problem.

**Who it is for.** Independent UK gym owners and managers, Pilates and yoga studio owners, leisure operators and personal trainers. North of England first (master §1A). Not the general public: we are not trying to rank for people looking for a class or a trainer.

**Sources (all read 3 Oct 2026)**
- Sales' sourced term list, 72 terms: `ops/sales-crm/seo-search-terms-2026-10-03.md`, plus the raw autocomplete log `seo-autocomplete-raw-2026-10-03.txt`. `#` numbers below are Sales' row numbers, and source tags are carried over from that list.
- Live master `docs/OMNIREXIS-MASTER.md` (last updated 3 Oct 2026 10:10) and `docs/MARKETING-FUNDAMENTALS.md`. Where they disagree, the master wins.
- Site source on `main` of `rosstguk-dev/omnirexis-website` (commit 172dafe; titles changed by #13, #15, #16 after 55b5525): `src/routes/*`, `src/lib/site.ts`, `src/lib/page-seo.ts`, `public/sitemap.xml`. Live titles were checked against https://omnirexis-website.vercel.app on 3 Oct 2026, and were re-checked on www at 172dafe.

**Rules this plan follows**
- Every claim must be checkable on the live site, the PT app or the master. Anything else goes in a "claims to verify" list.
- No invented clients, results, reviews, testimonials, statistics, search volumes or addresses.
- PT: only the **Free plan** (£0, up to 2 active clients, self-serve signup at https://omnirexis-pt.vercel.app/signup via omnirexis.co.uk/pt). Never paid plans, prices or billing. Never "trial". Do not claim or describe a client portal or client login.
- Service CTA: the free 30-minute Zoom strategy call, https://scheduler.zoom.us/ross-gallagher-ie9whv/30-mins-with-ross . Public email: hello@omnirexis.co.uk. Never HubSpot links.
- Lead follow-up automation is **scoped work, priced on a call**. No price, turnaround or set package on that page.
- "Gym CRM" is a supporting phrase only, on the lead follow-up page. Write it as "the CRM you already use", never as an Omnirexis gym CRM (a gym CRM product is parked, master §2).
- No pages built around WhatsApp or "gym missed calls" (no evidence).
- Booking-system phrases: Omnirexis is the automation **around** enquiries and bookings. It is not a booking system.
- Brand voice: plain UK English, no em or en dashes, no hype words.

**Caveats**
- **No search volumes.** None of the free sources show volume. An autocomplete suggestion only proves that people search a phrase, not how often. Suggestions marked [tail] are weaker still.
- Autocomplete was pulled from a box that geolocates to Manchester, so local variants lean Greater Manchester.
- Outreach-pain counts show what *we* wrote about in 99 prospect emails. They are not prospect-confirmed pains: we have no replies or objections yet.
- No keyword difficulty data. The PT app terms and booking-system terms are crowded with established vendors, so expect slow progress on head terms. The posts are the realistic early wins.

**Fixed-price offers (Client Delivery, 3 Oct 2026).** The Content Sprint, Operations Document Sprint and Content Engine live on /rapid-services. No Sales term maps to them, so they are not SEO targets this round, and no brief here quotes their prices or turnarounds. **Flag:** the master names the Content Sprint (£79) and the Ops Doc Sprint (£149) and covers "the other packaged offers on /rapid-services", but does not state the Content Engine price. The live site (`src/lib/site.ts`) shows the Content Engine at £349 per month. Content Engine £349/month confirmed by Ross 3 Oct 2026; CoS to add to master.

### Parked: local pages

There are **no local pages (Manchester, Leeds or elsewhere) in this plan.** Sales found no evidence of owner-side local searches: "gym lead follow up manchester" and similar phrases returned no suggestions. Every local phrase with suggestions is consumer intent ("reformer pilates manchester", "personal trainer leeds"). Those searchers want a class or a trainer, and the studios themselves will outrank us. A local page now would be a guess, and town-swapped versions would be doorway pages.

Local pages wait until we have evidence of either kind:
1. Google Search Console data showing owner-side queries with a place name (needs Search Console set up, see §5), or
2. Real phrases from prospects or clients, in replies or on calls, showing they look for this kind of help locally.

When that evidence exists, build **one** Manchester page first, with content specific to Manchester that we can back up, and only re-check Leeds after that. Sales' local rows (#28 to #30, #44 to #56, #70 to #72) are parked until then. The Manchester address on the site (Bartle House, 9 Oxford Court, M2 3WQ) is a postal address only (master §1). Never use it to imply an office people can visit.

---

## 2. Keyword map

One primary term per URL. Supporting terms go in H2s, body copy and FAQs, never as the primary of another URL. The "Sales #" column gives Sales' row numbers.

### 2a. Pages

| URL | Status | Current title / H1 (live) | Primary term | Supporting terms (Sales #) | Audience | Intent | Source tag |
|---|---|---|---|---|---|---|---|
| /pt | Existing: update | "Free personal trainer app to track clients \| Omnirexis PT" / "Coach brilliantly. Run the business calmly." | free personal trainer app to track clients (#57) | pt client management app / software (#59, strongest secondary, use in an H2), personal trainer app (#58), personal trainer software uk (#64), online coaching apps for personal trainers (#67) | PT | app | autocomplete (+ outreach-pain for #59, #67) |
| /lead-follow-up-automation | **New** | none | lead follow up automation (#1) | enquiry follow up software (#2), gym lead follow up app (#13), automate gym enquiries uk (#21), gym crm (#11, supporting only); copy angles "reply to enquiries while you're teaching" (#3) and "one inbox for enquiries across sites" (#4) | all owners | solution | autocomplete + outreach-pain |
| /solutions | Existing: update | "Lead follow up automation and AI receptionists \| Omnirexis" / "Tools that become part of the workforce." | ai receptionist for gyms (#25) | gym ai chatbot (#24, on the Customer experience section) | gym, studio, leisure | solution | autocomplete |
| /gyms | **New** (niche) | none | gym marketing automation (#19) | gym booking system (#22) and gym appointment booking software (#23), as context only ("works around your booking system") | gym | solution | autocomplete (+ outreach-pain for #23) |
| /pilates-yoga-studios | **New** (niche) | none | studio booking automation (#38) | pilates booking system (#34), pilates studio management system (#35), yoga studio booking system (#36), yoga studio management software (#37), fitness studio booking software (#7), boutique fitness studio software (#8), all as context only | studio | solution | autocomplete ([tail] for #38) |
| /blog | **New** (hub) | none | none (hub; brand plus "guides for gym, studio and PT owners") | n/a | all | n/a | n/a |
| / | Existing: small update | "Lead follow up automation for gyms and studios \| Omnirexis" (live) / mission line. Change the home title to "Omnirexis \| AI and automation for gyms, studios and clubs" (57) so it does not compete with /lead-follow-up-automation | brand ("Omnirexis") | H1 stays the mission line, with "Lead follow up automation for gyms, studios and personal trainers." as the line under it (Ops, 3 Oct 2026). The home page links to /lead-follow-up-automation, which keeps the primary for that phrase | all | navigational | n/a |

The PT niche page is /pt, and the gym and studio niche pages are /gyms and /pilates-yoga-studios. /about, /process, /faq, /contact, /leisure, /rapid-services and /privacy have no Sales term mapped to them and stay as they are.

**Why /pt carries two strong terms.** "free personal trainer app to track clients" and "pt client management app" describe the same product and almost certainly the same results page. Two PT landing pages would compete with each other. So /pt is primary for the free phrase (the honest differentiator), and "PT client management app" goes in the H2 and FAQ.

**Why "gym marketing automation" for /gyms.** It is the only gym-specific solution phrase with normal (non-tail) autocomplete that fits a service we offer: follow-ups and CRM updates (/solutions, Process automation). The page must describe follow-up and enquiry automation, not ads or social media management, which we do not offer for gyms. Client Delivery should confirm the fit.

**Why "studio booking automation" for studios.** It is weak ([tail] only) but describes the positioning exactly. The stronger phrases are searches for booking software, and we are not booking software, so they are context only.

### 2b. Posts (all under /blog/)

| # | Proposed slug | Primary term (Sales #) | Supporting (Sales #) | Audience | Intent | Links to | Source tag |
|---|---|---|---|---|---|---|---|
| P1 | /blog/personal-trainer-client-tracking-spreadsheet | personal trainer client tracking spreadsheet (#60) | personal trainer spreadsheet template (#61), personal trainer client tracker google sheets | PT | problem | /pt | autocomplete |
| P2 | /blog/how-to-follow-up-gym-leads | how to follow up gym leads (#12) | gym lead follow up questions [tail] | gym | problem | /lead-follow-up-automation | paa + outreach-pain |
| P3 | /blog/personal-trainer-check-in-form | personal trainer check in form (#62) | personal trainer weekly check in questions, online coaching check in form | PT | problem | /pt | autocomplete + outreach-pain |
| P4 | /blog/pilates-intro-offer | pilates intro offer (#39) | taster or first class booking (outreach theme) | studio | problem | /pilates-yoga-studios | autocomplete + outreach-pain + prospect-site |
| P5 | /blog/what-app-do-personal-trainers-use | what app do personal trainers use for clients (#66) | best app for personal trainers to track clients (#65), is there a free personal trainer app | PT | app | /pt | paa (+ autocomplete for #65) |
| P6 | /blog/gym-member-retention-strategies | gym member retention strategies (#16) | gym member retention ideas, win back lapsed membership (#17, [tail]) | gym | problem | /gyms | autocomplete + outreach-pain |
| P7 | /blog/how-to-fill-pilates-classes | how to fill pilates classes (#40) | none (the local variants reflect the box IP) | studio | problem | /pilates-yoga-studios | paa + outreach-pain |
| P8 | /blog/gym-trial-follow-up-email | gym trial follow up email (#14, [tail]) | free trial follow up email template (#6, [tail]) | gym | problem | /lead-follow-up-automation | autocomplete + outreach-pain |
| P9 | /blog/personal-training-session-tracker | personal training session tracker (#63) | personal trainer session tracking sheet | PT | problem | /pt | autocomplete + outreach-pain |
| P10 | /blog/gym-enquiry-form-template | gym enquiry form template (#20) | gym enquiry form | gym | problem | /lead-follow-up-automation | autocomplete + outreach-pain |
| P11 | /blog/how-to-get-more-personal-training-clients | how to get more personal training clients (#69) | how to get more online personal training clients | PT | problem | /pt | paa |
| P12 | /blog/how-to-get-more-yoga-students | how to get more yoga students (#42) | none | studio | problem | /pilates-yoga-studios | paa |

Sales listed #63 (session tracker) as /pt. It is moved to a post so that it does not dilute the /pt primary. /pt still links to P9.

### 2c. Not mapped this round

| Sales # | Term(s) | Decision | Reason |
|---|---|---|---|
| 5 | missed call text back | Hold | Good autocomplete, but "text back" is not a verified service (the voice receptionist captures the call; texting back is not stated anywhere). Map it to /solutions only once Client Delivery confirms we deliver it. |
| 9, 10 | online booking system for small business uk; client check in app | Backlog | Off-audience or a different meaning (general small business booking; reception check-in kiosks). |
| 15, 18, 27, 41, 43, 68 | how to get more gym members; gym lead generation; what software do gyms use; how to get more pilates clients; pilates studio waitlist; trainerize free alternative | Backlog (weeks 7+) | Valid topics. #41 overlaps P7 and P12, #43 is a small theme (3/99), and #68 needs a fact-checked competitor comparison first. |
| 26 | gym waitlist software | Parked | Small theme (3/99) and no verified waitlist feature. |
| 31 | gym membership enquiries | Parked | Consumer intent (people contacting big chains). |
| 32, 33 | whatsapp for gyms uk; gym missed calls | Avoid | No evidence (Ops decision 3 Oct 2026). |
| 28 to 30, 44 to 56, 70 to 72 | all local and city terms | Parked | See "Parked: local pages" above. The word "boutique" (#44) may still be used as copy on /pilates-yoga-studios. |

---

## 3. Page briefs

Client Delivery reviewed the four service page briefs (3.2 to 3.5) on 3 Oct 2026, and each now reads **Client Delivery check: PASSED 3 Oct 2026 (with wordings below)**. Finance & Quality does the publishing QC next.

**Client Delivery rules (3 Oct 2026; apply to every brief and to any post that mentions our services)**
- Nothing may sound proven with a customer: we have delivered no client projects yet. No "our clients", "gyms we work with", results or case studies.
- First replies and follow-ups: "follow-ups for enquiries that come in by phone, web form or email, set up around the tools you already use". Never "instant", "24/7" or any reply time.
- Intro-class and lapsed-member follow-ups: only as examples of follow-ups we set up, scoped on the call, "where your booking system allows it". Never call them "reminders". Name no booking systems.
- Chat channels: list none. Say "on the channels we agree with you on the call".
- /gyms: "gym marketing automation" is OK as the target phrase, but the page explains it as follow-ups and CRM updates, plus one plain line: "We don't run ads or social media."
- Missed-call text back (#5) stays on hold.

**Homepage and buttons (Ops, 3 Oct 2026):** the homepage H1 stays the mission line, with "Lead follow up automation for gyms, studios and personal trainers." as the line under it. CTA buttons on all new and updated pages use #1773c2 (hover #1565b0). Character counts were checked with a script.

### 3.1 /pt (update): PT niche page

- **Primary term:** free personal trainer app to track clients
- **Title (54):** Free personal trainer app to track clients | Omnirexis
- **Meta (154):** Track clients, programmes, sessions and check-ins in one place. Omnirexis PT is free for your first two active clients. Start free in a couple of minutes.
- **H1:** Keep the current brand H1 ("Coach brilliantly. Run the business calmly.") as the display line, and add a visible kicker or sub-H1 line: "The free personal trainer app to track your clients." (Product decides the markup; the phrase must appear in the H1 or the first H2.)
- **Key sections**
  1. Hero: the phrase, the Free plan (£0, up to 2 active clients), and the "Start free" CTA.
  2. H2 "A PT client management app without the cockpit": client desk, programmes, sessions, action view. Reuse the live /pt card wording for Client desk, Programmes and the action view (call it "Action view": Product confirmed 3 Oct there is no weekly view or running-out-of-sessions flag in the live app); for sessions keep the "Sessions" heading and use Product's line checked against the live app (it shows upcoming sessions; it does not track packs or remaining sessions, so never say "pack" or "remaining"). No "payments", "Compare plans" or paid-plan wording.
  3. H2 "Check-ins and macros": check-in fields: hold until confirmed in the live app (see §5 item 3). Macros are labelled "estimates only, not medical advice".
  4. H2 "Replace the spreadsheet": links to P1 and P9.
  5. FAQ (below) and a "Guides for PTs" link row (P1, P3, P5, P9, P11).
- **FAQ**
  1. *Is Omnirexis PT really free?* Yes. The Free plan is £0 for up to 2 active clients. It is a free plan, not a time-limited trial.
  2. *What can I track on the Free plan?* Programmes, sessions, check-ins and macros (as listed on /pt).
  3. *Do I need card details to sign up?* No card details to start on Free. Signup asks for your name, email and a password.
  4. *How long does signup take?* A couple of minutes (site wording; never "2 minutes").
  5. *Does it work for online coaching clients?* Check-ins and programmes are assigned per client in the trainer workspace. **Verify** that this wording holds in the live app before using it.
- **Internal links:** P1, P3, P5, P9, P11; /faq; footer to /. Inbound links from the home PT teaser and every PT post.
- **CTA:** Start free, https://omnirexis-pt.vercel.app/signup?src=site_pt . PT_SIGNUP already uses `?src=site_pt` on live (172dafe). Matches master §6 (updated 3 Oct 2026, e42c1de). Secondary: the Zoom call (already on the page).
- **Claims to verify**
  - Check-in fields, the macro calculator and the exercise library work in the **live** app. The shipped code has them, but the live database schema is not reconciled (`supabase/README.md`). Capture real screens before describing or showing them.
  - "No card details to start on Free": recheck the live /signup form on publish day.
  - Do not add any client portal or client login claim.
  - **Resolved (CoS, 3 Oct 2026):** the existing paid pricing section stays on live /pt. This SEO update stays free-plan only: it does not add, quote or link to paid plans, prices or payments.
  - Do not quote the dashboard mock-up figures (12 clients, £1,248, "Chloe M."). Replace the "Month £1,248" tile in the mock-up with something the free plan really shows (e.g. sessions this week), so it does not imply takings tracking.

### 3.2 /lead-follow-up-automation (new): main service page

- **Primary term:** lead follow up automation
- **Title (58):** Lead follow-up automation for gyms and studios | Omnirexis
- **Meta (151):** Lead follow-up automation for UK gyms and studios: follow-ups for enquiries by phone, web form or email, set up around your tools. Free 30-minute Zoom.
- **H1:** Lead follow-up automation for gyms, studios and leisure clubs
- **Key sections**
  1. Hero: the mission line word for word, then "The enquiry that arrived mid-class should not depend on someone remembering it." (copy angle #3), then the Zoom CTA ("Free. 30 minutes. Zoom. No obligation.").
  2. H2 "Where leads go missing": enquiries waiting while you teach (#3), a shared info@ or hello@ inbox, several sites (#4), follow-ups that live in one person's head. Problem framing only, with no statistics and no customer stories.
  3. H2 "What we set up": "Follow-ups for enquiries that come in by phone, web form or email, set up around the tools you already use." Then the verified /solutions points: CRM updates and reporting (Process automation), and voice receptionists that capture the enquiry, answer approved questions, book the slot where your calendar allows it and hand the rest to a person. Examples, scoped on the call: following up after an intro class, or with lapsed members, where your booking system allows it.
  4. H2 "Works with the CRM you already use": the place for "gym crm" (supporting). "Not if it still earns its place. We start with what you already use." No Omnirexis gym CRM, and no CRM or booking systems named.
  5. H2 "How it works": discovery call, opportunity audit, solution design agreed in writing, implementation (configured, integrated, tested), optimise and support as scoped (/process).
  6. H2 "What it costs": "Scoped around the job and agreed before anything is built. We work it out with you on a free 30-minute Zoom." **No price, turnaround or package.**
  7. FAQ, then the CTA band.
- **FAQ** (all answered from the live /faq)
  1. *How much does lead follow-up automation cost?* Scoped around the job, agreed before anything is built. Start with a free 30-minute Zoom.
  2. *Do I need to replace my CRM or booking software?* Not if it still earns its place. We start with what you already use and which connections it supports.
  3. *Will it replace my front desk staff?* No. The tools take the repeatable jobs, so people keep the work that needs a person. You decide where that line sits.
  4. *Is our data safe?* Access, permissions and data handling are assessed for each setup and discussed before anything is connected.
  5. *How long does it take?* It depends on your systems, access, data and scope. We agree a realistic plan before starting.
- **Internal links:** /solutions#automation, /solutions#voice, /process, /faq, /gyms, /pilates-yoga-studios, P2, P8, P10.
- **CTA:** the Zoom strategy call only. There is no PT signup CTA on this page.
- **Client Delivery check: PASSED 3 Oct 2026 (with wordings below)**
  - Use "follow-ups for enquiries that come in by phone, web form or email, set up around the tools you already use" for first replies and follow-ups. Never "instant", "24/7" or any reply time.
  - Intro-class and lapsed-member follow-ups appear only as examples, scoped on the call, "where your booking system allows it". Never "reminders" (no "trial reminders" or "booking reminders"). Name no booking systems.
  - Nothing may sound proven with a customer: no "our clients", "gyms we work with", results or case studies. No client projects have been delivered yet.
  - "gym crm" must read as "your CRM", never as an Omnirexis product (a gym CRM is parked, master §2).
- **Claims to verify (Finance & Quality at publish)**
  - The /solutions and /faq lines quoted above still match the live site.
  - No price, turnaround or package has crept into the copy.

### 3.3 /solutions (update): enquiries and voice

- **Primary term:** ai receptionist for gyms
- **Title (55):** AI receptionist for gyms, studios and clubs | Omnirexis
- **Meta (144):** AI receptionists that capture the enquiry, answer approved questions, and book or hand over to a person. For UK gyms, studios and leisure clubs.
- **H1:** Keep "Tools that become part of the workforce." Rename the Voice receptionists H2 to "AI receptionist for gyms and studios", and keep the other three sections.
- **Key sections:** the existing four services (Audit, Voice, Process automation, Customer experience). Add one paragraph to Voice in plain words on what a call looks like (verified points only). In Process automation, add "Follow-ups for enquiries that come in by phone, web form or email, set up around the tools you already use." and link to /lead-follow-up-automation. In Customer experience, use "gym AI chatbot" once (supporting), grounded in "approved information" and running "on the channels we agree with you on the call". Change the live kicker "A useful answer, faster" to "A useful answer from approved information", and change "so customers stop waiting and your team stops repeating themselves" to "so your team repeats themselves less" (Client Delivery, 3 Oct: no promised result).
- **FAQ**
  1. *What does an AI receptionist do for a gym?* It captures the enquiry, answers what you have approved, books the slot and hands the rest to a person.
  2. *Does it sound like a robot?* We write the call flows and approved answers with you and test them before go-live (verified points: "call flows and approved answers", "testing and ongoing refinement"). Do not promise how it sounds.
  3. *Can it book into my calendar?* Calendar and CRM integration where your tools allow it.
  4. *What happens with questions it cannot answer?* It hands over to a person.
  5. *Where does the chat assistant run?* On the channels we agree with you on the call.
- **Internal links:** /lead-follow-up-automation, /gyms, /pilates-yoga-studios, /process, /faq.
- **CTA:** the Zoom call (already the hero CTA).
- **Client Delivery check: PASSED 3 Oct 2026 (with wordings below)**
  - Chat channels: list none. Use "on the channels we agree with you on the call".
  - No reply times, "instant" or "24/7".
  - Nothing may sound proven with a customer.
  - Missed-call text back (#5) stays on hold. Change the existing Voice kicker "Every missed call still has a next step" to "Calls answered, details captured, booked or handed over" (Client Delivery structure, F&Q wording 3 Oct; shorter fallback "Calls answered, booked or handed over"), and do not add text-back wording.
- **Claims to verify (Finance & Quality at publish)**
  - Remove the em dash and the clause "without a script that sounds like a machine" from the live Voice summary, so it reads "Capture the enquiry, answer what you have approved, book the slot where your calendar allows it, and hand the rest to a person." Use the same "where your calendar allows it" condition in the /solutions FAQ answer and anywhere else the copy says "book the slot". (FAQ 2: do not promise how it sounds.)

### 3.4 /gyms (new): gym niche page

- **Primary term:** gym marketing automation (approved by Client Delivery as the target phrase)
- **Title (57):** Gym marketing automation for independent gyms | Omnirexis
- **Meta (153):** Gym marketing automation, explained plainly: follow-ups and CRM updates set up around the tools you already use. For UK gyms. Book a free 30-minute Zoom.
- **H1:** Gym marketing automation for independent gyms
- **Key sections**
  1. Hero: the mission line, "For independent gym owners who still work the floor", and the Zoom CTA.
  2. H2 "What we mean by gym marketing automation": follow-ups and CRM updates. "Follow-ups for enquiries that come in by phone, web form or email, set up around the tools you already use." Plus one plain line: **"We don't run ads or social media."**
  3. H2 "The jobs that slip": enquiries during the busy hour, follow-ups that depend on memory, members going quiet. Problem framing only.
  4. H2 "Examples of follow-ups we set up": after an intro or induction session, or with lapsed members, scoped on the call, where your booking system allows it. Never called reminders.
  5. H2 "Works around your gym booking system": we are not a booking system. We start with the system you have and the connections it supports, and name no booking systems. Use "gym booking system" and "gym appointment booking software" here as context.
  6. H2 "Run a leisure club or spa as well?": link to /leisure.
  7. Guides row (P2, P6, P8, P10), FAQ, CTA band.
- **FAQ**
  1. *Is this a gym management or booking system?* No. Omnirexis sets up and connects follow-ups and CRM updates around the tools you already use.
  2. *Do you run our ads or social media?* No. We don't run ads or social media.
  3. *Do I need a big team or a tech person?* No. It is built for operators without a tech team, and we show you how each tool works (verified on the home page and FAQ).
  4. *What does it cost?* Scoped around the job, agreed before anything is built, starting with a free 30-minute Zoom.
  5. *Will it replace my staff?* No. The tools take the repeatable jobs (live FAQ).
- **Internal links:** /lead-follow-up-automation, /solutions, /leisure, /process, P2, P6, P8, P10.
- **CTA:** the Zoom call.
- **Client Delivery check: PASSED 3 Oct 2026 (with wordings below)**
  - "Gym marketing automation" is explained as follow-ups and CRM updates, with the "We don't run ads or social media" line on the page.
  - Intro and lapsed-member follow-ups appear only as examples, scoped on the call, where your booking system allows it. No "reminders", and no booking systems named.
  - No reply times, "instant" or "24/7". Nothing may sound proven with a customer.
- **Claims to verify (Finance & Quality at publish):** the /solutions and /faq lines quoted still match the live site.

### 3.5 /pilates-yoga-studios (new): studio niche page

- **Primary term:** studio booking automation
- **Title (58):** Studio booking automation for Pilates and yoga | Omnirexis
- **Meta (152):** Follow-ups for enquiries by phone, web form or email, set up around the tools your Pilates or yoga studio already uses. Book a free 30-minute Zoom call.
- **H1:** Studio booking automation for Pilates and yoga studios
- **Key sections**
  1. Hero: the mission line, then "The enquiry that arrived mid-class should not depend on someone remembering it." (the strongest outreach angle for studios; never "still has a next step"), and the Zoom CTA.
  2. H2 "Between the enquiry and the first class": intro and taster booking (a common outreach theme; problem framing only, never quote the count), the shared inbox, the reply that waits until after the evening class.
  3. H2 "We work around your Pilates booking system": not a replacement, and no booking systems named. Booking-system phrases (pilates booking system, yoga studio booking system, studio management system) go here as context.
  4. H2 "What we set up": "Follow-ups for enquiries that come in by phone, web form or email, set up around the tools you already use." Enquiry capture and approved answers (Voice), the knowledge assistant for repeat questions on the channels we agree with you on the call (Customer experience). Examples, scoped on the call: following up after an intro class, or with lapsed members, where your booking system allows it.
  5. Guides row (P4, P7, P12), FAQ, CTA band.
- **FAQ**
  1. *Do I have to change my booking system?* Not if it still earns its place. We start with what you use and which connections it supports.
  2. *Can enquiries be followed up while I am teaching?* We set up follow-ups for enquiries that come in by phone, web form or email, around the tools you already use. The receptionist and assistants answer what you have approved and hand the rest to a person.
  3. *Can you follow up after an intro class?* Yes, as one example of a follow-up we can set up, scoped on the call, where your booking system allows it.
  4. *What does it cost?* Scoped on a free 30-minute Zoom, agreed before anything is built.
- **Internal links:** /lead-follow-up-automation, /solutions, /process, P4, P7, P12, and /pt (one line for instructors who also train PT clients: an internal link, not a signup button).
- **CTA:** the Zoom call.
- **Client Delivery check: PASSED 3 Oct 2026 (with wordings below)**
  - Use the follow-up wording above. Never "instant", "24/7" or a reply time.
  - Intro-class and lapsed-member follow-ups appear only as examples, scoped on the call, where your booking system allows it. Never "reminders" ("class-trial reminders", "booking reminders"). No booking systems named.
  - Chat channels: none listed ("on the channels we agree with you on the call").
  - Nothing may sound proven with a customer. Name no prospect studios or their offers ("boutique" is fine as copy, #44).
- **Claims to verify (Finance & Quality at publish):** the /solutions and /faq lines quoted still match the live site.

### 3.6 /blog (new): guides hub

- **Primary term:** none (hub)
- **Title (48):** Guides for gym, studio and PT owners | Omnirexis
- **Meta (128):** Plain, practical guides on enquiries, follow-ups, retention and PT admin for independent UK gyms, studios and personal trainers.
- **H1:** Guides for gym, studio and PT owners
- **Key sections:** three filters (Gyms, Studios, PTs), post cards, and one CTA band per audience (Zoom for owners; Start free for PTs, https://omnirexis-pt.vercel.app/signup?src=seo_blog ).
- **FAQ:** none.
- **Internal links:** every post; /pt, /gyms, /pilates-yoga-studios, /lead-follow-up-automation.
- **Build notes for Product:** a new route (`src/routes/blog.tsx` plus `blog.$slug.tsx`, or the existing pattern), `pageSeo` for each post, Article JSON-LD (no ratings or reviews), new URLs added to `public/sitemap.xml`, and a nav or footer link.
- **Claims to verify:** none on the hub itself. Every post goes through Finance & Quality.

---

## 4. Six-week calendar (from Mon 5 Oct 2026)

Two posts a week: Monday (PT or owner) and Thursday. The dates are publish targets. They depend on Product shipping /blog (week 1) and on Finance & Quality sign-off; until then, posts are drafted and held.

**CTAs:** PT posts use Start free, https://omnirexis-pt.vercel.app/signup?src=seo_blog-<short tag, max 40 chars> (the PT app cuts `src` at 40 characters; the exact tag is given on each post). Owner posts use the Zoom call. One CTA per post.

**Service mentions in posts** follow the Client Delivery rules in §3: the follow-up wording, no reply times, no "reminders", no booking systems named, nothing that sounds proven with a customer, and intro or lapsed follow-ups only as examples "where your booking system allows it".

**Social repurpose:** each idea is one house-standard motion-graphics video (15 to 20 s, real screens only). Nothing is scheduled until Ross approves that exact asset, with a maximum of 3 generated videos a week.

### Week 1

**P1 · Mon 5 Oct · Personal trainer client tracking spreadsheet: free template, and when to move on**
- Primary: personal trainer client tracking spreadsheet · Audience: PT · Links to: /pt · CTA: Start free, https://omnirexis-pt.vercel.app/signup?src=seo_blog-pt-client-spreadsheet
- Outline:
  - The columns that matter: client, goal, sessions left, last check-in, next session, notes.
  - A free Google Sheets template (Brand builds it before publish).
  - Where spreadsheets break: a tab per client, check-ins in another app, no single view of the week.
  - Signs you have outgrown the sheet.
  - Omnirexis PT: clients, programmes, sessions, check-ins, progress and macro targets in one workspace, free for 2 active clients (confirmed features only; no notes, messaging, packs or remaining-session claims).
- Social: a "spreadsheet tab chaos" to client desk screen recording, ending on "Free for your first two clients".

**P2 · Thu 8 Oct · How to follow up gym leads: a simple process for independent gyms**
- Primary: how to follow up gym leads · Audience: gym owners · Links to: /lead-follow-up-automation · CTA: Zoom
- Outline:
  - Why leads go cold (the reply waits while you are on the floor; no statistics).
  - First reply: what to say and what to ask.
  - A follow-up sequence the gym owns: day 0, next day, end of week (wording examples).
  - Who owns follow-up when there is a shared inbox.
  - Which parts to automate and which to keep human (follow-ups for enquiries by phone, web form or email, set up around the tools you already use).
- Social: the "enquiry at 6pm during the busy hour" scene, then three follow-up cards.

### Week 2

**P3 · Mon 12 Oct · Personal trainer check-in form: weekly questions to copy**
- Primary: personal trainer check in form · Audience: PT · Links to: /pt · CTA: Start free, https://omnirexis-pt.vercel.app/signup?src=seo_blog-personal-trainer-check-in-form
- Outline:
  - What a weekly check-in is for.
  - Questions grouped by the check-in fields in Omnirexis PT (only fields confirmed working in the live app, §5 item 3). Field list: hold until confirmed in the app.
  - How to give trainer feedback that clients read.
  - In-person and online clients: same form, different follow-up.
  - Keeping check-ins on the client record (Omnirexis PT, Free plan).
- Social: kinetic type of 5 questions, ending on a real check-in screen (only once captured working live).

**P4 · Thu 15 Oct · Pilates intro offer: how to structure one that leads to a second booking**
- Primary: pilates intro offer · Audience: studio owners · Links to: /pilates-yoga-studios · CTA: Zoom
- Outline:
  - Common formats (a class pack, a single taster, a first-week bundle), described generically with no competitor prices.
  - What happens after the first class matters more than the price.
  - The follow-up after class 1 and before the offer runs out (the studio's own process).
  - Answering intro enquiries while you are teaching.
  - Where automation helps (a follow-up after the intro class, where your booking system allows it) and where a personal message is better.
- Social: "They loved class one. Then nobody followed up." in 4 beats.
- Note: the search results for this phrase are partly consumer (people looking for offers). Write clearly for owners in the title and intro.

### Week 3

**P5 · Mon 19 Oct · What app do personal trainers use for clients? A plain guide**
- Primary: what app do personal trainers use for clients · Audience: PT · Links to: /pt · CTA: Start free, https://omnirexis-pt.vercel.app/signup?src=seo_blog-what-app-pts-use
- Outline:
  - The jobs a PT app has to do: clients, programmes, sessions, check-ins.
  - Spreadsheet, messaging apps and notes vs a dedicated app (pros and cons, no statistics).
  - What to check before choosing: client limits, setup time, what is free.
  - Is there a free personal trainer app? Yes: Omnirexis PT's Free plan (2 active clients, not a trial).
  - How to move your first two clients over.
- Social: a "What app do PTs use?" question card, then the Omnirexis PT tour.
- Rule: name no competitors or their prices unless each fact is checked on their live site on publish day.

**P6 · Thu 22 Oct · Gym member retention strategies for independent gyms**
- Primary: gym member retention strategies · Audience: gym owners · Links to: /gyms · CTA: Zoom
- Outline:
  - Retention starts at induction.
  - Spotting members going quiet before they cancel.
  - Check-in messages that do not feel automated.
  - Win back lapsed members: a simple, respectful approach.
  - The admin that makes this stick. Lapsed-member follow-ups are one example we can set up, scoped on a call, where your booking system allows it.
- Social: "Members rarely cancel loudly." in 4 beats.
- Rule: no retention-rate figures unless sourced and cited.

### Week 4

**P7 · Mon 26 Oct · How to fill Pilates classes without discounting every week**
- Primary: how to fill pilates classes · Audience: studio owners · Links to: /pilates-yoga-studios · CTA: Zoom
- Outline:
  - Look at the timetable first: which slots are quiet and why.
  - Turn intro clients into regulars (link to P4).
  - Refill late cancellations (keep it short: a small theme in our evidence).
  - Make sure enquiries for the quiet slots get a reply and a follow-up.
  - Follow-ups the studio can automate and still keep personal.
- Social: an empty reformer slot on the timetable, in kinetic type over studio footage (any AI-generated clip needs Ross approval of that exact asset and is never described as real).

**P8 · Thu 29 Oct · Gym trial follow-up email: templates for before, during and after**
- Primary: gym trial follow up email · Audience: gym owners · Links to: /lead-follow-up-automation · CTA: Zoom
- Outline:
  - The gym's own trial or taster pass: why follow-up decides whether people join.
  - Template 1: welcome and first visit.
  - Template 2: mid-trial check-in.
  - Template 3: end of trial, with a clear next step.
  - Sending these without relying on memory: follow-ups set up around the tools you already use, where your booking system allows it (never "reminders", no reply times).
- Social: three template subject lines as cards.
- Rule: this is about gyms' own trials. Never call the Omnirexis PT free plan a trial, and never present "trial reminders" as an Omnirexis service.

### Week 5

**P9 · Mon 2 Nov · Personal training session tracker: keep every client's sessions in one diary**
- Primary: personal training session tracker · Audience: PT · Links to: /pt · CTA: Start free, https://omnirexis-pt.vercel.app/signup?src=seo_blog-pt-session-tracker
- Outline:
  - Why sessions get lost across a paper diary, messages and a spreadsheet.
  - A simple tracking sheet layout, including a "sessions left" column you keep yourself (links to P1's template).
  - When to have the renewal conversation, using your own records.
  - Upcoming sessions for each client in one place: the Omnirexis PT sessions view and dashboard (Upcoming sessions). The app does not track packs or remaining sessions, so never imply it.
  - Start free with 2 clients.
- Social: the real Upcoming sessions screen, captured working live. No "sessions left" or overdue alerts.

**P10 · Thu 5 Nov · Gym enquiry form template: what to ask, and what happens next**
- Primary: gym enquiry form template · Audience: gym owners · Links to: /lead-follow-up-automation · CTA: Zoom
- Outline:
  - Fields to ask (name, contact, goal, best time, how they heard), and fields to drop.
  - Consent wording to check with your own privacy policy (no legal advice).
  - What should happen after a form comes in, and who owns the next step.
  - Routing forms from several sites into one inbox.
  - Where automation helps: follow-ups for enquiries that come in by phone, web form or email, set up around the tools you already use.
- Social: a form filling in, then "Then what?" cards.

### Week 6

**P11 · Mon 9 Nov · How to get more personal training clients (and keep the ones you have)**
- Primary: how to get more personal training clients · Audience: PT · Links to: /pt · CTA: Start free, https://omnirexis-pt.vercel.app/signup?src=seo_blog-more-pt-clients
- Outline:
  - Referrals from current clients: when to ask.
  - Reply to new enquiries the same way each time, and follow up once.
  - Visible progress keeps clients (check-ins and progress tracking).
  - Keep admin small so there is time to sell.
  - A free workspace for your first two clients.
- Social: "More clients starts with the ones you've got" in 4 beats.
- Rule: no income or client-growth promises.

**P12 · Thu 12 Nov · How to get more yoga students at an independent studio**
- Primary: how to get more yoga students · Audience: studio owners · Links to: /pilates-yoga-studios · CTA: Zoom
- Outline:
  - Who the beginner student is and what stops them booking.
  - Beginner pathways and intro offers (link to P4).
  - Answer enquiries while you are teaching.
  - Bring back students who have drifted.
  - The admin that can run in the background (follow-ups set up around the tools you already use).
- Social: a yoga front desk at 7am, with an enquiry answered in kinetic type.

**Totals:** 12 posts (6 PT, 6 owner: 3 gym, 3 studio).

---

## 4a. Tracking tags

The PT app saves the `?src=` value on signup (master §10, 30 Sep 2026). Agreed in Ops, 3 Oct 2026:

| Tag | Where it is used |
|---|---|
| `outreach_pt`, `outreach_gym`, `outreach` | Outreach emails. Leave them as they are. |
| `site_pt`, `site_home` | Website /pt and homepage PT teaser "Start free" buttons. Live since 172dafe (replaced `website`). Matches master §6 (e42c1de). |
| `seo_<page>` | SEO page and blog CTAs, for example `seo_lead-follow-up-automation`, `seo_blog` (hub) and `seo_blog-<short tag, max 40 chars>` (posts) |
| `social` | Links in Buffer posts |
| untagged | Direct |

PT CTAs in this plan: /pt uses `site_pt` and the homepage PT teaser uses `site_home` (both live since 172dafe), the /blog hub uses `seo_blog`, and P1, P3, P5, P9 and P11 use `seo_blog-<short tag, max 40 chars>` (the exact tag is on each post). The service pages (3.2 to 3.5) carry no PT signup CTA, only the Zoom call. If one is added later, it uses `seo_<page>`, for example `seo_gyms`. Social repurpose posts link with `?src=social`.

## 5. Owners and next steps

| # | What | Owner | When |
|---|---|---|---|
| 1 | Service brief review (3.2 to 3.5) | Client Delivery | **PASSED 3 Oct 2026** with the wordings in §3 |
| 2a | `?src=site_pt` (PT_SIGNUP) and `?src=site_home` (homepage PT teaser) are already live since 172dafe, so no change is needed there. Add the `seo_*` tags to SEO page and blog CTAs (see Tracking tags); apply the homepage sub-line, the new home title "Omnirexis \| AI and automation for gyms, studios and clubs" and the #1773c2 / #1565b0 button colours | Product & Web | With the first build |
| 2 | Build /blog (hub plus post template), /lead-follow-up-automation, /gyms and /pilates-yoga-studios; update titles, meta and H2s on /pt and /solutions; add URLs to the sitemap | Product & Web | /blog plus lead follow-up page first (week 1), niche pages by week 2 |
| 3 | Capture live PT app screens (check-ins, macros, upcoming sessions, dashboard) and confirm they work against the live database | Product & Web | Before P3 and P9 |
| 4 | Build the free PT spreadsheet template for P1 | Brand & Social | Before Mon 5 Oct publish |
| 5 | Draft posts 1 to 12 and social cuts; Ross approves each video before Buffer | Brand & Social, then Ross | Rolling, 1 week ahead |
| 6 | QC every page and post before publish: claims, the free-plan-only rule, no prices on the lead follow-up page, no em dashes, title and meta lengths, links | Finance & Quality | Before each publish |
| 7 | **Flag to CoS:** set up Google Search Console for www.omnirexis.co.uk (needs Ross sign-in or a DNS verification record) and submit the sitemap. It is the evidence we need before any local page. | CoS (Ross sign-in needed) | This week |
| 8 | **Flag to CoS:** Google Business Profile. Check whether one exists and whether the Manchester postal address is eligible (it is a postal address, not premises people visit, so a service-area profile with a hidden address may be the honest option). Needs a Ross sign-in. | CoS (Ross sign-in needed) | This week |
| 9 | **Flag to CoS:** Content Engine £349/month confirmed by Ross 3 Oct 2026; CoS to add to master. Resolved (CoS, 3 Oct 2026): the paid pricing section stays on live /pt; this SEO update stays free-plan only | CoS / Ross | When convenient |
| 10 | Review at week 6: Search Console queries, then re-rank the backlog (2c) and reconsider local pages | Brand & Social with Sales | Mon 16 Nov 2026 |
