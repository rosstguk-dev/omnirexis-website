import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/cta-band";
import { ContentSection, Points } from "@/components/site/content-section";
import { FaqList } from "@/components/site/faq-list";
import { GuidesRow } from "@/components/site/guides-row";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { ZoomCta } from "@/components/site/zoom-cta";
import { BOOK_CALL, MISSION } from "@/lib/site";
import { faqJsonLd, jsonLdGraph, pageSeo, SITE_URL } from "@/lib/page-seo";

// Brief 3.4 (docs/SEO-CONTENT-PLAN.md), Client Delivery PASSED 3 Oct 2026.
// "Gym marketing automation" is explained as follow-ups and CRM updates. We don't run ads or social media.
const FAQS = [
  {
    q: "Is this a gym management or booking system?",
    a: "No. Omnirexis sets up and connects follow-ups and CRM updates around the tools you already use.",
  },
  {
    q: "Do you run our ads or social media?",
    a: "No. We don't run ads or social media.",
  },
  {
    q: "Do I need a big team or a tech person?",
    a: "No. It is built for owners without a big tech team, and we show you what each tool is for and how the tools connect.",
  },
  {
    q: "What does it cost?",
    a: "It is scoped around the job and agreed before anything is built, starting with a free 30-minute Zoom.",
  },
  {
    q: "Will it replace my staff?",
    a: "No. The tools take the repeatable jobs, so people keep the work that needs a person. You stay in control of where that line sits.",
  },
];

const PATH = "/gyms";

export const Route = createFileRoute("/gyms")({
  head: () =>
    pageSeo({
      title: "Gym marketing automation for independent gyms | Omnirexis",
      description:
        "Gym marketing automation, explained plainly: follow-ups and CRM updates set up around the tools you already use. For UK gyms. Book a free 30-minute Zoom.",
      path: PATH,
      jsonLd: jsonLdGraph(
        {
          "@type": "Service",
          "@id": `${SITE_URL}${PATH}#service`,
          name: "Gym marketing automation",
          serviceType: "Follow-ups and CRM updates for gyms",
          url: `${SITE_URL}${PATH}`,
          description:
            "Follow-ups and CRM updates for independent gyms, set up around the tools you already use. Scoped on a free 30 minute Zoom call.",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "United Kingdom" },
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Independent gyms",
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
  component: GymsPage,
});

function GymsPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="For independent gyms"
        title="Gym marketing automation for independent gyms"
        lede={MISSION}
      >
        <p className="mt-5 max-w-2xl text-xl font-medium tracking-tight text-bone">
          For independent gym owners who still work the floor.
        </p>
        <ZoomCta />
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
        <ContentSection title="What we mean by gym marketing automation">
          <p>
            Follow-ups and CRM updates. Follow-ups for enquiries that come in
            by phone, web form or email, set up around the tools you already
            use, with each enquiry and its next step updated in the CRM you
            already use.
          </p>
          <p className="text-bone">We don't run ads or social media.</p>
          <p>
            <Link to="/lead-follow-up-automation">
              How lead follow-up automation works
            </Link>
          </p>
        </ContentSection>

        <ContentSection title="The jobs that slip">
          <Points
            items={[
              "Enquiries that come in during the busy hour, while you are on the gym floor.",
              "Follow-ups that depend on someone remembering to send them.",
              "Members who go quiet, and nobody notices until they cancel.",
            ]}
          />
        </ContentSection>

        <ContentSection title="Examples of follow-ups we set up">
          <Points
            items={[
              "Following up after an intro or induction session.",
              "Following up with lapsed members.",
            ]}
          />
          <p>
            These are examples, scoped on the call, where your booking system
            allows it.
          </p>
        </ContentSection>

        <ContentSection title="Works around your gym booking system">
          <p>
            Omnirexis is not a gym booking system or gym appointment booking
            software. We start with the system you have and the connections
            it supports, and set up the follow-ups around it.
          </p>
          <p>
            See all <Link to="/solutions">solutions</Link> and{" "}
            <Link to="/process">how the process works</Link>.
          </p>
        </ContentSection>

        <ContentSection title="Run a leisure club or spa as well?">
          <p>
            See how we approach{" "}
            <Link to="/leisure">leisure clubs and spas</Link>.
          </p>
        </ContentSection>

        <GuidesRow
          title="Guides for gym owners"
          slugs={[
            "how-to-follow-up-gym-leads",
            "gym-member-retention-strategies",
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
