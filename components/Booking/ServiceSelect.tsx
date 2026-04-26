'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

const OPTIONS = [
  'Numërim i Plotë i Gjakut',
  'Paneli Metabolik Gjithëpërfshirës',
  'Profili Lipidik',
  'Funksioni Tiroid',
  'Paneli Hormonal',
  'Paneli i Alergjisë',
  'Paneli Gjinomik / NGS',
  'Screening Shëndetësor Korporativ',
];

export default function ServiceSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function choose(val: string) {
    setSelected(val);
    setOpen(false);
  }

  return (
    <div className={styles.selectWrap} ref={ref}>
      <button
        type="button"
        className={`${styles.selectTrigger} ${open ? styles.selectTriggerOpen : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selected ? styles.selectValue : styles.selectPlaceholder}>
          {selected || 'Zgjidhni panetin…'}
        </span>
        <svg
          className={`${styles.selectChevron} ${open ? styles.selectChevronOpen : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M5 8.5l7 7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul className={styles.selectDropdown} role="listbox">
          {OPTIONS.map(opt => (
            <li
              key={opt}
              role="option"
              aria-selected={selected === opt}
              className={`${styles.selectOption} ${selected === opt ? styles.selectOptionActive : ''}`}
              onMouseDown={() => choose(opt)}
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
