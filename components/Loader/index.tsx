'use client';
import { useLoader } from '@/hooks/useLoader';
import styles from './styles.module.css';

export default function Loader() {
  useLoader();

  return (
    <div className={styles.loader} id="loader">
      <div className={styles.inner}>
        <img
          src="/Omega Behance Presentation-37.svg"
          alt="OMEGA Laboratories"
          className={styles.mark}
        />
        <div className={styles.bar}>
          <div className={styles.barFill} id="loader-bar" />
        </div>
      </div>
    </div>
  );
}
