import { WHY } from "../data";
import { SectionHead, Reveal } from "./ui";

export default function Why() {
  return (
    <section id="mengapa" className="section section-alt">
      <div className="container">
        <SectionHead
          tag="03 / MENGAPA PAYU"
          title="Dibangun sebagai satu sistem. Bukan tempelan."
          intro="Cara biasa: satu vendor POS, satu mesin EDC, satu layanan invoice — beberapa kontrak, beberapa titik gagal. PayU menyatukan pembayaran, verifikasi, dan pelaporan dalam satu platform."
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
