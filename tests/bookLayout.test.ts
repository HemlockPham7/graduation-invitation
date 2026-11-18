import { describe, expect, it } from 'vitest';
import { getVisiblePages } from '../src/components/book/BookNavigation';
import { computeBookLayout, PAGE_RATIO } from '../src/hooks/useResponsiveBook';

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

describe('computeBookLayout', () => {
  it('uses single-page mode on a 375×812 phone and fits the width', () => {
    const layout = computeBookLayout(375, 812);
    expect(layout.isMobile).toBe(true);
    expect(layout.pageWidth).toBeLessThanOrEqual(375 - 24);
  });

  it('uses spread mode on a 1280×800 desktop and fits both pages', () => {
    const layout = computeBookLayout(1280, 800);
    expect(layout.isMobile).toBe(false);
    expect(layout.pageWidth * 2).toBeLessThanOrEqual(1280);
    expect(layout.pageHeight).toBeLessThanOrEqual(800);
  });

  it('keeps the invitation aspect ratio', () => {
    const { pageWidth, pageHeight } = computeBookLayout(1280, 800);
    expect(pageWidth / pageHeight).toBeCloseTo(PAGE_RATIO, 1);
  });
});
