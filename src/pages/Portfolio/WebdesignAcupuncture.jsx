import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FallbackAcu from "../../assets/Pics/Portfolio/WebdesignAcupuncture.jpeg";

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
        return <img src={fallback} alt={alt} loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />;
    }
    return (
        <picture>
            {webp && <source type="image/webp" srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w, ${base}-1200w.webp 1200w`} sizes={sizes} />}
            {avif && <source type="image/avif" srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w, ${base}-1200w.avif 1200w`} sizes={sizes} />}
            <img src={`${base}-800w.${webp ? "webp" : "avif"}`} alt={alt} loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
        </picture>
    );
}

const content = {
    nl: {
        title: "Webdesign – Acupuncture by Saskia",
        backBtn: "← Terug naar Portfolio",
        siteBtn: "Naar website ↗",
        context: { h: "Context", p: "De praktijk wilde een website die rust uitstraalt en vertrouwen geeft. Geen marketing-schreeuw, wel helderheid: wat is acupunctuur, waarbij helpt het, en hoe maak je een afspraak?" },
        goals: {
            h: "Doelen",
            items: ["Serene visuele stijl die past bij de praktijk.", "Snelle toegang tot praktische info (locatie, tarieven, vergoedingen, intake).", "Heldere flow naar contact/afspraak, ook op mobiel.", "Basis-SEO en performance."],
        },
        design: {
            h: "Ontwerp & Implementatie",
            items: [<><strong>Typografie & kleur:</strong> zachte kleuren, ruime line-height, rustige headings.</>, <><strong>UI & navigatie:</strong> compacte hoofdnavigatie, sticky contactknop op mobiel.</>, <><strong>Performance:</strong> slank thema, caching, lazy-loading.</>, <><strong>SEO basis:</strong> nette titels/descriptions, Google Business Profile.</>],
        },
        highlights: { h: "Highlights", items: ["Snel bruikbaar: geen lange laadtijd", "Duidelijke knoppen op logische plekken", "Goed leesbare tekst voor iedereen"] },
        stack: { h: "Stack", items: ["WordPress", "Adobe Suite", "Responsive layout", "SEO"] },
        linkCard: "Bron & link",
    },
    en: {
        title: "Web Design – Acupuncture by Saskia",
        backBtn: "← Back to Portfolio",
        siteBtn: "Visit website ↗",
        context: { h: "Context", p: "The practice wanted a website that radiates calm and builds trust. No marketing noise, just clarity: what is acupuncture, what does it help with, and how do you book an appointment?" },
        goals: {
            h: "Goals",
            items: ["Serene visual style that matches the practice.", "Quick access to practical info (location, rates, reimbursements, intake).", "Clear path to contact/booking, also on mobile.", "Basic SEO and performance."],
        },
        design: {
            h: "Design & Implementation",
            items: [<><strong>Typography & colour:</strong> soft colours, generous line-height, calm headings.</>, <><strong>UI & navigation:</strong> compact main nav, sticky contact button on mobile.</>, <><strong>Performance:</strong> lean theme, caching, lazy-loading.</>, <><strong>Basic SEO:</strong> clean titles/descriptions, Google Business Profile.</>],
        },
        highlights: { h: "Highlights", items: ["Fast and usable: no long load times", "Clear buttons in logical places", "Easy-to-read text for everyone"] },
        stack: { h: "Stack", items: ["WordPress", "Adobe Suite", "Responsive layout", "SEO"] },
        linkCard: "Source & link",
    },
    fr: {
        title: "Webdesign – Acupuncture by Saskia",
        backBtn: "← Retour au Portfolio",
        siteBtn: "Visiter le site ↗",
        context: { h: "Contexte", p: "La pratique voulait un site web qui dégage du calme et inspire confiance. Pas de bruit marketing, mais de la clarté: qu'est-ce que l'acupuncture, à quoi sert-elle et comment prendre rendez-vous?" },
        goals: {
            h: "Objectifs",
            items: ["Style visuel serein qui correspond a la pratique.", "Acces rapide aux infos pratiques (lieu, tarifs, remboursements, intake).", "Parcours clair vers contact/rendez-vous, aussi sur mobile.", "SEO de base et performance."],
        },
        design: {
            h: "Design & Implementation",
            items: [<><strong>Typographie & couleur:</strong> couleurs douces, grande hauteur de ligne, titres calmes.</>, <><strong>UI & navigation:</strong> navigation principale compacte, bouton contact sticky sur mobile.</>, <><strong>Performance:</strong> theme leger, mise en cache, chargement paresseux.</>, <><strong>SEO de base:</strong> titres/descriptions soignes, Google Business Profile.</>],
        },
        highlights: { h: "Points forts", items: ["Rapide et utilisable: pas de longs temps de chargement", "Boutons clairs aux bons endroits", "Texte facile a lire pour tout le monde"] },
        stack: { h: "Stack", items: ["WordPress", "Adobe Suite", "Mise en page responsive", "SEO"] },
        linkCard: "Source & lien",
    },
    de: {
        title: "Webdesign – Acupuncture by Saskia",
        backBtn: "← Zuruck zum Portfolio",
        siteBtn: "Zur Website ↗",
        context: { h: "Kontext", p: "Die Praxis wollte eine Website, die Ruhe ausstrahlt und Vertrauen schafft. Kein Marketing-Schreien, sondern Klarheit: Was ist Akupunktur, wobei hilft es und wie macht man einen Termin?" },
        goals: {
            h: "Ziele",
            items: ["Ruhiger visueller Stil, der zur Praxis passt.", "Schneller Zugang zu praktischen Infos (Ort, Preise, Erstattungen, Intake).", "Klarer Weg zu Kontakt/Termin, auch auf Mobilgeräten.", "Basis-SEO und Performance."],
        },
        design: {
            h: "Design & Implementierung",
            items: [<><strong>Typografie & Farbe:</strong> sanfte Farben, grosszugiger Zeilenabstand, ruhige Überschriften.</>, <><strong>UI & Navigation:</strong> kompakte Hauptnavigation, sticky Kontakt-Button auf Mobile.</>, <><strong>Performance:</strong> schlankes Theme, Caching, Lazy-Loading.</>, <><strong>Basis-SEO:</strong> saubere Titel/Beschreibungen, Google Business Profile.</>],
        },
        highlights: { h: "Highlights", items: ["Schnell nutzbar: keine langen Ladezeiten", "Klare Schaltflächen an logischen Stellen", "Gut lesbarer Text fur alle"] },
        stack: { h: "Stack", items: ["WordPress", "Adobe Suite", "Responsives Layout", "SEO"] },
        linkCard: "Quelle & Link",
    },
    es: {
        title: "Diseño Web – Acupuncture by Saskia",
        backBtn: "← Volver al Portfolio",
        siteBtn: "Visitar sitio web ↗",
        context: { h: "Contexto", p: "La consulta quería un sitio web que irradie calma y genere confianza. Sin ruido de marketing, solo claridad: ¿qué es la acupuntura, para qué ayuda y cómo pedir cita?" },
        goals: {
            h: "Objetivos",
            items: ["Estilo visual sereno que encaje con la consulta.", "Acceso rapido a info practica (ubicacion, tarifas, reembolsos, intake).", "Flujo claro hacia contacto/cita, tambien en movil.", "SEO basico y rendimiento."],
        },
        design: {
            h: "Diseno & Implementacion",
            items: [<><strong>Tipografia & color:</strong> colores suaves, alto interlineado, titulos tranquilos.</>, <><strong>UI & navegacion:</strong> navegacion principal compacta, boton de contacto fijo en movil.</>, <><strong>Rendimiento:</strong> tema ligero, cache, lazy-loading.</>, <><strong>SEO basico:</strong> titulos/descripciones limpios, Google Business Profile.</>],
        },
        highlights: { h: "Destacados", items: ["Rapido y usable: sin tiempos de carga largos", "Botones claros en lugares logicos", "Texto facil de leer para todos"] },
        stack: { h: "Stack", items: ["WordPress", "Adobe Suite", "Diseno responsive", "SEO"] },
        linkCard: "Fuente & enlace",
    },
    it: {
        title: "Web Design – Acupuncture by Saskia",
        backBtn: "← Torna al Portfolio",
        siteBtn: "Visita il sito ↗",
        context: { h: "Contesto", p: "Lo studio voleva un sito web che trasmettesse calma e costruisse fiducia. Nessun rumore di marketing, solo chiarezza: cos'e' l'agopuntura, per cosa aiuta e come si prenota un appuntamento?" },
        goals: {
            h: "Obiettivi",
            items: ["Stile visivo sereno adatto allo studio.", "Accesso rapido alle info pratiche (luogo, tariffe, rimborsi, intake).", "Percorso chiaro verso contatto/appuntamento, anche su mobile.", "SEO di base e performance."],
        },
        design: {
            h: "Design & Implementazione",
            items: [<><strong>Tipografia & colore:</strong> colori morbidi, ampia altezza riga, titoli tranquilli.</>, <><strong>UI & navigazione:</strong> navigazione principale compatta, pulsante contatto sticky su mobile.</>, <><strong>Performance:</strong> tema snello, caching, lazy-loading.</>, <><strong>SEO di base:</strong> titoli/descrizioni curati, Google Business Profile.</>],
        },
        highlights: { h: "Punti salienti", items: ["Veloce e usabile: nessun lungo tempo di caricamento", "Pulsanti chiari nei posti giusti", "Testo facile da leggere per tutti"] },
        stack: { h: "Stack", items: ["WordPress", "Adobe Suite", "Layout responsive", "SEO"] },
        linkCard: "Sorgente & link",
    },
};

export default function WebdesignAcupuncture() {
    const { t: tr, i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const c = content[lang] || content.en;

    return (
        <article className="post section">
            <nav aria-label="Breadcrumb" className="breadcrumbs">
                <Link to="/">{tr('nav.home')}</Link>
                <span className="breadcrumb-sep" aria-hidden="true">›</span>
                <Link to="/#portfolio">{tr('nav.portfolio')}</Link>
                <span className="breadcrumb-sep" aria-hidden="true">›</span>
                <span aria-current="page">{c.title}</span>
            </nav>

            <header className="post-header">
                <h1 className="post-title">{c.title}</h1>
                <figure className="post-cover">
                    <div className="media">
                        <GuardedPicture base={COVER_BASE} fallback={FallbackAcu} alt="Homepage van Acupuncture by Saskia – rustig webdesign" />
                    </div>
                </figure>
            </header>

            <div className="post-grid">
                <main className="post-body">
                    <h2>{c.context.h}</h2>
                    <p>{c.context.p}</p>

                    <h2>{c.goals.h}</h2>
                    <ul>{c.goals.items.map((item, i) => <li key={i}>{item}</li>)}</ul>

                    <h2>{c.design.h}</h2>
                    <ul>{c.design.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </main>

                <aside className="post-aside">
                    <div className="aside-card">
                        <h3>{c.highlights.h}</h3>
                        <ul>{c.highlights.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                    </div>

                    <div className="aside-card">
                        <h3>{c.stack.h}</h3>
                        <ul>{c.stack.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                    </div>

                    <div className="aside-card link-card">
                        <h3>{c.linkCard}</h3>
                        <a className="btn btn-primary" href={LIVE_URL} target="_blank" rel="noreferrer noopener">{c.siteBtn}</a>
                    </div>
                </aside>
            </div>

            <footer className="post-footer">
                <Link className="btn btn-outline" to="/#portfolio">{c.backBtn}</Link>
            </footer>

            <style>{`
        .post { max-width: 980px; margin: 0 auto; padding: 0 16px; }
        .post-header { margin: 8px 0 20px; }
        .post-title { margin: 0 0 8px; line-height: 1.15; }
        .post-cover { margin: 14px 0 8px; }
        .post-cover .media { width: 100%; aspect-ratio: 16/9; max-height: 460px; overflow: hidden; border-radius: 14px; }
        .post-cover picture, .post-cover img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .post-grid {
          display: grid;
          grid-template-columns: 1fr minmax(240px, 280px);
          gap: 28px;
          align-items: start;
          margin-top: 8px;
        }
        .post-body h2 { margin-top: 24px; }
        .post-body h3 { margin-top: 18px; }
        .post-body p { line-height: 1.75; margin: 12px 0; }
        .post-body ul { margin: 10px 0 16px 18px; }
        .post-body li { margin: 6px 0; }
        .post-aside { position: sticky; top: 16px; }
        .aside-card {
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 12px;
          box-shadow: var(--shadow);
          margin-bottom: 16px;
        }
        .aside-card h3 { margin: 0 0 8px; font-size: 1rem; }
        .aside-card ul { margin: 0 0 0 16px; }
        .aside-card li { margin: 6px 0; }
        .aside-card.link-card { display: flex; flex-direction: column; align-items: stretch; text-align: left; }
        .aside-card.link-card .btn { align-self: center; display: inline-block; margin-top: 6px; }
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 8px; font-size: .95rem; font-weight: 500; cursor: pointer; text-decoration: none; transition: background .18s ease, color .18s ease, border-color .18s ease; }
        .btn-outline { background: transparent; color: var(--text); border: 1px solid var(--border); }
        .btn-primary { background: var(--accent); color: var(--bg); border: 1px solid var(--accent); }
        .post-footer { margin: 20px 0; }
        @media (max-width: 980px) {
          .post { padding: 0 12px; }
          .post-grid { grid-template-columns: 1fr; }
          .post-aside { position: static; }
          .post-cover .media { max-height: 360px; }
        }
      `}</style>
        </article>
    );
}