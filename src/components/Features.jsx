import { MODULES } from "../data";
import { SectionHead, Reveal } from "./ui";

export default function Features() {
  return (
    <section id="layanan" className="section">
      <div className="container">
        <SectionHead
          tag="01 / LAYANAN"
          title="Semua yang dibutuhkan untuk dijual."
          intro="Delapan layanan promosi, satu tim. Aktifkan sesuai kebutuhan bisnismu — tambah kanal kapan pun, tanpa kontrak baru untuk tiap layanan."
        />
        <div className="feature-grid">
          {MODULES.map((m, i) => (
            <Reveal key={m.en} delay={i * 60}>
              <div className="feature-card group">
                <span className="feature-sweep" aria-hidden="true" />
                <iconify-icon icon={m.icon} className="feature-icon" />
                <div className="feature-name">{m.en}</div>
                <div className="feature-note">{m.id}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
