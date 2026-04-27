'use client';
import { useReveal } from '@/hooks/useReveal';
import { useJourneyReveal } from '@/hooks/useJourneyReveal';
import styles from './styles.module.css';

function JourneyIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'booking':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'checkin':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'sample':
      return (
        <img src="/Omega Behance Presentation-33.svg" alt="" style={{ width: 48, height: 'auto', display: 'block', filter: 'brightness(0) saturate(100%) invert(52%) sepia(60%) saturate(400%) hue-rotate(190deg) brightness(110%)' }} />
      );
    case 'lab':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M8 24V12l8-4 8 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M13 24v-6h6v6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'results':
      return (
        <svg viewBox="0 0 32 32" fill="none">
          <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 12h12M10 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="24" cy="22" r="5" fill="rgba(91,143,255,0.2)" stroke="currentColor" strokeWidth="1.5" />
          <path d="M22 22l1.5 1.5L26 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

const STEPS = [
  { num: '01', title: 'Rezervo Online', desc: 'Cakto takimin nëpërmjet portalit tonë ose me telefon. Zgjidh testet, lokacionin dhe konfirmo vendin — brenda 2 minutave.', time: '2 min', icon: 'booking' },
  { num: '02', title: 'Mbërri dhe Regjistrohu', desc: 'Paraqit konfirmimin tënd në recepsion. Ekipi ynë i flebotomisë do të të mirëpresë dhe konfirmojë testet — pa letër.', time: '5 min', icon: 'checkin' },
  { num: '03', title: 'Marrja e Mostrës', desc: 'Kryhet nga flebotomistë të certifikuar në dhoma private klinike. Të gjitha mostrat barkodohen dhe regjistrohen në LIMS.', time: '10 min', icon: 'sample' },
  { num: '04', title: 'Analizë Laboratorike', desc: 'Mostrat procesohen në platforma të automatizuara me monitorim QC në kohë reale. Çdo rezultat vlidohet nga ekipi i patologjisë.', time: '2–4 orë', icon: 'lab' },
  { num: '05', title: 'Rezultatet Dorëzohen', desc: 'Dërgesa dixhitale e sigurt te portali yt i pacientit dhe drejtpërdrejt te mjeku. Raportet PDF përfshijnë vlerat referente dhe komentet klinike.', time: 'Ditën e njëjtë', icon: 'results' },
];

export default function Journey() {
  useReveal();
  useJourneyReveal();

  return (
    <section className={styles.journey} id="journey">
      <div className={styles.inner}>
        <div className={`${styles.header} reveal-up`}>
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span>Përvoja e Pacientit</span>
          </div>
          <h2 className="section-title">
            Nga Hapi i Parë<br /><em>deri te Përgjigja Finale</em>
          </h2>
        </div>

        <div className="jt-track">
          <div className="jt-rail"><div className="jt-fill" /></div>
          {STEPS.map((step, i) => (
            <div key={step.num} className={`jt-step ${i % 2 === 0 ? 'jt-step--right' : 'jt-step--left'}`}>
              <div className="jt-col-line">
                <div className="jt-node"><span>{step.num}</span></div>
              </div>
              <div className="jt-card">
                <div className="jt-card-icon"><JourneyIcon icon={step.icon} /></div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
