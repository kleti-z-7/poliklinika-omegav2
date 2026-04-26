'use client';
import { useReveal } from '@/hooks/useReveal';
import styles from './styles.module.css';
import ServiceSelect from './ServiceSelect';

export default function Booking() {
  useReveal();

  return (
    <section className={styles.booking} id="booking">
      <div className={styles.bg}>
        <div className={styles.orb} />
      </div>
      <div className={styles.inner}>
        <div className={`${styles.content} reveal-up`}>
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span>Fillo Sot</span>
          </div>
          <h2>
            Diagnostikë e Precizionit<br /><em>të Pret</em>
          </h2>
          <p>Rezervo takimin tënd online brenda minutave. Rezultate të sigurta të njëjtën ditë.</p>

          <div className={styles.meta}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rr.+Sadik+Cufa%2C+Pej%C3%AB+30000%2C+Kosovo"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.metaItem} ${styles.metaLocation}`}
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.485-2.015-4.5-4.5-4.5Zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
              PEJË
            </a>
            <span className={styles.metaSep} aria-hidden="true" />
            <a href="tel:+38348686838" className={`${styles.metaItem} ${styles.metaPhone}`}>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 2.5h3l1 3-1.5 1a7 7 0 0 0 3 3L10 8l3 1v3a1 1 0 0 1-1 1C5.5 13 3 7.5 3 3.5a1 1 0 0 1 1-1h-1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
              +383 48 68 68 38
            </a>
            <span className={styles.metaSep} aria-hidden="true" />
            <span className={styles.metaItem}>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.2"/><path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              HËN–PRE 07:30–17:00 · SHTUNË 08:00–13:00
            </span>
          </div>

          <div className={styles.form}>
            <div className={styles.group}>
              <label htmlFor="bf-name">Emri i Plotë</label>
              <input id="bf-name" type="text" placeholder="Emri i plotë" />
            </div>
            <div className={styles.group}>
              <label htmlFor="bf-contact">Telefon / Email</label>
              <input id="bf-contact" type="text" placeholder="+383 ose email" />
            </div>
            <div className={`${styles.group} ${styles.groupFull}`}>
              <label>Shërbimi</label>
              <ServiceSelect />
            </div>
            <button className={`btn-primary ${styles.submit}`} type="button">
              <span>Konfirmo Takimin</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${styles.doctor} reveal-up`}
          style={{ '--delay': '0.2s' } as React.CSSProperties}
          aria-hidden="true"
        >
          <img src="/Omega Behance Presentation-27.svg" alt="" className={styles.doctorImg} />
        </div>
      </div>
    </section>
  );
}
