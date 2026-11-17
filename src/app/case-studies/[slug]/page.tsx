import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CruiseBadge } from "@/components/cruise/badge";
import { ArrowLink, ConsultationBand, PageHeader, SectionHeading } from "@/components/site/sections";
import { CaseVisual } from "@/components/site/case-visual";
import { caseStudies, services } from "@/content/site";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();
  const service = services.find((s) => s.slug === study.service);
  const others = caseStudies.filter((c) => c.slug !== study.slug);

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Case Studies", href: "/case-studies" }, { label: study.title }]}
        title={study.title}
        lede={study.summary}
      >
        <div className="flex flex-wrap gap-2">
          <CruiseBadge tone="surface">{study.category}</CruiseBadge>
          <CruiseBadge tone="deep">{study.client}</CruiseBadge>
        </div>
      </PageHeader>

      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-10">
            <div className="brutal brutal-static overflow-hidden">
              <CaseVisual study={study} priority />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-h2">The challenge</h2>
              <p className="max-w-(--measure) text-body">{study.challenge}</p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-h2">Our approach</h2>
              <ol className="flex flex-col gap-3">
                {study.approach.map((a, i) => (
                  <li key={a} className="flex gap-3">
                    <span className="on-primary grid size-8 shrink-0 place-items-center rounded-brutal border-2 border-ink font-display font-extrabold">
                      {i + 1}
                    </span>
                    <span className="pt-1">{a}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <div className="brutal brutal-static on-deep flex flex-col gap-4 p-6">
              <h2 className="text-h3">Results</h2>
              <ul className="grid gap-3">
                {study.results.map((r) => (
                  <li key={r.label} className="flex flex-col rounded-brutal border-2 border-ink bg-surface p-4">
                    <span className="font-display text-h2 font-extrabold text-primary">{r.value}</span>
                    <span className="text-small text-ink-muted">{r.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            {service && (
              <div className="brutal brutal-static flex flex-col gap-3 p-6">
                <p className="eyebrow text-ink-muted">Service</p>
                <h2 className="text-h3">{service.title}</h2>
                <ArrowLink href={`/services/${service.slug}`}>View service</ArrowLink>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section className="section on-sky border-t-(length:--border-w) border-ink">
        <div className="site-container flex flex-col gap-8">
          <SectionHeading eyebrow="More work" title="Other case studies" />
          <ul className="grid gap-6 md:grid-cols-2">
            {others.map((c) => (
              <li key={c.slug}>
                <Link href={`/case-studies/${c.slug}`} className="brutal flex flex-col gap-2 p-6 text-ink no-underline">
                  <CruiseBadge tone="primary" className="self-start">
                    {c.category}
                  </CruiseBadge>
                  <h3 className="text-h3">{c.title}</h3>
                  <p className="text-ink-muted">{c.summary}</p>
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
