import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CruiseBadge } from "@/components/cruise/badge";
import { ConsultationBand, PageHeader } from "@/components/site/sections";
import { CaseVisual } from "@/components/site/case-visual";
import { caseStudies } from "@/content/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Selected software, design and digital marketing projects delivered by CDMWare.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Case Studies" }]}
        title="Case studies"
        lede="A look at how we've helped organisations solve real problems with software, design and digital marketing."
      />
      <section className="section">
        <div className="site-container">
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <li key={c.slug} className="flex">
                <Link
                  href={`/case-studies/${c.slug}`}
                  className="brutal group flex w-full flex-col overflow-hidden text-ink no-underline"
                >
                  <div className="border-b-(length:--border-w) border-ink">
                    <CaseVisual study={c} priority={i === 0} />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <CruiseBadge tone="primary" className="self-start">
                      {c.category}
                    </CruiseBadge>
                    <h2 className="text-h3">{c.title}</h2>
                    <p className="text-ink-muted">{c.summary}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-2 font-display font-extrabold uppercase">
                      Read case study
                      <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ConsultationBand compact />
    </>
  );
}
