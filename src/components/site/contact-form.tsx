"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { CruiseInput } from "@/components/cruise/input";
import { CruiseSelect } from "@/components/cruise/select";
import { CruiseTextarea } from "@/components/cruise/textarea";
import { CruiseButton } from "@/components/cruise/button";
import { CruiseAlert } from "@/components/cruise/alert";
import { contact, site } from "@/content/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

/**
 * Contact form, submitted to Netlify Forms. Netlify detects the form from
 * the static copy in public/__forms.html, so any field added here must be
 * added there too.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Enter your name.";
    const email = String(data.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter an email address like name@company.com.";
    if (String(data.get("message") ?? "").trim().length < 10) next.message = "Tell us a little about your business.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <CruiseAlert tone="success" title="Thanks — your message is on its way.">
        We&apos;ll get back to you shortly. For anything urgent, chat with us on WhatsApp.
      </CruiseAlert>
    );
  }

  return (
    <form name="contact" onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <CruiseInput label="Full name" name="name" autoComplete="name" required error={errors.name} />
        <CruiseInput label="Email" name="email" type="email" autoComplete="email" required error={errors.email} />
        <CruiseInput label="Phone (optional)" name="phone" type="tel" autoComplete="tel" placeholder="+234" />
        <CruiseInput label="Company (optional)" name="company" autoComplete="organization" />
      </div>

      <CruiseSelect label={contact.form.serviceLabel} name="service" defaultValue="">
        <option value="" disabled>
          {contact.form.servicePlaceholder}
        </option>
        {contact.form.serviceOptions.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </CruiseSelect>

      <CruiseTextarea
        label={contact.form.messageLabel}
        name="message"
        rows={5}
        autoGrow
        required
        error={errors.message}
      />

      {status === "failed" && (
        <CruiseAlert tone="danger" title="Your message didn't send.">
          Please try again, or email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
        </CruiseAlert>
      )}

      <CruiseButton type="submit" disabled={status === "sending"} className="self-start">
        <Send aria-hidden="true" /> {status === "sending" ? "Sending…" : contact.form.submit}
      </CruiseButton>
    </form>
  );
}
