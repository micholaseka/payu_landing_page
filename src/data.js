/* ============================================================
   Konten seluruh section landing page — ubah teks di sini
   tanpa perlu menyentuh komponen.
   ============================================================ */

export const NAV = [
  { label: "FITUR", href: "#fitur" },
  { label: "MENGAPA", href: "#mengapa" },
  { label: "ALUR", href: "#alur" },
  { label: "INTEGRASI", href: "#integrasi" },
  { label: "ROADMAP", href: "#program" },
];

export const TYPE_PHRASES = [
  "KARTU / VA / E-WALLET / QRIS — SATU INTEGRASI",
  "TERIMA PEMBAYARAN DI MANA PUN PELANGGANMU BERADA",
  "ANTI-FRAUD REAL-TIME & SETTLEMENT CEPAT",
  "GO-LIVE PERTAMA HANYA DALAM 5 MENIT",
];

export const MARQUEE = [
  "TERIMA SEMUA PEMBAYARAN",
  "PCI-DSS COMPLIANT",
  "QRIS READY",
  "20+ METODE BAYAR",
  "SANDBOX GRATIS",
  "SETTLEMENT CEPAT",
  "ANTI-FRAUD REAL-TIME",
  "TIM PENDUKUNG 24/7",
];

export const STATS = [
  {
    value: 20,
    suffix: "+",
    label: "METODE PEMBAYARAN",
    note: "kartu, VA, e-wallet, QRIS, retail",
  },
  {
    value: 99,
    suffix: "%",
    label: "UPTIME PLATFORM",
    note: "diinfrastruktur yang dimonitor 24/7",
  },
  {
    value: 5,
    suffix: " MENIT",
    label: "GO-LIVE PERTAMA",
    note: "dari sandbox ke transaksi pertama",
  },
];

export const MODULES = [
  {
    icon: "solar:card-linear",
    en: "KARTU",
    id: "Visa, Mastercard, JCB",
  },
  {
    icon: "solar:banknote-linear",
    en: "VIRTUAL ACCOUNT",
    id: "BCA, BNI, BRI, Mandiri & lainnya",
  },
  {
    icon: "solar:wallet-linear",
    en: "E-WALLET",
    id: "OVO, DANA, LinkAja, ShopeePay",
  },
  {
    icon: "solar:qr-code-linear",
    en: "QRIS",
    id: "satu kode untuk semua aplikasi",
  },
  {
    icon: "solar:shop-linear",
    en: "RETAIL",
    id: "Alfamart & Indomaret",
  },
  {
    icon: "solar:card-transfer-linear",
    en: "PAYOUT",
    id: "disbursement massal ke banyak bank",
  },
  {
    icon: "solar:refresh-linear",
    en: "LANGGANAN",
    id: "tagihan berulang otomatis",
  },
  {
    icon: "solar:shield-check-linear",
    en: "ANTI-FRAUD",
    id: "penyaringan tiap transaksi",
  },
];

export const WHY = [
  {
    icon: "solar:card-transfer-linear",
    title: "Satu integrasi, semua metode",
    body: "Kartu, virtual account, e-wallet, QRIS, dan gerai retail berjalan lewat satu checkout. Tidak perlu kontrak dan integrasi berulang untuk setiap channel pembayaran.",
  },
  {
    icon: "solar:database-linear",
    title: "Satu dashboard, semua data",
    body: "Transaksi, settlement, refund, dan laporan berada di satu tempat. Rekonsiliasi otomatis setiap hari — tanpa spreadsheet tambahan, tanpa tebak-tebakan.",
  },
  {
    icon: "solar:shield-check-linear",
    title: "Anti-fraud real-time",
    body: "Setiap transaksi disaring sebelum dana diteruskan. Deteksi anomaly, rule yang bisa diatur sendiri, dan notifikasi instan menekan chargeback sejak hari pertama.",
  },
];

export const NODES = [
  {
    id: "01",
    icon: "solar:cart-linear",
    name: "CHECKOUT",
    label: "Pelanggan bayar",
    body: "Pelanggan memilih produk di tokomu, lalu menekan tombol bayar di halaman checkout — desktop maupun mobile.",
  },
  {
    id: "02",
    icon: "solar:card-linear",
    name: "PEMBAYARAN",
    label: "Pilih metode",
    body: "Mereka membayar dengan kartu, transfer virtual account, e-wallet, QRIS, atau tunai di gerai retail terdekat.",
  },
  {
    id: "03",
    icon: "solar:monitor-smartphone-linear",
    name: "VERIFIKASI",
    label: "Status otomatis",
    body: "Status pembayaran terkonfirmasi otomatis dalam hitungan detik dan langsung terhubung ke sistem pesananmu.",
  },
  {
    id: "04",
    icon: "solar:shield-check-linear",
    name: "ANTI-FRAUD",
    label: "Penyaringan",
    body: "Setiap transaksi disaring mesin anti-fraud PayU. Transaksi mencurigakan ditahan untuk ditinjau sebelum dana diteruskan.",
  },
  {
    id: "05",
    icon: "solar:wallet-linear",
    name: "SETTLEMENT",
    label: "Dana masuk",
    body: "Dana masuk ke rekening perusahaanmu sesuai jadwal settlement, dan laporan lengkapnya menunggu di dashboard.",
  },
];

export const PIPELINE_DEFAULT =
  "Dari pelanggan menekan tombol bayar sampai dana masuk rekeningmu, seluruh alur berjalan di satu sistem — tanpa middleware, tanpa rekonsiliasi manual antar vendor. Titik bergerak di atas adalah satu transaksi yang menempuh jalur itu.";

export const PLATFORM = [
  {
    key: "METODE BAYAR",
    spec: "20+ metode — kartu, virtual account, e-wallet, QRIS, retail",
    note: "satu akun, semua channel pembayaran terhubung",
  },
  {
    key: "CHECKOUT",
    spec: "Hosted & non-hosted · mobile-first · tokenisasi kartu",
    note: "tampilan bisa disesuaikan dengan brand tokomu",
  },
  {
    key: "INTEGRASI",
    spec: "REST API & SDK Web, iOS, Android · plugin WooCommerce, Shopify",
    note: "dokumentasi lengkap dan sandbox gratis",
  },
  {
    key: "KEAMANAN",
    spec: "TLS end-to-end · 3D Secure · audit berkala",
    note: "kepatuhan PCI-DSS dan enkripsi data sensitif",
  },
  {
    key: "LAPORAN",
    spec: "Real-time transaction log · export CSV · API reporting",
    note: "rekap harian & rekonsiliasi otomatis",
  },
  {
    key: "DUKUNGAN",
    spec: "Tim sales & teknis 24/7 · onboarding merchant",
    note: "pendampingan dari registrasi hingga go-live",
  },
];

export const TIMELINE = [
  {
    period: "HARI 0",
    title: "Daftar & verifikasi akun",
    status: "COMPLETE",
    note: "Kirim dokumen perusahaan, akun disetujui tim PayU.",
  },
  {
    period: "HARI 1",
    title: "Integrasi di sandbox",
    status: "IN PROGRESS",
    note: "Pasang SDK atau plugin, uji seluruh metode bayar.",
  },
  {
    period: "HARI 7",
    title: "Uji end-to-end & aktivasi",
    status: "SCHEDULED",
    note: "Skenario transaksi nyata disimulasikan, lalu mode produksi diaktifkan.",
  },
  {
    period: "SETELAHNYA",
    title: "Scale & optimasi konversi",
    status: "PLANNED",
    note: "Aktifkan fitur lanjutan: subscription, payout massal, dan laporan lanjutan.",
  },
];

export const BRAND = {
  name: "PAYU",
  tagline: "payment gateway",
  ctaPrimary: "MULAI SEKARANG",
  ctaSecondary: "LIHAT FITUR",
};
