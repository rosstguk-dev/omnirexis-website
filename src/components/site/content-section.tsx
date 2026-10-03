import type { ReactNode } from "react";

/** Two-column content block matching /solutions: H2 on the left, copy on the right. */
export function ContentSection({
  id,
  kicker,
  title,
  children,
}: {
  id?: string;
  kicker?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 grid gap-8 border-b border-line py-14 lg:grid-cols-12 lg:py-16"
    >
      <div className="lg:col-span-4">
        {kicker ? (
          <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
            {kicker}
          </p>
        ) : null}
        <h2 className="mt-3 font-sans text-3xl tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-8 [&_a]:text-bone [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-medium [&_strong]:text-bone">
        {children}
      </div>
    </section>
  );
}

export function Points({ items }: { items: readonly ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((p, i) => (
        <li key={i} className="border-l-2 border-pine pl-4 text-base text-muted">
          {p}
        </li>
      ))}
    </ul>
  );
}
