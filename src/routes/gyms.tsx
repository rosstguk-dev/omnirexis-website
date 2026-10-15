import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { ContentSection, Points } from "@/components/site/content-section";
import { FaqList } from "@/components/site/faq-list";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { BOOK_CALL, MISSION, ptSignup } from "@/lib/site";
import { faqJsonLd, jsonLdGraph, pageSeo, SITE_URL } from "@/lib/page-seo";

// Gyms flagship (Ross, 14 Oct 2026: gyms are the main audience).
// Master 0A: enquiry follow-up only (no call answering), no invented stats or outcomes,
// PT claims limited to real features (free plan, 2 clients). We don't run ads or social media.
const PATH = "/gyms";
const PT_SIGNUP_URL = ptSignup("site_gyms");

const PROBLEMS = [
  {
    t: "Missed enquiries",
    d: "Phone, web form and email enquiries land while you are coaching or on the gym floor. Some never get a reply.",
  },
  {
    t: "Slow lead follow-up",
    d: "The first reply waits for a free minute, and the second one depends on someone remembering to send it.",
  },
  {
    t: "Trials that never join",
    d: "Someone books a trial or induction, trains once, and nobody checks in before the moment passes.",
  },
  {
    t: "Cancellations and quiet members",
    d: "Members drift off long before they cancel, and the signs sit unread in the booking system.",
  },
  {
    t: "Admin that eats the week",
    d: "Copying enquiries into spreadsheets, chasing follow-ups and booking calls, all by hand.",
  },
];

const STACK = [
  {
    t: "n8n",
    d: "The automation layer. It moves each enquiry and trial between your tools and runs the follow-up steps you agree, on a schedule you can see.",
  },
  {
    t: "HubSpot",
    d: "The CRM. Every enquiry from phone, web form and email is logged in one place with its source, status and next step, so nothing lives in someone's head.",
  },
  {
    t: "Zoom",
    d: "A booking link for consultations or calls that can sit inside follow-up emails, so a lead can pick a time without the back and forth.",
  },
  {
    t: "Chat assistant (optional)",
    d: "A chat assistant on your website that answers from information you approve, with handover to a person.",
  },
];

const FIXES = [
  "Every phone, web form and email enquiry logged in HubSpot, with a follow-up sequence that keeps going until someone replies or a person takes over.",
  "Trial and induction follow-ups timed around the visit, with a reminder for your team to make the personal call.",
  "Quiet members flagged from the data your booking system shares, so you can step in before they cancel.",
    "A short weekly view of new enquiries, trials and follow-ups due, instead of a pile of notes.",
];

const OUTCOMES = [
  {
    t: "Fewer enquiries slip through",
    d: "Each enquiry has a record and a next step, so it is clear what has been answered and what has not.",
  },
  {
    t: "Faster, steadier follow-up",
    d: "The first reply and the chasers go out on time, even on the days you are short-staffed.",
  },
  {
    t: "A clearer path from trial to member",
    d: "Trial visitors hear from you at the right moments, and your team knows who to call.",
  },
  {
    t: "Earlier warning on retention",
    d: "Quiet members show up on a list while there is still time to do something about it.",
  },
  {
    t: "Less admin for you",
    d: "The repeatable jobs sit with the setup, so you and your team keep the work that needs a person.",
  },
];

const FAQS = [
  {
    q: "Is this a gym management or booking system?",
    a: "No. Omnirexis sets up and connects follow-ups and CRM updates around the gym software you already use. We start with the connections your booking system supports.",
  },
  {
    q: "Which tools do you use?",
    a: "Usually n8n for the automation, HubSpot as the CRM and Zoom for booked calls, with an optional chat assistant on your website. Which ones you need is agreed on the call, and we show you what each one does.",
  },
  {
    q: "Do you answer our phones?",
    a: "No. Phone enquiries are logged and chased with follow-ups alongside web form and email enquiries. A chat assistant on your website is optional.",
  },
  {
    q: "Do you run our ads or social media?",
    a: "No. We don't run ads or manage your social media.",
  },
  {
    q: "Can you guarantee more members?",
    a: "No, and we would be wary of anyone who did. We set up the follow-up and admin so fewer enquiries are missed and your team can act sooner. What changes depends on your gym.",
  },
  {
    q: "Do I need a big team or a tech person?",
    a: "No. It is built for owners without a big tech team. We set it up, test it, and show you how it works.",
  },
  {
    q: "What does it cost?",
    a: "It is scoped around the job and agreed in writing before anything is built, starting with a free 30 minute Zoom strategy call.",
  },
  {
    q: "Can our personal trainers use Omnirexis PT?",
    a: "Yes. Omnirexis PT is live with a free plan for up to two clients, covering programmes, sessions, check-ins and macros. Each trainer signs up for their own account.",
  },
];

export const Route = createFileRoute("/gyms")({
  head: () =>
    pageSeo({
      title: "Gym enquiry follow-up and automation for UK gyms | Omnirexis",
      description:
        "For independent UK gyms: enquiries logged and chased, trial and member follow-ups, and less admin, set up with n8n, HubSpot and Zoom. Book a free Zoom.",
      path: PATH,
      jsonLd: jsonLdGraph(
        {
          "@type": "Service",
          "@id": `${SITE_URL}${PATH}#service`,
          name: "Enquiry follow-up and automation for gyms",
          serviceType: "Enquiry follow-up, CRM and admin automation for gyms",
          url: `${SITE_URL}${PATH}`,
          description:
            "Phone, web form and email enquiries logged and chased, trial and member follow-ups, and admin automation for independent UK gyms, set up with n8n, HubSpot and Zoom. Scoped on a free 30 minute Zoom call.",
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
        title="Every gym enquiry logged, chased and followed up."
        lede={MISSION}
      >
        <p className="mt-5 max-w-2xl text-xl font-medium tracking-tight text-bone">
          For independent UK gym owners who still work the floor. We connect
          n8n, HubSpot and Zoom around the tools you already use.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            asChild
            variant="solid"
            size="lg"
            className="h-auto min-h-12 whitespace-normal py-3 text-center"
          >
            <a href={BOOK_CALL} target="_blank" rel="noreferrer">
              Book a free 30 minute Zoom strategy call
              <ArrowUpRight />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-auto min-h-12 whitespace-normal py-3 text-center"
          >
            <a href={PT_SIGNUP_URL}>Your PTs can start free</a>
          </Button>
        </div>
        <p className="mt-5 font-mono text-xs tracking-wide text-subtle">
          Free. 30 minutes. Zoom. No obligation.
        </p>
      </PageHero>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="relative overflow-hidden rounded-xl lg:col-span-6">
            <img
              src="/media/floor.webp"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              alt="Independent gym floor in morning light"
              className="h-full min-h-72 w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/45" />
            <div className="absolute inset-0 bg-pine/15" />
          </div>
          <div className="lg:col-span-6">
            <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
              The problem
            </p>
            <h2 className="mt-3 font-sans text-3xl tracking-tight sm:text-4xl">
              The jobs that slip when you are on the floor.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Independent gyms rarely lose people for lack of effort. They
              lose them in the gap between a busy session and the next free
              minute at the desk.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:grid-cols-2 lg:grid-cols-3 lg:py-24">
        {PROBLEMS.map((item) => (
          <article key={item.t} className="border-t border-line pt-6">
            <h3 className="text-xl font-medium tracking-tight">{item.t}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">{item.d}</p>
          </article>
        ))}
      </section>

      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
        <ContentSection kicker="How we fix it" title="Tools set up to work together">
          <p>
            We set up and connect these tools for your gym, test the handoffs,
            and show you what each one does. You only get the parts that fit.
          </p>
          <div className="grid gap-px bg-line sm:grid-cols-2">
            {STACK.map((item) => (
              <div key={item.t} className="bg-paper py-5 sm:p-5">
                <h3 className="text-base font-medium tracking-tight text-bone">
                  {item.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection kicker="What we set up" title="What it looks like in a gym">
          <Points items={FIXES} />
          <p>
            These are examples, scoped on the call, where your booking system
            and current tools allow it. See{" "}
            <Link to="/lead-follow-up-automation">
              how lead follow-up automation works
            </Link>
            .
          </p>
        </ContentSection>

        <ContentSection kicker="Outcomes" title="What should feel different">
          <div className="grid gap-8 sm:grid-cols-2">
            {OUTCOMES.map((item) => (
              <div key={item.t} className="border-t border-line pt-5">
                <h3 className="text-lg font-medium tracking-tight text-bone">
                  {item.t}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{item.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm">
            No guaranteed results. What changes depends on your gym, your
            tools and your team.
          </p>
        </ContentSection>

        <ContentSection kicker="Your trainers" title="Omnirexis PT, free for your PTs">
          <p>
            Omnirexis PT is live with a free plan for up to two clients:
            programmes, sessions, check-ins and macros in one place. Each
            trainer signs up for their own account.
          </p>
          <p>
            <a href={PT_SIGNUP_URL}>Start free on Omnirexis PT</a> or see{" "}
            <Link to="/pt">the PT platform and plans</Link>.
          </p>
        </ContentSection>

        <ContentSection title="Works around your gym software">
          <p>
            Omnirexis is not a gym booking system. We start with the system
            you have and the connections it supports. See all{" "}
            <Link to="/solutions">solutions</Link>,{" "}
            <Link to="/process">how the process works</Link>, or how we
            approach <Link to="/leisure">leisure clubs and spas</Link> and{" "}
            <Link to="/pilates-yoga-studios">Pilates and yoga studios</Link>.
          </p>
        </ContentSection>

        {/* Guides for gym owners: hidden until at least one of these guides is published. */}

        <section className="py-14 lg:py-16">
          <h2 className="font-sans text-3xl tracking-tight sm:text-4xl">
            Gym owner questions
          </h2>
          <div className="mt-4">
            <FaqList items={FAQS} />
          </div>
        </section>
      </div>
      <CtaBand
        kicker="For gym owners"
        title="Book a free 30 minute Zoom strategy call."
        body="Tell us where enquiries, trials and admin are slipping. We will talk through your tools and a sensible first move."
        secondaryHref={PT_SIGNUP_URL}
        secondaryLabel="Your PTs can start free"
        secondaryExternal={false}
      />
    </SiteLayout>
  );
}
