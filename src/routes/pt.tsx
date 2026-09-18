import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { SiteLayout } from "@/components/site/layout";
import { PtConsole } from "@/components/site/pt-console";
import { PT_PLANS } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pt")({
  head: () => ({
    meta: [
      { title: "PT platform | Omnirexis" },
      {
        name: "description",
        content:
          "Omnirexis PT — a focused workspace for trainers. In rebuild; register interest for early access.",
      },
    ],
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
              Coach brilliantly.
              <span className="italic"> Run the business calmly.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/70">
              Clients, programmes, sessions, check-ins, progress and payments in
              one focused workspace. The useful depth of the big PT platforms,
              without the cockpit of unexplained buttons. Still in rebuild —
              not a live self-serve product yet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="paper" size="lg">
                <Link to="/contact" search={{ intent: "pt-free" }}>
                  Register interest
                </Link>
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
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
          {[
            {
              t: "Client desk",
              d: "Profiles, notes, check-ins and the next session — attached to the right person.",
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
              <h2 className="text-lg font-medium tracking-tight">{item.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
            Planned pricing
          </p>
          <h2 className="mt-3 font-sans text-4xl tracking-tight">
            Start lean when it launches.
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
                  <Link to="/contact" search={{ intent: `pt-${plan.id}` }}>
                    Ask about {plan.name}
                    <ArrowUpRight />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Pricing above is planned for launch. The platform is still in
            rebuild — register interest and we will contact you when places
            open, or book a strategy call if you want to talk through fit first.
          </p>
        </div>
      </section>
      <CtaBand
        kicker="Independent trainers"
        title="Early access, not a live signup."
        body="Register interest for Free or Founding when launch places open. Prefer a conversation first? Book a strategy call and we will talk through fit."
      />
    </SiteLayout>
  );
}