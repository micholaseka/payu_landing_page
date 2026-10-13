import { STATS } from "../data";
import { useInView, useCountUp } from "../hooks";
import { Reveal } from "./ui";

function StatItem({ stat, start, delay }) {
  const v = useCountUp(stat.value, start);
  return (
    <Reveal delay={delay} className="stat">
      <div className="stat-value">
        {v}
        {stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-note">{stat.note}</div>
    </Reveal>
  );
}

export default function Stats() {
  const [ref, visible] = useInView(0.3);
  return (
    <section ref={ref} className="stats">
      <div className="container stats-grid">
        {STATS.map((s, i) => (
          <StatItem key={s.label} stat={s} start={visible} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}
