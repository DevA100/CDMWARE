import Link from "next/link";
import { cruiseButtonClasses } from "@/components/cruise/button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="site-container flex flex-col items-start gap-6">
        <p className="font-display text-[8rem] leading-none font-extrabold text-primary [-webkit-text-stroke:3px_var(--ink)]">404</p>
        <h1 className="text-h1">This page took a wrong turn</h1>
        <p className="max-w-(--measure) text-body text-ink-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/" className={cruiseButtonClasses({ variant: "primary" })}>
            Back to home
          </Link>
          <Link href="/contact" className={cruiseButtonClasses({ variant: "secondary" })}>
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
