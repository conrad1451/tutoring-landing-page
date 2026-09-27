// app/layout.tsx

// CHQ: Gemini AI refactored

import type { Metadata } from "next";
import Script from "next/script";
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
const GA_MEASUREMENT_ID = "G-XXXXXXX"; // replace with your GA4 ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yoslw5uf68");
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}
