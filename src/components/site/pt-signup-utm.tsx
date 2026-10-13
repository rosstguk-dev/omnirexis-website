import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { PT_SIGNUP_BASE } from "@/lib/site";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;

/** Adds the visitor's own utm_source / utm_medium / utm_campaign to a PT signup href. Keeps its ?src=. */
function withVisitorUtm(href: string, search: string): string {
  const incoming = new URLSearchParams(search);
  const url = new URL(href);
  for (const key of UTM_KEYS) {
    const value = incoming.get(key);
    if (value && !url.searchParams.has(key)) url.searchParams.set(key, value.slice(0, 100));
  }
  return url.toString();
}

/**
 * Passes any incoming UTM tags through on every link to the PT signup page, so the PT app can
 * store them with the new account. Server-rendered hrefs stay as they are (src only); links are
 * updated in the browser after load and on each client-side navigation.
 */
export function PtSignupUtm() {
  const location = useRouterState({ select: (s) => s.location.href });
  useEffect(() => {
    const search = window.location.search;
    if (!UTM_KEYS.some((k) => new URLSearchParams(search).has(k))) return;
    const id = window.setTimeout(() => {
      document.querySelectorAll<HTMLAnchorElement>(`a[href^="${PT_SIGNUP_BASE}"]`).forEach((a) => {
        a.href = withVisitorUtm(a.href, search);
      });
    }, 0);
    return () => window.clearTimeout(id);
  }, [location]);
  return null;
}
