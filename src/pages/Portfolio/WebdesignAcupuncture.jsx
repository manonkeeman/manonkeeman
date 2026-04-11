import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FallbackAcu from "../../assets/Pics/Portfolio/WebdesignAcupuncture.jpeg";
import Seo from "../../assets/Components/Seo.jsx";

const COVER_BASE = "/portfolio/webdesign-acupuncture";
const LIVE_URL = "https://acupuncturebysaskia.com/over-saskia/";

function useExistingFormats(base) {
    const [state, setState] = useState({ webp: null, avif: null });
    useEffect(() => {
        let canceled = false;
        const test = (url) =>
            new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
                img.src = url;
            });
        (async () => {
            const [webpOk, avifOk] = await Promise.all([
                test(`${base}-800w.webp`),
                test(`${base}-800w.avif`),
            ]);
            if (!canceled) setState({ webp: webpOk, avif: avifOk });
        })();
        return () => { canceled = true; };
    }, [base]);
    return state;
}

function GuardedPicture({ base, fallback, alt, sizes = "(max-width: 920px) 100vw, 920px" }) {
    const { webp, avif } = useExistingFormats(base);
    if (webp === null || avif === null || (!webp && !avif)) {
        return <img src={fallback} alt={alt} loading="lazy" decoding="async" className="cover-img" />;
    }
    return (
        <picture>
            {webp && <source type="image/webp" srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w, ${base}-1200w.webp 1200w`} sizes={sizes} />}
            {avif && <source type="image/avif" srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w, ${base}-1200w.avif 1200w`} sizes={sizes} />}
            <img src={`${base}-800w.${webp ? "webp" : "avif"}`} alt={alt} loading="lazy" decoding="async" className="cover-img" />
        </picture>
    );
}

const content = {
    nl: {
        title: "Webdesign – Acupuncture by Saskia",
        subtitle: "WordPress website",
        tagline: "Rust en duidelijkheid.\nEen site die vertrouwen geeft.",
        intro: "Saskia's praktijk straalt rust uit. De website moest hetzelfde doen: bezoekers direct het gevoel geven dat ze op de goede plek zijn.",
        cards: [
            { label: "Wat", text: "WordPress website voor een acupunctuurpraktijk: informatie, tarieven, locatie en een laagdrempelige weg naar contact." },
            { label: "Hoe", text: "WordPress met rustige huisstijl, Adobe Suite voor visuals. Responsief, snel en goed vindbaar via SEO." },
            { label: "Resultaat", text: "Een site die past bij de praktijk: sereen, helder en zonder drempels voor de bezoeker." },
        ],
        liveBtn: "Bekijk de website ↗",
        backBtn: "← Terug naar Portfolio",
    },
    en: {
        title: "Web Design – Acupuncture by Saskia",
        subtitle: "WordPress website",
        tagline: "Calm and clarity.\nA site that builds trust.",
        intro: "Saskia's practice radiates calm. The website had to do the same: make visitors feel immediately that they're in the right place.",
        cards: [
            { label: "What", text: "WordPress website for an acupuncture practice: information, rates, location and a low-threshold path to contact." },
            { label: "How", text: "WordPress with a calm visual identity, Adobe Suite for visuals. Responsive, fast and SEO-optimised." },
            { label: "Result", text: "A site that fits the practice: serene, clear and without barriers for the visitor." },
        ],
        liveBtn: "View the website ↗",
        backBtn: "← Back to Portfolio",
    },
    fr: {
        title: "Webdesign – Acupuncture by Saskia",
        subtitle: "Site WordPress",
        tagline: "Calme et clarté.\nUn site qui inspire confiance.",
        intro: "La pratique de Saskia dégage du calme. Le site web devait faire la même chose : donner aux visiteurs le sentiment immédiat qu'ils sont au bon endroit.",
        cards: [
            { label: "Quoi", text: "Site WordPress pour une pratique d'acupuncture : informations, tarifs, localisation et un chemin accessible vers le contact." },
            { label: "Comment", text: "WordPress avec une identité visuelle apaisante, Adobe Suite pour les visuels. Responsive, rapide et optimisé SEO." },
            { label: "Résultat", text: "Un site qui correspond à la pratique : serein, clair et sans barrières pour le visiteur." },
        ],
        liveBtn: "Voir le site ↗",
        backBtn: "← Retour au Portfolio",
    },
    de: {
        title: "Webdesign – Acupuncture by Saskia",
        subtitle: "WordPress-Website",
        tagline: "Ruhe und Klarheit.\nEine Website, die Vertrauen schafft.",
        intro: "Saskias Praxis strahlt Ruhe aus. Die Website musste dasselbe tun: Besuchern sofort das Gefühl geben, am richtigen Ort zu sein.",
        cards: [
            { label: "Was", text: "WordPress-Website für eine Akupunkturpraxis: Informationen, Preise, Standort und ein niedrigschwelliger Weg zum Kontakt." },
            { label: "Wie", text: "WordPress mit ruhiger Markenidentität, Adobe Suite für Visuals. Responsiv, schnell und SEO-optimiert." },
            { label: "Ergebnis", text: "Eine Website, die zur Praxis passt: ruhig, klar und ohne Hürden für den Besucher." },
        ],
        liveBtn: "Website ansehen ↗",
        backBtn: "← Zurück zum Portfolio",
    },
    es: {
        title: "Diseño Web – Acupuncture by Saskia",
        subtitle: "Sitio WordPress",
        tagline: "Calma y claridad.\nUn sitio que genera confianza.",
        intro: "La consulta de Saskia irradia calma. El sitio web tenía que hacer lo mismo: hacer que los visitantes sintieran de inmediato que están en el lugar correcto.",
        cards: [
            { label: "Qué", text: "Sitio WordPress para una consulta de acupuntura: información, tarifas, ubicación y un camino accesible hacia el contacto." },
            { label: "Cómo", text: "WordPress con identidad visual tranquila, Adobe Suite para los visuales. Responsivo, rápido y optimizado para SEO." },
            { label: "Resultado", text: "Un sitio que encaja con la consulta: sereno, claro y sin barreras para el visitante." },
        ],
        liveBtn: "Ver el sitio ↗",
        backBtn: "← Volver al Portfolio",
    },
    it: {
        title: "Web Design – Acupuncture by Saskia",
        subtitle: "Sito WordPress",
        tagline: "Calma e chiarezza.\nUn sito che crea fiducia.",
        intro: "Lo studio di Saskia irradia calma. Il sito web doveva fare lo stesso: far sentire ai visitatori immediatamente di essere nel posto giusto.",
        cards: [
            { label: "Cosa", text: "Sito WordPress per uno studio di agopuntura: informazioni, tariffe, posizione e un percorso accessibile verso il contatto." },
            { label: "Come", text: "WordPress con identità visiva tranquilla, Adobe Suite per i visual. Responsive, veloce e ottimizzato SEO." },
            { label: "Risultato", text: "Un sito che si adatta allo studio: sereno, chiaro e senza barriere per il visitatore." },
        ],
        liveBtn: "Vedi il sito ↗",
        backBtn: "← Torna al Portfolio",
    },
};

export default function WebdesignAcupuncture() {
    const { t: tr, i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const c = content[lang] || content.en;

    return (
        <article className="vr-page section">
            <Seo
                title={tr("seo.portfolio.acupuncture.title")}
                description={tr("seo.portfolio.acupuncture.description")}
                path="/webdesignacupuncture"
            />

            <nav aria-label="Breadcrumb" className="breadcrumbs">
                <Link to="/">{tr('nav.home')}</Link>
                <span className="breadcrumb-sep" aria-hidden="true">›</span>
                <Link to="/#portfolio">{tr('nav.portfolio')}</Link>
                <span className="breadcrumb-sep" aria-hidden="true">›</span>
                <span aria-current="page">{c.title}</span>
            </nav>

            {/* ── HERO BLOCK ── */}
            <header className="vr-hero">
                <div className="vr-hero-text">
                    <p className="vr-label">{c.subtitle}</p>
                    <h1 className="vr-title">{c.title}</h1>
                    <p className="vr-tagline">{c.tagline}</p>
                    <div className="vr-tags">
                        <span className="tag">WordPress</span>
                        <span className="tag">Adobe Suite</span>
                        <span className="tag">SEO</span>
                        <span className="tag">Responsive</span>
                    </div>
                    <a className="btn btn-primary vr-cta" href={LIVE_URL} target="_blank" rel="noreferrer">{c.liveBtn}</a>
                </div>
                <div className="vr-hero-image">
                    <GuardedPicture base={COVER_BASE} fallback={FallbackAcu} alt="Acupuncture by Saskia website" sizes="(max-width: 768px) 100vw, 55vw" />
                </div>
            </header>

            {/* ── INTRO ── */}
            <section className="vr-intro">
                <p>{c.intro}</p>
            </section>

            {/* ── THREE CARDS ── */}
            <section className="vr-cards">
                {c.cards.map((card) => (
                    <div className="vr-card" key={card.label}>
                        <span className="vr-card-label">{card.label}</span>
                        <p className="vr-card-text">{card.text}</p>
                    </div>
                ))}
            </section>

            {/* ── FOOTER ── */}
            <footer className="vr-footer">
                <Link className="btn btn-outline" to="/#portfolio">{c.backBtn}</Link>
                <a className="btn btn-primary" href={LIVE_URL} target="_blank" rel="noreferrer">{c.liveBtn}</a>
            </footer>

            <style>{`
        .vr-page { max-width: 1000px; margin: 0 auto; padding: 28px 20px 60px; }
        .vr-hero { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; padding: 48px 0 40px; }
        .vr-label { font-size: .8rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--accent); margin: 0 0 10px; }
        .vr-title { font-size: clamp(2rem, 5vw, 3.2rem); line-height: 1.05; margin: 0 0 16px; letter-spacing: -.02em; }
        .vr-tagline { font-size: clamp(1rem, 2vw, 1.2rem); color: var(--muted); white-space: pre-line; line-height: 1.5; margin: 0 0 24px; font-style: italic; }
        .vr-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px; }
        .vr-cta { align-self: flex-start; }
        .vr-hero-image { border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,.4); }
        .cover-img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .vr-intro { border-left: 3px solid var(--accent); padding: 4px 0 4px 20px; margin: 0 0 56px; }
        .vr-intro p { font-size: 1.1rem; line-height: 1.7; color: var(--muted); margin: 0; }
        .vr-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 56px; }
        .vr-card { background: var(--bg-alt); border: 1px solid var(--border); border-radius: 14px; padding: 24px 22px; }
        .vr-card-label { display: block; font-size: .75rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px; }
        .vr-card-text { font-size: .95rem; line-height: 1.6; color: var(--text); margin: 0; }
        .vr-footer { display: flex; gap: 14px; flex-wrap: wrap; padding-top: 16px; border-top: 1px solid var(--border); }
        .tag { font-size: .82rem; padding: 4px 10px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); background: var(--bg); white-space: nowrap; }
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 9px; font-size: .92rem; font-weight: 600; cursor: pointer; text-decoration: none; transition: all .18s ease; border: 1px solid transparent; }
        .btn-outline { background: transparent; color: var(--text); border-color: var(--border); }
        .btn-outline:hover { border-color: var(--accent); }
        .btn-primary { background: var(--accent); color: var(--bg); }
        .btn-primary:hover { filter: brightness(1.08); }
        @media (max-width: 720px) {
          .vr-hero { grid-template-columns: 1fr; gap: 28px; padding: 28px 0 24px; }
          .vr-hero-image { order: -1; }
          .vr-cards { grid-template-columns: 1fr; }
        }
      `}</style>
        </article>
    );
}