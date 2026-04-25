'use client';
import { useEffect } from 'react';

function buildPerm() {
  const p = new Uint8Array(512);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 256; i++) p[256 + i] = p[i];
  return p;
}
function fade(t: number) { return t * t * t * (t * (t * 6 - 15) + 10); }
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
function grad(h: number, x: number, y: number) {
  const v = [[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];
  const [dx, dy] = v[h & 7];
  return dx * x + dy * y;
}
function noise2D(p: Uint8Array, x: number, y: number) {
  const xi = Math.floor(x) & 255, yi = Math.floor(y) & 255;
  const xf = x - Math.floor(x), yf = y - Math.floor(y);
  const u = fade(xf), vv = fade(yf);
  const aa = p[p[xi]+yi], ab = p[p[xi]+yi+1];
  const ba = p[p[xi+1]+yi], bb = p[p[xi+1]+yi+1];
  return lerp(
    lerp(grad(aa,xf,yf),   grad(ba,xf-1,yf),   u),
    lerp(grad(ab,xf,yf-1), grad(bb,xf-1,yf-1), u),
    vv
  );
}

export function useHeroCanvas() {
  useEffect(() => {
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false })!;
    const perm = buildPerm();

    let W = 0, H = 0, t = 0, raf = 0;

    let rawMx = 0, rawMy = 0;

    interface Particle {
      x: number; y: number; vx: number; vy: number;
      size: number; speed: number; z: number;
      life: number; maxLife: number;
    }
    let particles: Particle[] = [];

    function makeParticle(): Particle {
      const z = 0.3 + Math.random() * 0.7;
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: 0, vy: 0,
        size: (0.5 + Math.random() * 1.2) * z,
        speed: (0.08 + Math.random() * 0.18) * z,
        z,
        life: Math.random() * 300,
        maxLife: 300 + Math.random() * 400,
      };
    }

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      ctx.fillStyle = '#0A2560';
      ctx.fillRect(0, 0, W, H);
      particles = Array.from({ length: 80 }, makeParticle);
    }

    function drawBackground() {
      ctx.fillStyle = '#0B2A6B';
      ctx.fillRect(0, 0, W, H);
    }

    function drawParticles() {
      const mwx = (rawMx+0.5)*W, mwy = 0.5*H;
      for (const p of particles) {
        const angle = noise2D(perm, p.x*0.0008 + t*0.06, p.y*0.0008 + t*0.04) * Math.PI*4;
        const mdx = mwx - p.x, mdy = mwy - p.y;
        const md = Math.sqrt(mdx*mdx + mdy*mdy) + 1;
        const pull = Math.max(0, 1 - md/(W*0.28)) * 0.003;
        p.vx = p.vx*0.88 + Math.cos(angle)*p.speed*0.12 + (mdx/md)*pull;
        p.vy = p.vy*0.88 + Math.sin(angle)*p.speed*0.12 + (mdy/md)*pull;
        p.x += p.vx; p.y += p.vy; p.life++;

        if (p.life >= p.maxLife || p.x < -10 || p.x > W+10 || p.y < -10 || p.y > H+10) {
          Object.assign(p, makeParticle()); continue;
        }

        const alpha = Math.sin((p.life/p.maxLife)*Math.PI) * 0.35 * p.z;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = 'rgba(91,143,255,1)';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function drawScanLines() {
      for (let i = 0; i < 4; i++) {
        const sy = ((t * 28 + i*(H/4)) % H);
        ctx.globalAlpha = 0.018;
        ctx.fillStyle = '#5B8FFF';
        ctx.fillRect(0, sy, W, 1);
      }
      ctx.globalAlpha = 1;
    }

    function render() {
      drawBackground();
      drawParticles();
      drawScanLines();
      t += 0.005;
      raf = requestAnimationFrame(render);
    }

    const onMove = (e: MouseEvent) => {
      rawMx = e.clientX / window.innerWidth - 0.5;
    };

    resize();
    render();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
    };
  }, []);
}
