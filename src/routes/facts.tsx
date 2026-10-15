import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import {
  ADDRESS,
  BOOK_CALL,
  EMAIL,
  MISSION,
  PHONE,
  PHONE_HREF,
  PT_PLANS,
  RAPID,
  SOCIAL_LINKS,
} from "@/lib/site";
import { pageSeo } from "@/lib/page-seo";

// Verifiable facts only (master brief). No headcount, clients, reviews, results or founding date.
export const Route = createFileRoute("/facts")({
  head: () =>
    pageSeo({
      title: "Company facts | Omnirexis",
      description:
        "Plain facts about Omnirexis: what it does, services, Omnirexis PT plans and prices, UK service area, contact details, social profiles and legal pages.",
      path: "/facts",
    }),
  component: FactsPage,
});

const linkCls = "text-bone underline underline-offset-4";

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-2 border-t border-line py-5 sm:grid-cols-3">
      <dt className="font-medium text-bone">{label}</dt>
      <dd className="text-muted sm:col-span-2">{children}</dd>
    </div>
  );
}

function FactsPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Company facts"
        title="Omnirexis, in plain facts."
        lede="A short reference for anyone checking who we are. A plain text version is at /llms.txt."
      />
      <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 lg:py-16">
        <dl className="text-base leading-relaxed">
          <Row label="Name">Omnirexis (also written OMNIREXIS)</Row>
          <Row label="What it is">
            A UK consultancy setting up practical AI and connected systems for
            fitness and leisure businesses. {MISSION}
          </Row>
          <Row label="Slogan">Intelligence. Automated.</Row>
          <Row label="Founder">Ross Gallagher, with more than fifteen years in fitness and operational management.</Row>
          <Row label="Legal">
            Omnirexis is the trading name of Ross Gallagher, a sole trader. Not
            registered for VAT. See the <Link to="/terms" className={linkCls}>terms</Link>.
          </Row>
          <Row label="Who it is for">
            Independent studio, gym, spa and leisure club owners and managers,
            and personal trainers, across the UK.
          </Row>
          <Row label="Services">
            <ul className="space-y-1">
              <li><Link to="/solutions" className={linkCls}>Enquiry follow-up</Link>: phone, web form and email enquiries logged and chased, with an optional chat assistant.</li>
              <li><Link to="/solutions" className={linkCls}>Process automation</Link>: CRM updates, follow-ups and reporting around existing tools.</li>
              <li><Link to="/solutions" className={linkCls}>AI opportunity audit</Link> and approved-knowledge assistants.</li>
              <li><Link to="/leisure" className={linkCls}>Leisure operations systems</Link>: checks, maintenance, rotas and records.</li>
              <li>Scoped work is priced after a free 30 minute Zoom strategy call.</li>
            </ul>
          </Row>
          <Row label="Fixed price packs">
            <Link to="/rapid-services" className={linkCls}>Rapid services</Link>:{" "}
            {RAPID.map((r) => `${r.name} ${r.price}${r.id === "engine" ? " a month" : ""}`).join(", ")}.
          </Row>
          <Row label="Omnirexis PT">
            Live for self-serve signup. Plans:{" "}
            {PT_PLANS.map((p) => `${p.name} ${p.price}${p.id === "free" ? " (2 clients, a free plan, not a trial)" : " a month"}`).join(", ")}.
            {" "}See <Link to="/pt" className={linkCls}>/pt</Link>.
          </Row>
          <Row label="Service area">United Kingdom</Row>
          <Row label="Email"><a href={`mailto:${EMAIL}`} className={linkCls}>{EMAIL}</a></Row>
          <Row label="Phone"><a href={PHONE_HREF} className={linkCls}>{PHONE}</a></Row>
          <Row label="Postal address">
            {ADDRESS.line1}, {ADDRESS.line2}, {ADDRESS.city} {ADDRESS.postcode}. Postal address only.
          </Row>
          <Row label="Book a call">
            <a href={BOOK_CALL} target="_blank" rel="noreferrer" className={linkCls}>Free 30 minute Zoom strategy call</a>
          </Row>
          <Row label="Social profiles">
            <ul className="space-y-1">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.id}>
                  {s.name}: <a href={s.href} target="_blank" rel="noreferrer" className={linkCls}>{s.href}</a>
                </li>
              ))}
            </ul>
          </Row>
          <Row label="Guides"><Link to="/blog" className={linkCls}>Blog and guides</Link></Row>
          <Row label="Legal pages">
            <Link to="/terms" className={linkCls}>Terms</Link>,{" "}
            <Link to="/privacy" className={linkCls}>Privacy</Link>,{" "}
            <Link to="/dpa" className={linkCls}>Data processing</Link>
          </Row>
        </dl>
      </article>
    </SiteLayout>
  );
}
