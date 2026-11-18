import { Calendar, Clock, MapPin } from 'lucide-react';
import { invitationConfig } from '../../config/invitationConfig';

interface Page1InvitationProps {
  guestName: string;
}

/**
 * Page 1 (Invitation Letter): Personalized graduation invitation from
 * Phạm Việt Hoàng to Gia Hân (or ?to=...), 08:00 AM, December 6, at
 * Giảng đường 1, 227 Nguyễn Văn Cừ, Phường Chợ Quán.
 */
export function Page1Invitation({ guestName }: Page1InvitationProps) {
  const { graduate, ceremony } = invitationConfig;

  return (
    <div className="flex h-full flex-col justify-between text-center">
      {/* Top header */}
      <header className="space-y-1.5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-hcmus-gold sm:text-sm">
          Trân Trọng Kính Mời
        </p>
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-hcmus-navy sm:text-3xl md:text-4xl">
          Thư Mời Dự Lễ Tốt Nghiệp
        </h2>
        <div className="mx-auto h-0.5 w-24 bg-gradient-to-r from-transparent via-hcmus-gold to-transparent sm:w-32" />
      </header>

      {/* Personalized recipient block */}
      <section aria-label="Người nhận thiệp" className="my-2 space-y-1.5">
        <p className="font-serif text-sm italic text-ink-soft sm:text-base md:text-lg">
          Thân mời
        </p>
        <p
          data-testid="guest-name-heading"
          className="font-script text-4xl text-hcmus-navy sm:text-5xl md:text-6xl"
        >
          {guestName}
        </p>
        <p className="mx-auto max-w-[440px] font-serif text-sm leading-relaxed text-ink sm:text-base md:text-lg">
          Đến chung vui và lưu giữ khoảnh khắc ý nghĩa trong buổi{' '}
          <span className="font-semibold text-hcmus-navy">Lễ Tốt Nghiệp Cử Nhân</span> cùng với{' '}
          <span className="font-semibold text-hcmus-navy">{graduate.fullName}</span>.
        </p>
      </section>

      {/* Framed ceremony details */}
      <section
        aria-label="Thông tin thời gian và địa điểm"
        className="rounded-sm border border-hcmus-gold/55 bg-paper-cream-dark/75 px-4 py-3.5 text-left shadow-sm sm:px-6 sm:py-5"
      >
        <div className="space-y-3 text-sm sm:text-base">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start gap-2.5">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-hcmus-gold sm:h-6 sm:w-6" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-soft">Thời gian</p>
                <p className="font-semibold text-hcmus-navy sm:text-lg">{ceremony.timeDisplay}</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Calendar className="mt-1 h-5 w-5 shrink-0 text-hcmus-gold sm:h-6 sm:w-6" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-soft">Ngày lễ</p>
                <p className="font-semibold text-hcmus-navy sm:text-lg">{ceremony.dateDisplay}</p>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-hcmus-gold/30" />

          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-hcmus-gold sm:h-6 sm:w-6" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wider text-ink-soft">Địa điểm</p>
              <p className="font-semibold text-hcmus-navy sm:text-lg">{ceremony.hallName}</p>
              <p className="text-xs leading-snug text-ink-soft sm:text-sm">
                {ceremony.addressDisplay}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-off */}
      <footer className="flex items-center justify-between pt-2 text-left">

      </footer>
    </div>
  );
}
