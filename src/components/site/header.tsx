import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/site/mark";
import { BOOK_CALL, NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader({ ink: _ink = false }: { ink?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-line-on-ink bg-ink/80 text-bone backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" aria-label="Omnirexis home" className="shrink-0">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-sm font-medium tracking-tight transition-colors duration-150",
                  active ? "text-bone" : "text-muted hover:text-bone",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="solid" className="hidden sm:inline-flex">
            <a href={BOOK_CALL} target="_blank" rel="noreferrer">
              Book a call
              <ArrowUpRight />
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-sm text-bone lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-line-on-ink lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4 sm:px-8" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-base font-medium text-bone"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={BOOK_CALL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex min-h-12 items-center justify-center rounded-md bg-pine text-sm font-medium text-pine-fg"
          >
            Book a strategy call
          </a>
        </nav>
      </div>
    </header>
  );
}
