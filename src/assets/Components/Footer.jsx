import { Link } from "./LocaleLink.jsx";
import { Link as RouterLink } from "react-router-dom";
import { useLangPrefix } from "./useLangPrefix.js";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    const { t } = useTranslation();
    const prefix = useLangPrefix();

    return (
        <footer className="footer">
            <div className="footer-inner">
                {/* Col 1 — Brand */}
                <div className="footer-col footer-brand">
                    <img src="/logo-compact-dark.svg" alt="ManonIT" height="44" style={{ borderRadius: 0 }} />
                    <p className="footer-tagline">{t('footer.tagline')}</p>
                </div>

                {/* Col 2 — Nav */}
                <nav className="footer-col footer-nav" aria-label="Footer navigation">
                    <p className="footer-heading">Navigation</p>
                    <Link to="/">{t('nav.home')}</Link>
                    <a href={`${prefix}/#portfolio`}>{t('nav.portfolio')}</a>
                    <Link to="/frontendvredestein">{t('nav.links.portfolio.frontend')}</Link>
                    <Link to="/webdesignacupuncture">{t('nav.links.portfolio.acupuncture')}</Link>
                    <Link to="/thebigthree">{t('nav.links.portfolio.bigthree')}</Link>
                    <Link to="/marieboddaert">{t('nav.links.portfolio.marieboddaert')}</Link>
                    <Link to="/backendstudentendashboard">{t('nav.links.portfolio.backend')}</Link>
                    <Link to="/journal">{t('nav.journal')}</Link>
                    <Link to="/journal/pastelvanbuiten">{t('nav.links.journal.pastelvanbuiten')}</Link>
                    <Link to="/about">{t('nav.about')}</Link>
                    <Link to="/faq">{t('nav.faq')}</Link>
                    <a href={`${prefix}/#contact`}>{t('nav.contact')}</a>
                </nav>

                {/* Col 3 — Legal */}
                <div className="footer-col footer-legal-col">
                    <p className="footer-heading">Juridisch</p>
                    {/* Plain RouterLink: geen /en-prefix — deze pagina's zijn NL-only */}
                    <RouterLink to="/privacy">Privacybeleid</RouterLink>
                    <RouterLink to="/colofon">Colofon</RouterLink>
                    <a href="/sitemap.xml" target="_blank" rel="noreferrer">Sitemap</a>
                    <p className="footer-copy" style={{ marginTop: 8 }}>KVK: 42053266</p>
                    <p className="footer-copy">BTW: NL005459093B94</p>
                </div>

                {/* Col 4 — Contact + socials */}
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
                    <a
                        href="https://manonkeeman.substack.com"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-substack"
                    >
                        <SiSubstack /> Volg mij op Substack
                    </a>

                    <div className="footer-socials">
                        <a href="https://github.com/manonkeeman" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/manonkeeman/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/manonkeeman" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://www.facebook.com/editor.lifestyle/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
                    </div>
                </div>
            </div>

            <p className="footer-legal">{t('footer.rights')}</p>

            <style>{`
        .footer {
          padding: 48px 20px 20px;
          background: var(--dark);
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .footer-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr 0.8fr 0.8fr;
          gap: 40px;
          max-width: 1100px;
          margin: 0 auto 32px;
        }

        .footer-col { display: flex; flex-direction: column; gap: 10px; }

        .footer-tagline {
          margin: 0;
          font-size: .88rem;
          color: rgba(251,246,238,.45);
          line-height: 1.6;
        }

        .footer-copy {
          margin: 0;
          font-size: .82rem;
          color: rgba(251,246,238,.25);
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
          color: rgba(251,246,238,.45);
          font-size: .9rem;
          text-decoration: none;
          transition: color .2s ease;
          width: fit-content;
        }
        .footer-nav a:hover,
        .footer-contact a:not(.footer-wa):hover { color: var(--accent); text-decoration: none; }

        .footer-wa {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(251,246,238,.45);
          font-size: .9rem;
          text-decoration: none;
          transition: color .2s ease;
          width: fit-content;
        }
        .footer-wa:hover { color: #25d366; }

        .footer-substack {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 16px;
          border-radius: 999px;
          border: 1px solid rgba(251,246,238,.2);
          color: rgba(251,246,238,.65);
          font-size: .85rem;
          font-weight: 600;
          text-decoration: none;
          transition: border-color .2s ease, color .2s ease;
          width: fit-content;
        }
        .footer-substack:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .footer-socials {
          display: flex;
          gap: 16px;
          font-size: 1.3rem;
          margin-top: 4px;
        }
        .footer-socials a {
          color: rgba(251,246,238,.35);
          transition: color .2s ease, transform .2s ease;
        }
        .footer-socials a:hover {
          color: var(--accent);
          transform: translateY(-2px);
        }

        .footer-legal {
          text-align: center;
          font-size: .78rem;
          color: rgba(251,246,238,.2);
          margin: 0 auto;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.06);
          max-width: 1000px;
        }

        .footer-legal-col a {
          color: rgba(251,246,238,.45);
          font-size: .9rem;
          text-decoration: none;
          transition: color .2s ease;
          width: fit-content;
        }
        .footer-legal-col a:hover { color: var(--accent); }

        @media (max-width: 900px) {
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