import { Plus } from "lucide-react";

export type FaqItem = { q: string; a: string };

/** Same disclosure style as /faq. Pair with faqJsonLd() only where these FAQs are on the page. */
export function FaqList({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="max-w-3xl">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-line open:pb-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-sans text-lg font-medium tracking-tight text-bone transition-colors hover:text-pine [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <Plus className="size-5 shrink-0 text-muted transition-transform duration-200 ease-out group-open:rotate-45" />
          </summary>
          <div className="pb-6 pr-10 text-base leading-relaxed text-muted">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
