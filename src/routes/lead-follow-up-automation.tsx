import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/cta-band";
import { ContentSection, Points } from "@/components/site/content-section";
import { FaqList } from "@/components/site/faq-list";
import { GuidesRow } from "@/components/site/guides-row";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { ZoomCta } from "@/components/site/zoom-cta";
import { BOOK_CALL, MISSION, PROCESS } from "@/lib/site";
import { faqJsonLd, jsonLdGraph, pageSeo, SITE_URL } from "@/lib/page-seo";

// Brief 3.2 (docs/SEO-CONTENT-PLAN.md), Client Delivery PASSED 3 Oct 2026.
// Scoped work priced on a call: no price, turnaround or package anywhere on this page or in its schema.
const FAQS = [
  {
    q: "How much does lead follow-up automation cost?",
    a: "It is scoped around the job and agreed before anything is built. Start with a free 30-minute Zoom.",
  },
  {
    q: "Do I need to replace my CRM or booking software?",
    a: "Not if it still earns its place. We start with what you already use and which connections it supports.",
  },
  {
    q: "Will it replace my front desk staff?",
    a: "No. The tools take the repeatable jobs, so people keep the work that needs a person. You decide where that line sits.",
  },
  {
    q: "Is our data safe?",
    a: "Access, permissions and data handling are assessed for each setup and discussed before anything is connected.",
  },
  {
    q: "How long does it take?",
    a: "It depends on your systems, access, data and scope. We agree a realistic plan before starting.",
  },
];

const PATH = "/lead-follow-up-automation";

export const Route = createFileRoute("/lead-follow-up-automation")({
  head: () =>
    pageSeo({
      title: "Lead follow-up automation for gyms and studios | Omnirexis",
      description:
        "Every enquiry answered, every lead followed up. We set up lead follow-up automation around the tools you already use. Book a free 30-minute Zoom call.",
      path: PATH,
      jsonLd: jsonLdGraph(
        {
          "@type": "Service",
          "@id": `${SITE_URL}${PATH}#service`,
          name: "Lead follow-up automation",
          serviceType: "Lead follow-up automation",
          url: `${SITE_URL}${PATH}`,
          description:
            "Follow-ups for enquiries that come in by phone, web form or email, set up around the tools you already use. Scoped on a free 30 minute Zoom call.",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "United Kingdom" },
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Gyms, fitness studios and leisure clubs",
          },
          potentialAction: {
            "@type": "ScheduleAction",
            name: "Book a free 30 minute Zoom strategy call",
            target: BOOK_CALL,
          },
        },
        faqJsonLd(FAQS),
      ),
    }),
  component: LeadFollowUpPage,
});

function LeadFollowUpPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Lead follow-up automation"
        title="Lead follow-up automation for gyms, studios and leisure clubs"
        lede={MISSION}
      >
        <p className="mt-5 max-w-2xl text-xl font-medium tracking-tight text-bone">
          The enquiry that arrived mid-class still gets followed up.
        </p>
        <ZoomCta />
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
        <ContentSection title="Where leads go missing">
          <Points
            items={[
              "An enquiry comes in while you are teaching or on the floor, and the reply waits until you are free.",
              "Enquiries land in a shared info@ or hello@ inbox, and nobody is sure who has answered.",
              "With more than one site, enquiries arrive in different places instead of one inbox.",
              "Follow-ups live in one person's head, so they stop when that person is busy or away.",
            ]}
          />
        </ContentSection>

        <ContentSection title="What we set up">
          <p className="text-bone">
            Follow-ups for enquiries that come in by phone, web form or email,
            set up around the tools you already use.
          </p>
          <Points
            items={[
              <>
                CRM updates and reporting, so each enquiry and its next step
                are recorded.{" "}
                <Link to="/solutions" hash="automation">
                  Process automation
                </Link>
              </>,
              <>
                Voice receptionists that capture the enquiry, answer the
                questions you have approved, book the slot and hand the rest
                to a person.{" "}
                <Link to="/solutions" hash="voice">
                  Voice receptionists
                </Link>
              </>,
            ]}
          />
          <p>
            Examples, scoped on the call: following up after an intro class,
            or with lapsed members, where your booking system allows it.
          </p>
        </ContentSection>

        <ContentSection title="Works with the CRM you already use">
          <p>
            Do you need a new gym CRM? Not if the one you have still earns its
            place. We start with what you already use and which connections
            it supports. Any proposed change is discussed before we set
            anything up.
          </p>
        </ContentSection>

        <ContentSection title="How it works">
          <ol className="space-y-4">
            {PROCESS.map((step) => (
              <li key={step.index} className="flex gap-4">
                <span className="w-8 shrink-0 font-sans text-pine">
                  {step.index}
                </span>
                <span>
                  <strong>{step.name}.</strong> {step.body}
                </span>
              </li>
            ))}
          </ol>
          <p>
            <Link to="/process">See the full process</Link>
          </p>
        </ContentSection>

        <ContentSection title="What it costs">
          <p>
            Scoped around the job and agreed before anything is built. We
            work it out with you on a free 30-minute Zoom.
          </p>
        </ContentSection>

        <ContentSection title="Built for your kind of business">
          <p>
            Read how this works for{" "}
            <Link to="/gyms">independent gyms</Link> and for{" "}
            <Link to="/pilates-yoga-studios">Pilates and yoga studios</Link>,
            or see the <Link to="/faq">FAQ</Link>.
          </p>
        </ContentSection>

        <GuidesRow
          title="Guides on following up leads"
          slugs={[
            "how-to-follow-up-gym-leads",
            "gym-trial-follow-up-email",
            "gym-enquiry-form-template",
          ]}
        />

        <section className="py-14 lg:py-16">
          <h2 className="font-sans text-3xl tracking-tight sm:text-4xl">
            Questions
          </h2>
          <div className="mt-4">
            <FaqList items={FAQS} />
          </div>
        </section>
      </div>
      <CtaBand />
    </SiteLayout>
  );
}
