"use client";

import { useEffect, useRef, type ReactNode } from "react";

const ORBIT = "M50 190 A190 72 0 1 1 430 190 A190 72 0 1 1 50 190 Z";
const DUR = 24;

/**
 * One badge travelling round the orbit. `offset` is 0–1 of the way round.
 * The path runs over the top first (behind the globe) then along the bottom
 * (in front), so each badge is drawn twice: a "back" copy under the globe
 * that shows for the first half of the loop, and a "front" copy over it for
 * the second half. Badges also shrink a little on the far side.
 */
function Orbiter({ offset, layer, children }: { offset: number; layer: "back" | "front"; children: ReactNode }) {
  const timing = { dur: `${DUR}s`, begin: `${-offset * DUR}s`, repeatCount: "indefinite" } as const;
  return (
    <g>
      <animateMotion {...timing} path={ORBIT} rotate="0" />
      <animateTransform
        {...timing}
        attributeName="transform"
        type="scale"
        values="1;0.72;1;1.12;1"
        keyTimes="0;0.25;0.5;0.75;1"
        calcMode="spline"
        keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
      />
      <animate
        {...timing}
        attributeName="visibility"
        values={layer === "back" ? "visible;hidden" : "hidden;visible"}
        keyTimes="0;0.5"
        calcMode="discrete"
      />
      {/* brutal shadow, then the card */}
      <rect x="-30" y="-30" width="64" height="64" rx="8" fill="var(--brand-navy)" />
      {children}
    </g>
  );
}

/**
 * Hero artwork: a globe wrapped in a network, with web, mobile, AI and code
 * badges orbiting it. SVG animation (SMIL); paused for reduced motion.
 */
export function HeroGlobe() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => (mq.matches ? svg.pauseAnimations() : svg.unpauseAnimations());
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const navy = "var(--brand-navy)";
  const gold = "var(--brand-gold)";
  const sky = "var(--brand-sky)";

  return (
    <svg
      ref={ref}
      viewBox="0 0 480 380"
      role="img"
      aria-label="A globe with web, mobile, AI and code icons orbiting around it"
      className="h-auto w-full"
    >
      {/* background sparkles */}
      <g fill="#fff" stroke={navy} strokeWidth="3" strokeLinejoin="round">
        <path d="M60 52l6 15 15 6-15 6-6 15-6-15-15-6 15-6z" />
        <path d="M418 300l5 11 11 5-11 5-5 11-5-11-11-5 11-5z" />
      </g>
      <g fill={navy}>
        <circle cx="420" cy="60" r="4" />
        <circle cx="96" cy="320" r="4" />
        <circle cx="380" cy="34" r="3" />
      </g>

      {/* back half of the orbit */}
      <path d="M50 190 A190 72 0 0 1 430 190" fill="none" stroke={navy} strokeWidth="3" strokeDasharray="8 8" />

      <Badges layer="back" />

      {/* globe */}
      <circle cx="248" cy="198" r="104" fill={navy} />
      <circle cx="240" cy="190" r="104" fill="#fff" stroke={navy} strokeWidth="4" />
      <clipPath id="globe-clip">
        <circle cx="240" cy="190" r="102" />
      </clipPath>
      <g clipPath="url(#globe-clip)" fill="none" stroke={navy} strokeWidth="2.5">
        {/* land masses, abstract */}
        <path
          d="M170 120c18-14 46-16 58-4 10 10-4 24 8 34 12 10 30 0 36 14 6 16-16 26-30 24-18-2-26 14-42 10-16-4-12-22-26-28-14-6-22-34-4-50z"
          fill={sky}
        />
        <path d="M262 236c14-8 34-4 40 8 6 14-6 30-22 32-16 2-30-8-30-20 0-8 4-14 12-20z" fill={sky} />
        <path d="M300 112c10-6 24-2 26 8 2 10-10 16-18 14-10-2-14-16-8-22z" fill={sky} />
        {/* grid */}
        <ellipse cx="240" cy="190" rx="40" ry="104" />
        <ellipse cx="240" cy="190" rx="78" ry="104" />
        <line x1="240" y1="86" x2="240" y2="294" />
        <path d="M140 150q100 22 200 0" />
        <line x1="136" y1="190" x2="344" y2="190" />
        <path d="M140 230q100 -22 200 0" />
      </g>
      {/* network on the globe */}
      <g stroke={gold} strokeWidth="3.5" strokeLinecap="round" fill="none">
        <path d="M200 140L262 160L288 214L222 236L200 140" />
        <path d="M262 160L222 236" />
      </g>
      <g fill={gold} stroke={navy} strokeWidth="3">
        <circle cx="200" cy="140" r="7" />
        <circle cx="262" cy="160" r="7" />
        <circle cx="288" cy="214" r="7" />
        <circle cx="222" cy="236" r="7" />
      </g>

      {/* front half of the orbit */}
      <path d="M430 190 A190 72 0 0 1 50 190" fill="none" stroke={navy} strokeWidth="3" strokeDasharray="8 8" />

      <Badges layer="front" />
    </svg>
  );
}

/** The four badges: web, mobile, AI, code. */
function Badges({ layer }: { layer: "back" | "front" }) {
  const navy = "var(--brand-navy)";
  const gold = "var(--brand-gold)";
  const sky = "var(--brand-sky)";
  return (
    <g stroke={navy} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round">
      {/* Web: a browser window */}
      <Orbiter layer={layer} offset={0}>
        <rect x="-34" y="-34" width="64" height="64" rx="8" fill="#fff" />
        <path d="M-34 -18h64" />
        <circle cx="-25" cy="-26" r="2.5" fill={gold} stroke="none" />
        <circle cx="-17" cy="-26" r="2.5" fill={navy} stroke="none" />
        <rect x="-24" y="-8" width="20" height="16" fill={sky} strokeWidth="3" />
        <path d="M2 -6h18M2 2h14M-24 18h44" strokeWidth="3" />
      </Orbiter>

      {/* Mobile: a phone */}
      <Orbiter layer={layer} offset={0.25}>
        <rect x="-34" y="-34" width="64" height="64" rx="8" fill={gold} />
        <rect x="-15" y="-26" width="28" height="48" rx="5" fill="#fff" />
        <path d="M-6 -20h10" strokeWidth="3" />
        <rect x="-9" y="-12" width="16" height="12" fill={sky} strokeWidth="2.5" />
        <path d="M-9 6h16" strokeWidth="2.5" />
        <circle cx="-1" cy="15" r="2.5" fill={navy} stroke="none" />
      </Orbiter>

      {/* AI: a chip with a sparkle */}
      <Orbiter layer={layer} offset={0.5}>
        <rect x="-34" y="-34" width="64" height="64" rx="8" fill={navy} stroke={navy} />
        <g stroke={gold} strokeWidth="3">
          <path d="M-16 -26v6M-2 -26v6M12 -26v6M-16 16v6M-2 16v6M12 16v6M-26 -16h6M-26 -2h6M-26 12h6M16 -16h6M16 -2h6M16 12h6" />
          <rect x="-20" y="-20" width="36" height="36" rx="4" fill={navy} />
        </g>
        <path d="M-2 -13l3.5 8.5 8.5 3.5-8.5 3.5-3.5 8.5-3.5-8.5-8.5-3.5 8.5-3.5z" fill={gold} stroke="none" />
      </Orbiter>

      {/* Code: angle brackets */}
      <Orbiter layer={layer} offset={0.75}>
        <rect x="-34" y="-34" width="64" height="64" rx="8" fill="#fff" />
        <path d="M-12 -12l-12 10 12 10M8 -12l12 10-12 10" stroke={navy} strokeWidth="4.5" fill="none" />
        <path d="M3 -16l-8 28" stroke={gold} strokeWidth="4.5" />
      </Orbiter>
    </g>
  );
}
