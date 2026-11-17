import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/site/legal-page";
import { terms } from "@/content/legal";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Services",
  description:
    "The terms and conditions for using the CDMWare website and services.",
  path: "/terms-of-services",
});

export default function TermsPage() {
  return <LegalPage title="Terms of Services" contactHeading="15. Contact Information" {...terms} />;
}
