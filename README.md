# PayU — Landing Page (React + Vite)

Landing page payment gateway PayU dengan desain **neo-brutalist** yang diadaptasi
dari template referensi
[TIDE Retail Commerce System (aura.build)](https://www.aura.build/templates/tide-retail-commerce-system-1).

**Palet:** putih (paper) · navy (ink `#0a2540`) · kuning (`#ffc900`) · biru muda (`#8fd6f7`)
**Gaya kunci:** border 2px navy, hard offset shadow `4px 4px 0`, font mono untuk label,
heading chunky 800, grid backdrop, marquee strip kuning, interaksi
(typewriter, count-up, pipeline interaktif, countdown, form validation).

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
    ├── ui.jsx              # Reveal, SectionHead, Logo (komponen bersama)
    ├── ScrollProgress.jsx  # progress bar scroll
    ├── Navbar.jsx          # navbar fixed + menu mobile
    ├── Hero.jsx            # hero: badge, headline, typewriter, CTA
    ├── Marquee.jsx         # strip berjalan
    ├── Stats.jsx           # statistik count-up
    ├── Features.jsx        # grid 8 modul pembayaran
    ├── Why.jsx             # 3 kartu alasan
    ├── Flow.jsx            # alur pembayaran 5 tahap (interaktif)
    ├── Platform.jsx        # tabel spec gaya terminal
    ├── Program.jsx         # timeline onboarding + countdown promo
    ├── Contact.jsx         # form penawaran (validasi email)
    └── Footer.jsx
```

## Kustomisasi cepat

- **Teks/konten:** ubah `src/data.js` (nav, headline copy, stats, fitur,
  alur, timeline, dll.) — tidak perlu sentuh komponen.
- **Warna:** ubah variabel di `:root` pada `src/index.css`
  (`--yellow`, `--blue`, `--ink`, `--shadow`).
- **Target countdown promo:** `promoEnd()` di `src/components/Program.jsx`
  (saat ini: akhir bulan berjalan).
- **Email kontak:** `Contact.jsx` (`mailto`) dan `Footer.jsx`.

> Catatan: halaman ini adalah demo untuk referensi desain dan tidak
> berafiliasi resmi dengan PayU.
