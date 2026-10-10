import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/page-seo";

/**
 * Renders a signed-off blog post body (markdown) in the site's article styles,
 * without changing the words. Supports the subset the posts use: `##`/`###`
 * headings, paragraphs, `-` and `1.` lists, `|` tables, `**bold**`, `*italic*`,
 * `[text](url)` links and plain `<a href="url">text</a>` anchors (only href is
 * read; any other attributes in the markdown are ignored).
 *
 * Affiliate links get rel="sponsored nofollow" (plus noopener when they open in
 * a new tab). A link is affiliate when it starts with one of the post's
 * `affiliateLinks` prefixes or matches AFFILIATE_PATTERNS. Other links keep
 * their normal rel.
 */
const INLINE =
  /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)|<a\s[^>]*?href="([^"]+)"[^>]*>(.*?)<\/a>|(?<![*\w])\*(?!\s)([^*]+?)\*(?![*\w])/g;

/** General affiliate URL patterns (query tracking params used by affiliate programmes). */
const AFFILIATE_PATTERNS: RegExp[] = [
  /^https?:\/\/(www\.)?make\.com(\/[^?#]*)?\?(.*&)?pc=/i, // make.com/?pc=… and make.com/en/register?pc=…
  /[?&](aff|affiliate|aff_id|affiliate_id|ref_id|via|fpr|partner_id)=/i,
];

function isAffiliate(href: string, extra: string[] = []) {
  return extra.some((p) => href.startsWith(p)) || AFFILIATE_PATTERNS.some((r) => r.test(href));
}

type Ctx = { affiliateLinks: string[] };

function link(key: number, rawHref: string, label: ReactNode[], ctx: Ctx) {
  const href = rawHref.startsWith(SITE_URL) ? rawHref.slice(SITE_URL.length) || "/" : rawHref;
  const external = /^https?:\/\//.test(href);
  const affiliate = external && isAffiliate(href, ctx.affiliateLinks);
  const rel = affiliate ? "sponsored nofollow noopener noreferrer" : "noreferrer";
  return (
    <a
      key={key}
      href={href}
      className="text-bone underline underline-offset-4"
      {...(external ? { target: "_blank", rel } : {})}
    >
      {label}
    </a>
  );
}

function inline(text: string, ctx: Ctx): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(INLINE)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    if (m[1] !== undefined) {
      out.push(
        <strong key={key++} className="font-medium text-bone">
          {inline(m[1], ctx)}
        </strong>,
      );
    } else if (m[3] !== undefined) {
      out.push(link(key++, m[3], [m[2]], ctx));
    } else if (m[4] !== undefined) {
      out.push(link(key++, m[4].replace(/&amp;/g, "&"), inline(m[5], ctx), ctx));
    } else {
      out.push(<em key={key++}>{inline(m[6], ctx)}</em>);
    }
    last = at + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

type Block =
  | { kind: "h2" | "h3" | "p"; text: string }
  | { kind: "ul" | "ol"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] };

const cells = (l: string) => l.replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());

function parse(md: string): Block[] {
  const blocks: Block[] = [];
  for (const chunk of md.replace(/\r\n/g, "\n").split(/\n\s*\n/)) {
    const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
    if (!lines.length) continue;
    const first = lines[0];
    if (first.startsWith("### ")) blocks.push({ kind: "h3", text: first.slice(4) });
    else if (first.startsWith("## ")) blocks.push({ kind: "h2", text: first.slice(3) });
    else if (lines.length >= 2 && lines.every((l) => l.startsWith("|")) && /^\|[\s:|-]+\|$/.test(lines[1]))
      blocks.push({ kind: "table", head: cells(first), rows: lines.slice(2).map(cells) });
    else if (lines.every((l) => /^- /.test(l)))
      blocks.push({ kind: "ul", items: lines.map((l) => l.slice(2)) });
    else if (lines.every((l) => /^\d+\. /.test(l)))
      blocks.push({ kind: "ol", items: lines.map((l) => l.replace(/^\d+\. /, "")) });
    else blocks.push({ kind: "p", text: lines.join(" ") });
  }
  return blocks;
}

export function MarkdownBody({
  markdown,
  affiliateLinks = [],
}: {
  markdown: string;
  affiliateLinks?: string[];
}) {
  const ctx: Ctx = { affiliateLinks };
  return (
    <>
      {parse(markdown).map((b, i) => {
        switch (b.kind) {
          case "h2":
            return (
              <h2 key={i} className="mt-12 font-sans text-2xl tracking-tight first:mt-0 sm:text-3xl">
                {inline(b.text, ctx)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-8 font-sans text-xl tracking-tight">
                {inline(b.text, ctx)}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="mt-4 space-y-2">
                {b.items.map((it, j) => (
                  <li key={j} className="border-l-2 border-pine pl-4 text-base text-muted">
                    {inline(it, ctx)}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mt-4 list-decimal space-y-2 pl-6 text-base text-muted marker:text-pine">
                {b.items.map((it, j) => (
                  <li key={j} className="pl-1">
                    {inline(it, ctx)}
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm text-muted">
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j} scope="col" className="border-b border-pine px-3 py-2 font-medium text-bone">
                          {inline(h, ctx)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="align-top">
                        {r.map((c, k) => (
                          <td key={k} className={`border-b border-white/10 px-3 py-2 ${k === 0 ? "font-medium text-bone" : ""}`}>
                            {inline(c, ctx)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return (
              <p key={i} className="mt-4 text-lg leading-relaxed text-muted first:mt-0">
                {inline(b.text, ctx)}
              </p>
            );
        }
      })}
    </>
  );
}

