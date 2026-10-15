# PayU — Landing Page Jasa Promosi & Affiliate (React + Vite)

Landing page untuk **PayU** sebagai perusahaan **jasa promosi/affiliate**:
mempromosikan produk & jasa klien lewat affiliate marketing, social ads,
dan influencer, dengan model bayar berbasis hasil.

Desain **neo-brutalist** yang diadaptasi dari template referensi
[TIDE Retail Commerce System (aura.build)](https://www.aura.build/templates/tide-retail-commerce-system-1).

**Palet:** putih (paper) · navy (ink `#0a2540`) · kuning (`#ffc900`) · biru muda (`#8fd6f7`)
**Gaya kunci:** border 2px navy, sudut membulat, hard offset shadow `4px 4px 0`,
font mono untuk label, heading chunky, marquee strip kuning, interaksi
(typewriter, count-up, pipeline interaktif, countdown, validasi form).

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produksi → dist/ + standalone/payu-landing.html
npm run preview  # cek hasil build di localhost
```

### Kenapa white screen kalau `index.html` di-double-click?

`dist/index.html` memuat JS sebagai **module eksternal**, dan browser
memblokir pemanggilan modul saat halaman dibuka lewat protokol `file://`
(hanya HTTP/HTTPS yang diizinkan) → `<div id="root">` tetap kosong.

**Solusi:**
1. Jalankan `npm run dev` atau `npm run preview` (butuh server), **atau**
2. Buka langsung **`standalone/payu-landing.html`** (hasil `npm run build`) —
   file tunggal, JS & CSS sudah di-inline, jalan dengan double-click biasa.

## Struktur

```
src/
├── App.jsx                 # rangkaian section
├── data.js                 # ← SEMUA teks/konten section ada di sini
├── hooks.js                # useInView, useTypewriter, useCountdown, useCountUp
├── index.css               # tema: variabel warna di :root + semua style section
└── components/
    ├── ui.jsx              # Reveal, SectionHead, Logo (baca BRAND dari data)
    ├── ScrollProgress.jsx  # progress bar scroll
    ├── Navbar.jsx          # navbar fixed + menu mobile
    ├── Hero.jsx            # hero: badge, headline, typewriter, CTA
    ├── Marquee.jsx         # strip berjalan
    ├── Stats.jsx           # statistik count-up
    ├── Features.jsx        # grid 8 layanan promosi
    ├── Why.jsx             # 3 kartu keunggulan
    ├── Flow.jsx            # alur promosi 5 tahap (interaktif)
    ├── Platform.jsx        # tabel paket kerja sama (gaya terminal)
    ├── Program.jsx         # timeline onboarding + countdown promo
    ├── Contact.jsx         # form proposal (validasi email)
    └── Footer.jsx
```

## Kustomisasi cepat

- **Nama brand & CTA:** `BRAND` di `src/data.js` (logo, footer, dan sebagian
  kalimat ikut otomatis mengikuti nama brand)
- **Teks/konten lain:** tetap di `src/data.js` (layanan, keunggulan, alur,
  stats, timeline, spec kerja sama)
- **Warna:** variabel di `:root` pada `src/index.css`
  (`--yellow`, `--blue`, `--ink`, `--radius`, `--shadow`)
- **Countdown promo:** `promoEnd()` di `src/components/Program.jsx`
- **Email kontak:** `Contact.jsx` (`mailto`)

## Sisa yang perlu dibenahi (sebelum projek tamat)

- [ ] Angka di section stats & klaim lain → data riil
- [ ] Email/WA kontak asli di `Contact.jsx`
- [ ] Copy final tiap section (judul & paragraf)
- [ ] Jika perlu: portofolio/case study, logo klien, testimoni, tabel harga, FAQ
