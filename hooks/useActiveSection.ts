'use client';
import { useEffect } from 'react';

export function useActiveSection() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
    if (!sections.length || !navLinks.length) return;

    function setActive(id: string) {
      navLinks.forEach((link) => {
        link.classList.toggle('nav-link--active', link.getAttribute('href') === `#${id}`);
      });
    }

    function onScroll() {
      const mid = window.innerHeight * 0.25;
      let current = sections[0].id;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= mid) current = section.id;
      }
      setActive(current);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
