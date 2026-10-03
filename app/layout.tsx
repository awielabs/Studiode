import type { Metadata } from 'next';
import { Space_Mono, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import DemoSwitcher from '@/components/DemoSwitcher';
import { DemoProvider } from '@/context/DemoContext';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Studio De.PTH — Design for People + Transformative Habitats',
  description:
    'Studio De.PTH is a contemporary architecture and spatial design practice dedicated to people-focused transformative habitats.',
  keywords: [
    'Studio De.PTH',
    'Architecture Studio',
    'Spatial Design',
    'Transformative Habitats',
    'Contemporary Architecture',
    'Mumbai Architecture',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${inter.variable}`}>
      <body>
        <DemoProvider>
          <LoadingScreen />
          <Header />
          <main>{children}</main>
          <Footer />
          <DemoSwitcher />
        </DemoProvider>
      </body>
    </html>
  );
}
