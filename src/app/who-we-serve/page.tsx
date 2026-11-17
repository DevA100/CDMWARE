import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ConsultationBand, PageHeader } from "@/components/site/sections";
import { DropIn } from "@/components/site/drop-in";
import { audienceIcons, IconChip } from "@/components/site/icons";
import { seo, whoWeServe } from "@/content/site";
import { cx } from "@/lib/cruise-utils";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ ...seo.whoWeServe, path: "/who-we-serve" });

export default function WhoWeServePage() {
  return (
    <>
      <PageHeader crumbs={[{ label: whoWeServe.crumb }]} eyebrow={whoWeServe.eyebrow} title={whoWeServe.title} />

      {whoWeServe.audiences.map((a, i) => (
        <section
          key={a.id}
          id={a.id}
          aria-labelledby={`${a.id}-title`}
          className={cx("section scroll-mt-24", i % 2 === 1 && "on-sky border-y-(length:--border-w) border-ink")}
        >
          <DropIn as="div" className="site-container grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div className="flex flex-col gap-5">
              <IconChip icon={audienceIcons[a.id]} />
              <h2 id={`${a.id}-title`} className="text-h1">
                {a.title}
              </h2>
              <p className="max-w-(--measure) font-display text-h3 font-extrabold">{a.situation}</p>
              <p className="max-w-(--measure) text-body text-ink-muted">{a.text}</p>
            </div>
            <div className="brutal brutal-static flex flex-col gap-4 p-6 md:p-8">
              <h3 className="text-label uppercase">{whoWeServe.helpLabel}</h3>
              <ul className="flex flex-col gap-3">
                {a.helpWith.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check aria-hidden="true" strokeWidth={3} className="mt-1 size-4 shrink-0 text-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </DropIn>
        </section>
      ))}

      <ConsultationBand />
    </>
  );
}
