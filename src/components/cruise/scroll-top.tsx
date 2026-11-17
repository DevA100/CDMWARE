"use client";

import { ArrowUp } from "lucide-react";
import { useSyncExternalStore, type CSSProperties } from "react";
import { cx } from "@/lib/cruise-utils";

// One scroll listener, throttled to a frame.
function subscribeScroll(onChange: () => void) {
  let frame = 0;
  const onScroll = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      onChange();
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => {
    window.removeEventListener("scroll", onScroll);
    cancelAnimationFrame(frame);
  };
}

/**
 * Scroll-to-top, spec A5: a square .brutal button (48px, Lucide arrow-up)
 * fixed in a bottom corner. It appears once the page is scrolled past
 * `showAfter`, scrolls back up (instantly with reduced motion), then moves
 * keyboard focus to the `#top` target (`tabIndex={-1}`) so keyboard users
 * start again from the top. It sits above a toast stack in its corner.
 */
export function CruiseScrollTop({
  position = "bottom-right",
  offset = 16,
  showAfter = 600,
  label,
  targetId = "top",
  className,
}: {
  position?: "bottom-right" | "bottom-left";
  /** Distance from the screen edges, in px (the safe area is added). */
  offset?: number;
  /** Pixels scrolled before it appears. */
  showAfter?: number;
  /** Optional text next to the icon, e.g. "Top" (the name stays "Back to top"). */
  label?: string;
  /** id of the element that gets focus at the top (give it tabIndex={-1}). */
  targetId?: string;
  className?: string;
}) {
  const visible = useSyncExternalStore(subscribeScroll, () => window.scrollY > showAfter, () => false);

  function goToTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "instant" : "smooth" });
    const target = document.getElementById(targetId) ?? document.querySelector<HTMLElement>("main h1, h1, main");
    if (!target) return;
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }

  return (
    <button
      type="button"
      className={cx("brutal scroll-top", className)}
      data-position={position}
      data-visible={visible ? "" : undefined}
      aria-label="Back to top"
      style={{ "--scroll-top-offset": `${offset}px` } as CSSProperties}
      onClick={goToTop}
    >
      <ArrowUp aria-hidden="true" strokeWidth={3} />
      {label && <span aria-hidden="true">{label}</span>}
    </button>
  );
}
