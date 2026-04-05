import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FallbackFront from "../../assets/Pics/Portfolio/VredesteinFrontend.jpeg";

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

const bodies = {
    nl: () => (
        <>
            <h2>Context</h2>
            <p>Villa Vredestein vroeg om een helder, betrouwbaar studenten dashboard. Kern: snel inloggen, direct relevante info en nul frictie. Minimalistische UI, duidelijke hiërarchie.</p>
            <h2>Doelen</h2>
            <ul>
                <li>Veilige auth met <strong>JWT</strong> (login, refresh, protected routes).</li>
                <li>Responsieve UI met goede typografie en contrast.</li>
                <li>Kernacties prominent, ruis omlaag.</li>
                <li>Schone component-structuur en testbare logica.</li>
            </ul>
            <h2>Stack & Architectuur</h2>
            <ul>
                <li><strong>React + Vite</strong> voor snelheid en DX.</li>
                <li><strong>React Router</strong> met guardings (private routes).</li>
                <li><strong>Context/Reducer</strong> voor auth en rollen.</li>
                <li><strong>Fetch interceptors</strong> voor access/refresh tokens en API-errors.</li>
                <li><strong>CSS tokens</strong> voor consistente spacing/typografie.</li>
            </ul>
            <h2>Uitdagingen en Oplossingen</h2>
            <h3>1) Stabiele JWT-flow</h3>
            <p>Refresh-queue voorkomt dubbele refreshes; parallelle requests wachten en gaan daarna door.</p>
            <h3>2) Toegankelijke UI</h3>
            <p>Focus-states, aria-labels, toetsenbordnavigatie; tabellen en kaarten schalen elegant naar mobiel.</p>
            <h3>3) Informatie-architectuur</h3>
            <p>Above-the-fold herzien: één primaire CTA, drie secundaire taken; voorspelbare posities.</p>
            <h2>Resultaat</h2>
            <ul>
                <li>Snelle laadtijd (Vite + AVIF/WebP assets).</li>
                <li>Consistente UX; minder dwalen, meer flow.</li>
                <li>Schaalbare componenten en duidelijke mappen.</li>
            </ul>
            <h2>Link & Bron</h2>
            <p>Live: <a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    en: () => (
        <>
            <h2>Context</h2>
            <p>Villa Vredestein needed a clear, reliable student dashboard. Core: fast login, immediately relevant info and zero friction. Minimalist UI, clear hierarchy.</p>
            <h2>Goals</h2>
            <ul>
                <li>Secure auth with <strong>JWT</strong> (login, refresh, protected routes).</li>
                <li>Responsive UI with good typography and contrast.</li>
                <li>Core actions prominent, noise reduced.</li>
                <li>Clean component structure and testable logic.</li>
            </ul>
            <h2>Stack & Architecture</h2>
            <ul>
                <li><strong>React + Vite</strong> for speed and DX.</li>
                <li><strong>React Router</strong> with guards (private routes).</li>
                <li><strong>Context/Reducer</strong> for auth and roles.</li>
                <li><strong>Fetch interceptors</strong> for access/refresh tokens and API errors.</li>
                <li><strong>CSS tokens</strong> for consistent spacing/typography.</li>
            </ul>
            <h2>Challenges and Solutions</h2>
            <h3>1) Stable JWT flow</h3>
            <p>Refresh queue prevents double refreshes; parallel requests wait and then continue.</p>
            <h3>2) Accessible UI</h3>
            <p>Focus states, aria-labels, keyboard navigation; tables and cards scale elegantly to mobile.</p>
            <h3>3) Information architecture</h3>
            <p>Above-the-fold revised: one primary CTA, three secondary tasks; predictable positions.</p>
            <h2>Results</h2>
            <ul>
                <li>Fast load time (Vite + AVIF/WebP assets).</li>
                <li>Consistent UX; less wandering, more flow.</li>
                <li>Scalable components and clear folder structure.</li>
            </ul>
            <h2>Link & Source</h2>
            <p>Live: <a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    fr: () => (
        <>
            <h2>Contexte</h2>
            <p>Villa Vredestein avait besoin d'un tableau de bord étudiant clair et fiable. L'essentiel: connexion rapide, informations directement pertinentes et zéro friction. Interface minimaliste, hiérarchie claire.</p>
            <h2>Objectifs</h2>
            <ul>
                <li>Authentification sécurisée avec <strong>JWT</strong> (connexion, rafraîchissement, routes protégées).</li>
                <li>Interface responsive avec une bonne typographie et un bon contraste.</li>
                <li>Actions principales en avant, bruit réduit.</li>
                <li>Structure de composants propre et logique testable.</li>
            </ul>
            <h2>Stack & Architecture</h2>
            <ul>
                <li><strong>React + Vite</strong> pour la rapidité et l'expérience développeur.</li>
                <li><strong>React Router</strong> avec gardes (routes privées).</li>
                <li><strong>Context/Reducer</strong> pour l'auth et les rôles.</li>
                <li><strong>Fetch interceptors</strong> pour les tokens d'accès/rafraîchissement et les erreurs API.</li>
                <li><strong>CSS tokens</strong> pour un espacement/typographie cohérents.</li>
            </ul>
            <h2>Défis et Solutions</h2>
            <h3>1) Flux JWT stable</h3>
            <p>La file de rafraîchissement évite les doubles rafraîchissements; les requêtes parallèles attendent puis continuent.</p>
            <h3>2) Interface accessible</h3>
            <p>États de focus, aria-labels, navigation au clavier; tableaux et cartes s'adaptent élégamment au mobile.</p>
            <h3>3) Architecture de l'information</h3>
            <p>Au-dessus du pli revu: un CTA principal, trois tâches secondaires; positions prévisibles.</p>
            <h2>Résultats</h2>
            <ul>
                <li>Temps de chargement rapide (Vite + assets AVIF/WebP).</li>
                <li>UX cohérente; moins d'errance, plus de fluidité.</li>
                <li>Composants évolutifs et structure de dossiers claire.</li>
            </ul>
            <h2>Lien & Source</h2>
            <p>Live: <a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    de: () => (
        <>
            <h2>Kontext</h2>
            <p>Villa Vredestein benötigte ein klares, zuverlässiges Studenten-Dashboard. Kern: schnelle Anmeldung, sofort relevante Infos und null Reibung. Minimalistisches UI, klare Hierarchie.</p>
            <h2>Ziele</h2>
            <ul>
                <li>Sichere Auth mit <strong>JWT</strong> (Login, Refresh, geschützte Routen).</li>
                <li>Responsives UI mit guter Typografie und Kontrast.</li>
                <li>Kernaktionen prominent, Rauschen reduziert.</li>
                <li>Saubere Komponentenstruktur und testbare Logik.</li>
            </ul>
            <h2>Stack & Architektur</h2>
            <ul>
                <li><strong>React + Vite</strong> für Geschwindigkeit und DX.</li>
                <li><strong>React Router</strong> mit Guards (private Routen).</li>
                <li><strong>Context/Reducer</strong> für Auth und Rollen.</li>
                <li><strong>Fetch Interceptors</strong> für Access/Refresh-Tokens und API-Fehler.</li>
                <li><strong>CSS-Tokens</strong> für konsistentes Spacing/Typografie.</li>
            </ul>
            <h2>Herausforderungen und Lösungen</h2>
            <h3>1) Stabiler JWT-Flow</h3>
            <p>Refresh-Queue verhindert doppelte Refreshes; parallele Requests warten und fahren dann fort.</p>
            <h3>2) Barrierefreies UI</h3>
            <p>Focus-States, Aria-Labels, Tastaturnavigation; Tabellen und Karten skalieren elegant auf Mobilgeräte.</p>
            <h3>3) Informationsarchitektur</h3>
            <p>Above-the-Fold überarbeitet: ein primärer CTA, drei sekundäre Aufgaben; vorhersehbare Positionen.</p>
            <h2>Ergebnis</h2>
            <ul>
                <li>Schnelle Ladezeit (Vite + AVIF/WebP Assets).</li>
                <li>Konsistente UX; weniger Umherwandern, mehr Flow.</li>
                <li>Skalierbare Komponenten und klare Ordnerstruktur.</li>
            </ul>
            <h2>Link & Quelle</h2>
            <p>Live: <a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    es: () => (
        <>
            <h2>Contexto</h2>
            <p>Villa Vredestein necesitaba un panel de estudiantes claro y fiable. Lo esencial: inicio de sesión rápido, información directamente relevante y cero fricción. UI minimalista, jerarquía clara.</p>
            <h2>Objetivos</h2>
            <ul>
                <li>Auth segura con <strong>JWT</strong> (inicio de sesión, refresco, rutas protegidas).</li>
                <li>UI responsive con buena tipografía y contraste.</li>
                <li>Acciones principales prominentes, ruido reducido.</li>
                <li>Estructura de componentes limpia y lógica testable.</li>
            </ul>
            <h2>Stack & Arquitectura</h2>
            <ul>
                <li><strong>React + Vite</strong> para velocidad y DX.</li>
                <li><strong>React Router</strong> con guardas (rutas privadas).</li>
                <li><strong>Context/Reducer</strong> para auth y roles.</li>
                <li><strong>Fetch interceptors</strong> para tokens de acceso/refresco y errores de API.</li>
                <li><strong>CSS tokens</strong> para espaciado/tipografía consistentes.</li>
            </ul>
            <h2>Desafíos y Soluciones</h2>
            <h3>1) Flujo JWT estable</h3>
            <p>La cola de refresco evita refrescos dobles; las peticiones paralelas esperan y luego continúan.</p>
            <h3>2) UI accesible</h3>
            <p>Estados de foco, aria-labels, navegación por teclado; tablas y tarjetas se adaptan elegantemente al móvil.</p>
            <h3>3) Arquitectura de información</h3>
            <p>Above-the-fold revisado: un CTA principal, tres tareas secundarias; posiciones predecibles.</p>
            <h2>Resultados</h2>
            <ul>
                <li>Tiempo de carga rápido (Vite + assets AVIF/WebP).</li>
                <li>UX consistente; menos deambulación, más flujo.</li>
                <li>Componentes escalables y estructura de carpetas clara.</li>
            </ul>
            <h2>Enlace & Fuente</h2>
            <p>Live: <a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    it: () => (
        <>
            <h2>Contesto</h2>
            <p>Villa Vredestein aveva bisogno di un dashboard per studenti chiaro e affidabile. Il nucleo: accesso rapido, informazioni immediatamente rilevanti e zero attrito. UI minimalista, gerarchia chiara.</p>
            <h2>Obiettivi</h2>
            <ul>
                <li>Auth sicura con <strong>JWT</strong> (login, refresh, route protette).</li>
                <li>UI responsive con buona tipografia e contrasto.</li>
                <li>Azioni principali in evidenza, rumore ridotto.</li>
                <li>Struttura di componenti pulita e logica testabile.</li>
            </ul>
            <h2>Stack & Architettura</h2>
            <ul>
                <li><strong>React + Vite</strong> per velocità e DX.</li>
                <li><strong>React Router</strong> con guardie (route private).</li>
                <li><strong>Context/Reducer</strong> per auth e ruoli.</li>
                <li><strong>Fetch interceptors</strong> per access/refresh token ed errori API.</li>
                <li><strong>CSS token</strong> per spaziatura/tipografia coerenti.</li>
            </ul>
            <h2>Sfide e Soluzioni</h2>
            <h3>1) Flusso JWT stabile</h3>
            <p>La coda di refresh evita i double refresh; le richieste parallele attendono e poi proseguono.</p>
            <h3>2) UI accessibile</h3>
            <p>Focus-state, aria-label, navigazione da tastiera; tabelle e schede si adattano elegantemente al mobile.</p>
            <h3>3) Architettura delle informazioni</h3>
            <p>Above-the-fold rivisto: un CTA principale, tre attività secondarie; posizioni prevedibili.</p>
            <h2>Risultati</h2>
            <ul>
                <li>Tempo di caricamento rapido (Vite + asset AVIF/WebP).</li>
                <li>UX coerente; meno vagabondaggio, piu' flusso.</li>
                <li>Componenti scalabili e struttura di cartelle chiara.</li>
            </ul>
            <h2>Link & Sorgente</h2>
            <p>Live: <a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
};

const ui = {
    nl: { title: "Villa Vredestein – Studenten Dashboard (Frontend)", summary: "Modulair React-frontend voor een studenten dashboard met veilige login (JWT), rol-gebaseerde weergaven en een toegankelijke UI die rust en focus bewaart.", liveBtn: "Bekijk live demo ↗", backBtn: "← Terug naar Portfolio" },
    en: { title: "Villa Vredestein – Student Dashboard (Frontend)", summary: "Modular React frontend for a student dashboard with secure login (JWT), role-based views and an accessible UI that maintains calm and focus.", liveBtn: "View live demo ↗", backBtn: "← Back to Portfolio" },
    fr: { title: "Villa Vredestein – Tableau de bord etudiant (Frontend)", summary: "Frontend React modulaire pour un tableau de bord etudiant avec connexion securisee (JWT), vues basees sur les roles et une interface accessible qui preserve le calme et la concentration.", liveBtn: "Voir la demo live ↗", backBtn: "← Retour au Portfolio" },
    de: { title: "Villa Vredestein – Studenten-Dashboard (Frontend)", summary: "Modulares React-Frontend fuer ein Studenten-Dashboard mit sicherer Anmeldung (JWT), rollenbasierten Ansichten und einem zugaenglichen UI, das Ruhe und Fokus bewahrt.", liveBtn: "Live-Demo ansehen ↗", backBtn: "← Zuruck zum Portfolio" },
    es: { title: "Villa Vredestein – Panel de Estudiantes (Frontend)", summary: "Frontend React modular para un panel de estudiantes con inicio de sesion seguro (JWT), vistas basadas en roles y una UI accesible que mantiene la calma y el enfoque.", liveBtn: "Ver demo en vivo ↗", backBtn: "← Volver al Portfolio" },
    it: { title: "Villa Vredestein – Dashboard Studenti (Frontend)", summary: "Frontend React modulare per un dashboard per studenti con login sicuro (JWT), viste basate sui ruoli e una UI accessibile che mantiene calma e concentrazione.", liveBtn: "Vedi demo live ↗", backBtn: "← Torna al Portfolio" },
};

export default function FrontendVredestein() {
    const { i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const t = ui[lang] || ui.en;
    const Body = bodies[lang] || bodies.en;

    return (
        <article className="section article">
            <header className="article-header">
                <h1 className="article-title">{t.title}</h1>

                <div className="article-meta">
                    <time dateTime="2025-09-01">2025</time>
                    <span className="tags">
                        <span className="tag">React</span>
                        <span className="tag">Vite</span>
                        <span className="tag">JWT</span>
                        <span className="tag">UX/UI</span>
                        <span className="tag">API</span>
                    </span>
                </div>

                <div className="article-cover">
                    <div className="media">
                        <GuardedPicture base={COVER_BASE} fallback={FallbackFront} alt="Villa Vredestein – Student Dashboard Frontend" />
                    </div>
                </div>

                <p className="article-summary">{t.summary}</p>

                <p className="article-cta">
                    <a className="btn btn-outline" href={LIVE_URL} target="_blank" rel="noreferrer">{t.liveBtn}</a>
                </p>
            </header>

            <main className="article-body">
                <Body />
            </main>

            <footer className="article-footer">
                <Link className="btn btn-outline" to="/#portfolio">{t.backBtn}</Link>
            </footer>

            <style>{`
        .article { max-width: 920px; margin: 0 auto; padding: 0 16px; }
        .article-header { margin-bottom: 16px; }
        .article-title { margin: 0 0 8px; }
        .article-meta { display: flex; gap: 12px; align-items: center; color: var(--muted); margin-bottom: 16px; flex-wrap: wrap; }
        .article-cover { margin: 16px 0 12px; border-radius: 14px; overflow: hidden; }
        .article-cover .media { width: 100%; aspect-ratio: 16 / 9; max-height: 420px; }
        .article-cover picture, .article-cover img { display: block; width: 100%; height: 100%; object-fit: cover; border-radius: 14px; }
        .article-summary { color: var(--muted); margin: 8px 0 16px; }
        .article-cta { margin: 8px 0 16px; }
        .article-body h2 { margin-top: 24px; }
        .article-body h3 { margin-top: 18px; }
        .article-body p { line-height: 1.75; margin: 12px 0; }
        .article-body ul { margin: 10px 0 16px 18px; }
        .article-body li { margin: 6px 0; }
        .article-body a { color: var(--accent); text-decoration: underline; }
        .tags { display: inline-flex; gap: 8px; flex-wrap: wrap; }
        .tag { font-size: .85rem; padding: 4px 8px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); background: var(--bg); white-space: nowrap; }
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 8px; font-size: .95rem; font-weight: 500; cursor: pointer; text-decoration: none; transition: background .18s ease, color .18s ease, border-color .18s ease; }
        .btn-outline { background: transparent; color: var(--text); border: 1px solid var(--border); }
        @media (max-width: 920px) {
          .article { padding: 0 12px; }
          .article-cover .media { max-height: 320px; }
        }
      `}</style>
        </article>
    );
}