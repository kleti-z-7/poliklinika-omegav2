// Reusable OMEGA flask mark SVG component
// The inverted Omega symbol with laboratory flask in negative space

interface OmegaMarkProps {
  className?: string;
  variant?: 'white' | 'liquid' | 'blue';
  width?: number;
  height?: number;
}

export default function OmegaMark({
  className,
  variant = 'white',
  width = 80,
  height = 72,
}: OmegaMarkProps) {
  const stroke =
    variant === 'blue' ? '#0047ab' : variant === 'liquid' ? 'rgba(91,143,255,0.9)' : 'white';

  return (
    <svg
      className={className}
      viewBox="0 0 80 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      aria-hidden="true"
    >
      <circle cx="40" cy="50" r="19" stroke={stroke} strokeWidth="4.5" />
      <clipPath id={`flask-clip-${variant}`}>
        <circle cx="40" cy="50" r="18.2" />
      </clipPath>
      <ellipse
        cx="40"
        cy="57"
        rx="15"
        ry="11"
        fill="#5B8FFF"
        opacity={variant === 'white' ? 1 : 0.6}
        clipPath={`url(#flask-clip-${variant})`}
      />
      <ellipse
        cx="37"
        cy="53"
        rx="5"
        ry="3"
        fill="#7AABFF"
        opacity="0.5"
        clipPath={`url(#flask-clip-${variant})`}
      />
      <line
        x1="40" y1="31" x2="40" y2="22"
        stroke={stroke} strokeWidth="4.5" strokeLinecap="round"
      />
      <path
        d="M40 22 Q32 22 26 16 Q20 10 20 4"
        fill="none" stroke={stroke} strokeWidth="4.5"
        strokeLinecap="square" strokeLinejoin="round"
      />
      <line
        x1="14" y1="4" x2="26" y2="4"
        stroke={stroke} strokeWidth="4.5" strokeLinecap="square"
      />
      <path
        d="M40 22 Q48 22 54 16 Q60 10 60 4"
        fill="none" stroke={stroke} strokeWidth="4.5"
        strokeLinecap="square" strokeLinejoin="round"
      />
      <line
        x1="54" y1="4" x2="66" y2="4"
        stroke={stroke} strokeWidth="4.5" strokeLinecap="square"
      />
    </svg>
  );
}
