import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { BLOG_AUDIENCES, publishedPosts } from "@/lib/blog";
import { BOOK_CALL, ptSignup } from "@/lib/site";
import { pageSeo, SITE_URL } from "@/lib/page-seo";

// Brief 3.6 (docs/SEO-CONTENT-PLAN.md). PT CTA tag: seo_blog.
const PT_SIGNUP_URL = ptSignup("seo_blog");

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageSeo({
      title: "Guides for gym, studio and PT owners | Omnirexis",
      description:
        "Plain, practical guides on enquiries, follow-ups, retention and PT admin for independent UK gyms, studios and personal trainers.",
      path: "/blog",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${SITE_URL}/blog#blog`,
        name: "Guides for gym, studio and PT owners",
        url: `${SITE_URL}/blog`,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-GB",
      },
    }),
  component: BlogHub,
});

function BlogHub() {
  const posts = publishedPosts();
  return (
    <SiteLayout>
      <PageHero
        kicker="Guides"
        title="Guides for gym, studio and PT owners"
        lede="Plain, practical guides on enquiries, follow-ups, retention and PT admin for independent UK gyms, studios and personal trainers."
      >
        <nav aria-label="Guides by audience" className="mt-8 flex flex-wrap gap-2">
          {BLOG_AUDIENCES.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-medium text-bone hover:bg-ink-3"
            >
              {a.label}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
        {BLOG_AUDIENCES.map((a) => {
          const list = posts.filter((p) => p.audience === a.id);
          return (
            <section
              key={a.id}
              id={a.id}
              className="scroll-mt-24 border-b border-line py-14 lg:py-16"
            >
              <h2 className="font-sans text-3xl tracking-tight sm:text-4xl">
                For {a.id === "pts" ? "personal trainers" : `${a.label.toLowerCase().replace(/s$/, "")} owners`}
              </h2>
              {list.length ? (
                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: p.slug }}
                        className="flex h-full flex-col rounded-xl border border-line p-5 hover:border-line-strong"
                      >
                        <span className="text-base font-medium tracking-tight text-bone">
                          {p.title}
                        </span>
                        <span className="mt-2 text-sm text-muted">
                          {p.excerpt ?? p.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-base text-muted">
                  The first guides are being written.
                </p>
              )}
              <p className="mt-6 text-base">
                <Link
                  to={a.page}
                  className="inline-flex items-center gap-1 text-bone underline underline-offset-4"
                >
                  {a.pageLabel}
                  <ArrowUpRight className="size-4" />
                </Link>
                {a.id !== "pts" ? (
                  <>
                    {" · "}
                    <Link
                      to="/lead-follow-up-automation"
                      className="text-bone underline underline-offset-4"
                    >
                      Lead follow-up automation
                    </Link>
                  </>
                ) : null}
              </p>
            </section>
          );
        })}

        <section className="grid gap-4 py-14 md:grid-cols-2 lg:py-16">
          <div className="rounded-xl border border-line p-6">
            <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
              Gym and studio owners
            </p>
            <h2 className="mt-3 font-sans text-2xl tracking-tight">
              Talk it through on a free Zoom call.
            </h2>
            <p className="mt-3 text-base text-muted">
              Tell us what is taking too long. We will talk through the tools,
              the gaps, and a first move.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 h-auto min-h-12 whitespace-normal py-3 text-center"
            >
              <a href={BOOK_CALL} target="_blank" rel="noreferrer">
                Book a free 30 minute Zoom strategy call
                <ArrowUpRight />
              </a>
            </Button>
          </div>
          <div className="rounded-xl border border-line p-6">
            <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
              Personal trainers
            </p>
            <h2 className="mt-3 font-sans text-2xl tracking-tight">
              Start free with your first two clients.
            </h2>
            <p className="mt-3 text-base text-muted">
              Omnirexis PT keeps clients, programmes, sessions and check-ins in
              one place. Free for up to two active clients.
            </p>
            <Button asChild size="lg" className="mt-6">
              <a href={PT_SIGNUP_URL}>
                Start free
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
