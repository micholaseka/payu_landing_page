import { useInView } from "../hooks";
import { BRAND } from "../data";

/* wrapper dengan animasi muncul saat scroll */
export function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* header section: nomor + judul + subjudul */
export function SectionHead({ tag, title, intro }) {
  return (
    <Reveal className="section-head">
      <div className="section-tag">
        <span className="section-tag-dash" aria-hidden="true" />
        {tag}
      </div>
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  );
}

/* logo mark brand (huruf pertama dari BRAND.name) */
export function Logo({ compact = false }) {
  return (
    <a href="#top" className="logo">
      <span className="logo-mark" aria-hidden="true">
        {BRAND.name.charAt(0)}
      </span>
      <span className="logo-text">{BRAND.name}</span>
      {!compact && <span className="logo-sub">{BRAND.tagline}</span>}
    </a>
  );
}
