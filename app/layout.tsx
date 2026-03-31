import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Aditya - Builder & Trader',
  description: 'Building trading bots and exploring crypto market microstructure.',
  openGraph: {
    title: 'Aditya - Builder & Trader',
    description: 'Building trading bots and exploring crypto market microstructure.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Header />
        <main className="py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
