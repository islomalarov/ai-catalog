import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import TheHeader from '@/components/HeaderComponent/TheHeader';
import TheFooter from '@/components/FooterComponent/TheFooter';
import { Analytics } from '@vercel/analytics/react';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'AI Catalogs',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary text-primary-foreground dark:bg-gray-800 dark:text-gray-100`}>
        <div className="container flex flex-col min-h-screen">
          <TheHeader />
          <main className="flex-grow">
            {children}
            <Analytics />
          </main>
          <TheFooter />
        </div>
      </body>
    </html>
  );
}
