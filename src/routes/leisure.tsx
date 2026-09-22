import { createFileRoute, Link } from "@tanstack/react-router";
import { pageSeo } from "@/lib/page-seo";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/leisure")({
  head: () =>
    pageSeo({
      title: "Leisure systems | Omnirexis",
      description:
        "Practical checks, staff tasks, maintenance and reporting for gyms, spas and leisure clubs.",
      path: "/leisure",
    }),
  component: LeisurePage,
});

const PILLARS = [
  {
    t: "Daily checks",
    d: "Opening, closing and floor standards that actually get done — and can be shown when someone asks.",
  },
  {
    t: "Maintenance",
    d: "What is broken, who owns it, and whether it is still outstanding. Less shouting across the gym floor.",
  },
  {
    t: "Rotas and tasks",
    d: "The day’s work, assigned, without a WhatsApp group doing the job of an operations system.",
  },
  {
    t: "Records",
    d: "Operational notes a manager can stand behind — for the team, for the next shift, for the audit.",
  },
];

function LeisurePage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Leisure systems"
        title="A clearer day, for the whole team."
        lede="Practical checks, staff tasks, maintenance and reporting for gyms, spas and leisure clubs. Built from years on the floor — not from a generic ops template."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contact" search={{ intent: "leisure" }}>
              Talk through a club
              <ArrowUpRight />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/rapid-services">Operations documents</Link>
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="relative overflow-hidden rounded-xl lg:col-span-6">
            <img
              src="/media/floor.jpg"
              alt="Independent gym floor in morning light"
              className="h-full min-h-72 w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/45" />
            <div className="absolute inset-0 bg-pine/15" />
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-sans text-3xl tracking-tight sm:text-4xl">
              Keep the daily operation in order.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Leisure businesses do not fail for lack of a vision board. They
              fail in the gap between the duty manager’s memory and the next
              shift. We put that work in a system the team will use.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Connected, where it helps, to the same automation and voice work
              we run for the rest of the business — one point of contact.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:grid-cols-2 lg:py-24">
        {PILLARS.map((item) => (
          <article key={item.t} className="border-t border-line pt-6">
            <h2 className="text-xl font-medium tracking-tight">{item.t}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">{item.d}</p>
          </article>
        ))}
      </section>
      <CtaBand
        kicker="Gyms, spas, clubs"
        title="Walk us through a typical day."
        body="If the first project is a checklist, we will say so. If it is a full operating layer, we will scope it properly."
      />
    </SiteLayout>
  );
}
