import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CruiseBadge } from "@/components/cruise/badge";
import { cruiseButtonClasses } from "@/components/cruise/button";
import { ArrowLink, ConsultationBand, PageHeader, SectionHeading } from "@/components/site/sections";
import { IconChip, serviceIcons } from "@/components/site/icons";
import { CaseVisual } from "@/components/site/case-visual";
import { caseStudies, process, services } from "@/content/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.slug];
  const related = caseStudies.filter((c) => c.service === service.slug);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Services", href: "/services" }, { label: service.short }]}
        title={service.title}
        lede={service.summary}
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className={cruiseButtonClasses({ variant: "inverted" })}>
            Start a project <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </PageHeader>

      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-6">
            <IconChip icon={Icon} />
            <SectionHeading eyebrow="Overview" title="What we deliver" intro={service.intro} />
          </div>
          <ul className="grid gap-6">
            {service.offerings.map((o, i) => (
              <li key={o.title} className="brutal brutal-static flex flex-col gap-2 p-6">
                <span className="text-label uppercase text-ink-muted">0{i + 1}</span>
                <h3 className="text-h3">{o.title}</h3>
                <p className="text-ink-muted">{o.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section on-sky border-y-(length:--border-w) border-ink">
        <div className="site-container grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="What you get" title="Outcomes that matter to your business" />
            <ul className="flex flex-col gap-3">
              {service.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-body">
                  <CheckCircle2 aria-hidden="true" strokeWidth={2.5} className="mt-1 size-5 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="brutal brutal-static flex flex-col gap-4 p-6 md:p-8">
            <h3 className="text-h3">Tools & technologies</h3>
            <ul className="flex flex-wrap gap-2">
              {service.tools.map((t) => (
                <li key={t}>
                  <CruiseBadge tone="muted">{t}</CruiseBadge>
                </li>
              ))}
            </ul>
            <h3 className="mt-4 text-h3">Our process</h3>
            <ol className="grid gap-2 sm:grid-cols-2">
              {process.map((p, i) => (
                <li key={p.title} className="flex gap-2 text-small">
                  <span className="font-bold">{i + 1}.</span> {p.title}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="site-container flex flex-col gap-10">
            <SectionHeading eyebrow="Related work" title="See it in action" />
            <ul className="grid gap-6 md:grid-cols-2">
              {related.map((c) => (
                <li key={c.slug}>
                  <Link href={`/case-studies/${c.slug}`} className="brutal flex flex-col overflow-hidden text-ink no-underline">
                    <div className="border-b-(length:--border-w) border-ink">
                      <CaseVisual study={c} />
                    </div>
                    <div className="flex flex-col gap-2 p-6">
                      <h3 className="text-h3">{c.title}</h3>
                      <p className="text-ink-muted">{c.summary}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section border-t-(length:--border-w) border-ink">
        <div className="site-container flex flex-col gap-8">
          <SectionHeading eyebrow="More services" title="Explore what else we do" />
          <ul className="grid gap-6 md:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug} className="brutal brutal-static flex flex-col gap-4 p-6">
                <IconChip icon={serviceIcons[s.slug]} />
                <h3 className="text-h3">{s.title}</h3>
                <ArrowLink href={`/services/${s.slug}`} className="mt-auto">
                  Learn more
                </ArrowLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConsultationBand compact />
    </>
  );
}
