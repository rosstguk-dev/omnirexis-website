import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOK_CALL } from "@/lib/site";

/** The service CTA: the free 30 minute Zoom strategy call. */
export function ZoomCta() {
  return (
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
      <p className="mt-5 font-mono text-xs tracking-wide text-subtle">
        Free. 30 minutes. Zoom. No obligation.
      </p>
    </div>
  );
}
