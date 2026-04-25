'use client';
import { useReveal } from '@/hooks/useReveal';
import { useLocationTilt } from '@/hooks/useLocationTilt';
import { LOCATIONS } from '@/lib/data';

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const REVEAL_CLASSES = ['reveal-left', 'reveal-up', 'reveal-up', 'reveal-right'];
const REVEAL_DELAYS = ['', '0.08s', '0.16s', '0.24s'];

export default function Locations() {
  useReveal();
  useLocationTilt();

  return (
    <section className="locations" id="locations">
      <div className="locations-inner">
        <div className="locations-header reveal-up">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span>Qendrat e Marrjes</span>
          </div>
          <h2 className="section-title">
            OMEGA<br /><em>Pranë Teje</em>
          </h2>
        </div>

        <div className="locations-grid">
          {LOCATIONS.map((loc, i) => (
            <div
              key={loc.name}
              className={`loc-card${loc.isPrimary ? ' loc-primary' : ''} ${REVEAL_CLASSES[i]}`}
              style={REVEAL_DELAYS[i] ? { '--delay': REVEAL_DELAYS[i] } as React.CSSProperties : undefined}
            >
              <div className="loc-card-inner">
                <div className="loc-pin" aria-hidden="true">
                  <PinIcon />
                </div>
                <div className="loc-badge-slot">
                  {loc.isPrimary && <div className="loc-badge">Kryesore</div>}
                </div>
                <h4>{loc.name}</h4>
                <address>{loc.address}</address>
                <div className="loc-hours-wrap">
                  {loc.hours.map((h, hi) => (
                    <div key={hi} className="loc-hours">
                      <span className="loc-hours-text">{h.text}</span>
                    </div>
                  ))}
                </div>
                <a href="#booking" className="btn-ghost btn-sm">Rezervo Këtu</a>
              </div>
            </div>
          ))}
        </div>

        <div className="home-visit reveal-up">
          <div className="hv-icon">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M24 8L8 20v22h12v-10h8v10h12V20L24 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="hv-text">
            <h4>Vizitë në Shtëpi</h4>
            <p>Ekipi ynë mobil i flebotomisë vjen te ti. Shërbim premium marrjeje mostrash për klientë korporativë, pacientë në shtëpi dhe ata që e vlerësojnë kohën e tyre.</p>
          </div>
          <a href="#booking" className="btn-primary">Rezervo Vizitën</a>
        </div>
      </div>
    </section>
  );
}
