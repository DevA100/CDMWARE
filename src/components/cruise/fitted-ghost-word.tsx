"use client";

import { useEffect, useRef, useState } from "react";

/** Largest size the ghost word may reach: same caps as the cropped version. */
const MAX_PX = { mobile: 160, desktop: 288 };

/**
 * A ghost word (A6) scaled to sit entirely inside its box, never cropped
 * mid-letter. Width scales linearly with font size, so one measurement at the
 * current size gives the exact size that fits. Re-fits when the box resizes
 * (ResizeObserver also fires once on observe) and once web fonts load.
 * Hidden until the first fit so it never flashes at the wrong size.
 */
export function CruiseFittedGhostWord({ word, className }: { word: string; className?: string }) {
  const box = useRef<HTMLSpanElement>(null);
  const text = useRef<HTMLSpanElement>(null);
  const [size, setSize] = useState<number | null>(null);

  useEffect(() => {
    const boxEl = box.current;
    const textEl = text.current;
    if (!boxEl || !textEl) return;

    function fit() {
      if (!boxEl || !textEl) return;
      const current = parseFloat(getComputedStyle(textEl).fontSize);
      const { width, height } = textEl.getBoundingClientRect();
      if (!width || !height) return;
      const max = window.matchMedia("(min-width: 48rem)").matches ? MAX_PX.desktop : MAX_PX.mobile;
      // clientWidth/Height include padding; fit to the content box only.
      const pad = getComputedStyle(boxEl);
      const availW = boxEl.clientWidth - parseFloat(pad.paddingLeft) - parseFloat(pad.paddingRight);
      const availH = boxEl.clientHeight - parseFloat(pad.paddingTop) - parseFloat(pad.paddingBottom);
      const ratio = Math.min(availW / width, availH / height);
      // Floor, and keep 1% spare, so rounding never pushes a letter out.
      setSize(Math.max(1, Math.floor(Math.min(max, current * ratio * 0.99))));
    }

    const observer = new ResizeObserver(fit);
    observer.observe(boxEl);
    let cancelled = false;
    document.fonts?.ready.then(() => !cancelled && fit());
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [word]);

  return (
    <span ref={box} aria-hidden="true" className={className}>
      <span
        ref={text}
        className="font-display leading-[normal] font-extrabold tracking-[-0.01em] whitespace-nowrap text-ink/7 select-none"
        style={{ fontSize: size ?? MAX_PX.mobile, visibility: size === null ? "hidden" : undefined }}
      >
        {word}
      </span>
    </span>
  );
}
