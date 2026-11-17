import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Eye, Target } from "lucide-react";
import { CruiseBadge } from "@/components/cruise/badge";
import { CruiseStatBar } from "@/components/cruise/stat-bar";
import { ConsultationBand, PageHeader, SectionHeading } from "@/components/site/sections";
import { IconChip } from "@/components/site/icons";
import { about, process, stats, techStack, whyUs } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "CDMWare is a Lagos-based digital solutions company building software, creative design and digital marketing for startups, SMEs and organisations.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: "About" }]} title="Your vision. Engineered." lede={about.purpose} />

      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Who we are" title="A digital partner for growing organisations" />
            <p className="max-w-(--measure) text-body">{about.body}</p>
            <p className="max-w-(--measure) font-display text-h3 font-extrabold">{about.edge}</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="brutal brutal-static flex gap-5 p-6">
              <IconChip icon={Eye} />
              <div className="flex flex-col gap-2">
                <h2 className="text-h3">Our vision</h2>
                <p className="text-ink-muted">{about.vision}</p>
              </div>
            </div>
            <div className="brutal brutal-static flex gap-5 p-6">
              <IconChip icon={Target} />
              <div className="flex flex-col gap-2">
                <h2 className="text-h3">Our mission</h2>
                <p className="text-ink-muted">{about.mission}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section on-deep border-y-(length:--border-w) border-ink">
        <div className="site-container flex flex-col gap-10">
          <SectionHeading eyebrow="Why choose us" title="What makes us different" />
          <ul className="grid gap-6 md:grid-cols-2">
            {whyUs.map((w) => (
              <li key={w.title} className="brutal brutal-static flex flex-col gap-2 p-6">
                <h3 className="text-h3">{w.title}</h3>
                <p className="text-ink-muted">{w.text}</p>
              </li>
            ))}
          </ul>
          <CruiseStatBar stats={stats} />
        </div>
      </section>

      <section className="section">
        <div className="site-container flex flex-col gap-10">
          <SectionHeading eyebrow="Our process" title="Eight steps from idea to impact" />
          <ol className="relative flex flex-col gap-6 border-l-(length:--border-w) border-ink pl-8 md:ml-4">
            {process.map((p, i) => (
              <li key={p.title} className="relative">
                <span className="on-primary absolute top-4 -left-[3.15rem] grid size-9 place-items-center rounded-brutal border-2 border-ink font-display font-extrabold">
                  {i + 1}
                </span>
                <div className="brutal brutal-static flex flex-col gap-2 p-5">
                  <h3 className="text-h3">{p.title}</h3>
                  <p className="text-ink-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section on-sky border-t-(length:--border-w) border-ink">
        <div className="site-container flex flex-col gap-10">
          <SectionHeading eyebrow="Technology stack" title="Tools we work with" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {techStack.map((g) => (
              <div key={g.group} className="flex flex-col gap-3">
                <h3 className="text-label uppercase">{g.group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <li key={t}>
                      <CruiseBadge tone="surface">{t}</CruiseBadge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBand />
    </>
  );
}
