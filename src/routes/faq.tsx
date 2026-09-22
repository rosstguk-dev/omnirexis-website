import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { CtaBand } from "@/components/site/cta-band";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { FAQS } from "@/lib/site";
import { pageSeo } from "@/lib/page-seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageSeo({
      title: "FAQ | Omnirexis",
      description:
        "Straight answers about Omnirexis AI implementation, the PT platform, pricing, security, and how to start.",
      path: "/faq",
    }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="FAQ"
        title="Straight questions. Useful answers."
        lede="A little clarity before the first conversation. If yours is not here, bring it to the call."
      />
      <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <div className="max-w-3xl">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group border-b border-line open:pb-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-sans text-lg font-medium tracking-tight text-bone transition-colors hover:text-pine [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <Plus className="size-5 shrink-0 text-muted transition-transform duration-200 ease-out group-open:rotate-45" />
              </summary>
              <div className="pb-6 pr-10 text-base leading-relaxed text-muted">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
      <CtaBand />
    </SiteLayout>
  );
}
