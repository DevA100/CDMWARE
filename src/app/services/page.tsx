import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ConsultationBand, PageHeader } from "@/components/site/sections";
import { IconChip, serviceIcons } from "@/components/site/icons";
import { seo, services, servicesPage } from "@/content/site";
import { cx } from "@/lib/cruise-utils";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ ...seo.services, path: "/services" });

export default function ServicesPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: servicesPage.crumb }]} eyebrow={servicesPage.eyebrow} title={servicesPage.title} lede={servicesPage.intro}>
        <ul className="flex flex-wrap gap-3" aria-label={servicesPage.eyebrow}>
          {services.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="brutal inline-flex min-h-11 items-center gap-2 bg-surface px-4 font-display font-extrabold text-ink no-underline"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHeader>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          aria-labelledby={`${s.id}-title`}
          className={cx("section scroll-mt-24", i % 2 === 1 && "on-sky border-y-(length:--border-w) border-ink")}
        >
          <div className="site-container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <IconChip icon={serviceIcons[s.id]} />
                <span className="font-display text-h1 leading-none font-extrabold text-primary [-webkit-text-stroke:2px_var(--ink)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 id={`${s.id}-title`} className="text-h1">
                {s.title}
              </h2>
              <p className="font-display text-h3 font-extrabold">{s.subheading}</p>
              <p className="max-w-(--measure) text-body text-ink-muted">{s.intro}</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="brutal brutal-static flex flex-col gap-4 p-6 md:p-8">
                <h3 className="text-label uppercase">{servicesPage.listLabel}</h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check aria-hidden="true" strokeWidth={3} className="mt-1 size-4 shrink-0 text-ink" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="brutal brutal-static on-primary flex flex-col gap-2 p-6 md:p-8">
                <h3 className="text-label uppercase">{servicesPage.deliverablesLabel}</h3>
                <p className="text-body">{s.deliverables}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <ConsultationBand showServicesLink={false} />
    </>
  );
}
