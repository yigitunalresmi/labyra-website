import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Iletisim",
  description: "Labyra ile iletisime gecin. Demo talep edin veya sorularinizi sorun.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Bizimle{" "}
              <span className="text-gold-gradient">iletisime gecin</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-10">
              Demo talep edin, sorularinizi sorun veya onerilerinizi paylasin.
              Size en kisa surede donecegiz.
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
                  <h3 className="font-semibold mb-1">Calisma Saatleri</h3>
                  <p className="text-sm text-muted">Pazartesi - Cuma, 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-tag-bg flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Konum</h3>
                  <p className="text-sm text-muted">Istanbul, Turkiye</p>
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
                    placeholder="Adiniz"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sirket</label>
                  <input
                    type="text"
                    placeholder="Sirket adiniz"
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
                <label className="block text-sm font-medium mb-2">Ilgilendiginiz Plan</label>
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all">
                  <option value="">Secin</option>
                  <option value="trial">Trial (Ucretsiz Deneme)</option>
                  <option value="lite">Lite</option>
                  <option value="pro">Pro</option>
                  <option value="enterprise">Kurumsal</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mesajiniz</label>
                <textarea
                  rows={4}
                  placeholder="Nasil yardimci olabiliriz?"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-shimmer w-full bg-cta text-white font-medium rounded-xl px-6 py-3.5 hover:bg-cta-hover transition-colors"
              >
                Gonder
              </button>
              <p className="text-xs text-muted text-center">
                Bilgileriniz gizli tutulur ve ucuncu taraflarla paylasilmaz.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
