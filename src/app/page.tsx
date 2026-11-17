import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { CruiseHero } from "@/components/cruise/hero";
import { CruiseBadge } from "@/components/cruise/badge";
import { cruiseButtonClasses } from "@/components/cruise/button";
import { CruiseStatBar } from "@/components/cruise/stat-bar";
import { CruiseTestimonials } from "@/components/cruise/blocks/testimonials";
import { HeroIllustration } from "@/components/site/hero-illustration";
import { ArrowLink, ConsultationBand, SectionHeading } from "@/components/site/sections";
import { IconChip, industryIcons, serviceIcons } from "@/components/site/icons";
import { CaseVisual } from "@/components/site/case-visual";
import {
  about,
  caseStudies,
  hero,
  industries,
  process,
  services,
  site,
  stats,
  techStack,
  testimonials,
  whyUs,
} from "@/content/site";
import { homeTitle, pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: homeTitle,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <CruiseHero
        eyebrow={
          <CruiseBadge tone="surface" sticker>
            <Sparkles aria-hidden="true" className="mr-1 inline size-4 align-[-2px]" />
            {hero.eyebrow}
          </CruiseBadge>
        }
        headline={hero.headline}
        lede={hero.lede}
        actions={
          <>
            <Link href="/contact" className={cruiseButtonClasses({ variant: "inverted" })}>
              Get started today <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="/services" className={cruiseButtonClasses({ variant: "secondary" })}>
              Our services
            </Link>
          </>
        }
        illustration={<HeroIllustration />}
        ghostWord="CDM"
      />

      {/* Ticker */}
      <div className="on-deep ticker" aria-hidden="true">
        <div className="ticker-track font-display text-h3 font-extrabold uppercase">
          {[0, 1].map((k) => (
            <span key={k}>
              {services.map((s) => (
                <span key={s.slug} className="mx-6">
                  {s.short} <span className="text-primary">✦</span>
                </span>
              ))}
              <span className="mx-6">
                Your Vision. Engineered. <span className="text-primary">✦</span>
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="section" aria-labelledby="services-title">
        <div className="site-container flex flex-col gap-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title={<span id="services-title">End-to-end solutions that accelerate your growth</span>}
              intro="Software, design, marketing and consulting under one roof, so your digital presence works as one."
            />
            <ArrowLink href="/services" className="shrink-0">
              All services
            </ArrowLink>
          </div>
          <ul className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug} className="flex">
                <Link
                  href={`/services/${s.slug}`}
                  className="brutal group flex w-full flex-col gap-5 p-6 text-ink no-underline md:p-8"
                >
                  <IconChip icon={serviceIcons[s.slug]} />
                  <h3 className="text-h3">{s.title}</h3>
                  <p className="text-ink-muted">{s.summary}</p>
                  <ul className="flex flex-col gap-2">
                    {s.offerings.map((o) => (
                      <li key={o.title} className="flex gap-2">
                        <Check aria-hidden="true" strokeWidth={3} className="mt-1 size-4 shrink-0 text-ink" />
                        <span className="font-medium">{o.title}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 font-display font-extrabold uppercase">
                    Learn more <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we are */}
      <section className="section on-sky border-y-(length:--border-w) border-ink" aria-labelledby="about-title">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Who we are" title={<span id="about-title">Your vision. Engineered.</span>} />
            <p className="max-w-(--measure) text-body">{about.body}</p>
            <p className="max-w-(--measure) font-display text-h3 font-extrabold">{about.edge}</p>
            <ArrowLink href="/about">More about us</ArrowLink>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="brutal brutal-static flex flex-col gap-3 p-6">
              <CruiseBadge tone="primary" className="self-start">
                Our vision
              </CruiseBadge>
              <p className="text-body">{about.vision}</p>
            </div>
            <div className="brutal brutal-static flex flex-col gap-3 p-6 sm:translate-y-8">
              <CruiseBadge tone="deep" className="self-start">
                Our mission
              </CruiseBadge>
              <p className="text-body">{about.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" aria-labelledby="process-title">
        <div className="site-container flex flex-col gap-12">
          <SectionHeading
            eyebrow="Our process"
            title={<span id="process-title">How we take your idea from brief to launch</span>}
            intro="A clear, eight-step process that keeps you informed and in control at every stage."
          />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <li key={step.title} className="brutal brutal-static flex flex-col gap-3 p-6">
                <span className="font-display text-h1 leading-none font-extrabold text-primary [-webkit-text-stroke:2px_var(--ink)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-h3">{step.title}</h3>
                <p className="text-small text-ink-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section on-deep border-y-(length:--border-w) border-ink" aria-labelledby="why-title">
        <div className="site-container flex flex-col gap-12">
          <SectionHeading
            eyebrow="Why choose us"
            title={<span id="why-title">A technology partner, not just a service provider</span>}
          />
          <ul className="grid gap-6 md:grid-cols-2">
            {whyUs.map((w, i) => (
              <li key={w.title} className="brutal brutal-static flex gap-5 p-6">
                <span className="on-primary grid size-12 shrink-0 place-items-center rounded-brutal border-2 border-ink font-display text-h3 font-extrabold">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-h3">{w.title}</h3>
                  <p className="text-ink-muted">{w.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <CruiseStatBar
            stats={stats.map((s) => ({ label: s.label, value: s.value }))}
            className="[&>div]:bg-surface"
          />
        </div>
      </section>

      {/* Case studies */}
      <section className="section" aria-labelledby="cases-title">
        <div className="site-container flex flex-col gap-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Case studies" title={<span id="cases-title">Latest work</span>} />
            <ArrowLink href="/case-studies" className="shrink-0">
              All case studies
            </ArrowLink>
          </div>
          <ul className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((c) => (
              <li key={c.slug} className="flex">
                <Link href={`/case-studies/${c.slug}`} className="brutal flex w-full flex-col overflow-hidden text-ink no-underline">
                  <div className="border-b-(length:--border-w) border-ink">
                    <CaseVisual study={c} />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <CruiseBadge tone="muted" className="self-start">
                      {c.category}
                    </CruiseBadge>
                    <h3 className="text-h3">{c.title}</h3>
                    <p className="text-small text-ink-muted">{c.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section className="section on-sky border-y-(length:--border-w) border-ink" aria-labelledby="industries-title">
        <div className="site-container flex flex-col gap-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Industries"
              title={<span id="industries-title">Solutions that understand your sector</span>}
            />
            <ArrowLink href="/industries" className="shrink-0">
              All industries
            </ArrowLink>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <li key={ind.slug} className="brutal brutal-static flex items-start gap-4 p-6">
                <IconChip icon={industryIcons[ind.slug]} />
                <div className="flex flex-col gap-1">
                  <h3 className="text-h3">{ind.title}</h3>
                  <p className="text-ink-muted">{ind.tagline}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section" aria-labelledby="stack-title">
        <div className="site-container flex flex-col gap-10">
          <SectionHeading
            eyebrow="Technology stack"
            title={<span id="stack-title">Modern tools, chosen for the job</span>}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {techStack.map((g) => (
              <div key={g.group} className="flex flex-col gap-3">
                <h3 className="text-label uppercase">{g.group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <li key={t}>
                      <CruiseBadge tone="surface" className="normal-case tracking-normal">
                        {t}
                      </CruiseBadge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section on-sky border-t-(length:--border-w) border-ink">
        <div className="site-container">
          <CruiseTestimonials
            title="What our clients say"
            intro="Startups, SMEs and organisations in Nigeria and beyond."
            items={testimonials.map((t, i) => ({ ...t, featured: i === 0 }))}
          />
        </div>
      </section>

      <ConsultationBand />
    </>
  );
}
