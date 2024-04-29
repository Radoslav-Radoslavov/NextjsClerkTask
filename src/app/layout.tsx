import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from './components/Header';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clerk Dashboard App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn('min-h-screen w-full', inter.className, {
            'debug-screens': process.env.NODE_ENV === 'development',
          })}
        >
          <Header />
          <main className="container mx-auto">
            <div className="justify-center min-h-screen ">
              <div className="mt-10">{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
