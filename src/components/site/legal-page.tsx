import Link from "next/link";
import type { LegalSection } from "@/content/legal";
import { site } from "@/content/site";
import { PageHeader } from "./sections";

export function LegalPage({
  title,
  updated,
  intro,
  sections,
  contactHeading,
}: {
  title: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
  contactHeading: string;
}) {
  return (
    <>
      <PageHeader crumbs={[{ label: title }]} title={title} lede={`Last updated: ${updated}`} />
      <section className="section">
        <div className="site-container">
          <article className="prose-cdm brutal brutal-static mx-auto max-w-[52rem] p-6 md:p-12">
            {intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {sections.map((s) => (
              <section key={s.title}>
                <h2>{s.title}</h2>
                {s.paragraphs?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
                {s.after?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
            <section>
              <h2>{contactHeading}</h2>
              <p>If you have questions about this page, please contact us:</p>
              <ul>
                <li>
                  Email: <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  Phone: <a href={site.phoneHref}>{site.phone}</a>
                </li>
                <li>Address: {site.address}</li>
              </ul>
              <p>
                See also our{" "}
                {title.startsWith("Privacy") ? (
                  <Link href="/terms-of-services">Terms of Services</Link>
                ) : (
                  <Link href="/privacy-policy">Privacy Policy</Link>
                )}
                .
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
