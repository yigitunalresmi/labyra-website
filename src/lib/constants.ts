export const SITE = {
  name: "Labyra",
  tagline: "İş dünyasının karmaşıklığına sade bir yanıt",
  description: "Labyra, işletmelerin ürün, barkod ve etiket yönetimini kolaylaştıran profesyonel masaüstü yazılım çözümleri sunar.",
  url: "https://labyra.co",
  email: "info@labyra.co",
  copyright: `\u00a9 ${new Date().getFullYear()} Labyra. Tüm hakları saklıdır.`,
};

export const NAV_LINKS = [
  { href: "/urunler/labyra-label", label: "Labyra Label" },
  { href: "/fiyatlandirma", label: "Fiyatlandırma" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
];

export const FEATURES = [
  {
    icon: "Package",
    title: "Ürün Yönetimi",
    description: "Binlerce ürünü kategorilere ayırın, CSV ile toplu yükleyin. Otomatik barkod ve stok kodu eşleştirmesi.",
  },
  {
    icon: "Tags",
    title: "Etiket Tasarımı",
    description: "Sürükle-bırak etiket tasarımcısı ile profesyonel etiketler oluşturun. Barkod, QR kod, fiyat ve ürün bilgilerini yerleştirin.",
  },
  {
    icon: "Printer",
    title: "Toplu Baskı",
    description: "Barkod okuyucu ile tarayın, anında etiket bastırın. Seri baskı modu ile binlerce etiketi dakikalar içinde yazdırın.",
  },
  {
    icon: "ScanBarcode",
    title: "Fiyat Tarayıcı",
    description: "Barkod tarayarak anlık fiyat güncelleme. Fiyat değişiklik geçmişi ve raporlama.",
  },
  {
    icon: "FileSpreadsheet",
    title: "CSV Import/Export",
    description: "Otomatik encoding algılama, sütun eşleştirme, rollback desteği. UTF-8, ISO-8859-9, Windows-1254 uyumluluğu.",
  },
  {
    icon: "CreditCard",
    title: "Ürün Kartları",
    description: "Ürün bilgi kartlarını otomatik oluşturun. Kategoriye özel şablonlar ve toplu PDF çıktısı.",
  },
];

export const PLANS = [
  {
    name: "Lite",
    description: "Küçük işletmeler için",
    features: [
      "2.000 ürüne kadar",
      "5 cihaza kadar",
      "Standart etiket tasarımı",
      "CSV import/export",
      "Toplu baskı",
      "E-posta desteği",
    ],
    cta: "İletişime Geçin",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Büyüyen işletmeler için",
    features: [
      "100.000 ürüne kadar",
      "20 cihaza kadar",
      "Gelişmiş etiket tasarımcısı",
      "Toplu baskı & barkod tarama",
      "Fiyat tarayıcı",
      "Ürün kartları",
      "Öncelikli destek",
      "Otomatik güncellemeler",
    ],
    cta: "İletişime Geçin",
    highlighted: true,
  },
];

export const FAQ_ITEMS = [
  {
    q: "Labyra Label hangi işletim sistemlerinde çalışır?",
    a: "Labyra Label şu an Windows 10/11 üzerinde çalışır. Masaüstü uygulaması olarak kurulur, internet bağlantısı gerektirmez (lisans doğrulaması için yılda bir gerekir).",
  },
  {
    q: "Mevcut ürünlerimi nasıl aktarabilirim?",
    a: "CSV veya Excel dosyanızı sürükleyin, otomatik sütun eşleştirme ile saniyeler içinde binlerce ürünü içeri aktarın. UTF-8, ISO-8859-9 ve Windows-1254 kodlamaları desteklenir.",
  },
  {
    q: "Hangi barkod türleri destekleniyor?",
    a: "EAN-13, EAN-8, Code128, Code39, UPC-A, ISBN ve QR kod desteklenmektedir. Ayrıca özel barkod formatları da eklenebilir.",
  },
  {
    q: "Planlar ve fiyatlandırma nasıl işliyor?",
    a: "Lite ve Pro olmak üzere iki plan sunuyoruz. Fiyatlandırma detayları için bizimle iletişime geçin, işletmenize en uygun planı birlikte belirleyelim.",
  },
  {
    q: "Verilerim güvenli mi?",
    a: "Evet. Labyra Label masaüstü uygulaması olarak çalışır, verileriniz kendi bilgisayarınızda saklanır. Bulut senkronizasyonu yapılmaz, verileriniz tamamen sizin kontrolünüzdedir.",
  },
  {
    q: "Yazıcı uyumluluğu nasıl?",
    a: "Windows üzerinde tüm standart yazıcılarla uyumludur. Ayrıca Zebra, TSC gibi termal etiket yazıcıları için ZPL desteği bulunmaktadır.",
  },
  {
    q: "Birden fazla bilgisayarda kullanabilir miyim?",
    a: "Evet. Lite planı 5 cihaza kadar, Pro planı ise 20 cihaza kadar destekler. Her cihaz için ayrı kurulum yapılır.",
  },
  {
    q: "Destek nasıl çalışıyor?",
    a: "E-posta ile 7/24 destek sunuyoruz. Pro plan kullanıcıları öncelikli destek ve uzaktan bağlantı yardımı alabilir.",
  },
];
