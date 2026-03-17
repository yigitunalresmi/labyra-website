"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-medium text-base">{q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-muted transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-muted leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="max-w-[800px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Sık Sorulan <span className="text-gold-gradient">Sorular</span>
          </h1>
          <p className="text-muted text-lg">
            Merak ettiğiniz her şeyin cevabı burada.
          </p>
        </div>

        <div>
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>

        <div className="mt-16 text-center bg-surface border border-border rounded-2xl p-8">
          <h3 className="text-lg font-semibold mb-2">
            Sorunuzun cevabını bulamadınız mı?
          </h3>
          <p className="text-sm text-muted mb-4">
            Bize yazın, en kısa sürede dönelim.
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold transition-colors"
          >
            İletişime geçin
          </a>
        </div>
      </div>
    </section>
  );
}
