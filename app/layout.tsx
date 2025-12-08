import type { Metadata } from 'next';
import './globals.css';

export const metadata = {
  title: 'Purrfect Capture',
  description:
    'The purrfect way to screenshot—fast, intuitive, and infused with a little meowgic in every snap.',
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
