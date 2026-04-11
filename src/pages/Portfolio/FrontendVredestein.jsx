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
            <h2>Wat is dit project?</h2>
            <p>Villa Vredestein had een plek nodig waar studenten hun informatie direct konden vinden. Snel inloggen, meteen zien wat je nodig hebt, geen gedoe. Ik ontwierp en bouwde de volledige frontend: van loginscherm tot afgeschermde omgeving per gebruikersrol.</p>

            <h2>Wat heb ik gemaakt?</h2>
            <ul>
                <li><strong>Veilig inlogsysteem met JWT</strong> — een soort digitale sleutel die automatisch vernieuwd wordt zonder dat je iets merkt.</li>
                <li><strong>Slimme paginabeveiliging</strong> — je ziet alleen de pagina's die voor jou bedoeld zijn.</li>
                <li><strong>Overzichtelijke interface</strong> — één duidelijke actie bovenaan, de rest op de juiste plek. Geen scrollmarathon.</li>
                <li><strong>Toegankelijk en responsief</strong> — werkt op desktop, tablet en telefoon, ook met toetsenbord of screenreader.</li>
                <li><strong>Snelle laadtijd</strong> — geoptimaliseerde afbeeldingen en moderne buildtools zodat het direct staat.</li>
            </ul>

            <h2>Stack & aanpak</h2>
            <ul>
                <li><strong>React + Vite</strong> — moderne tooling voor snelle builds en prettige development-ervaring.</li>
                <li><strong>React Router</strong> met private routes — niemand komt ergens zonder de juiste rechten.</li>
                <li><strong>Context/Reducer</strong> — één centrale plek voor alle auth-logica, geen chaos door de codebase.</li>
                <li><strong>Refresh queue</strong> — als een sessie verloopt, wachten alle openstaande verzoeken netjes en hervatten zodra het token is vernieuwd. De gebruiker merkt er niets van.</li>
                <li><strong>CSS tokens</strong> — consistente opmaak door de hele app, makkelijk te schalen.</li>
            </ul>

            <h2>Uitdagingen waar ik trots op ben</h2>
            <h3>Token vernieuwing zonder frustratie</h3>
            <p>Wanneer iemands sessie verliep terwijl ze bezig waren, moest de app stil op de achtergrond een nieuw token ophalen. Het lastige: meerdere verzoeken kunnen tegelijk verlopen. Met een refresh queue worden ze keurig in de rij gezet en allemaal hervat zodra het nieuwe token klaar is — geen dubbele calls, geen foutmeldingen.</p>

            <h3>Toegankelijkheid die écht werkt</h3>
            <p>Niet alleen mooi op groot scherm. Focus-states, aria-labels en volledige toetsenbordnavigatie. Tabellen en kaarten schalen soepel naar mobiel zonder dat de hiërarchie verloren gaat.</p>

            <h3>Informatie-architectuur</h3>
            <p>Wat zie je als eerste? Die vraag heb ik bewust beantwoord. De pagina is zo opgebouwd dat de meest relevante actie direct zichtbaar is, en de rest pas als je er klaar voor bent.</p>

            <h2>Resultaat</h2>
            <ul>
                <li>Een dashboard dat studenten direct begrijpen, zonder handleiding.</li>
                <li>Uitbreidbare componentstructuur, klaar voor nieuwe features.</li>
                <li>Schone code die een andere developer direct kan oppakken.</li>
            </ul>

            <h2>Live bekijken</h2>
            <p><a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    en: () => (
        <>
            <h2>What is this project?</h2>
            <p>Villa Vredestein needed a place where students could find their information right away. Quick login, see what you need immediately, no hassle. I designed and built the entire frontend: from the login screen to the role-protected environment.</p>

            <h2>What did I build?</h2>
            <ul>
                <li><strong>Secure login with JWT</strong> — a kind of digital key that automatically renews itself without you noticing.</li>
                <li><strong>Smart page protection</strong> — you only see the pages meant for you.</li>
                <li><strong>Clear interface</strong> — one obvious action at the top, the rest in the right place. No scroll marathons.</li>
                <li><strong>Accessible and responsive</strong> — works on desktop, tablet and phone, including with keyboard or screen reader.</li>
                <li><strong>Fast load time</strong> — optimised images and modern build tools so everything loads instantly.</li>
            </ul>

            <h2>Stack & approach</h2>
            <ul>
                <li><strong>React + Vite</strong> — modern tooling for fast builds and a smooth development experience.</li>
                <li><strong>React Router</strong> with private routes — nobody gets anywhere without the right permissions.</li>
                <li><strong>Context/Reducer</strong> — one central place for all auth logic, no chaos scattered through the codebase.</li>
                <li><strong>Refresh queue</strong> — when a session expires, all pending requests wait politely and resume once the new token is ready. The user never notices.</li>
                <li><strong>CSS tokens</strong> — consistent styling throughout the app, easy to scale.</li>
            </ul>

            <h2>Challenges I'm proud of</h2>
            <h3>Token renewal without friction</h3>
            <p>When a session expired mid-use, the app had to silently fetch a new token in the background. The tricky part: multiple requests can expire simultaneously. With a refresh queue they're queued up and all resumed once the new token is ready — no duplicate calls, no error messages.</p>

            <h3>Accessibility that actually works</h3>
            <p>Not just pretty on a large screen. Focus states, aria-labels and full keyboard navigation. Tables and cards scale smoothly to mobile without losing hierarchy.</p>

            <h3>Information architecture</h3>
            <p>What do you see first? I answered that question deliberately. The page is structured so the most relevant action is immediately visible, and the rest appears when you're ready for it.</p>

            <h2>Results</h2>
            <ul>
                <li>A dashboard students understand immediately, without a manual.</li>
                <li>Scalable component structure, ready for new features.</li>
                <li>Clean code that another developer can pick up straight away.</li>
            </ul>

            <h2>View live</h2>
            <p><a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    fr: () => (
        <>
            <h2>Qu'est-ce que ce projet ?</h2>
            <p>Villa Vredestein avait besoin d'un endroit où les étudiants pouvaient trouver leurs informations directement. Connexion rapide, voir ce dont vous avez besoin immédiatement, sans tracas. J'ai conçu et construit l'intégralité du frontend : de l'écran de connexion à l'environnement protégé par rôle.</p>

            <h2>Qu'ai-je construit ?</h2>
            <ul>
                <li><strong>Connexion sécurisée avec JWT</strong> — une sorte de clé numérique qui se renouvelle automatiquement sans que vous le remarquiez.</li>
                <li><strong>Protection intelligente des pages</strong> — vous ne voyez que les pages qui vous sont destinées.</li>
                <li><strong>Interface claire</strong> — une action évidente en haut, le reste à la bonne place. Pas de marathon de défilement.</li>
                <li><strong>Accessible et responsive</strong> — fonctionne sur desktop, tablette et téléphone, y compris avec le clavier ou un lecteur d'écran.</li>
                <li><strong>Temps de chargement rapide</strong> — images optimisées et outils de build modernes pour que tout se charge instantanément.</li>
            </ul>

            <h2>Stack & approche</h2>
            <ul>
                <li><strong>React + Vite</strong> — outillage moderne pour des builds rapides et une expérience de développement fluide.</li>
                <li><strong>React Router</strong> avec routes privées — personne n'accède nulle part sans les bonnes autorisations.</li>
                <li><strong>Context/Reducer</strong> — un seul endroit central pour toute la logique d'auth, pas de chaos dans la codebase.</li>
                <li><strong>File de rafraîchissement</strong> — quand une session expire, toutes les requêtes en attente patientent et reprennent dès que le nouveau token est prêt. L'utilisateur ne remarque rien.</li>
                <li><strong>Tokens CSS</strong> — style cohérent dans toute l'application, facile à faire évoluer.</li>
            </ul>

            <h2>Défis dont je suis fière</h2>
            <h3>Renouvellement de token sans friction</h3>
            <p>Quand une session expirait en cours d'utilisation, l'application devait silencieusement récupérer un nouveau token en arrière-plan. La difficulté : plusieurs requêtes peuvent expirer simultanément. Avec une file de rafraîchissement, elles sont mises en file d'attente et toutes reprises une fois le nouveau token prêt — pas d'appels en double, pas de messages d'erreur.</p>

            <h3>Accessibilité qui fonctionne vraiment</h3>
            <p>Pas seulement joli sur grand écran. États de focus, aria-labels et navigation complète au clavier. Les tableaux et cartes s'adaptent au mobile sans perdre la hiérarchie.</p>

            <h3>Architecture de l'information</h3>
            <p>Qu'est-ce qu'on voit en premier ? J'ai répondu à cette question délibérément. La page est structurée pour que l'action la plus pertinente soit immédiatement visible, le reste apparaissant quand vous êtes prêt.</p>

            <h2>Résultats</h2>
            <ul>
                <li>Un tableau de bord que les étudiants comprennent immédiatement, sans manuel.</li>
                <li>Structure de composants évolutive, prête pour de nouvelles fonctionnalités.</li>
                <li>Code propre qu'un autre développeur peut reprendre directement.</li>
            </ul>

            <h2>Voir en live</h2>
            <p><a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    de: () => (
        <>
            <h2>Was ist dieses Projekt?</h2>
            <p>Villa Vredestein brauchte einen Ort, wo Studenten ihre Informationen sofort finden konnten. Schnelles Einloggen, direkt sehen was man braucht, kein Aufwand. Ich habe das gesamte Frontend entworfen und gebaut: vom Login-Bildschirm bis zur rollengeschützten Umgebung.</p>

            <h2>Was habe ich gebaut?</h2>
            <ul>
                <li><strong>Sicheres Login mit JWT</strong> — eine Art digitaler Schlüssel, der sich automatisch erneuert, ohne dass man es bemerkt.</li>
                <li><strong>Intelligenter Seitenschutz</strong> — du siehst nur die Seiten, die für dich bestimmt sind.</li>
                <li><strong>Übersichtliche Benutzeroberfläche</strong> — eine klare Aktion oben, der Rest am richtigen Platz. Kein Scroll-Marathon.</li>
                <li><strong>Zugänglich und responsiv</strong> — funktioniert auf Desktop, Tablet und Telefon, auch mit Tastatur oder Screenreader.</li>
                <li><strong>Schnelle Ladezeit</strong> — optimierte Bilder und moderne Build-Tools für sofortiges Laden.</li>
            </ul>

            <h2>Stack & Ansatz</h2>
            <ul>
                <li><strong>React + Vite</strong> — modernes Tooling für schnelle Builds und eine angenehme Entwicklungserfahrung.</li>
                <li><strong>React Router</strong> mit privaten Routen — niemand kommt irgendwo hin ohne die richtigen Berechtigungen.</li>
                <li><strong>Context/Reducer</strong> — ein zentraler Ort für die gesamte Auth-Logik, kein Chaos durch die Codebase.</li>
                <li><strong>Refresh Queue</strong> — wenn eine Session abläuft, warten alle ausstehenden Anfragen ordentlich und werden fortgesetzt, sobald das neue Token bereit ist. Der Nutzer merkt nichts davon.</li>
                <li><strong>CSS-Tokens</strong> — einheitliches Styling durch die gesamte App, einfach zu skalieren.</li>
            </ul>

            <h2>Herausforderungen, auf die ich stolz bin</h2>
            <h3>Token-Erneuerung ohne Frustration</h3>
            <p>Wenn eine Session während der Nutzung ablief, musste die App still im Hintergrund ein neues Token holen. Das Knifflige: Mehrere Anfragen können gleichzeitig ablaufen. Mit einer Refresh Queue werden sie ordentlich in die Warteschlange gestellt und alle fortgesetzt, sobald das neue Token bereit ist — keine doppelten Aufrufe, keine Fehlermeldungen.</p>

            <h3>Barrierefreiheit, die wirklich funktioniert</h3>
            <p>Nicht nur schön auf großem Bildschirm. Focus-States, Aria-Labels und vollständige Tastaturnavigation. Tabellen und Karten skalieren fließend auf Mobilgeräte ohne die Hierarchie zu verlieren.</p>

            <h3>Informationsarchitektur</h3>
            <p>Was sieht man zuerst? Diese Frage habe ich bewusst beantwortet. Die Seite ist so aufgebaut, dass die relevanteste Aktion sofort sichtbar ist und der Rest erscheint, wenn man bereit dafür ist.</p>

            <h2>Ergebnis</h2>
            <ul>
                <li>Ein Dashboard, das Studenten sofort verstehen, ohne Anleitung.</li>
                <li>Skalierbare Komponentenstruktur, bereit für neue Features.</li>
                <li>Sauberer Code, den ein anderer Entwickler direkt übernehmen kann.</li>
            </ul>

            <h2>Live ansehen</h2>
            <p><a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    es: () => (
        <>
            <h2>¿Qué es este proyecto?</h2>
            <p>Villa Vredestein necesitaba un lugar donde los estudiantes pudieran encontrar su información directamente. Inicio de sesión rápido, ver lo que necesitas de inmediato, sin complicaciones. Diseñé y construí el frontend completo: desde la pantalla de inicio de sesión hasta el entorno protegido por rol.</p>

            <h2>¿Qué construí?</h2>
            <ul>
                <li><strong>Inicio de sesión seguro con JWT</strong> — una especie de llave digital que se renueva automáticamente sin que te des cuenta.</li>
                <li><strong>Protección inteligente de páginas</strong> — solo ves las páginas destinadas a ti.</li>
                <li><strong>Interfaz clara</strong> — una acción obvia arriba, el resto en el lugar correcto. Sin maratones de desplazamiento.</li>
                <li><strong>Accesible y responsivo</strong> — funciona en escritorio, tablet y teléfono, incluso con teclado o lector de pantalla.</li>
                <li><strong>Tiempo de carga rápido</strong> — imágenes optimizadas y herramientas de build modernas para que todo cargue al instante.</li>
            </ul>

            <h2>Stack & enfoque</h2>
            <ul>
                <li><strong>React + Vite</strong> — herramientas modernas para builds rápidas y una experiencia de desarrollo fluida.</li>
                <li><strong>React Router</strong> con rutas privadas — nadie accede a nada sin los permisos correctos.</li>
                <li><strong>Context/Reducer</strong> — un lugar central para toda la lógica de auth, sin caos por el código.</li>
                <li><strong>Cola de refresco</strong> — cuando una sesión expira, todas las solicitudes pendientes esperan y se reanudan una vez que el nuevo token está listo. El usuario nunca lo nota.</li>
                <li><strong>Tokens CSS</strong> — estilos consistentes en toda la app, fácil de escalar.</li>
            </ul>

            <h2>Retos de los que estoy orgullosa</h2>
            <h3>Renovación de token sin fricción</h3>
            <p>Cuando una sesión expiraba mientras se usaba, la app tenía que obtener silenciosamente un nuevo token en segundo plano. Lo complicado: varias solicitudes pueden expirar simultáneamente. Con una cola de refresco se ponen en cola y todas se reanudan cuando el nuevo token está listo — sin llamadas duplicadas, sin mensajes de error.</p>

            <h3>Accesibilidad que realmente funciona</h3>
            <p>No solo bonito en pantalla grande. Estados de foco, aria-labels y navegación completa por teclado. Tablas y tarjetas se adaptan al móvil sin perder la jerarquía.</p>

            <h3>Arquitectura de información</h3>
            <p>¿Qué ves primero? Respondí esa pregunta deliberadamente. La página está estructurada para que la acción más relevante sea inmediatamente visible, y el resto aparece cuando estás listo.</p>

            <h2>Resultados</h2>
            <ul>
                <li>Un panel que los estudiantes entienden de inmediato, sin manual.</li>
                <li>Estructura de componentes escalable, lista para nuevas funciones.</li>
                <li>Código limpio que otro desarrollador puede retomar directamente.</li>
            </ul>

            <h2>Ver en vivo</h2>
            <p><a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    it: () => (
        <>
            <h2>Cos'è questo progetto?</h2>
            <p>Villa Vredestein aveva bisogno di un posto dove gli studenti potessero trovare le loro informazioni subito. Login rapido, vedere ciò di cui hai bisogno immediatamente, senza complicazioni. Ho progettato e costruito l'intero frontend: dalla schermata di login all'ambiente protetto per ruolo.</p>

            <h2>Cosa ho costruito?</h2>
            <ul>
                <li><strong>Login sicuro con JWT</strong> — una sorta di chiave digitale che si rinnova automaticamente senza che te ne accorga.</li>
                <li><strong>Protezione intelligente delle pagine</strong> — vedi solo le pagine destinate a te.</li>
                <li><strong>Interfaccia chiara</strong> — un'azione ovvia in cima, il resto al posto giusto. Niente maratone di scorrimento.</li>
                <li><strong>Accessibile e responsive</strong> — funziona su desktop, tablet e telefono, anche con tastiera o screen reader.</li>
                <li><strong>Tempo di caricamento rapido</strong> — immagini ottimizzate e strumenti di build moderni per un caricamento istantaneo.</li>
            </ul>

            <h2>Stack & approccio</h2>
            <ul>
                <li><strong>React + Vite</strong> — strumenti moderni per build veloci e un'esperienza di sviluppo fluida.</li>
                <li><strong>React Router</strong> con route private — nessuno accede a nulla senza i permessi giusti.</li>
                <li><strong>Context/Reducer</strong> — un posto centrale per tutta la logica di auth, niente caos nel codice.</li>
                <li><strong>Coda di refresh</strong> — quando una sessione scade, tutte le richieste in sospeso aspettano e riprendono quando il nuovo token è pronto. L'utente non se ne accorge mai.</li>
                <li><strong>Token CSS</strong> — stile coerente in tutta l'app, facile da scalare.</li>
            </ul>

            <h2>Sfide di cui sono orgogliosa</h2>
            <h3>Rinnovo del token senza attrito</h3>
            <p>Quando una sessione scadeva durante l'uso, l'app doveva silenziosamente recuperare un nuovo token in background. La difficoltà: più richieste possono scadere contemporaneamente. Con una coda di refresh vengono messe in coda e riprese tutte quando il nuovo token è pronto — nessuna chiamata duplicata, nessun messaggio di errore.</p>

            <h3>Accessibilità che funziona davvero</h3>
            <p>Non solo bello su schermo grande. Focus state, aria-label e navigazione completa da tastiera. Tabelle e schede si adattano al mobile senza perdere la gerarchia.</p>

            <h3>Architettura delle informazioni</h3>
            <p>Cosa vedi per prima? Ho risposto a quella domanda deliberatamente. La pagina è strutturata in modo che l'azione più rilevante sia immediatamente visibile, il resto appare quando sei pronto.</p>

            <h2>Risultati</h2>
            <ul>
                <li>Una dashboard che gli studenti capiscono subito, senza manuale.</li>
                <li>Struttura di componenti scalabile, pronta per nuove funzionalità.</li>
                <li>Codice pulito che un altro sviluppatore può riprendere direttamente.</li>
            </ul>

            <h2>Vedi live</h2>
            <p><a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
};

const ui = {
    nl: { title: "Villa Vredestein – Studenten Dashboard (Frontend)", summary: "Ik bouwde het volledige React-frontend voor Villa Vredestein: veilig inloggen met JWT, slimme rolbeveiliging en een interface die studenten direct begrijpen zonder handleiding.", liveBtn: "Bekijk live demo ↗", backBtn: "← Terug naar Portfolio" },
    en: { title: "Villa Vredestein – Student Dashboard (Frontend)", summary: "I built the complete React frontend for Villa Vredestein: secure JWT login, smart role-based protection and an interface students understand immediately without a manual.", liveBtn: "View live demo ↗", backBtn: "← Back to Portfolio" },
    fr: { title: "Villa Vredestein – Tableau de bord étudiant (Frontend)", summary: "J'ai construit le frontend React complet pour Villa Vredestein : connexion JWT sécurisée, protection intelligente par rôle et une interface que les étudiants comprennent immédiatement sans manuel.", liveBtn: "Voir la démo live ↗", backBtn: "← Retour au Portfolio" },
    de: { title: "Villa Vredestein – Studenten-Dashboard (Frontend)", summary: "Ich habe das komplette React-Frontend für Villa Vredestein gebaut: sicheres JWT-Login, intelligenter Rollenschutz und eine Benutzeroberfläche, die Studenten sofort verstehen.", liveBtn: "Live-Demo ansehen ↗", backBtn: "← Zurück zum Portfolio" },
    es: { title: "Villa Vredestein – Panel de Estudiantes (Frontend)", summary: "Construí el frontend React completo para Villa Vredestein: inicio de sesión JWT seguro, protección inteligente por roles y una interfaz que los estudiantes entienden de inmediato.", liveBtn: "Ver demo en vivo ↗", backBtn: "← Volver al Portfolio" },
    it: { title: "Villa Vredestein – Dashboard Studenti (Frontend)", summary: "Ho costruito il frontend React completo per Villa Vredestein: login JWT sicuro, protezione intelligente per ruolo e un'interfaccia che gli studenti capiscono subito senza manuale.", liveBtn: "Vedi demo live ↗", backBtn: "← Torna al Portfolio" },
};

export default function FrontendVredestein() {
    const { t: tr, i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const t = ui[lang] || ui.en;
    const Body = bodies[lang] || bodies.en;

    return (
        <article className="section article">
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
                <span aria-current="page">{t.title}</span>
            </nav>

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