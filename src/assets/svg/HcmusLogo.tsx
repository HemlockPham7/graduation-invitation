interface HcmusLogoProps {
  className?: string;
}

/**
 * Stylized vector crest inspired by VNU-HCM University of Science (HCMUS):
 * laurel wreath, open book of knowledge, atomic orbits, and graduation mortarboard.
 */
export function HcmusLogo({ className = 'h-20 w-20' }: HcmusLogoProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="Huy hiệu Trường Đại học Khoa học Tự nhiên - ĐHQG-HCM"
    >
      <defs>
        <linearGradient id="hcmusGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3E5AB" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9C7A2F" />
        </linearGradient>
      </defs>

      {/* Outer medallion ring */}
      <circle
        cx="60"
        cy="60"
        r="55"
        fill="#0B1C38"
        stroke="url(#hcmusGoldGrad)"
        strokeWidth="2.5"
      />
      <circle
        cx="60"
        cy="60"
        r="49"
        fill="none"
        stroke="url(#hcmusGoldGrad)"
        strokeWidth="1"
        strokeDasharray="3 2.5"
      />

      {/* Laurel wreath branches (left & right) */}
      <g stroke="url(#hcmusGoldGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M32 90 C 20 75, 20 46, 36 30" />
        <path d="M88 90 C 100 75, 100 46, 84 30" />
      </g>
      <g fill="url(#hcmusGoldGrad)" opacity="0.9">
        <ellipse cx="25" cy="74" rx="4" ry="2" transform="rotate(-35 25 74)" />
        <ellipse cx="22" cy="62" rx="4" ry="2" transform="rotate(-15 22 62)" />
        <ellipse cx="24" cy="49" rx="4" ry="2" transform="rotate(10 24 49)" />
        <ellipse cx="30" cy="37" rx="4" ry="2" transform="rotate(30 30 37)" />
        <ellipse cx="95" cy="74" rx="4" ry="2" transform="rotate(35 95 74)" />
        <ellipse cx="98" cy="62" rx="4" ry="2" transform="rotate(15 98 62)" />
        <ellipse cx="96" cy="49" rx="4" ry="2" transform="rotate(-10 96 49)" />
        <ellipse cx="90" cy="37" rx="4" ry="2" transform="rotate(-30 90 37)" />
      </g>

      {/* Science atomic orbits */}
      <g stroke="url(#hcmusGoldGrad)" strokeWidth="1.2" fill="none" opacity="0.85">
        <ellipse cx="60" cy="54" rx="22" ry="8" transform="rotate(-28 60 54)" />
        <ellipse cx="60" cy="54" rx="22" ry="8" transform="rotate(28 60 54)" />
        <circle cx="60" cy="54" r="2.8" fill="url(#hcmusGoldGrad)" />
      </g>

      {/* Graduation mortarboard at crest top */}
      <polygon
        points="60,20 40,29 60,38 80,29"
        fill="url(#hcmusGoldGrad)"
      />
      <path
        d="M48 33 V39 C48 42, 72 42, 72 39 V33"
        fill="none"
        stroke="url(#hcmusGoldGrad)"
        strokeWidth="1.8"
      />
      <path d="M77 30 V41" stroke="url(#hcmusGoldGrad)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="77" cy="42.5" r="1.8" fill="url(#hcmusGoldGrad)" />

      {/* Open book of knowledge at base */}
      <path
        d="M38 78 Q49 73 60 78 Q71 73 82 78 L82 88 Q71 83 60 88 Q49 83 38 88 Z"
        fill="#0F2547"
        stroke="url(#hcmusGoldGrad)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <line x1="60" y1="78" x2="60" y2="88" stroke="url(#hcmusGoldGrad)" strokeWidth="1.6" />

      {/* HCMUS Ribbon text */}
      <text
        x="60"
        y="102"
        textAnchor="middle"
        fill="#F3E5AB"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="2.2"
        fontFamily="Playfair Display, Georgia, serif"
      >
        HCMUS
      </text>
    </svg>
  );
}
