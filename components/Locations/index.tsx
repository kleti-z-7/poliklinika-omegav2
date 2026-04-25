'use client';
import { useState, useRef, useEffect } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { useLocationTilt } from '@/hooks/useLocationTilt';
import { LOCATIONS } from '@/lib/data';
import styles from './styles.module.css';

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.2" />
    <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GoogleMapsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="rgba(91,143,255,0.2)" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="12" cy="9" r="2.5" fill="currentColor" />
  </svg>
);

const AppleMapsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.4" />
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Rr.+Sadik+Cufa%2C+Pej%C3%AB+30000%2C+Kosovo';
const APPLE_MAPS_URL  = 'https://maps.apple.com/?address=Rr.+Sadik+Cufa,+Pej%C3%AB+30000,+Kosovo&ll=42.6603,20.2883&q=Poliklinika+OMEGA';
const GMAPS_EMBED     = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.9844736321606!2d20.273384274926798!3d42.66168441599427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352fc3666d911ff%3A0x928801d413916eb3!2sRrug%C3%AB%20Sadik%20Cufa%2C%20Pej%C3%AB%2030000!5e0!3m2!1ssq!2sus!4v1777137185818!5m2!1ssq!2sus';

/* ── Desktop dropdown ─────────────────────────────────────────── */
function DesktopDropdown({ onOpen }: { onOpen: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const handleToggle = () => {
    if (window.innerWidth < 640) { onOpen(); return; }
    setOpen(o => !o);
  };

  return (
    <div className={styles.mapDropWrap} ref={ref}>
      <button className={styles.mapBtn} onClick={handleToggle} aria-expanded={open} aria-haspopup="true">
        <div className={styles.infoIcon}><PinIcon /></div>
        <span>Hap në Hartë</span>
        <svg className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className={styles.mapMenu} role="menu">
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapOption} role="menuitem" onClick={() => setOpen(false)}>
            <div className={styles.mapOptionIcon}><GoogleMapsIcon /></div>
            <div className={styles.mapOptionText}>
              <span className={styles.mapOptionLabel}>Google Maps</span>
              <span className={styles.mapOptionSub}>Hap në shfletues</span>
            </div>
            <svg className={styles.mapOptionArrow} viewBox="0 0 16 16" fill="none">
              <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <div className={styles.mapMenuDivider} />
          <a href={APPLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapOption} role="menuitem" onClick={() => setOpen(false)}>
            <div className={styles.mapOptionIcon}><AppleMapsIcon /></div>
            <div className={styles.mapOptionText}>
              <span className={styles.mapOptionLabel}>Apple Maps</span>
              <span className={styles.mapOptionSub}>Hap në aplikacion</span>
            </div>
            <svg className={styles.mapOptionArrow} viewBox="0 0 16 16" fill="none">
              <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}

/* ── Mobile bottom sheet ──────────────────────────────────────── */
function MobileSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div className={styles.sheetBackdrop} onClick={onClose} aria-hidden="true" />
      <div className={styles.sheet} role="dialog" aria-modal="true" aria-label="Hap në Hartë">
        <div className={styles.sheetHandle} />
        <p className={styles.sheetTitle}>Hap Vendndodhjen</p>
        <p className={styles.sheetAddress}>Rr. Sadik Cufa, Pejë 30000</p>

        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.sheetOption} onClick={onClose}>
          <div className={styles.sheetOptionIcon}><GoogleMapsIcon /></div>
          <div className={styles.sheetOptionText}>
            <span className={styles.sheetOptionLabel}>Google Maps</span>
            <span className={styles.sheetOptionSub}>Hap në shfletues</span>
          </div>
        </a>

        <a href={APPLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.sheetOption} onClick={onClose}>
          <div className={styles.sheetOptionIcon}><AppleMapsIcon /></div>
          <div className={styles.sheetOptionText}>
            <span className={styles.sheetOptionLabel}>Apple Maps</span>
            <span className={styles.sheetOptionSub}>Hap në aplikacion</span>
          </div>
        </a>

        <button className={styles.sheetCancel} onClick={onClose}>Anulo</button>
      </div>
    </>
  );
}

/* ── Main component ───────────────────────────────────────────── */
export default function Locations() {
  useReveal();
  useLocationTilt();

  const [sheetOpen, setSheetOpen] = useState(false);
  const loc = LOCATIONS[0];

  return (
    <section className={styles.locations} id="locations">
      <div className={styles.ambientOrb} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.layout}>

          {/* LEFT */}
          <div className={styles.editorial}>
            <div className={`${styles.eyebrowWrap} reveal-up`}>
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                <span>Qendrat e Marrjes</span>
              </div>
            </div>
            <h2 className={`${styles.heading} reveal-up`}>
              OMEGA<br /><em>Pranë<br />Teje.</em>
            </h2>
            <p className={`${styles.sub} reveal-up`}>
              Laboratori ynë kryesor në Pejë — i pajisur me teknologji
              të gjeneratës së re dhe staf klinik me eksperiencë ndërkombëtare.
            </p>
          </div>

          {/* RIGHT */}
          <div className={styles.cardWrap}>
            <div className="loc-card loc-primary reveal-up">
              <div className="loc-card-inner">
                <div className="loc-card-foil" aria-hidden="true" />

                <div className={styles.cardTop}>
                  <span className={styles.cityLabel}>Pejë, Kosovë</span>
                  <div className={styles.pinCircle} aria-hidden="true"><PinIcon /></div>
                </div>

                <div className={styles.cityBlock}>
                  <h3 className={styles.cityName}>Poliklinika<br />OMEGA</h3>
                  <address className={styles.cardAddress}>{loc.address}</address>
                </div>

                <div className={styles.mapPreview}>
                  <iframe
                    src={GMAPS_EMBED}
                    className={styles.mapFrame}
                    title="Harta e Poliklinikës OMEGA"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className={styles.mapOverlay} aria-hidden="true" />
                </div>

                <div className={styles.cardDivider} />

                <div className={styles.hoursBlock}>
                  <div className={styles.hoursHeader}>
                    <div className={styles.infoIcon}><ClockIcon /></div>
                    <span className={styles.hoursTitle}>Orari i Punës</span>
                  </div>
                  {loc.hours.map((h, hi) => (
                    <div key={hi} className={styles.hourRow}>
                      <span className={styles.hourText}>{h.text}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.cardDivider} />

                <DesktopDropdown onOpen={() => setSheetOpen(true)} />

                <a href="#booking" className={styles.cardCta}>
                  <span>Rezervo Takim</span>
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

              </div>
            </div>

            <div className={styles.pingRing} aria-hidden="true">
              <div className={styles.pingRingInner} />
            </div>
          </div>
        </div>

        <div className={`${styles.homeVisit} reveal-up`}>
          <div className={styles.hvIcon}>
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M24 8L8 20v22h12v-10h8v10h12V20L24 8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div className={styles.hvText}>
            <h4>Vizitë në Shtëpi</h4>
            <p>Ekipi ynë mobil i flebotomisë vjen te ti. Shërbim premium marrjeje mostrash për klientë korporativë, pacientë në shtëpi dhe ata që e vlerësojnë kohën e tyre.</p>
          </div>
          <a href="#booking" className="btn-primary">Rezervo Vizitën</a>
        </div>
      </div>

      <MobileSheet open={sheetOpen} onClose={() => setSheetOpen(false)} />
    </section>
  );
}
