import { PLATFORM } from "../data";
import { SectionHead, Reveal } from "./ui";

export default function Platform() {
  return (
    <section id="integrasi" className="section">
      <div className="container">
        <SectionHead
          tag="04 / INTEGRASI"
          title="Spesifikasi untuk produksi, bukan demo."
          intro="Ringkasan apa yang langsung aktif ketika akun PayU-mu go-live:"
        />
        <Reveal>
          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
                <span className="terminal-name">payu-core — platform.spec</span>
              </div>
              <span className="terminal-status">
                <span className="terminal-status-dot" aria-hidden="true" />
                SIAP GO-LIVE
              </span>
            </div>
            <div className="terminal-body">
              {PLATFORM.map((p, i) => (
                <Reveal key={p.key} delay={i * 70}>
                  <div className="terminal-row">
                    <div className="terminal-key">{p.key}</div>
                    <div>
                      <div className="terminal-spec">{p.spec}</div>
                      <div className="terminal-note">{p.note}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <p className="caption">
            BUTUH SKENARIO CUSTOM? TIM PAYU BANTU MENDESAIN ALUR INTEGRASIMU —
            GRATIS UNTUK SEMUA MERCHANT.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
