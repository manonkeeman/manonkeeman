import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-inner">
                {/* Col 1 — Brand */}
                <div className="footer-col footer-brand">
                    <img
                        src="/MKlogo.jpg"
                        alt="MK Logo"
                        className="footer-logo"
                        width="40"
                        height="40"
                    />
                    <p className="footer-tagline">Full Stack Developer<br/>Systems Thinker · Builder</p>
                    <p className="footer-copy">© {new Date().getFullYear()} Manon Keeman</p>
                </div>

                {/* Col 2 — Nav */}
                <nav className="footer-col footer-nav" aria-label="Footer navigation">
                    <p className="footer-heading">Navigation</p>
                    <Link to="/">{t('nav.home')}</Link>
                    <a href="/#portfolio">{t('nav.portfolio')}</a>
                    <a href="/#journal">{t('nav.journal')}</a>
                    <a href="/#about">{t('nav.about')}</a>
                    <a href="/#contact">{t('nav.contact')}</a>
                </nav>

                {/* Col 3 — Contact + socials */}
                <div className="footer-col footer-contact">
                    <p className="footer-heading">Contact</p>
                    <a
                        href="https://wa.me/31624766568"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-wa"
                    >
                        <FaWhatsapp /> WhatsApp
                    </a>
                    <div className="footer-socials">
                        <a href="https://github.com/manonkeeman" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/manonkeeman/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/manonkeeman" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://www.facebook.com/editor.lifestyle/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://substack.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Substack"><SiSubstack /></a>
                    </div>
                </div>
            </div>

            <p className="footer-legal">{t('footer.rights')}</p>

            <style>{`
        .footer {
          padding: 48px 20px 20px;
          background: var(--bg-alt);
          border-top: 1px solid var(--border);
        }

        .footer-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto 32px;
        }

        .footer-col { display: flex; flex-direction: column; gap: 10px; }

        .footer-logo {
          width: 40px; height: 40px;
          border-radius: 8px;
          filter: brightness(0.55) sepia(1) saturate(1.4);
          margin-bottom: 4px;
        }

        .footer-tagline {
          margin: 0;
          font-size: .88rem;
          color: var(--muted);
          line-height: 1.6;
        }

        .footer-copy {
          margin: 0;
          font-size: .82rem;
          color: var(--border);
        }

        .footer-heading {
          margin: 0 0 4px;
          font-size: .78rem;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--accent);
        }

        .footer-nav a,
        .footer-contact a:not(.footer-wa) {
          color: var(--muted);
          font-size: .9rem;
          text-decoration: none;
          transition: color .2s ease;
          width: fit-content;
        }
        .footer-nav a:hover,
        .footer-contact a:not(.footer-wa):hover { color: var(--accent); }

        .footer-wa {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--muted);
          font-size: .9rem;
          text-decoration: none;
          transition: color .2s ease;
          width: fit-content;
        }
        .footer-wa:hover { color: #25d366; }

        .footer-socials {
          display: flex;
          gap: 16px;
          font-size: 1.3rem;
          margin-top: 4px;
        }
        .footer-socials a {
          color: var(--muted);
          transition: color .2s ease, transform .2s ease;
        }
        .footer-socials a:hover {
          color: var(--accent);
          transform: translateY(-2px);
        }

        .footer-legal {
          text-align: center;
          font-size: .78rem;
          color: var(--border);
          margin: 0;
          padding-top: 20px;
          border-top: 1px solid var(--border);
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (max-width: 720px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
          }
          .footer-brand { grid-column: 1 / -1; }
        }

        @media (max-width: 480px) {
          .footer-inner {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>
        </footer>
    );
}