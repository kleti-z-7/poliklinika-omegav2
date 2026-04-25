'use client';
import { useReveal } from '@/hooks/useReveal';

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
          <div className="booking-form">
            <div className="bf-group">
              <label htmlFor="bf-name">Emri Juaj</label>
              <input id="bf-name" type="text" placeholder="Emri i plotë" />
            </div>
            <div className="bf-group">
              <label htmlFor="bf-contact">Telefon / Email</label>
              <input id="bf-contact" type="text" placeholder="+383 ose email" />
            </div>
            <div className="bf-group">
              <label htmlFor="bf-service">Shërbimi i Nevojshëm</label>
              <select id="bf-service">
                <option>Zgjidhni panetin…</option>
                <option>Numërim i Plotë i Gjakut</option>
                <option>Paneli Metabolik Gjithëpërfshirës</option>
                <option>Profili Lipidik</option>
                <option>Funksioni Tiroid</option>
                <option>Paneli Hormonal</option>
                <option>Paneli i Alergjisë</option>
                <option>Paneli Gjinomik / NGS</option>
                <option>Screening Shëndetësor Korporativ</option>
              </select>
            </div>
            <div className="bf-group">
              <label htmlFor="bf-location">Lokacioni i Preferuar</label>
              <select id="bf-location">
                <option>Zgjidhni lokacionin…</option>
                <option>Prishtina Qendër</option>
                <option>Prishtina Veri</option>
                <option>Gjilan</option>
                <option>Pejë</option>
                <option>Vizitë në Shtëpi</option>
              </select>
            </div>
            <button className="btn-primary bf-submit" type="button">
              <span>Konfirmo Takimin</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <p className="booking-note">
            Ose na telefononi direkt: <strong>+383 44 000 000</strong> · Disponueshëm 24/7
          </p>
        </div>

        <div className="booking-doctor reveal-up" style={{ '--delay': '0.2s' } as React.CSSProperties} aria-hidden="true">
          <img src="/Omega Behance Presentation-27.svg" alt="" className="booking-doctor-img" />
        </div>
      </div>
    </section>
  );
}
