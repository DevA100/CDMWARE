import { TriangleAlert } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cruise-utils";

type CardProps = {
  /** The card's heading. Omit for no header. */
  title?: ReactNode;
  children: ReactNode;
  /** "danger" for destructive or risky content (delete account, revoke key):
   * a --danger border and a plain header with a danger icon. */
  tone?: "default" | "danger";
  /** "strip": the title in a full-width --primary strip (default). "plain":
   * the title above the content, no strip. Danger cards are always plain. */
  header?: "strip" | "plain";
  /** Heading level for the title (3 by default). */
  headingLevel?: 2 | 3 | 4;
  /** Makes the whole card a link that moves on hover/active. */
  href?: string;
  className?: string;
  style?: CSSProperties;
};

export function CruiseCard({ title, children, tone = "default", header = "strip", headingLevel = 3, href, className, style }: CardProps) {
  const danger = tone === "danger";
  const plain = danger || header === "plain";
  const Heading = `h${headingLevel}` as "h2" | "h3" | "h4";
  const classes = cx(
    "brutal flex flex-col overflow-hidden text-ink",
    !href && "brutal-static",
    href && "no-underline",
    danger && "border-danger",
    className,
  );

  const content = (
    <>
      {title &&
        (plain ? (
          <div className="flex items-center gap-2 px-6 pt-5">
            {danger && <TriangleAlert aria-hidden="true" strokeWidth={2.5} className="size-6 shrink-0 text-danger" />}
            <Heading className="text-h3">{title}</Heading>
          </div>
        ) : (
          <div className="on-primary border-b-(length:--border-w) border-ink px-6 py-3">
            <Heading className="text-h3">{title}</Heading>
          </div>
        ))}
      <div className={cx("p-6", Boolean(title) && plain && "pt-3")}>{children}</div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} style={style}>
        {content}
      </a>
    );
  }
  return (
    <div className={classes} style={style}>
      {content}
    </div>
  );
}
