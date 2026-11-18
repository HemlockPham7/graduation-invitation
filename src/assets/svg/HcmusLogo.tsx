interface HcmusLogoProps {
  className?: string;
}

/**
 * Official logo of VNU-HCM University of Science (Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM)
 * rendered directly on the cream invitation paper.
 */
export function HcmusLogo({ className = 'h-28 w-32' }: HcmusLogoProps) {
  return (
    <img
      src="/hcmus-logo.svg"
      alt="Logo Trường Đại học Khoa học Tự nhiên - ĐHQG-HCM"
      className={`object-contain drop-shadow-sm ${className}`}
    />
  );
}
