import Link from "next/link";
import { SITE } from "@/lib/constants";
import LabyraLogo from "@/components/LabyraLogo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <LabyraLogo className="w-6 h-6" />
              <span className="font-bold tracking-tight">LABYRA</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              İş yazılımının önünde değil, yanında duruyoruz.
            </p>
          </div>

          {/* Ürünler */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Ürünler</h4>
            <ul className="space-y-3">
              <li><Link href="/urunler/labyra-label" className="text-sm text-muted hover:text-text transition-colors">Labyra Label</Link></li>
              <li><Link href="/fiyatlandirma" className="text-sm text-muted hover:text-text transition-colors">Fiyatlandırma</Link></li>
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Şirket</h4>
            <ul className="space-y-3">
              <li><Link href="/hakkimizda" className="text-sm text-muted hover:text-text transition-colors">Hakkımızda</Link></li>
              <li><Link href="/sss" className="text-sm text-muted hover:text-text transition-colors">SSS</Link></li>
              <li><Link href="/iletisim" className="text-sm text-muted hover:text-text transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-semibold text-sm mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted">{SITE.email}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">{SITE.copyright}</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted hover:text-text transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="text-xs text-muted hover:text-text transition-colors">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
