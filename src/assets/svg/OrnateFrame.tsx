interface OrnateFrameProps {
  /** `navy` = gold on dark cover, `cream` = gold on paper pages. */
  tone?: 'navy' | 'cream';
}

const CORNER_POSITIONS = [
  'left-2.5 top-2.5 sm:left-4 sm:top-4',
  'right-2.5 top-2.5 sm:right-4 sm:top-4 rotate-90',
  'bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 rotate-180',
  'bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 -rotate-90',
] as const;

function CornerFlourish({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`absolute h-11 w-11 text-hcmus-gold sm:h-16 sm:w-16 md:h-20 md:w-20 ${className}`}
      fill="none"
      stroke="currentColor"
    >
      <path d="M3 40V10Q3 3 10 3H40" strokeWidth="1.6" />
      <path d="M10 30V15Q10 10 15 10H30" strokeWidth="1" />
      <path d="M16 16q9 0 11 9q-9 2-11-9z" fill="currentColor" stroke="none" opacity="0.85" />
      <path d="M16 16q1 7 7 9" strokeWidth="0.8" />
      <circle cx="40" cy="3" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="3" cy="40" r="1.8" fill="currentColor" stroke="none" />
      <path d="M44 3h3M3 44v3" strokeWidth="1.2" />
    </svg>
  );
}

/** Decorative gilded double border with corner flourishes, reused on every page. */
export function OrnateFrame({ tone = 'cream' }: OrnateFrameProps) {
  const outer = tone === 'navy' ? 'border-hcmus-gold/80' : 'border-hcmus-gold/70';
  const inner = tone === 'navy' ? 'border-hcmus-gold/40' : 'border-hcmus-gold/35';

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className={`absolute inset-3.5 sm:inset-5 border ${outer}`} />
      <div className={`absolute inset-[20px] sm:inset-[28px] border ${inner}`} />
      {CORNER_POSITIONS.map((position) => (
        <CornerFlourish key={position} className={position} />
      ))}
    </div>
  );
}
