import { caseStudies } from "@/content/site";

/**
 * Static params for /our-work/[slug] and its opengraph-image.
 *
 * With Cache Components, generateStaticParams must return at least one
 * param. Until the first case study is added, a placeholder slug keeps the
 * build valid; the page renders a 404 for it like any unknown slug.
 */
export function caseStudyParams() {
  return caseStudies.length > 0 ? caseStudies.map((c) => ({ slug: c.slug })) : [{ slug: "__placeholder__" }];
}
