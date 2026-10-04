import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/site/cta-band";
import { SiteLayout } from "@/components/site/layout";
import { MarkdownBody } from "@/components/site/markdown-body";
import { PageHero } from "@/components/site/page-hero";
import { findPublishedPost } from "@/lib/blog";
import { ptSignup } from "@/lib/site";
import { OG_IMAGE, pageSeo, SITE_URL } from "@/lib/page-seo";

// Only published posts render; drafts and unknown slugs fall through to the branded 404.
export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = findPublishedPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    const path = `/blog/${post.slug}`;
    return pageSeo({
      title: post.metaTitle ?? `${post.title} | Omnirexis`,
      description: post.description,
      path,
      // Article: no ratings or reviews.
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        url: `${SITE_URL}${path}`,
        mainEntityOfPage: `${SITE_URL}${path}`,
        datePublished: post.published,
        dateModified: post.updated ?? post.published,
        image: OG_IMAGE,
        inLanguage: "en-GB",
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        isPartOf: { "@id": `${SITE_URL}/blog#blog` },
      },
    });
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const isPt = post.audience === "pts";
  return (
    <SiteLayout>
      <PageHero kicker="Guide" title={post.title} lede={post.intro || undefined}>
        {post.published ? (
          <p className="mt-6 font-mono text-xs tracking-wide text-subtle">
            Published{" "}
            <time dateTime={post.published}>
              {new Date(post.published).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
        ) : null}
      </PageHero>
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        {post.body ? (
          <div data-post-body>
            <MarkdownBody markdown={post.body} />
          </div>
        ) : null}
        {post.sections.map((s) => (
          <section key={s.heading} className="mt-10 first:mt-0">
            <h2 className="font-sans text-2xl tracking-tight sm:text-3xl">
              {s.heading}
            </h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="mt-4 text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
            {s.bullets?.length ? (
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="border-l-2 border-pine pl-4 text-base text-muted"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
        <p className="mt-12 text-base">
          <Link
            to={post.linksTo}
            className="inline-flex items-center gap-1 text-bone underline underline-offset-4"
          >
            {isPt ? "See Omnirexis PT" : "See how we help"}
            <ArrowUpRight className="size-4" />
          </Link>
          {" · "}
          <Link to="/blog" className="text-bone underline underline-offset-4">
            All guides
          </Link>
        </p>
      </article>
      {isPt ? (
        <CtaBand
          kicker="Personal trainers"
          title="Start free with your first two clients."
          body="Omnirexis PT keeps clients, programmes, sessions and check-ins in one place. Free for up to two active clients."
          primaryHref={ptSignup(`seo_blog-${post.srcTag ?? post.slug}`.slice(0, 40))}
          primaryLabel="Start free"
          primaryExternal={false}
        />
      ) : (
        <CtaBand />
      )}
    </SiteLayout>
  );
}
