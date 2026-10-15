import { TIMELINE, BRAND } from "../data";
import { useCountdown } from "../hooks";
import { SectionHead, Reveal } from "./ui";

const STATUS_STYLE = {
  COMPLETE: "st-complete",
  "IN PROGRESS": "st-progress",
  SCHEDULED: "st-scheduled",
  PLANNED: "st-planned",
};

/* tanggal promo: akhir bulan berjalan */
function promoEnd() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0).getTime();
}

export default function Program() {
  const t = useCountdown(promoEnd());
  const cells = [
    { v: t.days, l: "HARI" },
    { v: t.hours, l: "JAM" },
    { v: t.min, l: "MENIT" },
    { v: t.sec, l: "DETIK" },
  ];
  return (
    <section id="onboarding" className="section">
      <div className="container">
        <SectionHead
          tag="05 / ONBOARDING"
          title="Aktivasi terukur, bukan janji."
          intro={`Alur kerja sama standar ${BRAND.name} — dari audit produk sampai penjualan pertama berjalan. Promo bulan ini: audit & strategi GRATIS, berakhir dalam:`}
        />
        <div className="program-grid">
          <div className="timeline">
            <span className="timeline-rail" aria-hidden="true" />
            {TIMELINE.map((item, i) => (
              <Reveal key={item.period} delay={i * 110} className="timeline-item">
                <span className={`timeline-dot ${STATUS_STYLE[item.status] || ""}`} />
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  <span className={`chip ${STATUS_STYLE[item.status] || ""}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-note">{item.note}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="countdown">
              <div className="countdown-head">
                <iconify-icon icon="solar:alarm-linear" />
                PROMO AUDIT &amp; STRATEGI GRATIS BERAKHIR DALAM
              </div>
              <div className="countdown-grid">
                {cells.map((c) => (
                  <div key={c.l} className="countdown-cell">
                    <div className="countdown-value">
                      {String(c.v).padStart(2, "0")}
                    </div>
                    <div className="countdown-label">{c.l}</div>
                  </div>
                ))}
              </div>
              <div className="countdown-foot">
                <iconify-icon icon="solar:card-transfer-linear" />
                TANPA BIAYA AUDIT · TANPA KONTRAK MINIMUM · MODEL KOMISI BISA DIPILIH
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
