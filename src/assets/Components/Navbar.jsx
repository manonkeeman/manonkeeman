import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu.jsx";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    // Sluit menu bij route change
    useEffect(() => { setOpen(false); }, [pathname]);

    return (
        <header className="site-header">
            <div className="nav-wrap">

                {/* Desktop nav */}
                <nav className="primary-nav desktop-only" aria-label="Hoofd navigatie">
                    <NavLink to="/" end>Home</NavLink>

                    <div className="nav-group">
                        {/* ANCHOR naar sectie op home: gebruik object-URL */}
                        <NavLink to={{ pathname: "/", hash: "#portfolio" }}>Portfolio</NavLink>
                        <div className="nav-dropdown">
                            {/* Detailpagina’s: echte routes */}
                            <NavLink to="/frontendvredestein">Frontend Vredestein</NavLink>
                            <NavLink to="/webdesignacupuncture">Webdesign Acupuncture</NavLink>
                            <NavLink to="/backendstudentendashboard">Backend Studenten Dashboard</NavLink>
                        </div>
                    </div>

                    <div className="nav-group">
                        <NavLink to={{ pathname: "/", hash: "#journal" }}>Journal</NavLink>
                        <div className="nav-group">
                            <NavLink to="/journal">Journal</NavLink>
                            <div className="nav-dropdown">
                                <NavLink to="/journal/365korteverhalen">365 Korte Verhalen</NavLink>
                                <NavLink to="/journal/designchaos">Design Chaos</NavLink>
                                <NavLink to="/journal/luchtvaartfamilie2018">Luchtvaartfamilie 2018</NavLink>
                                <NavLink to="/journal/scrummaster">Scrummaster</NavLink>
                                <NavLink to="/journal/storytelling">Storytelling</NavLink>
                                <NavLink to="/journal/toekomsttech">Toekomst & Tech</NavLink>
                            </div>
                        </div>
                    </div>

                    <NavLink to={{ pathname: "/", hash: "#about" }}>Over mij</NavLink>
                    <NavLink to={{ pathname: "/", hash: "#contact" }}>Contact</NavLink>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="hamburger mobile-only"
                    aria-label={open ? "Sluit menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen(v => !v)}
                >
                    <span className="bar"/><span className="bar"/><span className="bar"/>
                </button>
            </div>

            {/* Mobile overlay menu */}
            <MobileMenu open={open} onClose={() => setOpen(false)} />
        </header>
    );
}