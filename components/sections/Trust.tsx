'use client';
import { useReveal } from '@/hooks/useReveal';
import { useCounters } from '@/hooks/useCounters';
import { useCredWall } from '@/hooks/useCredWall';
import { TRUST_STATS, CREDENTIALS } from '@/lib/data';

function CredSlabIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'iso':
      return (
        <svg viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
          <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" />
          <path d="M32 14l3.5 10.7H47l-9.1 6.6 3.5 10.8L32 35.5l-9.4 6.6 3.5-10.8L17 24.7h11.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case 'cap':
      return (
        <svg viewBox="0 0 64 64" fill="none">
          <path d="M32 4L60 18v28L32 60 4 46V18z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M32 12L52 22v20L32 52 12 42V22z" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <path d="M20 32l9 9 15-18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'who':
      return (
        <svg viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="32" cy="32" rx="11" ry="28" stroke="currentColor" strokeWidth="1.5" />
          <line x1="4" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="1.5" />
          <line x1="8" y1="20" x2="56" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <line x1="8" y1="44" x2="56" y2="44" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case 'clia':
      return (
        <svg viewBox="0 0 64 64" fill="none">
          <rect x="8" y="8" width="48" height="48" rx="8" stroke="currentColor" strokeWidth="2" />
          <rect x="16" y="16" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <path d="M22 32h20M32 22v20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'msh':
      return (
        <svg viewBox="0 0 64 64" fill="none">
          <path d="M32 4l28 14v8H4v-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <rect x="8" y="26" width="6" height="28" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="20" y="26" width="6" height="28" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="29" y="26" width="6" height="28" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="38" y="26" width="6" height="28" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="50" y="26" width="6" height="28" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <line x1="4" y1="54" x2="60" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Trust() {
  useReveal();
  useCounters();
  useCredWall();

  return (
    <section className="trust" id="trust">
      <div className="trust-inner">
        {TRUST_STATS.map((stat, i) => (
          <>
            {i > 0 && <div key={`div-${i}`} className="trust-divider" />}
            <div
              key={stat.label}
              className="trust-item reveal-up"
              style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}
            >
              <div className="trust-num">
                <span
                  className="counter"
                  data-target={stat.target}
                  {...(stat.isFloat ? { 'data-float': 'true' } : {})}
                >
                  0
                </span>
                {stat.suffix}
              </div>
              <div className="trust-label">{stat.label}</div>
            </div>
          </>
        ))}
      </div>

      <div className="cred-wall-wrap">
        <div className="cred-wall-header reveal-up">
          <span className="cred-wall-label">Certifikuar dhe Akredituar nga</span>
          <div className="cred-wall-line" />
          <span className="cred-wall-count">05 / Institucione</span>
        </div>

        <div className="cred-wall" id="cred-wall">
          {CREDENTIALS.map((cred) => (
            <div
              key={cred.idx}
              className={`cred-slab${cred.isAnchor ? ' cred-slab--anchor' : ''}`}
              data-index={cred.idx}
            >
              <div className="cred-slab-scan" />
              <div className="cred-slab-noise" />
              <div className="cred-slab-foil" />
              <div className="cred-slab-content">
                <div className="cred-slab-top">
                  <span className="cred-slab-idx">{cred.idx}</span>
                  <div className="cred-slab-live">
                    <span className="cred-live-dot" />
                    <span>{cred.isAnchor ? 'AKTIV · 2024' : 'AKTIV'}</span>
                  </div>
                </div>
                <div className="cred-slab-emblem">
                  <CredSlabIcon icon={cred.icon} />
                </div>
                <div className="cred-slab-body">
                  <div className="cred-slab-code">{cred.code}</div>
                  <div
                    className="cred-slab-title"
                    dangerouslySetInnerHTML={{ __html: cred.title.replace('\n', '<br/>') }}
                  />
                  <div
                    className="cred-slab-org"
                    dangerouslySetInnerHTML={{ __html: cred.org.replace('\n', '<br/>') }}
                  />
                </div>
                {cred.isAnchor && (
                  <div className="cred-anchor-seal">
                    <div className="cred-seal-ring" />
                    <div className="cred-seal-text">{cred.sealText}</div>
                  </div>
                )}
                <div className="cred-slab-bar">
                  <div className="cred-slab-bar-fill" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
