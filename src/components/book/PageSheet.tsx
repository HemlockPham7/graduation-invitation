import { forwardRef, type ReactNode } from 'react';
import { OrnateFrame } from '../../assets/svg/OrnateFrame';

export type PageVariant = 'cover' | 'inner';

interface PageSheetProps {
  children: ReactNode;
  pageNumber: number;
  variant?: PageVariant;
}

/**
 * One physical sheet of the book. All 4 pages (0, 1, 2, 3) share the same
 * fine-art cream paper surface and gilded ornate border so the HCMUS blue
 * crest and navy typography stand out uniformly.
 */
export const PageSheet = forwardRef<HTMLDivElement, PageSheetProps>(
  ({ children, pageNumber }, ref) => {
    return (
      <div
        ref={ref}
        data-testid={`book-page-${pageNumber}`}
        className="book-page paper-texture select-none overflow-hidden text-ink"
      >
        <div className="relative flex h-full w-full flex-col">
          <OrnateFrame tone="cream" />
          <div className="relative z-10 flex h-full w-full flex-col px-7 py-8 sm:px-12 sm:py-12 md:px-14 md:py-14">
            {children}
          </div>
        </div>
      </div>
    );
  },
);

PageSheet.displayName = 'PageSheet';
