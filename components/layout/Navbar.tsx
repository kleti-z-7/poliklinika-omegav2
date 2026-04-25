'use client';
import { useState } from 'react';
import { useNavScroll } from '@/hooks/useNavScroll';
import { useActiveSection } from '@/hooks/useActiveSection';
import OmegaMark from '@/components/ui/OmegaMark';
import { NAV_LINKS } from '@/lib/data';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useNavScroll();
  useActiveSection();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav" id="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo" aria-label="OMEGA Laboratories">
          <div className="nav-logo-text">
            <img
              src="/Omega Behance Presentation-38.svg"
              alt="OMEGA Laboratories"
              className="nav-wordmark"
            />
          </div>
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#booking" className="nav-cta">
            Rezervo Testin
          </a>
          <button
            className={`nav-burger ${menuOpen ? 'active' : ''}`}
            id="nav-burger"
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`} id="mobile-menu">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="mobile-link" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#booking" className="mobile-link mobile-cta" onClick={closeMenu}>
              Rezervo Testin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
