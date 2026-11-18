import { useCallback, useEffect, useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import { invitationConfig } from './config/invitationConfig';
import { useGuestName } from './hooks/useGuestName';
import { GraduationBook, useBookControls, type BookPage } from './components/book/GraduationBook';
import {
  launchCelebration,
  launchOpeningFireworks,
  stopFireworks,
} from './components/effects/FireworksController';

/**
 * Temporary page bodies for Phase 2 — replaced by Page0Cover … Page3ThankYou in Phase 3.
 */
function PlaceholderPage({ index, title, onCover = false }: { index: number; title: string; onCover?: boolean }) {
  const { next, goTo, pageCount } = useBookControls();
  const isLast = index === pageCount - 1;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
      <p className="text-xs uppercase tracking-[0.25em] opacity-70">Trang {index}</p>
      <h2 className={`font-display text-2xl ${onCover ? 'gold-foil-text' : 'text-hcmus-navy'}`}>{title}</h2>
      {index === 0 && (
        <button
          type="button"
          onClick={next}
          className="rounded-full border border-hcmus-gold px-5 py-2 text-sm text-hcmus-gold transition hover:bg-hcmus-gold/15"
        >
          Mở thiệp mời →
        </button>
      )}
      {isLast && (
        <button
          type="button"
          onClick={() => goTo(0)}
          className="rounded-full border border-hcmus-gold px-5 py-2 text-sm text-hcmus-gold transition hover:bg-hcmus-gold/15"
        >
          ← Về trang bìa
        </button>
      )}
    </div>
  );
}

export default function App() {
  const guestName = useGuestName();
  const { university, graduate } = invitationConfig;

  const pages = useMemo<BookPage[]>(
    () => [
      {
        id: 'cover',
        label: 'Bìa',
        variant: 'cover',
        content: <PlaceholderPage index={0} title={`Lễ Tốt Nghiệp · ${university.program}`} onCover />,
      },
      {
        id: 'invitation',
        label: 'Thư mời',
        variant: 'inner',
        content: <PlaceholderPage index={1} title={`${graduate.fullName} thân mời ${guestName}`} />,
      },
      { id: 'map', label: 'Bản đồ', variant: 'inner', content: <PlaceholderPage index={2} title="Bản đồ chỉ dẫn" /> },
      {
        id: 'thanks',
        label: 'Cảm ơn',
        variant: 'cover',
        content: <PlaceholderPage index={3} title="Thank You!" onCover />,
      },
    ],
    [guestName, university.program, graduate.fullName],
  );

  const handlePageChange = useCallback(
    (page: number, previousPage: number) => {
      if (previousPage === 0 && page > 0) launchOpeningFireworks();
      else if (page === pages.length - 1) launchCelebration();
    },
    [pages.length],
  );

  useEffect(() => stopFireworks, []);

  return (
    <main className="relative flex min-h-full flex-col items-center justify-center overflow-hidden px-3 py-4">
      <button
        type="button"
        onClick={launchCelebration}
        aria-label="Bắn pháo bông chúc mừng"
        title="Bắn pháo bông"
        className="absolute right-3 top-3 z-20 rounded-full border border-hcmus-gold/50 bg-hcmus-navy-light/70 p-2.5 text-hcmus-gold shadow-lg backdrop-blur transition hover:bg-hcmus-gold/20"
      >
        <Sparkles className="h-5 w-5" aria-hidden="true" />
      </button>

      <GraduationBook pages={pages} onPageChange={handlePageChange} />
    </main>
  );
}
