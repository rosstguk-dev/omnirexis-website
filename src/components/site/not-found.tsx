import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";

/** Branded 404 with a way back into the site (the server still returns 404). */
export function NotFoundPage() {
  return (
    <SiteLayout>
      <meta name="robots" content="noindex" />
      <PageHero
        kicker="404"
        title="That page is not here."
        lede="The link may be old or mistyped. Try one of these instead."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="solid" size="lg">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="inkOutline" size="lg">
            <Link to="/solutions">Solutions</Link>
          </Button>
          <Button asChild variant="inkOutline" size="lg">
            <Link to="/pt">PT platform</Link>
          </Button>
          <Button asChild variant="inkOutline" size="lg">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </PageHero>
    </SiteLayout>
  );
}
