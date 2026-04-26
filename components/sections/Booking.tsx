'use client';
import { useState, useRef, useEffect } from 'react';
import { useReveal } from '@/hooks/useReveal';

const SERVICE_OPTIONS = [
  'Numërim i Plotë i Gjakut',
  'Paneli Metabolik Gjithëpërfshirës',
  'Profili Lipidik',
  'Funksioni Tiroid',
  'Paneli Hormonal',
  'Paneli i Alergjisë',
  'Paneli Gjinomik / NGS',
  'Screening Shëndetësor Korporativ',
];

function ServiceSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="ss-wrap" ref={ref}>
      <button
        type="button"
        className={`ss-trigger${open ? ' ss-trigger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selected ? 'ss-value' : 'ss-placeholder'}>
          {selected || 'Zgjidhni panetin…'}
        </span>
        <svg
          className={`ss-chevron${open ? ' ss-chevron--open' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M5 8.5l7 7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul className="ss-dropdown" role="listbox">
          {SERVICE_OPTIONS.map(opt => (
            <li
              key={opt}
              role="option"
              aria-selected={selected === opt}
              className={`ss-option${selected === opt ? ' ss-option--active' : ''}`}
              onMouseDown={() => { setSelected(opt); setOpen(false); }}
            >
              {selected === opt && (
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Booking() {
  useReveal();

  return (
    <section className="booking-cta" id="booking">
      <div className="booking-bg">
        <div className="booking-orb" />
      </div>
      <div className="booking-inner">
        <div className="booking-content reveal-up">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span>Fillo Sot</span>
          </div>
          <h2>
            Diagnostikë e Precizionit<br /><em>të Pret</em>
          </h2>
          <p>Rezervo takimin tënd online brenda minutave. Rezultate të sigurta të njëjtën ditë.</p>

          <div className="booking-meta">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rr.+Sadik+Cufa%2C+Pej%C3%AB+30000%2C+Kosovo"
              target="_blank"
              rel="noopener noreferrer"
              className="booking-meta-item booking-meta-location"
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.485-2.015-4.5-4.5-4.5Zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
              PEJË
            </a>
            <span className="booking-meta-sep" aria-hidden="true" />
            <a href="tel:+38348686838" className="booking-meta-item booking-phone">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 2.5h3l1 3-1.5 1a7 7 0 0 0 3 3L10 8l3 1v3a1 1 0 0 1-1 1C5.5 13 3 7.5 3 3.5a1 1 0 0 1 1-1h-1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
              +383 48 68 68 38
            </a>
            <span className="booking-meta-sep" aria-hidden="true" />
            <span className="booking-meta-item">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.2"/><path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              HËN–PRE 07:30–17:00 · SHTUNË 08:00–13:00
            </span>
          </div>

          <div className="booking-form">
            <div className="bf-group">
              <label htmlFor="bf-name">Emri i Plotë</label>
              <input id="bf-name" type="text" placeholder="Emri i plotë" />
            </div>
            <div className="bf-group">
              <label htmlFor="bf-contact">Telefon / Email</label>
              <input id="bf-contact" type="text" placeholder="+383 ose email" />
            </div>
            <div className="bf-group bf-group--full">
              <label>Shërbimi</label>
              <ServiceSelect />
            </div>
            <button className="btn-primary bf-submit" type="button">
              <span>Konfirmo Takimin</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="booking-doctor reveal-up" style={{ '--delay': '0.2s' } as React.CSSProperties} aria-hidden="true">
          <img src="/Omega Behance Presentation-27.svg" alt="" className="booking-doctor-img" />
        </div>
      </div>
    </section>
  );
}
