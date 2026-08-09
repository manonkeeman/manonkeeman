import { Link } from "../../assets/Components/LocaleLink.jsx";
import { useTranslation } from "react-i18next";
import Seo from "../../assets/Components/Seo.jsx";
import JsonLd from "../../assets/Components/JsonLd.jsx";

const MOCKUP = "/Portfolio/villa-vredestein-mockup.png";
const LIVE_URL = "https://villavredestein.com";

const SCHEMA = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Villa Vredestein",
    "url": LIVE_URL,
    "description": "Publieke website voor Villa Vredestein, gebouwd met React en Vite.",
    "creator": {
        "@type": "Person",
        "@id": "https://manonit.com/#manon",
        "name": "Manon Keeman",
    },
    "isPartOf": { "@id": "https://manonit.com/#website" },
};

const content = {
    nl: {
        title: "Webdevelopment - Villa Vredestein",
        subtitle: "Publieke website",
        tagline: "Een plek met een verhaal.\nEen site die het vertelt.",
        intro: "Villa Vredestein vroeg om een website die uitnodigt, informeert en vertrouwen geeft. Geen overdaad,gewoon het verhaal van de plek, helder en mooi gepresenteerd.",
        cards: [
            { label: "Wat", text: "Publieke website over de geschiedenis, het doel en de toekomst van Villa Vredestein." },
            { label: "Hoe", text: "React + Vite. Responsief, snel en toegankelijk op elk scherm en apparaat." },
            { label: "Resultaat", text: "Een digitaal visitekaartje dat laat zien wie Villa Vredestein is en waarvoor ze staan." },
        ],
        challengeTitle: "Waar ik trots op ben",
        challenge: "Sfeer bouwen met code. De site moest niet alleen informeren, maar ook een gevoel geven. Dat zit in de keuze van witruimte, typografie en hiërarchie,dingen die je niet direct ziet, maar wel voelt.",
        imageNote: "📸 Beeld nodig: screenshot homepage desktop + mobiele weergave van de site",
        liveBtn: "Bekijk de website ↗",
        backBtn: "← Terug naar Portfolio",
    },
    en: {
        title: "Webdevelopment - Villa Vredestein",
        subtitle: "Public website",
        tagline: "A place with a story.\nA site that tells it.",
        intro: "Villa Vredestein needed a website that invites, informs and builds trust. No excess,just the story of the place, presented clearly and beautifully.",
        cards: [
            { label: "What", text: "Public website about the history, purpose and future of Villa Vredestein." },
            { label: "How", text: "React + Vite. Responsive, fast and accessible on every screen and device." },
            { label: "Result", text: "A digital calling card that shows who Villa Vredestein is and what they stand for." },
        ],
        challengeTitle: "What I'm proud of",
        challenge: "Building atmosphere with code. The site had to do more than inform,it had to create a feeling. That lives in the choice of whitespace, typography and hierarchy. Things you don't directly notice, but definitely feel.",
        imageNote: "📸 Image needed: desktop homepage screenshot + mobile view of the site",
        liveBtn: "View the website ↗",
        backBtn: "← Back to Portfolio",
    },
    fr: {
        title: "Webdevelopment - Villa Vredestein",
        subtitle: "Site web public",
        tagline: "Un endroit avec une histoire.\nUn site qui la raconte.",
        intro: "Villa Vredestein avait besoin d'un site web qui invite, informe et inspire confiance. Pas d'excès,juste l'histoire du lieu, présentée clairement et joliment.",
        cards: [
            { label: "Quoi", text: "Site web public sur l'histoire, l'objectif et l'avenir de Villa Vredestein." },
            { label: "Comment", text: "React + Vite. Responsive, rapide et accessible sur chaque écran et appareil." },
            { label: "Résultat", text: "Une carte de visite digitale qui montre qui est Villa Vredestein et ce pour quoi ils se battent." },
        ],
        challengeTitle: "Ce dont je suis fière",
        challenge: "Construire une atmosphère avec du code. Le site devait faire plus qu'informer,il devait créer une sensation. Cela tient dans le choix des espaces blancs, de la typographie et de la hiérarchie. Des choses qu'on ne remarque pas directement, mais qu'on ressent.",
        imageNote: "📸 Image requise : capture d'écran de la page d'accueil desktop + vue mobile du site",
        liveBtn: "Voir le site ↗",
        backBtn: "← Retour au Portfolio",
    },
    de: {
        title: "Webdevelopment - Villa Vredestein",
        subtitle: "Öffentliche Website",
        tagline: "Ein Ort mit einer Geschichte.\nEine Website, die sie erzählt.",
        intro: "Villa Vredestein brauchte eine Website, die einlädt, informiert und Vertrauen aufbaut. Kein Überfluss,nur die Geschichte des Ortes, klar und schön präsentiert.",
        cards: [
            { label: "Was", text: "Öffentliche Website über die Geschichte, das Ziel und die Zukunft von Villa Vredestein." },
            { label: "Wie", text: "React + Vite. Responsiv, schnell und zugänglich auf jedem Bildschirm und Gerät." },
            { label: "Ergebnis", text: "Eine digitale Visitenkarte, die zeigt, wer Villa Vredestein ist und wofür sie stehen." },
        ],
        challengeTitle: "Worauf ich stolz bin",
        challenge: "Atmosphäre mit Code bauen. Die Website musste mehr als informieren,sie musste ein Gefühl erzeugen. Das steckt in der Wahl von Weißraum, Typografie und Hierarchie. Dinge, die man nicht direkt sieht, aber definitiv spürt.",
        imageNote: "📸 Bild benötigt: Desktop-Homepage-Screenshot + mobile Ansicht der Website",
        liveBtn: "Website ansehen ↗",
        backBtn: "← Zurück zum Portfolio",
    },
    es: {
        title: "Webdevelopment - Villa Vredestein",
        subtitle: "Sitio web público",
        tagline: "Un lugar con una historia.\nUn sitio que la cuenta.",
        intro: "Villa Vredestein necesitaba un sitio web que invite, informe y genere confianza. Sin excesos,solo la historia del lugar, presentada con claridad y belleza.",
        cards: [
            { label: "Qué", text: "Sitio web público sobre la historia, el propósito y el futuro de Villa Vredestein." },
            { label: "Cómo", text: "React + Vite. Responsivo, rápido y accesible en cualquier pantalla y dispositivo." },
            { label: "Resultado", text: "Una tarjeta de visita digital que muestra quién es Villa Vredestein y por qué luchan." },
        ],
        challengeTitle: "De lo que estoy orgullosa",
        challenge: "Construir atmósfera con código. El sitio tenía que hacer más que informar,tenía que crear una sensación. Eso vive en la elección del espacio en blanco, la tipografía y la jerarquía. Cosas que no ves directamente, pero definitivamente sientes.",
        imageNote: "📸 Imagen necesaria: captura de pantalla de la página de inicio en escritorio + vista móvil del sitio",
        liveBtn: "Ver el sitio ↗",
        backBtn: "← Volver al Portfolio",
    },
    it: {
        title: "Webdevelopment - Villa Vredestein",
        subtitle: "Sito web pubblico",
        tagline: "Un posto con una storia.\nUn sito che la racconta.",
        intro: "Villa Vredestein aveva bisogno di un sito web che invita, informa e crea fiducia. Nessun eccesso,solo la storia del posto, presentata in modo chiaro e bello.",
        cards: [
            { label: "Cosa", text: "Sito web pubblico sulla storia, lo scopo e il futuro di Villa Vredestein." },
            { label: "Come", text: "React + Vite. Responsive, veloce e accessibile su ogni schermo e dispositivo." },
            { label: "Risultato", text: "Un biglietto da visita digitale che mostra chi è Villa Vredestein e per cosa si battono." },
        ],
        challengeTitle: "Di cosa sono orgogliosa",
        challenge: "Costruire atmosfera con il codice. Il sito doveva fare di più che informare,doveva creare una sensazione. Questo vive nella scelta dello spazio bianco, della tipografia e della gerarchia. Cose che non noti direttamente, ma che senti.",
        imageNote: "📸 Immagine necessaria: screenshot homepage desktop + vista mobile del sito",
        liveBtn: "Vedi il sito ↗",
        backBtn: "← Torna al Portfolio",
    },
    uk: {
        title: "Веброзробка - Villa Vredestein",
        subtitle: "Публічний сайт",
        tagline: "Місце з історією.\nСайт, який її розповідає.",
        intro: "Villa Vredestein потребувала сайту, який запрошує, інформує та викликає довіру. Нічого зайвого — лише історія місця, чітко і гарно представлена.",
        cards: [
            { label: "Що", text: "Публічний сайт про історію, мету та майбутнє Villa Vredestein." },
            { label: "Як", text: "React + Vite. Адаптивний, швидкий і доступний на будь-якому екрані та пристрої." },
            { label: "Результат", text: "Цифрова візитна картка, яка показує, хто така Villa Vredestein і за що вони стоять." },
        ],
        challengeTitle: "Чим я пишаюся",
        challenge: "Будувати атмосферу за допомогою коду. Сайт мав не просто інформувати — він мав створювати відчуття. Це живе у виборі білого простору, типографіки та ієрархії. Речі, які не помічаєш одразу, але обов'язково відчуваєш.",
        imageNote: "📸 Потрібне зображення: скріншот головної сторінки на десктопі + мобільний вигляд сайту",
        liveBtn: "Переглянути сайт ↗",
        backBtn: "← Назад до Портфоліо",
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
            <JsonLd data={SCHEMA} />

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
                        <span className="tag">SEO</span>
                        <span className="tag">Responsive</span>
                    </div>
                    <a className="btn btn-primary vr-cta" href={LIVE_URL} target="_blank" rel="noreferrer">{c.liveBtn}</a>
                </div>
                <div className="vr-hero-image">
                    <img src={MOCKUP} alt="Villa Vredestein website mockup" className="cover-img" loading="eager" decoding="async" />
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
        .btn-outline { background: transparent; color: var(--accent); border-color: var(--accent); }
        .btn-outline:hover { background: var(--accent); color: var(--bordeaux); }
        .btn-primary { background: var(--accent); color: var(--bordeaux); border-color: var(--accent); }
        .btn-primary:hover { background: var(--bordeaux); color: var(--bg); border-color: var(--bordeaux); }

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