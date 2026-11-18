import { forwardRef, type ReactNode } from 'react';
import { OrnateFrame } from '../../assets/svg/OrnateFrame';

export type PageVariant = 'cover' | 'inner';

interface PageSheetProps {
  children: ReactNode;
  pageNumber: number;
  variant?: PageVariant;
}

/**
 * One physical sheet of the book. react-pageflip clones its direct children
 * and attaches its own ref, so every page must forward its ref to a DOM node.
 */
export const PageSheet = forwardRef<HTMLDivElement, PageSheetProps>(
  ({ children, pageNumber, variant = 'inner' }, ref) => {
    const isCover = variant === 'cover';

    return (
      <div
        ref={ref}
        data-testid={`book-page-${pageNumber}`}
        className={`book-page select-none overflow-hidden ${
          isCover ? 'bg-hcmus-navy text-paper-cream' : 'paper-texture text-ink'
        }`}
      >
        <div className="relative flex h-full w-full flex-col">
          <OrnateFrame tone={isCover ? 'navy' : 'cream'} />
          <div className="relative z-10 flex h-full w-full flex-col px-7 py-9 sm:px-9 sm:py-11">
            {children}
          </div>
        </div>
      </div>
    );
  },
);

PageSheet.displayName = 'PageSheet';
