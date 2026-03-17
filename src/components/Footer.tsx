import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
                <rect x="2" y="4" width="2" height="24" rx="1" />
                <rect x="6" y="4" width="3" height="24" rx="1" />
                <rect x="11" y="4" width="1.5" height="24" rx="0.75" />
                <rect x="14" y="4" width="3" height="24" rx="1" />
                <rect x="19" y="4" width="2" height="24" rx="1" />
                <rect x="23" y="4" width="1.5" height="24" rx="0.75" />
                <rect x="26" y="4" width="3" height="24" rx="1" />
              </svg>
              <span className="font-bold tracking-tight">LABYRA</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Is yaziliminin onunde degil, yaninda duruyoruz.
            </p>
          </div>

          {/* Urunler */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Urunler</h4>
            <ul className="space-y-3">
              <li><Link href="/urunler/labyra-label" className="text-sm text-muted hover:text-text transition-colors">Labyra Label</Link></li>
              <li><Link href="/fiyatlandirma" className="text-sm text-muted hover:text-text transition-colors">Fiyatlandirma</Link></li>
            </ul>
          </div>

          {/* Sirket */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Sirket</h4>
            <ul className="space-y-3">
              <li><Link href="/hakkimizda" className="text-sm text-muted hover:text-text transition-colors">Hakkimizda</Link></li>
              <li><Link href="/sss" className="text-sm text-muted hover:text-text transition-colors">SSS</Link></li>
              <li><Link href="/iletisim" className="text-sm text-muted hover:text-text transition-colors">Iletisim</Link></li>
            </ul>
          </div>

          {/* Iletisim */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Iletisim</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted">{SITE.email}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">{SITE.copyright}</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted hover:text-text transition-colors">Gizlilik Politikasi</Link>
            <Link href="#" className="text-xs text-muted hover:text-text transition-colors">Kullanim Kosullari</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
