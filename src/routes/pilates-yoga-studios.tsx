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

// Brief 3.5 (docs/SEO-CONTENT-PLAN.md), Client Delivery PASSED 3 Oct 2026.
// Not a booking system. No booking systems or chat channels named.
const FAQS = [
  {
    q: "Do I have to change my booking system?",
    a: "Not if it still earns its place. We start with what you use and which connections it supports.",
  },
  {
    q: "Can enquiries be followed up while I am teaching?",
    a: "We set up follow-ups for enquiries that come in by phone, web form or email, around the tools you already use. Each enquiry is logged and chased, and an optional chat assistant answers from what you have approved and hands the rest to a person.",
  },
  {
    q: "Can you follow up after an intro class?",
    a: "Yes, as one example of a follow-up we can set up, scoped on the call, where your booking system allows it.",
  },
  {
    q: "What does it cost?",
    a: "It is scoped on a free 30-minute Zoom and agreed before anything is built.",
  },
];

const PATH = "/pilates-yoga-studios";

export const Route = createFileRoute("/pilates-yoga-studios")({
  head: () =>
    pageSeo({
      title: "Studio booking automation for Pilates and yoga | Omnirexis",
      description:
        "Follow-ups for enquiries by phone, web form or email, set up around the tools your Pilates or yoga studio already uses. Book a free 30-minute Zoom call.",
      path: PATH,
      jsonLd: jsonLdGraph(
        {
          "@type": "Service",
          "@id": `${SITE_URL}${PATH}#service`,
          name: "Studio booking automation",
          serviceType: "Enquiry follow-ups for Pilates and yoga studios",
          url: `${SITE_URL}${PATH}`,
          description:
            "Follow-ups for enquiries that come in by phone, web form or email, set up around the booking system a Pilates or yoga studio already uses. Scoped on a free 30 minute Zoom call.",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "United Kingdom" },
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Pilates and yoga studios",
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
  component: StudiosPage,
});

function StudiosPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="For Pilates and yoga studios"
        title="Studio booking automation for Pilates and yoga studios"
        lede={MISSION}
      >
        <p className="mt-5 max-w-2xl text-xl font-medium tracking-tight text-bone">
          The enquiry that arrived mid-class should not depend on someone remembering it.
        </p>
        <ZoomCta />
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
        <ContentSection title="Between the enquiry and the first class">
          <Points
            items={[
              "Someone asks about an intro offer or a taster class while you are teaching.",
              "Enquiries land in a shared inbox, and it is not clear who has answered.",
              "The reply waits until after the evening class.",
            ]}
          />
        </ContentSection>

        <ContentSection title="We work around your Pilates booking system">
          <p>
            We are not a replacement for your Pilates booking system, yoga
            studio booking system or studio management system. We start with
            what you use and which connections it supports, and set up the
            automation around it.
          </p>
        </ContentSection>

        <ContentSection title="What we set up">
          <p className="text-bone">
            Follow-ups for enquiries that come in by phone, web form or email,
            set up around the tools you already use.
          </p>
          <Points
            items={[
              <>
                Phone, web form and email enquiries logged and chased, with the
                rest handed to a person.{" "}
                <Link to="/solutions" hash="voice">
                  Enquiry follow-up
                </Link>
              </>,
              <>
                A knowledge assistant for repeat questions, grounded in your
                approved information, on the channels we agree with you on the
                call.{" "}
                <Link to="/solutions" hash="experience">
                  Customer experience
                </Link>
              </>,
            ]}
          />
          <p>
            Examples, scoped on the call: following up after an intro class,
            or with lapsed members, where your booking system allows it.
          </p>
          <p>
            <Link to="/lead-follow-up-automation">
              How lead follow-up automation works
            </Link>{" "}
            · <Link to="/process">The process</Link>
          </p>
        </ContentSection>

        <ContentSection title="Teach PT clients too?">
          <p>
            Instructors who also train personal training clients can keep
            them in <Link to="/pt">Omnirexis PT</Link>.
          </p>
        </ContentSection>

        <GuidesRow
          title="Guides for studio owners"
          slugs={[
            "pilates-intro-offer",
            "how-to-fill-pilates-classes",
            "how-to-get-more-yoga-students",
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
