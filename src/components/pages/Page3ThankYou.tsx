import { useState, type SyntheticEvent } from 'react';
import { Check, Copy, Heart, Phone, RotateCcw, Sparkles } from 'lucide-react';
import { useBookControls } from '../book/GraduationBook';
import { launchCelebration } from '../effects/FireworksController';
import { invitationConfig } from '../../config/invitationConfig';

interface Page3ThankYouProps {
  guestName: string;
}

const stopFlip = (event: SyntheticEvent) => {
  event.stopPropagation();
};

/**
 * Page 3 (Back Cover — Thank You & Quick Contact): Unified cream paper theme
 * matching Pages 0, 1, and 2 with warm thank-you note and quick contact card.
 */
export function Page3ThankYou({ guestName }: Page3ThankYouProps) {
  const { goTo } = useBookControls();
  const { graduate, ceremony, university } = invitationConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = async (event: SyntheticEvent) => {
    event.stopPropagation();
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(graduate.mockPhoneTel);
      }
    } catch {
      // Fallback: still show visual confirmation in restricted environments
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  const handleFireworks = (event: SyntheticEvent) => {
    event.stopPropagation();
    launchCelebration();
  };

  const handleReturnCover = (event: SyntheticEvent) => {
    event.stopPropagation();
    goTo(0);
  };

  return (
    <div className="flex h-full flex-col items-center justify-between text-center">
      {/* Header */}
      <header className="space-y-1.5">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-hcmus-gold sm:text-sm">
          <Heart className="h-4 w-4 fill-hcmus-gold/40 sm:h-5 sm:w-5" aria-hidden="true" />
          <span>Lời Cảm Ơn</span>
        </p>
        <h2 className="font-script text-5xl text-hcmus-navy sm:text-6xl md:text-7xl">
          Thank You!
        </h2>
        <div className="mx-auto h-0.5 w-28 bg-gradient-to-r from-transparent via-hcmus-gold to-transparent sm:w-36" />
      </header>

      {/* Heartfelt message */}
      <section aria-label="Thông điệp cảm ơn" className="my-2 max-w-[440px] space-y-3">
        <p className="font-serif text-base leading-relaxed text-ink sm:text-lg md:text-xl">
          Sự hiện diện của <span className="font-semibold text-hcmus-navy">{guestName}</span> là niềm vinh hạnh và món quà ý nghĩa nhất đối với{' '}
          <span className="font-semibold text-hcmus-navy">{graduate.shortName}</span> trong ngày tốt nghiệp.
        </p>
        <p className="text-xs italic text-ink-soft sm:text-sm md:text-base">
          Hẹn gặp bạn lúc {ceremony.timeDisplay}, {ceremony.dateDisplay} tại {ceremony.hallName}!
        </p>
      </section>

      {/* Quick Contact Card (Mock Phone Number) */}
      <section
        aria-label="Liên hệ nhanh"
        className="w-full max-w-[420px] rounded-sm border border-hcmus-gold/55 bg-paper-cream-dark/80 p-4 shadow-sm sm:p-5"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft sm:text-sm">
          Liên Hệ Nhanh Khi Đến Trường
        </p>
        <p className="mt-1 font-display text-base font-bold text-hcmus-navy sm:text-lg">
          {graduate.fullName}
        </p>
        <p
          data-testid="mock-phone-number"
          className="mt-1 font-sans text-lg font-bold tracking-wider text-hcmus-navy sm:text-xl md:text-2xl"
        >
          {graduate.mockPhoneDisplay}
        </p>

        <div className="mt-3.5 grid grid-cols-2 gap-3">
          <a
            href={`tel:${graduate.mockPhoneTel}`}
            onPointerDown={stopFlip}
            onMouseDown={stopFlip}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-hcmus-navy px-4 py-2 text-xs font-semibold text-paper-cream shadow transition hover:bg-hcmus-navy-light sm:py-2.5 sm:text-sm"
          >
            <Phone className="h-4 w-4 text-hcmus-gold-bright" aria-hidden="true" />
            <span>Gọi ngay</span>
          </a>

          <button
            type="button"
            onClick={handleCopyPhone}
            onPointerDown={stopFlip}
            onMouseDown={stopFlip}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-hcmus-navy/30 bg-paper-cream px-4 py-2 text-xs font-semibold text-hcmus-navy transition hover:bg-hcmus-gold/15 sm:py-2.5 sm:text-sm"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                <span>Đã sao chép!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-hcmus-gold" aria-hidden="true" />
                <span>Sao chép SĐT</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* Bottom controls: Fireworks & Return to Front Cover */}
      <footer className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={handleFireworks}
          onPointerDown={stopFlip}
          onMouseDown={stopFlip}
          className="inline-flex items-center gap-2 rounded-full border border-hcmus-gold/70 bg-paper-cream-dark/70 px-4 py-2 text-xs font-medium text-hcmus-navy transition hover:bg-hcmus-gold/20 sm:text-sm"
        >
          <Sparkles className="h-4 w-4 text-hcmus-gold" aria-hidden="true" />
          <span>Bắn pháo bông</span>
        </button>

        <button
          type="button"
          onClick={handleReturnCover}
          onPointerDown={stopFlip}
          onMouseDown={stopFlip}
          className="inline-flex items-center gap-2 rounded-full border border-hcmus-navy/30 px-4 py-2 text-xs font-medium text-ink-soft transition hover:border-hcmus-navy hover:text-hcmus-navy sm:text-sm"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          <span>Về trang bìa</span>
        </button>
      </footer>
    </div>
  );
}
