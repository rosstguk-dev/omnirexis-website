*This post contains an affiliate link to Make. If you sign up through it we may earn a commission, at no extra cost to you. We only recommend tools we've assessed.*

*Prices checked 10 Oct 2026.*

If you run a gym, a studio or a PT business, you've probably heard that automation can take the admin off your plate. Then you look into it and hit the first decision: Make or n8n?

Both are visual automation tools. You connect your apps (your inbox, forms, spreadsheets, CRM, calendar) and build workflows that run on their own. Both can do the jobs a fitness business cares about, like following up enquiries and moving data between systems.

We'll be upfront about where we stand. Omnirexis runs on n8n, on the paid Cloud Pro plan, and we use it every day. We have not run our business on Make. We've opened a free Make account and assessed it against what we know from n8n, so treat the Make side as an informed assessment, not a long-term user review.

## What we actually use n8n for

Our own setup is a good example of the kind of jobs a small fitness business might automate:

- **Scheduled outreach emails.** A workflow runs each weekday morning, picks up approved rows from a sheet and sends personal emails from our business address, with a daily cap built into the workflow.
- **A queue check.** A separate workflow checks whether there's anything ready to send, and emails an alert if the queue is empty, so the job doesn't quietly stop.
- **A daily onboarding check.** Once a day, a workflow looks for newly won clients and flags them so onboarding starts on time.

None of this is complicated, and that's the point. The value comes from jobs that used to depend on someone remembering them now running on a schedule, with alerts when something needs a human.

## Make vs n8n at a glance

| | Make | n8n |
|---|---|---|
| Free option | Free plan with no time limit: 1,000 credits a month, 2 active scenarios, runs at most every 15 minutes | No free Cloud plan. Free Cloud trial (no card needed), or the free self-hosted Community Edition if you can run a server |
| How you pay | Credits. Most module actions use 1 credit, so a workflow with more steps uses more | Executions. One full run of a workflow counts once, however many steps it has |
| Entry paid plans | Core, then Pro and Teams. Prices change with the number of credits you choose; check the current figure on Make's pricing page | Starter from €20 a month and Pro from €50 a month, both billed annually (shown in euros on n8n.io) |
| Apps | 3,500+ ready-made apps | Every integration on every plan, plus HTTP requests to almost any app with an API |
| Learning curve | Very visual and friendly for non-technical owners | Visual too, but rewards some technical confidence |
| Code | Code app on paid plans (JavaScript or Python) | JavaScript or Python code steps built in |
| Hosting | Cloud (AWS, EU or North America) | Cloud (EU, Frankfurt) or self-hosted |

For reference, our own n8n Cloud Pro plan costs about £72 a month including VAT, paid monthly. Your cost will depend on the plan size and billing period you choose.

## The pricing difference that actually matters

The headline prices are less important than **how each tool counts usage**.

Make charges in credits, and most actions in a workflow use one. A simple enquiry follow-up might read a form entry, look up the contact, add a row to a sheet and send an email. That's several credits every time it runs. For a solo PT with a handful of enquiries a week, the free plan or Core will likely be plenty. For a busy gym, the credits add up faster, so it's worth estimating before you commit.

n8n charges per execution: one full run of a workflow, however many steps. That makes longer workflows more predictable to budget for. The trade-off is a higher starting price than Make's entry tier, and no free Cloud plan once the trial ends.

A quick way to estimate either: list each job you want to automate, how often it runs, and roughly how many steps it has. A daily scheduled check runs about 30 times a month. A workflow triggered by each new enquiry runs as often as enquiries arrive.

## Ease of use: who builds and who maintains it?

This is where Make stands out. Its builder is very visual, the free plan lets you learn without paying, and the huge app library means you'll often find a ready-made connector for the tools you already use. If you plan to build and tweak things yourself, without a technical background, Make is easier to get started with.

n8n is also visual, but it rewards some technical confidence. When a ready-made connector doesn't do exactly what you need, you can make a direct request to the app's API or drop in a few lines of code. That flexibility is why we chose it: we can build exactly the workflow we want, add safety checks like daily caps and alerts, and keep things tidy as they grow.

The honest question isn't which tool is "better". It's who will build and maintain your automations. If that's you, on a Sunday evening, between clients, ease of use matters a lot. If it's someone technical, flexibility matters more.

## What to automate first, whichever you pick

The tool matters less than the job. In most gyms and PT businesses, the best place to start is the enquiry:

1. **Log every enquiry in one place**, whether it came by web form, email or phone.
2. **Send a quick first reply** so people know someone has seen it.
3. **Follow up if they go quiet**, on a short schedule you control.
4. **Make booking the next step easy**, with a link to a taster session, class or call.

Keep a human in the loop. Anything outside the answers you've approved should go to a person, with the details captured. We explain more about this on our [lead follow-up automation](https://www.omnirexis.co.uk/lead-follow-up-automation) page.

## Our verdict by business type

**Solo PT: start with Make.** The free plan has no time limit, the builder is friendly, and a few simple workflows (form to spreadsheet, a follow-up email, a booking reminder) will fit comfortably. Keep an eye on the 2 active scenario limit and move to Core when you need more. If you'd rather not build client tracking yourself, our free [Omnirexis PT](https://www.omnirexis.co.uk/pt) plan covers up to 2 active clients.

**Independent studio: either works, so choose by who maintains it.** If the owner or a team member will build and tweak workflows, Make is the easier start. If you're working with someone technical, or you expect your workflows to grow into several steps with checks and alerts, n8n's per-execution pricing and flexibility start to pay off.

**Multi-site gym: lean towards n8n.** More sites usually means more enquiries, more steps and more people relying on the same processes. Per-execution pricing is easier to predict at that volume, and code steps, workflow history and direct API requests help when the setup gets more involved. Our [gym automation](https://www.omnirexis.co.uk/gyms) page covers the kind of jobs worth automating first.

## How to try each one

- **Make:** sign up for the free plan here: <a href="https://www.make.com/en/register?pc=omnirexis" rel="sponsored nofollow">try Make free</a> (affiliate link).
- **n8n:** start a free Cloud trial at [n8n.io](https://n8n.io). No card is needed for the trial.

Build one small workflow in each, ideally the same one, such as sending a reply when your web form is filled in. You'll learn more in an hour of building than from any comparison.

## FAQ

### Is Make or n8n better for a small gym?

For a small gym where the owner builds the automations, Make is usually the easier start thanks to its free plan and friendly builder. If someone technical is setting things up, or the workflows will have many steps, n8n is often the better long-term fit.

### Is n8n free?

The self-hosted Community Edition is free if you can run your own server. n8n Cloud has a free trial with no card needed, then paid plans from €20 a month billed annually (prices checked 10 Oct 2026).

### Does Make have a free plan?

Yes. Make's Free plan has no time limit and includes 1,000 credits a month, up to 2 active scenarios and runs at most every 15 minutes (checked 10 Oct 2026).

### What's the difference between Make credits and n8n executions?

Make uses credits: most actions inside a workflow use one, so longer workflows cost more per run. n8n counts executions: one complete run of a workflow counts once, however many steps it has.

### Which tool does Omnirexis use?

We run Omnirexis on n8n Cloud Pro. We've assessed Make as an alternative but don't run our business on it.

### Can I automate gym enquiry follow-up with either tool?

Yes. Both can log enquiries, send a first reply, follow up when people go quiet and link to booking. The hard part is designing the process, not choosing the tool.

## Want a hand choosing?

If you'd like a second pair of eyes on what's worth automating at your gym or studio, and which tool suits how you work, [book a free 30-minute call](https://scheduler.zoom.us/ross-gallagher-ie9whv/30-mins-with-ross). Or email us at hello@omnirexis.co.uk.
