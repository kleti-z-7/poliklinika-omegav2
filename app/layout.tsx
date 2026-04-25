import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import Loader from '@/components/layout/Loader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-archivo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OMEGA Laboratories — Diagnostikë e Precizionit',
  description:
    'Diagnostikë e avancuar klinike ndërtuar për mendjet e sakta — ata që kërkojnë të vërtetën, jo thjesht një rezultat. Akredituar ISO 15189 · CAP.',
  keywords: 'laborator, diagnostikë, klinike, Pejë, Kosovë, analizë gjaku, ISO 15189, CAP',
  icons: {
    icon: '/Omega Behance Presentation-37.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq" className={archivo.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Loader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
