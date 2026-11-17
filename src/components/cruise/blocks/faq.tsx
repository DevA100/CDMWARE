"use client";

import { Mail } from "lucide-react";
import { useId, type ReactNode } from "react";
import { cx } from "@/lib/cruise-utils";
import { CruiseAccordion } from "../accordion";
import { cruiseButtonClasses } from "../button";
import { CruiseWhatsAppButton } from "../whatsapp-button";

export type CruiseFaqItem = {
  question: string;
  /** Plain text is also used for the FAQPage structured data. */
  answer: ReactNode;
};

const DEFAULT_ITEMS: CruiseFaqItem[] = [
  { question: "How long does delivery take?", answer: "Same day in Lagos for orders before 12 noon; 2–3 days elsewhere." },
  { question: "How can I pay?", answer: "Card, bank transfer or pay on delivery." },
  { question: "Can I return an order?", answer: "Yes, within 7 days if it's unused and in its packaging." },
];

/**
 * FAQ block: a heading and intro over the Accordion, an optional "Still have
 * questions?" card (WhatsApp and/or email) and optional FAQPage JSON-LD for
 * search engines (answers that are plain text only).
 *
 * layout="split": two columns from 896px of the block's own width (a
 * container query, so it also works in a narrow column). The heading, intro
 * and contact card sit on the left (about 40%) and stay in view while the
 * questions scroll; the accordion is on the right. Narrower, it stacks:
 * heading, questions, then the contact card.
 */
export function CruiseFaq({
  title = "Frequently asked questions",
  intro = "Quick answers to what people ask us most.",
  items = DEFAULT_ITEMS,
  multiple = false,
  contact,
  jsonLd = false,
  headingLevel = 2,
  layout = "stacked",
  stickyOffset = 0,
  className,
}: {
  title?: ReactNode;
  intro?: ReactNode;
  items?: CruiseFaqItem[];
  /** Let several answers be open at once. */
  multiple?: boolean;
  /** Adds the "Still have questions?" card. */
  contact?: { title?: string; text?: string; whatsapp?: { phone: string; message?: string; label?: string }; email?: string; emailLabel?: string };
  /** Also output FAQPage structured data. */
  jsonLd?: boolean;
  /** The section heading's level (cards use the next one down). */
  headingLevel?: 2 | 3;
  /** "split": heading, intro and contact card in a sticky left column, the
   * questions on the right (stacks below 896px). Default "stacked". */
  layout?: "stacked" | "split";
  /** With layout="split": the height of your sticky site header (px or any
   * CSS length), so the left column sticks 24px below it. Default 0. */
  stickyOffset?: number | string;
  className?: string;
}) {
  const titleId = useId();
  const Heading = `h${headingLevel}` as "h2" | "h3";
  const SubHeading = `h${headingLevel + 1}` as "h3" | "h4";
  const structured = jsonLd
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items
          .filter((i) => typeof i.answer === "string")
          .map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })),
      }
    : null;
  const ld = structured && (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, "\\u003c") }} />
  );
  const heading = (
    <div className="flex max-w-[65ch] flex-col gap-2">
      <Heading id={titleId} className="text-h2">
        {title}
      </Heading>
      {intro && <p className="text-ink-muted">{intro}</p>}
    </div>
  );
  const accordion = (
    <CruiseAccordion
      multiple={multiple}
      items={items.map((item, i) => ({ value: `q${i}`, title: item.question, content: item.answer }))}
    />
  );
  // `row`: text beside the buttons from 640px (full width); the split
  // layout's narrow left column keeps them stacked.
  const contactCard = (className: string | false, row: boolean) =>
    contact && (
      <div className={cx("brutal brutal-static flex flex-col gap-4 p-6", row && "sm:flex-row sm:items-center sm:justify-between", className)}>
        <div className="flex flex-col gap-1">
          <SubHeading className="text-h3">{contact.title ?? "Still have questions?"}</SubHeading>
          <p className="text-ink-muted">{contact.text ?? "Talk to us. We usually reply within a few hours."}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {contact.whatsapp && <CruiseWhatsAppButton phone={contact.whatsapp.phone} message={contact.whatsapp.message} label={contact.whatsapp.label} />}
          {contact.email && (
            <a href={`mailto:${contact.email}`} className={cruiseButtonClasses({ variant: "secondary" })}>
              <Mail aria-hidden="true" />
              {contact.emailLabel ?? "Email us"}
            </a>
          )}
        </div>
      </div>
    );

  if (layout === "split") {
    const offset = typeof stickyOffset === "number" ? `${stickyOffset}px` : stickyOffset;
    return (
      // A size container: the split follows the block's own width, not the screen's.
      <section aria-labelledby={titleId} className={cx("@container", className)}>
        {ld}
        <div className="grid grid-cols-1 items-start gap-6 @min-[56rem]:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] @min-[56rem]:gap-16">
          {/* Sticky only in two columns (top does nothing while it's static). */}
          <div className="flex flex-col gap-6 @min-[56rem]:sticky" style={{ top: `calc(${offset} + 24px)` }}>
            {heading}
            {/* The card shows here in two columns, and after the questions
                when stacked: one copy is display:none, so it's only ever
                read and focused once. */}
            {contactCard("hidden @min-[56rem]:flex", false)}
          </div>
          {accordion}
          {contactCard("@min-[56rem]:hidden", true)}
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby={titleId} className={cx("flex flex-col gap-6", className)}>
      {ld}
      {heading}
      {accordion}
      {contactCard(false, true)}
    </section>
  );
}
