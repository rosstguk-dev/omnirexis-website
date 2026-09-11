import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { RAPID } from "@/lib/site";

export const Route = createFileRoute("/rapid-services")({
  head: () => ({
    meta: [
      { title: "Rapid delivery studio | Omnirexis" },
      {
        name: "description",
        content:
          "Fixed-price content and operations documents for fitness, leisure and wellness — delivered fast.",
      },
    ],
  }),
  component: RapidPage,
});

function RapidPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Rapid delivery studio"
        title="Useful work. Delivered fast."
        lede="Original content and practical operations documents for fitness, leisure and wellness. Clear scope, fixed price, one revision included."
      />

      <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 sm:px-8 lg:grid-cols-3 lg:py-20">
        {RAPID.map((pack) => (
          <article
            key={pack.id}
            className="flex flex-col rounded-xl border border-line bg-paper p-8"
          >
            <p className="font-mono text-xs font-medium tracking-mark text-pine uppercase">
              {pack.turnaround}
            </p>
            <h2 className="mt-4 font-sans text-3xl tracking-tight">{pack.name}</h2>
            <p className="mt-4 font-sans text-4xl tracking-tight tabular-nums">
              {pack.price}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{pack.body}</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-bone">
              {pack.points.map((p) => (
                <li key={p} className="border-l-2 border-pine pl-3">
                  {p}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link to="/contact" search={{ intent: `rapid-${pack.id}` }}>
                Start your brief
                <ArrowUpRight />
              </Link>
            </Button>
          </article>
        ))}
      </div>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="rounded-xl bg-paper-2 px-8 py-10 sm:px-12">
          <p className="max-w-3xl text-sm leading-relaxed text-muted">
            Turnaround starts once the brief and source material are complete.
            Secure invoicing. Safety-critical, medical or regulated documents
            require your approval and a competent-person review — we will not
            pretend otherwise.
          </p>
        </div>
      </section>
      <CtaBand
        kicker="Need it this week"
        title="Send the brief. We will say if it fits."
        body="If the package is the wrong shape, we will tell you before anyone writes a word."
      />
    </SiteLayout>
  );
}
