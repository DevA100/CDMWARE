import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { CruiseBreadcrumb, type CruiseCrumb } from "@/components/cruise/breadcrumb";
import { cruiseButtonClasses } from "@/components/cruise/button";
import { cruiseWhatsAppLink } from "@/components/cruise/whatsapp-button";
import { cx } from "@/lib/cruise-utils";
import { consultation, site } from "@/content/site";

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
  title,
  lede,
  crumbs,
  children,
}: {
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
        <h1 className="max-w-[22ch] text-h1">{title}</h1>
        {lede && <p className="max-w-(--measure) text-body">{lede}</p>}
        {children}
      </div>
      <div className="signature-band on-primary" aria-hidden="true" />
    </section>
  );
}

/** Navy call-to-action band: free consultation + WhatsApp. */
export function ConsultationBand({ compact = false }: { compact?: boolean }) {
  return (
    <section className="on-deep border-y-(length:--border-w) border-ink" aria-labelledby="consult-title">
      <div className="site-container grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-5">
          <p className="eyebrow text-primary">Have a project in mind?</p>
          <h2 id="consult-title" className="text-h1">
            {consultation.title}
          </h2>
          {!compact && <p className="max-w-(--measure) text-ink-muted">{consultation.lede}</p>}
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className={cruiseButtonClasses({ variant: "primary" })}>
              <Calendar aria-hidden="true" /> Book a free call
            </Link>
            <a
              href={cruiseWhatsAppLink(site.whatsapp, site.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={cruiseButtonClasses({ variant: "secondary" })}
            >
              <MessageCircle aria-hidden="true" /> Chat on WhatsApp
            </a>
          </div>
        </div>
        {!compact && (
          <ol className="flex flex-col gap-4">
            {consultation.points.map((p, i) => (
              <li key={p.title} className="brutal brutal-static flex gap-4 p-5">
                <span className="on-primary grid size-10 shrink-0 place-items-center rounded-brutal border-2 border-ink font-display text-h3 font-extrabold">
                  {i + 1}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-display text-h3 font-extrabold">{p.title}</span>
                  <span className="text-ink-muted">{p.text}</span>
                </span>
              </li>
            ))}
          </ol>
        )}
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

/** The circuit-trace motif from the CDMWare logo, as a decorative pattern. */
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
