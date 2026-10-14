import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

/** Neutral sector grid (Ross, 14 Oct 2026 22:34): each sector is an equal entry, alphabetical. */
const SECTORS = [
  {
    to: "/gyms" as const,
    kicker: "Gyms",
    title: "Independent gyms",
    body: "Enquiries logged and chased, trial and member follow-ups, and less admin.",
    cta: "For gyms",
  },
  {
    to: "/leisure" as const,
    kicker: "Leisure",
    title: "Leisure clubs and spas",
    body: "Daily checks, maintenance, rotas and records, connected to enquiry follow-up where it helps.",
    cta: "For leisure clubs",
  },
  {
    to: "/pt" as const,
    kicker: "Personal trainers",
    title: "Omnirexis PT",
    body: "Clients, programmes, sessions and check-ins in one place. Free plan for your first two clients.",
    cta: "For personal trainers",
  },
  {
    to: "/pilates-yoga-studios" as const,
    kicker: "Studios",
    title: "Pilates and yoga studios",
    body: "Follow-ups for enquiries, intro classes and lapsed clients, around the booking system you use.",
    cta: "For studios",
  },
];

export function SectorGrid() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
          Who we work with
        </p>
        <h2 className="mt-3 max-w-2xl font-sans text-3xl tracking-tight sm:text-4xl">
          Built for fitness and leisure businesses.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((s) => (
            <article
              key={s.to}
              className="flex flex-col rounded-xl border border-line bg-paper-2/40 p-6"
            >
              <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
                {s.kicker}
              </p>
              <h3 className="mt-3 text-lg font-medium tracking-tight">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.body}</p>
              <Link
                to={s.to}
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium"
              >
                {s.cta}
                <ArrowUpRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
