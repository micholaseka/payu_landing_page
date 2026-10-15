import { useEffect, useState } from "react";
import { TYPE_PHRASES, BRAND } from "../data";
import { useTypewriter } from "../hooks";
import { Reveal } from "./ui";

export default function Hero() {
  const typed = useTypewriter(TYPE_PHRASES);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.3);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section id="top" className="hero grid-bg">
      <div
        className="hero-glow"
        aria-hidden="true"
        style={{ transform: `translateY(${offset * 0.4}px)` }}
      />
      <div className="container hero-inner">
        <Reveal>
          <div className="badge">
            <span className="badge-dot" aria-hidden="true" />
            AGENSI PROMOSI · AFFILIATE &amp; SOCIAL ADS · BERBASIS PERFORMA
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="hero-title">
            Jualan naik.
            <br />
            <span className="hero-title-accent">Promosinya</span>
            <br />
            kami urus.
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="hero-sub">
            {BRAND.name} mempromosikan produk dan jasa klien lewat affiliate
            marketing, social ads, dan influencer — dengan model bayar berbasis
            hasil. Kamu fokus berjualan, kami yang mengurus supaya produkmu
            dilihat, dicari, dan dibeli.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="hero-typed" aria-live="polite">
            <span className="hero-typed-caret" aria-hidden="true">
              &gt;
            </span>
            <span>{typed}</span>
            <span className="caret" aria-hidden="true" />
          </div>
        </Reveal>
        <Reveal delay={420}>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#kontak">
              {BRAND.ctaPrimary}
            </a>
            <a className="btn btn-ghost" href="#layanan">
              {BRAND.ctaSecondary}
              <iconify-icon icon="solar:arrow-down-linear" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
