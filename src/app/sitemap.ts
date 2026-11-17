import type { MetadataRoute } from "next";
import { caseStudies, services, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/case-studies", "/industries", "/about", "/contact", "/terms-of-services", "/privacy-policy"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, priority: p === "" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, priority: 0.8 })),
    ...caseStudies.map((c) => ({ url: `${site.url}/case-studies/${c.slug}`, priority: 0.6 })),
  ];
}
