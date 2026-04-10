import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Layout components (always needed)
import ScrollToTop from "./assets/Components/ScrollToTop";
import Navbar from "./assets/Components/Navbar.jsx";
import Footer from "./assets/Components/Footer.jsx";
import StickyWhatsApp from "./assets/Components/StickyWhatsApp.jsx";
import Seo from "./assets/Components/Seo.jsx";

// Home sections (needed immediately on first load)
import Hero from "./pages/Hero.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";

// Detail pages — lazy loaded (only fetched when user navigates there)
const About        = lazy(() => import("./pages/About.jsx"));
const Journal      = lazy(() => import("./pages/Journal.jsx"));
const ArticleRoute = lazy(() => import("./pages/ArticlesJournal/ArticleRoute.jsx"));

// Prefetch veelgebruikte pagina's zodra browser idle is
const prefetch = () => {
    import("./pages/About.jsx");
    import("./pages/Journal.jsx");
};
if (typeof requestIdleCallback !== "undefined") {
    requestIdleCallback(prefetch);
} else {
    setTimeout(prefetch, 2000);
}
const FrontendVredestein    = lazy(() => import("./pages/Portfolio/FrontendVredestein.jsx"));
const WebdesignAcupuncture  = lazy(() => import("./pages/Portfolio/WebdesignAcupuncture.jsx"));
const BackendStudentenDashboard = lazy(() => import("./pages/Portfolio/BackendStudentenDashboard.jsx"));

import "./Styles.css";

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <StickyWhatsApp />
        </>
    );
}

function PageLoader() {
    return (
        <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "var(--muted)", fontSize: "0.95rem" }}>Loading…</span>
        </div>
    );
}

function HomeSeo() {
    const { t, i18n } = useTranslation();
    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);
    return (
        <Seo
            title={t("seo.home.title")}
            description={t("seo.home.description")}
            path="/"
        />
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
                {/* Home — all sections rendered directly */}
                <Route
                    path="/"
                    element={
                        <Layout>
                            <HomeSeo />
                            <section id="home"      className="section"><Hero /></section>
                            <section id="portfolio" className="section"><Portfolio /></section>
                            <section id="contact"   className="section"><Contact /></section>
                        </Layout>
                    }
                />

                {/* About pagina — lazy */}
                <Route
                    path="/about"
                    element={
                        <Layout>
                            <Suspense fallback={<PageLoader />}>
                                <About />
                            </Suspense>
                        </Layout>
                    }
                />

                {/* Journal overzichtspagina — lazy */}
                <Route
                    path="/journal"
                    element={
                        <Layout>
                            <Suspense fallback={<PageLoader />}>
                                <Journal />
                            </Suspense>
                        </Layout>
                    }
                />

                {/* Journal detail — lazy */}
                <Route
                    path="/journal/:slug"
                    element={
                        <Layout>
                            <Suspense fallback={<PageLoader />}>
                                <ArticleRoute />
                            </Suspense>
                        </Layout>
                    }
                />

                {/* Portfolio detail pages — lazy */}
                <Route
                    path="/frontendvredestein"
                    element={
                        <Layout>
                            <Suspense fallback={<PageLoader />}>
                                <FrontendVredestein />
                            </Suspense>
                        </Layout>
                    }
                />
                <Route
                    path="/webdesignacupuncture"
                    element={
                        <Layout>
                            <Suspense fallback={<PageLoader />}>
                                <WebdesignAcupuncture />
                            </Suspense>
                        </Layout>
                    }
                />
                <Route
                    path="/backendstudentendashboard"
                    element={
                        <Layout>
                            <Suspense fallback={<PageLoader />}>
                                <BackendStudentenDashboard />
                            </Suspense>
                        </Layout>
                    }
                />

                {/* Redirects */}
                <Route path="/frontend"            element={<Navigate to="/frontendvredestein"   replace />} />
                <Route path="/webdesignacupunture" element={<Navigate to="/webdesignacupuncture" replace />} />

                {/* 404 */}
                <Route path="*" element={<Layout><div style={{ padding: 24 }}>Page not found</div></Layout>} />
            </Routes>
        </Router>
    );
}