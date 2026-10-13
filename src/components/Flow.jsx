import { useState } from "react";
import { NODES, PIPELINE_DEFAULT } from "../data";
import { SectionHead, Reveal } from "./ui";

/* pipeline interaktif: hover/fokus satu node untuk lihat detailnya */
export default function Flow() {
  const [active, setActive] = useState(null);
  const node = active !== null ? NODES[active] : null;
  return (
    <section id="alur" className="section">
      <div className="container">
        <SectionHead
          tag="02 / ALUR"
          title="Satu transaksi, dari klik sampai dana masuk."
          intro="Lima tahap, satu sistem. Arahkan kursor ke setiap tahap untuk melihat apa yang terjadi di balik layar."
        />
        <Reveal>
          <div className="flow-panel">
            <div className="flow-rail" aria-hidden="true">
              <span className="signal-dot" />
            </div>
            <div className="flow-nodes">
              {NODES.map((n, i) => (
                <button
                  key={n.id}
                  type="button"
                  className={`flow-node ${active === i ? "is-active" : ""}`}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  aria-label={`${n.id} ${n.name} — ${n.label}`}
                >
                  <span className={`flow-node-box ${active === i ? "is-active" : ""}`}>
                    <iconify-icon icon={n.icon} />
                  </span>
                  <span className="flow-node-id">{n.id}</span>
                  <span className="flow-node-name">{n.name}</span>
                  <span className="flow-node-label">{n.label}</span>
                </button>
              ))}
            </div>
            <div className="flow-detail">
              <div className="flow-detail-head">
                <iconify-icon icon="solar:routing-2-linear" />
                {node
                  ? `${node.id} — ${node.name} / ${node.label}`
                  : "ALUR — PENJELASAN DEFAULT"}
              </div>
              <p className="flow-detail-body">{node ? node.body : PIPELINE_DEFAULT}</p>
            </div>
          </div>
          <p className="caption">
            TITIK KUNING YANG BERGERAK ADALAH SATU TRANSAKSI YANG MENEMPUH
            SELURUH ALUR — TANPA VENDOR DI TENGAH.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
