import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { getSiteUrl, siteConfig } from "@/src/config/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = getSiteUrl();

export const metadata: Metadata = {
  metadataBase,
  title: "Kubilay Kendirci | Elektrik ve Elektronik Mühendisliği",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "Kubilay Kendirci",
    "Elektrik ve Elektronik Mühendisliği",
    "elektronik devreler",
    "donanım geliştirme",
    "gömülü sistemler",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: `${siteConfig.name} Portfolyo`,
    title: "Kubilay Kendirci | Elektrik ve Elektronik Mühendisliği",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: "Kubilay Kendirci | Elektrik ve Elektronik Mühendisliği",
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#07111f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
