/**
 * Blog posts for /blog and /blog/$slug.
 *
 * A post only renders (hub card, guides rows, its own URL) once `published` is set.
 * Brand & Social drafts posts; Finance & Quality signs each one off before it is published.
 * PT posts link to signup with ?src=seo_blog-<slug>; owner posts use the Zoom call.
 */
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
  /** The page this post supports, e.g. "/pt" or "/lead-follow-up-automation". */
  linksTo: string;
  intro: string;
  sections: BlogSection[];
};

export const BLOG_AUDIENCES: { id: BlogAudience; label: string; page: string; pageLabel: string }[] = [
  { id: "gyms", label: "Gyms", page: "/gyms", pageLabel: "Gym marketing automation" },
  { id: "studios", label: "Studios", page: "/pilates-yoga-studios", pageLabel: "Studio booking automation" },
  { id: "pts", label: "PTs", page: "/pt", pageLabel: "Omnirexis PT" },
];

/** No posts are published yet. Add drafts here without `published` until they are signed off. */
export const POSTS: BlogPost[] = [];

export const publishedPosts = () =>
  POSTS.filter((p) => Boolean(p.published)).sort((a, b) =>
    (b.published ?? "").localeCompare(a.published ?? ""),
  );

export const findPublishedPost = (slug: string) =>
  publishedPosts().find((p) => p.slug === slug);
