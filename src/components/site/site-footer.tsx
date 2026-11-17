import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { CruiseBrandIcon, CRUISE_BRAND_NAMES } from "@/components/cruise/blocks/brand-icons";
import { CruiseWhatsAppButton } from "@/components/cruise/whatsapp-button";
import { footer, site } from "@/content/site";
import { Logo } from "./logo";
import { CurrentYear } from "./current-year";

const linkClass = "inline-flex min-h-10 items-center underline-offset-4 hover:underline";

export function SiteFooter() {
  return (
    <footer className="on-deep border-t-(length:--border-w) border-ink">
      <div className="signature-band on-primary" aria-hidden="true" />
      <div className="site-container flex flex-col gap-12 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div className="flex flex-col gap-4">
            <Logo tone="light" className="h-10 w-auto self-start" />
            <p className="font-display text-h3 font-extrabold">{footer.title}</p>
            <p className="eyebrow text-primary">{footer.descriptor}</p>
            <p className="max-w-[42ch] text-ink-muted">{footer.text}</p>
            <ul className="flex flex-wrap gap-2" aria-label="Social links">
              {site.socials.map((s) => (
                <li key={s.network}>
                  <a
                    href={s.href}
                    aria-label={`${site.name} on ${CRUISE_BRAND_NAMES[s.network]}`}
                    className="brutal inline-flex size-11 items-center justify-center text-ink"
                  >
                    <CruiseBrandIcon brand={s.network} className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label={footer.quickLinksTitle} className="flex flex-col gap-3">
            <h2 className="text-label uppercase text-primary">{footer.quickLinksTitle}</h2>
            <ul className="flex flex-col">
              {footer.quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={footer.servicesTitle} className="flex flex-col gap-3">
            <h2 className="text-label uppercase text-primary">{footer.servicesTitle}</h2>
            <ul className="flex flex-col">
              {footer.services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link href={footer.howWeWork.href} className={`${linkClass} gap-2 font-bold`}>
                  {footer.howWeWork.label} <ArrowRight aria-hidden="true" className="size-4 text-primary" />
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="text-label uppercase text-primary">{footer.contactTitle}</h2>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-3">
                <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                <a href={site.phoneHref} className="underline-offset-4 hover:underline">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{site.address}</span>
              </li>
            </ul>
            <CruiseWhatsAppButton phone={site.whatsapp} message={site.whatsappMessage} className="mt-2 self-start" />
          </div>
        </div>

        {/* pr-20 / md:pr-16 keep this row clear of the fixed WhatsApp and back-to-top buttons when scrolled to the bottom. */}
        <div className="flex flex-col gap-4 border-t-2 border-ink pt-6 pr-20 text-small text-ink-muted md:flex-row md:items-center md:justify-between md:pr-16">
          {/* Copyright and registration: one line from md, stacked on mobile. */}
          <p className="flex flex-col gap-1 md:flex-row md:items-center md:gap-0">
            <span>
              {footer.copyright.before} <CurrentYear /> {footer.copyright.after}
            </span>
            <span>
              <span aria-hidden="true" className="mx-2 hidden md:inline">
                ·
              </span>
              {footer.registrationLabel} {site.registrationNumber}
            </span>
          </p>
          <ul className="flex gap-6">
            {footer.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="underline-offset-4 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
