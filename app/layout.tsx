// CHQ: Gemini AI refactored

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Math Tutoring | Master Algebra, Calculus & Beyond",
  description: "Personalized online math tutoring for Algebra 1, Algebra 2, and AP Calculus AB. Boost grades, build confidence, and master complex concepts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}