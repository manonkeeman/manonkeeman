import { NavLink } from "./LocaleLink.jsx";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { stripEnPrefix, withLang } from "../../i18n/langPath.js";

const LANGUAGES = [
    { code: 'nl', label: 'NL' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'es', label: 'ES' },
    { code: 'it', label: 'IT' },
    { code: 'uk', label: 'УК' },
];

export default function MobileMenu({ open, onClose }) {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const changeLang = (code) => {
        const basePath = stripEnPrefix(location.pathname);
        const target = withLang(basePath, code) + location.search + location.hash;
        if (target !== location.pathname + location.search + location.hash) {
            navigate(target);
        }
        i18n.changeLanguage(code);
        if (code === 'en') {
            localStorage.removeItem('lang');
        } else {
            localStorage.setItem('lang', code);
        }
        onClose();
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={`mobile-backdrop ${open ? 'open' : ''}`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Dropdown menu */}
            <nav
                id="mobile-menu"
                className={`mobile-dropdown ${open ? 'open' : ''}`}
                aria-label="Mobile navigation"
                aria-hidden={!open}
            >
                <div className="mobile-dropdown-inner">

                    <NavLink to="/" end onClick={onClose} className="mob-link mob-link--main">
                        {t('nav.home')}
                    </NavLink>

                    <div className="mob-divider" />

                    <p className="mob-section-label">{t('nav.portfolio')}</p>
                    <NavLink to="/backendstudentendashboard" onClick={onClose} className="mob-link">
                        {t('nav.links.portfolio.backend')}
                    </NavLink>
                    <NavLink to="/frontendvredestein" onClick={onClose} className="mob-link">
                        {t('nav.links.portfolio.frontend')}
                    </NavLink>
                    <NavLink to="/webdesignacupuncture" onClick={onClose} className="mob-link">
                        {t('nav.links.portfolio.acupuncture')}
                    </NavLink>
                    <NavLink to="/thebigthree" onClick={onClose} className="mob-link">
                        {t('nav.links.portfolio.bigthree')}
                    </NavLink>
                    <NavLink to="/marieboddaert" onClick={onClose} className="mob-link">
                        {t('nav.links.portfolio.marieboddaert')}
                    </NavLink>

                    <div className="mob-divider" />

                    <p className="mob-section-label">{t('nav.journal')}</p>
                    <NavLink to="/journal/365korteverhalen" onClick={onClose} className="mob-link">
                        {t('nav.links.journal.365korteverhalen')}
                    </NavLink>
                    <NavLink to="/journal/designchaos" onClick={onClose} className="mob-link">
                        {t('nav.links.journal.designchaos')}
                    </NavLink>
                    <NavLink to="/journal/fullstackdeveloper" onClick={onClose} className="mob-link">
                        {t('nav.links.journal.scrummaster')}
                    </NavLink>
                    <NavLink to="/journal/storytelling" onClick={onClose} className="mob-link">
                        {t('nav.links.journal.storytelling')}
                    </NavLink>
                    <NavLink to="/journal/toekomsttech" onClick={onClose} className="mob-link">
                        {t('nav.links.journal.toekomsttech')}
                    </NavLink>
                    <NavLink to="/journal/luchtvaartfamilie2018" onClick={onClose} className="mob-link">
                        {t('nav.links.journal.luchtvaartfamilie2018')}
                    </NavLink>
                    <NavLink to="/journal/pastelvanbuiten" onClick={onClose} className="mob-link">
                        {t('nav.links.journal.pastelvanbuiten')}
                    </NavLink>

                    <div className="mob-divider" />

                    <NavLink to="/about" onClick={onClose} className="mob-link mob-link--main">
                        {t('nav.about')}
                    </NavLink>
                    <NavLink to="/faq" onClick={onClose} className="mob-link mob-link--main">
                        {t('nav.faq')}
                    </NavLink>
                    <NavLink to="/#contact" onClick={onClose} className="mob-link mob-link--main">
                        {t('nav.contact')}
                    </NavLink>

                    <div className="mob-divider" />

                    <div className="mob-lang" role="group" aria-label="Taal kiezen">
                        {LANGUAGES.map(({ code, label }) => (
                            <button
                                key={code}
                                className={`mob-lang-btn ${i18n.language === code ? 'active' : ''}`}
                                onClick={() => changeLang(code)}
                                aria-pressed={i18n.language === code}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                </div>
            </nav>
        </>
    );
}
