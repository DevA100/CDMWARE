import type { MetadataRoute } from "next";
import { caseStudies, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/services",
    "/who-we-serve",
    "/how-we-work",
    "/our-work",
    "/insights",
    "/contact",
    "/terms-of-services",
    "/privacy-policy",
  ];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, priority: p === "" ? 1 : 0.7 })),
    ...caseStudies.map((c) => ({ url: `${site.url}/our-work/${c.slug}`, priority: 0.6 })),
  ];
}
