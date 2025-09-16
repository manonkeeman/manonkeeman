import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid var(--border)",
                padding: "28px 20px",
                background: "var(--bg-alt)",
            }}
        >
            <div
                className="container"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    flexWrap: "wrap",
                }}
            >
                <p className="small" style={{ margin: 0 }}>
                    © {new Date().getFullYear()} code en content by Manon Keeman
                </p>
                <div style={{ display: "flex", gap: 18, fontSize: "1.5rem" }}>
                    <a
                        href="https://github.com/manonkeeman"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        style={{ color: "var(--muted)" }}
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/manonkeeman/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        style={{ color: "var(--muted)" }}
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.instagram.com/manonkeeman"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        style={{ color: "var(--muted)" }}
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.facebook.com/editor.lifestyle/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                        style={{ color: "var(--muted)" }}
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://substack.com/@manonkeeman"
                        aria-label="Substack"
                        style={{ color: "var(--muted)" }}
                    >
                        <SiSubstack />
                    </a>
                </div>
            </div>
        </footer>
    );
}