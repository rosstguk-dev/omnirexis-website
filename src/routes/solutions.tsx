import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { BOOK_CALL, SOLUTIONS } from "@/lib/site";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | Omnirexis" },
      {
        name: "description",
        content:
          "AI opportunity audits, voice receptionists, process automation and customer experience systems for UK operators.",
      },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Solutions"
        title="Solve the work that slows you down."
        lede="Four services, configured around the way your business already runs. Pick a starting point, or talk it through on a call — you do not need a technical brief."
      >
        <div className="mt-8">
          <Button asChild>
            <a href={BOOK_CALL} target="_blank" rel="noreferrer">
              Discuss a starting point
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        {SOLUTIONS.map((item, i) => (
          <article
            key={item.id}
            id={item.id}
            className="scroll-mt-24 grid gap-8 border-b border-line py-16 lg:grid-cols-12 lg:py-20"
          >
            <div className="lg:col-span-4">
              <p className="font-sans text-3xl text-pine">{item.index}</p>
              <h2 className="mt-3 font-sans text-3xl tracking-tight sm:text-4xl">
                {item.name}
              </h2>
              <p className="mt-3 text-sm tracking-wide text-muted">{item.kicker}</p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg leading-relaxed text-bone">{item.summary}</p>
              <ul className="mt-8 space-y-3">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="border-l-2 border-pine pl-4 text-base text-muted"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/contact" search={{ intent: item.id }}>
                    Discuss this service
                  </Link>
                </Button>
                {i === 0 ? (
                  <Button asChild variant="outline">
                    <Link to="/process">See the process</Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
      <CtaBand />
    </SiteLayout>
  );
}
