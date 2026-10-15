import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/cta-band";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { EMAIL, PHONE, PHONE_HREF, VALUES } from "@/lib/site";
import { pageSeo } from "@/lib/page-seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSeo({
      title: "About Omnirexis and founder Ross Gallagher",
      description:
        "Omnirexis helps UK fitness and leisure operators use AI properly: enquiry follow-up, process automation and the Omnirexis PT platform. Founded by Ross Gallagher. Contact hello@omnirexis.co.uk.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="The firm"
        title="We educate owners. Then the tools act like staff."
        lede="Omnirexis helps fitness and leisure operators use AI properly. Independent studio, gym, spa and leisure club owners and managers across the UK."
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="relative overflow-hidden rounded-xl lg:col-span-5">
            <img
              src="/media/studio.webp"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
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
              More than fifteen years in fitness and operational management:
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

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-3 lg:py-20">
          <div>
            <h2 className="text-lg font-medium tracking-tight">What we do</h2>
            <ul className="mt-3 space-y-2 text-base leading-relaxed text-muted">
              <li><Link to="/solutions" className="text-bone underline underline-offset-4">Enquiry follow-up and process automation</Link></li>
              <li><Link to="/pt" className="text-bone underline underline-offset-4">Omnirexis PT, live with a free plan</Link></li>
              <li><Link to="/rapid-services" className="text-bone underline underline-offset-4">Fixed price content and operations documents</Link></li>
              <li><Link to="/leisure" className="text-bone underline underline-offset-4">Leisure operations systems</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-medium tracking-tight">Where we work</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Across the UK, starting with a free 30 minute Zoom strategy call.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium tracking-tight">Contact</h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              <a href={`mailto:${EMAIL}`} className="text-bone underline underline-offset-4">{EMAIL}</a>
              <br />
              <a href={PHONE_HREF} className="text-bone underline underline-offset-4">{PHONE}</a>
              <br />
              <Link to="/facts" className="text-bone underline underline-offset-4">Company facts</Link>
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
