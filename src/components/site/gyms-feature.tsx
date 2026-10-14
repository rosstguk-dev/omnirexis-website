import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOK_CALL } from "@/lib/site";

/** Gyms first (Ross, 14 Oct 2026): the lead audience card on the home page and /solutions. */
export function GymsFeature() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
        <div className="relative overflow-hidden rounded-xl lg:col-span-5">
          <img
            src="/media/floor.webp"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            alt="Independent gym floor in morning light"
            className="h-full min-h-64 w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/40" />
          <div className="absolute inset-0 bg-pine/15" />
        </div>
        <div className="lg:col-span-7">
          <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
            For independent gyms
          </p>
          <h2 className="mt-4 font-sans text-3xl leading-tight tracking-tight sm:text-4xl">
            Run a gym? Start here.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Enquiries logged and chased, trials followed up, quiet members
            flagged and the weekly admin connected, using n8n, HubSpot, Buffer,
            Zoom and Stripe around the tools you already use.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="solid">
              <Link to="/gyms">
                See how it works for gyms
                <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href={BOOK_CALL} target="_blank" rel="noreferrer">
                Book a free 30 minute Zoom
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
