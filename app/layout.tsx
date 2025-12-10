import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Purrfect Capture',
  description: 'Snap it. Save it. Purrfect it. Screenshot with purrfection—no claws attached.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Purrfect Capture',
    description: 'Snap it. Save it. Purrfect it.',
    url: 'https://purrfectcapture.com',
    siteName: 'Purrfect Capture',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Purrfect Capture - Screenshot tool with a cute cat',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purrfect Capture',
    description: 'Snap it. Save it. Purrfect it.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
