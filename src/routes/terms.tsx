import { Fragment, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { ADDRESS, EMAIL } from "@/lib/site";
import { pageSeo } from "@/lib/page-seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageSeo({
      title: "Terms and conditions | Omnirexis",
      description:
        "The terms that apply to Omnirexis services, the Content Engine and the Omnirexis PT subscription.",
      path: "/terms",
    }),
  component: TermsPage,
});

const mail = (
  <a className="text-bone underline" href={`mailto:${EMAIL}`}>
    {EMAIL}
  </a>
);

const SECTIONS: { h: string; body: ReactNode[] }[] = [
  {
    h: "1. Who we are",
    body: [
      <p>
        Omnirexis is the trading name of Ross Gallagher, a sole trader. In
        these terms, “we”, “us” and “our” mean Ross Gallagher trading as
        Omnirexis, and “you” means the person or business using our services.
      </p>,
      <p>
        Our address is {ADDRESS.line1}, {ADDRESS.line2}, {ADDRESS.city}{" "}
        {ADDRESS.postcode}. We are not registered for VAT, so our prices do not
        include VAT. You can contact us at {mail}.
      </p>,
    ],
  },
  {
    h: "2. Our services",
    body: [
      <p>We provide:</p>,
      <ul className="list-disc space-y-2 pl-5">
        <li>
          automation and enquiry follow-up services, which log and chase
          enquiries that come in by phone, web form and email, with an
          optional chat assistant;
        </li>
        <li>the Content Engine, a monthly content service at £349 a month;</li>
        <li>
          Omnirexis PT, a software subscription for personal trainers, with
          four plans: Free (£0, up to 2 clients, a free plan and not a
          time-limited trial), Founding (£14.99 a month), Solo (£17.99 a month)
          and Pro (£24.99 a month).
        </li>
      </ul>,
      <p>
        Current prices and plan details are shown on our website and in the
        app. Custom work is set out in a written proposal or quote. Where a
        proposal or quote differs from these terms, the proposal or quote
        takes priority.
      </p>,
    ],
  },
  {
    h: "3. Accounts and acceptable use",
    body: [
      <p>
        If you create an account, you must give accurate information, keep it
        up to date and keep your login details secure. You are responsible for
        activity under your account.
      </p>,
      <p>
        You must not use our services for anything unlawful or abusive, to
        send spam, to reverse engineer or copy our software, or in a way that
        overloads or disrupts our systems.
      </p>,
    ],
  },
  {
    h: "4. Subscriptions and billing",
    body: [
      <p>
        Paid subscriptions are billed through Stripe, monthly in advance, and
        renew automatically each month until cancelled. You can cancel at any
        time. Cancellation takes effect at the end of your current billing
        period, and you keep access until then.
      </p>,
      <p>
        We do not give refunds for part months, except where the law requires.
        We may change our prices by giving you at least 30 days’ notice before
        the change applies to you.
      </p>,
    ],
  },
  {
    h: "5. Cooling-off rights for consumers",
    body: [
      <p>
        If you are a consumer (buying for purposes outside your trade or
        business) and you buy from us at a distance, you normally have 14 days
        to cancel under the Consumer Contracts (Information, Cancellation and
        Additional Charges) Regulations 2013.
      </p>,
      <p>
        If you ask us to start a service within those 14 days and then cancel,
        you must pay for what we have provided up to the point you cancel. If
        we supply digital content or software straight away with your consent,
        and you acknowledge that you will lose your right to cancel, that right
        ends once supply starts.
      </p>,
      <p>
        When you start a paid Omnirexis PT plan, you can tick a box to ask for
        your subscription to start straight away. If you are a consumer and you
        do not tick that box, you keep your 14-day right to cancel. If you
        cancel within those 14 days after you have started using the service,
        you may have to pay for what you have used.
      </p>,
      <p>
        Most of our customers are businesses. Business customers do not have
        these statutory cooling-off rights.
      </p>,
    ],
  },
  {
    h: "6. Setup fees for custom work",
    body: [
      <p>
        Any setup fee for custom work is stated in the proposal or quote and is
        paid as stated there, for example in full upfront or in two parts. Once
        setup work has started, the setup fee is non-refundable, except where
        the law requires or where we fail to deliver what we agreed.
      </p>,
    ],
  },
  {
    h: "7. Your responsibilities",
    body: [
      <p>
        You are responsible for making sure the data, contact lists and
        marketing consents you use with our services are lawful, including
        under UK GDPR and the Privacy and Electronic Communications Regulations
        (PECR), and that you have the right to share that data with us. You are
        also responsible for the accuracy of the content you give us and the
        approvals you give.
      </p>,
      <p>
        When we handle your customers’ data, we act on your instructions. Our{" "}
        <Link to="/dpa" className="text-bone underline">
          data processing addendum
        </Link>{" "}
        applies to that processing.
      </p>,
    ],
  },
  {
    h: "8. Intellectual property",
    body: [
      <p>
        We keep all rights in our software, templates, workflows and know-how.
        You own your data and your content. Once you have paid, you may use the
        deliverables we make for you in your business. We will only name you as
        a customer with your permission.
      </p>,
    ],
  },
  {
    h: "9. Availability",
    body: [
      <p>
        We aim to keep our services reliable, but we do not guarantee any level
        of uptime. We rely on third-party providers, such as our hosting
        provider, Stripe and email providers, which may have outages. We may
        also need to carry out maintenance from time to time.
      </p>,
    ],
  },
  {
    h: "10. Our liability",
    body: [
      <p>
        If you are a business customer, our total liability to you under or in
        connection with these terms is limited to the greater of the fees you
        paid us in the 12 months before the claim or £100. We are also not
        liable to business customers for any indirect or consequential loss, or
        for loss of profit, revenue or data.
      </p>,
      <p>
        Nothing in these terms limits or excludes our liability for death or
        personal injury caused by our negligence, for fraud or fraudulent
        misrepresentation, or for anything else that cannot be limited or
        excluded by law.
      </p>,
      <p>
        If you are a consumer, nothing in these terms limits or excludes your
        statutory rights under the Consumer Rights Act 2015 or other consumer
        law.
      </p>,
    ],
  },
  {
    h: "11. Ending the agreement",
    body: [
      <p>
        You can end your subscription or agreement as set out above. We may
        suspend or end your access if you do not pay, or if you seriously
        breach these terms.
      </p>,
      <p>
        When an agreement ends, you can ask us to export your data within 30
        days. After that we will delete it, in line with our privacy policy.
      </p>,
    ],
  },
  {
    h: "12. Changes to these terms",
    body: [
      <p>
        We may update these terms. If we make a material change, we will give
        you notice before it takes effect, for example by email or in the app.
      </p>,
    ],
  },
  {
    h: "13. Privacy",
    body: [
      <p>
        How we handle personal data is explained in our{" "}
        <Link to="/privacy" className="text-bone underline">
          privacy policy
        </Link>
        .
      </p>,
    ],
  },
  {
    h: "14. Governing law",
    body: [
      <p>
        These terms are governed by the law of England and Wales, and the
        courts of England and Wales have jurisdiction. If you are a consumer
        living in Scotland or Northern Ireland, you may also bring a claim in
        the courts where you live.
      </p>,
    ],
  },
  {
    h: "15. Contact",
    body: [<p>Questions about these terms? Email {mail}.</p>],
  },
];

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Legal"
        title="Terms and conditions"
        lede="The terms that apply when you use Omnirexis services and Omnirexis PT."
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
        <p className="text-sm">Last updated 10 October 2026.</p>
      </article>
    </SiteLayout>
  );
}
