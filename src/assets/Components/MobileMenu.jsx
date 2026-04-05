// src/assets/Components/MobileMenu.jsx
import { NavLink } from "react-router-dom";

export default function MobileMenu({ open, onClose }) {
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
                    <NavLink to="/" end onClick={onClose}>Home</NavLink>

                    <div className="mobile-divider" />

                    <details>
                        <summary>Portfolio</summary>
                        <NavLink to="/frontendvredestein" onClick={onClose}>Frontend Vredestein</NavLink>
                        <NavLink to="/webdesignacupuncture" onClick={onClose}>Webdesign Acupuncture</NavLink>
                        <NavLink to="/backendstudentendashboard" onClick={onClose}>Backend Studenten Dashboard</NavLink>
                    </details>

                    <details className="only-tall">
                        <summary>Journal</summary>
                        <NavLink to="/journal/365korteverhalen" onClick={onClose}>365 Korte Verhalen</NavLink>
                        <NavLink to="/journal/designchaos" onClick={onClose}>Design Chaos</NavLink>
                        <NavLink to="/journal/luchtvaartfamilie2018" onClick={onClose}>Luchtvaartfamilie 2018</NavLink>
                        <NavLink to="/journal/storytelling" onClick={onClose}>Storytelling</NavLink>
                        <NavLink to="/journal/toekomsttech" onClick={onClose}>Toekomst &amp; Tech</NavLink>
                    </details>

                    <div className="mobile-divider" />

                    <NavLink to={{ pathname: "/", hash: "#about" }} onClick={onClose}>About</NavLink>
                    <NavLink to={{ pathname: "/", hash: "#contact" }} onClick={onClose}>Contact</NavLink>
                </nav>

                <footer className="mobile-meta">
                    <a href="mailto:hello@manonkeeman.com">hello@manonkeeman.com</a>
                </footer>
            </div>
        </div>
    );
}