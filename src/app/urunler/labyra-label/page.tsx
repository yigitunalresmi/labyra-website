import type { Metadata } from "next";
import Link from "next/link";
import {
  Package, Tags, Printer, ScanBarcode, FileSpreadsheet,
  CreditCard, ArrowRight, CheckCircle2, Monitor, Database,
  Layers, BarChart3, Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Labyra Label — Ürün, Barkod ve Etiket Yönetimi",
  description: "Binlerce ürünü yönetin, profesyonel etiketler tasarlayın, toplu baskı yapın. Windows masaüstü uygulaması.",
};

const CAPABILITIES = [
  {
    icon: Package,
    title: "8.900+ Ürün Yönetimi",
    desc: "Kategorize edin, arayın, filtreleyin. Toplu CSV/Excel import ve export.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Tags,
    title: "Sürükle-Bırak Etiket Tasarımı",
    desc: "Barkod, QR kod, fiyat, ürün adı — istediğiniz bilgiyi sürükleyip bırakın.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Printer,
    title: "Toplu Baskı & Barkod Tarama",
    desc: "Barkod okuyucu ile tarayın, anında yazdırın. Seri baskı modu.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: ScanBarcode,
    title: "Fiyat Tarayıcı",
    desc: "Barkod okutarak anlık fiyat güncelleme. Değişiklik geçmişi.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: FileSpreadsheet,
    title: "Akıllı CSV Import",
    desc: "6 adımlı wizard: encoding algılama, önizleme, sütun eşleştirme, rollback.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: CreditCard,
    title: "Ürün Kartı Üretici",
    desc: "Kategoriye özel şablonlar ile otomatik ürün bilgi kartları.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Database,
    title: "Yerel Veritabanı",
    desc: "SQLite tabanlı, internet gerektirmez. Verileriniz sizde kalır.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Layers,
    title: "Şablon Versiyonlama",
    desc: "Etiket şablonlarını versiyonlayın, önceki versiyonlara dönün.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Analitik",
    desc: "Ürün istatistikleri, veri kalitesi, son işlemler bir bakışta.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

const BARCODE_TYPES = [
  "EAN-13", "EAN-8", "Code128", "Code39", "UPC-A", "ISBN", "QR Code",
];

export default function LabyraLabelPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-gold-dark bg-tag-bg rounded-full px-4 py-1.5 mb-6">
              Masaüstü Uygulaması — Windows 10/11
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Labyra <span className="text-gold-gradient">Label</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
              Ürün, barkod ve etiket yönetimini tek bir masaüstü uygulamasında
              birleştirin. İnternet gerektirmez, verileriniz sizde kalır.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/iletisim"
                className="btn-shimmer inline-flex items-center gap-2 bg-cta text-white font-medium rounded-xl px-7 py-3.5 hover:bg-cta-hover transition-colors"
              >
                <Download size={18} />
                Ücretsiz Dene
              </Link>
              <Link
                href="/fiyatlandirma"
                className="inline-flex items-center gap-2 border border-border text-text font-medium rounded-xl px-7 py-3.5 hover:bg-surface transition-colors"
              >
                Fiyatları Gör
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshot Area */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="bg-[#0A0A0A] rounded-2xl border border-[#2a2a2a] p-4 md:p-6 shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#fdbc40]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="aspect-[16/9] bg-[#111] rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <svg viewBox="0 0 32 32" className="w-10 h-10 text-gold" fill="currentColor">
                    <rect x="2" y="4" width="2" height="24" rx="1" />
                    <rect x="6" y="4" width="3" height="24" rx="1" />
                    <rect x="11" y="4" width="1.5" height="24" rx="0.75" />
                    <rect x="14" y="4" width="3" height="24" rx="1" />
                    <rect x="19" y="4" width="2" height="24" rx="1" />
                    <rect x="23" y="4" width="1.5" height="24" rx="0.75" />
                    <rect x="26" y="4" width="3" height="24" rx="1" />
                  </svg>
                  <span className="text-white font-bold tracking-widest text-2xl">LABYRA</span>
                  <span className="text-gold text-sm font-medium">LABEL</span>
                </div>
                <p className="text-[#555] text-sm">Dashboard | 8,902 ürün | Kategoriler | Veri Kalitesi | Son İşlemler</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Tek uygulama, sınırsız yetenek
            </h2>
            <p className="text-muted text-lg">
              İş akışınızı hızlandıran 9 temel modül.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="group p-8 rounded-2xl border border-border bg-bg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${cap.color} flex items-center justify-center mb-5`}>
                  <cap.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barcode Types */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Desteklenen barkod türleri
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Uluslararası standartlarda barkod ve QR kod desteği.
              </p>
              <div className="flex flex-wrap gap-3">
                {BARCODE_TYPES.map((type) => (
                  <span
                    key={type}
                    className="inline-flex items-center gap-2 text-sm bg-tag-bg border border-border rounded-lg px-4 py-2"
                  >
                    <CheckCircle2 size={16} className="text-gold-dark" />
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Ürün Yönetimi", value: "8,900+" },
                { label: "Desteklenen Format", value: "7+" },
                { label: "Toplu Import", value: "CSV, XLSX" },
                { label: "Encoding Desteği", value: "UTF-8, ISO, Win-1254" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between p-5 bg-surface rounded-xl border border-border"
                >
                  <span className="text-muted text-sm">{stat.label}</span>
                  <span className="font-semibold text-gold-gradient">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hemen başlayın
          </h2>
          <p className="text-muted text-lg mb-8 max-w-lg mx-auto">
            14 gün ücretsiz deneme. Kredi kartı gerekmez.
          </p>
          <Link
            href="/iletisim"
            className="btn-shimmer inline-flex items-center gap-2 bg-cta text-white font-medium rounded-xl px-7 py-3.5 hover:bg-cta-hover transition-colors"
          >
            Demo Talep Et
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
