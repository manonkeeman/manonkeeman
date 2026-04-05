import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FallbackBack from "../../assets/Pics/Portfolio/VredesteinBackend.jpeg";

const COVER_BASE = "/portfolio/villa-vredestein-backend";
const LIVE_URL = "";

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
    nl: (noLink) => (
        <>
            <h2>Context</h2>
            <p>Het studenten dashboard heeft betrouwbare data nodig. Ik heb de backend neergezet als strakke, voorspelbare REST-laag met heldere boundaries en beveiliging bovenop.</p>
            <h2>Doelen</h2>
            <ul>
                <li>Beveiligde endpoints met <strong>JWT</strong> (access/refresh).</li>
                <li>Duidelijke domeinmodellen en validatie (request/response DTO's).</li>
                <li>Dataconsistentie met <strong>PostgreSQL</strong> en migraties (<strong>Flyway</strong>).</li>
                <li>Meetbare performance en observability (logging, metrics).</li>
            </ul>
            <h2>Architectuur & Stack</h2>
            <ul>
                <li><strong>Spring Boot</strong> (Web, Security), <strong>JPA/Hibernate</strong>, <strong>PostgreSQL</strong>.</li>
                <li><strong>JWT</strong> authenticatie + role-based autorisatie.</li>
                <li><strong>DTO + Mapper</strong> (scheiding domein / API), <strong>Bean Validation</strong>.</li>
                <li><strong>Flyway</strong> migraties; <strong>Testcontainers</strong> voor integratietests.</li>
                <li><strong>Global exception handler</strong> met consistente foutcodes.</li>
            </ul>
            <h2>Uitdagingen en Oplossingen</h2>
            <h3>1) Token-verversing zonder race conditions</h3>
            <p>Refresh-flow zo ingericht dat gelijktijdige verversingen worden gekalmd (één refresh, overige requests wachten gecontroleerd of krijgen nette 401/Retry).</p>
            <h3>2) Duidelijke contracten</h3>
            <p>Strikte DTO's, inputvalidatie en betekenisvolle foutcodes. Hierdoor voorspelbaar gedrag in de frontend en minder defensieve code.</p>
            <h3>3) Migraties & data-integriteit</h3>
            <p>Flyway bewaakt schemawijzigingen; constraints en indices zijn expliciet opgezet. Testcontainers checkt dit in CI met een echte PostgreSQL-instance.</p>
            <h2>Resultaat</h2>
            <ul>
                <li>Beveiligde, voorspelbare API's met nette performance.</li>
                <li>Snellere frontend-ontwikkeling dankzij strakke contracten.</li>
                <li>Stabiele database-laag met herhaalbare migraties.</li>
            </ul>
            <h2>Link & Bron</h2>
            <p>{noLink ? "De live-link of API-documentatie is op aanvraag beschikbaar." : <>Live/API: <a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></>}</p>
        </>
    ),
    en: (noLink) => (
        <>
            <h2>Context</h2>
            <p>The student dashboard needs reliable data. I built the backend as a clean, predictable REST layer with clear boundaries and security on top.</p>
            <h2>Goals</h2>
            <ul>
                <li>Secured endpoints with <strong>JWT</strong> (access/refresh).</li>
                <li>Clear domain models and validation (request/response DTOs).</li>
                <li>Data consistency with <strong>PostgreSQL</strong> and migrations (<strong>Flyway</strong>).</li>
                <li>Measurable performance and observability (logging, metrics).</li>
            </ul>
            <h2>Architecture & Stack</h2>
            <ul>
                <li><strong>Spring Boot</strong> (Web, Security), <strong>JPA/Hibernate</strong>, <strong>PostgreSQL</strong>.</li>
                <li><strong>JWT</strong> authentication + role-based authorisation.</li>
                <li><strong>DTO + Mapper</strong> (domain / API separation), <strong>Bean Validation</strong>.</li>
                <li><strong>Flyway</strong> migrations; <strong>Testcontainers</strong> for integration tests.</li>
                <li><strong>Global exception handler</strong> with consistent error codes.</li>
            </ul>
            <h2>Challenges and Solutions</h2>
            <h3>1) Token refresh without race conditions</h3>
            <p>Refresh flow designed so concurrent refreshes are handled gracefully (one refresh, other requests wait in a controlled manner or receive a clean 401/Retry).</p>
            <h3>2) Clear contracts</h3>
            <p>Strict DTOs, input validation and meaningful error codes. This results in predictable behaviour on the frontend and less defensive code.</p>
            <h3>3) Migrations & data integrity</h3>
            <p>Flyway monitors schema changes; constraints and indices are set up explicitly. Testcontainers verifies this in CI with a real PostgreSQL instance.</p>
            <h2>Results</h2>
            <ul>
                <li>Secure, predictable APIs with clean performance.</li>
                <li>Faster frontend development thanks to tight contracts.</li>
                <li>Stable database layer with repeatable migrations.</li>
            </ul>
            <h2>Link & Source</h2>
            <p>{noLink ? "The live link or API documentation is available on request." : <>Live/API: <a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></>}</p>
        </>
    ),
    fr: (noLink) => (
        <>
            <h2>Contexte</h2>
            <p>Le tableau de bord etudiant a besoin de donnees fiables. J'ai construit le backend comme une couche REST propre et previsible avec des frontieres claires et de la securite par-dessus.</p>
            <h2>Objectifs</h2>
            <ul>
                <li>Endpoints securises avec <strong>JWT</strong> (acces/rafraichissement).</li>
                <li>Modeles de domaine clairs et validation (DTOs requete/reponse).</li>
                <li>Coherence des donnees avec <strong>PostgreSQL</strong> et migrations (<strong>Flyway</strong>).</li>
                <li>Performance mesurable et observabilite (logs, metriques).</li>
            </ul>
            <h2>Architecture & Stack</h2>
            <ul>
                <li><strong>Spring Boot</strong> (Web, Security), <strong>JPA/Hibernate</strong>, <strong>PostgreSQL</strong>.</li>
                <li>Authentification <strong>JWT</strong> + autorisation basee sur les roles.</li>
                <li><strong>DTO + Mapper</strong> (separation domaine / API), <strong>Bean Validation</strong>.</li>
                <li>Migrations <strong>Flyway</strong>; <strong>Testcontainers</strong> pour les tests d'integration.</li>
                <li><strong>Gestionnaire d'exceptions global</strong> avec codes d'erreur coherents.</li>
            </ul>
            <h2>Defis et Solutions</h2>
            <h3>1) Rafraichissement des tokens sans race conditions</h3>
            <p>Le flux de rafraichissement est concu pour gerer les rafraichissements simultanees (un seul rafraichissement, les autres requetes attendent de facon controlee ou recoivent un 401/Retry propre).</p>
            <h3>2) Contrats clairs</h3>
            <p>DTOs stricts, validation d'entree et codes d'erreur significatifs. Cela se traduit par un comportement previsible sur le frontend et moins de code defensif.</p>
            <h3>3) Migrations & integrite des donnees</h3>
            <p>Flyway surveille les changements de schema; les contraintes et les indices sont explicitement definis. Testcontainers verifie cela en CI avec une vraie instance PostgreSQL.</p>
            <h2>Resultats</h2>
            <ul>
                <li>APIs securisees et previsibles avec une bonne performance.</li>
                <li>Developpement frontend plus rapide grace a des contrats rigoureux.</li>
                <li>Couche base de donnees stable avec des migrations reproductibles.</li>
            </ul>
            <h2>Lien & Source</h2>
            <p>{noLink ? "Le lien live ou la documentation API est disponible sur demande." : <>Live/API: <a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></>}</p>
        </>
    ),
    de: (noLink) => (
        <>
            <h2>Kontext</h2>
            <p>Das Studenten-Dashboard braucht zuverlässige Daten. Ich habe das Backend als saubere, vorhersehbare REST-Schicht mit klaren Grenzen und Sicherheit obendrauf aufgebaut.</p>
            <h2>Ziele</h2>
            <ul>
                <li>Gesicherte Endpoints mit <strong>JWT</strong> (Access/Refresh).</li>
                <li>Klare Domain-Modelle und Validierung (Request/Response DTOs).</li>
                <li>Datenkonsistenz mit <strong>PostgreSQL</strong> und Migrationen (<strong>Flyway</strong>).</li>
                <li>Messbare Performance und Observability (Logging, Metriken).</li>
            </ul>
            <h2>Architektur & Stack</h2>
            <ul>
                <li><strong>Spring Boot</strong> (Web, Security), <strong>JPA/Hibernate</strong>, <strong>PostgreSQL</strong>.</li>
                <li><strong>JWT</strong>-Authentifizierung + rollenbasierte Autorisierung.</li>
                <li><strong>DTO + Mapper</strong> (Domain-/API-Trennung), <strong>Bean Validation</strong>.</li>
                <li><strong>Flyway</strong>-Migrationen; <strong>Testcontainers</strong> fur Integrationstests.</li>
                <li><strong>Globaler Exception Handler</strong> mit konsistenten Fehlercodes.</li>
            </ul>
            <h2>Herausforderungen und Losungen</h2>
            <h3>1) Token-Refresh ohne Race Conditions</h3>
            <p>Refresh-Flow so gestaltet, dass gleichzeitige Refreshes kontrolliert werden (ein Refresh, andere Requests warten geordnet oder erhalten ein sauberes 401/Retry).</p>
            <h3>2) Klare Vertrage</h3>
            <p>Strenge DTOs, Eingabevalidierung und aussagekraftige Fehlercodes. Das ergibt vorhersehbares Verhalten im Frontend und weniger defensiven Code.</p>
            <h3>3) Migrationen & Datenintegritat</h3>
            <p>Flyway uberwacht Schemaänderungen; Constraints und Indices sind explizit gesetzt. Testcontainers pruft das in CI mit einer echten PostgreSQL-Instanz.</p>
            <h2>Ergebnis</h2>
            <ul>
                <li>Sichere, vorhersehbare APIs mit sauberer Performance.</li>
                <li>Schnellere Frontend-Entwicklung dank strenger Vertrage.</li>
                <li>Stabile Datenbankschicht mit wiederholbaren Migrationen.</li>
            </ul>
            <h2>Link & Quelle</h2>
            <p>{noLink ? "Der Live-Link oder die API-Dokumentation ist auf Anfrage verfugbar." : <>Live/API: <a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></>}</p>
        </>
    ),
    es: (noLink) => (
        <>
            <h2>Contexto</h2>
            <p>El panel de estudiantes necesita datos fiables. Construí el backend como una capa REST limpia y predecible con límites claros y seguridad encima.</p>
            <h2>Objetivos</h2>
            <ul>
                <li>Endpoints seguros con <strong>JWT</strong> (acceso/refresco).</li>
                <li>Modelos de dominio claros y validación (DTOs solicitud/respuesta).</li>
                <li>Consistencia de datos con <strong>PostgreSQL</strong> y migraciones (<strong>Flyway</strong>).</li>
                <li>Rendimiento medible y observabilidad (logs, métricas).</li>
            </ul>
            <h2>Arquitectura & Stack</h2>
            <ul>
                <li><strong>Spring Boot</strong> (Web, Security), <strong>JPA/Hibernate</strong>, <strong>PostgreSQL</strong>.</li>
                <li>Autenticación <strong>JWT</strong> + autorización basada en roles.</li>
                <li><strong>DTO + Mapper</strong> (separación dominio / API), <strong>Bean Validation</strong>.</li>
                <li>Migraciones <strong>Flyway</strong>; <strong>Testcontainers</strong> para tests de integración.</li>
                <li><strong>Manejador global de excepciones</strong> con códigos de error consistentes.</li>
            </ul>
            <h2>Desafíos y Soluciones</h2>
            <h3>1) Refresco de tokens sin race conditions</h3>
            <p>Flujo de refresco diseñado para manejar refrescos concurrentes (un refresco, otras peticiones esperan de forma controlada o reciben un 401/Retry limpio).</p>
            <h3>2) Contratos claros</h3>
            <p>DTOs estrictos, validación de entrada y códigos de error significativos. Esto resulta en comportamiento predecible en el frontend y menos código defensivo.</p>
            <h3>3) Migraciones e integridad de datos</h3>
            <p>Flyway monitorea los cambios de esquema; constraints e índices están explícitamente configurados. Testcontainers lo verifica en CI con una instancia real de PostgreSQL.</p>
            <h2>Resultados</h2>
            <ul>
                <li>APIs seguras y predecibles con buen rendimiento.</li>
                <li>Desarrollo frontend más rápido gracias a contratos estrictos.</li>
                <li>Capa de base de datos estable con migraciones repetibles.</li>
            </ul>
            <h2>Enlace & Fuente</h2>
            <p>{noLink ? "El enlace en vivo o la documentación de la API está disponible bajo petición." : <>Live/API: <a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></>}</p>
        </>
    ),
    it: (noLink) => (
        <>
            <h2>Contesto</h2>
            <p>Il dashboard per studenti ha bisogno di dati affidabili. Ho costruito il backend come uno strato REST pulito e prevedibile con confini chiari e sicurezza sopra.</p>
            <h2>Obiettivi</h2>
            <ul>
                <li>Endpoint protetti con <strong>JWT</strong> (access/refresh).</li>
                <li>Modelli di dominio chiari e validazione (DTO richiesta/risposta).</li>
                <li>Coerenza dei dati con <strong>PostgreSQL</strong> e migrazioni (<strong>Flyway</strong>).</li>
                <li>Performance misurabile e osservabilita' (logging, metriche).</li>
            </ul>
            <h2>Architettura & Stack</h2>
            <ul>
                <li><strong>Spring Boot</strong> (Web, Security), <strong>JPA/Hibernate</strong>, <strong>PostgreSQL</strong>.</li>
                <li>Autenticazione <strong>JWT</strong> + autorizzazione basata sui ruoli.</li>
                <li><strong>DTO + Mapper</strong> (separazione dominio / API), <strong>Bean Validation</strong>.</li>
                <li>Migrazioni <strong>Flyway</strong>; <strong>Testcontainers</strong> per test di integrazione.</li>
                <li><strong>Handler globale delle eccezioni</strong> con codici di errore coerenti.</li>
            </ul>
            <h2>Sfide e Soluzioni</h2>
            <h3>1) Refresh dei token senza race condition</h3>
            <p>Il flusso di refresh e' progettato per gestire i refresh simultanei (un solo refresh, le altre richieste attendono in modo controllato o ricevono un 401/Retry pulito).</p>
            <h3>2) Contratti chiari</h3>
            <p>DTO rigidi, validazione degli input e codici di errore significativi. Questo produce un comportamento prevedibile nel frontend e meno codice difensivo.</p>
            <h3>3) Migrazioni e integrita' dei dati</h3>
            <p>Flyway monitora le modifiche allo schema; i vincoli e gli indici sono esplicitamente impostati. Testcontainers verifica questo in CI con una vera istanza PostgreSQL.</p>
            <h2>Risultati</h2>
            <ul>
                <li>API sicure e prevedibili con buone prestazioni.</li>
                <li>Sviluppo frontend piu' rapido grazie a contratti rigidi.</li>
                <li>Strato database stabile con migrazioni ripetibili.</li>
            </ul>
            <h2>Link & Sorgente</h2>
            <p>{noLink ? "Il link live o la documentazione API e' disponibile su richiesta." : <>Live/API: <a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></>}</p>
        </>
    ),
};

const ui = {
    nl: { title: "Villa Vredestein – Studenten Dashboard (Backend)", summary: "Een robuuste Spring Boot-backend met beveiligde REST-endpoints (JWT), duidelijke domeinmodellen, migraties, en nette foutafhandeling, ontworpen voor rust, voorspelbaarheid en groei.", backBtn: "← Terug naar Portfolio" },
    en: { title: "Villa Vredestein – Student Dashboard (Backend)", summary: "A robust Spring Boot backend with secured REST endpoints (JWT), clear domain models, migrations and clean error handling, designed for stability, predictability and growth.", backBtn: "← Back to Portfolio" },
    fr: { title: "Villa Vredestein – Tableau de bord etudiant (Backend)", summary: "Un backend Spring Boot robuste avec des endpoints REST securises (JWT), des modeles de domaine clairs, des migrations et une gestion propre des erreurs, concu pour la stabilite, la previsibilite et la croissance.", backBtn: "← Retour au Portfolio" },
    de: { title: "Villa Vredestein – Studenten-Dashboard (Backend)", summary: "Ein robustes Spring Boot-Backend mit gesicherten REST-Endpoints (JWT), klaren Domain-Modellen, Migrationen und sauberer Fehlerbehandlung, entworfen fur Stabilitat, Vorhersehbarkeit und Wachstum.", backBtn: "← Zuruck zum Portfolio" },
    es: { title: "Villa Vredestein – Panel de Estudiantes (Backend)", summary: "Un backend Spring Boot robusto con endpoints REST seguros (JWT), modelos de dominio claros, migraciones y manejo limpio de errores, disenado para estabilidad, predictibilidad y crecimiento.", backBtn: "← Volver al Portfolio" },
    it: { title: "Villa Vredestein – Dashboard Studenti (Backend)", summary: "Un backend Spring Boot robusto con endpoint REST protetti (JWT), modelli di dominio chiari, migrazioni e gestione degli errori pulita, progettato per stabilita', prevedibilita' e crescita.", backBtn: "← Torna al Portfolio" },
};

export default function BackendStudentenDashboard() {
    const { i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const t = ui[lang] || ui.en;
    const bodyFn = bodies[lang] || bodies.en;
    const Body = bodyFn(!LIVE_URL);

    return (
        <article className="section article">
            <header className="article-header">
                <h1 className="article-title">{t.title}</h1>

                <div className="article-meta">
                    <time dateTime="2025-09-01">2025</time>
                    <span className="tags">
                        <span className="tag">Spring Boot</span>
                        <span className="tag">Java</span>
                        <span className="tag">JWT</span>
                        <span className="tag">REST API</span>
                        <span className="tag">PostgreSQL</span>
                    </span>
                </div>

                <div className="article-cover">
                    <div className="media">
                        <GuardedPicture base={COVER_BASE} fallback={FallbackBack} alt="Villa Vredestein – Backend student dashboard (Spring Boot / REST / JWT)" />
                    </div>
                </div>

                <p className="article-summary">{t.summary}</p>
            </header>

            <main className="article-body">
                {Body}
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
        .article-body h2 { margin-top: 24px; }
        .article-body h3 { margin-top: 18px; }
        .article-body p { line-height: 1.75; margin: 12px 0; }
        .article-body ul { margin: 10px 0 16px 18px; }
        .article-body li { margin: 6px 0; }
        .article-body a { color: var(--accent); text-decoration: underline; }
        .tags { display: inline-flex; gap: 8px; flex-wrap: wrap; }
        .tag { font-size: .85rem; padding: 4px 8px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); background: var(--bg); white-space: nowrap; }
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 8px; font-size: .95rem; font-weight: 500; cursor: pointer; text-decoration: none; transition: background .18s, color .18s, border-color .18s; }
        .btn-outline { background: transparent; color: var(--text); border: 1px solid var(--border); }
        @media (max-width: 920px) {
          .article { padding: 0 12px; }
          .article-cover .media { max-height: 320px; }
        }
      `}</style>
        </article>
    );
}