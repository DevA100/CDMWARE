import type { ReactNode } from "react";
import { cx } from "@/lib/cruise-utils";
import { CruiseProgress } from "./progress";

export type CruiseMeter = {
  value: number;
  max?: number;
  /** "progress" fills --primary. "health" (health, money) fills --success,
   * switching to --danger at 25% or below. */
  kind?: "progress" | "health";
};

export type CruiseStat = {
  label: string;
  value: ReactNode;
  meter?: CruiseMeter;
};

const LOW_THRESHOLD = 0.25;

function MeterBar({ label, meter }: { label: string; meter: CruiseMeter }) {
  const max = meter.max ?? 100;
  const tone = meter.kind === "health" ? (meter.value / max <= LOW_THRESHOLD ? "danger" : "success") : "primary";
  return <CruiseProgress label={label} value={meter.value} max={max} tone={tone} />;
}

export function CruiseStatBar({
  stats,
  columns = 4,
  className,
}: {
  stats: CruiseStat[];
  /** Boxes per row on desktop (1 on mobile, 2 on tablet). */
  columns?: 3 | 4;
  className?: string;
}) {
  return (
    <div className={cx("grid grid-cols-1 gap-4 md:grid-cols-2", columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4", className)}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="brutal brutal-static flex flex-col gap-2 px-4 py-3 text-ink"
        >
          <span className="text-label uppercase">{stat.label}</span>
          <span className="font-display text-h2 font-bold tabular-nums">{stat.value}</span>
          {stat.meter && <MeterBar label={stat.label} meter={stat.meter} />}
        </div>
      ))}
    </div>
  );
}
