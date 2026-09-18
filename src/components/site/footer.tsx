import { Link } from "@tanstack/react-router";
import { Wordmark } from "@/components/site/mark";
import {
  ADDRESS,
  BOOK_CALL,
  EMAIL,
  HOURS,
  LINKEDIN,
  PHONE,
  PHONE_HREF,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line-on-ink bg-ink text-bone">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Wordmark invert />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone/65">
            We help fitness and leisure operators use AI properly, so it
            becomes part of the workforce.
          </p>
          <p className="mt-6 text-xs tracking-mark text-subtle uppercase">
            Intelligence. Automated.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
          <div>
            <p className="font-mono text-xs font-medium tracking-mark text-subtle uppercase">
              Practice
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/solutions" className="text-bone/80 hover:text-bone">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-bone/80 hover:text-bone">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/pt" className="text-bone/80 hover:text-bone">
                  PT platform
                </Link>
              </li>
              <li>
                <Link to="/leisure" className="text-bone/80 hover:text-bone">
                  Leisure systems
                </Link>
              </li>
              <li>
                <Link
                  to="/rapid-services"
                  className="text-bone/80 hover:text-bone"
                >
                  Rapid studio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs font-medium tracking-mark text-subtle uppercase">
              Firm
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-bone/80 hover:text-bone">
                  About
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-bone/80 hover:text-bone">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-bone/80 hover:text-bone">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={BOOK_CALL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-bone/80 hover:text-bone"
                >
                  Book a call
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-bone/80 hover:text-bone">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs font-medium tracking-mark text-subtle uppercase">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-bone/80">
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-bone">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={PHONE_HREF} className="hover:text-bone">
                  {PHONE}
                </a>
              </li>
              <li>
                {ADDRESS.line1}
                <br />
                {ADDRESS.line2}
                <br />
                {ADDRESS.city} {ADDRESS.postcode}
              </li>
              {HOURS.map((h) => (
                <li key={h.days} className="text-bone/60">
                  {h.days}
                  <br />
                  {h.time}
                </li>
              ))}
              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-bone"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line-on-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-subtle sm:flex-row sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Omnirexis. All rights reserved.</p>
          <p>Manchester, United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
