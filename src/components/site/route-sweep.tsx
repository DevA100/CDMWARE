"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * The gold route sweep (.route-sweep in cruise-ui.css) across the top of
 * the screen on each client-side navigation, not on the first load. Keyed on
 * the pathname, so every navigation remounts it and replays the sweep.
 */
export function RouteSweep() {
  const pathname = usePathname();
  const [firstPath] = useState(pathname);
  const [navigated, setNavigated] = useState(false);
  // Adjusting state while rendering (React's documented pattern) rather than in an effect.
  if (!navigated && pathname !== firstPath) setNavigated(true);
  if (!navigated) return null;

  return (
    <div key={pathname} className="route-sweep" aria-hidden="true">
      <div className="route-sweep-bar" />
    </div>
  );
}
