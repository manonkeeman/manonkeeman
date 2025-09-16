import { useEffect } from "react";

// Pages
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Journal from "./pages/Journal.jsx";
import StorytellingForDevelopers from "./pages/Storytelling.jsx";
import VanvliegtuigslepertotScrumMaster from "./pages/Scrummaster.jsx";
import Vandesignernaarfullstack from "./pages/Fullstack.jsx";
import Contact from "./pages/Contact.jsx";

// Components
import Footer from "./assets/Components/Footer.jsx";

// Styles
import "./styles.css";

export default function App() {
    // Smooth scroll naar anchors (fallback voor browsers zonder CSS smooth)
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (!anchor) return;

            const id = anchor.getAttribute("href");
            if (!id || id === "#") return;

            const targetEl = document.querySelector(id);
            if (!targetEl) return;

            e.preventDefault();
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        };

        document.addEventListener("click", handleAnchorClick);
        return () => document.removeEventListener("click", handleAnchorClick);
    }, []);

    return (
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

                {/* Blogpagina's los toegevoegd */}
                <StorytellingForDevelopers />
                <VanvliegtuigslepertotScrumMaster />
                <Vandesignernaarfullstack />

                <section id="contact" className="section">
                    <Contact />
                </section>
            </main>

            <Footer />
        </>
    );
}