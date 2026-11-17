import type { Metadata } from "next";
import { BrainCircuit, Code2, Lightbulb, Workflow } from "lucide-react";
import { ConsultationBand, PageHeader, SectionHeading } from "@/components/site/sections";
import { IconChip } from "@/components/site/icons";
import { insights, seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ ...seo.insights, path: "/insights" });

// In the same order as insights.categories.
const categoryIcons = [Lightbulb, Workflow, BrainCircuit, Code2];

export default function InsightsPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: insights.crumb }]} title={insights.title} lede={insights.intro} />

      <section className="section" aria-labelledby="categories-title">
        <div className="site-container flex flex-col gap-10">
          <SectionHeading title={<span id="categories-title">{insights.categoriesTitle}</span>} />
          <ul className="grid gap-6 md:grid-cols-2">
            {insights.categories.map((c, i) => (
              <li key={c.title} className="brutal brutal-static flex gap-5 p-6">
                <IconChip icon={categoryIcons[i % categoryIcons.length]} />
                <div className="flex flex-col gap-2">
                  <h3 className="text-h3">{c.title}</h3>
                  <p className="text-ink-muted">{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section on-sky border-y-(length:--border-w) border-ink" aria-labelledby="upcoming-title">
        <div className="site-container flex flex-col gap-10">
          <SectionHeading title={<span id="upcoming-title">{insights.upcomingTitle}</span>} />
          <ol className="flex flex-col gap-4">
            {insights.upcoming.map((title, i) => (
              <li key={title} className="brutal brutal-static flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-5">
                <span className="w-[2.5ch] shrink-0 font-display text-h2 leading-none font-extrabold text-primary [-webkit-text-stroke:2px_var(--ink)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-h3 font-extrabold">{title}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ConsultationBand />
    </>
  );
}
