/**
 * Blog posts for /blog and /blog/$slug.
 *
 * A post only renders (hub card, guides rows, its own URL) once `published` is set.
 * Brand & Social drafts posts; Finance & Quality signs each one off before it is published.
 * PT posts link to signup with ?src=seo_blog-<srcTag> (the exact tag is on each post in the plan); owner posts use the Zoom call.
 */
import aiOrSiBody from "@/content/blog/ai-or-si-super-intelligence-gyms.md?raw";
import makeVsN8nBody from "@/content/blog/make-vs-n8n-for-gyms.md?raw";
import makeVsN8nFaq from "@/content/blog/make-vs-n8n-for-gyms.faq.json";

export type BlogAudience = "gyms" | "studios" | "pts";

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  audience: BlogAudience;
  /** ISO date (YYYY-MM-DD). Unset means draft: not listed and its URL 404s. */
  published?: string;
  updated?: string;
  /** PT posts: short signup tag, sent as ?src=seo_blog-<srcTag> (max 40 chars in total, per the plan). */
  srcTag?: string;
  /** The page this post supports, e.g. "/pt" or "/lead-follow-up-automation". */
  linksTo: string;
  /** Hero lede. Leave empty when the whole signed-off text is in `body`. */
  intro: string;
  sections: BlogSection[];
  /** Exact <title>, when the signed-off post sets its own meta title (otherwise "<title> | Omnirexis"). */
  metaTitle?: string;
  /** Hub card text, taken word for word from the post (otherwise `description`). */
  excerpt?: string;
  /** Signed-off markdown body, rendered word for word below the hero (used instead of `sections`). */
  body?: string;
  /** Extra JSON-LD for this post only (e.g. FAQPage). Its answers must match FAQ text visible in `body`. */
  faqJsonLd?: Record<string, unknown>;
  /** URL prefixes in this post that are affiliate links (rendered rel="sponsored nofollow"), on top of the general patterns in markdown-body. */
  affiliateLinks?: string[];
};

export const BLOG_AUDIENCES: { id: BlogAudience; label: string; page: string; pageLabel: string }[] = [
  { id: "gyms", label: "Gyms", page: "/gyms", pageLabel: "Gym marketing automation" },
  { id: "studios", label: "Studios", page: "/pilates-yoga-studios", pageLabel: "Studio booking automation" },
  { id: "pts", label: "PTs", page: "/pt", pageLabel: "Omnirexis PT" },
];

/** Add drafts here without `published` until they are signed off. */
export const POSTS: BlogPost[] = [
  {
    // Source: /workspace/si-campaign/blog-ai-or-si.md. F&Q re-QC PASS 4 Oct 2026 12:20; Ross approved 4 Oct 2026 13:57.
    slug: "ai-or-si-super-intelligence-gyms",
    title: "AI or SI? What the super intelligence buzz actually means for gym and studio owners",
    metaTitle: "AI or SI? What the Super Intelligence Buzz Means for Gyms",
    description:
      "AI or SI? The label is all over the news. For gym and studio owners, what matters is whether enquiries get a reply and a follow-up.",
    excerpt:
      "Here's what actually happened, and why, for a gym or studio owner, the label matters far less than what happens to your next enquiry.",
    audience: "gyms",
    published: "2026-10-04",
    linksTo: "/lead-follow-up-automation",
    intro: "",
    sections: [],
    body: aiOrSiBody,
  },
  {
    // Source: /workspace/side-income/posts/make-vs-n8n.md (Money Machine, via CoS). Needs F&Q sign-off before merge.
    slug: "make-vs-n8n-for-gyms",
    title: "Make vs n8n: which automation tool should a gym or PT business pick?",
    metaTitle: "Make vs n8n for Gyms and PTs: Which Should You Pick?",
    description:
      "Make vs n8n for gyms and PTs: prices checked 10 Oct 2026, a plain comparison table and a clear verdict for solo PTs, studios and multi-site gyms.",
    excerpt:
      "We run Omnirexis on n8n every day, and we've compared Make on features and pricing. Here's how to choose between them for a gym, studio or PT business.",
    audience: "gyms",
    published: "2026-10-10",
    linksTo: "/lead-follow-up-automation",
    intro: "",
    sections: [],
    body: makeVsN8nBody,
    faqJsonLd: makeVsN8nFaq,
    affiliateLinks: ["https://www.make.com/en/register?pc="],
  },
];

export const publishedPosts = () =>
  POSTS.filter((p) => Boolean(p.published)).sort((a, b) =>
    (b.published ?? "").localeCompare(a.published ?? ""),
  );

export const findPublishedPost = (slug: string) =>
  publishedPosts().find((p) => p.slug === slug);
