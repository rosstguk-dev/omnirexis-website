import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/layout";
import { CtaBand } from "@/components/site/cta-band";
import { PtConsole } from "@/components/site/pt-console";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BOOK_CALL,
  FAQS,
  PROCESS,
  RAPID,
  SOLUTIONS,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Omnirexis — Practical AI for UK operators" },
      {
        name: "description",
        content:
          "Practical AI implementation for UK operators. Automation, voice receptionists, growth systems, a PT platform, and a rapid delivery studio. Manchester.",
      },
    ],
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
        <div className="relative mx-auto grid min-h-svh max-w-6xl items-end gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
              Manchester · Intelligence. Automated.
            </p>
            <h1 className="mt-6 font-sans text-5xl leading-display font-medium tracking-tight text-bone sm:text-6xl lg:text-7xl">
              The tools should do the work.
              <span className="text-cyan"> Not create more of it.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Omnirexis implements practical AI for UK operators — so the phone
              is answered, the enquiry is followed, the CRM is current, and your
              team is left with the work that still needs a person.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild variant="solid" size="lg">
                <a href={BOOK_CALL} target="_blank" rel="noreferrer">
                  Book a strategy call
                  <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="inkOutline" size="lg">
                <Link to="/solutions">See the work</Link>
              </Button>
            </div>
            <p className="mt-5 font-mono text-xs tracking-wide text-subtle">
              30 minutes · Senior strategist · No obligation
            </p>
          </div>
          <aside className="hidden border-l border-line-on-ink pl-8 lg:col-span-4 lg:block">
            <div className="mb-8">
              <img
                src="/brand/symbol.svg"
                alt=""
                className="h-14 w-auto opacity-90"
              />
            </div>
            <ul className="space-y-5 text-sm text-muted">
              <li>Implementation that survives Tuesday morning.</li>
              <li>Voice, automation and growth around the stack you already have.</li>
              <li>A PT platform and leisure ops for the businesses we know from the floor.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
              The gap
            </p>
            <h2 className="mt-4 font-sans text-4xl leading-tight tracking-tight sm:text-5xl">
              Most AI projects die between the demo and the diary.
            </h2>
          </div>
          <div className="space-y-8 lg:col-span-7 lg:pt-10">
            <p className="text-lg leading-relaxed text-muted">
              You do not need another platform. You need the one you already pay
              for to stop leaking time. We start with the process, agree a
              first move, and only then touch the tools.
            </p>
            <div className="grid gap-px bg-line sm:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "The work first",
                  d: "What is slow, missed or repeated. Then the stack.",
                },
                {
                  n: "02",
                  t: "Fit, not theatre",
                  d: "Established tools where they fit. Our software where it is the better job.",
                },
                {
                  n: "03",
                  t: "A handover, not a hope",
                  d: "Scoped, tested, and left in a state your team will actually run.",
                },
              ].map((item) => (
                <div key={item.n} className="bg-paper px-0 py-6 sm:px-6 sm:py-0 sm:first:pl-0">
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
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
                Practice
              </p>
              <h2 className="mt-3 font-sans text-4xl tracking-tight sm:text-5xl">
                Four ways in.
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/solutions">
                All solutions
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {SOLUTIONS.map((item) => (
              <Link
                key={item.id}
                to="/solutions"
                hash={item.id}
                className="group grid gap-3 py-8 transition-colors duration-200 hover:bg-paper-2/50 sm:grid-cols-12 sm:items-baseline sm:gap-8"
              >
                <p className="font-sans text-xl text-pine sm:col-span-2">
                  {item.index}
                </p>
                <h3 className="text-xl font-medium tracking-tight sm:col-span-4">
                  {item.name}
                </h3>
                <p className="text-muted sm:col-span-5">{item.summary}</p>
                <span className="hidden text-sm text-muted transition-transform duration-200 group-hover:translate-x-1 sm:col-span-1 sm:flex sm:justify-end">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ink text-bone">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
              Omnirexis PT
            </p>
            <h2 className="mt-4 font-sans text-4xl leading-tight tracking-tight sm:text-5xl">
              More coaching. A quieter desk.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-bone/70">
              Clients, programmes, sessions, check-ins, progress and payments in
              one workspace. Built for independent trainers who do not want a
              cockpit of unexplained buttons.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-bone/70">
              <li>Client profiles and check-ins</li>
              <li>Programme builder and progress</li>
              <li>Sessions and payments · free plan for two clients</li>
            </ul>
            <div className="mt-8">
              <Button asChild variant="paper">
                <Link to="/pt">
                  See the PT platform
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <PtConsole />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <article className="overflow-hidden rounded-xl bg-ink text-bone shadow-card">
            <div className="relative h-56">
              <img
                src="/media/floor.jpg"
                alt="Quiet gym floor at first light"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/50" />
              <div className="absolute inset-0 bg-pine/15" />
            </div>
            <div className="p-8">
              <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
                Leisure systems
              </p>
              <h2 className="mt-3 font-sans text-3xl tracking-tight">
                A clearer day for the whole team.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-bone/70">
                Daily checks, maintenance, rotas and operational records for
                gyms, spas and leisure clubs — the work that keeps the floor
                honest.
              </p>
              <Link
                to="/leisure"
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-bone"
              >
                Explore leisure systems
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </article>
          <article className="flex flex-col justify-between rounded-xl border border-line bg-paper-2/60 p-8">
            <div>
              <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
                Rapid delivery studio
              </p>
              <h2 className="mt-3 font-sans text-3xl tracking-tight">
                Useful work. Fixed price. Fast.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Original content and operations documents for fitness, leisure
                and wellness. Clear scope, one revision, Stripe invoicing.
              </p>
              <ul className="mt-6 space-y-3">
                {RAPID.map((p) => (
                  <li
                    key={p.id}
                    className="flex items-baseline justify-between gap-4 border-b border-line pb-3 text-sm"
                  >
                    <span className="font-medium">{p.name}</span>
                    <span className="tabular-nums text-muted">
                      {p.price} · {p.turnaround}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/rapid-services"
              className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium"
            >
              See packages
              <ArrowUpRight className="size-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
              How it works
            </p>
            <h2 className="mt-4 font-sans text-4xl tracking-tight sm:text-5xl">
              Five stages. Nothing vague.
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
                <li key={item.index} className="border-t border-line last:border-b">
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
                    <span className="hidden text-sm sm:inline">{item.time}</span>
                  </button>
                </li>
              );
            })}
          </ol>
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
