import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { CruiseBadge } from "@/components/cruise/badge";
import { cruiseButtonClasses } from "@/components/cruise/button";
import { ConsultationBand, PageHeader, SectionHeading } from "@/components/site/sections";
import { CaseVisual } from "@/components/site/case-visual";
import { DropIn } from "@/components/site/drop-in";
import { IconChip } from "@/components/site/icons";
import { caseStudies, caseStudyCategories, ctas, ourWork, seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ ...seo.ourWork, path: "/our-work" });

export default function OurWorkPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: ourWork.crumb }]} title={ourWork.title} lede={ourWork.intro} />

      <section className="section" aria-labelledby="categories-title">
        <div className="site-container flex flex-col gap-8">
          <SectionHeading title={<span id="categories-title">{ourWork.categoriesTitle}</span>} />
          <DropIn className="flex flex-wrap gap-3">
            {caseStudyCategories.map((c) => (
              <li key={c}>
                <CruiseBadge tone="muted" className="px-4 py-2 normal-case tracking-normal text-body font-bold">
                  {c}
                </CruiseBadge>
              </li>
            ))}
          </DropIn>

          {caseStudies.length > 0 ? (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((c) => (
                <li key={c.slug} className="flex">
                  <Link href={`/our-work/${c.slug}`} className="brutal flex w-full flex-col overflow-hidden text-ink no-underline">
                    <div className="border-b-(length:--border-w) border-ink">
                      <CaseVisual study={c} />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <CruiseBadge tone="muted" className="self-start">
                        {c.category}
                      </CruiseBadge>
                      <h2 className="text-h3">{c.title}</h2>
                      <p className="text-ink-muted">{c.summary}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="brutal brutal-static on-sky flex flex-col items-start gap-5 p-6 md:p-10">
              <IconChip icon={FileText} />
              <h2 className="text-h2">{ourWork.empty.title}</h2>
              <p className="max-w-(--measure) text-body">{ourWork.empty.text}</p>
              <Link href={ctas.startConversation.href} className={cruiseButtonClasses({ variant: "primary" })}>
                {ctas.startConversation.label} <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <ConsultationBand />
    </>
  );
}
