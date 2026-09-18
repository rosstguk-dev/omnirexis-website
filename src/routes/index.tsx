import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/layout";
import { CtaBand } from "@/components/site/cta-band";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BOOK_CALL, FAQS, PROCESS } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Omnirexis | Intelligence. Automated." },
      {
        name: "description",
        content:
          "Omnirexis helps fitness and leisure operators use AI properly. Independent studio, gym, spa and leisure club owners in the UK. Book a free 30 minute Zoom strategy call.",
      },
      {
        property: "og:title",
        content: "Omnirexis | Intelligence. Automated.",
      },
      {
        property: "og:description",
        content:
          "Omnirexis helps fitness and leisure operators use AI properly. Book a free 30 minute Zoom strategy call.",
      },
      { property: "og:url", content: "https://www.omnirexis.co.uk/" },
    ],
    links: [{ rel: "canonical", href: "https://www.omnirexis.co.uk/" }],
  }),
  component: Home,
});

function Home() {
  const [step, setStep] = useState(0);
  const active = PROCESS[step] ?? PROCESS[0];

  return (
    <SiteLayout inkHero>
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute inset-0 bg-aurora" />
        <div className="relative mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
              Intelligence. Automated.
            </p>
            <h1 className="mt-6 font-sans text-4xl leading-display font-medium tracking-tight text-bone sm:text-5xl lg:text-6xl">
              Omnirexis helps fitness and leisure operators{" "}
              <span className="text-cyan">use AI properly.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We show which tools do what, how they work together, and how that
              setup becomes part of the workforce so enquiries and admin stop
              falling through the cracks.
            </p>
            <div className="mt-8">
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
            </div>
            <p className="mt-5 font-mono text-xs tracking-wide text-subtle">
              Free. 30 minutes. Zoom. No obligation.
            </p>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-line-on-ink bg-ink/40 p-6 sm:p-7">
              <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
                Who it is for
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Independent studio, gym, spa and leisure club owners and
                managers in the UK, starting with the North of England. People
                who still work on the floor and do not have a big tech team.
              </p>
              <p className="mt-6 font-mono text-xs font-medium tracking-kicker text-pine uppercase">
                Why they should care
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Missed enquiries and admin lose them customers while they are
                busy running the business. The tools should become the
                workforce for the repeatable jobs, so the humans keep the work
                that needs a person.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
              What we actually do
            </p>
            <h2 className="mt-4 font-sans text-4xl leading-tight tracking-tight sm:text-5xl">
              We do not just drop tools on people.
            </h2>
          </div>
          <div className="space-y-8 lg:col-span-7 lg:pt-4">
            <p className="text-lg leading-relaxed text-muted">
              We educate the owner on how to use AI effectively, what each tool
              is for, and how the tools connect so they act like staff. Same
              way Ross has built his own setup.
            </p>
            <div className="grid gap-px bg-line sm:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "Which tools do what",
                  d: "We show the owner what each tool is for, in plain English.",
                },
                {
                  n: "02",
                  t: "How they work together",
                  d: "The tools connect, so the work does not live in one person's head.",
                },
                {
                  n: "03",
                  t: "Part of the workforce",
                  d: "Repeatable jobs sit with the setup. People keep the work that needs a person.",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="bg-paper px-0 py-6 sm:px-6 sm:py-0 sm:first:pl-0"
                >
                  <p className="font-sans text-2xl text-pine">{item.n}</p>
                  <h3 className="mt-3 text-base font-medium tracking-tight">
                    {item.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
              How it works
            </p>
            <h2 className="mt-4 font-sans text-4xl tracking-tight sm:text-5xl">
              A call. Then a first move.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {active.body}
            </p>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link to="/process">
                  The full process
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
          <ol className="lg:col-span-7">
            {PROCESS.map((item, i) => {
              const on = i === step;
              return (
                <li
                  key={item.index}
                  className="border-t border-line last:border-b"
                >
                  <button
                    type="button"
                    onClick={() => setStep(i)}
                    className={cn(
                      "flex w-full items-baseline gap-6 py-5 text-left transition-colors duration-200",
                      on ? "text-bone" : "text-muted hover:text-bone",
                    )}
                  >
                    <span className="w-10 font-sans text-xl text-pine">
                      {item.index}
                    </span>
                    <span className="flex-1 text-lg font-medium tracking-tight">
                      {item.name}
                    </span>
                    <span className="hidden text-sm sm:inline">
                      {item.time}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
            Also from Omnirexis
          </p>
          <h2 className="mt-3 max-w-2xl font-sans text-3xl tracking-tight sm:text-4xl">
            Other work we do, when it is useful. Not the starting point.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="flex flex-col rounded-xl border border-line bg-paper-2/40 p-7">
              <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
                Omnirexis PT
              </p>
              <h3 className="mt-3 text-xl font-medium tracking-tight">
                Rebuild. Interest only.
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                A quieter desk for independent trainers. Still in rebuild.
                Register interest on the PT page. Not a live signup.
              </p>
              <Link
                to="/pt"
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium"
              >
                See the PT platform
                <ArrowUpRight className="size-4" />
              </Link>
            </article>
            <article className="flex flex-col rounded-xl border border-line bg-paper-2/40 p-7">
              <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
                Leisure systems
              </p>
              <h3 className="mt-3 text-xl font-medium tracking-tight">
                Daily ops for clubs.
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                Checks, maintenance, rotas and records for gyms, spas and
                leisure clubs. Talked through on a call, not sold as a catalogue.
              </p>
              <Link
                to="/leisure"
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium"
              >
                Explore leisure systems
                <ArrowUpRight className="size-4" />
              </Link>
            </article>
            <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-paper-2/40 p-7">
              <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
                Rapid packs
              </p>
              <h3 className="mt-3 text-xl font-medium tracking-tight">
                Fixed price content and docs.
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                Content Sprint £79. Operations Document Sprint £149. For when
                you already know the piece of work.
              </p>
              <Link
                to="/rapid-services"
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium"
              >
                See packages
                <ArrowUpRight className="size-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
                Before we talk
              </p>
              <h2 className="mt-3 font-sans text-4xl tracking-tight">
                Straight answers.
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/faq">All questions</Link>
            </Button>
          </div>
          <Accordion
            type="single"
            collapsible
            className="mt-10"
            defaultValue="0"
          >
            {FAQS.slice(0, 4).map((item, i) => (
              <AccordionItem key={item.q} value={String(i)}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
