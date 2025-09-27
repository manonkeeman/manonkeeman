import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import ScrollToTop from "./assets/Components/ScrollToTop";
import Footer from "./assets/Components/Footer.jsx";

// Pagina’s (home-secties)
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Journal from "./pages/Journal.jsx";
import Contact from "./pages/Contact.jsx";
import ArticleRoute from "./pages/ArticlesJournal/ArticleRoute.jsx";

// Portfolio detailpagina’s (let op: map + bestandsnamen)
import FrontendVredestein from "./pages/Portfolio/FrontendVredestein.jsx";
import WebdesignAcupuncture from "./pages/Portfolio/WebdesignAcupuncture.jsx";
import BackendStudentenDashboard from "./pages/Portfolio/BackendStudentenDashboard.jsx";

import "./Styles.css";

// Basis layout met <main> en footer
function Layout({ children }) {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default function App() {
    // Smooth scroll voor anchors (# of /#)
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const anchor = e.target.closest('a[href^="#"], a[href^="/#"]');
            if (!anchor) return;

            const href = anchor.getAttribute("href");
            if (!href) return;

            const targetId = href.startsWith("/#") ? href.slice(1) : href;
            if (!targetId.startsWith("#")) return;

            const target = document.querySelector(targetId);
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
                {/* Homepagina met secties */}
                <Route
                    path="/"
                    element={
                        <Layout>
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
                        </Layout>
                    }
                />

                {/* Artikelen (journal) */}
                <Route
                    path="/journal/:slug"
                    element={
                        <Layout>
                            <ArticleRoute />
                        </Layout>
                    }
                />

                {/* Portfolio detailpagina’s */}
                <Route
                    path="/frontend"
                    element={
                        <Layout>
                            <FrontendVredestein />
                        </Layout>
                    }
                />
                <Route
                    path="/webdesignacupuncture"
                    element={
                        <Layout>
                            <WebdesignAcupuncture />
                        </Layout>
                    }
                />
                <Route
                    path="/backendstudentendashboard"
                    element={
                        <Layout>
                            <BackendStudentenDashboard />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}