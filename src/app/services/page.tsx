import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ConsultationBand, PageHeader, SectionHeading } from "@/components/site/sections";
import { IconChip, serviceIcons } from "@/components/site/icons";
import { process, services } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "AI-powered software and web development, creative design, digital marketing and IT consulting from CDMWare in Lagos, Nigeria.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Services" }]}
        title="End-to-end digital services"
        lede="Software, creative design, digital marketing and IT consulting, designed to accelerate your growth and maximise your digital presence."
      />

      <section className="section">
        <div className="site-container flex flex-col gap-8">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="brutal brutal-static grid gap-8 p-6 md:p-10 lg:grid-cols-[1.1fr_1fr] lg:items-start"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <IconChip icon={serviceIcons[s.slug]} />
                  <span className="font-display text-h2 font-extrabold text-ink-muted">0{i + 1}</span>
                </div>
                <h2 className="text-h2">{s.title}</h2>
                <p className="max-w-(--measure) text-body text-ink-muted">{s.intro}</p>
                <Link
                  href={`/services/${s.slug}`}
                  className="brutal on-primary inline-flex min-h-11 items-center gap-2 self-start px-6 py-3 font-display font-extrabold uppercase tracking-[0.03em] no-underline"
                >
                  Explore {s.short} <ArrowRight aria-hidden="true" className="size-5" />
                </Link>
              </div>
              <ul className="flex flex-col gap-4">
                {s.offerings.map((o) => (
                  <li key={o.title} className="flex gap-3 rounded-brutal border-2 border-ink bg-paper p-4">
                    <Check aria-hidden="true" strokeWidth={3} className="mt-1 size-5 shrink-0" />
                    <span className="flex flex-col gap-1">
                      <span className="font-bold">{o.title}</span>
                      <span className="text-small text-ink-muted">{o.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section on-sky border-t-(length:--border-w) border-ink">
        <div className="site-container flex flex-col gap-10">
          <SectionHeading eyebrow="How we work" title="One process across every service" />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.title} className="brutal brutal-static flex items-center gap-3 p-4">
                <span className="on-primary grid size-9 shrink-0 place-items-center rounded-brutal border-2 border-ink font-display font-extrabold">
                  {i + 1}
                </span>
                <span className="font-bold">{p.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ConsultationBand compact />
    </>
  );
}
