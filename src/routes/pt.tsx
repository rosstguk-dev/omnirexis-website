import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { SiteLayout } from "@/components/site/layout";
import { PtConsole } from "@/components/site/pt-console";
import { BOOK_CALL, PT_PLANS, ptSignup } from "@/lib/site";
import { FaqList } from "@/components/site/faq-list";
import { GuidesRow } from "@/components/site/guides-row";
import { faqJsonLd, jsonLdGraph, pageSeo, SITE_URL } from "@/lib/page-seo";
import { cn } from "@/lib/utils";

const PT_SIGNUP_URL = ptSignup("site_pt");

// Brief 3.1 (docs/SEO-CONTENT-PLAN.md). FAQ 5 (online coaching) is held until verified in the live app.
const FAQS = [
  {
    q: "Is Omnirexis PT really free?",
    a: "Yes. The Free plan is £0 for up to 2 active clients. It is a free plan, not a time-limited trial.",
  },
  {
    q: "What can I track on the Free plan?",
    a: "Programmes, sessions, check-ins and macros for your first two active clients.",
  },
  {
    q: "Do I need card details to sign up?",
    a: "No card details to start on Free. Signup asks for your name, email and a password.",
  },
  {
    q: "How long does signup take?",
    a: "A couple of minutes.",
  },
];

// Free plan only. No paid prices, ratings or reviews in structured data.
const PT_APP_JSON_LD = {
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/pt#app`,
  name: "Omnirexis PT",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "PT client management",
  operatingSystem: "Web",
  url: `${SITE_URL}/pt`,
  description:
    "A PT client management app for personal trainers: clients, programmes, sessions and check-ins in one place. Free for your first two clients.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  offers: {
    "@type": "Offer",
    name: "Free",
    description: "Free plan for your first two active clients.",
    price: "0",
    priceCurrency: "GBP",
    url: PT_SIGNUP_URL,
  },
};

export const Route = createFileRoute("/pt")({
  head: () =>
    pageSeo({
      title: "Free personal trainer app to track clients | Omnirexis",
      description:
        "Track clients, programmes, sessions and check-ins in one place. Omnirexis PT is free for your first two active clients. Start free in a couple of minutes.",
      path: "/pt",
      jsonLd: jsonLdGraph(PT_APP_JSON_LD, faqJsonLd(FAQS)),
    }),
  component: PtPage,
});

function PtPage() {
  return (
    <SiteLayout inkHero>
      <section className="bg-ink text-bone">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
              Omnirexis PT
            </p>
            <h1 className="mt-4 font-sans text-4xl leading-display tracking-tight sm:text-6xl">
              <span className="mb-4 block text-lg font-medium leading-snug text-bone/85 sm:text-xl">
                The free personal trainer app to track your clients.
              </span>
              {" "}
              Coach brilliantly.
              <span className="italic"> Run the business calmly.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/70">
              Clients, programmes, sessions, check-ins, progress and payments in
              one focused workspace. The useful depth of the big PT platforms,
              without the cockpit of unexplained buttons. Start free with your
              first two clients.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="paper" size="lg">
                <a href={PT_SIGNUP_URL}>Start free</a>
              </Button>
              <Button asChild variant="inkOutline" size="lg">
                <a href={BOOK_CALL} target="_blank" rel="noreferrer">
                  Book a call
                </a>
              </Button>
              <Button asChild variant="inkOutline" size="lg">
                <a href="#pricing">Compare plans</a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <PtConsole />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 lg:pt-20">
          <h2 className="font-sans text-3xl tracking-tight sm:text-4xl">
            A PT client management app without the cockpit
          </h2>
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-10 pb-16 sm:px-8 sm:grid-cols-2 lg:grid-cols-4 lg:pb-20">
          {[
            {
              t: "Client desk",
              d: "Profiles, notes, check-ins and the next session, attached to the right person.",
            },
            {
              t: "Programmes",
              d: "Build the week, assign the work, see who is actually doing it.",
            },
            {
              t: "Sessions & payments",
              d: "The diary and the remaining pack, without a second spreadsheet.",
            },
            {
              t: "Weekly action view",
              d: "Who is overdue, who is running out of sessions, who needs a nudge.",
            },
          ].map((item) => (
            <article key={item.t}>
              <h3 className="text-lg font-medium tracking-tight">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <h2 className="font-sans text-3xl tracking-tight sm:text-4xl">
              Check-ins and macros
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Weekly check-ins sit on the client record: weight, training and
              nutrition adherence, sleep, steps, energy, stress, mood, wins,
              problems and your trainer feedback.
            </p>
            <p className="mt-3 text-sm text-muted">
              Macro targets are estimates only, not medical advice.
            </p>
          </div>
          <div>
            <h2 className="font-sans text-3xl tracking-tight sm:text-4xl">
              Replace the spreadsheet
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              If your clients live in a spreadsheet, keep the same columns in a
              client desk instead, with sessions and check-ins on each client.
              Free for your first two active clients.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
            Pricing
          </p>
          <h2 className="mt-3 font-sans text-4xl tracking-tight">
            Start lean. Upgrade when you grow.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {PT_PLANS.map((plan) => (
              <article
                key={plan.id}
                className={cn(
                  "flex flex-col rounded-xl p-6",
                  plan.featured
                    ? "bg-ink-2 text-bone shadow-card ring-1 ring-pine"
                    : "border border-line bg-paper",
                )}
              >
                <p
                  className={cn(
                    "text-xs font-medium tracking-mark uppercase",
                    plan.featured ? "text-subtle" : "text-muted",
                  )}
                >
                  {plan.audience}
                </p>
                <h3 className="mt-3 text-xl font-medium tracking-tight">
                  {plan.name}
                </h3>
                <p className="mt-4 font-sans text-4xl tracking-tight tabular-nums">
                  {plan.price}
                  <span
                    className={cn(
                      "ml-1 font-sans text-sm",
                      plan.featured ? "text-subtle" : "text-muted",
                    )}
                  >
                    {plan.cadence}
                  </span>
                </p>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    plan.featured ? "text-bone/70" : "text-muted",
                  )}
                >
                  {plan.blurb}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-8"
                  variant={plan.featured ? "paper" : "solid"}
                >
                  <a href={PT_SIGNUP_URL}>
                    {plan.id === "free"
                      ? "Start free"
                      : `Sign up for ${plan.name}`}
                    <ArrowUpRight />
                  </a>
                </Button>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Every account starts on Free. Choose a paid plan from Billing
            inside the app when you need more clients. Questions first?{" "}
            <Link
              to="/contact"
              search={{ intent: "pt-free" }}
              className="underline"
            >
              Send an enquiry
            </Link>{" "}
            or book a strategy call.
          </p>
        </div>
      </section>
      <div className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <GuidesRow
            title="Guides for PTs"
            slugs={[
              "personal-trainer-client-tracking-spreadsheet",
              "personal-trainer-check-in-form",
              "what-app-do-personal-trainers-use",
              "personal-training-session-tracker",
              "how-to-get-more-personal-training-clients",
            ]}
          />
          <section className="py-14 lg:py-16">
            <h2 className="font-sans text-3xl tracking-tight sm:text-4xl">
              Questions about Omnirexis PT
            </h2>
            <div className="mt-4">
              <FaqList items={FAQS} />
            </div>
            <p className="mt-6 text-base text-muted">
              More answers on the{" "}
              <Link to="/faq" className="text-bone underline underline-offset-4">
                FAQ page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
      <CtaBand
        kicker="Independent trainers"
        title="Start free. Talk to us if you want a hand."
        body="Create a free trainer account in a couple of minutes. Prefer a conversation first? Book a strategy call and we will talk through fit."
        primaryHref={PT_SIGNUP_URL}
        primaryLabel="Start free"
        primaryExternal={false}
        secondaryHref={BOOK_CALL}
        secondaryLabel="Book a strategy call"
      />
    </SiteLayout>
  );
}