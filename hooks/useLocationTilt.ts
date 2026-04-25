'use client';
import { useEffect } from 'react';

export function useLocationTilt() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const cards = document.querySelectorAll<HTMLElement>('.loc-card');
    if (!cards.length) return;

    const MAX_TILT = 12;

    cards.forEach((card) => {
      const inner = card.querySelector<HTMLElement>('.loc-card-inner');
      if (!inner) return;

      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        inner.style.transform = `rotateX(${-y * MAX_TILT}deg) rotateY(${x * MAX_TILT}deg) translateZ(16px)`;
        inner.style.transition = 'box-shadow 0.4s, border-color 0.4s';
        const mx = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1) + '%';
        const my = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1) + '%';
        inner.style.setProperty('--mx', mx);
        inner.style.setProperty('--my', my);
      };

      const onLeave = () => {
        inner.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
        inner.style.transition = 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s, border-color 0.4s';
      };

      const onEnter = () => {
        inner.style.transition = 'box-shadow 0.4s, border-color 0.4s';
      };

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      card.addEventListener('mouseenter', onEnter);
    });
  }, []);
}
