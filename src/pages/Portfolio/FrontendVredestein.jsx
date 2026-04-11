import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FallbackFront from "../../assets/Pics/Portfolio/VredesteinFrontend.jpeg";
import Seo from "../../assets/Components/Seo.jsx";

const COVER_BASE = "/portfolio/villa-vredestein-frontend";
const LIVE_URL = "https://villavredestein.com";

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
        title: "Villa Vredestein",
        subtitle: "Publieke website",
        tagline: "Een plek met een verhaal.\nEen site die het vertelt.",
        intro: "Villa Vredestein vroeg om een website die uitnodigt, informeert en vertrouwen geeft. Geen overdaad — gewoon het verhaal van de plek, helder en mooi gepresenteerd.",
        cards: [
            { label: "Wat", text: "Publieke website over de geschiedenis, het doel en de toekomst van Villa Vredestein." },
            { label: "Hoe", text: "React + Vite. Responsief, snel en toegankelijk op elk scherm en apparaat." },
            { label: "Resultaat", text: "Een digitaal visitekaartje dat laat zien wie Villa Vredestein is en waarvoor ze staan." },
        ],
        challengeTitle: "Waar ik trots op ben",
        challenge: "Sfeer bouwen met code. De site moest niet alleen informeren, maar ook een gevoel geven. Dat zit in de keuze van witruimte, typografie en hiërarchie — dingen die je niet direct ziet, maar wel voelt.",
        imageNote: "📸 Beeld nodig: screenshot homepage desktop + mobiele weergave van de site",
        liveBtn: "Bekijk de website ↗",
        backBtn: "← Terug naar Portfolio",
    },
    en: {
        title: "Villa Vredestein",
        subtitle: "Public website",
        tagline: "A place with a story.\nA site that tells it.",
        intro: "Villa Vredestein needed a website that invites, informs and builds trust. No excess — just the story of the place, presented clearly and beautifully.",
        cards: [
            { label: "What", text: "Public website about the history, purpose and future of Villa Vredestein." },
            { label: "How", text: "React + Vite. Responsive, fast and accessible on every screen and device." },
            { label: "Result", text: "A digital calling card that shows who Villa Vredestein is and what they stand for." },
        ],
        challengeTitle: "What I'm proud of",
        challenge: "Building atmosphere with code. The site had to do more than inform — it had to create a feeling. That lives in the choice of whitespace, typography and hierarchy. Things you don't directly notice, but definitely feel.",
        imageNote: "📸 Image needed: desktop homepage screenshot + mobile view of the site",
        liveBtn: "View the website ↗",
        backBtn: "← Back to Portfolio",
    },
    fr: {
        title: "Villa Vredestein",
        subtitle: "Site web public",
        tagline: "Un endroit avec une histoire.\nUn site qui la raconte.",
        intro: "Villa Vredestein avait besoin d'un site web qui invite, informe et inspire confiance. Pas d'excès — juste l'histoire du lieu, présentée clairement et joliment.",
        cards: [
            { label: "Quoi", text: "Site web public sur l'histoire, l'objectif et l'avenir de Villa Vredestein." },
            { label: "Comment", text: "React + Vite. Responsive, rapide et accessible sur chaque écran et appareil." },
            { label: "Résultat", text: "Une carte de visite digitale qui montre qui est Villa Vredestein et ce pour quoi ils se battent." },
        ],
        challengeTitle: "Ce dont je suis fière",
        challenge: "Construire une atmosphère avec du code. Le site devait faire plus qu'informer — il devait créer une sensation. Cela tient dans le choix des espaces blancs, de la typographie et de la hiérarchie. Des choses qu'on ne remarque pas directement, mais qu'on ressent.",
        imageNote: "📸 Image requise : capture d'écran de la page d'accueil desktop + vue mobile du site",
        liveBtn: "Voir le site ↗",
        backBtn: "← Retour au Portfolio",
    },
    de: {
        title: "Villa Vredestein",
        subtitle: "Öffentliche Website",
        tagline: "Ein Ort mit einer Geschichte.\nEine Website, die sie erzählt.",
        intro: "Villa Vredestein brauchte eine Website, die einlädt, informiert und Vertrauen aufbaut. Kein Überfluss — nur die Geschichte des Ortes, klar und schön präsentiert.",
        cards: [
            { label: "Was", text: "Öffentliche Website über die Geschichte, das Ziel und die Zukunft von Villa Vredestein." },
            { label: "Wie", text: "React + Vite. Responsiv, schnell und zugänglich auf jedem Bildschirm und Gerät." },
            { label: "Ergebnis", text: "Eine digitale Visitenkarte, die zeigt, wer Villa Vredestein ist und wofür sie stehen." },
        ],
        challengeTitle: "Worauf ich stolz bin",
        challenge: "Atmosphäre mit Code bauen. Die Website musste mehr als informieren — sie musste ein Gefühl erzeugen. Das steckt in der Wahl von Weißraum, Typografie und Hierarchie. Dinge, die man nicht direkt sieht, aber definitiv spürt.",
        imageNote: "📸 Bild benötigt: Desktop-Homepage-Screenshot + mobile Ansicht der Website",
        liveBtn: "Website ansehen ↗",
        backBtn: "← Zurück zum Portfolio",
    },
    es: {
        title: "Villa Vredestein",
        subtitle: "Sitio web público",
        tagline: "Un lugar con una historia.\nUn sitio que la cuenta.",
        intro: "Villa Vredestein necesitaba un sitio web que invite, informe y genere confianza. Sin excesos — solo la historia del lugar, presentada con claridad y belleza.",
        cards: [
            { label: "Qué", text: "Sitio web público sobre la historia, el propósito y el futuro de Villa Vredestein." },
            { label: "Cómo", text: "React + Vite. Responsivo, rápido y accesible en cualquier pantalla y dispositivo." },
            { label: "Resultado", text: "Una tarjeta de visita digital que muestra quién es Villa Vredestein y por qué luchan." },
        ],
        challengeTitle: "De lo que estoy orgullosa",
        challenge: "Construir atmósfera con código. El sitio tenía que hacer más que informar — tenía que crear una sensación. Eso vive en la elección del espacio en blanco, la tipografía y la jerarquía. Cosas que no ves directamente, pero definitivamente sientes.",
        imageNote: "📸 Imagen necesaria: captura de pantalla de la página de inicio en escritorio + vista móvil del sitio",
        liveBtn: "Ver el sitio ↗",
        backBtn: "← Volver al Portfolio",
    },
    it: {
        title: "Villa Vredestein",
        subtitle: "Sito web pubblico",
        tagline: "Un posto con una storia.\nUn sito che la racconta.",
        intro: "Villa Vredestein aveva bisogno di un sito web che invita, informa e crea fiducia. Nessun eccesso — solo la storia del posto, presentata in modo chiaro e bello.",
        cards: [
            { label: "Cosa", text: "Sito web pubblico sulla storia, lo scopo e il futuro di Villa Vredestein." },
            { label: "Come", text: "React + Vite. Responsive, veloce e accessibile su ogni schermo e dispositivo." },
            { label: "Risultato", text: "Un biglietto da visita digitale che mostra chi è Villa Vredestein e per cosa si battono." },
        ],
        challengeTitle: "Di cosa sono orgogliosa",
        challenge: "Costruire atmosfera con il codice. Il sito doveva fare di più che informare — doveva creare una sensazione. Questo vive nella scelta dello spazio bianco, della tipografia e della gerarchia. Cose che non noti direttamente, ma che senti.",
        imageNote: "📸 Immagine necessaria: screenshot homepage desktop + vista mobile del sito",
        liveBtn: "Vedi il sito ↗",
        backBtn: "← Torna al Portfolio",
    },
};

export default function FrontendVredestein() {
    const { t: tr, i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const c = content[lang] || content.en;

    return (
        <article className="vr-page section">
            <Seo
                title={tr("seo.portfolio.frontend.title")}
                description={tr("seo.portfolio.frontend.description")}
                path="/frontendvredestein"
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
                        <span className="tag">React</span>
                        <span className="tag">Vite</span>
                        <span className="tag">UX/UI</span>
                        <span className="tag">Responsive</span>
                    </div>
                    <a className="btn btn-primary vr-cta" href={LIVE_URL} target="_blank" rel="noreferrer">{c.liveBtn}</a>
                </div>
                <div className="vr-hero-image">
                    {/* 📸 Beeld nodig: volledige desktop screenshot van de homepage */}
                    <GuardedPicture base={COVER_BASE} fallback={FallbackFront} alt="Villa Vredestein homepage" sizes="(max-width: 768px) 100vw, 55vw" />
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

            {/* ── MOBILE IMAGE ── */}
            <section className="vr-mockup">
                {/* 📸 Beeld nodig: twee schermen naast elkaar — desktop links, mobiel rechts — of een device mockup */}
                <div className="vr-mockup-placeholder">
                    <span>{c.imageNote}</span>
                </div>
            </section>

            {/* ── CHALLENGE ── */}
            <section className="vr-challenge">
                <h2>{c.challengeTitle}</h2>
                <blockquote>{c.challenge}</blockquote>
            </section>

            {/* ── FOOTER ── */}
            <footer className="vr-footer">
                <Link className="btn btn-outline" to="/#portfolio">{c.backBtn}</Link>
                <a className="btn btn-primary" href={LIVE_URL} target="_blank" rel="noreferrer">{c.liveBtn}</a>
            </footer>

            <style>{`
        .vr-page { max-width: 1000px; margin: 0 auto; padding: 0 20px 60px; }

        /* HERO */
        .vr-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          padding: 48px 0 40px;
        }
        .vr-label {
          font-size: .8rem;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 10px;
        }
        .vr-title {
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          line-height: 1.05;
          margin: 0 0 16px;
          letter-spacing: -.02em;
        }
        .vr-tagline {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--muted);
          white-space: pre-line;
          line-height: 1.5;
          margin: 0 0 24px;
          font-style: italic;
        }
        .vr-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px; }
        .vr-cta { align-self: flex-start; }
        .vr-hero-image { border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,.4); }
        .cover-img { display: block; width: 100%; height: 100%; object-fit: cover; }

        /* INTRO */
        .vr-intro {
          border-left: 3px solid var(--accent);
          padding: 4px 0 4px 20px;
          margin: 0 0 56px;
        }
        .vr-intro p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--muted);
          margin: 0;
        }

        /* CARDS */
        .vr-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 56px;
        }
        .vr-card {
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 24px 22px;
        }
        .vr-card-label {
          display: block;
          font-size: .75rem;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 10px;
        }
        .vr-card-text {
          font-size: .95rem;
          line-height: 1.6;
          color: var(--text);
          margin: 0;
        }

        /* MOCKUP PLACEHOLDER */
        .vr-mockup {
          margin-bottom: 56px;
        }
        .vr-mockup-placeholder {
          background: var(--bg-alt);
          border: 2px dashed var(--border);
          border-radius: 16px;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
          font-size: .9rem;
          text-align: center;
          padding: 20px;
        }

        /* CHALLENGE */
        .vr-challenge {
          margin-bottom: 56px;
        }
        .vr-challenge h2 {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 16px;
        }
        .vr-challenge blockquote {
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          line-height: 1.65;
          color: var(--text);
          margin: 0;
          padding: 0;
          border: none;
          font-style: italic;
        }

        /* FOOTER */
        .vr-footer {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }

        /* SHARED */
        .tag { font-size: .82rem; padding: 4px 10px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); background: var(--bg); white-space: nowrap; }
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 9px; font-size: .92rem; font-weight: 600; cursor: pointer; text-decoration: none; transition: all .18s ease; border: 1px solid transparent; }
        .btn-outline { background: transparent; color: var(--text); border-color: var(--border); }
        .btn-outline:hover { border-color: var(--accent); }
        .btn-primary { background: var(--accent); color: var(--bg); }
        .btn-primary:hover { filter: brightness(1.08); }

        /* RESPONSIVE */
        @media (max-width: 720px) {
          .vr-hero { grid-template-columns: 1fr; gap: 28px; padding: 28px 0 24px; }
          .vr-hero-image { order: -1; }
          .vr-cards { grid-template-columns: 1fr; }
        }
      `}</style>
        </article>
    );
}