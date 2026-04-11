import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FallbackBack from "../../assets/Pics/Portfolio/VredesteinBackend.jpeg";
import Seo from "../../assets/Components/Seo.jsx";

const COVER_BASE = "/portfolio/villa-vredestein-backend";

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
        title: "Villa Vredestein – Backend",
        subtitle: "Spring Boot API",
        tagline: "De data klopt.\nDe grenzen zijn helder.",
        intro: "Een frontend is zo goed als de API erachter. Ik bouwde de backend als een stabiele, voorspelbare laag: beveiligde endpoints, duidelijke domeinmodellen en migraties die je nooit verrassen.",
        cards: [
            { label: "Wat", text: "Beveiligde REST API met JWT-authenticatie en rolgebaseerde autorisatie. Duidelijke data-contracten tussen frontend en backend." },
            { label: "Hoe", text: "Spring Boot, PostgreSQL, Flyway voor migraties en Testcontainers voor integratietests met een echte database." },
            { label: "Resultaat", text: "Een stabiele backend die de frontend snel en voorspelbaar maakt. Documentatie beschikbaar op aanvraag." },
        ],
        noLink: "Geen publieke live-link. Documentatie beschikbaar op aanvraag.",
        backBtn: "← Terug naar Portfolio",
    },
    en: {
        title: "Villa Vredestein – Backend",
        subtitle: "Spring Boot API",
        tagline: "The data is right.\nThe boundaries are clear.",
        intro: "A frontend is only as good as the API behind it. I built the backend as a stable, predictable layer: secured endpoints, clear domain models and migrations that never surprise you.",
        cards: [
            { label: "What", text: "Secured REST API with JWT authentication and role-based authorisation. Clear data contracts between frontend and backend." },
            { label: "How", text: "Spring Boot, PostgreSQL, Flyway for migrations and Testcontainers for integration tests with a real database." },
            { label: "Result", text: "A stable backend that makes the frontend fast and predictable. Documentation available on request." },
        ],
        noLink: "No public live link. Documentation available on request.",
        backBtn: "← Back to Portfolio",
    },
    fr: {
        title: "Villa Vredestein – Backend",
        subtitle: "API Spring Boot",
        tagline: "Les données sont justes.\nLes frontières sont claires.",
        intro: "Un frontend n'est aussi bon que l'API derrière lui. J'ai construit le backend comme une couche stable et prévisible : endpoints sécurisés, modèles de domaine clairs et migrations sans surprises.",
        cards: [
            { label: "Quoi", text: "API REST sécurisée avec authentification JWT et autorisation basée sur les rôles. Contrats de données clairs entre frontend et backend." },
            { label: "Comment", text: "Spring Boot, PostgreSQL, Flyway pour les migrations et Testcontainers pour les tests d'intégration avec une vraie base de données." },
            { label: "Résultat", text: "Un backend stable qui rend le frontend rapide et prévisible. Documentation disponible sur demande." },
        ],
        noLink: "Pas de lien live public. Documentation disponible sur demande.",
        backBtn: "← Retour au Portfolio",
    },
    de: {
        title: "Villa Vredestein – Backend",
        subtitle: "Spring Boot API",
        tagline: "Die Daten stimmen.\nDie Grenzen sind klar.",
        intro: "Ein Frontend ist nur so gut wie die API dahinter. Ich habe das Backend als stabile, vorhersehbare Schicht aufgebaut: gesicherte Endpoints, klare Domain-Modelle und Migrationen ohne Überraschungen.",
        cards: [
            { label: "Was", text: "Gesicherte REST API mit JWT-Authentifizierung und rollenbasierter Autorisierung. Klare Datenverträge zwischen Frontend und Backend." },
            { label: "Wie", text: "Spring Boot, PostgreSQL, Flyway für Migrationen und Testcontainers für Integrationstests mit einer echten Datenbank." },
            { label: "Ergebnis", text: "Ein stabiles Backend, das das Frontend schnell und vorhersehbar macht. Dokumentation auf Anfrage verfügbar." },
        ],
        noLink: "Kein öffentlicher Live-Link. Dokumentation auf Anfrage verfügbar.",
        backBtn: "← Zurück zum Portfolio",
    },
    es: {
        title: "Villa Vredestein – Backend",
        subtitle: "API Spring Boot",
        tagline: "Los datos son correctos.\nLos límites son claros.",
        intro: "Un frontend es tan bueno como la API detrás de él. Construí el backend como una capa estable y predecible: endpoints seguros, modelos de dominio claros y migraciones sin sorpresas.",
        cards: [
            { label: "Qué", text: "API REST segura con autenticación JWT y autorización basada en roles. Contratos de datos claros entre frontend y backend." },
            { label: "Cómo", text: "Spring Boot, PostgreSQL, Flyway para migraciones y Testcontainers para tests de integración con una base de datos real." },
            { label: "Resultado", text: "Un backend estable que hace el frontend rápido y predecible. Documentación disponible bajo petición." },
        ],
        noLink: "Sin enlace en vivo público. Documentación disponible bajo petición.",
        backBtn: "← Volver al Portfolio",
    },
    it: {
        title: "Villa Vredestein – Backend",
        subtitle: "API Spring Boot",
        tagline: "I dati sono corretti.\nI confini sono chiari.",
        intro: "Un frontend è buono quanto l'API dietro di esso. Ho costruito il backend come uno strato stabile e prevedibile: endpoint protetti, modelli di dominio chiari e migrazioni senza sorprese.",
        cards: [
            { label: "Cosa", text: "API REST protetta con autenticazione JWT e autorizzazione basata sui ruoli. Contratti dati chiari tra frontend e backend." },
            { label: "Come", text: "Spring Boot, PostgreSQL, Flyway per le migrazioni e Testcontainers per i test di integrazione con un vero database." },
            { label: "Risultato", text: "Un backend stabile che rende il frontend veloce e prevedibile. Documentazione disponibile su richiesta." },
        ],
        noLink: "Nessun link live pubblico. Documentazione disponibile su richiesta.",
        backBtn: "← Torna al Portfolio",
    },
};

export default function BackendStudentenDashboard() {
    const { t: tr, i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const c = content[lang] || content.en;

    return (
        <article className="vr-page section">
            <Seo
                title={tr("seo.portfolio.backend.title")}
                description={tr("seo.portfolio.backend.description")}
                path="/backendstudentendashboard"
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
                        <span className="tag">Spring Boot</span>
                        <span className="tag">Java</span>
                        <span className="tag">PostgreSQL</span>
                        <span className="tag">JWT</span>
                        <span className="tag">REST API</span>
                    </div>
                </div>
                <div className="vr-hero-image">
                    <GuardedPicture base={COVER_BASE} fallback={FallbackBack} alt="Villa Vredestein backend" sizes="(max-width: 768px) 100vw, 55vw" />
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

            {/* ── NO LIVE LINK NOTE ── */}
            <section className="vr-note">
                <p>{c.noLink}</p>
            </section>

            {/* ── FOOTER ── */}
            <footer className="vr-footer">
                <Link className="btn btn-outline" to="/#portfolio">{c.backBtn}</Link>
            </footer>

            <style>{`
        .vr-page { max-width: 1000px; margin: 0 auto; padding: 0 20px 60px; }
        .vr-hero { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; padding: 48px 0 40px; }
        .vr-label { font-size: .8rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--accent); margin: 0 0 10px; }
        .vr-title { font-size: clamp(2rem, 5vw, 3.2rem); line-height: 1.05; margin: 0 0 16px; letter-spacing: -.02em; }
        .vr-tagline { font-size: clamp(1rem, 2vw, 1.2rem); color: var(--muted); white-space: pre-line; line-height: 1.5; margin: 0 0 24px; font-style: italic; }
        .vr-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px; }
        .vr-hero-image { border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,.4); }
        .cover-img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .vr-intro { border-left: 3px solid var(--accent); padding: 4px 0 4px 20px; margin: 0 0 56px; }
        .vr-intro p { font-size: 1.1rem; line-height: 1.7; color: var(--muted); margin: 0; }
        .vr-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 40px; }
        .vr-card { background: var(--bg-alt); border: 1px solid var(--border); border-radius: 14px; padding: 24px 22px; }
        .vr-card-label { display: block; font-size: .75rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px; }
        .vr-card-text { font-size: .95rem; line-height: 1.6; color: var(--text); margin: 0; }
        .vr-note { margin-bottom: 40px; }
        .vr-note p { font-size: .9rem; color: var(--muted); font-style: italic; margin: 0; }
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