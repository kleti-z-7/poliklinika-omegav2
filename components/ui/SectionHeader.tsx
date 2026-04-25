interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  sub,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`reveal-up ${centered ? 'section-header' : ''} ${className}`}
    >
      <div className="section-eyebrow">
        <span className="eyebrow-line" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}
