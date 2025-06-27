import type {Metadata} from 'next';
import './globals.css';
import { cn } from "@/lib/utils";
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'ProcurLink',
  description: 'A professional Procurement Partner Portal to connect businesses with service providers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased min-h-screen flex flex-col', 'font-sans')}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
