import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

export default function Contact() {
    return (
        <div className="contact-shell">
            {/* FOTO LINKS (boven de vouw? zo ja: geen lazy) */}
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
                        height="1067"        /* pas aan als jouw aspect ratio anders is */
                        alt="Portret Manon Keeman"
                        decoding="async"
                    />
                </picture>
            </div>

            {/* CARDS RECHTS */}
            <div className="contact-copy">
                <div className="contact-stack">
                    {/* Card 1 — Contact + CTA's */}
                    <div className="card">
                        <h3 className="small" style={{ marginBottom: 8, color: "var(--muted)" }}>Contact</h3>
                        <p style={{ marginBottom: 12, lineHeight: 1.55 }}>
                            Bedankt voor je bezoek. Wil je meer weten of kan ik helpen met een project?
                        </p>
                        <div className="contact-ctas" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                            <a
                                href="mailto:manonkeeman@gmail.com"
                                className="btn btn-primary"
                                data-arrow
                                aria-label="E-mail Manon Keeman"
                            >
                                Email mij
                            </a>
                            <a
                                href="https://wa.me/31624766568"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-outline"
                                aria-label="WhatsApp Manon Keeman"
                                title="WhatsApp"
                                style={{ gap: 8, display: "inline-flex", alignItems: "center" }}
                            >
                                <FaWhatsapp style={{ fontSize: "1.2rem" }} />
                                WhatsApp mij
                            </a>
                        </div>
                    </div>

                    {/* Card 2 — Locaties */}
                    <div className="card">
                        <h3 className="small" style={{ marginBottom: 8, color: "var(--muted)" }}>Locaties</h3>
                        <div style={{ display: "grid", placeItems: "center", paddingTop: 12 }}>
                            <picture>
                                <source
                                    type="image/avif"
                                    srcSet="/contact-map-400w.avif 400w, /contact-map-800w.avif 800w, /contact-map-1200w.avif 1200w"
                                    sizes="(max-width: 920px) 90vw, 360px"
                                />
                                <source
                                    type="image/webp"
                                    srcSet="/contact-map-400w.webp 400w, /contact-map-800w.webp 800w, /contact-map-1200w.webp 1200w"
                                    sizes="(max-width: 920px) 90vw, 360px"
                                />
                                <img
                                    src="/contact-map-400w.webp"
                                    width="360"
                                    height="240"
                                    style={{ width: "100%", maxWidth: 360, borderRadius: 8 }}
                                    alt="Kaart van Nederland met Bakkum en Driebergen gemarkeerd"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </div>
                    </div>

                    {/* Card 3 — Social media */}
                    <div className="card">
                        <h3 className="small" style={{ marginBottom: 8, color: "var(--muted)" }}>Volgen</h3>
                        <div
                            className="contact-socials"
                            aria-label="Social media"
                            style={{ display: "flex", gap: 28, justifyContent: "center", fontSize: "1.9rem" }}
                        >
                            <a href="https://github.com/manonkeeman" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/manonkeeman/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/manonkeeman" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com/editor.lifestyle/" target="_blank" rel="noreferrer" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                            <a href="https://substack.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Substack">
                                <SiSubstack />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}