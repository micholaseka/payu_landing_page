import { BRAND } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          DIPROMOSIKAN DENGAN BENAR, DIUKUR DENGAN ANGKA.
        </div>
        <div className="footer-meta">
          <iconify-icon icon="solar:bolt-linear" />
          {BRAND.name} · {BRAND.tagline.toUpperCase()} · &copy; 2026
        </div>
        <div className="footer-note">
          Halaman demo untuk keperluan referensi desain — angka & klaim
          bersifat ilustratif.
        </div>
      </div>
    </footer>
  );
}
