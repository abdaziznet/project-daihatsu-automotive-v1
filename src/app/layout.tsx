import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import "../lib/font-awesome"; // import config

export const metadata: Metadata = {
  title: "Daihatsu 2025 | Harga, Promo & Spesifikasi Mobil Terbaru",
  description:
    "Temukan harga dan promo mobil Daihatsu 2025 terbaru. Banyak pilihan mobil keluarga, hemat BBM, dan cocok untuk perjalanan jauh.",
  keywords: [
    "mobil daihatsu 2025",
    "harga mobil daihatsu",
    "promo mobil baru",
    "mobil keluarga",
    "mobil irit",
  ],
  openGraph: {
    title: "Daihatsu 2025",
    description: "Lihat katalog lengkap mobil Daihatsu terbaru 2025.",
    url: "https://www.daihatsuautomotive.com",
    siteName: "Daihatsu Catalog",
    images: [
      {
        url: "https://www.daihatsuautomotive.com/og-image.png", // Ganti dengan gambar OG kamu
        width: 1200,
        height: 630,
        alt: "Gambar Mobil Daihatsu 2025",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.daihatsuautomotive.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <div className="relative flex min-h-screen flex-col">
          {children}
          <Analytics />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
