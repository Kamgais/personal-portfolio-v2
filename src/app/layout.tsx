import type { Metadata } from "next";

import "./globals.css";

import { Inter } from 'next/font/google'
import Footer from "@/components/common/footer";

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
        className={`${inter.className} bg-gray-50 flex flex-col gap-25 min-h-screen`}
      >
       <main className="mx-auto w-[90vw] md:w-[80vw] lg:w-[50vw]   min-h-screen">
       {children}
       </main>
       <Footer/>
      </body>
    </html>
  );
}
