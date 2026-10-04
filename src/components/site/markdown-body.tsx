import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/page-seo";

/**
 * Renders a signed-off blog post body (markdown) in the site's article styles,
 * without changing the words. Supports the subset the posts use: `##`/`###`
 * headings, paragraphs, `-` and `1.` lists, `**bold**` and `[text](url)` links.
 */
const INLINE = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(INLINE)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    if (m[1] !== undefined) {
      out.push(
        <strong key={key++} className="font-medium text-bone">
          {inline(m[1])}
        </strong>,
      );
    } else {
      const href = m[3].startsWith(SITE_URL) ? m[3].slice(SITE_URL.length) || "/" : m[3];
      const external = /^https?:\/\//.test(href);
      out.push(
        <a
          key={key++}
          href={href}
          className="text-bone underline underline-offset-4"
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {m[2]}
        </a>,
      );
    }
    last = at + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

type Block =
  | { kind: "h2" | "h3" | "p"; text: string }
  | { kind: "ul" | "ol"; items: string[] };

function parse(md: string): Block[] {
  const blocks: Block[] = [];
  for (const chunk of md.replace(/\r\n/g, "\n").split(/\n\s*\n/)) {
    const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
    if (!lines.length) continue;
    const first = lines[0];
    if (first.startsWith("### ")) blocks.push({ kind: "h3", text: first.slice(4) });
    else if (first.startsWith("## ")) blocks.push({ kind: "h2", text: first.slice(3) });
    else if (lines.every((l) => /^- /.test(l)))
      blocks.push({ kind: "ul", items: lines.map((l) => l.slice(2)) });
    else if (lines.every((l) => /^\d+\. /.test(l)))
      blocks.push({ kind: "ol", items: lines.map((l) => l.replace(/^\d+\. /, "")) });
    else blocks.push({ kind: "p", text: lines.join(" ") });
  }
  return blocks;
}

export function MarkdownBody({ markdown }: { markdown: string }) {
  return (
    <>
      {parse(markdown).map((b, i) => {
        switch (b.kind) {
          case "h2":
            return (
              <h2 key={i} className="mt-12 font-sans text-2xl tracking-tight first:mt-0 sm:text-3xl">
                {inline(b.text)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-8 font-sans text-xl tracking-tight">
                {inline(b.text)}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="mt-4 space-y-2">
                {b.items.map((it, j) => (
                  <li key={j} className="border-l-2 border-pine pl-4 text-base text-muted">
                    {inline(it)}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mt-4 list-decimal space-y-2 pl-6 text-base text-muted marker:text-pine">
                {b.items.map((it, j) => (
                  <li key={j} className="pl-1">
                    {inline(it)}
                  </li>
                ))}
              </ol>
            );
          default:
            return (
              <p key={i} className="mt-4 text-lg leading-relaxed text-muted first:mt-0">
                {inline(b.text)}
              </p>
            );
        }
      })}
    </>
  );
}

