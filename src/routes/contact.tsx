import { type FormEvent, type ReactNode, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import {
  ADDRESS,
  BOOK_CALL,
  EMAIL,
  HOURS,
  LINKEDIN,
  PHONE,
  PHONE_HREF,
} from "@/lib/site";

type Search = { intent?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    intent: typeof s.intent === "string" ? s.intent : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact | Omnirexis" },
      {
        name: "description",
        content:
          "Contact Omnirexis in Manchester — send an enquiry or book a free 30-minute AI strategy call.",
      },
    ],
  }),
  component: ContactPage,
});

const INTENT_LABEL: Record<string, string> = {
  audit: "AI Opportunity Audit",
  voice: "Voice receptionists",
  automation: "Process automation",
  experience: "Customer experience",
  leisure: "Leisure systems",
  "pt-free": "PT platform — Free",
  "pt-founding": "PT platform — Founding",
  "pt-solo": "PT platform — Solo",
  "pt-pro": "PT platform — Pro",
  "rapid-content": "Rapid — Content Sprint",
  "rapid-ops": "Rapid — Operations Document Sprint",
  "rapid-engine": "Rapid — Content Engine",
};

function ContactPage() {
  const { intent } = Route.useSearch();
  const intentLabel = intent ? INTENT_LABEL[intent] : undefined;
  const [sent, setSent] = useState(false);

  const defaultMessage = useMemo(() => {
    if (!intentLabel) return "";
    return `I would like to talk about: ${intentLabel}.\n\n`;
  }, [intentLabel]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(
      intentLabel ? `Enquiry — ${intentLabel}` : "Omnirexis enquiry",
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        message,
      ].join("\n"),
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <SiteLayout>
      <PageHero
        kicker="Contact"
        title="Let’s make the work work better."
        lede="Share a little about the business and where time is being lost. Or skip the form and take the 30-minute call."
      />

      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          {sent ? (
            <div className="rounded-xl bg-paper-2 px-8 py-12">
              <h2 className="font-sans text-3xl tracking-tight">
                Your email client should be open.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                If it did not, write to{" "}
                <a className="text-bone underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>{" "}
                or book the call directly. We read everything that comes in.
              </p>
              <Button asChild className="mt-8">
                <a href={BOOK_CALL} target="_blank" rel="noreferrer">
                  Book the call instead
                  <ArrowUpRight />
                </a>
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              {intentLabel ? (
                <p className="rounded-md bg-paper-2 px-4 py-3 text-sm">
                  Starting point: <span className="font-medium">{intentLabel}</span>
                </p>
              ) : null}
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <Input id="name" name="name" required autoComplete="name" />
                </Field>
                <Field label="Company" htmlFor="company">
                  <Input id="company" name="company" autoComplete="organization" />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" htmlFor="email">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" />
                </Field>
              </div>
              <Field label="Where is the work getting stuck?" htmlFor="message">
                <Textarea
                  id="message"
                  name="message"
                  required
                  defaultValue={defaultMessage}
                />
              </Field>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button type="submit" size="lg">
                  Send enquiry
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={BOOK_CALL} target="_blank" rel="noreferrer">
                    Book a call
                    <ArrowUpRight />
                  </a>
                </Button>
              </div>
              <p className="text-xs leading-relaxed text-muted">
                By submitting, you agree to be contacted about this enquiry.
                Providers may process the details on our behalf. Read the{" "}
                <Link to="/privacy" className="underline">
                  privacy policy
                </Link>
                .
              </p>
            </form>
          )}
        </div>

        <aside className="space-y-10 lg:col-span-5">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="/media/desk.jpg"
              alt="Reception desk, telephone and appointment book"
              className="h-56 w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/45" />
            <div className="absolute inset-0 bg-pine/15" />
          </div>
          <dl className="space-y-6 text-sm">
            <Item label="Email">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </Item>
            <Item label="Phone">
              <a href={PHONE_HREF}>{PHONE}</a>
            </Item>
            <Item label="Studio">
              {ADDRESS.line1}
              <br />
              {ADDRESS.line2}
              <br />
              {ADDRESS.city} {ADDRESS.postcode}
            </Item>
            <Item label="Hours">
              {HOURS.map((h) => (
                <span key={h.days} className="block">
                  {h.days} · {h.time}
                </span>
              ))}
            </Item>
            <Item label="LinkedIn">
              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                linkedin.com/company/omnirexis
              </a>
            </Item>
          </dl>
        </aside>
      </div>
    </SiteLayout>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

function Item({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <dt className="font-mono text-xs font-medium tracking-mark text-pine uppercase">
        {label}
      </dt>
      <dd className="mt-2 text-base text-bone">{children}</dd>
    </div>
  );
}
