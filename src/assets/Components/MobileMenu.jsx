import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
    { code: 'nl', label: 'NL' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'es', label: 'ES' },
    { code: 'it', label: 'IT' },
];

export default function MobileMenu({ open, onClose }) {
    const { t, i18n } = useTranslation();

    const changeLang = (code) => {
        i18n.changeLanguage(code);
        localStorage.setItem('lang', code);
    };

    return (
        <div
            id="mobile-menu"
            className={`mobile-overlay ${open ? "open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onClick={(e) => {
                if (e.currentTarget === e.target) onClose();
            }}
        >
            <div className="mobile-panel" role="document">
                <span className="mobile-brand">Manon Keeman</span>
                <button className="close-x" aria-label="Close menu" onClick={onClose}>×</button>

                <nav className="mobile-nav" aria-label="Mobile navigation">
                    <NavLink to="/" end onClick={onClose}>{t('nav.home')}</NavLink>

                    <div className="mobile-divider" />

                    <details>
                        <summary>{t('nav.portfolio')}</summary>
                        <NavLink to="/frontendvredestein" onClick={onClose}>Frontend Vredestein</NavLink>
                        <NavLink to="/webdesignacupuncture" onClick={onClose}>Webdesign Acupuncture</NavLink>
                        <NavLink to="/backendstudentendashboard" onClick={onClose}>Backend Studenten Dashboard</NavLink>
                    </details>

                    <details className="only-tall">
                        <summary>{t('nav.journal')}</summary>
                        <NavLink to="/journal/365korteverhalen" onClick={onClose}>365 Korte Verhalen</NavLink>
                        <NavLink to="/journal/designchaos" onClick={onClose}>Design Chaos</NavLink>
                        <NavLink to="/journal/luchtvaartfamilie2018" onClick={onClose}>Luchtvaartfamilie 2018</NavLink>
                        <NavLink to="/journal/storytelling" onClick={onClose}>Storytelling</NavLink>
                        <NavLink to="/journal/toekomsttech" onClick={onClose}>Toekomst &amp; Tech</NavLink>
                    </details>

                    <div className="mobile-divider" />

                    <NavLink to={{ pathname: "/", hash: "#about" }} onClick={onClose}>{t('nav.about')}</NavLink>
                    <NavLink to={{ pathname: "/", hash: "#contact" }} onClick={onClose}>{t('nav.contact')}</NavLink>
                </nav>

                {/* Inline language row — no dropdown, fits naturally in panel */}
                <div className="mobile-lang" role="group" aria-label="Language">
                    {LANGUAGES.map(({ code, label }) => (
                        <button
                            key={code}
                            className={`mobile-lang-btn${i18n.language === code ? ' active' : ''}`}
                            onClick={() => changeLang(code)}
                            aria-pressed={i18n.language === code}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <footer className="mobile-meta">
                    <a href="mailto:hello@manonkeeman.com">hello@manonkeeman.com</a>
                </footer>
            </div>
        </div>
    );
}