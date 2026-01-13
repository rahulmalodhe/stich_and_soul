import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Cormorant,
  Inter,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stich and Soul | Premium Menswear for the Modern Gentleman",
  description:
    "Stich and Soul - Exclusive menswear brand for ages 15-50. Discover premium clothing that combines traditional craftsmanship with contemporary design. Shop high-quality, stylish mens clothing online.",
  keywords: [
    "menswear",
    "men's clothing",
    "premium menswear",
    "exclusive mens clothing",
    "men's fashion",
    "quality menswear",
    "mens clothing brand",
    "contemporary menswear",
    "men's apparel",
  ],
  openGraph: {
    title: "Stich and Soul | Premium Menswear",
    description:
      "Where Craftsmanship Meets Character. Premium menswear designed for the modern gentleman.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${cormorant.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
