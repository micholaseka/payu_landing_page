import { MARQUEE } from "../data";

/* marquee strip — digandakan supaya animasinya mulus */
export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((m, i) => (
          <span key={i} className="marquee-item">
            {m}
            <iconify-icon icon="solar:bolt-linear" />
          </span>
        ))}
      </div>
    </div>
  );
}
