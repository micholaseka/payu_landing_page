import { WHY } from "../data";
import { SectionHead, Reveal } from "./ui";

export default function Why() {
  return (
    <section id="keunggulan" className="section section-alt">
      <div className="container">
        <SectionHead
          tag="03 / KEUNGGULAN"
          title="Bukan sekadar beli iklan."
          intro="Cara lama: iklan digede-gedeakan tanpa tahu mana yang benar-benar menghasilkan penjualan. Kami membangun promosi sebagai satu sistem — kreatif, kanal, dan afiliasi bergerak bersama, dengan angka yang bisa diperiksa kapan saja."
        />
        <div className="why-grid">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 130}>
              <div className="why-card group">
                <span className="why-icon-chip">
                  <iconify-icon icon={w.icon} />
                </span>
                <h3 className="why-title">{w.title}</h3>
                <p className="why-body">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
