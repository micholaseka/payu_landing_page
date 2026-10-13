import { useEffect, useState } from "react";

/* progress bar di paling atas halaman */
export default function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setP(h.scrollTop / (h.scrollHeight - h.clientHeight || 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="progress-track" aria-hidden="true">
      <div className="progress-bar" style={{ width: `${p * 100}%` }} />
    </div>
  );
}
