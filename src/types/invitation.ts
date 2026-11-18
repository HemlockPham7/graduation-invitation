export interface UniversityInfo {
  nameVi: string;
  nameEn: string;
  campusWard: string;
  faculty: string;
  major: string;
  program: string;
}

export interface GraduateInfo {
  fullName: string;
  shortName: string;
  degreeTitle: string;
  /** Human-friendly phone number shown on the page (mock). */
  mockPhoneDisplay: string;
  /** Digits-only phone number used for `tel:` links (mock). */
  mockPhoneTel: string;
}

export interface GuestInfo {
  defaultName: string;
  /** Upper bound for names supplied via `?to=` so they never break the layout. */
  maxNameLength: number;
}

export interface CeremonyInfo {
  timeDisplay: string;
  dateDisplay: string;
  hallName: string;
  addressDisplay: string;
  googleMapsUrl: string;
}

export interface InvitationConfig {
  university: UniversityInfo;
  graduate: GraduateInfo;
  guest: GuestInfo;
  ceremony: CeremonyInfo;
}
