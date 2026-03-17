import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PLANS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fiyatlandırma",
  description: "Labyra Label fiyat planları. Trial, Lite ve Pro seçenekleri ile işletmenize uygun planı seçin.",
};

export default function PricingPage() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Sade ve şeffaf{" "}
            <span className="text-gold-gradient">fiyatlandırma</span>
          </h1>
          <p className="text-muted text-lg">
            Gizli ücret yok. İstediğiniz zaman iptal edin.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[PLANS[0], PLANS[2], PLANS[1]].map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlighted
                  ? "border-gold bg-surface shadow-xl scale-[1.02]"
                  : "border-border bg-surface"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-gold text-white px-4 py-1 rounded-full">
                  En Popüler
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted text-sm ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <CheckCircle2
                      size={18}
                      className={`shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-gold" : "text-gold-dark"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/iletisim"
                className={`btn-shimmer w-full text-center font-medium rounded-xl px-6 py-3 transition-colors ${
                  plan.highlighted
                    ? "bg-cta text-white hover:bg-cta-hover"
                    : "bg-tag-bg text-text hover:bg-border"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise Note */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="bg-surface border border-border rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-2">Kurumsal çözüm mü arıyorsunuz?</h3>
            <p className="text-sm text-muted mb-4">
              50+ cihaz, özel entegrasyon veya API erişimi için bizimle iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold transition-colors"
            >
              Bizimle konuşun <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
