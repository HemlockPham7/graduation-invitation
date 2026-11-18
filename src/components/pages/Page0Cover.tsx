import type { SyntheticEvent } from 'react';
import { BookOpen } from 'lucide-react';
import { ApcsBadge } from '../../assets/svg/ApcsBadge';
import { HcmusLogo } from '../../assets/svg/HcmusLogo';
import { useBookControls } from '../book/GraduationBook';
import { invitationConfig } from '../../config/invitationConfig';

const stopFlip = (event: SyntheticEvent) => {
  event.stopPropagation();
};

/**
 * Page 0 (Front Cover): Cream fine-art paper cover matching Pages 1 & 2 so
 * the official HCMUS blue logo stands out naturally.
 */
export function Page0Cover() {
  const { next } = useBookControls();
  const { university, graduate, ceremony } = invitationConfig;

  return (
    <div className="flex h-full flex-col items-center justify-between text-center">
      {/* University header */}
      <header className="space-y-1.5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-hcmus-navy sm:text-sm md:text-base">
          {university.nameVi}
        </p>
        <p className="font-serif text-sm italic text-ink-soft sm:text-base md:text-lg">
          {university.nameEn} · {university.campusWard}
        </p>
        <div className="mx-auto mt-2 h-0.5 w-36 bg-gradient-to-r from-transparent via-hcmus-gold to-transparent sm:w-48" />
      </header>

      {/* Official HCMUS Logo & APCS badge */}
      <div className="my-2 flex flex-col items-center gap-4">
        <HcmusLogo className="h-28 w-36 sm:h-40 sm:w-48 md:h-44 md:w-52" />
        <ApcsBadge />
      </div>

      {/* Main Graduation Title & Major */}
      <div className="space-y-2">
        <h1 className="whitespace-nowrap font-display text-xl font-bold uppercase tracking-wide text-hcmus-navy sm:text-2xl md:text-3xl">
          Graduation Invitation
        </h1>
        <p className="font-serif text-base font-semibold text-hcmus-navy sm:text-xl md:text-2xl">
          {university.major}
        </p>
        <p className="text-xs font-medium text-hcmus-gold sm:text-sm md:text-base">
          {university.program}
        </p>
      </div>

      {/* Graduate Name plaque */}
      <div className="w-full max-w-[460px] rounded-sm border border-hcmus-gold/55 bg-paper-cream-dark/80 px-4 py-4 shadow-sm sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft sm:text-sm">
          Tân Cử Nhân
        </p>
        <p className="mt-1 whitespace-nowrap font-script text-3xl text-hcmus-navy sm:text-4xl md:text-5xl">
          {graduate.fullName}
        </p>
        <p className="mt-1 text-xs font-medium text-ink-soft sm:text-sm">
          {ceremony.timeDisplay} · {ceremony.dateDisplay}
        </p>
      </div>

      {/* Open invitation button */}
      <footer className="pt-2">

      </footer>
    </div>
  );
}
