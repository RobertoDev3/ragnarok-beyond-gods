import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Ragnarok Beyond Gods',
  description: 'Site oficial do servidor privado Ragnarok Beyond Gods.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className='text-foreground bg-gray-800'>{children}</body>
    </html>
  );
}
