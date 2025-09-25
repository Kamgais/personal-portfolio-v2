import type { Metadata } from "next";

import "./globals.css";

import { Inter } from 'next/font/google'
import Footer from "@/components/common/footer";
import { ThemeProvider } from "@/contexts/theme-context";
import ThemeToggle from "@/components/ui/theme-toggle";
import LoadingScreen from "@/components/common/loading-screen";

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
        className={`${inter.className} bg-white dark:bg-gray-900 flex flex-col min-h-screen overflow-x-hidden transition-colors duration-300`}
      >
        <ThemeProvider>
          <LoadingScreen />
          <ThemeToggle />
          <main className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 min-h-screen">
            {children}
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
