import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOK_CALL } from "@/lib/site";

export function CtaBand({
  kicker = "Free strategy call",
  title = "Book a free 30 minute Zoom strategy call.",
  body = "Tell us what is taking too long. We will talk through the tools, the gaps, and a first move.",
}: {
  kicker?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink-2 text-bone">
      <div className="pointer-events-none absolute inset-0 bg-aurora" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:items-end lg:py-24">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
            {kicker}
          </p>
          <h2 className="mt-4 font-sans text-4xl leading-display font-medium tracking-tight text-bone sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            {body}
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 lg:col-span-5 lg:items-end">
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
          <p className="font-mono text-xs tracking-wide text-subtle">
            Free. 30 minutes. Zoom. No obligation.
          </p>
        </div>
      </div>
    </section>
  );
}