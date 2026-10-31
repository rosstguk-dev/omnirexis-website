import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { ContentSection, Points } from "@/components/site/content-section";
import { BOOK_CALL, EMAIL } from "@/lib/site";

const ENQUIRY_CHECK_MAILTO = `mailto:${EMAIL}?subject=Free%20enquiry%20follow-up%20check`;

/** Check is the main ask. The Zoom Scheduler call is the next step. */
export function EnquiryCheckBand() {
  return (
    <CtaBand
      kicker="Free enquiry follow-up check"
      title="A free one-page check of how you follow up enquiries."
      body="Not sure where your enquiries slip? With your OK, Ross sends one enquiry through your website form, email or WhatsApp, signed as himself so you know it is the check, then follows what happens as a new customer would."
      primaryHref={ENQUIRY_CHECK_MAILTO}
      primaryLabel="Request a free enquiry follow-up check"
      primaryExternal={false}
      secondaryHref={BOOK_CALL}
      secondaryLabel="Book a free 30 minute Zoom strategy call"
      note="Free, and no obligation to book anything."
    />
  );
}

export function EnquiryCheckActions({ extra }: { extra?: ReactNode }) {
  return (
    <div className="mt-8">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
        <Button
          asChild
          variant="solid"
          size="lg"
          className="h-auto min-h-12 whitespace-normal py-3 text-center"
        >
          <a href={ENQUIRY_CHECK_MAILTO}>
            Request a free enquiry follow-up check
            <ArrowUpRight />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-auto min-h-12 whitespace-normal py-3 text-center"
        >
          <a href={BOOK_CALL} target="_blank" rel="noreferrer">
            Book a free 30 minute Zoom strategy call
            <ArrowUpRight />
          </a>
        </Button>
        {extra}
      </div>
      <p className="mt-5 font-mono text-xs tracking-wide text-subtle">
        Free one-page check. Or a 30 minute Zoom. No obligation.
      </p>
    </div>
  );
}

/** Offer block from /lead-follow-up-automation. */
export function EnquiryCheckSection({ actions = false }: { actions?: boolean }) {
  return (
    <ContentSection title="Free enquiry follow-up check">
      <p className="text-bone">
        Not sure where your enquiries slip? With your OK, Ross sends one enquiry through your
        website form, email or WhatsApp, signed as himself so you know it is the check, then follows
        what happens as a new customer would.
      </p>
      <Points
        items={[
          "Within 2 working days you get one page covering eight points, from how easy it is to enquire to whether a second message ever arrives.",
          "It ends with three fixes you can make yourself this week, with no new tools needed.",
          "Outside view only: what any member of the public can see. No logins, no passwords, no access to your systems.",
          "Free, and no obligation to book anything.",
        ]}
      />
      <p>
        Want one? Email <a href={ENQUIRY_CHECK_MAILTO}>{EMAIL}</a> with your business name, or ask
        on the free 30-minute Zoom.
      </p>
      {actions ? <EnquiryCheckActions /> : null}
    </ContentSection>
  );
}
