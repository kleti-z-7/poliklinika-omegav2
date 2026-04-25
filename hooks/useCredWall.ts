'use client';
import { useEffect } from 'react';

export function useCredWall() {
  useEffect(() => {
    const slabs = document.querySelectorAll<HTMLElement>('.cred-slab');
    if (!slabs.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const slab = e.target as HTMLElement;
            const idx = Array.from(slabs).indexOf(slab);
            setTimeout(() => slab.classList.add('cred-revealed'), idx * 90);
            io.unobserve(slab);
          }
        });
      },
      { threshold: 0.2 }
    );
    slabs.forEach((s) => io.observe(s));

    if (!window.matchMedia('(pointer: fine)').matches) return () => io.disconnect();

    const MAX_TILT = 12;
    const rafs = new Map<HTMLElement, number>();

    slabs.forEach((slab) => {
      let tRX = 0, tRY = 0, cRX = 0, cRY = 0;

      const onMove = (e: MouseEvent) => {
        const r = slab.getBoundingClientRect();
        tRY = ((e.clientX - r.left) / r.width - 0.5) * MAX_TILT;
        tRX = -((e.clientY - r.top) / r.height - 0.5) * MAX_TILT;

        const foil = slab.querySelector<HTMLElement>('.cred-slab-foil');
        if (foil) {
          const px = (((e.clientX - r.left) / r.width) * 100).toFixed(1);
          const py = (((e.clientY - r.top) / r.height) * 100).toFixed(1);
          foil.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(122,171,255,0.14) 0%, rgba(91,143,255,0.06) 30%, transparent 65%)`;
        }
      };

      const onEnter = () => {
        cancelAnimationFrame(rafs.get(slab)!);
        function animate() {
          cRX += (tRX - cRX) * 0.1;
          cRY += (tRY - cRY) * 0.1;
          slab.style.transform = `perspective(1000px) rotateX(${cRX.toFixed(2)}deg) rotateY(${cRY.toFixed(2)}deg) translateY(-8px) scale(1.025)`;
          rafs.set(slab, requestAnimationFrame(animate));
        }
        animate();
      };

      const onLeave = () => {
        cancelAnimationFrame(rafs.get(slab)!);
        tRX = 0; tRY = 0;
        const foil = slab.querySelector<HTMLElement>('.cred-slab-foil');
        if (foil) foil.style.background = '';
        function settle() {
          cRX += (0 - cRX) * 0.13;
          cRY += (0 - cRY) * 0.13;
          slab.style.transform = `perspective(1000px) rotateX(${cRX.toFixed(2)}deg) rotateY(${cRY.toFixed(2)}deg) translateY(0) scale(1)`;
          if (Math.abs(cRX) > 0.04 || Math.abs(cRY) > 0.04) {
            rafs.set(slab, requestAnimationFrame(settle));
          } else {
            slab.style.transform = '';
          }
        }
        settle();
      };

      slab.addEventListener('mousemove', onMove);
      slab.addEventListener('mouseenter', onEnter);
      slab.addEventListener('mouseleave', onLeave);
    });

    return () => {
      io.disconnect();
      rafs.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);
}
