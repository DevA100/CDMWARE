import type { Metadata } from "next";
import { seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/site/legal-page";
import { privacy } from "@/content/legal";

export const metadata: Metadata = pageMetadata({ ...seo.privacy, path: "/privacy-policy" });

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" contactHeading="12. Contact Us" {...privacy} />;
}
