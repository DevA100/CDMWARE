"use client";

import { useId, useState, useSyncExternalStore, type FormEvent, type ReactNode } from "react";
import { cx } from "@/lib/cruise-utils";
import { CruiseButton } from "../button";
import { CruiseInput } from "../input";
import { CruiseWhatsAppButton } from "../whatsapp-button";
import { CRUISE_BRAND_NAMES, CruiseBrandIcon, type CruiseBrand } from "./brand-icons";

export type CruiseFooterLink = { label: string; href: string };
export type CruiseFooterColumn = { title: string; links: CruiseFooterLink[] };
export type CruiseFooterSocial = { network: CruiseBrand; href: string; label?: string };

const DEFAULT_COLUMNS: CruiseFooterColumn[] = [
  { title: "Product", links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }, { label: "FAQ", href: "#faq" }] },
  { title: "Company", links: [{ label: "About", href: "#about" }, { label: "Careers", href: "#careers" }, { label: "Contact", href: "#contact" }] },
  { title: "Legal", links: [{ label: "Privacy", href: "#privacy" }, { label: "Terms", href: "#terms" }] },
];

// The current year, read in the browser only (the server render shows the
// year prop, or none), so the footer stays static.
const noop = () => () => {};
const useYear = () => useSyncExternalStore(noop, () => new Date().getFullYear(), () => null);

/**
 * Footer block: logo + blurb, 2–4 link columns, social links, an optional
 * WhatsApp button and newsletter form, and a © row. .on-deep (dark) by
 * default; `variant="light"` for a paper footer. Columns stack on phones.
 */
export function CruiseFooter({
  brand = "Your brand",
  logo,
  blurb = "One short line about what you do and who it's for.",
  columns = DEFAULT_COLUMNS,
  socials = [],
  whatsapp,
  newsletter,
  copyright,
  year,
  variant = "dark",
  signatureBand = false,
  className,
}: {
  /** Name used in the © line and social link labels. */
  brand?: string;
  /** Logo next to (or instead of) the brand name; defaults to the name in Baloo 2. */
  logo?: ReactNode;
  blurb?: ReactNode;
  /** 2–4 columns of links. */
  columns?: CruiseFooterColumn[];
  socials?: CruiseFooterSocial[];
  /** Adds a WhatsApp button (the WhatsApp component). */
  whatsapp?: { phone: string; message?: string; label?: string };
  /** Adds an email sign-up; onSubscribe gets the address. */
  newsletter?: { title?: string; label?: string; button?: string; done?: string; onSubscribe: (email: string) => void | Promise<void> };
  /** Text after "©" and the year; defaults to the brand name. */
  copyright?: ReactNode;
  /** Defaults to the current year (shown once the page loads). */
  year?: number;
  /** "dark" uses .on-deep; "light" sits on --paper. */
  variant?: "dark" | "light";
  /** The active city's signature band along the top. */
  signatureBand?: boolean;
  className?: string;
}) {
  const currentYear = useYear();
  const shownYear = year ?? currentYear;
  return (
    <footer className={cx(variant === "dark" ? "on-deep" : "bg-paper text-ink", "border-t-(length:--border-w) border-ink", className)}>
      {signatureBand && <div className="signature-band on-primary" aria-hidden="true" />}
      <div className="mx-auto flex w-full max-w-[75rem] flex-col gap-10 px-4 py-12 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
          <div className="flex flex-col gap-4">
            <div className="font-display text-h3 font-extrabold">{logo ?? brand}</div>
            {blurb && <p className="max-w-[40ch] text-ink-muted">{blurb}</p>}
            {socials.length > 0 && (
              <ul className="flex flex-wrap gap-2" aria-label="Social links">
                {socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      aria-label={s.label ?? `${brand} on ${CRUISE_BRAND_NAMES[s.network]}`}
                      className="brutal inline-flex size-11 items-center justify-center text-ink"
                    >
                      <CruiseBrandIcon brand={s.network} className="size-5" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {whatsapp && (
              <CruiseWhatsAppButton phone={whatsapp.phone} message={whatsapp.message} label={whatsapp.label} className="self-start" />
            )}
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
            {columns.slice(0, 4).map((col) => (
              <nav key={col.title} aria-label={col.title} className="flex flex-col gap-2">
                <h2 className="text-label uppercase">{col.title}</h2>
                <ul className="flex flex-col">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <a href={link.href} className="inline-flex min-h-11 items-center text-ink underline-offset-4 hover:underline">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        {newsletter && <Newsletter {...newsletter} />}
        <p className="border-t-2 border-ink pt-6 text-small text-ink-muted">
          © {shownYear ? `${shownYear} ` : ""}
          {copyright ?? brand}
        </p>
      </div>
    </footer>
  );
}

function Newsletter({
  title = "Get updates",
  label = "Email address",
  button = "Subscribe",
  done = "Thanks! You're subscribed.",
  onSubscribe,
}: NonNullable<Parameters<typeof CruiseFooter>[0]["newsletter"]>) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>();
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const titleId = useId();
  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter an email address like name@example.com.");
      return;
    }
    setError(undefined);
    setStatus("sending");
    try {
      await onSubscribe(email);
      setStatus("done");
    } catch {
      setStatus("idle");
      setError("That didn't work. Try again.");
    }
  }
  return (
    <form onSubmit={submit} aria-labelledby={titleId} noValidate className="flex flex-col gap-3">
      <h2 id={titleId} className="text-h3">
        {title}
      </h2>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <CruiseInput
          label={label}
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          className="sm:max-w-[24rem] sm:flex-1"
        />
        <CruiseButton type="submit" disabled={status === "sending"} className="sm:mt-7">
          {button}
        </CruiseButton>
      </div>
      <p aria-live="polite" className="text-small">
        {status === "done" ? done : ""}
      </p>
    </form>
  );
}
