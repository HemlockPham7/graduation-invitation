import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useResponsiveBook } from '../../hooks/useResponsiveBook';
import { BookNavigation } from './BookNavigation';
import { PageSheet, type PageVariant } from './PageSheet';

export interface BookPage {
  id: string;
  label: string;
  variant: PageVariant;
  content: ReactNode;
}

/** Subset of the page-flip instance API we rely on. */
interface PageFlipApi {
  flipNext(corner?: 'top' | 'bottom'): void;
  flipPrev(corner?: 'top' | 'bottom'): void;
  flip(page: number, corner?: 'top' | 'bottom'): void;
  getCurrentPageIndex(): number;
}

interface FlipBookHandle {
  pageFlip(): PageFlipApi | undefined;
}

export interface BookControls {
  currentPage: number;
  pageCount: number;
  next: () => void;
  prev: () => void;
  goTo: (page: number) => void;
}

const BookControlsContext = createContext<BookControls | null>(null);

/** Lets page content (e.g. "Mở thiệp" / "Về trang bìa" buttons) drive the book. */
export function useBookControls(): BookControls {
  const controls = useContext(BookControlsContext);
  if (!controls) throw new Error('useBookControls must be used inside <GraduationBook>');
  return controls;
}

interface GraduationBookProps {
  pages: BookPage[];
  /** Fired after a flip settles on a new page. */
  onPageChange?: (page: number, previousPage: number) => void;
}

export function GraduationBook({ pages, onPageChange }: GraduationBookProps) {
  const layout = useResponsiveBook();
  const bookRef = useRef<FlipBookHandle>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const currentPageRef = useRef(0);
  const pageCount = pages.length;

  // page-flip binds event handlers once, so read the latest callback via a ref.
  const onPageChangeRef = useRef(onPageChange);
  useEffect(() => {
    onPageChangeRef.current = onPageChange;
  }, [onPageChange]);

  const handleFlip = useCallback((event: { data: number }) => {
    const previous = currentPageRef.current;
    if (event.data === previous) return;
    currentPageRef.current = event.data;
    setCurrentPage(event.data);
    onPageChangeRef.current?.(event.data, previous);
  }, []);

  const api = () => bookRef.current?.pageFlip();
  const next = useCallback(() => api()?.flipNext('bottom'), []);
  const prev = useCallback(() => api()?.flipPrev('bottom'), []);
  const goTo = useCallback(
    (page: number) => {
      const flip = api();
      const target = Math.min(Math.max(page, 0), pageCount - 1);
      if (flip && target !== flip.getCurrentPageIndex()) flip.flip(target, 'bottom');
    },
    [pageCount],
  );

  // Keyboard navigation: ← / →
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  // Children must stay referentially stable: react-pageflip re-reads the DOM whenever they change.
  const sheets = useMemo(
    () =>
      pages.map((page, index) => (
        <PageSheet key={page.id} pageNumber={index} variant={page.variant}>
          {page.content}
        </PageSheet>
      )),
    [pages],
  );
  const pageLabels = useMemo(() => pages.map((page) => page.label), [pages]);

  const bookStyle = useMemo<CSSProperties>(
    () => ({
      width: layout.isMobile ? layout.pageWidth : layout.pageWidth * 2,
      height: layout.pageHeight,
    }),
    [layout],
  );

  // On desktop a closed book shows only one half; slide it so the visible cover stays centered.
  const lastPage = pageCount - 1;
  const coverShift = layout.isMobile
    ? 0
    : currentPage === 0
      ? -layout.pageWidth / 2
      : currentPage === lastPage
        ? layout.pageWidth / 2
        : 0;

  const controls = useMemo<BookControls>(
    () => ({ currentPage, pageCount, next, prev, goTo }),
    [currentPage, pageCount, next, prev, goTo],
  );

  // page-flip reads its settings once at init, so rebuild the book when the layout changes.
  const bookKey = `${layout.isMobile ? 'portrait' : 'spread'}-${layout.pageWidth}x${layout.pageHeight}`;

  return (
    <BookControlsContext.Provider value={controls}>
      <div className="flex flex-col items-center gap-5">
        <div
          className="transition-transform duration-700 ease-out"
          style={{ transform: `translateX(${coverShift}px)` }}
        >
          <div key={bookKey} style={bookStyle} className="drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]">
            <HTMLFlipBook
              ref={bookRef}
              className="graduation-book"
              style={bookStyle}
              startPage={currentPageRef.current}
              size="fixed"
              width={layout.pageWidth}
              height={layout.pageHeight}
              minWidth={layout.pageWidth}
              maxWidth={layout.pageWidth}
              minHeight={layout.pageHeight}
              maxHeight={layout.pageHeight}
              drawShadow
              flippingTime={900}
              usePortrait={layout.isMobile}
              startZIndex={0}
              autoSize={false}
              maxShadowOpacity={0.45}
              showCover
              mobileScrollSupport
              clickEventForward
              useMouseEvents
              swipeDistance={30}
              showPageCorners
              disableFlipByClick
              renderOnlyPageLengthChange
              onFlip={handleFlip}
            >
              {sheets}
            </HTMLFlipBook>
          </div>
        </div>

        <BookNavigation
          currentPage={currentPage}
          pageCount={pageCount}
          isPortrait={layout.isMobile}
          pageLabels={pageLabels}
          onPrev={prev}
          onNext={next}
          onGoTo={goTo}
        />
      </div>
    </BookControlsContext.Provider>
  );
}
