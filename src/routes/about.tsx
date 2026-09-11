import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/cta-band";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { VALUES } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Omnirexis" },
      {
        name: "description",
        content:
          "Omnirexis is a UK AI implementation practice led by Ross Gallagher — grounded in real operational work.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="The firm"
        title="Good technology. Grounded in real work."
        lede="Omnirexis is a UK AI implementation practice. We help operators save time, improve the customer’s next step, and turn more enquiries into conversations — without replacing the systems that already earn their keep."
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="relative overflow-hidden rounded-xl lg:col-span-5">
            <img
              src="/media/studio.jpg"
              alt="Studio desk in morning light"
              className="h-full min-h-80 w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/50" />
            <div className="absolute inset-0 bg-pine/15" />
          </div>
          <div className="lg:col-span-7">
            <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
              Founder
            </p>
            <h2 className="mt-3 font-sans text-3xl tracking-tight sm:text-4xl">
              Ross Gallagher
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              More than fifteen years in fitness and operational management —
              gyms, leisure clubs, the unglamorous work that keeps a site
              running. Omnirexis exists because that work is still done in
              inboxes, whiteboards and someone’s head, while the market sells
              another demo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We start with the process, the people and the outcome. Then we
              select established tools or specialist software that fit the job,
              connect them where we can, and agree what success should look
              like.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="font-sans text-3xl tracking-tight">How we choose the work</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {VALUES.map((v) => (
            <article key={v.name} className="border-t border-line pt-6">
              <h3 className="text-lg font-medium tracking-tight">{v.name}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{v.body}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </SiteLayout>
  );
}
