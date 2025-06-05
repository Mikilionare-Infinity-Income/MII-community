import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mikilionaire Infinity Income ",
  description:
    "Mikilionaire Infinity Income is a private investment firm based in Zimbabwe. We invest in real estate, private equity, and high-growth opportunities with a long-term, strategic mindset.",
  keywords: [
    "Mikilionaire",
    "Mikilionaire Infinity Income",
    "private investment firm",
    "Zimbabwe investment",
    "real estate investment",
    "private equity Zimbabwe",
    "long-term investments",
    "strategic investments",
    "Zimbabwe real estate",
    "private investments",
    "investment Zimbabwe",
    "real estate Harare",
    "private equity firm",
    "Zimbabwe investors",
    "capital investment",
    "infinity income",
  ],
  metadataBase: new URL("https://mikilionaire.com"),
  openGraph: {
    title: "Mikilionaire Infinity Income",
    description:
      "Building long-term value through strategic investments in real estate and other emerging opportunities in Zimbabwe and beyond.",
    url: "https://mikilionaire.com",
    siteName: "Mikilionaire Infinity Income",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mikilionaire Infinity Income – Private Investments Zimbabwe",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikilionaire Infinity Income",
    description:
      "Strategic capital investments in Zimbabwe and beyond – real estate, equity, and sustainable growth.",
    images: ["/og-image.png"],
  },
  applicationName: "Mikilionaire Infinity Income",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Mikilionaire" />
      </head>
      <body className={`antialiased bg-white text-black`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
