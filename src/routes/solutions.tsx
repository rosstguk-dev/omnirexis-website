import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { BOOK_CALL, SOLUTIONS } from "@/lib/site";
import { pageSeo, SITE_URL } from "@/lib/page-seo";

// Scoped work priced on a call: no offers, prices, turnaround or packages here.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lead follow up automation",
  serviceType: "Lead follow up automation",
  url: `${SITE_URL}/solutions`,
  description:
    "Enquiry and lead follow up automation, AI receptionists and process automation for UK gyms, studios and leisure clubs. Scoped on a free 30 minute Zoom call.",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Gyms, fitness studios, spas and leisure clubs",
  },
  potentialAction: {
    "@type": "ScheduleAction",
    name: "Book a free 30 minute Zoom strategy call",
    target: BOOK_CALL,
  },
};

export const Route = createFileRoute("/solutions")({
  head: () =>
    pageSeo({
      title: "Lead follow up automation and AI receptionists | Omnirexis",
      description:
        "Lead follow up automation, AI receptionists and opportunity audits for UK gyms and studios, around the gym CRM you already use. Scoped on a free Zoom call.",
      path: "/solutions",
      jsonLd: SERVICE_JSON_LD,
    }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="How we set it up"
        title="Tools that become part of the workforce."
        lede="We show which tools do what, how they work together, and how that setup becomes part of the team. Start with a free 30 minute Zoom strategy call."
      >
        <div className="mt-8">
          <Button
            asChild
            className="h-auto min-h-12 whitespace-normal py-3 text-center"
          >
            <a href={BOOK_CALL} target="_blank" rel="noreferrer">
              Book a free 30 minute Zoom strategy call
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
