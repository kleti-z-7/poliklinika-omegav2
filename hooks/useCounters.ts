'use client';
import { useEffect } from 'react';

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function animateCounter(el: HTMLElement) {
  const target = parseFloat(el.dataset.target || '0');
  const isFloat = String(target).includes('.');
  const duration = 1800;
  const start = performance.now();

  function step(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const value = target * easeOutExpo(progress);
    el.textContent = isFloat
      ? value.toFixed(1)
      : Math.round(value).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export function useCounters() {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>('.counter');
    if (!counters.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCounter(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
