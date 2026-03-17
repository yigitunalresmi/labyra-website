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
    default: "Labyra | İş Yazılımı Çözümleri",
    template: "%s | Labyra",
  },
  description:
    "Labyra, işletmelerin ürün, barkod ve etiket yönetimini kolaylaştıran profesyonel masaüstü yazılım çözümleri sunar.",
  keywords: [
    "barkod yazılımı",
    "etiket basma",
    "ürün yönetimi",
    "stok yönetimi",
    "barkod okuyucu",
    "etiket tasarımı",
    "CSV import",
    "toplu baskı",
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
    title: "Labyra | İş Yazılımı Çözümleri",
    description:
      "Ürün, barkod ve etiket yönetimini kolaylaştıran profesyonel masaüstü yazılım.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labyra | İş Yazılımı Çözümleri",
    description:
      "Ürün, barkod ve etiket yönetimini kolaylaştıran profesyonel masaüstü yazılım.",
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
