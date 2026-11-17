import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ConsultationBand, PageHeader, SectionHeading } from "@/components/site/sections";
import { IconChip, industryIcons } from "@/components/site/icons";
import { about, industries } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Industries",
  description:
    "Digital solutions for startups, SMEs, corporates, NGOs, education, healthcare and government, from CDMWare.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Industries" }]}
        title="Industry-specific solutions"
        lede="Every sector has its own challenges. We bring solutions that understand yours."
      />
      <section className="section">
        <div className="site-container flex flex-col gap-12">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <li key={ind.slug} id={ind.slug} className="brutal brutal-static flex scroll-mt-28 flex-col gap-4 p-6 md:p-8">
                <IconChip icon={industryIcons[ind.slug]} />
                <h2 className="text-h3">{ind.title}</h2>
                <p className="font-bold">{ind.tagline}</p>
                <p className="text-ink-muted">{ind.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section on-sky border-t-(length:--border-w) border-ink">
        <div className="site-container">
          <SectionHeading
            eyebrow="Local insight, global standards"
            title={about.edge}
            intro="We work with clients across Nigeria, the UK and Europe, so we understand both the realities of the African market and the expectations of international customers."
          />
        </div>
      </section>
      <ConsultationBand compact />
    </>
  );
}
