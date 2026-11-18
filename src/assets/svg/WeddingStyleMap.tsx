interface WeddingStyleMapProps {
  className?: string;
}

/**
 * Hand-drawn wedding-invitation style illustrated map for:
 * Giảng đường 1 — Cơ sở 227 Nguyễn Văn Cừ, Phường Chợ Quán, TP. Hồ Chí Minh (HCMUS).
 */
export function WeddingStyleMap({ className = 'w-full' }: WeddingStyleMapProps) {
  return (
    <svg
      viewBox="0 0 360 245"
      className={className}
      role="img"
      aria-label="Bản đồ vẽ tay chỉ dẫn tới Giảng đường 1, cơ sở 227 Nguyễn Văn Cừ, Phường Chợ Quán"
    >
      <defs>
        <pattern id="mapPaperDots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.6" fill="#C5A059" opacity="0.28" />
        </pattern>
      </defs>

      {/* Cream parchment base & double frame */}
      <rect x="2" y="2" width="356" height="241" rx="6" fill="#FAF6EE" stroke="#C5A059" strokeWidth="1.5" />
      <rect x="7" y="7" width="346" height="231" rx="4" fill="url(#mapPaperDots)" stroke="#C5A059" strokeWidth="0.7" strokeDasharray="3 2" />

      {/* Botanical olive sprigs (top-left & bottom-left wedding illustration motif) */}
      <g stroke="#C5A059" strokeWidth="1" fill="none" opacity="0.75">
        <path d="M16 42 Q26 24 48 16" />
        <ellipse cx="23" cy="31" rx="4" ry="1.8" transform="rotate(-40 23 31)" fill="#C5A059" />
        <ellipse cx="33" cy="23" rx="4" ry="1.8" transform="rotate(-25 33 23)" fill="#C5A059" />
        <ellipse cx="42" cy="18" rx="3.5" ry="1.5" transform="rotate(-12 42 18)" fill="#C5A059" />

        <path d="M18 202 Q30 220 54 228" />
        <ellipse cx="26" cy="212" rx="4" ry="1.8" transform="rotate(35 26 212)" fill="#C5A059" />
        <ellipse cx="38" cy="221" rx="4" ry="1.8" transform="rotate(20 38 221)" fill="#C5A059" />
      </g>

      {/* Vintage Compass Rose (top-right) */}
      <g transform="translate(322, 36)">
        <circle cx="0" cy="0" r="14" fill="#FAF6EE" stroke="#C5A059" strokeWidth="1" />
        <polygon points="0,-12 3,-3 0,-5 -3,-3" fill="#0F2547" />
        <polygon points="0,12 2.5,3 0,5 -2.5,3" fill="#C5A059" />
        <polygon points="-12,0 -3,-2.5 -5,0 -3,2.5" fill="#C5A059" />
        <polygon points="12,0 3,-2.5 5,0 3,2.5" fill="#C5A059" />
        <text x="0" y="-15" textAnchor="middle" fill="#0F2547" fontSize="6.5" fontWeight="700" fontFamily="Playfair Display, serif">
          B
        </text>
      </g>

      {/* Cross streets: An Dương Vương (top) & Nguyễn Trãi / Trần Phú (bottom) */}
      <g>
        {/* An Dương Vương / Trần Phú horizontal avenue */}
        <path d="M12 62 L348 62" stroke="#E7DEC8" strokeWidth="14" strokeLinecap="round" />
        <path d="M12 62 L348 62" stroke="#1B365D" strokeWidth="1" strokeDasharray="4 3" opacity="0.45" />
        <text x="275" y="54" textAnchor="middle" fill="#475569" fontSize="7" fontStyle="italic" fontFamily="Cormorant Garamond, serif">
          Đ. Trần Phú / An Dương Vương
        </text>

        {/* Nguyễn Trãi horizontal avenue (bottom) */}
        <path d="M12 204 L348 204" stroke="#E7DEC8" strokeWidth="13" strokeLinecap="round" />
        <path d="M12 204 L348 204" stroke="#1B365D" strokeWidth="1" strokeDasharray="4 3" opacity="0.45" />
        <text x="275" y="216" textAnchor="middle" fill="#475569" fontSize="7" fontStyle="italic" fontFamily="Cormorant Garamond, serif">
          Đ. Nguyễn Trãi (Phường Chợ Quán)
        </text>
      </g>

      {/* Main Artery: ĐƯỜNG NGUYỄN VĂN CỪ (vertical boulevard) */}
      <g>
        <path d="M108 12 L108 233" stroke="#DFD3B8" strokeWidth="24" />
        <path d="M96 12 L96 233" stroke="#1B365D" strokeWidth="1.2" opacity="0.65" />
        <path d="M120 12 L120 233" stroke="#1B365D" strokeWidth="1.2" opacity="0.65" />
        <path d="M108 16 L108 229" stroke="#0F2547" strokeWidth="1" strokeDasharray="5 4" opacity="0.6" />
        <text
          x="108"
          y="132"
          textAnchor="middle"
          fill="#0F2547"
          fontSize="7.8"
          fontWeight="700"
          letterSpacing="1.4"
          transform="rotate(-90 108 132)"
          fontFamily="Playfair Display, serif"
        >
          ĐƯỜNG NGUYỄN VĂN CỪ
        </text>
      </g>

      {/* Ward banner on left side */}
      <g transform="translate(48, 122)">
        <rect x="-36" y="-14" width="72" height="26" rx="3" fill="#FDFBF7" stroke="#C5A059" strokeWidth="0.9" />
        <text x="0" y="-2" textAnchor="middle" fill="#0F2547" fontSize="6.8" fontWeight="700" fontFamily="Playfair Display, serif">
          PHƯỜNG CHỢ QUÁN
        </text>
        <text x="0" y="7" textAnchor="middle" fill="#475569" fontSize="6" fontStyle="italic" fontFamily="Cormorant Garamond, serif">
          TP. Hồ Chí Minh
        </text>
      </g>

      {/* HCMUS Campus Courtyard (Right of Nguyễn Văn Cừ) */}
      <rect
        x="132"
        y="74"
        width="206"
        height="116"
        rx="6"
        fill="#F4EFE2"
        stroke="#1B365D"
        strokeWidth="1.2"
        strokeDasharray="5 2.5"
      />
      <text
        x="235"
        y="88"
        textAnchor="middle"
        fill="#1B365D"
        fontSize="7.5"
        fontWeight="700"
        letterSpacing="0.8"
        fontFamily="Playfair Display, serif"
      >
        KHUÔN VIÊN ĐH KHOA HỌC TỰ NHIÊN
      </text>

      {/* Illustrated Campus Gate at 227 Nguyễn Văn Cừ */}
      <g transform="translate(132, 134)">
        <rect x="-7" y="-16" width="14" height="32" rx="2" fill="#0F2547" stroke="#D4AF37" strokeWidth="1.2" />
        <path d="M-9 -16 Q0 -23 9 -16" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
        <text x="12" y="18" fill="#0F2547" fontSize="7" fontWeight="700" fontFamily="Be Vietnam Pro, sans-serif">
          Cổng 227 NVC
        </text>
      </g>

      {/* Walking dotted path from Gate 227 NVC to Giảng đường 1 */}
      <path
        d="M140 134 C 175 134, 185 122, 224 122"
        fill="none"
        stroke="#C5A059"
        strokeWidth="2.2"
        strokeDasharray="4 3"
        strokeLinecap="round"
      />
      <polygon points="224,122 217,118 217,126" fill="#C5A059" />

      {/* Giảng đường 1 (Lecture Hall 1) Architectural Illustration */}
      <g transform="translate(268, 124)">
        {/* Building base */}
        <rect x="-40" y="-20" width="80" height="42" rx="3" fill="#0F2547" stroke="#D4AF37" strokeWidth="1.6" />
        {/* Classical pediment roof */}
        <polygon points="-44,-20 0,-36 44,-20" fill="#1B365D" stroke="#D4AF37" strokeWidth="1.4" />
        {/* Columns */}
        <line x1="-26" y1="-16" x2="-26" y2="18" stroke="#F3E5AB" strokeWidth="1.4" opacity="0.6" />
        <line x1="26" y1="-16" x2="26" y2="18" stroke="#F3E5AB" strokeWidth="1.4" opacity="0.6" />
        {/* Pin star badge */}
        <circle cx="0" cy="-27" r="4.5" fill="#D4AF37" />
        <text
          x="0"
          y="-3"
          textAnchor="middle"
          fill="#F3E5AB"
          fontSize="9"
          fontWeight="700"
          letterSpacing="0.8"
          fontFamily="Playfair Display, serif"
        >
          GIẢNG ĐƯỜNG 1
        </text>
        <text
          x="0"
          y="10"
          textAnchor="middle"
          fill="#FDFBF7"
          fontSize="6.5"
          fontFamily="Be Vietnam Pro, sans-serif"
        >
          Nơi tổ chức Lễ Tốt Nghiệp
        </text>
      </g>

      {/* Decorative Campus Trees */}
      <g fill="#C5A059" opacity="0.55">
        <circle cx="168" cy="102" r="5" />
        <circle cx="182" cy="100" r="4" />
        <circle cx="174" cy="166" r="5" />
        <circle cx="318" cy="168" r="4.5" />
      </g>
    </svg>
  );
}
