import type { Metadata } from "next";
import { Eye, Target } from "lucide-react";
import { CruiseBadge } from "@/components/cruise/badge";
import { ConsultationBand, PageHeader, SectionHeading } from "@/components/site/sections";
import { IconChip } from "@/components/site/icons";
import { about, seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ ...seo.about, path: "/about" });

export default function AboutPage() {
  const [lede, intersection, ...body] = about.paragraphs;
  const { mission, vision, philosophy } = about;

  return (
    <>
      <PageHeader crumbs={[{ label: about.crumb }]} title={about.title} lede={lede} />

      {/* About */}
      <section className="section" aria-labelledby="about-title">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow={about.eyebrow} title={<span id="about-title">{intersection}</span>} />
          <div className="flex max-w-(--measure) flex-col gap-5 text-body">
            {body.map((p, i) => (
              <p key={p} className={i === body.length - 1 ? "font-display text-h3 font-extrabold" : undefined}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="section on-sky border-y-(length:--border-w) border-ink">
        <div className="site-container grid gap-6 md:grid-cols-2">
          {[
            { ...mission, icon: Target },
            { ...vision, icon: Eye },
          ].map((m) => (
            <div key={m.title} className="brutal brutal-static flex flex-col gap-4 p-6 md:p-10">
              <IconChip icon={m.icon} />
              <h2 className="text-h2">{m.title}</h2>
              <p className="text-body">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="section on-deep border-b-(length:--border-w) border-ink" aria-labelledby="philosophy-title">
        <div className="site-container flex flex-col gap-12">
          <CruiseBadge tone="primary" className="self-start">
            <span id="philosophy-title">{philosophy.title}</span>
          </CruiseBadge>
          <p className="flex flex-col gap-2 font-display text-h1 leading-[1.05] font-extrabold md:text-hero">
            {philosophy.line.map((part, i) => (
              <span key={part} className="flex items-baseline gap-4 md:gap-6">
                <span aria-hidden="true" className="w-[2ch] shrink-0 text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{part}</span>
              </span>
            ))}
          </p>
          <div className="grid gap-6 border-t-2 border-ink pt-10 md:grid-cols-3">
            {philosophy.paragraphs.map((p, i) => (
              <p key={p} className={i === philosophy.paragraphs.length - 1 ? "font-display text-h3 font-extrabold" : "text-ink-muted"}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBand />
    </>
  );
}
