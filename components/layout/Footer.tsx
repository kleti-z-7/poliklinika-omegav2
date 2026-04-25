'use client';
import { useReveal } from '@/hooks/useReveal';
import { FOOTER_LINKS } from '@/lib/data';

export default function Footer() {
  useReveal();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand reveal-up">
          <div className="footer-logo">
            <img
              src="/Omega Behance Presentation-36.svg"
              alt="OMEGA Laboratories"
              className="footer-emblem"
            />
          </div>
          <p>
            Diagnostikë e precizionit për klinicistë dhe pacientë që kërkojnë siguri absolute.
            Akredituar ISO 15189. Aprovuar CAP.
          </p>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/poliklinikaomega/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="social-link">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="social-link">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links reveal-up" style={{ '--delay': '0.1s' } as React.CSSProperties}>
          <div className="footer-col">
            <h5>Shërbimet</h5>
            <ul>
              {FOOTER_LINKS.sherbime.map((item) => (
                <li key={item.label}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Pacientët</h5>
            <ul>
              {FOOTER_LINKS.pacientet.map((item) => (
                <li key={item.label}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Kompania</h5>
            <ul>
              {FOOTER_LINKS.kompania.map((item) => (
                <li key={item.label}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 OMEGA Laboratories. Të gjitha të drejtat të rezervuara.</span>
        <div className="footer-bottom-links">
          <a href="#">Politika e Privatësisë</a>
          <a href="#">Kushtet e Përdorimit</a>
          <a href="#">Cilësimet e Cookies</a>
        </div>
        <span className="footer-iso">ISO 15189 · CAP · OBSH</span>
      </div>
    </footer>
  );
}
