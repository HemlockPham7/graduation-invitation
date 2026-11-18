interface ApcsBadgeProps {
  className?: string;
}

/**
 * Vector emblem for APCS (Advanced Program in Computer Science) — Faculty of IT, HCMUS.
 */
export function ApcsBadge({ className = '' }: ApcsBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full border border-hcmus-gold/70 bg-hcmus-navy-light/90 px-4 py-1.5 shadow-sm sm:px-5 sm:py-2 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0 text-hcmus-gold-bright sm:h-5 sm:w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <polygon points="12 2 20 7 20 17 12 22 4 17 4 7" />
        <path d="M9.5 9.5 7 12l2.5 2.5M14.5 9.5 17 12l-2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="13" y1="8.5" x2="11" y2="15.5" strokeLinecap="round" />
      </svg>
      <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-hcmus-gold-pale sm:text-sm">
        APCS · Computer Science
      </span>
    </div>
  );
}
