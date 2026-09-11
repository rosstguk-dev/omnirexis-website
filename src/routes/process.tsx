import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { BOOK_CALL, PROCESS } from "@/lib/site";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process | Omnirexis" },
      {
        name: "description",
        content:
          "How Omnirexis works: discovery, opportunity audit, solution design, implementation, and ongoing support.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="How it works"
        title="A clear path from the first conversation to daily use."
        lede="Five stages, a defined scope, and a practical handover. You always know what happens next. You do not need a technical brief to start."
      >
        <div className="mt-8">
          <Button asChild>
            <a href={BOOK_CALL} target="_blank" rel="noreferrer">
              Book the first conversation
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </PageHero>

      <ol className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        {PROCESS.map((item) => (
          <li
            key={item.index}
            className="grid gap-6 border-b border-line py-14 lg:grid-cols-12 lg:gap-10"
          >
            <p className="font-sans text-5xl text-pine lg:col-span-2">
              {item.index}
            </p>
            <div className="lg:col-span-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-sans text-3xl tracking-tight">{item.name}</h2>
                <p className="text-sm tracking-wide text-muted">{item.time}</p>
              </div>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="rounded-xl bg-paper-2 px-8 py-12 sm:px-12">
          <h2 className="font-sans text-3xl tracking-tight">
            You don’t need a technical brief.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Tell us what takes too long, what gets missed, and what you wish the
            systems could do. We will tell you whether there is a first project
            worth doing.
          </p>
        </div>
      </section>
      <CtaBand />
    </SiteLayout>
  );
}
