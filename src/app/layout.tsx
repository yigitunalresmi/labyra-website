import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Labyra | Is Yazilimi Cozumleri",
    template: "%s | Labyra",
  },
  description:
    "Labyra, isletmelerin urun, barkod ve etiket yonetimini kolaylastiran profesyonel masaustu yazilim cozumleri sunar.",
  keywords: [
    "barkod yazilimi",
    "etiket basma",
    "urun yonetimi",
    "stok yonetimi",
    "barkod okuyucu",
    "etiket tasarimi",
    "CSV import",
    "toplu baski",
    "labyra",
    "labyra label",
  ],
  authors: [{ name: "Labyra" }],
  creator: "Labyra",
  metadataBase: new URL("https://labyra.co"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://labyra.co",
    siteName: "Labyra",
    title: "Labyra | Is Yazilimi Cozumleri",
    description:
      "Urun, barkod ve etiket yonetimini kolaylastiran profesyonel masaustu yazilim.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labyra | Is Yazilimi Cozumleri",
    description:
      "Urun, barkod ve etiket yonetimini kolaylastiran profesyonel masaustu yazilim.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
