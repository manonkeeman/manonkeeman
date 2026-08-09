import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { isEnPath } from "./i18n/langPath.js";

// Layout components (always needed)
import ScrollToTop from "./assets/Components/ScrollToTop";
import Navbar from "./assets/Components/Navbar.jsx";
import Footer from "./assets/Components/Footer.jsx";
import StickyWhatsApp from "./assets/Components/StickyWhatsApp.jsx";
import Seo from "./assets/Components/Seo.jsx";

// Hero — altijd direct geladen (above the fold)
import Hero from "./pages/Hero.jsx";

// Home secties — lazy: eigen chunks, meteen geprefetcht na hero
const Services      = lazy(() => import("./pages/Services.jsx"));
const Portfolio     = lazy(() => import("./pages/Portfolio.jsx"));
const Testimonials  = lazy(() => import("./pages/Testimonials.jsx"));
const Contact       = lazy(() => import("./pages/Contact.jsx"));

// Detail pages — lazy loaded (only fetched when user navigates there)
const About        = lazy(() => import("./pages/About.jsx"));
const Journal      = lazy(() => import("./pages/Journal.jsx"));
const ArticleRoute = lazy(() => import("./pages/ArticlesJournal/ArticleRoute.jsx"));
const Faq          = lazy(() => import("./pages/Faq.jsx"));

// Legal pages
const Privacy  = lazy(() => import("./pages/Privacy.jsx"));
const Colofon  = lazy(() => import("./pages/Colofon.jsx"));

// Unlisted pricing pages — not in nav, not indexed
const OfferteDavidBroeksma = lazy(() => import("./pages/Offerte.jsx"));

// Prefetch alles zodra browser idle is — zodat scrollen geen laadtijd geeft
const prefetch = () => {
    import("./pages/Services.jsx");
    import("./pages/Portfolio.jsx");
    import("./pages/Contact.jsx");
    import("./pages/About.jsx");
    import("./pages/Journal.jsx");
};
if (typeof requestIdleCallback !== "undefined") {
    requestIdleCallback(prefetch);
} else {
    setTimeout(prefetch, 1000);
}
const FrontendVredestein        = lazy(() => import("./pages/Portfolio/FrontendVredestein.jsx"));
const WebdesignAcupuncture      = lazy(() => import("./pages/Portfolio/WebdesignAcupuncture.jsx"));
const BackendStudentenDashboard = lazy(() => import("./pages/Portfolio/BackendStudentenDashboard.jsx"));
const TheBigThree               = lazy(() => import("./pages/Portfolio/TheBigThree.jsx"));
const MarieboddaertWriterSite   = lazy(() => import("./pages/Portfolio/MarieboddaertWriterSite.jsx"));

import "./Styles.css";

function Layout({ children }) {
    useEffect(() => {
        const shell = document.getElementById("app-shell");
        if (!shell) return;
        shell.style.opacity = "0";
        const t = setTimeout(() => shell.remove(), 260);
        return () => clearTimeout(t);
    }, []);

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

// /en/... is de enige URL-gestuurde taal naast NL (default). Bij het wisselen
// tussen die twee delen van de boom zet dit i18n gelijk aan de URL; FR/DE/ES/IT/UK
// blijven client-side taalkeuzes die de URL niet aanraken (zie LanguageSwitcher).
function LangSync() {
    const location = useLocation();
    const { i18n } = useTranslation();

    useEffect(() => {
        const wantsEn = isEnPath(location.pathname);
        if (wantsEn) {
            if (i18n.language !== "en") i18n.changeLanguage("en");
        } else if (i18n.language === "en") {
            const saved = localStorage.getItem("lang");
            i18n.changeLanguage(saved && saved !== "en" ? saved : "nl");
        }
    }, [location.pathname, i18n]);

    return null;
}

// GA4's automatic page_view (disabled in index.html via send_page_view: false)
// only fires once, on the initial full page load. In a client-side-routed SPA
// every later navigation needs its own event, or GA only ever sees the landing page.
// A rAF tick lets react-helmet-async commit the new <title> first.
function GaPageview() {
    const location = useLocation();

    useEffect(() => {
        if (typeof window.gtag !== "function") return;
        const id = requestAnimationFrame(() => {
            window.gtag("event", "page_view", {
                page_path: location.pathname + location.search,
                page_location: window.location.href,
                page_title: document.title,
            });
        });
        return () => cancelAnimationFrame(id);
    }, [location.pathname, location.search]);

    return null;
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
            <LangSync />
            <GaPageview />
            <Routes>
                <Route path="/en/*" element={<AppRoutes />} />
                <Route path="/*" element={<AppRoutes />} />
            </Routes>
        </Router>
    );
}

// Twee keer gemount — eenmaal onder "/en/*", eenmaal onder "/*" — zodat elke
// route in beide taalbomen bestaat zonder de paden zelf te dupliceren.
function AppRoutes() {
    return (
        <Routes>
                {/* Home — Hero direct, rest lazy (geprefetcht bij idle) */}
                <Route
                    path="/"
                    element={
                        <Layout>
                            <HomeSeo />
                            <section id="home" className="section"><Hero /></section>
                            <Suspense fallback={null}>
                                <Services />
                                <section id="portfolio" className="section"><Portfolio /></section>
                                <Testimonials />
                                <section id="contact"   className="section"><Contact /></section>
                            </Suspense>
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

                {/* FAQ — lazy */}
                <Route
                    path="/faq"
                    element={
                        <Layout>
                            <Suspense fallback={<PageLoader />}>
                                <Faq />
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

                <Route
                    path="/thebigthree"
                    element={
                        <Layout>
                            <Suspense fallback={<PageLoader />}>
                                <TheBigThree />
                            </Suspense>
                        </Layout>
                    }
                />
                <Route
                    path="/marieboddaert"
                    element={
                        <Layout>
                            <Suspense fallback={<PageLoader />}>
                                <MarieboddaertWriterSite />
                            </Suspense>
                        </Layout>
                    }
                />

                {/* Legal */}
                <Route
                    path="/privacy"
                    element={
                        <Layout>
                            <Suspense fallback={<PageLoader />}>
                                <Privacy />
                            </Suspense>
                        </Layout>
                    }
                />
                <Route
                    path="/colofon"
                    element={
                        <Layout>
                            <Suspense fallback={<PageLoader />}>
                                <Colofon />
                            </Suspense>
                        </Layout>
                    }
                />

                {/* Redirects */}
                <Route path="/frontend"            element={<Navigate to="/frontendvredestein"   replace />} />
                <Route path="/webdesignacupunture" element={<Navigate to="/webdesignacupuncture" replace />} />

                {/* Unlisted — prijspagina per klant (niet in nav, noindex) */}
                <Route
                    path="/offerte/david-broeksma"
                    element={
                        <Layout>
                            <Suspense fallback={<PageLoader />}>
                                <OfferteDavidBroeksma />
                            </Suspense>
                        </Layout>
                    }
                />

                {/* 404 */}
                <Route path="*" element={<Layout><div style={{ padding: 24 }}>Page not found</div></Layout>} />
        </Routes>
    );
}