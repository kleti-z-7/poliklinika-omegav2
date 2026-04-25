'use client';
import { useEffect } from 'react';

export function useMagnetic() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const btns = document.querySelectorAll<HTMLElement>('.btn-primary, .nav-cta');
    const rafs = new Map<HTMLElement, number>();
    const positions = new Map<HTMLElement, { tx: number; ty: number; cx: number; cy: number }>();
    const rects = new Map<HTMLElement, DOMRect>();

    btns.forEach((btn) => {
      positions.set(btn, { tx: 0, ty: 0, cx: 0, cy: 0 });

      const onEnter = () => {
        rects.set(btn, btn.getBoundingClientRect());
        function animate() {
          const p = positions.get(btn)!;
          p.cx += (p.tx - p.cx) * 0.16;
          p.cy += (p.ty - p.cy) * 0.16;
          btn.style.transform = `translate(${p.cx.toFixed(2)}px, ${p.cy.toFixed(2)}px)`;
          rafs.set(btn, requestAnimationFrame(animate));
        }
        cancelAnimationFrame(rafs.get(btn)!);
        animate();
      };

      const onMove = (e: MouseEvent) => {
        const rect = rects.get(btn);
        if (!rect) return;
        const bx = rect.left + rect.width / 2;
        const by = rect.top + rect.height / 2;
        const p = positions.get(btn)!;
        p.tx = (e.clientX - bx) * 0.28;
        p.ty = (e.clientY - by) * 0.28;
      };

      const onLeave = () => {
        const p = positions.get(btn)!;
        p.tx = 0;
        p.ty = 0;
        cancelAnimationFrame(rafs.get(btn)!);
        function settle() {
          p.cx += (0 - p.cx) * 0.18;
          p.cy += (0 - p.cy) * 0.18;
          btn.style.transform = `translate(${p.cx.toFixed(2)}px, ${p.cy.toFixed(2)}px)`;
          if (Math.abs(p.cx) > 0.1 || Math.abs(p.cy) > 0.1) {
            rafs.set(btn, requestAnimationFrame(settle));
          } else {
            btn.style.transform = '';
          }
        }
        settle();
      };

      btn.addEventListener('mouseenter', onEnter);
      btn.addEventListener('mousemove', onMove);
      btn.addEventListener('mouseleave', onLeave);
    });

    return () => {
      rafs.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);
}
