import { useCallback, useEffect, useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import { useGuestName } from './hooks/useGuestName';
import { GraduationBook, type BookPage } from './components/book/GraduationBook';
import { Page0Cover } from './components/pages/Page0Cover';
import { Page1Invitation } from './components/pages/Page1Invitation';
import { Page2Map } from './components/pages/Page2Map';
import { Page3ThankYou } from './components/pages/Page3ThankYou';
import {
  launchCelebration,
  launchOpeningFireworks,
  stopFireworks,
} from './components/effects/FireworksController';

export default function App() {
  const guestName = useGuestName();

  const pages = useMemo<BookPage[]>(
    () => [
      {
        id: 'cover',
        label: 'Bìa tốt nghiệp',
        variant: 'cover',
        content: <Page0Cover />,
      },
      {
        id: 'invitation',
        label: 'Thư mời',
        variant: 'inner',
        content: <Page1Invitation guestName={guestName} />,
      },
      {
        id: 'map',
        label: 'Bản đồ chỉ dẫn',
        variant: 'inner',
        content: <Page2Map />,
      },
      {
        id: 'thanks',
        label: 'Lời cảm ơn',
        variant: 'cover',
        content: <Page3ThankYou guestName={guestName} />,
      },
    ],
    [guestName],
  );

  const handlePageChange = useCallback(
    (page: number, previousPage: number) => {
      if (previousPage === 0 && page > 0) {
        launchOpeningFireworks();
      } else if (page === pages.length - 1) {
        launchCelebration();
      }
    },
    [pages.length],
  );

  // Fire opening fireworks immediately when the invitation page loads.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      launchOpeningFireworks();
    }, 150);

    return () => {
      window.clearTimeout(timer);
      stopFireworks();
    };
  }, []);

  return (
    <main className="relative flex min-h-full flex-col items-center justify-center overflow-x-hidden overflow-y-auto px-3 py-6">
      <button
        type="button"
        onClick={() => launchOpeningFireworks()}
        aria-label="Bắn pháo bông chúc mừng"
        title="Bắn pháo bông"
        className="fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-hcmus-gold/70 bg-hcmus-navy-light/90 px-4 py-2.5 text-xs font-medium text-hcmus-gold-pale shadow-lg backdrop-blur transition hover:bg-hcmus-gold/25 sm:text-sm"
      >
        <Sparkles className="h-4 w-4 text-hcmus-gold-bright sm:h-5 sm:w-5" aria-hidden="true" />
        <span>Pháo hoa</span>
      </button>

      <GraduationBook pages={pages} onPageChange={handlePageChange} />
    </main>
  );
}
