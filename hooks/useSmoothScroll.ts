'use client';
import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const handlers = Array.from(links).map((link) => {
      const handler = (e: Event) => {
        const id = link.getAttribute('href')!.slice(1);
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        const navH = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
        ) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      };
      link.addEventListener('click', handler);
      return { link, handler };
    });

    return () => {
      handlers.forEach(({ link, handler }) => link.removeEventListener('click', handler));
    };
  }, []);
}
