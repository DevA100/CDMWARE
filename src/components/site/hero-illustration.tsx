/**
 * Hero artwork: a browser window with a dashboard and code, joined by the
 * circuit traces from the CDMware logo. Colours come from theme variables.
 */
export function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 360" role="img" aria-label="A web dashboard and code connected by circuit lines" className="h-auto w-full">
      <g stroke="var(--brand-navy)" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        {/* background */}
        <rect x="0" y="0" width="480" height="360" fill="var(--brand-sky)" stroke="none" />

        {/* browser window */}
        <rect x="28" y="28" width="300" height="220" fill="#fff" />
        <rect x="28" y="28" width="300" height="34" fill="var(--brand-navy)" />
        <circle cx="50" cy="45" r="6" fill="var(--brand-gold)" stroke="none" />
        <circle cx="70" cy="45" r="6" fill="#fff" stroke="none" />
        <circle cx="90" cy="45" r="6" fill="#fff" stroke="none" />

        {/* dashboard: bars */}
        <line x1="52" y1="222" x2="190" y2="222" />
        <rect x="60" y="170" width="22" height="52" fill="var(--brand-sky)" />
        <rect x="94" y="140" width="22" height="82" fill="var(--brand-gold)" />
        <rect x="128" y="110" width="22" height="112" fill="var(--brand-navy)" />
        <rect x="162" y="90" width="22" height="132" fill="var(--brand-gold)" />

        {/* dashboard: donut + lines */}
        <circle cx="262" cy="122" r="34" fill="#fff" />
        <path d="M262 88a34 34 0 0 1 34 34h-34z" fill="var(--brand-gold)" />
        <line x1="222" y1="186" x2="304" y2="186" />
        <line x1="222" y1="206" x2="284" y2="206" />

        {/* code card */}
        <rect x="236" y="196" width="216" height="136" fill="var(--brand-navy)" />
        <path d="M262 232l-14 12 14 12" stroke="var(--brand-gold)" />
        <path d="M290 232l14 12-14 12" stroke="var(--brand-gold)" />
        <line x1="322" y1="236" x2="420" y2="236" stroke="#fff" />
        <line x1="322" y1="254" x2="388" y2="254" stroke="var(--brand-sky)" />
        <line x1="256" y1="284" x2="404" y2="284" stroke="#fff" />
        <line x1="256" y1="304" x2="352" y2="304" stroke="var(--brand-gold)" />

        {/* circuit traces (logo motif) */}
        <path d="M366 40v124" />
        <path d="M366 70h28l14-14" />
        <circle cx="416" cy="48" r="9" fill="var(--brand-gold)" />
        <path d="M366 104h56" />
        <circle cx="432" cy="104" r="9" fill="#fff" />
        <path d="M366 138h28l14 14" />
        <circle cx="416" cy="160" r="9" fill="#fff" />
        <path d="M328 104h38" />

        {/* sparkle (AI) */}
        <path d="M84 290l8 20 20 8-20 8-8 20-8-20-20-8 20-8z" fill="var(--brand-gold)" />
      </g>
    </svg>
  );
}
