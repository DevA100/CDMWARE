import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Mail, MapPin, Phone } from "lucide-react";
import { CruiseWhatsAppButton } from "@/components/cruise/whatsapp-button";
import { ContactForm } from "@/components/site/contact-form";
import { PageHeader } from "@/components/site/sections";
import { consultation, site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Start a project or book a free 30-minute consultation with CDMWare. Lekki, Lagos, Nigeria.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Contact" }]}
        title="Let's build something great"
        lede="Tell us about your project or book a free 30-minute consultation."
      />

      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div className="brutal brutal-static flex flex-col gap-6 p-6 md:p-10">
            <h2 className="text-h2">Start a project</h2>
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-6">
            <div className="brutal brutal-static on-deep flex flex-col gap-5 p-6">
              <h2 className="text-h3">Contact details</h2>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{site.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                  <a href={site.phoneHref} className="underline underline-offset-4">
                    {site.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                  <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                    {site.email}
                  </a>
                </li>
              </ul>
              <CruiseWhatsAppButton phone={site.whatsapp} message={site.whatsappMessage} className="self-start" />
            </div>

            <div className="brutal brutal-static on-primary flex flex-col gap-4 p-6">
              <h2 className="text-h3">{consultation.title}</h2>
              <p>{consultation.lede}</p>
              <ul className="flex flex-col gap-3">
                {consultation.points.map((p) => (
                  <li key={p.title}>
                    <span className="font-bold">{p.title}:</span> {p.text}
                  </li>
                ))}
              </ul>
              <p className="text-small">Pick “Free 30-minute consultation” in the form and we&apos;ll send you a time.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
