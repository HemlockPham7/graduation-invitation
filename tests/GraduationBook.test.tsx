import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import App from '../src/App';
import { BookNavigation } from '../src/components/book/BookNavigation';
import * as FireworksController from '../src/components/effects/FireworksController';

describe('GraduationBook & 4-Page Invitation App', () => {
  beforeEach(() => {
    vi.spyOn(FireworksController, 'launchOpeningFireworks').mockImplementation(() => {});
    vi.spyOn(FireworksController, 'launchCelebration').mockImplementation(() => {});
    vi.spyOn(FireworksController, 'stopFireworks').mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    window.history.replaceState(null, '', '/');
    vi.restoreAllMocks();
  });

  it('renders all 4 book pages (book-page-0 through book-page-3)', () => {
    render(<App />);

    expect(screen.getByTestId('book-page-0')).toBeTruthy();
    expect(screen.getByTestId('book-page-1')).toBeTruthy();
    expect(screen.getByTestId('book-page-2')).toBeTruthy();
    expect(screen.getByTestId('book-page-3')).toBeTruthy();
  });

  it('Page 0 (Cover) displays HCMUS, Computer Science, APCS, and Phạm Việt Hoàng', () => {
    render(<App />);
    const page0 = screen.getByTestId('book-page-0');

    expect(within(page0).getByText(/Trường Đại học Khoa học Tự nhiên/i)).toBeTruthy();
    expect(within(page0).getByText(/Graduation Invitation/i)).toBeTruthy();
    expect(within(page0).getByText(/Ngành Khoa học Máy tính/i)).toBeTruthy();
    expect(within(page0).getByText(/Chương trình Tiên tiến \(APCS\)/i)).toBeTruthy();
    expect(within(page0).getByText('Phạm Việt Hoàng')).toBeTruthy();
    expect(within(page0).getByRole('button', { name: /Mở Thiệp Mời/i, hidden: true })).toBeTruthy();
  });

  it('Page 1 (Invitation) displays Phạm Việt Hoàng inviting Gia Hân at 08:00 Sáng, Ngày 06 tháng 12, Giảng đường 1, 227 Nguyễn Văn Cừ', () => {
    render(<App />);
    const page1 = screen.getByTestId('book-page-1');

    expect(within(page1).getByTestId('guest-name-heading').textContent).toBe('Gia Hân');
    expect(within(page1).getAllByText(/Phạm Việt Hoàng/i).length).toBeGreaterThan(0);
    expect(within(page1).getByText('08:00 Sáng')).toBeTruthy();
    expect(within(page1).getByText('Ngày 06 tháng 12')).toBeTruthy();
    expect(within(page1).getByText('Giảng đường 1')).toBeTruthy();
    expect(within(page1).getByText(/227 Nguyễn Văn Cừ, Phường Chợ Quán/i)).toBeTruthy();
  });

  it('personalizes Page 1 and Page 3 when URL query ?to= is provided', () => {
    window.history.replaceState(null, '', '/?to=Minh%20Anh');
    render(<App />);

    const page1 = screen.getByTestId('book-page-1');
    const page3 = screen.getByTestId('book-page-3');

    expect(within(page1).getByTestId('guest-name-heading').textContent).toBe('Minh Anh');
    expect(within(page3).getByText('Minh Anh')).toBeTruthy();
  });

  it('Page 2 (Map) renders the wedding-style illustrated map and links to https://maps.app.goo.gl/dV3CwJ9quTNthErB9', () => {
    render(<App />);
    const page2 = screen.getByTestId('book-page-2');

    expect(
      within(page2).getByRole('img', {
        name: /Bản đồ vẽ tay chỉ dẫn tới Giảng đường 1, cơ sở 227 Nguyễn Văn Cừ/i,
        hidden: true,
      }),
    ).toBeTruthy();

    const mapLink = within(page2).getByRole('link', {
      name: /Mở chỉ đường trên Google Maps/i,
      hidden: true,
    });
    expect(mapLink.getAttribute('href')).toBe('https://maps.app.goo.gl/dV3CwJ9quTNthErB9');
    expect(mapLink.getAttribute('target')).toBe('_blank');
  });

  it('Page 3 (Thank You) displays Thank You, mock phone number, tel: link, and copy phone interaction', async () => {
    render(<App />);
    const page3 = screen.getByTestId('book-page-3');

    expect(within(page3).getByText('Thank You!')).toBeTruthy();
    expect(within(page3).getByTestId('mock-phone-number').textContent).toBe('0909 123 456');

    const callLink = within(page3).getByRole('link', { name: /Gọi ngay/i, hidden: true });
    expect(callLink.getAttribute('href')).toBe('tel:0909123456');

    const copyBtn = within(page3).getByRole('button', { name: /Sao chép SĐT/i, hidden: true });
    fireEvent.click(copyBtn);
    expect(await within(page3).findByText('Đã sao chép!')).toBeTruthy();
  });

  it('launches opening fireworks automatically when the app opens and when clicking the fireworks buttons', () => {
    vi.useFakeTimers();
    try {
      render(<App />);

      // Advance past the 150ms mount timer -> opening fireworks fire automatically
      vi.advanceTimersByTime(200);
      expect(FireworksController.launchOpeningFireworks).toHaveBeenCalledTimes(1);

      // Clicking the top-right fireworks button triggers fireworks again
      const topFireworksBtn = screen.getByRole('button', { name: /Bắn pháo bông chúc mừng/i });
      fireEvent.click(topFireworksBtn);
      expect(FireworksController.launchOpeningFireworks).toHaveBeenCalledTimes(2);

      // Clicking the fireworks button on Page 3 triggers celebration fireworks
      const page3 = screen.getByTestId('book-page-3');
      const page3FireworksBtn = within(page3).getByRole('button', { name: /Bắn pháo bông/i, hidden: true });
      fireEvent.click(page3FireworksBtn);
      expect(FireworksController.launchCelebration).toHaveBeenCalledTimes(1);
    } finally {
      vi.useRealTimers();
    }
  });

  it('controls Next / Previous buttons and page indicators accurately across pages 0 -> 1 -> 2 -> 3', () => {
    const onPrev = vi.fn();
    const onNext = vi.fn();
    const onGoTo = vi.fn();
    const labels = ['Bìa tốt nghiệp', 'Thư mời', 'Bản đồ chỉ dẫn', 'Lời cảm ơn'];

    const { rerender } = render(
      <BookNavigation
        currentPage={0}
        pageCount={4}
        isPortrait={true}
        pageLabels={labels}
        onPrev={onPrev}
        onNext={onNext}
        onGoTo={onGoTo}
      />,
    );

    const prevButton = screen.getByRole('button', { name: /Trang trước \(Previous\)/i }) as HTMLButtonElement;
    const nextButton = screen.getByRole('button', { name: /Trang sau \(Next\)/i }) as HTMLButtonElement;

    // On Page 0: Previous is disabled, Next is enabled
    expect(prevButton.disabled).toBe(true);
    expect(nextButton.disabled).toBe(false);
    expect(screen.getByText('Trang 0 / 3')).toBeTruthy();

    fireEvent.click(nextButton);
    expect(onNext).toHaveBeenCalledTimes(1);

    // Move to Page 1: both Previous and Next are enabled
    rerender(
      <BookNavigation
        currentPage={1}
        pageCount={4}
        isPortrait={true}
        pageLabels={labels}
        onPrev={onPrev}
        onNext={onNext}
        onGoTo={onGoTo}
      />,
    );
    expect(prevButton.disabled).toBe(false);
    expect(nextButton.disabled).toBe(false);
    expect(screen.getByText('Trang 1 / 3')).toBeTruthy();

    // Move to Page 3 (last page): Previous is enabled, Next is disabled
    rerender(
      <BookNavigation
        currentPage={3}
        pageCount={4}
        isPortrait={true}
        pageLabels={labels}
        onPrev={onPrev}
        onNext={onNext}
        onGoTo={onGoTo}
      />,
    );
    expect(prevButton.disabled).toBe(false);
    expect(nextButton.disabled).toBe(true);
    expect(screen.getByText('Trang 3 / 3')).toBeTruthy();

    fireEvent.click(prevButton);
    expect(onPrev).toHaveBeenCalledTimes(1);
  });
});
