import type { SyntheticEvent } from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import { ApcsBadge } from '../../assets/svg/ApcsBadge';
import { HcmusLogo } from '../../assets/svg/HcmusLogo';
import { useBookControls } from '../book/GraduationBook';
import { invitationConfig } from '../../config/invitationConfig';

const stopFlip = (event: SyntheticEvent) => {
  event.stopPropagation();
};

/**
 * Page 0 (Front Cover): Official-style HCMUS graduation cover with logo,
 * Computer Science major, APCS program badge, graduate name, and open CTA.
 */
export function Page0Cover() {
  const { next } = useBookControls();
  const { university, graduate, ceremony } = invitationConfig;

  return (
    <div className="flex h-full flex-col items-center justify-between text-center">
      {/* University header */}
      <header className="space-y-1.5">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-hcmus-gold-pale/90 sm:text-sm md:text-base">
          {university.nameVi}
        </p>
        <p className="font-serif text-sm italic text-paper-cream/80 sm:text-base md:text-lg">
          {university.nameEn} · {university.campusWard}
        </p>
        <div className="mx-auto mt-2 h-px w-36 bg-gradient-to-r from-transparent via-hcmus-gold to-transparent sm:w-48" />
      </header>

      {/* Crest & APCS badge */}
      <div className="my-2 flex flex-col items-center gap-4">
        <HcmusLogo className="h-24 w-24 drop-shadow-[0_6px_16px_rgba(212,175,55,0.4)] sm:h-36 sm:w-36 md:h-40 md:w-40" />
        <ApcsBadge />
      </div>

      {/* Main Graduation Title & Major */}
      <div className="space-y-2">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-hcmus-gold sm:text-sm">
          <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          <span>Graduation Ceremony</span>
        </p>
        <h1 className="gold-foil-text font-display text-3xl font-bold uppercase tracking-wider sm:text-4xl md:text-5xl">
          Thiệp Mời Tốt Nghiệp
        </h1>
        <p className="font-serif text-base font-semibold text-paper-cream/95 sm:text-xl md:text-2xl">
          {university.major}
        </p>
        <p className="text-xs text-hcmus-gold-pale/85 sm:text-sm md:text-base">
          {university.program}
        </p>
      </div>

      {/* Graduate Name plaque */}
      <div className="w-full max-w-[380px] rounded-sm border border-hcmus-gold/45 bg-hcmus-navy-light/60 px-6 py-4 shadow-inner sm:py-5">
        <p className="text-xs uppercase tracking-[0.24em] text-hcmus-gold-pale/75 sm:text-sm">
          Tân Cử Nhân
        </p>
        <p className="mt-1 font-script text-4xl text-hcmus-gold-pale sm:text-5xl md:text-6xl">
          {graduate.fullName}
        </p>
        <p className="mt-1 text-xs text-paper-cream/80 sm:text-sm">
          {ceremony.timeDisplay} · {ceremony.dateDisplay}
        </p>
      </div>

      {/* Open invitation button */}
      <footer className="pt-2">
        <button
          type="button"
          onClick={next}
          onPointerDown={stopFlip}
          onMouseDown={stopFlip}
          className="inline-flex items-center gap-2.5 rounded-full border border-hcmus-gold bg-hcmus-gold/15 px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-hcmus-gold-pale shadow-md transition hover:bg-hcmus-gold/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-hcmus-gold sm:px-8 sm:py-3.5 sm:text-base"
        >
          <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          <span>Mở Thiệp Mời →</span>
        </button>
      </footer>
    </div>
  );
}
