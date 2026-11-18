import type { InvitationConfig } from '../types/invitation';

/**
 * Single source of truth for every piece of invitation content.
 * Edit this file to change names, time, venue, map link or phone number.
 */
export const invitationConfig: InvitationConfig = {
  university: {
    nameVi: 'Trường Đại học Khoa học Tự nhiên - ĐHQG-HCM',
    nameEn: 'VNU-HCM University of Science (HCMUS)',
    campusWard: 'TP. Hồ Chí Minh',
    faculty: 'Khoa Công nghệ Thông tin',
    major: 'Ngành Khoa học Máy tính',
    program: 'Chương trình Tiên tiến (APCS)',
  },
  graduate: {
    fullName: 'Phạm Việt Hoàng',
    shortName: 'Việt Hoàng',
    degreeTitle: 'Cử nhân Khoa học Máy tính — APCS',
    mockPhoneDisplay: '0376 062 659',
    mockPhoneTel: '0376062659',
  },
  guest: {
    defaultName: 'Gia Hân',
    maxNameLength: 50,
  },
  ceremony: {
    timeDisplay: '08:00 Sáng',
    dateDisplay: 'Ngày 06 tháng 12',
    hallName: 'Giảng đường 1',
    addressDisplay: 'Cơ sở 227 Nguyễn Văn Cừ, Phường Chợ Quán, TP. Hồ Chí Minh',
    googleMapsUrl: 'https://maps.app.goo.gl/dV3CwJ9quTNthErB9',
  },
};
