export const SITE_URL = "https://www.omnirexis.co.uk";
export const SITE_NAME = "Omnirexis";
export const DEFAULT_TITLE = "Omnirexis | Intelligence. Automated.";
export const DEFAULT_DESCRIPTION =
  "Omnirexis helps fitness and leisure operators use AI properly. We show which tools do what, how they work together, and how that setup becomes part of the workforce. Book a free 30 minute Zoom strategy call.";

/** Per-page title, description, Open Graph, Twitter, and canonical. */
export function pageSeo(opts: {
  title: string;
  description: string;
  path: string;
}) {
  const url =
    opts.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${opts.path.startsWith("/") ? opts.path : `/${opts.path}`}`;

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
  };
}
