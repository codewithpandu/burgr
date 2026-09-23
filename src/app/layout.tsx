import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "BURGR — Burger Segar. Dibuat dengan Cinta.",
  description:
    "Daging sapi juicy, keju leleh, sayuran segar, dan saus rahasia khas kami. Pesan burger favoritmu hari ini.",
  openGraph: {
    title: "BURGR — Burger Segar. Dibuat dengan Cinta.",
    description:
      "Daging sapi juicy, keju leleh, sayuran segar, dan saus rahasia khas kami. Pesan burger favoritmu hari ini.",
    url: "https://burgr-nine.vercel.app/",
    siteName: "BURGR",
    images: [
      {
        url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
        width: 1200,
        height: 630,
        alt: "BURGR — Burger Segar. Dibuat dengan Cinta.",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${bebas.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
