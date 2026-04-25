'use client';
import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { SERVICE_TABS } from '@/lib/data';
import styles from './styles.module.css';

const DETAIL: Record<string, {
  turnaround: string;
  stat: { val: string; label: string };
  tests: string[];
  note: string;
}> = {
  biochem:  { turnaround: 'Same day · STAT <2h',        stat: { val: '80+',    label: 'analita'      }, tests: ['Paneli Hepatik','Funksioni Renal','Profili Lipidik','Glukoza & HbA1c','Elektrolitët','Treguesit Kardiak'], note: 'Roche Cobas c702 · 1800 test/h. Raportim ditën e njëjtë.' },
  hemato:   { turnaround: '1–3h rutinë · STAT 1h',      stat: { val: '5-diff', label: 'diferencial'  }, tests: ['CBC + Diferencial','Koagulimi','Studimet e Hekurit','ESR / CRP','Retikulocitet','Analiza Trombocitare'], note: 'Morfologji dixhitale me AI Scopio Morphogo. <0.5% false positive.' },
  micro:    { turnaround: 'Kulturë 24–48h · PCR 2–4h',  stat: { val: '48h',    label: 'kthim max'    }, tests: ['Kulturë Gjaku','Zbulim PCR','Antibiograma','Kulturë Urine','MALDI-TOF','Screening Parazitar'], note: 'Identifikim MALDI Biotyper <3 min. PCR multiplex Roche cobas 6800.' },
  immuno:   { turnaround: '4–24h · panel i plotë 72h',  stat: { val: '200+',   label: 'alergjenë'    }, tests: ['Paneli i Alergjisë','ANA / ANCA','Citokinat','Komplementi','Imunoglobulinat','Flow Cytometry'], note: 'ImmunoCAP Phadia 250 për IgE specifike. Flow BD FACSCanto II.' },
  hormones: { turnaround: '4–8h rutinë · urgent <4h',   stat: { val: '30+',    label: 'hormone'      }, tests: ['Paneli i Plotë Tiroid','Hormonet Seksuale','Kortizoli / ACTH','Insulina / C-Peptidi','Hormoni i Rritjes','Vitamina D / B12'], note: 'Roche Cobas e801 electrochemiluminescence. Ndjeshmëri pmol/L.' },
  genetics: { turnaround: 'PCR 24–48h · NGS 7–21 ditë', stat: { val: 'NGS',    label: 'sekuencim'    }, tests: ['Panelet NGS','Farmakogjenomikë','Analiza BRCA','Screening Prenatal','PCR Patogjenësh','Metilimi'], note: 'Illumina NovaSeq 6000 · 500+ gjene. Raport klinik i detajuar.' },
};

const ICONS: Record<string, React.ReactNode> = {
  biochem:  <svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="22" stroke="currentColor" strokeWidth="1" opacity=".25"/><circle cx="28" cy="28" r="14" stroke="currentColor" strokeWidth="1" opacity=".45"/><polygon points="28,12 40,22 40,36 28,44 16,36 16,22" fill="rgba(91,143,255,.12)" stroke="currentColor" strokeWidth="1.4"/><circle cx="28" cy="12" r="2.5" fill="currentColor"/><circle cx="40" cy="28" r="2.5" fill="currentColor"/><circle cx="28" cy="44" r="2.5" fill="currentColor"/><circle cx="16" cy="28" r="2.5" fill="currentColor"/></svg>,
  hemato:   <svg viewBox="0 0 56 56" fill="none"><circle cx="22" cy="24" r="13" fill="rgba(220,60,60,.12)" stroke="rgba(220,80,80,.6)" strokeWidth="1.4"/><circle cx="34" cy="24" r="13" fill="rgba(91,143,255,.10)" stroke="rgba(91,143,255,.5)" strokeWidth="1.4"/><circle cx="28" cy="35" r="10" fill="rgba(255,200,50,.10)" stroke="rgba(255,200,50,.4)" strokeWidth="1.2"/><circle cx="22" cy="24" r="3.5" fill="rgba(220,80,80,.9)"/><circle cx="34" cy="24" r="3.5" fill="rgba(91,143,255,.9)"/><circle cx="28" cy="35" r="2.5" fill="rgba(255,200,50,.85)"/></svg>,
  micro:    <svg viewBox="0 0 56 56" fill="none"><path d="M20 8 C30 18 30 30 20 42" stroke="rgba(91,143,255,.75)" strokeWidth="2" fill="none" strokeLinecap="round"/><path d="M36 8 C26 18 26 30 36 42" stroke="rgba(122,171,255,.5)" strokeWidth="2" fill="none" strokeLinecap="round"/><line x1="20" y1="16" x2="36" y2="16" stroke="rgba(255,255,255,.3)" strokeWidth="1.2"/><line x1="20" y1="25" x2="36" y2="25" stroke="rgba(255,255,255,.3)" strokeWidth="1.2"/><line x1="20" y1="34" x2="36" y2="34" stroke="rgba(255,255,255,.3)" strokeWidth="1.2"/></svg>,
  immuno:   <svg viewBox="0 0 56 56" fill="none"><path d="M28 30 L20 22 L16 14 M28 30 L20 22 L24 14" stroke="rgba(91,143,255,.85)" strokeWidth="1.4" strokeLinecap="round"/><path d="M28 30 L36 22 L32 14 M28 30 L36 22 L40 14" stroke="rgba(91,143,255,.85)" strokeWidth="1.4" strokeLinecap="round"/><path d="M28 30 L28 44" stroke="rgba(91,143,255,.85)" strokeWidth="1.8" strokeLinecap="round"/><circle cx="16" cy="14" r="2.8" fill="rgba(91,143,255,.95)"/><circle cx="24" cy="14" r="2.8" fill="rgba(91,143,255,.95)"/><circle cx="32" cy="14" r="2.8" fill="rgba(91,143,255,.95)"/><circle cx="40" cy="14" r="2.8" fill="rgba(91,143,255,.95)"/><circle cx="28" cy="30" r="5" fill="rgba(91,143,255,.2)" stroke="rgba(91,143,255,.85)" strokeWidth="1.4"/></svg>,
  hormones: <svg viewBox="0 0 56 56" fill="none"><line x1="6" y1="28" x2="50" y2="28" stroke="rgba(255,255,255,.1)" strokeWidth="1" strokeDasharray="3 3"/><path d="M6 28 L14 28 L18 16 L22 40 L26 22 L30 34 L34 18 L38 36 L42 28 L50 28" stroke="rgba(91,143,255,.85)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/><circle cx="18" cy="16" r="2.8" fill="#5B8FFF"/><circle cx="26" cy="22" r="2.8" fill="#5B8FFF"/><circle cx="34" cy="18" r="2.8" fill="#5B8FFF"/></svg>,
  genetics: <svg viewBox="0 0 56 56" fill="none"><rect x="10" y="32" width="6" height="14" rx="1.5" fill="rgba(74,226,74,.8)"/><rect x="20" y="24" width="6" height="22" rx="1.5" fill="rgba(91,143,255,.85)"/><rect x="30" y="28" width="6" height="18" rx="1.5" fill="rgba(226,74,74,.75)"/><rect x="40" y="20" width="6" height="26" rx="1.5" fill="rgba(255,200,50,.75)"/><text x="8" y="54" fill="rgba(74,226,74,.8)" fontFamily="Space Mono" fontSize="7">A</text><text x="22" y="54" fill="rgba(91,143,255,.9)" fontFamily="Space Mono" fontSize="7">C</text><text x="32" y="54" fill="rgba(226,74,74,.8)" fontFamily="Space Mono" fontSize="7">G</text><text x="42" y="54" fill="rgba(255,200,50,.8)" fontFamily="Space Mono" fontSize="7">T</text></svg>,
};

export default function Services() {
  useReveal();
  const [active, setActive] = useState(SERVICE_TABS[0].id);

  const tab = SERVICE_TABS.find(t => t.id === active)!;
  const detail = DETAIL[active];

  return (
    <section className={styles.services} id="services">

      <div className="section-header reveal-up">
        <div className="section-eyebrow">
          <span className="eyebrow-line" />
          <span>Portofoli Diagnostik</span>
        </div>
        <h2 className="section-title">
          Çdo Dimension<br /><em>i Shëndetit Tuaj</em>
        </h2>
        <p className="section-sub">
          Shërbime laboratorike gjithëpërfshirëse që mbulojnë të gjithë spektrin klinik,
          të fuqizuara nga platformat analitike të gjeneratës së re.
        </p>
      </div>

      <div className={`${styles.shell} reveal-up`} style={{ '--delay': '0.15s' } as React.CSSProperties}>

        <div className={styles.tabs} role="tablist">
          {SERVICE_TABS.map(t => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              className={`${styles.tab}${active === t.id ? ` ${styles.tabActive}` : ''}`}
              onClick={() => setActive(t.id)}
            >
              <span className={styles.tabNum}>{t.num}</span>
              <span className={styles.tabLabel}>{t.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.panel} key={active}>
          <div className={styles.panelLeft}>
            <div className={styles.panelIcon}>{ICONS[active]}</div>
            <h3 className={styles.panelTitle}>{tab.title.replace('\n', ' ')}</h3>
            <p className={styles.panelDesc}>{tab.desc}</p>
            <div className={styles.panelTurnaround}>
              <svg viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.1"/>
                <path d="M7 4.5V7.2l1.5 1.1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
              {detail.turnaround}
            </div>
            <p className={styles.panelNote}>{detail.note}</p>
            <a href="#booking" className={styles.itemCta} style={{ marginTop: 'auto' }}>
              Rezervo Testin
              <svg viewBox="0 0 18 18" fill="none">
                <path d="M4 9h10M9 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className={styles.panelRight}>
            <div className={styles.panelStat}>
              <span className={styles.statVal}>{detail.stat.val}</span>
              <span className={styles.statLbl}>{detail.stat.label}</span>
            </div>
            <div className={styles.panelTests}>
              {detail.tests.map(t => (
                <span key={t} className={styles.testItem}>{t}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
