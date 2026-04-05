import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import ScrollToTop from "./assets/Components/ScrollToTop";
import Navbar from "./assets/Components/Navbar.jsx";
import Footer from "./assets/Components/Footer.jsx";

// Pages (home sections)
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Journal from "./pages/Journal.jsx";
import Contact from "./pages/Contact.jsx";
import ArticleRoute from "./pages/ArticlesJournal/ArticleRoute.jsx";

// Portfolio detail pages
import FrontendVredestein from "./pages/Portfolio/FrontendVredestein.jsx";
import WebdesignAcupuncture from "./pages/Portfolio/WebdesignAcupuncture.jsx";
import BackendStudentenDashboard from "./pages/Portfolio/BackendStudentenDashboard.jsx";

import "./Styles.css";

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default function App() {
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
                {/* Home */}
                <Route
                    path="/"
                    element={
                        <Layout>
                            <section id="home" className="section"><Hero /></section>
                            <section id="about" className="section section-alt"><About /></section>
                            <section id="portfolio" className="section"><Portfolio /></section>
                            <section id="journal" className="section section-alt"><Journal /></section>
                            <section id="contact" className="section"><Contact /></section>
                        </Layout>
                    }
                />

                {/* Journal */}
                <Route
                    path="/journal/:slug"
                    element={
                        <Layout>
                            <ArticleRoute />
                        </Layout>
                    }
                />

                {/* Portfolio detail pages */}
                <Route
                    path="/frontendvredestein"
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

                {/* Redirects */}
                <Route path="/frontend" element={<Navigate to="/frontendvredestein" replace />} />
                <Route path="/webdesignacupunture" element={<Navigate to="/webdesignacupuncture" replace />} />

                {/* 404 */}
                <Route path="*" element={<Layout><div style={{ padding: 24 }}>Page not found</div></Layout>} />
            </Routes>
        </Router>
    );
}
