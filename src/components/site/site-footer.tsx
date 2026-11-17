import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { CruiseBrandIcon, CRUISE_BRAND_NAMES } from "@/components/cruise/blocks/brand-icons";
import { CruiseWhatsAppButton } from "@/components/cruise/whatsapp-button";
import { about, services, site } from "@/content/site";
import { Logo } from "./logo";
import { CurrentYear } from "./current-year";

const company = [
  { label: "About us", href: "/about" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Terms of Services", href: "/terms-of-services" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function SiteFooter() {
  return (
    <footer className="on-deep border-t-(length:--border-w) border-ink">
      <div className="signature-band on-primary" aria-hidden="true" />
      <div className="site-container flex flex-col gap-12 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          <div className="flex flex-col gap-5">
            <Logo tone="light" className="h-10 w-auto self-start" />
            <p className="max-w-[42ch] text-ink-muted">{about.body.split(". ")[0]}.</p>
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

          <nav aria-label="Services" className="flex flex-col gap-3">
            <h2 className="text-label uppercase text-primary">Services</h2>
            <ul className="flex flex-col">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="inline-flex min-h-10 items-center underline-offset-4 hover:underline">
                    {s.short}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="flex flex-col gap-3">
            <h2 className="text-label uppercase text-primary">Company</h2>
            <ul className="flex flex-col">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex min-h-10 items-center underline-offset-4 hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="text-label uppercase text-primary">Contact us</h2>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                <a href={site.phoneHref} className="underline-offset-4 hover:underline">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </li>
            </ul>
            <CruiseWhatsAppButton phone={site.whatsapp} message={site.whatsappMessage} className="mt-2 self-start" />
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t-2 border-ink pt-6 text-small text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            © <CurrentYear /> {site.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legal.map((l) => (
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
