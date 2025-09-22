import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";

export default function Contact() {
    const [city, setCity] = useState("Bakkum");

    const ADDRESSES = {
        Bakkum: "Van Renesselaan 19, Bakkum",
        Driebergen: "Hoofdstraat 147, Driebergen",
    };

    const mapSrc   = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESSES[city])}&output=embed`;
    const routeHref= `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESSES[city])}`;

    return (
        <div className="contact-shell">
            {/* FOTO LINKS */}
            <div className="contact-photo">
                <picture>
                    <source
                        type="image/avif"
                        srcSet="/contact-portrait-400w.avif 400w, /contact-portrait-800w.avif 800w, /contact-portrait-1200w.avif 1200w"
                        sizes="(max-width: 920px) 100vw, 48vw"
                    />
                    <source
                        type="image/webp"
                        srcSet="/contact-portrait-400w.webp 400w, /contact-portrait-800w.webp 800w, /contact-portrait-1200w.webp 1200w"
                        sizes="(max-width: 920px) 100vw, 48vw"
                    />
                    <img
                        src="/contact-portrait-800w.webp"
                        width="800"
                        height="1067"
                        alt="Portret Manon Keeman"
                        decoding="async"
                    />
                </picture>
            </div>

            {/* CARDS RECHTS */}
            <div className="contact-copy">
                <div className="contact-stack">
                    {/* Card 1 — Contact + WhatsApp */}
                    <div className="card">
                        <h3 className="small" style={{ marginBottom: 8, color: "var(--muted)" }}>Contact</h3>
                        <p style={{ lineHeight: 1.55, marginBottom: 12 }}>
                            Leuk dat je er bent! Zin in een kort overleg of wil je iets samen bouwen?
                            Stuur me gerust een appje.
                        </p>
                        <a
                            href="https://wa.me/31624766568"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                            aria-label="WhatsApp Manon Keeman"
                            title="WhatsApp"
                        >
                            <FaWhatsapp style={{ fontSize: "1.2rem" }} />
                            <span>WhatsApp mij</span>
                        </a>
                    </div>

                    {/* Card 2 — Locaties */}
                    <div className="card">
                        <h3 className="small" style={{ marginBottom: 8, color: "var(--muted)" }}>Locaties</h3>

                        <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
                            <button
                                className={`btn btn-secondary ${city === "Bakkum" ? "active" : ""}`}
                                onClick={() => setCity("Bakkum")}
                                aria-pressed={city === "Bakkum"}
                            >
                                Bakkum — Van Renesselaan 19
                            </button>
                            <button
                                className={`btn btn-secondary ${city === "Driebergen" ? "active" : ""}`}
                                onClick={() => setCity("Driebergen")}
                                aria-pressed={city === "Driebergen"}
                            >
                                Driebergen — Hoofdstraat 147
                            </button>
                        </div>

                        <div className="map-wrap">
                            <iframe
                                title={`Kaart ${city}`}
                                src={mapSrc}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
                            <a href={routeHref} target="_blank" rel="noreferrer" className="btn btn-secondary">
                                Route openen
                            </a>
                        </div>
                    </div>

                    {/* Card 3 — Socials */}
                    <div className="card">
                        <h3 className="small" style={{ marginBottom: 8, color: "var(--muted)" }}>Volgen</h3>
                        <div className="contact-socials" aria-label="Social media">
                            <a href="https://github.com/manonkeeman" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/manonkeeman/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="https://www.instagram.com/manonkeeman" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                            <a href="https://www.facebook.com/editor.lifestyle/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
                            <a href="https://substack.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Substack"><SiSubstack /></a>
                            <a href="https://medium.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Medium"><FaMedium /></a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .contact-shell {
          display:grid;
          grid-template-columns: 1fr minmax(420px, 48vw);
          gap: 20px;
          align-items: stretch;
          min-height: 92vh;
        }

        .contact-photo img {
          display:block;
          width:100%;
          height:92vh;
          object-fit:cover;
          border-radius:12px;
        }

        .contact-copy { display:flex; }
        .contact-stack {
          width:100%;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          height:100%;
          padding:8px 3cm 8px 0;
        }

        .card {
          width:100%;
          border:1px solid var(--border);
          border-radius:14px;
          background:var(--bg-alt);
          padding:16px;
          box-shadow:var(--shadow);
          box-sizing:border-box;
        }

        .btn {
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:8px 14px;
          border-radius:8px;
          font-size:.95rem;
          font-weight:500;
          cursor:pointer;
          text-decoration:none;
          transition:background .2s ease, color .2s ease, transform .2s ease, border-color .2s ease;
        }
        .btn-primary {
          background:var(--accent);
          color:var(--bg);
          border:1px solid var(--accent);
        }
        .btn-secondary {
          background:transparent;
          color:var(--text);
          border:1px solid var(--border);
        }
        .btn:hover {
          transform:translateY(-2px);
        }
        .btn-primary:hover {
          background:var(--highlight);
          border-color:var(--highlight);
        }
        .btn-secondary:hover {
          color:var(--accent);
          border-color:var(--accent);
        }
        .btn-secondary.active {
          background:var(--accent);
          color:var(--bg);
          border-color:var(--accent);
        }

        .map-wrap {
          margin-top: 10px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border);
          aspect-ratio: 16/10;
        }
        .map-wrap iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display:block;
        }

        .contact-socials {
          display:flex;
          gap:28px;
          justify-content:center;
          font-size:1.9rem;
          margin-top:12px;
        }
        .contact-socials a {
          color:var(--muted);
          transition:color .2s ease, transform .2s ease;
        }
        .contact-socials a:hover {
          color:var(--accent);
          transform:translateY(-2px);
        }

        @media (max-width: 920px){
          .contact-shell { grid-template-columns:1fr; min-height:auto; }
          .contact-photo img { height:58vh; }
          .contact-stack { padding:8px 16px; justify-content:flex-start; gap:16px; }
        }
      `}</style>
        </div>
    );
}