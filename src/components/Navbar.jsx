import { useState } from "react";
import { NAV, BRAND } from "../data";
import { useScrolled } from "../hooks";
import { Logo } from "./ui";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(40);
  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav-inner">
        <Logo />
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {NAV.map((n) => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a className="nav-cta" href="#kontak" onClick={() => setOpen(false)}>
            HUBUNGI KAMI
          </a>
        </div>
        <button
          className="nav-toggle"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <iconify-icon icon={open ? "solar:close-linear" : "solar:menu-dots-linear"} />
        </button>
      </nav>
    </header>
  );
}
