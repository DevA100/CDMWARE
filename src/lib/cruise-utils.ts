export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// Tokens a portalled layer copies from where it was opened: the palette roles
// (the city, NEPA mode and .on-primary / .on-deep all resolve into these) and
// the shape (corners, border, shadow).
const SHAPE_TOKENS = ["--border-w", "--radius", "--shadow-x", "--shadow-y"];
const CONTEXT_TOKENS = [
  "--primary", "--on-primary", "--ink", "--ink-muted", "--paper", "--surface", "--muted", "--tint",
  "--danger", "--on-danger", "--success", "--on-success", "--info", "--on-info", "--deep", "--on-deep",
  "--light-paper", "--light-muted", "--light-tint",
  "--border-w", "--radius", "--shadow-x", "--shadow-y", "--shadow-color", "--shadow", "--shadow-lg",
];

/**
 * Makes a portalled layer (menu, listbox, popover, dialog) match where it was
 * opened. Popups render at the end of <body>, outside the element that sets
 * data-corners, data-theme, .nepa-mode / .light-mode or .on-primary /
 * .on-deep, so they'd otherwise fall back to the page defaults.
 *
 * It reads the trigger's surroundings (its parent, so a trigger that is
 * itself a primary button doesn't lock the popup to light colours) and puts
 * on the popup: the nearest data-corners and data-theme, the mode class,
 * `.cruise` if the trigger sits in a .cruise scope, and the resolved token
 * values inline (so --radius overrides and .on-primary / .on-deep areas
 * carry over too).
 *
 * `colours: false` (dialogs and drawers) copies the corners, city and mode
 * but not an .on-primary / .on-deep area's locked colours: a full dialog
 * opened from a yellow navbar should still follow NEPA mode.
 */
export function cruiseMatchContext(
  trigger: Element | null | undefined,
  popup: HTMLElement,
  { colours = true }: { colours?: boolean } = {},
) {
  if (!trigger) return;
  const from = trigger.parentElement ?? trigger;
  // Undo what an earlier call added (popups that stay mounted, like the
  // custom select's, are matched again on every open).
  for (const name of (popup.dataset.cruiseContext ?? "").split(" ").filter(Boolean)) popup.classList.remove(name);
  const added: string[] = [];
  const corners = from.closest("[data-corners]")?.getAttribute("data-corners");
  if (corners) popup.dataset.corners = corners;
  else delete popup.dataset.corners;
  const city = from.closest("[data-theme]")?.getAttribute("data-theme");
  if (city) popup.dataset.theme = city;
  else delete popup.dataset.theme;
  const mode = from.closest(".nepa-mode, .light-mode");
  if (mode) added.push(mode.classList.contains("nepa-mode") ? "nepa-mode" : "light-mode");
  if (from.closest(".cruise")) added.push("cruise");
  // Only record classes this call put there, never ones the component set.
  const mine = added.filter((name) => !popup.classList.contains(name));
  popup.classList.add(...mine);
  popup.dataset.cruiseContext = mine.join(" ");
  const style = getComputedStyle(from);
  for (const token of colours ? CONTEXT_TOKENS : SHAPE_TOKENS) {
    const value = style.getPropertyValue(token).trim();
    if (value) popup.style.setProperty(token, value);
  }
  if (colours) popup.style.colorScheme = style.colorScheme;
}

/**
 * The portal-context helper for components: pass the trigger's ref, put the
 * result on the popup's `ref` (without a trigger, e.g. a controlled dialog,
 * it reads from whatever had focus when the popup opened). It runs whenever the popup mounts or
 * re-renders, so the copied context survives React updating its className.
 * (A plain function, not a hook, so this file stays importable from Server
 * Components.)
 */
export function cruisePortalContext(triggerRef: { current: Element | null }, options?: { colours?: boolean }) {
  return (popup: HTMLElement | null) => {
    if (!popup) return;
    // No trigger (a controlled dialog): use what had focus when it opened.
    const focused = document.activeElement;
    const fallback = focused && focused !== document.body && !popup.contains(focused) ? focused : null;
    cruiseMatchContext(triggerRef.current ?? fallback, popup, options);
  };
}
