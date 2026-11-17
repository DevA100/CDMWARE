import { MessageCircle } from "lucide-react";
import { CruiseScrollTop } from "@/components/cruise/scroll-top";
import { cruiseWhatsAppLink } from "@/components/cruise/whatsapp-button";
import { site } from "@/content/site";

/** WhatsApp chat and, stacked above it, back-to-top (both bottom-right), on every page. */
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
      {/* Centred above the WhatsApp button (56px at right-4/bottom-4, md: right-6/bottom-6) with a 12px gap. */}
      <CruiseScrollTop
        position="bottom-right"
        showAfter={400}
        className="right-5 bottom-[84px] md:right-7 md:bottom-[92px]"
      />
    </>
  );
}
