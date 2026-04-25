'use client';
import { useEffect } from 'react';

export function useJourneyReveal() {
  useEffect(() => {
    const fill = document.querySelector<HTMLElement>('.jt-fill');
    const rail = document.querySelector<HTMLElement>('.jt-rail');
    const steps = document.querySelectorAll<HTMLElement>('.jt-step');
    if (!fill || !rail || !steps.length) return;

    function update() {
      const vh = window.innerHeight;
      const rect = rail!.getBoundingClientRect();
      const scrolled = vh * 0.75 - rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / rect.height));
      fill!.style.height = `${progress * 100}%`;

      steps.forEach((step, i) => {
        if (step.getBoundingClientRect().top < vh * 0.82) {
          const card = step.querySelector<HTMLElement>('.jt-card');
          if (card && !step.classList.contains('jt-visible')) {
            card.style.transitionDelay = `${i * 0.06}s`;
          }
          step.classList.add('jt-visible');
        }
      });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);
}
