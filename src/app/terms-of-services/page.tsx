import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { terms } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Services",
  description: "The terms and conditions for using the CDMWare website and services.",
  alternates: { canonical: "/terms-of-services" },
};

export default function TermsPage() {
  return <LegalPage title="Terms of Services" contactHeading="15. Contact Information" {...terms} />;
}
