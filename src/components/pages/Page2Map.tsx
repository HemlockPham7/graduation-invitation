import type { SyntheticEvent } from 'react';
import { ExternalLink, MapPin, Navigation } from 'lucide-react';
import { WeddingStyleMap } from '../../assets/svg/WeddingStyleMap';
import { invitationConfig } from '../../config/invitationConfig';

const stopFlip = (event: SyntheticEvent) => {
  event.stopPropagation();
};

/**
 * Page 2 (Location & Illustrated Map): Wedding-card style hand-drawn map
 * guiding the guest to Giảng đường 1, 227 Nguyễn Văn Cừ, Phường Chợ Quán,
 * with a direct CTA link to Google Maps.
 */
export function Page2Map() {
  const { ceremony, university } = invitationConfig;

  return (
    <div className="flex h-full flex-col justify-between text-center">
      {/* Header */}
      <header className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-hcmus-gold sm:text-sm">
          Hành Trình Đến Buổi Lễ
        </p>
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-hcmus-navy sm:text-3xl md:text-4xl">
          Bản Đồ Chỉ Dẫn
        </h2>
        <p className="font-serif text-sm italic text-ink-soft sm:text-base">
          {ceremony.hallName} · 227 Nguyễn Văn Cừ ({university.campusWard})
        </p>
      </header>

      {/* Wedding-style hand-drawn SVG map */}
      <div className="my-2 flex flex-1 items-center justify-center">
        <WeddingStyleMap className="max-h-[340px] w-full drop-shadow-sm sm:max-h-[420px]" />
      </div>

      {/* Venue note */}
      <div className="rounded-sm border border-hcmus-gold/45 bg-paper-cream-dark/70 px-4 py-3 text-left text-xs sm:px-5 sm:py-4 sm:text-sm">
        <div className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-hcmus-navy sm:h-6 sm:w-6" aria-hidden="true" />
          <div>
            <p className="font-semibold text-hcmus-navy sm:text-base">
              {ceremony.hallName} — {university.nameVi}
            </p>
            <p className="mt-0.5 text-xs text-ink-soft sm:text-sm">
              {ceremony.addressDisplay} (Vào cổng chính 227 Nguyễn Văn Cừ, đi thẳng vào Giảng đường 1).
            </p>
          </div>
        </div>
      </div>

      {/* Direct Google Maps link button */}
      <footer className="pt-2">
        <a
          href={ceremony.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onPointerDown={stopFlip}
          onMouseDown={stopFlip}
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-hcmus-navy px-5 py-3 text-sm font-medium text-paper-cream shadow-md transition hover:bg-hcmus-navy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-hcmus-gold sm:py-3.5 sm:text-base"
        >
          <Navigation className="h-4 w-4 text-hcmus-gold-bright sm:h-5 sm:w-5" aria-hidden="true" />
          <span>Mở chỉ đường trên Google Maps</span>
          <ExternalLink className="h-4 w-4 opacity-80" aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}
