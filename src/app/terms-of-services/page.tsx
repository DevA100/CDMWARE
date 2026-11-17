import type { Metadata } from "next";
import { seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/site/legal-page";
import { terms } from "@/content/legal";

export const metadata: Metadata = pageMetadata({ ...seo.terms, path: "/terms-of-services" });

export default function TermsPage() {
  return <LegalPage title="Terms of Services" contactHeading="15. Contact Information" {...terms} />;
}
