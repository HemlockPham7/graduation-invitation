import { afterEach, describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import { parseGuestName, useGuestName } from '../src/hooks/useGuestName';

describe('parseGuestName', () => {
  it('falls back to "Gia Hân" when there is no ?to param', () => {
    expect(parseGuestName('')).toBe('Gia Hân');
    expect(parseGuestName('?foo=bar')).toBe('Gia Hân');
  });

  it('decodes percent-encoded and plus-encoded names', () => {
    expect(parseGuestName('?to=Minh%20Anh')).toBe('Minh Anh');
    expect(parseGuestName('?to=Minh+Anh')).toBe('Minh Anh');
    expect(parseGuestName('?to=Gia%20H%C3%A2n')).toBe('Gia Hân');
  });

  it('falls back when ?to is empty or whitespace only', () => {
    expect(parseGuestName('?to=')).toBe('Gia Hân');
    expect(parseGuestName('?to=%20%20%20')).toBe('Gia Hân');
  });

  it('trims and collapses whitespace', () => {
    expect(parseGuestName('?to=%20%20Minh%20%20%20Anh%20')).toBe('Minh Anh');
  });

  it('caps very long names at the configured length', () => {
    const longName = 'A'.repeat(80);
    expect(parseGuestName(`?to=${longName}`)).toHaveLength(50);
  });
});

describe('useGuestName', () => {
  afterEach(() => {
    window.history.replaceState(null, '', '/');
  });

  it('returns the default guest on the root URL', () => {
    const { result } = renderHook(() => useGuestName());
    expect(result.current).toBe('Gia Hân');
  });

  it('reads the guest name from the current URL', () => {
    window.history.replaceState(null, '', '/?to=Minh%20Anh');
    const { result } = renderHook(() => useGuestName());
    expect(result.current).toBe('Minh Anh');
  });
});
