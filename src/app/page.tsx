import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { CruiseHero } from "@/components/cruise/hero";
import { CruiseBadge } from "@/components/cruise/badge";
import { cruiseButtonClasses } from "@/components/cruise/button";
import { CruiseTestimonials } from "@/components/cruise/blocks/testimonials";
import { HeroGlobe } from "@/components/site/hero-globe";
import { ArrowLink, ConsultationBand, SectionHeading } from "@/components/site/sections";
import { audienceIcons, IconChip, serviceIcons } from "@/components/site/icons";
import { home, seo, testimonials } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ ...seo.home, path: "/" });

const stepNumber = (i: number) => String(i + 1).padStart(2, "0");

export default function HomePage() {
  const { hero, intro, whatWeDo, approach, whoWeWorkWith, whyUs, process } = home;

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
        lede={
          <>
            <p className="font-display text-h3 font-extrabold">{hero.strapline}</p>
            {hero.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </>
        }
        actions={
          <>
            <Link href={hero.primary.href} className={cruiseButtonClasses({ variant: "inverted" })}>
              {hero.primary.label} <ArrowRight aria-hidden="true" />
            </Link>
            <Link href={hero.secondary.href} className={cruiseButtonClasses({ variant: "secondary" })}>
              {hero.secondary.label}
            </Link>
          </>
        }
        illustration={<HeroGlobe />}
        illustrationFrame={false}
        ghostWord="CDM"
      />

      {/* Ticker */}
      <div className="on-deep ticker" aria-hidden="true">
        <div className="ticker-track font-display text-h3 font-extrabold uppercase">
          {[0, 1].map((k) => (
            <span key={k}>
              {home.ticker.map((t) => (
                <span key={t} className="mx-6">
                  {t} <span className="text-primary">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <section className="section" aria-labelledby="intro-title">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow={intro.eyebrow} title={<span id="intro-title">{intro.title}</span>} />
          <div className="flex flex-col gap-5 text-body">
            {intro.paragraphs.map((p, i) => (
              <p key={p} className={i === intro.paragraphs.length - 1 ? "font-display text-h3 font-extrabold" : undefined}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section on-sky border-y-(length:--border-w) border-ink" aria-labelledby="what-title">
        <div className="site-container flex flex-col gap-12">
          <SectionHeading eyebrow={whatWeDo.eyebrow} title={<span id="what-title">{whatWeDo.title}</span>} />
          <ul className="grid gap-6 lg:grid-cols-3">
            {whatWeDo.capabilities.map((c, i) => (
              <li key={c.id} className="flex">
                <Link
                  href={`/services#${c.id}`}
                  className="brutal group flex w-full flex-col gap-5 p-6 text-ink no-underline md:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <IconChip icon={serviceIcons[c.id]} />
                    <span className="font-display text-h2 leading-none font-extrabold text-primary [-webkit-text-stroke:2px_var(--ink)]">
                      {stepNumber(i)}
                    </span>
                  </div>
                  <h3 className="text-h3">{c.title}</h3>
                  <p className="font-bold">{c.subheading}</p>
                  <p className="text-ink-muted">{c.text}</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-label uppercase">{whatWeDo.listLabel}</p>
                    <ul className="flex flex-col gap-2">
                      {c.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <Check aria-hidden="true" strokeWidth={3} className="mt-1 size-4 shrink-0 text-ink" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 font-display font-extrabold uppercase">
                    {c.title}
                    <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our approach */}
      <section className="section" aria-labelledby="approach-title">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="flex flex-col items-start gap-6">
            <SectionHeading eyebrow={approach.eyebrow} title={<span id="approach-title">{approach.title}</span>} />
            <Link href={approach.cta.href} className={cruiseButtonClasses({ variant: "primary" })}>
              {approach.cta.label} <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="brutal brutal-static flex flex-col gap-5 p-6 text-body md:p-10">
            {approach.paragraphs.map((p, i) => (
              <p key={p} className={i === 0 ? "font-display text-h3 font-extrabold" : undefined}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="section on-sky border-y-(length:--border-w) border-ink" aria-labelledby="audiences-title">
        <div className="site-container flex flex-col gap-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={whoWeWorkWith.eyebrow}
              title={<span id="audiences-title">{whoWeWorkWith.title}</span>}
            />
            <ArrowLink href="/who-we-serve" className="shrink-0">
              {whoWeWorkWith.linkLabel}
            </ArrowLink>
          </div>
          <ul className="grid gap-6 md:grid-cols-3">
            {whoWeWorkWith.audiences.map((a) => (
              <li key={a.id} className="flex">
                <Link
                  href={`/who-we-serve#${a.id}`}
                  className="brutal group flex w-full flex-col gap-4 p-6 text-ink no-underline"
                >
                  <IconChip icon={audienceIcons[a.id]} />
                  <h3 className="text-h3">{a.title}</h3>
                  <p className="text-ink-muted">{a.text}</p>
                  <ArrowRight
                    aria-hidden="true"
                    className="mt-auto size-6 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why CDMware */}
      <section className="section on-deep border-b-(length:--border-w) border-ink" aria-labelledby="why-title">
        <div className="site-container flex flex-col gap-12">
          <SectionHeading eyebrow={whyUs.eyebrow} title={<span id="why-title">{whyUs.title}</span>} />
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.points.map((w, i) => (
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
        </div>
      </section>

      {/* Process */}
      <section className="section" aria-labelledby="process-title">
        <div className="site-container flex flex-col gap-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow={process.eyebrow} title={<span id="process-title">{process.title}</span>} />
            <ArrowLink href={process.link.href} className="shrink-0">
              {process.link.label}
            </ArrowLink>
          </div>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step, i) => (
              <li key={step.title} className="brutal brutal-static flex flex-col gap-3 p-6">
                <span className="font-display text-h1 leading-none font-extrabold text-primary [-webkit-text-stroke:2px_var(--ink)]">
                  {stepNumber(i)}
                </span>
                <h3 className="text-h3">{step.title}</h3>
                <p className="text-small text-ink-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section on-sky border-t-(length:--border-w) border-ink">
        <div className="site-container">
          <CruiseTestimonials
            title={home.testimonials.title}
            intro={home.testimonials.intro}
            items={testimonials.map((t, i) => ({ ...t, featured: i === 0 }))}
          />
        </div>
      </section>

      <ConsultationBand />
    </>
  );
}
