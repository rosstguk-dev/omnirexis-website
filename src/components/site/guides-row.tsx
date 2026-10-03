import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { publishedPosts } from "@/lib/blog";

/** Links to the listed posts once published. Until then it points to the /blog hub. */
export function GuidesRow({
  title = "Guides",
  slugs,
}: {
  title?: string;
  slugs: readonly string[];
}) {
  const posts = publishedPosts().filter((p) => slugs.includes(p.slug));
  return (
    <section className="border-b border-line py-14 lg:py-16">
      <h2 className="font-sans text-2xl tracking-tight sm:text-3xl">{title}</h2>
      {posts.length ? (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="flex h-full flex-col rounded-xl border border-line p-5 hover:border-line-strong"
              >
                <span className="text-base font-medium tracking-tight text-bone">
                  {p.title}
                </span>
                <span className="mt-2 text-sm text-muted">{p.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-base text-muted">
          Practical guides on this are on the way.{" "}
          <Link to="/blog" className="inline-flex items-center gap-1 text-bone underline underline-offset-4">
            Browse the guides
            <ArrowUpRight className="size-4" />
          </Link>
        </p>
      )}
    </section>
  );
}
