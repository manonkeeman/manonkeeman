import { Link } from "../../assets/Components/LocaleLink.jsx";
import { useTranslation } from "react-i18next";
import Seo from "../../assets/Components/Seo.jsx";
import JsonLd from "../../assets/Components/JsonLd.jsx";

const MOCKUP  = "/Portfolio/bigthree-concept.png";
const LOGO    = "/Portfolio/bigthree-logo.png";

const SCHEMA = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Big Three",
    "description": "Webdesign concept voor The Big Three, een garage gespecialiseerd in Amerikaanse auto's in Nunspeet.",
    "creator": {
        "@type": "Person",
        "@id": "https://manonit.com/#manon",
        "name": "Manon Keeman",
    },
    "isPartOf": { "@id": "https://manonit.com/#website" },
};

const content = {
    nl: {
        title: "Webdesign Concept · The Big Three",
        subtitle: "Website concept · in voorbereiding",
        tagline: "Gebouwd in Amerika.\nGereviseerd in Nunspeet.",
        badge: "Concept",
        intro: "The Big Three is een gespecialiseerde garage in Amerikaanse auto's in Nunspeet. Voor de eigenaar ontwierp ik een website-concept dat de uitstraling van het merk weerspiegelt: stoer, authentiek en vol karakter.",
        cards: [
            { label: "Wat", text: "Volledig custom websiteontwerp voor een garage in Amerikaanse auto's. Van visuele identiteit tot UX-structuur." },
            { label: "Hoe", text: "Concept in HTML/CSS. Dark theme met Amerikaans karakter: dramatische typografie, rood-wit-blauw kleurpalet en filmische sfeer." },
            { label: "Status", text: "In gesprek. De definitieve offerte is opgesteld. Dit concept dient als visuele richting voor de klant." },
        ],
        challengeTitle: "De uitdaging",
        challenge: "Een garage in Amerikaanse auto's vraagt om een website die voelt als een filmposer, niet als een productpagina. De stijl moest meteen duidelijk maken wat The Big Three is, zonder dat je één woord hoeft te lezen.",
        backBtn: "← Terug naar Portfolio",
    },
    en: {
        title: "Web Design Concept · The Big Three",
        subtitle: "Website concept · in progress",
        tagline: "Built in America.\nServiced in Nunspeet.",
        badge: "Concept",
        intro: "The Big Three is a specialist garage for American cars in Nunspeet. I designed a website concept that reflects the brand's character: bold, authentic and full of personality.",
        cards: [
            { label: "What", text: "Fully custom website design for an American car garage. From visual identity to UX structure." },
            { label: "How", text: "Concept in HTML/CSS. Dark theme with an American character: dramatic typography, red-white-blue palette and cinematic atmosphere." },
            { label: "Status", text: "In discussion. The final quote has been drawn up. This concept serves as the visual direction for the client." },
        ],
        challengeTitle: "The challenge",
        challenge: "A garage specialising in American cars needs a website that feels like a movie poster, not a product page. The style had to make it immediately clear what The Big Three is, before you read a single word.",
        backBtn: "← Back to Portfolio",
    },
    fr: {
        title: "Concept Web · The Big Three",
        subtitle: "Concept de site · en cours",
        tagline: "Construit en Amérique.\nRévisé à Nunspeet.",
        badge: "Concept",
        intro: "The Big Three est un garage spécialisé dans les voitures américaines à Nunspeet. J'ai conçu un concept de site qui reflète l'identité de la marque : fort, authentique et plein de caractère.",
        cards: [
            { label: "Quoi", text: "Design de site entièrement sur-mesure pour un garage de voitures américaines." },
            { label: "Comment", text: "Concept en HTML/CSS. Thème sombre avec un caractère américain : typographie dramatique, palette rouge-blanc-bleu." },
            { label: "Statut", text: "En discussion. Le devis est rédigé. Ce concept sert de direction visuelle pour le client." },
        ],
        challengeTitle: "Le défi",
        challenge: "Un garage spécialisé dans les voitures américaines a besoin d'un site qui ressemble à une affiche de film, pas à une page produit.",
        backBtn: "← Retour au Portfolio",
    },
    de: {
        title: "Webdesign-Konzept · The Big Three",
        subtitle: "Website-Konzept · in Vorbereitung",
        tagline: "In Amerika gebaut.\nIn Nunspeet gewartet.",
        badge: "Konzept",
        intro: "The Big Three ist eine Spezialwerkstatt für amerikanische Autos in Nunspeet. Ich habe ein Website-Konzept entworfen, das den Charakter der Marke widerspiegelt: mutig, authentisch und voller Persönlichkeit.",
        cards: [
            { label: "Was", text: "Vollständig maßgeschneidertes Website-Design für eine Garage für amerikanische Autos." },
            { label: "Wie", text: "Konzept in HTML/CSS. Dunkles Thema mit amerikanischem Charakter: dramatische Typografie, rot-weiß-blaue Farbpalette." },
            { label: "Status", text: "Im Gespräch. Das Angebot liegt vor. Dieses Konzept dient als visuelle Richtung für den Kunden." },
        ],
        challengeTitle: "Die Herausforderung",
        challenge: "Eine Garage für amerikanische Autos braucht eine Website, die sich wie ein Filmplakat anfühlt, nicht wie eine Produktseite.",
        backBtn: "← Zurück zum Portfolio",
    },
    es: {
        title: "Concepto Web · The Big Three",
        subtitle: "Concepto de web · en preparación",
        tagline: "Fabricado en América.\nRevisado en Nunspeet.",
        badge: "Concepto",
        intro: "The Big Three es un taller especializado en coches americanos en Nunspeet. Diseñé un concepto de web que refleja la identidad de la marca: atrevido, auténtico y con mucho carácter.",
        cards: [
            { label: "Qué", text: "Diseño web completamente personalizado para un taller de coches americanos." },
            { label: "Cómo", text: "Concepto en HTML/CSS. Tema oscuro con carácter americano: tipografía dramática, paleta rojo-blanco-azul." },
            { label: "Estado", text: "En conversación. El presupuesto está redactado. Este concepto sirve como dirección visual para el cliente." },
        ],
        challengeTitle: "El reto",
        challenge: "Un taller especializado en coches americanos necesita una web que parezca un cartel de película, no una página de producto.",
        backBtn: "← Volver al Portfolio",
    },
    it: {
        title: "Concept Web · The Big Three",
        subtitle: "Concept sito · in preparazione",
        tagline: "Costruito in America.\nRevisionato a Nunspeet.",
        badge: "Concept",
        intro: "The Big Three è un'officina specializzata in auto americane a Nunspeet. Ho progettato un concept di sito che riflette l'identità del marchio: audace, autentico e pieno di carattere.",
        cards: [
            { label: "Cosa", text: "Design web completamente su misura per un'officina di auto americane." },
            { label: "Come", text: "Concept in HTML/CSS. Tema scuro con carattere americano: tipografia drammatica, palette rosso-bianco-blu." },
            { label: "Stato", text: "In discussione. Il preventivo è pronto. Questo concept funge da direzione visiva per il cliente." },
        ],
        challengeTitle: "La sfida",
        challenge: "Un'officina specializzata in auto americane ha bisogno di un sito che sembri un poster cinematografico, non una pagina prodotto.",
        backBtn: "← Torna al Portfolio",
    },
    uk: {
        title: "Концепт вебдизайну · The Big Three",
        subtitle: "Концепт сайту · в розробці",
        tagline: "Зроблено в Америці.\nОбслуговується в Нунспіт.",
        badge: "Концепт",
        intro: "The Big Three — спеціалізований гараж американських автомобілів у Нунспіт. Я розробила концепт сайту, що відображає характер бренду: сміливий, автентичний і з повним характером.",
        cards: [
            { label: "Що", text: "Повністю кастомний вебдизайн для гаражу американських автомобілів." },
            { label: "Як", text: "Концепт в HTML/CSS. Темна тема з американським характером: драматична типографіка, палітра червоно-біло-синього." },
            { label: "Статус", text: "На стадії обговорення. Комерційна пропозиція готова. Цей концепт служить візуальним напрямком для клієнта." },
        ],
        challengeTitle: "Виклик",
        challenge: "Гараж американських автомобілів потребує сайту, що відчувається як кіноафіша, а не як сторінка продукту.",
        backBtn: "← Назад до Портфоліо",
    },
};

export default function TheBigThree() {
    const { i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const c = content[lang] || content.en;

    return (
        <article className="bt-page section">
            <Seo
                title="The Big Three · Webdesign Concept | ManonIT"
                description="Website concept voor The Big Three, een garage in Amerikaanse auto's in Nunspeet. Dark theme met Amerikaans karakter."
                path="/thebigthree"
            />
            <JsonLd data={SCHEMA} />

            <nav aria-label="Breadcrumb" className="breadcrumbs">
                <Link to="/">Home</Link>
                <span className="breadcrumb-sep" aria-hidden="true">›</span>
                <Link to="/#portfolio">Portfolio</Link>
                <span className="breadcrumb-sep" aria-hidden="true">›</span>
                <span aria-current="page">The Big Three</span>
            </nav>

            {/* ── HERO ── */}
            <header className="bt-hero">
                <div className="bt-hero-text">
                    <div className="bt-badge-row">
                        <span className="bt-badge">{c.badge}</span>
                        <p className="bt-label">{c.subtitle}</p>
                    </div>
                    <h1 className="bt-title">{c.title}</h1>
                    <p className="bt-tagline">{c.tagline}</p>
                    <div className="bt-tags">
                        <span className="tag">HTML/CSS</span>
                        <span className="tag">Webdesign</span>
                        <span className="tag">Dark theme</span>
                        <span className="tag">Concept</span>
                    </div>
                    <div className="bt-logo-row">
                        <img src={LOGO} alt="The Big Three logo" className="bt-logo" />
                    </div>
                </div>
                <div className="bt-hero-image">
                    <img src={MOCKUP} alt="The Big Three website concept" className="bt-cover" loading="eager" decoding="async" />
                </div>
            </header>

            {/* ── INTRO ── */}
            <section className="bt-intro">
                <p>{c.intro}</p>
            </section>

            {/* ── CARDS ── */}
            <section className="bt-cards">
                {c.cards.map((card) => (
                    <div className="bt-card" key={card.label}>
                        <span className="bt-card-label">{card.label}</span>
                        <p className="bt-card-text">{card.text}</p>
                    </div>
                ))}
            </section>

            {/* ── CHALLENGE ── */}
            <section className="bt-challenge">
                <h2>{c.challengeTitle}</h2>
                <blockquote>{c.challenge}</blockquote>
            </section>

            {/* ── FOOTER ── */}
            <footer className="bt-footer">
                <Link className="btn btn-outline" to="/#portfolio">{c.backBtn}</Link>
            </footer>

            <style>{`
        .bt-page { max-width: 1000px; margin: 0 auto; padding: 28px 20px 60px; }

        .bt-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          padding: 48px 0 40px;
        }

        .bt-badge-row {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 12px;
        }
        .bt-badge {
          font-size: .7rem; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase;
          background: var(--accent); color: var(--bordeaux);
          padding: 3px 10px; border-radius: 99px;
        }
        .bt-label {
          font-size: .8rem; font-weight: 600; letter-spacing: .1em;
          text-transform: uppercase; color: var(--muted); margin: 0;
        }
        .bt-title {
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          line-height: 1.1; margin: 0 0 16px;
        }
        .bt-tagline {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--muted); white-space: pre-line;
          line-height: 1.5; margin: 0 0 20px; font-style: italic;
        }
        .bt-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
        .bt-logo-row { margin-top: 8px; }
        .bt-logo {
          height: 64px; width: auto; border-radius: 8px;
          object-fit: contain;
        }

        .bt-hero-image {
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 20px 60px rgba(92,26,27,.18);
        }
        .bt-cover { display: block; width: 100%; height: auto; border-radius: 0; }

        .bt-intro {
          border-left: 3px solid var(--accent);
          padding: 4px 0 4px 20px;
          margin: 0 0 48px;
        }
        .bt-intro p {
          font-size: 1.1rem; line-height: 1.7;
          color: var(--muted); margin: 0;
        }

        .bt-cards {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 20px; margin-bottom: 48px;
        }
        .bt-card {
          background: var(--bg-alt); border: 1px solid var(--border);
          border-radius: 14px; padding: 24px 22px;
        }
        .bt-card-label {
          display: block; font-size: .75rem; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 10px;
        }
        .bt-card-text {
          font-size: .95rem; line-height: 1.6;
          color: var(--text); margin: 0;
        }

        .bt-challenge { margin-bottom: 48px; }
        .bt-challenge h2 {
          font-size: .85rem; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; color: var(--accent);
          margin: 0 0 16px;
        }
        .bt-challenge blockquote {
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          line-height: 1.65; color: var(--text);
          margin: 0; font-style: italic;
          border-left: 3px solid var(--bordeaux);
          padding-left: 20px;
        }

        .bt-footer {
          display: flex; gap: 14px; flex-wrap: wrap;
          padding-top: 16px; border-top: 1px solid var(--border);
        }

        .tag { font-size: .82rem; padding: 4px 10px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); background: var(--bg); white-space: nowrap; }
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 9px 18px; border-radius: 9px; font-size: .92rem; font-weight: 600; cursor: pointer; text-decoration: none; transition: all .18s ease; border: 1px solid transparent; }
        .btn-outline { background: transparent; color: var(--accent); border-color: var(--accent); }
        .btn-outline:hover { background: var(--accent); color: var(--bordeaux); }

        @media (max-width: 720px) {
          .bt-hero { grid-template-columns: 1fr; gap: 28px; padding: 28px 0 24px; }
          .bt-hero-image { order: -1; }
          .bt-cards { grid-template-columns: 1fr; }
        }
      `}</style>
        </article>
    );
}
