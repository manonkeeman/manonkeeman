import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
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
                {/* Logo */}
                <NavLink to="/" className="nav-logo-link" aria-label="Home">
                    <img src="/MKlogo.svg" alt="MK" className="nav-logo" width="32" height="32" />
                </NavLink>

                {/* Desktop nav */}
                <nav className="primary-nav desktop-only" aria-label="Main navigation">
                    <NavLink to="/" end>{t('nav.home')}</NavLink>

                    <div className="nav-group">
                        <NavLink to={{ pathname: "/", hash: "#portfolio" }}>{t('nav.portfolio')}</NavLink>
                        <div className="nav-dropdown">
                            <NavLink to="/frontendvredestein">{t('nav.links.portfolio.frontend')}</NavLink>
                            <NavLink to="/webdesignacupuncture">{t('nav.links.portfolio.acupuncture')}</NavLink>
                            <NavLink to="/backendstudentendashboard">{t('nav.links.portfolio.backend')}</NavLink>
                        </div>
                    </div>

                    <div className="nav-group">
                        <NavLink to={{ pathname: "/", hash: "#journal" }}>{t('nav.journal')}</NavLink>
                        <div className="nav-dropdown">
                            <NavLink to="/journal/365korteverhalen">{t('nav.links.journal.365korteverhalen')}</NavLink>
                            <NavLink to="/journal/designchaos">{t('nav.links.journal.designchaos')}</NavLink>
                            <NavLink to="/journal/luchtvaartfamilie2018">{t('nav.links.journal.luchtvaartfamilie2018')}</NavLink>
                            <NavLink to="/journal/scrummaster">{t('nav.links.journal.scrummaster')}</NavLink>
                            <NavLink to="/journal/storytelling">{t('nav.links.journal.storytelling')}</NavLink>
                            <NavLink to="/journal/toekomsttech">{t('nav.links.journal.toekomsttech')}</NavLink>
                        </div>
                    </div>

                    <NavLink to={{ pathname: "/", hash: "#about" }}>{t('nav.about')}</NavLink>
                    <NavLink to={{ pathname: "/", hash: "#contact" }}>{t('nav.contact')}</NavLink>

                    <a
                        href="https://github.com/manonkeeman"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="nav-github"
                    >
                        <FaGithub />
                    </a>

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