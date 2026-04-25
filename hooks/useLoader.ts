'use client';
import { useEffect } from 'react';

export function useLoader() {
  useEffect(() => {
    const loader = document.getElementById('loader');
    const loaderBar = document.getElementById('loader-bar');
    if (!loader || !loaderBar) return;

    let progress = 0;
    const tick = setInterval(() => {
      progress += Math.random() * 8 + 2;
      if (progress >= 100) {
        progress = 100;
        clearInterval(tick);
        loaderBar.style.width = '100%';
        setTimeout(() => {
          loader.classList.add('loader--done');
          document.body.dispatchEvent(new CustomEvent('site:ready'));
        }, 700);
      } else {
        loaderBar.style.width = progress + '%';
      }
    }, 80);

    return () => clearInterval(tick);
  }, []);
}
