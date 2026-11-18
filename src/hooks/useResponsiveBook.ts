import { useEffect, useState } from 'react';

export const MOBILE_BREAKPOINT = 768;
/** Page aspect ratio (width / height) — a tall invitation card, 3 : 4.3. */
export const PAGE_RATIO = 3 / 4.3;
/** Scale multiplier (+70% larger than the original baseline). */
export const SIZE_MULTIPLIER = 1.7;
/** Vertical space reserved for the navigation bar, gaps and safe areas. */
const VERTICAL_RESERVED = 136;
const BASE_MIN_PAGE_WIDTH = 240;
/** Ignore tiny resizes (e.g. mobile address bar) so the book isn't rebuilt. */
const RESIZE_THRESHOLD = 16;

export interface BookLayout {
  /** Mobile = single portrait page; desktop = two-page spread. */
  isMobile: boolean;
  pageWidth: number;
  pageHeight: number;
}

export function computeBookLayout(viewportWidth: number, viewportHeight: number): BookLayout {
  const isMobile = viewportWidth < MOBILE_BREAKPOINT;
  const availableHeight = Math.max(viewportHeight - VERTICAL_RESERVED, 320);
  const baseAvailableWidth = isMobile ? viewportWidth - 24 : (viewportWidth - 96) / 2;
  const baseMaxWidth = isMobile ? 440 : 480;

  const basePageWidth = Math.max(
    Math.min(baseAvailableWidth, baseMaxWidth, availableHeight * PAGE_RATIO),
    BASE_MIN_PAGE_WIDTH,
  );

  // Enlarge by +70% (1.7x) while staying within the horizontal viewport bounds
  const maxHorizontalPageWidth = isMobile
    ? Math.max(viewportWidth - 16, BASE_MIN_PAGE_WIDTH)
    : Math.max(Math.floor((viewportWidth - 32) / 2), BASE_MIN_PAGE_WIDTH);

  const pageWidth = Math.floor(
    Math.min(basePageWidth * SIZE_MULTIPLIER, maxHorizontalPageWidth),
  );
  const pageHeight = Math.floor(pageWidth / PAGE_RATIO);

  return { isMobile, pageWidth, pageHeight };
}

function readViewport(): BookLayout {
  return computeBookLayout(window.innerWidth, window.innerHeight);
}

/** Book dimensions for the current viewport, recomputed on (debounced) resize. */
export function useResponsiveBook(): BookLayout {
  const [layout, setLayout] = useState<BookLayout>(readViewport);

  useEffect(() => {
    let timer: number | undefined;

    const handleResize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        setLayout((previous) => {
          const next = readViewport();
          const changed =
            next.isMobile !== previous.isMobile ||
            Math.abs(next.pageWidth - previous.pageWidth) > RESIZE_THRESHOLD;
          return changed ? next : previous;
        });
      }, 200);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return layout;
}
