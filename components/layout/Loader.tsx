'use client';
import { useLoader } from '@/hooks/useLoader';

export default function Loader() {
  useLoader();

  return (
    <div className="loader" id="loader">
      <div className="loader-inner">
        <img
          src="/Omega Behance Presentation-37.svg"
          alt="OMEGA Laboratories"
          className="loader-mark"
        />
        <div className="loader-bar">
          <div className="loader-bar-fill" id="loader-bar" />
        </div>
      </div>
    </div>
  );
}
