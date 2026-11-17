import { useEffect, type RefObject } from "react";

/**
 * Sets `attribute="value"` on the element the first time at least
 * `threshold` of it is on screen, then stops watching, so CSS keyed on that
 * attribute runs once per page view. Without IntersectionObserver (or
 * JavaScript) the attribute is never set and the element simply shows.
 */
export function useMarkInView(ref: RefObject<HTMLElement | null>, attribute: string, value = "", threshold = 0.15) {
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        el.setAttribute(attribute, value);
        io.disconnect();
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, attribute, value, threshold]);
}
