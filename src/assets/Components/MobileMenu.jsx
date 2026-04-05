// src/assets/Components/MobileMenu.jsx
import { NavLink } from "react-router-dom";

export default function MobileMenu({ open, onClose }) {
    return (
        <div
            id="mobile-menu"
            className={`mobile-overlay ${open ? "open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobiele navigatie"
            onClick={(e) => {
                if (e.currentTarget === e.target) onClose(); // klik buiten panel sluit menu
            }}
        >
            <div className="mobile-panel" role="document">
                <button className="close-x" aria-label="Sluit menu" onClick={onClose}>×</button>

                <nav className="mobile-nav" aria-label="Mobiele navigatie lijst">
                    <NavLink to="/" end onClick={onClose}>Home</NavLink>

                    <details>
                        <summary>Portfolio</summary>
                        <NavLink to="/frontendvredestein" onClick={onClose}>Frontend Vredestein</NavLink>
                        <NavLink to="/webdesignacupuncture" onClick={onClose}>Webdesign Acupuncture</NavLink>
                        <NavLink to="/backendstudentendashboard" onClick={onClose}>Backend Studenten Dashboard</NavLink>
                    </details>

                    {/* Journal hoofdlink (compact) */}
                    <NavLink to={{ pathname: "/", hash: "#journal" }} onClick={onClose}>
                        Journal
                    </NavLink>

                    {/* Optioneel: toon laatste artikelen alleen op hogere schermen */}
                    <details className="only-tall">
                        <summary>Laatste artikelen</summary>
                        <NavLink to="/journal/365korteverhalen" onClick={onClose}>365 Korte Verhalen</NavLink>
                        <NavLink to="/journal/designchaos" onClick={onClose}>Design Chaos</NavLink>
                        <NavLink to="/journal/luchtvaartfamilie2018" onClick={onClose}>Luchtvaartfamilie 2018</NavLink>
                        <NavLink to={{ pathname: "/", hash: "#journal" }} onClick={onClose}>
                            Alle 6 artikelen →
                        </NavLink>
                    </details>

                    <NavLink to={{ pathname: "/", hash: "#about" }} onClick={onClose}>Over mij</NavLink>
                    <NavLink to={{ pathname: "/", hash: "#contact" }} onClick={onClose}>Contact</NavLink>
                </nav>

                <footer className="mobile-meta">
                    <a href="mailto:hello@manonkeeman.com">hello@manonkeeman.com</a>
                </footer>
            </div>
        </div>
    );
}