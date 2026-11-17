import { MessageCircle } from "lucide-react";
import { CruiseScrollTop } from "@/components/cruise/scroll-top";
import { cruiseWhatsAppLink } from "@/components/cruise/whatsapp-button";
import { site } from "@/content/site";

/** WhatsApp chat (bottom-right) and back-to-top (bottom-left), on every page. */
export function FloatingActions() {
  return (
    <>
      <a
        href={cruiseWhatsAppLink(site.whatsapp, site.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CDMware on WhatsApp"
        className="brutal fixed right-4 bottom-4 z-40 inline-flex size-14 items-center justify-center bg-success text-on-success md:right-6 md:bottom-6"
      >
        <MessageCircle aria-hidden="true" strokeWidth={2.5} className="size-7" />
      </a>
      <CruiseScrollTop position="bottom-left" />
    </>
  );
}
