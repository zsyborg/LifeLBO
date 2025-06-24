import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato, Raleway, Ubuntu_Sans } from "next/font/google";
import "./globals.css";
import "./responsive.css";

import { ThemeModeScript, ThemeConfig } from "flowbite-react";

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  weight: "300",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LifeIsSpeed Pvt. Ltd.",
  description: "Lifeis Concept is the result of business and life experience of our founder. He has a spectacular life story that involves unrelenting rigorous work, the work that involves interaction with many sides of human activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntuSans.variable} ${geistMono.variable} antialiased`}
      >

        <ThemeConfig dark={false} />
        {children}
      </body>
    </html>
  );
}
