import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FallbackBack from "../../assets/Pics/Portfolio/StudentenDashboardBackend.jpeg";
import Seo from "../../assets/Components/Seo.jsx";

const COVER_BASE = "/portfolio/studenten-dashboard-backend";

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
        title: "Studenten Verhuur Dashboard",
        subtitle: "Spring Boot · Klaar voor gebruik",
        tagline: "Digitaal verhuren, volledig in control.\nAlles op één plek, uitbreidbaar naar jouw situatie.",
        intro: "Kamers verhuren aan studenten brengt meer papierwerk met zich mee dan je denkt. Betalingen opvolgen, contracten bijhouden, schoonmaak verdelen, regels vastleggen. Dit dashboard neemt dat over.",
        features: [
            "Betalingsoverzicht met automatische herinneringen",
            "Schoonmaakrooster per woning",
            "Digitale contracten en huisregels",
            "Eigen inlogaccounts per huurder",
            "Rolgebaseerde toegang: verhuurder en student",
        ],
        cards: [
            { label: "Voor wie", text: "Particuliere verhuurders met meerdere studentenkamers die grip willen op betalingen, administratie en communicatie." },
            { label: "Wat zit erin", text: "Betalingen, herinneringen, schoonmaakrooster, contracten, huisregels en huurdersbeheer in één beveiligde omgeving." },
            { label: "Technisch", text: "Spring Boot, PostgreSQL, JWT-beveiliging en een REST API die aan elke frontend te koppelen is. Volledig uitbreidbaar." },
        ],
        featuresTitle: "Wat is inbegrepen",
        ctaTitle: "Interesse?",
        ctaText: "Dit dashboard is beschikbaar voor andere verhuurders. Neem contact op voor een demo, maatwerk of meer informatie.",
        ctaBtn: "Neem contact op →",
        backBtn: "← Terug naar Portfolio",
    },
    en: {
        title: "Student Housing Dashboard",
        subtitle: "Spring Boot · Ready to use",
        tagline: "Digital rental management, fully in control.\nEverything in one place, built to scale.",
        intro: "Renting rooms to students brings more paperwork than you'd expect. Tracking payments, managing contracts, organising cleaning, setting rules. This dashboard handles it all.",
        features: [
            "Payment overview with automatic reminders",
            "Cleaning schedule per property",
            "Digital contracts and house rules",
            "Individual login accounts per tenant",
            "Role-based access: landlord and student",
        ],
        cards: [
            { label: "For whom", text: "Private landlords with multiple student rooms who want control over payments, administration and communication." },
            { label: "What's inside", text: "Payments, reminders, cleaning schedule, contracts, house rules and tenant management in one secure environment." },
            { label: "Technical", text: "Spring Boot, PostgreSQL, JWT security and a REST API that connects to any frontend. Fully extendable." },
        ],
        featuresTitle: "What's included",
        ctaTitle: "Interested?",
        ctaText: "This dashboard is available for other landlords. Get in touch for a demo, custom build or more information.",
        ctaBtn: "Get in touch →",
        backBtn: "← Back to Portfolio",
    },
    fr: {
        title: "Tableau de bord location étudiante",
        subtitle: "Spring Boot · Prêt à l'emploi",
        tagline: "Gestion locative numérique, totalement maîtrisée.\nTout en un endroit, extensible selon vos besoins.",
        intro: "Louer des chambres à des étudiants apporte plus de paperasse qu'on ne le pense. Suivi des paiements, gestion des contrats, organisation du ménage, définition des règles. Ce tableau de bord s'en charge.",
        features: [
            "Aperçu des paiements avec rappels automatiques",
            "Planning ménage par logement",
            "Contrats numériques et règlement intérieur",
            "Comptes de connexion individuels par locataire",
            "Accès basé sur les rôles : bailleur et étudiant",
        ],
        cards: [
            { label: "Pour qui", text: "Bailleurs privés avec plusieurs chambres étudiantes qui veulent le contrôle sur les paiements, l'administration et la communication." },
            { label: "Contenu", text: "Paiements, rappels, planning ménage, contrats, règlement intérieur et gestion des locataires dans un environnement sécurisé." },
            { label: "Technique", text: "Spring Boot, PostgreSQL, sécurité JWT et une API REST qui se connecte à n'importe quel frontend. Entièrement extensible." },
        ],
        featuresTitle: "Ce qui est inclus",
        ctaTitle: "Intéressé ?",
        ctaText: "Ce tableau de bord est disponible pour d'autres bailleurs. Contactez-moi pour une démo, un développement sur mesure ou plus d'informations.",
        ctaBtn: "Me contacter →",
        backBtn: "← Retour au Portfolio",
    },
    de: {
        title: "Studenten-Vermietungs-Dashboard",
        subtitle: "Spring Boot · Einsatzbereit",
        tagline: "Digital vermieten, vollständig im Griff.\nAlles an einem Ort, skalierbar auf Ihre Situation.",
        intro: "Zimmer an Studenten zu vermieten bringt mehr Papierkram mit sich als erwartet. Zahlungen verfolgen, Verträge verwalten, Reinigung organisieren, Regeln festlegen. Dieses Dashboard übernimmt das.",
        features: [
            "Zahlungsübersicht mit automatischen Erinnerungen",
            "Reinigungsplan pro Wohnung",
            "Digitale Verträge und Hausordnung",
            "Individuelle Login-Accounts pro Mieter",
            "Rollenbasierter Zugang: Vermieter und Student",
        ],
        cards: [
            { label: "Für wen", text: "Privatvermieter mit mehreren Studentenzimmern, die Kontrolle über Zahlungen, Verwaltung und Kommunikation wollen." },
            { label: "Inhalt", text: "Zahlungen, Erinnerungen, Reinigungsplan, Verträge, Hausordnung und Mieterverwaltung in einer sicheren Umgebung." },
            { label: "Technisch", text: "Spring Boot, PostgreSQL, JWT-Sicherheit und eine REST API, die mit jedem Frontend verbunden werden kann. Vollständig erweiterbar." },
        ],
        featuresTitle: "Was ist enthalten",
        ctaTitle: "Interessiert?",
        ctaText: "Dieses Dashboard ist für andere Vermieter verfügbar. Kontaktieren Sie mich für eine Demo, individuelle Entwicklung oder mehr Informationen.",
        ctaBtn: "Kontakt aufnehmen →",
        backBtn: "← Zurück zum Portfolio",
    },
    es: {
        title: "Dashboard de alquiler estudiantil",
        subtitle: "Spring Boot · Listo para usar",
        tagline: "Gestión digital de alquileres, con control total.\nTodo en un lugar, escalable a tu situación.",
        intro: "Alquilar habitaciones a estudiantes trae más papeleo del esperado. Seguimiento de pagos, gestión de contratos, organización de limpieza, establecimiento de normas. Este dashboard lo gestiona todo.",
        features: [
            "Resumen de pagos con recordatorios automáticos",
            "Calendario de limpieza por propiedad",
            "Contratos digitales y normas del hogar",
            "Cuentas individuales por inquilino",
            "Acceso por roles: arrendador y estudiante",
        ],
        cards: [
            { label: "Para quién", text: "Arrendadores privados con varias habitaciones estudiantiles que quieren control sobre pagos, administración y comunicación." },
            { label: "Contenido", text: "Pagos, recordatorios, calendario de limpieza, contratos, normas del hogar y gestión de inquilinos en un entorno seguro." },
            { label: "Técnico", text: "Spring Boot, PostgreSQL, seguridad JWT y una API REST que se conecta a cualquier frontend. Totalmente extensible." },
        ],
        featuresTitle: "Qué incluye",
        ctaTitle: "¿Interesado?",
        ctaText: "Este dashboard está disponible para otros arrendadores. Contáctame para una demo, desarrollo personalizado o más información.",
        ctaBtn: "Contactar →",
        backBtn: "← Volver al Portfolio",
    },
    it: {
        title: "Dashboard affitti studenteschi",
        subtitle: "Spring Boot · Pronto all'uso",
        tagline: "Gestione digitale degli affitti, pieno controllo.\nTutto in un posto, espandibile alle tue esigenze.",
        intro: "Affittare camere a studenti porta più burocrazia del previsto. Seguire i pagamenti, gestire i contratti, organizzare le pulizie, stabilire le regole. Questo dashboard se ne occupa.",
        features: [
            "Panoramica pagamenti con promemoria automatici",
            "Piano pulizie per proprietà",
            "Contratti digitali e regole della casa",
            "Account di accesso individuali per inquilino",
            "Accesso basato sui ruoli: proprietario e studente",
        ],
        cards: [
            { label: "Per chi", text: "Proprietari privati con più camere per studenti che vogliono controllo su pagamenti, amministrazione e comunicazione." },
            { label: "Contenuto", text: "Pagamenti, promemoria, piano pulizie, contratti, regole della casa e gestione inquilini in un ambiente sicuro." },
            { label: "Tecnico", text: "Spring Boot, PostgreSQL, sicurezza JWT e una API REST collegabile a qualsiasi frontend. Completamente estendibile." },
        ],
        featuresTitle: "Cosa è incluso",
        ctaTitle: "Interessato?",
        ctaText: "Questo dashboard è disponibile per altri proprietari. Contattami per una demo, sviluppo personalizzato o maggiori informazioni.",
        ctaBtn: "Contattami →",
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

            {/* ── HERO ── */}
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
                    <a className="btn btn-primary vr-cta" href="/#contact">{c.ctaBtn}</a>
                </div>
                <div className="vr-hero-image">
                    <GuardedPicture base={COVER_BASE} fallback={FallbackBack} alt="Studenten verhuur dashboard" sizes="(max-width: 768px) 100vw, 55vw" />
                </div>
            </header>

            {/* ── INTRO ── */}
            <section className="vr-intro">
                <p>{c.intro}</p>
            </section>

            {/* ── FEATURES LIST ── */}
            <section className="vr-features">
                <h2 className="vr-features-title">{c.featuresTitle}</h2>
                <ul className="vr-feature-list">
                    {c.features.map((f, i) => (
                        <li key={i} className="vr-feature-item">
                            <span className="vr-feature-check" aria-hidden="true">✓</span>
                            {f}
                        </li>
                    ))}
                </ul>
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

            {/* ── CTA BLOCK ── */}
            <section className="vr-cta-block">
                <h2>{c.ctaTitle}</h2>
                <p>{c.ctaText}</p>
                <a className="btn btn-primary" href="/#contact">{c.ctaBtn}</a>
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
        .vr-cta { align-self: flex-start; }
        .vr-hero-image { border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,.4); }
        .cover-img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .vr-intro { border-left: 3px solid var(--accent); padding: 4px 0 4px 20px; margin: 0 0 48px; }
        .vr-intro p { font-size: 1.1rem; line-height: 1.7; color: var(--muted); margin: 0; }
        .vr-features { margin-bottom: 48px; }
        .vr-features-title { font-size: .8rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--accent); margin: 0 0 16px; }
        .vr-feature-list { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 10px; }
        .vr-feature-item { display: flex; align-items: flex-start; gap: 10px; font-size: .95rem; line-height: 1.5; color: var(--text); }
        .vr-feature-check { color: var(--accent); font-weight: 700; flex-shrink: 0; margin-top: 1px; }
        .vr-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 48px; }
        .vr-card { background: var(--bg-alt); border: 1px solid var(--border); border-radius: 14px; padding: 24px 22px; }
        .vr-card-label { display: block; font-size: .75rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px; }
        .vr-card-text { font-size: .95rem; line-height: 1.6; color: var(--text); margin: 0; }
        .vr-cta-block { background: var(--bg-alt); border: 1px solid var(--border); border-radius: 16px; padding: 32px; margin-bottom: 48px; }
        .vr-cta-block h2 { margin: 0 0 8px; font-size: 1.3rem; }
        .vr-cta-block p { color: var(--muted); margin: 0 0 20px; line-height: 1.65; }
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
          .vr-cta-block { padding: 24px 18px; }
        }
      `}</style>
        </article>
    );
}