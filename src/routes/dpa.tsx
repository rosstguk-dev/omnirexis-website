import { Fragment, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { ADDRESS, EMAIL } from "@/lib/site";
import { pageSeo } from "@/lib/page-seo";

export const Route = createFileRoute("/dpa")({
  head: () =>
    pageSeo({
      title: "Data processing addendum | Omnirexis",
      description:
        "The UK GDPR data processing addendum that applies when Omnirexis processes personal data for business clients.",
      path: "/dpa",
    }),
  component: DpaPage,
});

const mail = (
  <a className="text-bone underline" href={`mailto:${EMAIL}`}>
    {EMAIL}
  </a>
);

const SECTIONS: { h: string; body: ReactNode[] }[] = [
  {
    h: "1. Parties and scope",
    body: [
      <p>
        This addendum applies where Ross Gallagher trading as Omnirexis, of{" "}
        {ADDRESS.line1}, {ADDRESS.line2}, {ADDRESS.city} {ADDRESS.postcode}{" "}
        (“we”), processes personal data on behalf of a business client (“you”)
        when providing our services. You are the controller and we are the
        processor of that personal data.
      </p>,
      <p>
        This addendum forms part of our{" "}
        <Link to="/terms" className="text-bone underline">
          terms and conditions
        </Link>{" "}
        or of the proposal or quote agreed with you. It does not apply to
        personal data we hold as a controller, which is covered by our{" "}
        <Link to="/privacy" className="text-bone underline">
          privacy policy
        </Link>
        .
      </p>,
    ],
  },
  {
    h: "2. Details of the processing",
    body: [
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Subject matter: providing our automation, enquiry follow-up, content
          and software services to you.
        </li>
        <li>Duration: for as long as we provide the services, and then as set out in section 9.</li>
        <li>
          Nature and purpose: collecting, storing, organising, retrieving and
          sending personal data so the services work as agreed with you.
        </li>
        <li>
          Types of personal data: contact and enquiry details (such as names,
          email addresses, phone numbers and messages) and any data you upload
          to or connect with our services.
        </li>
        <li>Data subjects: your customers and leads.</li>
      </ul>,
    ],
  },
  {
    h: "3. Your instructions",
    body: [
      <p>
        We process the personal data only on your documented instructions,
        including these terms, the proposal and how you configure the
        services, unless the law requires otherwise. If the law requires us to
        process it in another way, we will tell you first unless the law
        forbids that. We will tell you if we think an instruction breaks data
        protection law.
      </p>,
    ],
  },
  {
    h: "4. Confidentiality and security",
    body: [
      <p>
        Anyone we authorise to process the personal data is bound by a duty of
        confidentiality. We take appropriate technical and organisational
        measures to protect it, as required by Article 32 of the UK GDPR.
      </p>,
    ],
  },
  {
    h: "5. Sub-processors",
    body: [
      <p>
        You give us general authorisation to use sub-processors. We will tell
        you before we add or replace a sub-processor, so you can object. We put
        data protection terms in place with each sub-processor that give the
        same protection as this addendum, and we remain responsible to you for
        their work. Our current sub-processors are:
      </p>,
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Vercel Inc. (United States): website and application hosting, with
          servers in the United States and Germany.
        </li>
        <li>
          Supabase Inc.: database and user accounts for Omnirexis PT, hosted in
          the London region (United Kingdom).
        </li>
        <li>Resend Inc. (United States): sending email.</li>
        <li>Stripe: payment processing for subscriptions.</li>
      </ul>,
      <p>
        Any other sub-processors needed for a particular project are named in
        the proposal. This list may change, and we will notify you of changes.
      </p>,
    ],
  },
  {
    h: "6. Data subject rights",
    body: [
      <p>
        Taking into account the nature of the processing, we will help you,
        with appropriate measures and where possible, to respond to requests
        from data subjects exercising their rights.
      </p>,
    ],
  },
  {
    h: "7. Helping you meet your obligations",
    body: [
      <p>
        We will help you meet your obligations under Articles 32 to 36 of the
        UK GDPR, covering security, personal data breaches, data protection
        impact assessments and prior consultation with the Information
        Commissioner, taking into account the nature of the processing and the
        information available to us.
      </p>,
    ],
  },
  {
    h: "8. Personal data breaches",
    body: [
      <p>
        We will tell you without undue delay after we become aware of a
        personal data breach affecting your personal data, and give you the
        information you reasonably need to meet your own obligations.
      </p>,
    ],
  },
  {
    h: "9. End of the services",
    body: [
      <p>
        When the services end, you can ask us to return or export your personal
        data within 30 days. After that we delete it from our live systems,
        unless the law requires us to keep it. Copies in backups expire in line
        with our providers’ standard backup cycles.
      </p>,
    ],
  },
  {
    h: "10. Audits and information",
    body: [
      <p>
        We will make available to you the information reasonably needed to
        show that we meet our obligations under Article 28 of the UK GDPR, and
        allow for and contribute to audits, including inspections, carried out
        by you or an auditor you appoint, on reasonable notice.
      </p>,
    ],
  },
  {
    h: "11. International transfers",
    body: [
      <p>
        We only transfer personal data outside the United Kingdom where
        appropriate safeguards are in place, such as the UK International Data
        Transfer Agreement or the UK Addendum to the EU Standard Contractual
        Clauses, or where the destination has UK adequacy regulations.
      </p>,
    ],
  },
  {
    h: "12. Governing law",
    body: [
      <p>
        This addendum is governed by the law of England and Wales, and the
        courts of England and Wales have jurisdiction.
      </p>,
    ],
  },
  {
    h: "13. Contact",
    body: [<p>Questions about this addendum? Email {mail}.</p>],
  },
];

function DpaPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Legal"
        title="Data processing addendum"
        lede="How we process personal data on behalf of our business clients under UK GDPR."
      />
      <article className="mx-auto max-w-3xl space-y-10 px-5 pb-24 text-base leading-relaxed text-muted sm:px-8">
        {SECTIONS.map((s) => (
          <section key={s.h} className="space-y-4">
            <h2 className="font-sans text-xl font-medium tracking-tight text-bone">
              {s.h}
            </h2>
            {s.body.map((b, i) => (
              <Fragment key={i}>{b}</Fragment>
            ))}
          </section>
        ))}
        <p className="text-sm">Dated 10 October 2026.</p>
      </article>
    </SiteLayout>
  );
}
