import type { Metadata } from "next";
import { Target, Eye, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Labyra'nın hikayesi, misyonu ve vizyonu. İş yazılımının yanında duruyoruz.",
};

export default function AboutPage() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            İş yazılımının önünde değil,{" "}
            <span className="text-gold-gradient">yanında duruyoruz</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Labyra, işletmelerin günlük operasyonlarını kolaylaştırmak için
            kuruldu. Karmaşık süreçler yerine sade ve güçlü araçlar sunuyoruz.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-cta text-white rounded-2xl p-10 md:p-12">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <span className="text-xs font-medium text-white/50 uppercase tracking-wider">Misyon</span>
            <h2 className="text-2xl font-bold mt-2 mb-4">
              Her işletmenin iş süreçlerini sadeleştirmek
            </h2>
            <p className="text-white/70 leading-relaxed">
              İşletmelerin ürün yönetimi, etiketleme ve barkod işlemlerini
              minimum adımla, maksimum verimlilikle yapmalarını sağlıyoruz.
              Teknolojinin karmaşıklığı kullanıcıya yansımamalı.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-10 md:p-12">
            <div className="w-12 h-12 rounded-xl bg-tag-bg flex items-center justify-center mb-6">
              <Eye size={24} className="text-gold-dark" />
            </div>
            <span className="text-xs font-medium text-muted uppercase tracking-wider">Vizyon</span>
            <h2 className="text-2xl font-bold mt-2 mb-4">
              Her işletme en iyi yazılıma erişebilmeli
            </h2>
            <p className="text-muted leading-relaxed">
              Sınıf farkı olmaksızın, küçük esnaftan büyük şirketlere kadar
              herkesin profesyonel iş araçlarına ulaşabilceği bir ekosistem
              oluşturuyoruz.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-10 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Sadelik",
                desc: "Arayüz değil, sonuç. Her özellik minimum tıklamayla erişilebilir olmalı.",
              },
              {
                icon: Users,
                title: "Kullanıcı Odaklılık",
                desc: "Yazılım kullanıcıya hizmet eder, tersi değil. Gerçek iş akışlarından öğreniyoruz.",
              },
              {
                icon: Target,
                title: "Sürekli Gelişim",
                desc: "Her güncelleme, kullanıcılarımızın geri bildirimlerinden doğar. Dinleriz, geliştiririz.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-8">
                <div className="w-14 h-14 rounded-2xl bg-tag-bg flex items-center justify-center mx-auto mb-5">
                  <value.icon size={26} className="text-gold-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">Yolculuğumuz</h2>
          <div className="space-y-8">
            {[
              { year: "2025", event: "Labyra Scan olarak ilk versiyon geliştirildi" },
              { year: "2026 Q1", event: "Labyra Label olarak yeniden markalandı" },
              { year: "2026 Q1", event: "Web SaaS'tan Windows masaüstü uygulamasına geçiş" },
              { year: "2026 Q2", event: "Labyra Label v1.0 — Halka açık ilk sürüm" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-20 text-right">
                  <span className="text-sm font-semibold text-gold-dark">{item.year}</span>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-gold border-2 border-bg" />
                  {i < 3 && (
                    <div className="absolute top-3 left-1.5 w-px h-12 bg-border" />
                  )}
                </div>
                <p className="text-sm text-muted pt-0.5">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
