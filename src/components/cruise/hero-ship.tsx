export function CruiseHeroShip({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A chunky cruise ship sailing on waves"
      className={className}
    >
      {/* sun */}
      <circle cx="345" cy="52" r="24" fill="var(--primary)" stroke="var(--ink)" strokeWidth="6" />
      {/* cloud */}
      <g fill="var(--surface)" stroke="var(--ink)" strokeWidth="5">
        <rect x="34" y="40" width="54" height="20" />
        <rect x="48" y="28" width="26" height="14" />
      </g>
      <g className="ship-bob">
        {/* smoke puffs */}
        <g fill="var(--surface)" stroke="var(--ink)" strokeWidth="4">
          <rect x="160" y="38" width="13" height="13" />
          <rect x="174" y="20" width="10" height="10" />
          <rect x="199" y="40" width="12" height="12" />
          <rect x="212" y="24" width="9" height="9" />
        </g>
        {/* hard shadow */}
        <g fill="var(--ink)">
          <polygon points="56,173 356,173 328,223 88,223" />
          <rect x="103" y="136" width="200" height="37" />
          <rect x="138" y="106" width="130" height="30" />
        </g>
        {/* funnels */}
        <g stroke="var(--ink)" strokeWidth="6">
          <rect x="152" y="58" width="26" height="42" fill="var(--primary)" />
          <rect x="190" y="58" width="26" height="42" fill="var(--primary)" />
        </g>
        <rect x="152" y="58" width="26" height="11" fill="var(--ink)" />
        <rect x="190" y="58" width="26" height="11" fill="var(--ink)" />
        {/* mast + flag */}
        <rect x="279" y="36" width="6" height="42" fill="var(--ink)" />
        <rect x="285" y="36" width="28" height="17" fill="var(--danger)" stroke="var(--ink)" strokeWidth="4" />
        {/* bridge */}
        <rect x="232" y="76" width="50" height="24" fill="var(--surface)" stroke="var(--ink)" strokeWidth="6" />
        <rect x="240" y="83" width="34" height="9" fill="var(--ink)" />
        {/* upper deck */}
        <rect x="130" y="98" width="140" height="32" fill="var(--surface)" stroke="var(--ink)" strokeWidth="6" />
        <g fill="var(--ink)">
          <rect x="144" y="107" width="14" height="13" />
          <rect x="170" y="107" width="14" height="13" />
          <rect x="196" y="107" width="14" height="13" />
          <rect x="222" y="107" width="14" height="13" />
          <rect x="248" y="107" width="12" height="13" />
        </g>
        {/* main deck */}
        <rect x="95" y="128" width="210" height="39" fill="var(--surface)" stroke="var(--ink)" strokeWidth="6" />
        <g fill="var(--surface)" stroke="var(--ink)" strokeWidth="4">
          <rect x="110" y="139" width="16" height="16" />
          <rect x="140" y="139" width="16" height="16" />
          <rect x="170" y="139" width="16" height="16" />
          <rect x="200" y="139" width="16" height="16" />
          <rect x="230" y="139" width="16" height="16" />
          <rect x="260" y="139" width="16" height="16" />
        </g>
        {/* hull */}
        <polygon
          points="48,165 348,165 320,215 80,215"
          fill="var(--primary)"
          stroke="var(--ink)"
          strokeWidth="6"
          strokeLinejoin="miter"
        />
        {/* danfo stripes */}
        <rect x="58" y="176" width="281" height="8" fill="var(--ink)" />
        <rect x="66" y="191" width="265" height="8" fill="var(--ink)" />
        {/* lifebuoy */}
        <circle cx="300" cy="150" r="9" fill="var(--danger)" stroke="var(--ink)" strokeWidth="4" />
        <circle cx="300" cy="150" r="3" fill="var(--surface)" />
      </g>
      {/* waves */}
      <path
        d="M10 230 q12 -10 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="6"
      />
      <path
        d="M60 250 q12 -8 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="5"
      />
    </svg>
  );
}
