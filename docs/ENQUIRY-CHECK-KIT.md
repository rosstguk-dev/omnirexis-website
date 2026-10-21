# Free enquiry follow-up check: delivery kit

**Owner:** Chief of Staff (runs it). Sales & CRM owns the prospect relationship and may tighten the wording. Client Delivery takes over only after a paid close.
**Created:** 20 Oct 2026 (CoS continuous improve), for the give-first first touch live from Tue 20 Oct 2026 (master §0A, §1A, §5).
**Purpose:** when a prospect replies yes to the free one-page check, deliver the same honest check every time, fast, without Ross doing the work.

Read the live master first. Where this kit and the master disagree, the master wins.

## 1. Trigger and timings

A prospect replies to an Omnirexis first touch or follow-up with yes, or anything that clearly means yes ("go on", "sure", "send it").

| Step | By when |
|---|---|
| Thank-you reply drafted for Ross (section 4) | Same working day |
| Test enquiry sent, clearly signed as Ross (section 2) | Same working day as the yes, or next working morning |
| One-page check drafted by Sales | 1 working day after the yes |
| One-page check finished and QC passed | 2 working days after the yes (the promise to the prospect: delivered within 2 working days) |
| Check sent by Ross from ross@omnirexis.co.uk | Same day it passes QC |

A slow or missing reply to our test enquiry is a finding, not a reason to wait longer.

## 2. Rules (do not break)

- **Only after a yes.** No test enquiry to anyone who has not said yes (Ross, 19 Oct 2026).
- **Never disguised.** The test enquiry is clearly from Ross at Omnirexis and says it is the check they agreed to. No fake names, no pretend customers.
- **Outside view only.** Check what any member of the public can see and do. No logins, no asking for passwords, no access to their systems.
- **Facts only.** Every line in the check is something we saw, with a date or time. If we did not check something, write "Not checked". No invented stats, benchmarks, percentages or "industry averages".
- **No prices** in the check or the covering email (first-touch rule carries through). Pricing is for the Zoom.
- **Banned wording (master §0A):** never "receptionist", "AI receptionist", "answers calls", "call answering". Never tell them they would be the first client. No em dashes or en dashes.
- **Parked offers stay out:** Voice add-on, follow-up-only, gym CRM rebuild, gym team plan.
- **One link** in the check and one in the email at most: the Zoom Scheduler link. PT signup link only if the prospect is a solo PT or PT-led business.
- **Ross sends.** The thank-you and the finished check are one-to-one emails as Ross, so they are drafts Ross sends (master §0A Approvals). The n8n engine never sends these.

## 3. Admin on the yes (stops the follow-up going out)

1. In the outreach sheet, change that row's **Status** from `Sent` to `Replied - yes to check`. The n8n follow-up skips any row whose Status is not exactly `Sent`, so this guarantees no follow-up lands on top of the conversation.
2. HubSpot: add a note on the contact, "Said yes to free enquiry check on DD Mon YYYY", and a task "Deliver enquiry check" due 2 working days out.
3. Never add the prospect back into any queue.

## 4. Thank-you reply (draft for Ross, plain text)

> Hi {first name},
>
> Great, thanks. I'll send one enquiry through your {website form / email / WhatsApp} today, signed as me so you know it's the check, and I'll have the one-page write-up back to you by {day}.
>
> Kind regards,
> Ross

Keep it this short. No links, no pitch.

## 5. Test enquiry (sent as Ross, through the route a customer would use)

Use the main route on their site (form first, then email, then WhatsApp if that is the only door). Ask a normal question a real customer would ask, signed clearly:

> Hi, this is Ross Gallagher from Omnirexis, sending the test enquiry you said yes to for your free follow-up check. Please handle it exactly as you would any new enquiry. My question: {a real question, e.g. how do I book a first visit or trial, and what does it cost?}
> Ross Gallagher, Omnirexis, ross@omnirexis.co.uk

Record: the exact time sent, the route, and the exact time of every response (auto-reply, first human reply, any later follow-up). Screenshot the form, the on-screen confirmation and each reply.

## 6. The eight checkpoints

Rate each one **Working**, **Could be tighter** or **Gap**, with the evidence in a few words.

| # | Checkpoint | What to look at |
|---|---|---|
| 1 | Easy to enquire | From the home page on a phone, how many taps to a form, email, phone number or WhatsApp? |
| 2 | Form and confirmation | Does the form work? How many fields? Does the on-screen message say what happens next and when? |
| 3 | Instant reply | Did an auto-reply arrive? How many minutes after sending? Does it give a next step (booking link, timetable, prices page)? |
| 4 | First human reply | How long until a person replied, counted in their stated opening hours? |
| 5 | Booking path | Is there a clear way to book a first visit, trial, induction or consult? How many steps on a phone? Did it work? |
| 6 | Second touch | If the enquirer goes quiet, did a second message arrive within 48 hours? If the window has not passed, write "Not observed yet". |
| 7 | Out-of-hours | What is someone told when they enquire outside opening hours (form message, auto-reply, voicemail greeting if publicly stated, hours on the site)? Describe only what we saw. |
| 8 | Consistent details | Do opening hours, offer and booking link match across the website, Google Business Profile and their main social page? |

## 7. The one page (template)

Plain, one A4 page, navy heading, no stock images. Make it as a Google Doc and send as a PDF attachment, or paste as plain text if attachments look heavy for that prospect.

```
Enquiry follow-up check for {Business name}
Prepared by Ross Gallagher, Omnirexis, {date}

What we did: on {date} at {time} we sent one enquiry through your {route},
signed as Ross, and followed what happened as a new customer would.

[Table: the 8 checkpoints, rating, evidence]

Three things you could fix this week, no new tools needed:
1. {quickest, cheapest fix from a Gap or Could be tighter row}
2. {second}
3. {third}

Where Omnirexis helps: we set up the follow-up so every enquiry gets a reply,
a reminder and a booking link without depending on memory. If you'd like to
talk it through, 30 minutes on Zoom: https://scheduler.zoom.us/ross-gallagher-ie9whv/30-mins-with-ross

Based only on what we could see from the outside on {dates}. Not a guarantee
of results.
```

The three fixes must be things they can do themselves for free (for example: add a booking link to the auto-reply, put opening hours on the contact page, add a "we reply within X hours" line under the form). The give-first only works if the page is useful even if they never call.

## 8. Covering email (draft for Ross, plain text)

> Hi {first name},
>
> Here's your enquiry follow-up check, attached. The three quick fixes at the bottom are the bit worth doing first, and none of them need new tools.
>
> If you'd like to go through it together, happy to do 30 minutes on Zoom: https://scheduler.zoom.us/ross-gallagher-ie9whv/30-mins-with-ross
>
> Kind regards,
> Ross

## 9. QC before Ross sends (CoS)

- [ ] Every rating has evidence with a date or time; anything unseen says "Not checked"
- [ ] No prices, no banned wording, no parked offers, no em or en dashes
- [ ] No claims about results, other clients or numbers we did not measure
- [ ] One link at most (Zoom), PT link only for solo PTs or PT-led businesses
- [ ] Their business name, first name and route are right
- [ ] Fits on one page

## 10. After sending

- HubSpot note: "Enquiry check sent DD Mon YYYY", close the task.
- If they book the Zoom: Sales owns the call prep and the handover note (DELIVERY-KIT.md section 2).
- If they reply with questions: draft the answer for Ross the same working day.
- If no reply in 5 working days: one short, plain nudge drafted for Ross, then stop. It does not count against the n8n cap because Ross sends it one to one.
- Keep the filled check and screenshots in Drive under a per-prospect name so the Zoom can reference them.
