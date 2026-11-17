import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { CruiseWhatsAppButton } from "@/components/cruise/whatsapp-button";
import { ContactForm } from "@/components/site/contact-form";
import { PageHeader } from "@/components/site/sections";
import { contact, seo, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ ...seo.contact, path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: contact.crumb }]} title={contact.title} lede={contact.lede} />

      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div className="brutal brutal-static flex flex-col gap-6 p-6 md:p-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-h2">{contact.formTitle}</h2>
              <p className="text-ink-muted">{contact.formIntro}</p>
            </div>
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-6">
            <div className="brutal brutal-static on-deep flex flex-col gap-5 p-6">
              <h2 className="text-h3">{contact.detailsTitle}</h2>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                  <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                  <a href={site.phoneHref} className="underline underline-offset-4">
                    {site.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{site.address}</span>
                </li>
              </ul>
              <CruiseWhatsAppButton phone={site.whatsapp} message={site.whatsappMessage} className="self-start" />
            </div>

            <div className="brutal brutal-static on-primary flex flex-col gap-3 p-6">
              <h2 className="text-h3">{contact.consultation.title}</h2>
              <p>{contact.consultation.text}</p>
              <p className="text-small">{contact.consultation.hint}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
