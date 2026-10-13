import { useState } from "react";
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
            Siap terima pembayaran online?
          </h2>
          <p className="contact-sub">
            Tinggalkan email bisnismu — tim PayU akan menghubungi dengan simulasi
            biaya dan panduan integrasi yang sesuai tokomu.
          </p>
          <form onSubmit={submit} noValidate className="contact-form">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus(null);
              }}
              placeholder="nama@perusahaan.co.id"
              aria-label="Alamat email"
              className={`contact-input ${status === "error" ? "is-error" : ""}`}
            />
            <button type="submit" className="btn btn-primary">
              KIRIM PENAWARAN
            </button>
          </form>
          <div className="contact-status" role="status">
            {status === "error" && (
              <span className="contact-error">MASUKKAN EMAIL YANG VALID</span>
            )}
            {status === "sent" && (
              <span className="contact-success">
                TERIMA KASIH — TIM PAYU AKAN SEGERA MENGHUBUNGIMU
              </span>
            )}
          </div>
          <a className="contact-mail" href="mailto:halo@payu-landing.demo">
            <iconify-icon icon="solar:letter-linear" />
            halo@payu-landing.demo
          </a>
        </Reveal>
      </div>
    </section>
  );
}
