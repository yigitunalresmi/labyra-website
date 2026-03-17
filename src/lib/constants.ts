export const SITE = {
  name: "Labyra",
  tagline: "Is dunyasinin karmasikligina sade bir yanit",
  description: "Labyra, isletmelerin urun, barkod ve etiket yonetimini kolaylastiran profesyonel yazilim cozumleri sunar.",
  url: "https://labyra.co",
  email: "info@labyra.co",
  copyright: `\u00a9 ${new Date().getFullYear()} Labyra. Tum haklari saklidir.`,
};

export const NAV_LINKS = [
  { href: "/urunler/labyra-label", label: "Labyra Label" },
  { href: "/fiyatlandirma", label: "Fiyatlandirma" },
  { href: "/hakkimizda", label: "Hakkimizda" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "Iletisim" },
];

export const FEATURES = [
  {
    icon: "Package",
    title: "Urun Yonetimi",
    description: "Binlerce urunu kategorilere ayirin, CSV ile toplu yukleyin. Otomatik barkod ve stok kodu eslestirmesi.",
  },
  {
    icon: "Tags",
    title: "Etiket Tasarimi",
    description: "Surekle-birak etiket tasarimcisi ile profesyonel etiketler olusturun. Barkod, QR kod, fiyat ve urun bilgilerini yerlestirin.",
  },
  {
    icon: "Printer",
    title: "Toplu Baski",
    description: "Barkod okuyucu ile tarayin, aninda etiket bastiiin. Seri baski modu ile binlerce etiketi dakikalar icinde yazdiirin.",
  },
  {
    icon: "ScanBarcode",
    title: "Fiyat Tarayici",
    description: "Barkod tarayarak anlik fiyat guncelleme. Fiyat degisiklik gecmisi ve raporlama.",
  },
  {
    icon: "FileSpreadsheet",
    title: "CSV Import/Export",
    description: "Otomatik encoding algilama, sutun eslestirme, rollback destegi. UTF-8, ISO-8859-9, Windows-1254 uyumlulugu.",
  },
  {
    icon: "CreditCard",
    title: "Urun Kartlari",
    description: "Urun bilgi kartlarini otomatik olusturun. Kategoriye ozel sablonlar ve toplu PDF ciktisi.",
  },
];

export const PLANS = [
  {
    name: "Trial",
    price: "Ucretsiz",
    period: "14 gun",
    description: "Labyra Label'i deneyin",
    features: [
      "500 urune kadar",
      "1 cihaz",
      "Temel etiket tasarimi",
      "CSV import/export",
      "E-posta destegi",
    ],
    cta: "Ucretsiz Dene",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "\u20ba299",
    period: "/ ay",
    description: "Buyuyen isletmeler icin",
    features: [
      "100.000 urune kadar",
      "20 cihaza kadar",
      "Gelismis etiket tasarimcisi",
      "Toplu baski & barkod tarama",
      "Fiyat tarayici",
      "Urun kartlari",
      "Oncelikli destek",
      "Otomatik guncellemeler",
    ],
    cta: "Pro'ya Gecin",
    highlighted: true,
  },
  {
    name: "Lite",
    price: "\u20ba149",
    period: "/ ay",
    description: "Kucuk isletmeler icin",
    features: [
      "2.000 urune kadar",
      "5 cihaza kadar",
      "Standart etiket tasarimi",
      "CSV import/export",
      "Toplu baski",
      "E-posta destegi",
    ],
    cta: "Lite'i Secin",
    highlighted: false,
  },
];

export const FAQ_ITEMS = [
  {
    q: "Labyra Label hangi isletim sistemlerinde calisir?",
    a: "Labyra Label su an Windows 10/11 uzerinde calisir. Masaustu uygulamasi olarak kurulur, internet baglantisi gerektirmez (lisans dogrulamasi icin yilda bir gerekir).",
  },
  {
    q: "Mevcut urunlerimi nasil aktarabilirim?",
    a: "CSV veya Excel dosyanizi surekleyin, otomatik sutun eslestirme ile saniyeler icinde binlerce urunu iceri aktarin. UTF-8, ISO-8859-9 ve Windows-1254 kodlamalari desteklenir.",
  },
  {
    q: "Hangi barkod turleri destekleniyor?",
    a: "EAN-13, EAN-8, Code128, Code39, UPC-A, ISBN ve QR kod desteklenmektedir. Ayrica ozel barkod formatlari da eklenebilir.",
  },
  {
    q: "Deneme surumu ne kadar surer?",
    a: "14 gun boyunca tum ozellikleri ucretsiz deneyebilirsiniz. Deneme sonunda herhangi bir ucretlendirme yapilmaz.",
  },
  {
    q: "Verilerim guvenli mi?",
    a: "Evet. Labyra Label masaustu uygulamasi olarak calisir, verileriniz kendi bilgisayarinizda saklanir. Bulut senkronizasyonu yapilmaz, verileriniz tamamen sizin kontrolunuzdedir.",
  },
  {
    q: "Yazici uyumlulugu nasil?",
    a: "Windows uzerinde tum standart yazicilarla uyumludur. Ayrica Zebra, TSC gibi termal etiket yazicilari icin ZPL destegi bulunmaktadir.",
  },
  {
    q: "Birden fazla bilgisayarda kullanabilir miyim?",
    a: "Evet. Lite plani 5 cihaza kadar, Pro plani ise 20 cihaza kadar destekler. Her cihaz icin ayri kurulum yapilir.",
  },
  {
    q: "Destek nasil calisiyor?",
    a: "E-posta ile 7/24 destek sunuyoruz. Pro plan kullanicilari oncelikli destek ve uzaktan baglanti yardimi alabilir.",
  },
];
