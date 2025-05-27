import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  title: "Mikilionaire Infinity Income | Private Investment Company Zimbabwe",
  description:
    "Mikilionaire Infinity Income is a private investment firm based in Zimbabwe. We invest in real estate, private equity, and high-growth opportunities with a long-term, strategic mindset.",
  keywords: [
    "Mikilionaire",
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
        url: "/og-image.jpg", // Update with your actual OG image path
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
    images: ["/og-image.jpg"], // Update this too
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-white text-black">{children}</body>
    </html>
  );
}
