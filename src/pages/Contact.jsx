import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const [city, setCity] = useState("Bakkum");
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const { t } = useTranslation();

    const ADDRESSES = {
        Bakkum: "Van Renesselaan 19, Bakkum",
        Driebergen: "Hoofdstraat 147, Driebergen",
    };

    const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESSES[city])}&output=embed`;
    const routeHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESSES[city])}`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        const fd = new FormData(e.target);
        const body = new URLSearchParams(fd).toString();
        try {
            const res = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body,
            });
            if (res.ok) {
                setStatus("sent");
                e.target.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="contact-shell">
            {/* FOTO links */}
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

            {/* CARDS rechts */}
            <div className="contact-copy">
                <div className="contact-stack">

                    {/* Card 1 — Contactformulier */}
                    <div className="card">
                        <h3 className="small card-subtle">{t('contact.label')}</h3>
                        <p className="card-intro">{t('contact.intro')}</p>

                        {status === "sent" ? (
                            <p className="form-success">{t('contact.form.success')}</p>
                        ) : (
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                className="contact-form"
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <p style={{ display: "none" }}><input name="bot-field" /></p>

                                <div className="form-row">
                                    <label className="form-label" htmlFor="cf-name">{t('contact.form.name')}</label>
                                    <input
                                        id="cf-name"
                                        type="text"
                                        name="name"
                                        className="form-input"
                                        placeholder={t('contact.form.namePlaceholder')}
                                        required
                                        autoComplete="name"
                                    />
                                </div>

                                <div className="form-row">
                                    <label className="form-label" htmlFor="cf-email">{t('contact.form.email')}</label>
                                    <input
                                        id="cf-email"
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        placeholder={t('contact.form.emailPlaceholder')}
                                        required
                                        autoComplete="email"
                                    />
                                </div>

                                <div className="form-row">
                                    <label className="form-label" htmlFor="cf-message">{t('contact.form.message')}</label>
                                    <textarea
                                        id="cf-message"
                                        name="message"
                                        className="form-input form-textarea"
                                        placeholder={t('contact.form.messagePlaceholder')}
                                        rows={4}
                                        required
                                    />
                                </div>

                                {status === "error" && (
                                    <p className="form-error">{t('contact.form.error')}</p>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary form-submit"
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? t('contact.form.sending') : t('contact.form.send')}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Card 2 — Locaties */}
                    <div className="card">
                        <h3 className="small card-subtle">{t('contact.locations')}</h3>

                        <div className="chip-row">
                            <button
                                className={`btn btn-secondary ${city === "Bakkum" ? "active" : ""}`}
                                onClick={() => setCity("Bakkum")}
                                aria-pressed={city === "Bakkum"}
                            >
                                Bakkum
                            </button>
                            <button
                                className={`btn btn-secondary ${city === "Driebergen" ? "active" : ""}`}
                                onClick={() => setCity("Driebergen")}
                                aria-pressed={city === "Driebergen"}
                            >
                                Driebergen
                            </button>
                        </div>

                        <div className="map-wrap">
                            <iframe
                                title={`Map ${city}`}
                                src={mapSrc}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="cta-row">
                            <a href={routeHref} target="_blank" rel="noreferrer" className="btn btn-secondary">
                                {t('contact.directions')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .contact-stack{
          width:100%;
          display:flex; flex-direction:column;
          gap: 20px;
        }

        .card{
          border:1px solid var(--border);
          border-radius:14px;
          background:var(--bg-alt);
          padding:16px;
          box-shadow:var(--shadow);
          width:100%;
          box-sizing:border-box;
        }
        .card-subtle{ margin-bottom:8px; color:var(--muted); }
        .card-intro{ line-height:1.55; margin:0 0 14px; }

        /* Formulier */
        .contact-form{ display:flex; flex-direction:column; gap:12px; }
        .form-row{ display:flex; flex-direction:column; gap:5px; }
        .form-label{
          font-size:.82rem; font-weight:600; letter-spacing:.03em;
          color:var(--muted); text-transform:uppercase;
        }
        .form-input{
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 9px;
          color: var(--text);
          font-family: inherit;
          font-size: .95rem;
          padding: 10px 13px;
          transition: border-color .18s ease, box-shadow .18s ease;
          outline: none;
          resize: none;
          width: 100%;
          box-sizing: border-box;
        }
        .form-input:focus{
          border-color: var(--accent);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 18%, transparent);
        }
        .form-input::placeholder{ color: var(--border); }
        .form-textarea{ min-height: 100px; }
        .form-submit{ width:100%; justify-content:center; margin-top:4px; }
        .form-submit:disabled{ opacity:.65; cursor:not-allowed; }
        .form-success{
          padding: 12px 14px;
          border-radius: 10px;
          background: color-mix(in srgb, var(--accent) 14%, transparent);
          border: 1px solid var(--accent);
          color: var(--text);
          font-size: .92rem;
          margin: 0;
        }
        .form-error{
          color: #e07070;
          font-size: .88rem;
          margin: 0;
        }

        .btn{
          display:inline-flex; align-items:center; gap:8px;
          padding:8px 14px; border-radius:8px;
          font-size:.95rem; font-weight:500; cursor:pointer; text-decoration:none;
          transition: background .2s ease, color .2s ease, transform .2s ease, border-color .2s ease;
        }
        .btn:hover{ transform: translateY(-2px); }
        .btn-primary{ background:var(--accent); color:var(--bg); border:1px solid var(--accent); }
        .btn-primary:hover{ filter:brightness(1.08); }
        .btn-secondary{ background:transparent; color:var(--text); border:1px solid var(--border); }
        .btn-secondary:hover{ color:var(--accent); border-color:var(--accent); }
        .btn-secondary.active{ background:var(--accent); color:var(--bg); border-color:var(--accent); }

        .chip-row{ display:flex; gap:8px; flex-wrap:wrap; margin: 0 0 10px; }

        .map-wrap{
          margin-top:10px; border-radius:12px; overflow:hidden; border:1px solid var(--border);
          aspect-ratio: 16 / 10;
        }
        .map-wrap iframe{ width:100%; height:100%; border:0; display:block; }

        .cta-row{ margin-top:10px; display:flex; gap:10px; flex-wrap:wrap; }

        @media (max-width: 920px){
          .contact-shell{ grid-template-columns: 1fr; min-height:auto; }
          .contact-photo img{ height:58vh; }
          .contact-stack{ padding: 8px 16px; }
        }
      `}</style>
        </div>
    );
}