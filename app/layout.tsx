import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq" className={archivo.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Wide:wght@400;500;600;700&display=swap"
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
