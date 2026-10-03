import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { NotFoundPage } from "@/components/site/not-found";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/page-seo";
import appCss from "../styles.css?url";

const ORG_ID = `${SITE_URL}/#organization`;

// Facts only: name, url, logo, public email, LinkedIn, area served, and the
// postal address / phone already shown in the site footer. No reviews,
// ratings or invented locations.
const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      alternateName: "OMNIREXIS",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/brand/apple-touch-icon.png`,
      image: OG_IMAGE,
      slogan: "Intelligence. Automated.",
      description: DEFAULT_DESCRIPTION,
      email: "hello@omnirexis.co.uk",
      telephone: "+44-161-250-0045",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bartle House, 9 Oxford Court",
        addressLocality: "Manchester",
        postalCode: "M2 3WQ",
        addressCountry: "GB",
      },
      founder: { "@type": "Person", name: "Ross Gallagher" },
      sameAs: ["https://www.linkedin.com/company/omnirexis"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      image: OG_IMAGE,
      email: "hello@omnirexis.co.uk",
      description: DEFAULT_DESCRIPTION,
      parentOrganization: { "@id": ORG_ID },
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Place", name: "North of England" },
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Gyms, fitness studios, spas and leisure clubs",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      inLanguage: "en-GB",
      publisher: { "@id": ORG_ID },
    },
  ],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "theme-color", content: "#081826" },
      { name: "apple-mobile-web-app-title", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Omnirexis logo with the slogan Intelligence. Automated." },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      // Per-page canonicals belong on each route. Do not force every page
      // to the homepage — that collapses SEO into a single URL.
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/brand/apple-touch-icon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSON_LD),
      },
    ],
  }),
  notFoundComponent: NotFoundPage,
  component: () => (
    <html lang="en-GB" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
