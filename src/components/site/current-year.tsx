"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

/** The current year, read in the browser so the page can stay static. */
export function CurrentYear({ fallback = 2026 }: { fallback?: number }) {
  const year = useSyncExternalStore(noop, () => new Date().getFullYear(), () => fallback);
  return <>{year}</>;
}
