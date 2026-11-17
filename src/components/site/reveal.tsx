"use client";

import { useRef, type ReactNode } from "react";
import { cx } from "@/lib/cruise-utils";
import { useMarkInView } from "@/lib/use-mark-in-view";

/**
 * Rises 16px into place the first time it scrolls into view (.reveal in
 * globals.css, triggered by data-revealed). Visible without JS.
 */
export function Reveal({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useMarkInView(ref, "data-revealed");
  return (
    <div ref={ref} className={cx("reveal", className)}>
      {children}
    </div>
  );
}
