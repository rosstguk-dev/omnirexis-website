export const SITE_URL = "https://www.omnirexis.co.uk";
export const SITE_NAME = "Omnirexis";
export const DEFAULT_TITLE =
  "AI automation for gyms, studios and leisure clubs | Omnirexis";
export const DEFAULT_DESCRIPTION =
  "Omnirexis gives fitness and leisure businesses their time back. Every enquiry answered, every lead followed up, every booking made. Book a free Zoom call.";
export const OG_IMAGE = `${SITE_URL}/og.jpg`;

/** Absolute www URL for a site path. Canonicals always point here, whichever host served the page. */
export function siteUrl(path: string) {
  if (path === "/" || path === "") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Per-page title, description, Open Graph, Twitter, canonical, and optional JSON-LD. */
export function pageSeo(opts: {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown>;
}) {
  const url = siteUrl(opts.path);

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: opts.jsonLd
      ? [{ type: "application/ld+json", children: JSON.stringify(opts.jsonLd) }]
      : [],
  };
}
