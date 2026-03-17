import type { Metadata } from "next";
import { Target, Eye, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkimizda",
  description: "Labyra'nin hikayesi, misyonu ve vizyonu. Is yaziliminin yaninda duruyoruz.",
};

export default function AboutPage() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Is yaziliminin onunde degil,{" "}
            <span className="text-gold-gradient">yaninda duruyoruz</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Labyra, isletmelerin gunluk operasyonlarini kolaylastirmak icin
            kuruldu. Karmasik surecler yerine sade ve guclu araclar sunuyoruz.
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
              Her isletmenin is sureclerini sadeleştirmek
            </h2>
            <p className="text-white/70 leading-relaxed">
              Isletmelerin urun yonetimi, etiketleme ve barkod islemlerini
              minimum adimla, maksimum verimlilikle yapmalarini sagliyoruz.
              Teknolojinin karmasikligi kullaniciya yansimamali.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-10 md:p-12">
            <div className="w-12 h-12 rounded-xl bg-tag-bg flex items-center justify-center mb-6">
              <Eye size={24} className="text-gold-dark" />
            </div>
            <span className="text-xs font-medium text-muted uppercase tracking-wider">Vizyon</span>
            <h2 className="text-2xl font-bold mt-2 mb-4">
              Her isletme en iyi yazilima erisebilmeli
            </h2>
            <p className="text-muted leading-relaxed">
              Sinif farki olmaksizin, kucuk esnaftan buyuk sirketlere kadar
              herkesin profesyonel is araclarina ulasabilecegi bir ekosistem
              olusturuyoruz.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-10 text-center">Degerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Sadelik",
                desc: "Arayuz degil, sonuc. Her ozellik minimum tiklamayla erisilebilir olmali.",
              },
              {
                icon: Users,
                title: "Kullanici Odaklilik",
                desc: "Yazilim kullaniciya hizmet eder, tersi degil. Gercek is akislarindan ogreniyoruz.",
              },
              {
                icon: Target,
                title: "Surekli Gelisim",
                desc: "Her guncelleme, kullanicilarimizin geri bildirimlerinden dogar. Dinleriz, gelistiririz.",
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
          <h2 className="text-2xl font-bold mb-10 text-center">Yolculugumuz</h2>
          <div className="space-y-8">
            {[
              { year: "2025", event: "Labyra Scan olarak ilk versiyon gelistirildi" },
              { year: "2026 Q1", event: "Labyra Label olarak yeniden markalandi" },
              { year: "2026 Q1", event: "Web SaaS'tan Windows masaustu uygulamasina gecis" },
              { year: "2026 Q2", event: "Labyra Label v1.0 — Halka acik ilk surum" },
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
