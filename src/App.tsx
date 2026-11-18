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

  useEffect(() => stopFireworks, []);

  return (
    <main className="relative flex min-h-full flex-col items-center justify-center overflow-x-hidden overflow-y-auto px-3 py-6">
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
