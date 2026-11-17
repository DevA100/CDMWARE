import { useId, type ElementType, type ReactNode } from "react";
import { cx } from "@/lib/cruise-utils";
import { CruiseAvatar } from "../avatar";
import { CruiseRating } from "../rating";

export type CruiseTestimonial = {
  name: string;
  /** Role, company or location, e.g. "Shop owner, Yaba". */
  role?: string;
  quote: string;
  /** 1–5 stars; leave out to hide the stars. */
  rating?: number;
  /** Photo URL; initials show without it. */
  avatar?: string;
  /** One card can be featured: a --primary card (grid variant). */
  featured?: boolean;
};

const DEFAULT_ITEMS: CruiseTestimonial[] = [
  { name: "Ada Okafor", role: "Shop owner, Yaba", quote: "Orders doubled the month we switched. My customers say the site feels like our shop.", rating: 5, featured: true },
  { name: "Tunde Bello", role: "Founder, Ibadan", quote: "Setup took an afternoon. Everything works on my customers' phones.", rating: 5 },
  { name: "Ngozi Eze", role: "Designer, Abuja", quote: "Bold without being messy. Clients remember it.", rating: 4 },
];

function Person({ t }: { t: CruiseTestimonial }) {
  return (
    <figcaption className="flex items-center gap-3">
      {t.avatar ? <CruiseAvatar name={t.name} src={t.avatar} alt="" size="md" /> : <CruiseAvatar name={t.name} size="md" />}
      <span className="flex flex-col">
        <span className="font-bold">{t.name}</span>
        {t.role && <span className="text-small text-ink-muted">{t.role}</span>}
      </span>
    </figcaption>
  );
}

/**
 * Testimonials block: quote cards with Avatar, name, role and a read-only
 * Rating. `variant="grid"` (one card can be featured in --primary) or
 * `"single"` for one large quote.
 */
export function CruiseTestimonials({
  title = "What people say",
  intro,
  items = DEFAULT_ITEMS,
  variant = "grid",
  headingLevel = 2,
  List = "ul",
  className,
}: {
  title?: ReactNode;
  intro?: ReactNode;
  items?: CruiseTestimonial[];
  variant?: "grid" | "single";
  headingLevel?: 2 | 3;
  /** CDMware addition: the grid's list element, e.g. a DropIn wrapper. Default "ul". */
  List?: ElementType<{ className?: string; children?: ReactNode }>;
  className?: string;
}) {
  const titleId = useId();
  const Heading = `h${headingLevel}` as "h2" | "h3";
  const shown = variant === "single" ? items.slice(0, 1) : items;
  return (
    <section aria-labelledby={titleId} className={cx("flex flex-col gap-8", className)}>
      <div className="flex max-w-[65ch] flex-col gap-2">
        <Heading id={titleId} className="text-h2">
          {title}
        </Heading>
        {intro && <p className="text-ink-muted">{intro}</p>}
      </div>
      {variant === "single" ? (
        shown.map((t) => (
          <figure key={t.name} className="brutal brutal-static flex max-w-[50rem] flex-col gap-6 p-6 md:p-10">
            {t.rating !== undefined && <CruiseRating value={t.rating} label={`${t.name}'s rating`} />}
            <blockquote className="font-display text-h2 leading-tight font-extrabold">“{t.quote}”</blockquote>
            <Person t={t} />
          </figure>
        ))
      ) : (
        <List className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((t) => (
            <li key={t.name} className="flex">
              <figure className={cx("brutal brutal-static flex w-full flex-col justify-between gap-6 p-6", t.featured && "on-primary")}>
                <div className="flex flex-col gap-4">
                  {t.rating !== undefined &&
                    (t.featured ? (
                      // Stars are --primary; on the --primary card they sit on a white chip.
                      <span className="rounded-brutal self-start border-2 border-ink bg-surface px-2 py-1">
                        <CruiseRating value={t.rating} label={`${t.name}'s rating`} />
                      </span>
                    ) : (
                      <CruiseRating value={t.rating} label={`${t.name}'s rating`} />
                    ))}
                  <blockquote className="text-body">“{t.quote}”</blockquote>
                </div>
                <Person t={t} />
              </figure>
            </li>
          ))}
        </List>
      )}
    </section>
  );
}
