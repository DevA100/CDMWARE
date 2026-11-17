import { caseStudies, ogLabels, ourWork, site } from "@/content/site";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { caseStudyParams } from "@/lib/our-work";

export const alt = `A ${site.name} case study`;
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return caseStudyParams();
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  return renderOgImage({ label: ogLabels.caseStudy, title: study?.title ?? ourWork.title });
}
