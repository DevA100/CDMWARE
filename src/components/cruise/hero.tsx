import type { ReactNode } from "react";
import { CruiseButtonGroup } from "./button";
import { CruiseFittedGhostWord } from "./fitted-ghost-word";
import { cx } from "@/lib/cruise-utils";

type HeroProps = {
  /** A small line or sticker Badge above the headline (e.g. "Early bird"). */
  eyebrow?: ReactNode;
  headline: ReactNode;
  lede?: ReactNode;
  /** A small line under the buttons (e.g. a support link). */
  footnote?: ReactNode;
  /** One primary + one secondary Button. On this yellow background the
   * primary must use the "inverted" variant. Stacks full-width on mobile. */
  actions?: ReactNode;
  /** Optional illustration, shown in a .brutal frame rotated 2deg. */
  illustration?: ReactNode;
  /** Caps the illustration frame at this width (px) and, from 1024px, aligns
   * it to the right edge of the content. For a card (a price, a stat) that
   * would otherwise stretch across its column. Default: the frame fills its
   * column on wide screens. */
  illustrationMaxWidth?: number;
  /** Optional ghost word (A6): one oversized decorative word behind the
   * copy, cropped by the section edge. Max one per page. From 1280px it is
   * anchored to the content container, so on wide screens it stays behind
   * the content instead of drifting to the screen edge. */
  ghostWord?: string;
  /** Scale the ghost word to fit entirely inside the hero (no cropping)
   * instead of the oversized, edge-cropped default. */
  ghostFit?: boolean;
  className?: string;
};

export function CruiseHero({
  eyebrow,
  headline,
  lede,
  footnote,
  actions,
  illustration,
  illustrationMaxWidth,
  ghostWord,
  ghostFit,
  className,
}: HeroProps) {
  return (
    <section
      className={cx(
        // overflow-hidden crops the ghost word and the tilted frame so they
        // never widen the page. isolate lets the ghost word sit at -z-10:
        // above the yellow, below the content.
        "on-primary relative isolate overflow-hidden border-b-(length:--border-w) border-ink",
        // From 1280px: fixed-range height with the content centred, and a
        // size container so the headline scales with the hero's own width.
        "xl:@container xl:flex xl:min-h-[clamp(480px,70vh,760px)] xl:flex-col",
        className,
      )}
    >
      {ghostWord && ghostFit && (
        // Fills the hero above the danfo stripe (bottom-6 = its 24px).
        <CruiseFittedGhostWord
          word={ghostWord}
          className="pointer-events-none absolute inset-x-0 top-0 bottom-6 -z-10 flex items-end justify-end px-2"
        />
      )}
      {/* Full-bleed section; only this container is width-constrained.
          It becomes the ghost word's positioning box from 1280px. */}
      <div className="site-container grid items-center gap-12 py-12 md:py-16 lg:grid-cols-[3fr_2fr] 2xl:grid-cols-2 2xl:gap-16 xl:relative xl:flex-1 xl:content-center xl:[--hero-size:clamp(2.75rem,5.625cqi,4.5rem)]">
        {ghostWord && !ghostFit && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -bottom-6 -z-10 font-display text-[10rem] leading-none font-extrabold tracking-[-0.01em] whitespace-nowrap text-ink/7 select-none md:text-[18rem] xl:right-0 xl:-bottom-12"
          >
            {ghostWord}
          </span>
        )}
        <div className="flex flex-col items-start gap-6">
          {eyebrow && <div>{eyebrow}</div>}
          <h1 className="text-hero [overflow-wrap:anywhere] xl:text-(length:--hero-size)">{headline}</h1>
          {lede && <p className="max-w-(--measure) text-body">{lede}</p>}
          {actions && <CruiseButtonGroup>{actions}</CruiseButtonGroup>}
          {footnote && <div className="-mt-1 text-small">{footnote}</div>}
        </div>
        {illustration && (
          // Scales with the headline: capped at 7× the hero size from 1280px;
          // from 1536px (two equal columns) it fills its column, so the wide
          // container leaves no empty gap between text and picture.
          <div
            className={cx(
              "brutal brutal-static mx-auto w-full max-w-md rotate-2 p-4 lg:max-w-none xl:max-w-[calc(var(--hero-size)*7)] 2xl:max-w-none",
              illustrationMaxWidth !== undefined && "lg:mr-0",
            )}
            // Inline, so it wins over the responsive max-width classes.
            style={illustrationMaxWidth !== undefined ? { maxWidth: illustrationMaxWidth } : undefined}
          >
            {illustration}
          </div>
        )}
      </div>
      {/* Signature band (B1) along the hero's bottom edge */}
      {/* The city's signature band (Danfo stripe, Ibadan's rust roof, Abuja's Unity band or Port Harcourt's Keke stripe). */}
      <div className="signature-band on-primary relative" aria-hidden="true" />
    </section>
  );
}

export type CruiseBusPalette = {
  primary: string;
  onPrimary: string;
  paper: string;
  surface: string;
  muted: string;
};

const cssPalette: CruiseBusPalette = {
  primary: "var(--primary)",
  onPrimary: "var(--on-primary)",
  paper: "var(--paper)",
  surface: "var(--surface)",
  muted: "var(--muted)",
};

/** Flat danfo bus, ink-outlined, filled from theme variables only (A6).
 * `palette` swaps the variables for resolved colours, for renderers that
 * can't read CSS variables (the next/og share image). */
export function CruiseDanfoBus({
  className,
  palette = cssPalette,
  width,
  driveIn,
}: {
  className?: string;
  palette?: CruiseBusPalette;
  /** Fixed pixel width; otherwise the bus fills its container. */
  width?: number;
  /** Drive the bus in from the left once on mount (CSS .bus-drive-in). */
  driveIn?: boolean;
}) {
  const c = palette;
  return (
    <svg
      viewBox="0 0 240 140"
      role="img"
      aria-label="A yellow danfo bus"
      className={cx("h-auto w-full", className)}
      width={width}
      height={width ? (width * 140) / 240 : undefined}
      fill="none"
      stroke={c.onPrimary}
      strokeWidth="3"
      strokeLinejoin="round"
    >
      <rect x="0" y="0" width="240" height="140" fill={c.paper} stroke="none" />
      <line x1="8" y1="118" x2="232" y2="118" />
      {/* The bus itself; the background and road stay put. */}
      <g className={driveIn ? "bus-drive-in" : undefined}>
        <path d="M24 108V44a12 12 0 0 1 12-12h138l30 34v42z" fill={c.primary} />
        <rect x="24" y="74" width="180" height="8" fill={c.onPrimary} />
        <rect x="24" y="88" width="180" height="8" fill={c.onPrimary} />
        <rect x="38" y="42" width="30" height="22" fill={c.surface} />
        <rect x="76" y="42" width="30" height="22" fill={c.surface} />
        <rect x="114" y="42" width="30" height="22" fill={c.surface} />
        <path d="M152 42h22l20 22h-42z" fill={c.surface} />
        <circle cx="62" cy="108" r="13" fill={c.onPrimary} />
        <circle cx="62" cy="108" r="5" fill={c.muted} />
        <circle cx="172" cy="108" r="13" fill={c.onPrimary} />
        <circle cx="172" cy="108" r="5" fill={c.muted} />
      </g>
    </svg>
  );
}

/** Flat Micra taxi for the Ibadan · Micra theme (B2): ink-outlined, filled
 * from theme variables only (A6). Gold body, a Micra-brown stripe
 * (--illo-2) and a rust-roof sign (--illo-1). */
export function CruiseMicraTaxi({ className, width }: { className?: string; width?: number }) {
  return (
    <svg
      viewBox="0 0 240 130"
      width={width}
      role="img"
      aria-label="A gold Micra taxi"
      className={className}
      style={width ? undefined : { width: "100%", height: "auto" }}
    >
      <g stroke="var(--ink)" strokeWidth="4" strokeLinejoin="round">
        {/* Roof sign */}
        <rect x="104" y="14" width="40" height="14" fill="var(--illo-1)" />
        {/* Cabin and body */}
        <path d="M58 64 L82 30 H168 L196 64 Z" fill="var(--primary)" />
        <rect x="18" y="62" width="206" height="40" fill="var(--primary)" />
        {/* Micra-brown side stripe */}
        <rect x="18" y="78" width="206" height="10" fill="var(--illo-2)" />
        {/* Windows */}
        <path d="M72 62 L88 38 H122 V62 Z" fill="var(--surface)" />
        <path d="M132 62 V38 H164 L182 62 Z" fill="var(--surface)" />
        {/* Lights */}
        <rect x="210" y="66" width="14" height="10" fill="var(--surface)" />
        <rect x="18" y="66" width="10" height="10" fill="var(--danger)" />
        {/* Wheels */}
        <circle cx="66" cy="104" r="18" fill="var(--ink)" />
        <circle cx="178" cy="104" r="18" fill="var(--ink)" />
      </g>
      <circle cx="66" cy="104" r="7" fill="var(--surface)" />
      <circle cx="178" cy="104" r="7" fill="var(--surface)" />
    </svg>
  );
}
