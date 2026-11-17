import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CruiseBadge } from "@/components/cruise/badge";
import { ArrowLink, ConsultationBand, PageHeader } from "@/components/site/sections";
import { CaseVisual } from "@/components/site/case-visual";
import { caseStudies, ourWork, seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { caseStudyParams } from "@/lib/our-work";

export function generateStaticParams() {
  return caseStudyParams();
}

export async function generateMetadata({ params }: PageProps<"/our-work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return pageMetadata({ title: seo.caseStudy(study.title), description: study.summary, path: `/our-work/${study.slug}` });
}

export default async function CaseStudyPage({ params }: PageProps<"/our-work/[slug]">) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const labels = ourWork.detail;
  const sections = [
    { title: labels.context, body: study.context },
    { title: labels.challenge, body: study.challenge },
    { title: labels.assessment, body: study.assessment },
    { title: labels.approach, body: study.approach },
    { title: labels.solution, body: study.solution },
    { title: labels.outcome, body: study.outcome },
  ].filter((s) => s.body && s.body.length > 0);

  return (
    <>
      <PageHeader
        crumbs={[{ label: ourWork.crumb, href: "/our-work" }, { label: study.title }]}
        title={study.title}
        lede={study.summary}
      >
        <CruiseBadge tone="surface" className="self-start">
          {study.category}
        </CruiseBadge>
      </PageHeader>

      <section className="section">
        <div className="site-container flex flex-col gap-12">
          <div className="brutal brutal-static mx-auto w-full max-w-[52rem] overflow-hidden">
            <CaseVisual study={study} priority />
          </div>
          <article className="prose-cdm mx-auto flex w-full max-w-[52rem] flex-col">
            {sections.map((s) => (
              <section key={s.title}>
                <h2>{s.title}</h2>
                {Array.isArray(s.body) ? (
                  <ul>
                    {s.body.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{s.body}</p>
                )}
              </section>
            ))}
          </article>
          <ArrowLink href="/our-work" className="mx-auto">
            {labels.back}
          </ArrowLink>
        </div>
      </section>

      <ConsultationBand />
    </>
  );
}
