'use client';
import { useEffect } from 'react';

export function useCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!dot || !follower) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let mx = -100, my = -100;
    let fx = -100, fy = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };
    document.addEventListener('mousemove', onMove);

    function animateFollower() {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      follower!.style.left = fx + 'px';
      follower!.style.top = fy + 'px';
      raf = requestAnimationFrame(animateFollower);
    }
    animateFollower();

    const hoverTargets = 'a, button, [data-tab], label, select, input, .tab-btn, .loc-card, .pillar, .instr-step, .ts-card';
    const els = document.querySelectorAll<HTMLElement>(hoverTargets);
    const addHover = (el: HTMLElement) => {
      const enter = () => dot.classList.add('cursor--hover');
      const leave = () => dot.classList.remove('cursor--hover');
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
      return () => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      };
    };
    const cleanups = Array.from(els).map(addHover);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      cleanups.forEach(fn => fn());
    };
  }, []);
}
