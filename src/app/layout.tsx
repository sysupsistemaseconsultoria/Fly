import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { QueryProvider } from '@/components/query-provider';

export const metadata: Metadata = {
  title: 'Fly | Flight Deals & Points Optimizer',
  description: 'Buscador de voos com foco em milhas, pontos e datas mais baratas.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
