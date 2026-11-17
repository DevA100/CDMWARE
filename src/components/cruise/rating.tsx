"use client";

import { Star } from "lucide-react";
import { useId, useState } from "react";
import { cx } from "@/lib/cruise-utils";

/** One star, filled by `fill` (0 to 1): halves work (4.5). */
function StarIcon({ fill, size }: { fill: number; size?: number }) {
  return (
    <span className="rating-star" style={size ? { width: size, height: size } : undefined} aria-hidden="true">
      <span className="rating-star-empty">
        <Star strokeWidth={2.25} />
      </span>
      {fill > 0 && (
        <span className="rating-star-full" style={{ position: "absolute", inset: 0, width: `${fill * 100}%` }}>
          <span style={{ position: "relative", display: "block", width: size ?? 20, height: size ?? 20 }}>
            <Star strokeWidth={2.25} />
          </span>
        </span>
      )}
    </span>
  );
}

const fmt = (n: number) => n.toLocaleString("en-NG", { maximumFractionDigits: 1 });

/**
 * Rating, spec A5 (the existing Rating rule): Lucide stars with
 * fill: var(--primary), stroke: var(--ink), and the number next to them
 * ("4.5 · 120 reviews"). Read-only by default (halves work); with
 * `onChange` it's a radio group: arrow keys, click, hover preview.
 */
export function CruiseRating({
  value,
  max = 5,
  count,
  label = "Rating",
  onChange,
  showValue = true,
  className,
}: {
  /** 0 to max; read-only ratings may have halves (4.5). */
  value: number;
  max?: number;
  /** Number of reviews, shown as "· 120 reviews". */
  count?: number;
  /** Accessible name, e.g. "Your rating". */
  label?: string;
  /** Makes it interactive (whole stars). */
  onChange?: (value: number) => void;
  showValue?: boolean;
  className?: string;
}) {
  const name = useId();
  const [hover, setHover] = useState<number | null>(null);
  const stars = Array.from({ length: max }, (_, i) => i + 1);
  const meta = (
    <>
      {showValue && <span className="rating-value">{fmt(value)}</span>}
      {count !== undefined && (
        <span className="rating-count">
          · {count.toLocaleString("en-NG")} {count === 1 ? "review" : "reviews"}
        </span>
      )}
    </>
  );

  if (!onChange) {
    return (
      <span className={cx("rating", className)}>
        <span className="rating-stars" role="img" aria-label={`${label}: ${fmt(value)} out of ${max}`}>
          {stars.map((n) => (
            <StarIcon key={n} fill={Math.max(0, Math.min(1, value - (n - 1)))} />
          ))}
        </span>
        <span aria-hidden="true" className="contents">
          {meta}
        </span>
      </span>
    );
  }

  const shown = hover ?? value;
  return (
    <fieldset className={cx("rating rating-input", className)} onMouseLeave={() => setHover(null)}>
      <legend className="field-label">{label}</legend>
      <span className="rating-stars">
        {stars.map((n) => (
          <label key={n} className="rating-option" onMouseEnter={() => setHover(n)}>
            <input
              type="radio"
              className="visually-hidden"
              name={name}
              value={n}
              checked={Math.round(value) === n}
              onChange={() => onChange(n)}
              aria-label={`${n} ${n === 1 ? "star" : "stars"}`}
            />
            <StarIcon fill={n <= shown ? 1 : 0} size={30} />
          </label>
        ))}
      </span>
      <span aria-hidden="true" className="contents">
        {meta}
      </span>
    </fieldset>
  );
}
