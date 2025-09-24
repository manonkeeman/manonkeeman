// src/App.jsx
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import ScrollToTop from "./assets/Components/ScrollToTop";
import Footer from "./assets/Components/Footer.jsx";

// Pages (home-secties)
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Journal from "./pages/Journal.jsx";
import Contact from "./pages/Contact.jsx";
import ArticleRoute from "./pages/ArticleRoute.jsx";
import "./Styles.css";

export default function App() {
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const anchor = e.target.closest('a[href^="#"], a[href^="/#"]');
            if (!anchor) return;

            const href = anchor.getAttribute("href");
            if (!href) return;

            const normalized = href.startsWith("/#") ? href.slice(1) : href;
            if (!normalized.startsWith("#")) return;

            const target = document.querySelector(normalized);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        };

        document.addEventListener("click", handleAnchorClick);
        return () => document.removeEventListener("click", handleAnchorClick);
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <main>
                                <section id="home" className="section">
                                    <Hero />
                                </section>

                                <section id="about" className="section section-alt">
                                    <About />
                                </section>

                                <section id="portfolio" className="section">
                                    <Portfolio />
                                </section>

                                <section id="journal" className="section section-alt">
                                    <Journal />
                                </section>

                                <section id="contact" className="section">
                                    <Contact />
                                </section>
                            </main>
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/journal/:slug"
                    element={
                        <>
                            <main>
                                <ArticleRoute />
                            </main>
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}