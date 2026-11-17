import { cx } from "@/lib/cruise-utils";

export type CruiseProgressTone = "primary" | "success" | "danger";

type ProgressProps = {
  /** Accessible name, and the visible name when `showLabel` is on. */
  label: string;
  /** Leave out for an indeterminate bar (working, no known end). */
  value?: number;
  max?: number;
  tone?: CruiseProgressTone;
  size?: "sm" | "md" | "lg";
  /** Shows the name on the left and the value on the right above the bar. */
  showLabel?: boolean;
  /** Visible value text, e.g. "₦1,200 of ₦5,000". Defaults to a percentage. */
  valueText?: string;
  className?: string;
};

const ratio = (value: number, max: number) => Math.min(Math.max(value / max, 0), 1);

/** Progress (linear), spec A5: `.progress` in theme.css. */
export function CruiseProgress({
  label,
  value,
  max = 100,
  tone = "primary",
  size = "md",
  showLabel = false,
  valueText,
  className,
}: ProgressProps) {
  const indeterminate = value === undefined;
  const r = indeterminate ? 0 : ratio(value, max);
  const text = valueText ?? (indeterminate ? undefined : `${Math.round(r * 100)}%`);

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={indeterminate ? undefined : value}
      aria-valuetext={indeterminate ? undefined : valueText}
      data-tone={tone === "primary" ? undefined : tone}
      data-indeterminate={indeterminate ? "" : undefined}
      className={cx("progress", size !== "md" && `progress-${size}`, className)}
    >
      {showLabel && (
        <div className="progress-label" aria-hidden="true">
          <span>{label}</span>
          {text && <span>{text}</span>}
        </div>
      )}
      <div className="progress-track">
        <div
          className={cx("progress-fill", tone === "primary" && !indeterminate && "on-primary")}
          data-flush={!indeterminate && (r === 0 || r === 1) ? "" : undefined}
          style={indeterminate ? undefined : { width: `${r * 100}%` }}
        />
      </div>
    </div>
  );
}

// Ring sizes: outer size, stroke thickness, ink outline either side.
const RINGS = { sm: { size: 48, stroke: 10 }, md: { size: 80, stroke: 12 }, lg: { size: 120, stroke: 12 } } as const;
const OUTLINE = 2;

/** Progress (circular), spec A5: `.ring` in theme.css. Leave `value` out for
 * a spinner; with reduced motion it stops and says "Loading…" instead. */
export function CruiseProgressRing({
  label,
  value,
  max = 100,
  tone = "primary",
  size = "md",
  className,
}: Omit<ProgressProps, "showLabel" | "valueText">) {
  const indeterminate = value === undefined;
  const r = indeterminate ? 0.25 : ratio(value, max);
  const { size: px, stroke } = RINGS[size];
  const radius = px / 2 - OUTLINE - stroke / 2;
  const centre = px / 2;
  const circle = { cx: centre, cy: centre, r: radius, pathLength: 100 };

  return (
    <span className={cx("inline-flex items-center gap-3", className)}>
      <span
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={indeterminate ? undefined : value}
        data-tone={tone === "primary" ? undefined : tone}
        data-indeterminate={indeterminate ? "" : undefined}
        className={cx("progress-ring", size !== "md" && `progress-ring-${size}`)}
      >
        <svg width={px} height={px} viewBox={`0 0 ${px} ${px}`} aria-hidden="true">
          <circle className="progress-ring-outline" {...circle} strokeWidth={stroke + OUTLINE * 2} />
          <circle className="progress-ring-track" {...circle} strokeWidth={stroke} />
          {r > 0 && (
            <circle className="progress-ring-value" {...circle} strokeWidth={stroke} strokeDasharray={`${r * 100} 100`} />
          )}
        </svg>
        {!indeterminate && (
          <span className="progress-ring-text" aria-hidden="true">
            {Math.round(r * 100)}%
          </span>
        )}
      </span>
      {indeterminate && <span className="progress-ring-loading">Loading…</span>}
    </span>
  );
}
