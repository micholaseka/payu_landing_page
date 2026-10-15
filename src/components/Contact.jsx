import { useState } from "react";
import { BRAND } from "../data";
import { Reveal } from "./ui";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // null | "error" | "sent"
  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    setEmail("");
  };
  return (
    <section id="kontak" className="section section-contact grid-bg">
      <div className="container contact-inner">
        <Reveal>
          <div className="section-tag">
            <span className="section-tag-dash" aria-hidden="true" />
            KONTAK
          </div>
          <h2 className="section-title contact-title">
            Siap dinaikkan penjualannya?
          </h2>
          <p className="contact-sub">
            Tinggalkan email bisnismu — kami kirim audit singkat dan proposal
            strategi promosi yang sesuai produkmu. Konsultasi pertama gratis,
            tanpa kewajiban lanjut.
          </p>
          <form onSubmit={submit} noValidate className="contact-form">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus(null);
              }}
              placeholder="nama@brandkamu.com"
              aria-label="Alamat email"
              className={`contact-input ${status === "error" ? "is-error" : ""}`}
            />
            <button type="submit" className="btn btn-primary">
              KIRIM PROPOSAL
            </button>
          </form>
          <div className="contact-status" role="status">
            {status === "error" && (
              <span className="contact-error">MASUKKAN EMAIL YANG VALID</span>
            )}
            {status === "sent" && (
              <span className="contact-success">
                TERIMA KASIH — TIM {BRAND.name} AKAN SEGERA MENGHUBUNGIMU
              </span>
            )}
          </div>
          <a className="contact-mail" href="mailto:halo@payu.demo">
            <iconify-icon icon="solar:letter-linear" />
            halo@payu.demo
          </a>
        </Reveal>
      </div>
    </section>
  );
}
