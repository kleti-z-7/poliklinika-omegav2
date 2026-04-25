'use client';
import { useState } from 'react';
import { useNavScroll } from '@/hooks/useNavScroll';
import { useActiveSection } from '@/hooks/useActiveSection';
import { NAV_LINKS } from '@/lib/data';
import styles from './styles.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useNavScroll();
  useActiveSection();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.nav} id="nav">
      <div className={styles.inner}>
        <a href="#" className={styles.logo} aria-label="OMEGA Laboratories">
          <div className={styles.logoText}>
            <img
              src="/Omega Behance Presentation-38.svg"
              alt="OMEGA Laboratories"
              className={styles.wordmark}
            />
          </div>
        </a>

        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href="#booking" className={styles.cta}>
            Rezervo Testin
          </a>
          <button
            className={`${styles.burger}${menuOpen ? ` ${styles.active}` : ''}`}
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

      <div
        className={`${styles.mobileMenu}${menuOpen ? ` ${styles.active}` : ''}`}
        id="mobile-menu"
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.mobileLink} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#booking"
              className={`${styles.mobileLink} ${styles.mobileCta}`}
              onClick={closeMenu}
            >
              Rezervo Testin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
