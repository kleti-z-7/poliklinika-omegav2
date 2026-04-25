'use client';
import { useEffect } from 'react';

export function useLocationTilt() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const cards = document.querySelectorAll<HTMLElement>('.loc-card');
    if (!cards.length) return;

    cards.forEach((card) => {
      const inner = card.querySelector<HTMLElement>('.loc-card-inner');
      const foil  = card.querySelector<HTMLElement>('.loc-card-foil');
      if (!inner) return;

      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const px = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
        const py = (((e.clientY - rect.top)  / rect.height) * 100).toFixed(1);
        if (foil) {
          foil.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(122,171,255,0.18) 0%, rgba(91,143,255,0.07) 35%, transparent 65%)`;
        }
        inner.style.setProperty('--mx', px + '%');
        inner.style.setProperty('--my', py + '%');
      };

      const onEnter = () => {
        if (foil) foil.style.opacity = '1';
      };

      const onLeave = () => {
        if (foil) {
          foil.style.opacity = '0';
          foil.style.background = '';
        }
      };

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);
    });
  }, []);
}
