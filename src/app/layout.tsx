import type { Metadata } from "next";

import "./globals.css";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Cyril Kamgais",
  description: "A personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50`}
      >
       <main className="mx-auto w-[50vw]  min-h-screen">
       {children}
       </main>
      </body>
    </html>
  );
}
