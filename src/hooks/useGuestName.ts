import { useMemo } from 'react';
import { invitationConfig } from '../config/invitationConfig';

const { defaultName, maxNameLength } = invitationConfig.guest;

/**
 * Extracts the guest name from a URL query string (`?to=...`).
 * URLSearchParams already decodes `%20` and `+` into spaces.
 * Falls back to the default guest when the param is missing or blank.
 */
export function parseGuestName(
  search: string,
  fallback: string = defaultName,
  maxLength: number = maxNameLength,
): string {
  const raw = new URLSearchParams(search).get('to');
  if (!raw) return fallback;

  const cleaned = raw
    // Drop control characters, then collapse any run of whitespace.
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleaned) return fallback;

  // Spread to code points so we never cut a character in half.
  return [...cleaned].slice(0, maxLength).join('').trim();
}

/** Guest name for the current page URL. */
export function useGuestName(): string {
  const search = typeof window === 'undefined' ? '' : window.location.search;
  return useMemo(() => parseGuestName(search), [search]);
}
