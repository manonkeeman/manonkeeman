import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const { t } = useTranslation();

    useEffect(() => { setOpen(false); }, [pathname]);

    return (
        <header className="site-header">
            <div className="nav-wrap">
                {/* Brand — visible on mobile */}
                <NavLink to="/" className="nav-brand mobile-only">Manon Keeman</NavLink>

                {/* Desktop nav */}
                <nav className="primary-nav desktop-only" aria-label="Main navigation">
                    <NavLink to="/" end>{t('nav.home')}</NavLink>

                    <div className="nav-group">
                        <NavLink to={{ pathname: "/", hash: "#portfolio" }}>{t('nav.portfolio')}</NavLink>
                        <div className="nav-dropdown">
                            <NavLink to="/frontendvredestein">Frontend Vredestein</NavLink>
                            <NavLink to="/webdesignacupuncture">Webdesign Acupuncture</NavLink>
                            <NavLink to="/backendstudentendashboard">Backend Studenten Dashboard</NavLink>
                        </div>
                    </div>

                    <div className="nav-group">
                        <NavLink to={{ pathname: "/", hash: "#journal" }}>{t('nav.journal')}</NavLink>
                        <div className="nav-dropdown">
                            <NavLink to="/journal/365korteverhalen">365 Korte Verhalen</NavLink>
                            <NavLink to="/journal/designchaos">Design Chaos</NavLink>
                            <NavLink to="/journal/luchtvaartfamilie2018">Luchtvaartfamilie 2018</NavLink>
                            <NavLink to="/journal/scrummaster">Scrummaster</NavLink>
                            <NavLink to="/journal/storytelling">Storytelling</NavLink>
                            <NavLink to="/journal/toekomsttech">Toekomst &amp; Tech</NavLink>
                        </div>
                    </div>

                    <NavLink to={{ pathname: "/", hash: "#about" }}>{t('nav.about')}</NavLink>
                    <NavLink to={{ pathname: "/", hash: "#contact" }}>{t('nav.contact')}</NavLink>

                    <LanguageSwitcher />
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="hamburger mobile-only"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen(v => !v)}
                >
                    <span className="bar"/><span className="bar"/><span className="bar"/>
                </button>
            </div>

            <MobileMenu open={open} onClose={() => setOpen(false)} />
        </header>
    );
}