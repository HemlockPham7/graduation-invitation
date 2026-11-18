import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Which page indices are on screen. Portrait shows one page; landscape with a
 * hard cover shows [0], then spreads [1, 2], ... and the back cover alone.
 */
export function getVisiblePages(
  currentPage: number,
  pageCount: number,
  isPortrait: boolean,
): number[] {
  const last = pageCount - 1;
  const page = Math.min(Math.max(currentPage, 0), last);
  if (isPortrait || page === 0 || page === last) return [page];

  const left = page % 2 === 1 ? page : page - 1;
  return [left, Math.min(left + 1, last)];
}

interface BookNavigationProps {
  currentPage: number;
  pageCount: number;
  isPortrait: boolean;
  pageLabels: string[];
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (page: number) => void;
}

const navButton =
  'flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition ' +
  'hover:bg-hcmus-gold/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-hcmus-gold ' +
  'disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent';

export function BookNavigation({
  currentPage,
  pageCount,
  isPortrait,
  pageLabels,
  onPrev,
  onNext,
  onGoTo,
}: BookNavigationProps) {
  const visible = getVisiblePages(currentPage, pageCount, isPortrait);
  const last = pageCount - 1;
  const canGoPrev = visible[0] > 0;
  const canGoNext = visible[visible.length - 1] < last;

  return (
    <nav
      aria-label="Điều hướng trang thiệp"
      className="flex items-center gap-2 rounded-full border border-hcmus-gold/40 bg-hcmus-navy-light/70 px-2 py-1 text-paper-cream shadow-lg backdrop-blur"
    >
      <button type="button" onClick={onPrev} disabled={!canGoPrev} className={navButton} aria-label="Trang trước (Previous)">
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        <span>Trước</span>
      </button>

      <div className="flex flex-col items-center px-1">
        <div className="flex items-center gap-1.5">
          {pageLabels.map((label, index) => {
            const active = visible.includes(index);
            return (
              <button
                key={label}
                type="button"
                onClick={() => onGoTo(index)}
                aria-label={`Đến Trang ${index}: ${label}`}
                aria-current={active ? 'page' : undefined}
                className={`h-2 rounded-full transition-all ${
                  active ? 'w-5 bg-hcmus-gold' : 'w-2 bg-paper-cream/40 hover:bg-paper-cream/70'
                }`}
              />
            );
          })}
        </div>
        <span aria-live="polite" className="mt-1 text-[11px] tracking-wide text-paper-cream/80">
          Trang {visible.join('–')} / {last}
        </span>
      </div>

      <button type="button" onClick={onNext} disabled={!canGoNext} className={navButton} aria-label="Trang sau (Next)">
        <span>Tiếp</span>
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </nav>
  );
}
