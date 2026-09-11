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

type SubmitState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; message: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    intent: typeof s.intent === "string" ? s.intent : undefined,
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
  const [submit, setSubmit] = useState<SubmitState>({ status: "idle" });

  const defaultMessage = useMemo(() => {
    if (!intentLabel) return "";
    return `I would like to talk about: ${intentLabel}.\n\n`;
  }, [intentLabel]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim() || undefined,
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim() || undefined,
      message: String(data.get("message") ?? "").trim(),
      intent: intent || undefined,
    };

    setSubmit({ status: "loading" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await res.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!res.ok || !body?.ok) {
        setSubmit({
          status: "error",
          message:
            body?.error ??
            "We could not send your enquiry. Please try again or email us directly.",
        });
        return;
      }
      setSubmit({ status: "success" });
      form.reset();
    } catch {
      setSubmit({
        status: "error",
        message:
          "Network error while sending. Please try again or email us directly.",
      });
    }
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
          {submit.status === "success" ? (
            <div className="rounded-xl bg-paper-2 px-8 py-12">
              <h2 className="font-sans text-3xl tracking-tight">
                Thanks — we have your enquiry.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                We read everything that comes in and will reply to the email you
                gave us. Prefer to talk now? Book the call directly.
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
                  Starting point:{" "}
                  <span className="font-medium">{intentLabel}</span>
                </p>
              ) : null}
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <Input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    disabled={submit.status === "loading"}
                  />
                </Field>
                <Field label="Company" htmlFor="company">
                  <Input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    disabled={submit.status === "loading"}
                  />
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
                    disabled={submit.status === "loading"}
                  />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    disabled={submit.status === "loading"}
                  />
                </Field>
              </div>
              <Field label="Where is the work getting stuck?" htmlFor="message">
                <Textarea
                  id="message"
                  name="message"
                  required
                  defaultValue={defaultMessage}
                  disabled={submit.status === "loading"}
                />
              </Field>
              {submit.status === "error" ? (
                <div
                  role="alert"
                  className="rounded-md border border-line bg-paper-2 px-4 py-3 text-sm leading-relaxed"
                >
                  <p>{submit.message}</p>
                  <p className="mt-2 text-muted">
                    Fallback:{" "}
                    <a className="text-bone underline" href={`mailto:${EMAIL}`}>
                      email {EMAIL}
                    </a>{" "}
                    directly.
                  </p>
                </div>
              ) : null}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={submit.status === "loading"}
                >
                  {submit.status === "loading" ? "Sending…" : "Send enquiry"}
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
                The form is sent to our enquiry endpoint and may be processed by
                our hosting, email, or CRM providers as configured. Read the{" "}
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
