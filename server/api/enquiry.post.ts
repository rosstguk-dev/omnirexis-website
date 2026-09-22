import { z } from "zod";
import {
  defineEventHandler,
  readBody,
  setResponseStatus,
} from "h3";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  company: z.string().trim().max(200).optional(),
  email: z.string().trim().email("A valid email is required").max(320),
  phone: z.string().trim().max(50).optional(),
  message: z.string().trim().min(1, "Message is required").max(10_000),
  intent: z.string().trim().max(100).optional(),
});

type Enquiry = z.infer<typeof enquirySchema>;

function env(key: string): string | undefined {
  const v = process.env[key]?.trim();
  return v || undefined;
}

async function deliverWebhook(url: string, payload: Enquiry): Promise<void> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      ...payload,
      source: "omnirexis-website",
      receivedAt: new Date().toISOString(),
    }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Webhook delivery failed (${res.status}): ${text.slice(0, 200)}`);
  }
}

async function deliverResend(
  apiKey: string,
  to: string,
  payload: Enquiry,
): Promise<void> {
  const subject = payload.intent
    ? `Enquiry — ${payload.intent}`
    : "Omnirexis enquiry";
  const lines = [
    `Name: ${payload.name}`,
    `Company: ${payload.company ?? "—"}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone ?? "—"}`,
    `Intent: ${payload.intent ?? "—"}`,
    "",
    payload.message,
  ];
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: env("CONTACT_FROM_EMAIL") ?? "Omnirexis <ross@omnirexis.co.uk>",
      to: [to],
      reply_to: payload.email,
      subject,
      text: lines.join("\n"),
    }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Resend delivery failed (${res.status}): ${text.slice(0, 200)}`);
  }
}

export default defineEventHandler(async (event) => {
  let raw: unknown;
  try {
    raw = await readBody(event);
  } catch {
    setResponseStatus(event, 400);
    return { ok: false, error: "Request body must be valid JSON." };
  }

  const parsed = enquirySchema.safeParse(raw);
  if (!parsed.success) {
    setResponseStatus(event, 400);
    return {
      ok: false,
      error: "Validation failed.",
      issues: parsed.error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      })),
    };
  }

  const webhookUrl = env("CONTACT_ENQUIRY_WEBHOOK_URL");
  const resendKey = env("RESEND_API_KEY");
  // Delivery / From stay on ross@ (authenticated mailbox). hello@ is public alias.
  const contactTo = env("CONTACT_TO_EMAIL") ?? "ross@omnirexis.co.uk";

  if (!webhookUrl && !resendKey) {
    setResponseStatus(event, 503);
    return {
      ok: false,
      error:
        "Enquiry delivery is not configured. Please email hello@omnirexis.co.uk or book a call.",
    };
  }

  try {
    const tasks: Promise<void>[] = [];
    if (webhookUrl) tasks.push(deliverWebhook(webhookUrl, parsed.data));
    if (resendKey) tasks.push(deliverResend(resendKey, contactTo, parsed.data));
    await Promise.all(tasks);
  } catch (err) {
    console.error("[enquiry] delivery failed:", err);
    setResponseStatus(event, 500);
    return {
      ok: false,
      error: "We could not deliver your enquiry. Please try again or email us directly.",
    };
  }

  setResponseStatus(event, 200);
  return { ok: true };
});
