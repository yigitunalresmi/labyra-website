import type { Metadata } from "next";
import { Mail, MapPin, Clock, CalendarDays } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Labyra ile iletişime geçin. Demo talep edin veya sorularınızı sorun.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Bizimle{" "}
                <span className="text-gold-gradient">iletişime geçin</span>
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-10">
                Demo talep edin, sorularınızı sorun veya önerilerinizi paylaşın.
                Size en kısa sürede döneceğiz.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tag-bg flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-posta</h3>
                    <p className="text-sm text-muted">info@labyra.co</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tag-bg flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Çalışma Saatleri</h3>
                    <p className="text-sm text-muted">Pazartesi - Cuma, 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tag-bg flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Konum</h3>
                    <p className="text-sm text-muted">İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-surface border border-border rounded-2xl p-8 md:p-10">
              <h2 className="text-xl font-bold mb-6">Demo Talep Formu</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ad Soyad</label>
                    <input
                      type="text"
                      placeholder="Adınız"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Şirket</label>
                    <input
                      type="text"
                      placeholder="Şirket adınız"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">E-posta</label>
                  <input
                    type="email"
                    placeholder="ornek@sirket.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Telefon</label>
                  <input
                    type="tel"
                    placeholder="+90 5XX XXX XX XX"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">İlgilendiğiniz Plan</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all">
                    <option value="">Seçin</option>
                    <option value="trial">Trial (Ücretsiz Deneme)</option>
                    <option value="lite">Lite</option>
                    <option value="pro">Pro</option>
                    <option value="enterprise">Kurumsal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mesajınız</label>
                  <textarea
                    rows={4}
                    placeholder="Nasıl yardımcı olabiliriz?"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shimmer w-full bg-cta text-white font-medium rounded-xl px-6 py-3.5 hover:bg-cta-hover transition-colors"
                >
                  Gönder
                </button>
                <p className="text-xs text-muted text-center">
                  Bilgileriniz gizli tutulur ve üçüncü taraflarla paylaşılmaz.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALENDLY ── */}
      <section className="pb-20 md:pb-32 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto pt-20 mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark bg-tag-bg rounded-full px-4 py-1.5 mb-6">
              <CalendarDays size={15} />
              Demo Randevusu
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Hemen bir{" "}
              <span className="text-gold-gradient">demo ayarlayın</span>
            </h2>
            <p className="text-muted text-lg">
              Size uygun bir zaman seçin, 30 dakikada Labyra Label&apos;ı birlikte inceleyelim.
            </p>
          </div>

          <CalendlyEmbed />
        </div>
      </section>
    </>
  );
}
