'use client';
import { useReveal } from '@/hooks/useReveal';
import { usePillars } from '@/hooks/usePillars';
import styles from './styles.module.css';

function PillarIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'target':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" />
          <line x1="12" y1="3" x2="12" y2="1" /><line x1="12" y1="23" x2="12" y2="21" />
          <line x1="3" y1="12" x2="1" y2="12" /><line x1="23" y1="12" x2="21" y2="12" />
        </svg>
      );
    case 'clock':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case 'star':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
        </svg>
      );
    case 'coffee':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
    case 'user':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Pillars() {
  useReveal();
  usePillars();

  return (
    <section className={styles.pillars} id="about">
      <div className={`${styles.header} reveal-up`}>
        <div className="section-eyebrow">
          <span className="eyebrow-line" />
          <span>Përse OMEGA</span>
        </div>
        <h2 className="section-title">
          Ndërtuar për ata<br /><em>që nuk pranojnë kompromis</em>
        </h2>
      </div>

      <div className="pillars-bento" id="pillars-bento">
        <div className="pillar reveal-up" style={{ '--delay': '0s' } as React.CSSProperties}>
          <div className="pillar-bg-num" aria-hidden="true">01</div>
          <div className="pillar-inner">
            <span className="pillar-num">01 — Precizion</span>
            <div className="pillar-icon"><PillarIcon icon="target" /></div>
            <h3 className="pillar-title">Precizion<br /><em>Absolut</em></h3>
            <p className="pillar-text">Platformat tona analitike operojnë në kufijtë e zbulimit 0.001 nmol/L. Çdo rezultat kalibrohet çdo ditë kundrejt standardeve ndërkombëtare NIST.</p>
            <div className="pillar-metric">
              <span className="pm-val">±0.1%</span>
              <span className="pm-label">Koeficienti<br />i Variacionit</span>
            </div>
          </div>
        </div>

        <div className="pillar reveal-up" style={{ '--delay': '0.08s' } as React.CSSProperties}>
          <div className="pillar-bg-num" aria-hidden="true">02</div>
          <div className="pillar-inner">
            <span className="pillar-num">02 — Shpejtësi</span>
            <div className="pillar-icon"><PillarIcon icon="clock" /></div>
            <h3 className="pillar-title">Rezultate<br /><em>Ditën e Njëjtë</em></h3>
            <p className="pillar-text">Panelet urgente dhe rutinore raportohen brenda 4 orëve. Dërgesa dixhitale e sigurt drejtpërsëdrejti te pacienti dhe mjeku.</p>
            <div className="pillar-metric">
              <span className="pm-val">4h</span>
              <span className="pm-label">Koha Mesatare<br />e Kthimit</span>
            </div>
          </div>
        </div>

        <div className="pillar reveal-up" style={{ '--delay': '0.16s' } as React.CSSProperties}>
          <div className="pillar-bg-num" aria-hidden="true">03</div>
          <div className="pillar-inner">
            <span className="pillar-num">03 — Cilësi</span>
            <div className="pillar-icon"><PillarIcon icon="star" /></div>
            <h3 className="pillar-title">Akreditim<br /><em>ISO 15189</em></h3>
            <p className="pillar-text">I akredituar ndërkombëtarisht sipas standardeve më rigoroze të menaxhimit të cilësisë.</p>
            <div className="pillar-metric">
              <span className="pm-val">CAP</span>
              <span className="pm-label">Laborator<br />i Aprovuar</span>
            </div>
          </div>
        </div>

        <div className="pillar reveal-up" style={{ '--delay': '0.24s' } as React.CSSProperties}>
          <div className="pillar-bg-num" aria-hidden="true">04</div>
          <div className="pillar-inner">
            <span className="pillar-num">04 — Disponim</span>
            <div className="pillar-icon"><PillarIcon icon="coffee" /></div>
            <h3 className="pillar-title">Disponueshmëri<br /><em>24 Orë</em></h3>
            <p className="pillar-text">Qendrat e marrjes së mostrës janë të hapura gjatë gjithë ditës me specialist laboratori.</p>
            <div className="pillar-metric">
              <span className="pm-val">24/7</span>
              <span className="pm-label">Shërbim pa<br />Ndërprerje</span>
            </div>
          </div>
        </div>

        <div className="pillar reveal-up" style={{ '--delay': '0.32s' } as React.CSSProperties}>
          <div className="pillar-bg-num" aria-hidden="true">05</div>
          <div className="pillar-inner">
            <div className="pillar-left">
              <span className="pillar-num">05 — Ekspertizë</span>
              <div className="pillar-icon"><PillarIcon icon="user" /></div>
              <h3 className="pillar-title">Patologë<br /><em>Ekspertë</em></h3>
              <p className="pillar-text">Çdo rezultat shqyrtohet nga patologë klinikë të certifikuar me ekspertizë të specializuar në diagnostikë molekulare dhe hematologji.</p>
            </div>
            <div className="pillar-right">
              <div className="pillar-metric">
                <span className="pm-val">850k+</span>
                <span className="pm-label">Pacientë<br />të Shërbyer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.quote} reveal-up`}>
        <div className={styles.quoteCharacter}>
          <img src="/Omega Behance Presentation-28.svg" alt="" className={styles.quoteCharacterImg} />
        </div>
        <div className={styles.quoteContent}>
          <svg className={styles.quoteMark} viewBox="0 0 48 36" fill="currentColor">
            <path d="M0 36V22.5C0 14.8 4.2 8.4 12.6 3.3L15 7.2C10.2 10 7.8 13.4 7.8 17.4H14.4V36H0ZM26.4 36V22.5C26.4 14.8 30.6 8.4 39 3.3L41.4 7.2C36.6 10 34.2 13.4 34.2 17.4H40.8V36H26.4Z" />
          </svg>
          <blockquote>&ldquo;Rezultatet e OMEGA-s i dhanë diagnozës sime një nivel besueshmërie që nuk e kam ndjerë në asnjë laborator tjetër.&rdquo;</blockquote>
          <cite>— Dr. Bujar Gruda</cite>
        </div>
      </div>
    </section>
  );
}
