import type { Metadata } from "next";
import { CruiseAlert } from "@/components/cruise/alert";
import { ConsultationBand, PageHeader } from "@/components/site/sections";
import { howWeWork, seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ ...seo.howWeWork, path: "/how-we-work" });

export default function HowWeWorkPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: howWeWork.crumb }]} title={howWeWork.title} lede={howWeWork.intro} />

      <section className="section" aria-label={howWeWork.eyebrow}>
        <div className="site-container flex flex-col gap-10">
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {howWeWork.steps.map((step, i) => (
              <li key={step.title} className="brutal brutal-static flex flex-col gap-3 p-6">
                <span className="text-label uppercase text-ink-muted">
                  {howWeWork.stepLabel} {i + 1}
                </span>
                <span
                  aria-hidden="true"
                  className="font-display text-h1 leading-none font-extrabold text-primary [-webkit-text-stroke:2px_var(--ink)]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-h3">{step.title}</h2>
                <p className="text-ink-muted">{step.text}</p>
              </li>
            ))}
          </ol>

          <CruiseAlert tone="info" title={howWeWork.note.title} className="max-w-[52rem]">
            {howWeWork.note.text}
          </CruiseAlert>
        </div>
      </section>

      <ConsultationBand />
    </>
  );
}
