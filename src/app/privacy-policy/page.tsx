import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/site/legal-page";
import { privacy } from "@/content/legal";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How CDMWare collects, uses and protects your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" contactHeading="12. Contact Us" {...privacy} />;
}
