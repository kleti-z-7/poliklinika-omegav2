'use client';
import { useEffect } from 'react';

export function usePillars() {
  useEffect(() => {
    const pillars = document.querySelectorAll<HTMLElement>('.pillar');
    if (!pillars.length) return;

    // Scroll reveal
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = parseFloat(el.style.getPropertyValue('--delay') || '0');
            setTimeout(() => el.classList.add('p-revealed'), delay * 1000);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    pillars.forEach((p) => io.observe(p));

    // 3D tilt
    if (!window.matchMedia('(pointer: fine)').matches) return () => io.disconnect();

    const MAX_TILT = 8;
    const rafs = new Map<HTMLElement, number>();

    pillars.forEach((card) => {
      let targetRX = 0, targetRY = 0;
      let currentRX = 0, currentRY = 0;

      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        targetRY = ((e.clientX - rect.left) / rect.width - 0.5) * MAX_TILT;
        targetRX = -((e.clientY - rect.top) / rect.height - 0.5) * MAX_TILT;
      };

      const onEnter = () => {
        cancelAnimationFrame(rafs.get(card)!);
        function animate() {
          currentRX += (targetRX - currentRX) * 0.12;
          currentRY += (targetRY - currentRY) * 0.12;
          card.style.transform = [
            `rotateX(${currentRX.toFixed(2)}deg)`,
            `rotateY(${currentRY.toFixed(2)}deg)`,
            `translateY(-4px) scale(1.005)`,
          ].join(' ');
          rafs.set(card, requestAnimationFrame(animate));
        }
        animate();
      };

      const onLeave = () => {
        cancelAnimationFrame(rafs.get(card)!);
        targetRX = 0; targetRY = 0;
        function settle() {
          currentRX += (0 - currentRX) * 0.15;
          currentRY += (0 - currentRY) * 0.15;
          card.style.transform = [
            `rotateX(${currentRX.toFixed(2)}deg)`,
            `rotateY(${currentRY.toFixed(2)}deg)`,
            `translateY(0) scale(1)`,
          ].join(' ');
          if (Math.abs(currentRX) > 0.05 || Math.abs(currentRY) > 0.05) {
            rafs.set(card, requestAnimationFrame(settle));
          } else {
            card.style.transform = '';
          }
        }
        settle();
      };

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);
    });

    return () => {
      io.disconnect();
      rafs.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);
}
