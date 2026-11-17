import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CruiseBreadcrumb, type CruiseCrumb } from "@/components/cruise/breadcrumb";
import { cruiseButtonClasses } from "@/components/cruise/button";
import { cruiseWhatsAppLink } from "@/components/cruise/whatsapp-button";
import { cx } from "@/lib/cruise-utils";
import { closingCta, ctas, site } from "@/content/site";

/** Eyebrow + heading + intro, used at the top of most sections. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={cx(
        "flex max-w-[52rem] flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow text-ink-muted">{eyebrow}</p>}
      <Tag className={Tag === "h1" ? "text-h1" : "text-h2"}>{title}</Tag>
      {intro && <p className="max-w-(--measure) text-body text-ink-muted">{intro}</p>}
    </div>
  );
}

/** The gold band at the top of inner pages, with breadcrumbs. */
export function PageHeader({
  eyebrow,
  title,
  lede,
  crumbs,
  children,
}: {
  /** A small label above the title. */
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  crumbs: CruiseCrumb[];
  children?: ReactNode;
}) {
  return (
    <section className="on-primary relative isolate overflow-hidden border-b-(length:--border-w) border-ink">
      <CircuitPattern className="pointer-events-none absolute -right-10 -bottom-10 -z-10 hidden h-96 w-96 opacity-25 md:block" />
      <div className="site-container flex flex-col gap-6 py-12 md:py-16">
        <CruiseBreadcrumb items={[{ label: "Home", href: "/" }, ...crumbs]} />
        <div className="flex flex-col gap-3">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="max-w-[22ch] text-h1">{title}</h1>
        </div>
        {lede && <p className="max-w-(--measure) text-body">{lede}</p>}
        {children}
      </div>
      <div className="signature-band on-primary" aria-hidden="true" />
    </section>
  );
}

/**
 * Navy closing call to action ("Your Vision Deserves the Right Foundation."),
 * at the end of most pages. `showServicesLink={false}` drops the "Explore Our
 * Services" button, e.g. on /services itself.
 */
export function ConsultationBand({ showServicesLink = true }: { showServicesLink?: boolean }) {
  return (
    <section
      className="on-deep relative isolate overflow-hidden border-y-(length:--border-w) border-ink"
      aria-labelledby="closing-cta-title"
    >
      <CircuitPattern className="pointer-events-none absolute -right-10 -bottom-10 -z-10 hidden h-96 w-96 opacity-10 md:block" />
      <div className="site-container flex flex-col gap-6 py-14 md:py-20">
        <h2 id="closing-cta-title" className="max-w-[22ch] text-h1">
          {closingCta.title}
        </h2>
        <p className="max-w-(--measure) text-body text-ink-muted">{closingCta.text}</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Link href={closingCta.primary.href} className={cruiseButtonClasses({ variant: "primary" })}>
            {closingCta.primary.label} <ArrowRight aria-hidden="true" />
          </Link>
          {showServicesLink && (
            <Link href={closingCta.secondary.href} className={cruiseButtonClasses({ variant: "secondary" })}>
              {closingCta.secondary.label}
            </Link>
          )}
          <a
            href={cruiseWhatsAppLink(site.whatsapp, site.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 font-medium underline decoration-primary decoration-2 underline-offset-4"
          >
            <MessageCircle aria-hidden="true" className="size-5" /> {ctas.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}

/** "Read more" style link with an arrow. */
export function ArrowLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex items-center gap-2 font-display font-extrabold uppercase tracking-[0.03em] underline decoration-primary decoration-3 underline-offset-6 hover:decoration-ink",
        className,
      )}
    >
      {children} <ArrowRight aria-hidden="true" className="size-5" />
    </Link>
  );
}

/** The circuit-trace motif from the CDMware logo, as a decorative pattern. */
export function CircuitPattern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
      <path d="M40 10v180" />
      <path d="M40 60h40l25-25" />
      <circle cx="115" cy="25" r="12" />
      <path d="M40 100h110" />
      <circle cx="165" cy="100" r="12" />
      <path d="M40 140h40l25 25" />
      <circle cx="115" cy="175" r="12" />
    </svg>
  );
}
