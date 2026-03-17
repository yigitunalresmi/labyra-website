import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  Zap,
  Shield,
  Lightbulb,
  Layers,
  HeartHandshake,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <h1 className="animate-fade-in text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
              İş dünyasının karmaşıklığına{" "}
              <span className="text-gold-gradient">sade bir yanıt</span>
            </h1>

            <p className="animate-fade-in animate-fade-in-delay-1 text-lg md:text-xl text-muted leading-relaxed max-w-xl mb-10">
              Labyra, işletmelerin günlük operasyonlarını sadeleştiren
              profesyonel yazılım çözümleri sunar. Karmaşık süreçler yerine
              sade ve güçlü araçlar.
            </p>

            <div className="animate-fade-in animate-fade-in-delay-2 flex flex-wrap gap-4">
              <Link
                href="/urunler/labyra-label"
                className="btn-shimmer inline-flex items-center gap-2 bg-cta text-white font-medium rounded-xl px-7 py-3.5 hover:bg-cta-hover transition-colors"
              >
                Ürünlerimizi Keşfedin
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 border border-border text-text font-medium rounded-xl px-7 py-3.5 hover:bg-surface transition-colors"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>

          {/* Proof Bar */}
          <div className="animate-fade-in animate-fade-in-delay-3 mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-border bg-surface rounded-2xl border border-border p-8">
            {[
              { value: "%80", label: "Daha az tıklama" },
              { value: "3x", label: "Daha hızlı süreç" },
              { value: "1 gün", label: "Ortalama geçiş süresi" },
            ].map((item) => (
              <div key={item.label} className="text-center px-6">
                <p className="text-3xl md:text-4xl font-bold text-gold-gradient mb-1">
                  {item.value}
                </p>
                <p className="text-sm text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YAKLAŞIMIMIZ ── */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Yaklaşımımız
            </h2>
            <p className="text-muted text-lg">
              Teknolojiyi karmaşıklaştırmadan, işletmelerin gerçek
              ihtiyaçlarına odaklanıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Sadelik",
                desc: "Her özellik minimum adımla erişilebilir. Arayüz değil, sonuç odaklıyız.",
              },
              {
                icon: Layers,
                title: "Entegrasyon",
                desc: "Mevcut iş akışlarınıza uyum sağlayan, öğrenme eğrisi düşük çözümler.",
              },
              {
                icon: HeartHandshake,
                title: "Yanınızdayız",
                desc: "Yazılımın önünde değil, yanında duruyoruz. Gerçek iş akışlarından öğreniyoruz.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl border border-border bg-bg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-tag-bg flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <item.icon size={24} className="text-gold-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÜRÜNÜMÜZ: LABYRA LABEL ── */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-medium text-gold-dark bg-tag-bg rounded-full px-4 py-1.5 mb-6">
                Ürünümüz
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Labyra{" "}
                <span className="text-gold-gradient">Label</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Ürün, barkod ve etiket yönetimini tek bir masaüstü uygulamasında
                birleştirin. İnternet gerektirmez, verileriniz sizde kalır.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  {
                    icon: Monitor,
                    title: "Masaüstü Uygulaması",
                    desc: "İnternet bağlantısı gerektirmez. Verileriniz kendi bilgisayarınızda.",
                  },
                  {
                    icon: Zap,
                    title: "Anlık Performans",
                    desc: "SQLite tabanlı yerel veritabanı ile milisaniye seviyesinde işlem.",
                  },
                  {
                    icon: Shield,
                    title: "Veri Güvenliği",
                    desc: "Buluta veri gönderilmez. Tam kontrol sizde.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-tag-bg flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-gold-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/urunler/labyra-label"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold transition-colors"
              >
                Labyra Label hakkında daha fazla <ArrowRight size={16} />
              </Link>
            </div>

            {/* App Preview */}
            <div className="relative">
              <div className="bg-[#0A0A0A] rounded-2xl border border-[#2a2a2a] p-6 shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#fdbc40]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="aspect-[16/10] bg-[#111] rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      {/* Barcode icon for Label product */}
                      <svg viewBox="0 0 32 32" className="w-8 h-8 text-gold" fill="currentColor">
                        <rect x="2" y="4" width="2" height="24" rx="1" />
                        <rect x="6" y="4" width="3" height="24" rx="1" />
                        <rect x="11" y="4" width="1.5" height="24" rx="0.75" />
                        <rect x="14" y="4" width="3" height="24" rx="1" />
                        <rect x="19" y="4" width="2" height="24" rx="1" />
                        <rect x="23" y="4" width="1.5" height="24" rx="0.75" />
                        <rect x="26" y="4" width="3" height="24" rx="1" />
                      </svg>
                      <span className="text-white font-bold tracking-widest text-lg">LABYRA</span>
                      <span className="text-gold text-xs font-medium">LABEL</span>
                    </div>
                    <p className="text-[#666] text-sm">Uygulama ekran görüntüleri yakında</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gold/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 ADIM ── */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              3 adımda başlayın
            </h2>
            <p className="text-muted text-lg">
              Kurulum dakikalar içerisinde tamamlanır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "İletişime Geçin",
                desc: "İhtiyaçlarınızı anlatalım, size en uygun planı birlikte belirleyelim.",
              },
              {
                step: "02",
                title: "Kurun",
                desc: "Labyra Label installer'ı indirin ve Windows bilgisayarınıza kurun. Tek tıkla kurulum.",
              },
              {
                step: "03",
                title: "Başlayın",
                desc: "Ürünlerinizi aktarın, etiketlerinizi tasarlayın, barkodları okutun. Hepsi hazır.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-8 rounded-2xl border border-border bg-bg"
              >
                <span className="text-5xl font-bold text-gold/20 absolute top-6 right-8">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="relative bg-cta text-white rounded-3xl p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gold/10 blur-[80px] pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              İş süreçlerinizi sadeleştirmeye hazır mısınız?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto relative z-10">
              Labyra ile tanışın. Size en uygun çözümü birlikte belirleyelim.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                href="/iletisim"
                className="btn-shimmer inline-flex items-center gap-2 bg-white text-cta font-medium rounded-xl px-7 py-3.5 hover:bg-white/90 transition-colors"
              >
                İletişime Geçin
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/urunler/labyra-label"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-medium rounded-xl px-7 py-3.5 hover:bg-white/10 transition-colors"
              >
                Labyra Label
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
