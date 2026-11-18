import { describe, expect, it } from 'vitest';
import { getVisiblePages } from '../src/components/book/BookNavigation';
import { computeBookLayout, PAGE_RATIO, SIZE_MULTIPLIER } from '../src/hooks/useResponsiveBook';

describe('getVisiblePages (4-page book)', () => {
  it('shows one page at a time in portrait (mobile)', () => {
    expect([0, 1, 2, 3].map((p) => getVisiblePages(p, 4, true))).toEqual([[0], [1], [2], [3]]);
  });

  it('shows cover, spread 1–2, then back cover in landscape (desktop)', () => {
    expect(getVisiblePages(0, 4, false)).toEqual([0]);
    expect(getVisiblePages(1, 4, false)).toEqual([1, 2]);
    expect(getVisiblePages(2, 4, false)).toEqual([1, 2]);
    expect(getVisiblePages(3, 4, false)).toEqual([3]);
  });
});

describe('computeBookLayout (+70% size multiplier)', () => {
  it('has SIZE_MULTIPLIER set to 1.7 (+70%)', () => {
    expect(SIZE_MULTIPLIER).toBe(1.7);
  });

  it('uses single-page mode on a 375×812 phone and fits within horizontal viewport', () => {
    const layout = computeBookLayout(375, 812);
    expect(layout.isMobile).toBe(true);
    expect(layout.pageWidth).toBeLessThanOrEqual(375 - 16);
  });

  it('scales desktop pages up by 70% (e.g. 480 * 1.7 = 816px on 1920×1080) while fitting 2-page spread horizontally', () => {
    const fullHd = computeBookLayout(1920, 1080);
    expect(fullHd.isMobile).toBe(false);
    expect(fullHd.pageWidth).toBe(Math.floor(480 * 1.7)); // 816px
    expect(fullHd.pageWidth * 2).toBeLessThanOrEqual(1920);

    const laptop = computeBookLayout(1280, 800);
    expect(laptop.isMobile).toBe(false);
    expect(laptop.pageWidth * 2).toBeLessThanOrEqual(1280);
  });

  it('keeps the invitation aspect ratio', () => {
    const { pageWidth, pageHeight } = computeBookLayout(1920, 1080);
    expect(pageWidth / pageHeight).toBeCloseTo(PAGE_RATIO, 1);
  });
});
