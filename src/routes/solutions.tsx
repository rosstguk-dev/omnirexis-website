import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import type { ReactNode } from "react";
import { FaqList } from "@/components/site/faq-list";
import { BOOK_CALL, SOLUTIONS } from "@/lib/site";
import { faqJsonLd, jsonLdGraph, pageSeo, SITE_URL } from "@/lib/page-seo";

// Brief 3.3 (docs/SEO-CONTENT-PLAN.md), Client Delivery PASSED 3 Oct 2026.
// No chat channels named, no reply times, no missed-call text back.
const FAQS = [
  {
    q: "What does an AI receptionist do for a gym?",
    a: "It captures the enquiry, answers what you have approved, books the slot where your calendar allows it and hands the rest to a person.",
  },
  {
    q: "Does it sound like a robot?",
    a: "We write the call flows and approved answers with you, and test them before go-live, with ongoing refinement after that.",
  },
  {
    q: "Can it book into my calendar?",
    a: "Calendar and CRM integration where your tools allow it.",
  },
  {
    q: "What happens with questions it cannot answer?",
    a: "It hands over to a person.",
  },
  {
    q: "Where does the chat assistant run?",
    a: "On the channels we agree with you on the call.",
  },
];

/** Page-only overrides for /solutions (SOLUTIONS is shared with the homepage). */
const HEADINGS: Record<string, string> = {
  voice: "Enquiry follow-up for gyms and studios",
};

const EXTRA: Record<string, ReactNode> = {
  voice: (
    <p className="mt-6 text-base leading-relaxed text-muted">
      Each phone, web form or email enquiry is logged with the details
      captured, and the follow-ups that chase it are set up around the tools
      you already use. Anything that needs a person goes to a person. If you
      want one, a chat assistant answers from your approved information and
      hands the rest to your team.
    </p>
  ),
  automation: (
    <p className="mt-6 text-base leading-relaxed text-muted">
      Follow-ups for enquiries that come in by phone, web form or email, set
      up around the tools you already use.{" "}
      <Link
        to="/lead-follow-up-automation"
        className="text-bone underline underline-offset-4"
      >
        Lead follow-up automation
      </Link>
    </p>
  ),
  experience: (
    <p className="mt-6 text-base leading-relaxed text-muted">
      A gym AI chatbot grounded in your approved information, running on the
      channels we agree with you on the call.
    </p>
  ),
};

// Scoped work priced on a call: no offers, prices, turnaround or packages here.
const SERVICE_JSON_LD = {
  "@type": "Service",
  "@id": `${SITE_URL}/solutions#service`,
  name: "AI receptionist for gyms",
  serviceType: "AI receptionist and automation",
  url: `${SITE_URL}/solutions`,
  description:
    "AI receptionists that capture the enquiry, answer approved questions, book the slot where your calendar allows it and hand the rest to a person, plus process automation and approved-knowledge assistants for UK gyms, studios and leisure clubs. Scoped on a free 30 minute Zoom call.",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Gyms, fitness studios, spas and leisure clubs",
  },
  potentialAction: {
    "@type": "ScheduleAction",
    name: "Book a free 30 minute Zoom strategy call",
    target: BOOK_CALL,
  },
};

export const Route = createFileRoute("/solutions")({
  head: () =>
    pageSeo({
      title: "AI receptionist for gyms, studios and clubs | Omnirexis",
      description:
        "AI receptionists that capture the enquiry, answer approved questions, and book or hand over to a person. For UK gyms, studios and leisure clubs.",
      path: "/solutions",
      jsonLd: jsonLdGraph(SERVICE_JSON_LD, faqJsonLd(FAQS)),
    }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="How we set it up"
        title="Tools that become part of the workforce."
        lede="We show which tools do what, how they work together, and how that setup becomes part of the team. Start with a free 30 minute Zoom strategy call."
      >
        <div className="mt-8">
          <Button
            asChild
            className="h-auto min-h-12 whitespace-normal py-3 text-center"
          >
            <a href={BOOK_CALL} target="_blank" rel="noreferrer">
              Book a free 30 minute Zoom strategy call
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        {SOLUTIONS.map((item, i) => (
          <article
            key={item.id}
            id={item.id}
            className="scroll-mt-24 grid gap-8 border-b border-line py-16 lg:grid-cols-12 lg:py-20"
          >
            <div className="lg:col-span-4">
              <p className="font-sans text-3xl text-pine">{item.index}</p>
              <h2 className="mt-3 font-sans text-3xl tracking-tight sm:text-4xl">
                {HEADINGS[item.id] ?? item.name}
              </h2>
              <p className="mt-3 text-sm tracking-wide text-muted">{item.kicker}</p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg leading-relaxed text-bone">{item.summary}</p>
              {EXTRA[item.id] ?? null}
              <ul className="mt-8 space-y-3">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="border-l-2 border-pine pl-4 text-base text-muted"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/contact" search={{ intent: item.id }}>
                    Discuss this service
                  </Link>
                </Button>
                {i === 0 ? (
                  <Button asChild variant="outline">
                    <Link to="/process">See the process</Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </article>
        ))}
        <section className="border-b border-line py-14 lg:py-16">
          <h2 className="font-sans text-2xl tracking-tight sm:text-3xl">
            Built around your business
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            See{" "}
            <Link to="/lead-follow-up-automation" className="text-bone underline underline-offset-4">
              lead follow-up automation
            </Link>
            , how this works for{" "}
            <Link to="/gyms" className="text-bone underline underline-offset-4">
              independent gyms
            </Link>{" "}
            and{" "}
            <Link to="/pilates-yoga-studios" className="text-bone underline underline-offset-4">
              Pilates and yoga studios
            </Link>
            , or read the{" "}
            <Link to="/faq" className="text-bone underline underline-offset-4">
              FAQ
            </Link>
            .
          </p>
        </section>
        <section className="py-14 lg:py-16">
          <h2 className="font-sans text-3xl tracking-tight sm:text-4xl">
            AI receptionist questions
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
