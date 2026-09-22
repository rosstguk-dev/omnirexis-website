import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { EMAIL } from "@/lib/site";
import { pageSeo } from "@/lib/page-seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageSeo({
      title: "Privacy policy | Omnirexis",
      description:
        "How Omnirexis collects and processes enquiry data from this website.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Legal"
        title="Privacy policy"
        lede="Omnirexis is the data controller for enquiries sent through this site."
      />
      <article className="mx-auto max-w-3xl space-y-8 px-5 pb-24 text-base leading-relaxed text-muted sm:px-8">
        <p>
          We collect the name, company, email, phone number and any business
          information you choose to share on the contact form, so we can respond
          to an enquiry or book a strategy call. We do not sell this
          information.
        </p>
        <p>
          When you submit the form, the details are sent to our enquiry endpoint
          and processed by the hosting, email, and/or CRM providers we have
          configured for delivery (for example a webhook into automation or CRM,
          and transactional email). Secure service providers may also process
          details on our behalf for meeting scheduling. Access, permissions and
          data handling for client implementations are assessed per project and
          agreed before systems are connected.
        </p>
        <p>
          To ask about the information we hold, or to request a correction or
          deletion, write to{" "}
          <a className="text-bone underline" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          .
        </p>
        <p className="text-sm">Last updated September 2026.</p>
      </article>
    </SiteLayout>
  );
}
