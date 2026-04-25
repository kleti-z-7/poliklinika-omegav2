'use client';
import { useEffect } from 'react';

export function useNavScroll() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle('nav--scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
