'use client';
import { useHeroCanvas }   from '@/hooks/useHeroCanvas';
import { useMagnetic }     from '@/hooks/useMagnetic';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import styles from './styles.module.css';

export default function Hero() {
  useHeroCanvas();
  useMagnetic();
  useSmoothScroll();

  return (
    <section className={styles.hero} id="hero">

      <canvas id="hero-canvas" className={styles.canvas} />
      <div className={styles.scan} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <div className={styles.inner} id="hi-inner">

        <div className={styles.stage}>
          <div className={styles.stageLeft}>

            <div className={styles.preLabel}>
              <span className={styles.preBar} />
              <span className={styles.preTxt}>Diagnostikë e Precizionit</span>
            </div>

            <h1 className={styles.headline}>
              <span className={`${styles.hlLine} ${styles.hl1}`}>
                <span className={styles.hlWord}>SHËNDETI</span>
              </span>
              <span className={`${styles.hlLine} ${styles.hl2}`}>
                <span className={styles.hlWord}>JUAJ</span>
              </span>
              <span className={`${styles.hlLine} ${styles.hl3}`}>
                <span className={styles.hlWord}>NË&nbsp;<em className={styles.hlEm}>REND</em></span>
              </span>
              <span className={`${styles.hlLine} ${styles.hl4}`}>
                <span className={styles.hlWord}>TË&nbsp;PARË.</span>
              </span>
            </h1>

            <p className={styles.headlineSub}>
              Rezultate ditën e njëjtë — laborator i akredituar ndërkombëtarisht
              me mbi 27 vjet ekselencë klinike.
            </p>

          </div>
        </div>

        <div className={styles.bottomSpacer} aria-hidden="true" />

      </div>

      <div className={styles.scroll} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollTxt}>scroll</span>
      </div>

      <div className={styles.clickHint} aria-hidden="true">
        <span className={styles.clickHintTxt}>click anywhere</span>
      </div>

      <div className={styles.bottomFade} aria-hidden="true" />

      <div className={styles.doctor} aria-hidden="true">
        <img
          src="/Omega Behance Presentation-29.svg"
          alt=""
          className={styles.doctorImg}
        />
      </div>

    </section>
  );
}
