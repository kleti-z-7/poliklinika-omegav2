'use client';
import { useHeroCanvas }   from '@/hooks/useHeroCanvas';
import { useMagnetic }     from '@/hooks/useMagnetic';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Hero() {
  useHeroCanvas();
  useMagnetic();
  useSmoothScroll();

  return (
    <section className="hero hero--dg" id="hero">

      <canvas id="hero-canvas" className="hi-canvas" />
      <div className="hi-scan" aria-hidden="true" />
      <div className="hi-vignette" aria-hidden="true" />

      <div className="hi-inner" id="hi-inner">

        {/* Centre stage */}
        <div className="hi-stage">
          <div className="hi-stage-left">

            {/* Liquid accent bar + label */}
            <div className="hi-pre-label">
              <span className="hi-pre-bar" />
              <span className="hi-pre-txt">Diagnostikë e Precizionit</span>
            </div>

            <h1 className="hi-headline">
              <span className="hi-hl-line hi-hl-1">
                <span className="hi-hl-word">SHËNDETI</span>
              </span>
              <span className="hi-hl-line hi-hl-2">
                <span className="hi-hl-word">JUAJ</span>
              </span>
              <span className="hi-hl-line hi-hl-3">
                <span className="hi-hl-word">NË&nbsp;<em className="hi-hl-em">REND</em></span>
              </span>
              <span className="hi-hl-line hi-hl-4">
                <span className="hi-hl-word">TË&nbsp;PARË.</span>
              </span>
            </h1>

            <p className="hi-headline-sub">
              Rezultate ditën e njëjtë — laborator i akredituar ndërkombëtarisht
              me mbi 27 vjet ekselencë klinike.
            </p>

          </div>
        </div>

        <div className="hi-bottom-spacer" aria-hidden="true" />

      </div>

      {/* Scroll indicator */}
      <div className="hi-scroll" aria-hidden="true">
        <div className="hi-scroll-line" />
        <span className="hi-scroll-txt">scroll</span>
      </div>

      {/* Click hint */}
      <div className="hi-click-hint" aria-hidden="true">
        <span className="hi-click-hint-txt">click anywhere</span>
      </div>

      <div className="hero-bottom-fade" aria-hidden="true" />

      {/* Doctor illustration */}
      <div className="hi-doctor" aria-hidden="true">
        <img
          src="/Omega Behance Presentation-29.svg"
          alt=""
          className="hi-doctor-img"
        />
      </div>

    </section>
  );
}
