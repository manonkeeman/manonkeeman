import { Link } from "../../assets/Components/LocaleLink.jsx";
import { useTranslation } from "react-i18next";
import Seo from "../../assets/Components/Seo.jsx";
import JsonLd from "../../assets/Components/JsonLd.jsx";

const MOCKUP   = "/Portfolio/marie-boddaert-mockup.png";
const LIVE_URL = "https://marie-boddaert.netlify.app/";
const OG_IMAGE = "https://manonit.com/og-marie-boddaert.jpg";

const SCHEMA = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Marie H. Boddaert — Schrijverswebsite",
    "url": LIVE_URL,
    "description": "Persoonlijke schrijverswebsite voor Marie H. Boddaert: verhalen, gedichten en korte notities. Ontworpen en gebouwd door Manon Keeman.",
    "creator": {
        "@type": "Person",
        "@id": "https://manonit.com/#manon",
        "name": "Manon Keeman",
    },
    "about": {
        "@type": "Person",
        "name": "Marie H. Boddaert",
        "jobTitle": "Schrijfster",
    },
    "isPartOf": { "@id": "https://manonit.com/#website" },
};

const content = {
    nl: {
        title: "Webdesign · Marie H. Boddaert",
        subtitle: "Schrijverswebsite · live op Netlify",
        tagline: "Woorden verdienen ruimte.\nEen plek waar verhalen ademen.",
        badge: "Live",
        intro: "Marie H. Boddaert schrijft blogs, gedichten en verhalen op bestelling. Voor haar ontwierp ik een persoonlijke website die voelt als een eigen boek: licht, rustig en volledig op haar toon afgestemd.",
        cards: [
            { label: "Wat", text: "Persoonlijke schrijverswebsite met drie contentdelen: verhalen, gedichten en korte notities. Met Substack-integratie voor de nieuwsbrief." },
            { label: "Hoe", text: "Custom ontwerp in HTML/CSS. Licht kleurenpalet, ruime witruimte en typografie die past bij een schrijver die wil dat de tekst centraal staat." },
            { label: "Status", text: "Live op Netlify. Marie beheert haar eigen content via een CMS en publiceert nieuwe verhalen zonder technische hulp." },
        ],
        approachTitle: "De aanpak",
        approach: "Een schrijverswebsite mag niet in de weg zitten. De structuur onderscheidt drie soorten content helder, zonder dat Marie door techniek heen hoeft te denken om haar lezers te bereiken.",
        liveBtn: "Bekijk de website ↗",
        backBtn: "← Terug naar Portfolio",
    },
    en: {
        title: "Web Design · Marie H. Boddaert",
        subtitle: "Writer's website · live on Netlify",
        tagline: "Words deserve space.\nA place where stories breathe.",
        badge: "Live",
        intro: "Marie H. Boddaert writes blogs, poems and commissioned stories. I designed a personal website for her that feels like a book of her own: light, calm and tuned entirely to her voice.",
        cards: [
            { label: "What", text: "Personal writer's website with three content sections: stories, poems and short diary notes. With Substack integration for the newsletter." },
            { label: "How", text: "Custom design in HTML/CSS. Light colour palette, generous white space and typography that keeps the text front and centre." },
            { label: "Status", text: "Live on Netlify. Marie manages her own content via a CMS and publishes new stories without any technical help." },
        ],
        approachTitle: "The approach",
        approach: "A writer's website should never get in the way. The structure clearly separates three types of content, without Marie having to think about technology to reach her readers.",
        liveBtn: "View the website ↗",
        backBtn: "← Back to Portfolio",
    },
    fr: {
        title: "Webdesign · Marie H. Boddaert",
        subtitle: "Site d'écrivaine · en ligne sur Netlify",
        tagline: "Les mots méritent de l'espace.\nUn endroit où les histoires respirent.",
        badge: "Live",
        intro: "Marie H. Boddaert écrit des blogs, des poèmes et des textes sur commande. J'ai conçu un site personnel pour elle qui ressemble à son propre livre : léger, serein et entièrement accordé à sa voix.",
        cards: [
            { label: "Quoi", text: "Site personnel d'écrivaine avec trois sections de contenu : histoires, poèmes et courtes notes de journal. Avec intégration Substack pour la newsletter." },
            { label: "Comment", text: "Design sur-mesure en HTML/CSS. Palette claire, beaucoup d'espace blanc et une typographie qui met le texte en avant." },
            { label: "Statut", text: "En ligne sur Netlify. Marie gère son propre contenu via un CMS et publie de nouvelles histoires sans aide technique." },
        ],
        approachTitle: "L'approche",
        approach: "Un site d'écrivaine ne doit pas se mettre en travers du chemin. La structure distingue clairement trois types de contenu, sans que Marie ait à penser à la technologie pour atteindre ses lecteurs.",
        liveBtn: "Voir le site ↗",
        backBtn: "← Retour au Portfolio",
    },
    de: {
        title: "Webdesign · Marie H. Boddaert",
        subtitle: "Autorinnenwebsite · live auf Netlify",
        tagline: "Worte verdienen Raum.\nEin Ort, wo Geschichten atmen.",
        badge: "Live",
        intro: "Marie H. Boddaert schreibt Blogs, Gedichte und Texte auf Bestellung. Ich habe eine persönliche Website für sie entworfen, die sich wie ihr eigenes Buch anfühlt: leicht, ruhig und ganz auf ihre Stimme abgestimmt.",
        cards: [
            { label: "Was", text: "Persönliche Autorinnenwebsite mit drei Inhaltsbereichen: Geschichten, Gedichte und kurze Tagebuchnotizen. Mit Substack-Integration für den Newsletter." },
            { label: "Wie", text: "Maßgeschneidertes Design in HTML/CSS. Helles Farbschema, viel Weißraum und Typografie, die den Text in den Mittelpunkt stellt." },
            { label: "Status", text: "Live auf Netlify. Marie verwaltet ihre eigenen Inhalte über ein CMS und veröffentlicht neue Texte ohne technische Hilfe." },
        ],
        approachTitle: "Der Ansatz",
        approach: "Eine Autorinnenwebsite darf nicht im Weg stehen. Die Struktur trennt drei Arten von Inhalten klar voneinander, ohne dass Marie über Technologie nachdenken muss, um ihre Leser zu erreichen.",
        liveBtn: "Website ansehen ↗",
        backBtn: "← Zurück zum Portfolio",
    },
    es: {
        title: "Webdesign · Marie H. Boddaert",
        subtitle: "Web de escritora · en vivo en Netlify",
        tagline: "Las palabras merecen espacio.\nUn lugar donde las historias respiran.",
        badge: "Live",
        intro: "Marie H. Boddaert escribe blogs, poemas y textos por encargo. Diseñé para ella un sitio personal que se siente como su propio libro: ligero, tranquilo y completamente afinado a su voz.",
        cards: [
            { label: "Qué", text: "Sitio personal de escritora con tres secciones de contenido: historias, poemas y notas de diario. Con integración de Substack para el boletín." },
            { label: "Cómo", text: "Diseño personalizado en HTML/CSS. Paleta de colores clara, amplio espacio en blanco y tipografía que pone el texto en el centro." },
            { label: "Estado", text: "En vivo en Netlify. Marie gestiona su propio contenido mediante un CMS y publica nuevas historias sin ayuda técnica." },
        ],
        approachTitle: "El enfoque",
        approach: "Un sitio de escritora no debe interponerse en el camino. La estructura separa claramente tres tipos de contenido, sin que Marie tenga que pensar en tecnología para llegar a sus lectores.",
        liveBtn: "Ver el sitio ↗",
        backBtn: "← Volver al Portfolio",
    },
    it: {
        title: "Webdesign · Marie H. Boddaert",
        subtitle: "Sito di scrittrice · live su Netlify",
        tagline: "Le parole meritano spazio.\nUn luogo dove le storie respirano.",
        badge: "Live",
        intro: "Marie H. Boddaert scrive blog, poesie e testi su commissione. Ho progettato per lei un sito personale che si sente come un suo libro: leggero, sereno e completamente sintonizzato sulla sua voce.",
        cards: [
            { label: "Cosa", text: "Sito personale di scrittrice con tre sezioni di contenuto: storie, poesie e brevi note di diario. Con integrazione Substack per la newsletter." },
            { label: "Come", text: "Design personalizzato in HTML/CSS. Palette di colori chiara, ampio spazio bianco e tipografia che mette il testo al centro." },
            { label: "Stato", text: "Live su Netlify. Marie gestisce i propri contenuti tramite un CMS e pubblica nuove storie senza aiuto tecnico." },
        ],
        approachTitle: "L'approccio",
        approach: "Un sito di scrittrice non deve essere d'ostacolo. La struttura distingue chiaramente tre tipi di contenuto, senza che Marie debba pensare alla tecnologia per raggiungere i suoi lettori.",
        liveBtn: "Vedi il sito ↗",
        backBtn: "← Torna al Portfolio",
    },
    uk: {
        title: "Вебдизайн · Marie H. Boddaert",
        subtitle: "Письменницький сайт · хоститься на Netlify",
        tagline: "Слова заслуговують простору.\nМісце, де дихають історії.",
        badge: "Онлайн",
        intro: "Marie H. Boddaert пише блоги, вірші та тексти на замовлення. Я розробила для неї особистий сайт, що відчувається як її власна книга: легкий, спокійний і повністю налаштований на її голос.",
        cards: [
            { label: "Що", text: "Особистий письменницький сайт з трьома розділами контенту: оповідання, вірші та короткі щоденникові нотатки. З інтеграцією Substack для розсилки." },
            { label: "Як", text: "Індивідуальний дизайн в HTML/CSS. Світла кольорова палітра, великий білий простір і типографіка, що ставить текст у центр." },
            { label: "Статус", text: "Онлайн на Netlify. Marie керує своїм контентом через CMS і публікує нові історії без технічної допомоги." },
        ],
        approachTitle: "Підхід",
        approach: "Письменницький сайт не повинен заважати. Структура чітко розділяє три типи контенту, щоб Marie не думала про технологію, а просто досягала своїх читачів.",
        liveBtn: "Переглянути сайт ↗",
        backBtn: "← Назад до Портфоліо",
    },
};

export default function MarieboddaertWriterSite() {
    const { t: tr, i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const c = content[lang] || content.en;

    return (
        <article className="mb-page section">
            <Seo
                title={tr("seo.portfolio.marieboddaert.title")}
                description={tr("seo.portfolio.marieboddaert.description")}
                path="/marieboddaert"
                image={OG_IMAGE}
            />
            <JsonLd data={SCHEMA} />

            <nav aria-label="Breadcrumb" className="breadcrumbs">
                <Link to="/">{tr('nav.home')}</Link>
                <span className="breadcrumb-sep" aria-hidden="true">›</span>
                <Link to="/#portfolio">{tr('nav.portfolio')}</Link>
                <span className="breadcrumb-sep" aria-hidden="true">›</span>
                <span aria-current="page">Marie H. Boddaert</span>
            </nav>

            {/* ── HERO ── */}
            <header className="mb-hero">
                <div className="mb-hero-text">
                    <div className="mb-badge-row">
                        <span className="mb-badge">{c.badge}</span>
                        <p className="mb-label">{c.subtitle}</p>
                    </div>
                    <h1 className="mb-title">{c.title}</h1>
                    <p className="mb-tagline">{c.tagline}</p>
                    <div className="mb-tags">
                        <span className="tag">HTML/CSS</span>
                        <span className="tag">Webdesign</span>
                        <span className="tag">Typografie</span>
                        <span className="tag">Netlify</span>
                        <span className="tag">Substack</span>
                    </div>
                    <a className="btn btn-primary mb-cta" href={LIVE_URL} target="_blank" rel="noreferrer">{c.liveBtn}</a>
                </div>
                <div className="mb-hero-image">
                    <img src={MOCKUP} alt="Marie H. Boddaert schrijverswebsite mockup" className="mb-cover" loading="eager" decoding="async" />
                </div>
            </header>

            {/* ── INTRO ── */}
            <section className="mb-intro">
                <p>{c.intro}</p>
            </section>

            {/* ── CARDS ── */}
            <section className="mb-cards">
                {c.cards.map((card) => (
                    <div className="mb-card" key={card.label}>
                        <span className="mb-card-label">{card.label}</span>
                        <p className="mb-card-text">{card.text}</p>
                    </div>
                ))}
            </section>

            {/* ── APPROACH ── */}
            <section className="mb-approach">
                <h2>{c.approachTitle}</h2>
                <blockquote>{c.approach}</blockquote>
            </section>

            {/* ── FOOTER ── */}
            <footer className="mb-footer">
                <Link className="btn btn-outline" to="/#portfolio">{c.backBtn}</Link>
                <a className="btn btn-primary" href={LIVE_URL} target="_blank" rel="noreferrer">{c.liveBtn}</a>
            </footer>

            <style>{`
        .mb-page { max-width: 1000px; margin: 0 auto; padding: 28px 20px 60px; }

        .mb-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          padding: 48px 0 40px;
        }

        .mb-badge-row {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 12px;
        }
        .mb-badge {
          font-size: .7rem; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase;
          background: var(--accent); color: var(--bordeaux);
          padding: 3px 10px; border-radius: 99px;
        }
        .mb-label {
          font-size: .8rem; font-weight: 600; letter-spacing: .1em;
          text-transform: uppercase; color: var(--muted); margin: 0;
        }
        .mb-title {
          font-size: clamp(1.85rem, 4.5vw, 3rem);
          line-height: 1.1; margin: 0 0 16px;
        }
        .mb-tagline {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--muted); white-space: pre-line;
          line-height: 1.5; margin: 0 0 20px; font-style: italic;
        }
        .mb-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px; }
        .mb-cta { align-self: flex-start; }

        .mb-hero-image {
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,.35);
        }
        .mb-cover { display: block; width: 100%; height: auto; }

        .mb-intro {
          border-left: 3px solid var(--accent);
          padding: 4px 0 4px 20px;
          margin: 0 0 56px;
        }
        .mb-intro p {
          font-size: 1.1rem; line-height: 1.7;
          color: var(--muted); margin: 0;
        }

        .mb-cards {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 20px; margin-bottom: 56px;
        }
        .mb-card {
          background: var(--bg-alt); border: 1px solid var(--border);
          border-radius: 14px; padding: 24px 22px;
        }
        .mb-card-label {
          display: block; font-size: .75rem; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 10px;
        }
        .mb-card-text {
          font-size: .95rem; line-height: 1.6;
          color: var(--text); margin: 0;
        }

        .mb-approach { margin-bottom: 56px; }
        .mb-approach h2 {
          font-size: .85rem; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; color: var(--accent);
          margin: 0 0 16px;
        }
        .mb-approach blockquote {
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          line-height: 1.65; color: var(--text);
          margin: 0; font-style: italic;
          border-left: 3px solid var(--bordeaux);
          padding-left: 20px;
        }

        .mb-footer {
          display: flex; gap: 14px; flex-wrap: wrap;
          padding-top: 16px; border-top: 1px solid var(--border);
        }

        .tag { font-size: .82rem; padding: 4px 10px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); background: var(--bg); white-space: nowrap; }
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 9px; font-size: .92rem; font-weight: 600; cursor: pointer; text-decoration: none; transition: all .18s ease; border: 1px solid transparent; }
        .btn-outline { background: transparent; color: var(--accent); border-color: var(--accent); }
        .btn-outline:hover { background: var(--accent); color: var(--bordeaux); }
        .btn-primary { background: var(--accent); color: var(--bordeaux); border-color: var(--accent); }
        .btn-primary:hover { background: var(--bordeaux); color: var(--bg); border-color: var(--bordeaux); }

        @media (max-width: 720px) {
          .mb-hero { grid-template-columns: 1fr; gap: 28px; padding: 28px 0 24px; }
          .mb-hero-image { order: -1; }
          .mb-cards { grid-template-columns: 1fr; }
        }
      `}</style>
        </article>
    );
}
