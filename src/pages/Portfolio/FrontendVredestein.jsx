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
            <p>Villa Vredestein is een plek met een verhaal. Ze hadden een website nodig die dat verhaal goed vertelt: wie ze zijn, waar ze voor staan, wat ze doen en hoe je contact opneemt. Geen technisch product, maar een digitaal visitekaartje dat uitnodigt en vertrouwen wekt.</p>
            <p>Ik bouwde de volledige frontend: van ontwerp tot werkende site.</p>

            <h2>Wat heb ik gemaakt?</h2>
            <ul>
                <li><strong>Publieke website</strong> met informatie over de geschiedenis, het doel en de toekomst van Villa Vredestein.</li>
                <li><strong>Overzichtelijke navigatie</strong> — bezoekers vinden direct wat ze zoeken.</li>
                <li><strong>Contactmogelijkheden</strong> duidelijk en laagdrempelig gepresenteerd.</li>
                <li><strong>Responsief en snel</strong> — werkt op elk scherm, laadt direct.</li>
                <li><strong>Toegankelijk</strong> — ook bruikbaar met toetsenbord en screenreader.</li>
            </ul>

            <h2>Stack & aanpak</h2>
            <ul>
                <li><strong>React + Vite</strong> — moderne tooling voor een snelle, onderhoudbare codebase.</li>
                <li><strong>React Router</strong> — soepele navigatie zonder pagina-herlading.</li>
                <li><strong>CSS tokens</strong> — consistente huisstijl door de hele site.</li>
                <li><strong>Geoptimaliseerde afbeeldingen</strong> (AVIF/WebP) voor snelle laadtijden.</li>
            </ul>

            <h2>Waar ik op lette</h2>
            <h3>Sfeer en vertrouwen</h3>
            <p>Een website over een plek met geschiedenis vraagt om rust en karakter. De opmaak ondersteunt het verhaal in plaats van ervan af te leiden. Geen onnodige elementen, bewuste typografie, ademruimte.</p>

            <h3>Informatiehiërarchie</h3>
            <p>Wat wil een bezoeker als eerste weten? Die vraag stuurde elke pagina-opbouw. Van de introductie tot de contactpagina: alles staat op de plek waar je het verwacht.</p>

            <h3>Prestatieoptimalisatie</h3>
            <p>Afbeeldingen in moderne formaten, lazy loading en een lichte bundle zorgen voor een snelle ervaring op elk apparaat en elke verbinding.</p>

            <h2>Resultaat</h2>
            <ul>
                <li>Een website die het verhaal van Villa Vredestein helder en uitnodigend vertelt.</li>
                <li>Schone, uitbreidbare code klaar voor toekomstige aanpassingen.</li>
                <li>Snel, toegankelijk en prettig op elk scherm.</li>
            </ul>

            <h2>Live bekijken</h2>
            <p><a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    en: () => (
        <>
            <h2>What is this project?</h2>
            <p>Villa Vredestein is a place with a story. They needed a website that tells that story well: who they are, what they stand for, what they do and how to get in touch. Not a technical product, but a digital calling card that invites and builds trust.</p>
            <p>I built the entire frontend: from design to working site.</p>

            <h2>What did I build?</h2>
            <ul>
                <li><strong>Public website</strong> with information about the history, purpose and future of Villa Vredestein.</li>
                <li><strong>Clear navigation</strong> — visitors find what they're looking for right away.</li>
                <li><strong>Contact options</strong> presented clearly and accessibly.</li>
                <li><strong>Responsive and fast</strong> — works on every screen, loads instantly.</li>
                <li><strong>Accessible</strong> — works with keyboard and screen reader too.</li>
            </ul>

            <h2>Stack & approach</h2>
            <ul>
                <li><strong>React + Vite</strong> — modern tooling for a fast, maintainable codebase.</li>
                <li><strong>React Router</strong> — smooth navigation without page reloads.</li>
                <li><strong>CSS tokens</strong> — consistent brand styling throughout the site.</li>
                <li><strong>Optimised images</strong> (AVIF/WebP) for fast load times.</li>
            </ul>

            <h2>What I paid attention to</h2>
            <h3>Atmosphere and trust</h3>
            <p>A website about a place with history calls for calm and character. The layout supports the story rather than distracting from it. No unnecessary elements, deliberate typography, breathing room.</p>

            <h3>Information hierarchy</h3>
            <p>What does a visitor want to know first? That question guided every page layout. From the introduction to the contact page: everything is where you expect it.</p>

            <h3>Performance optimisation</h3>
            <p>Images in modern formats, lazy loading and a light bundle ensure a fast experience on every device and connection.</p>

            <h2>Results</h2>
            <ul>
                <li>A website that tells the story of Villa Vredestein clearly and invitingly.</li>
                <li>Clean, extendable code ready for future changes.</li>
                <li>Fast, accessible and comfortable on every screen.</li>
            </ul>

            <h2>View live</h2>
            <p><a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    fr: () => (
        <>
            <h2>Qu'est-ce que ce projet ?</h2>
            <p>Villa Vredestein est un endroit avec une histoire. Ils avaient besoin d'un site web qui raconte bien cette histoire : qui ils sont, ce pour quoi ils se battent, ce qu'ils font et comment les contacter. Pas un produit technique, mais une carte de visite numérique qui invite et inspire confiance.</p>
            <p>J'ai construit l'intégralité du frontend : du design au site fonctionnel.</p>

            <h2>Qu'ai-je construit ?</h2>
            <ul>
                <li><strong>Site web public</strong> avec des informations sur l'histoire, l'objectif et l'avenir de Villa Vredestein.</li>
                <li><strong>Navigation claire</strong> — les visiteurs trouvent directement ce qu'ils cherchent.</li>
                <li><strong>Options de contact</strong> présentées clairement et accessiblement.</li>
                <li><strong>Responsive et rapide</strong> — fonctionne sur tous les écrans, se charge instantanément.</li>
                <li><strong>Accessible</strong> — utilisable aussi avec le clavier et un lecteur d'écran.</li>
            </ul>

            <h2>Stack & approche</h2>
            <ul>
                <li><strong>React + Vite</strong> — outillage moderne pour une base de code rapide et maintenable.</li>
                <li><strong>React Router</strong> — navigation fluide sans rechargement de page.</li>
                <li><strong>Tokens CSS</strong> — charte graphique cohérente sur tout le site.</li>
                <li><strong>Images optimisées</strong> (AVIF/WebP) pour des temps de chargement rapides.</li>
            </ul>

            <h2>Ce à quoi j'ai fait attention</h2>
            <h3>Atmosphère et confiance</h3>
            <p>Un site web sur un lieu chargé d'histoire demande calme et caractère. La mise en page soutient l'histoire plutôt que de la distraire. Pas d'éléments superflus, typographie soignée, espace pour respirer.</p>

            <h3>Hiérarchie de l'information</h3>
            <p>Que veut savoir un visiteur en premier ? Cette question a guidé la construction de chaque page. De l'introduction à la page de contact : tout est là où on l'attend.</p>

            <h3>Optimisation des performances</h3>
            <p>Images en formats modernes, chargement différé et bundle léger garantissent une expérience rapide sur chaque appareil et connexion.</p>

            <h2>Résultats</h2>
            <ul>
                <li>Un site qui raconte l'histoire de Villa Vredestein clairement et de façon accueillante.</li>
                <li>Code propre et extensible, prêt pour de futures modifications.</li>
                <li>Rapide, accessible et agréable sur tous les écrans.</li>
            </ul>

            <h2>Voir en live</h2>
            <p><a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    de: () => (
        <>
            <h2>Was ist dieses Projekt?</h2>
            <p>Villa Vredestein ist ein Ort mit einer Geschichte. Sie brauchten eine Website, die diese Geschichte gut erzählt: wer sie sind, wofür sie stehen, was sie tun und wie man Kontakt aufnimmt. Kein technisches Produkt, sondern eine digitale Visitenkarte, die einlädt und Vertrauen aufbaut.</p>
            <p>Ich habe das gesamte Frontend gebaut: vom Entwurf bis zur fertigen Website.</p>

            <h2>Was habe ich gebaut?</h2>
            <ul>
                <li><strong>Öffentliche Website</strong> mit Informationen über die Geschichte, das Ziel und die Zukunft von Villa Vredestein.</li>
                <li><strong>Übersichtliche Navigation</strong> — Besucher finden sofort, was sie suchen.</li>
                <li><strong>Kontaktmöglichkeiten</strong> klar und niedrigschwellig präsentiert.</li>
                <li><strong>Responsiv und schnell</strong> — funktioniert auf jedem Bildschirm, lädt sofort.</li>
                <li><strong>Zugänglich</strong> — auch mit Tastatur und Screenreader nutzbar.</li>
            </ul>

            <h2>Stack & Ansatz</h2>
            <ul>
                <li><strong>React + Vite</strong> — modernes Tooling für eine schnelle, wartbare Codebasis.</li>
                <li><strong>React Router</strong> — flüssige Navigation ohne Seitenneuladen.</li>
                <li><strong>CSS-Tokens</strong> — konsistentes Corporate Design über die gesamte Website.</li>
                <li><strong>Optimierte Bilder</strong> (AVIF/WebP) für schnelle Ladezeiten.</li>
            </ul>

            <h2>Worauf ich geachtet habe</h2>
            <h3>Atmosphäre und Vertrauen</h3>
            <p>Eine Website über einen Ort mit Geschichte braucht Ruhe und Charakter. Das Layout unterstützt die Geschichte, anstatt davon abzulenken. Keine unnötigen Elemente, bewusste Typografie, Atemraum.</p>

            <h3>Informationshierarchie</h3>
            <p>Was möchte ein Besucher als erstes wissen? Diese Frage steuerte jeden Seitenaufbau. Von der Einleitung bis zur Kontaktseite: alles ist dort, wo man es erwartet.</p>

            <h3>Leistungsoptimierung</h3>
            <p>Bilder in modernen Formaten, Lazy Loading und ein leichtes Bundle sorgen für eine schnelle Erfahrung auf jedem Gerät und jeder Verbindung.</p>

            <h2>Ergebnis</h2>
            <ul>
                <li>Eine Website, die die Geschichte von Villa Vredestein klar und einladend erzählt.</li>
                <li>Sauberer, erweiterbarer Code, bereit für zukünftige Änderungen.</li>
                <li>Schnell, zugänglich und angenehm auf jedem Bildschirm.</li>
            </ul>

            <h2>Live ansehen</h2>
            <p><a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    es: () => (
        <>
            <h2>¿Qué es este proyecto?</h2>
            <p>Villa Vredestein es un lugar con una historia. Necesitaban un sitio web que contara bien esa historia: quiénes son, por qué luchan, qué hacen y cómo contactarlos. No un producto técnico, sino una tarjeta de visita digital que invita y genera confianza.</p>
            <p>Construí el frontend completo: desde el diseño hasta el sitio funcionando.</p>

            <h2>¿Qué construí?</h2>
            <ul>
                <li><strong>Sitio web público</strong> con información sobre la historia, el propósito y el futuro de Villa Vredestein.</li>
                <li><strong>Navegación clara</strong> — los visitantes encuentran lo que buscan de inmediato.</li>
                <li><strong>Opciones de contacto</strong> presentadas de forma clara y accesible.</li>
                <li><strong>Responsivo y rápido</strong> — funciona en cualquier pantalla, carga al instante.</li>
                <li><strong>Accesible</strong> — también funciona con teclado y lector de pantalla.</li>
            </ul>

            <h2>Stack & enfoque</h2>
            <ul>
                <li><strong>React + Vite</strong> — herramientas modernas para una base de código rápida y mantenible.</li>
                <li><strong>React Router</strong> — navegación fluida sin recargas de página.</li>
                <li><strong>Tokens CSS</strong> — identidad visual consistente en todo el sitio.</li>
                <li><strong>Imágenes optimizadas</strong> (AVIF/WebP) para tiempos de carga rápidos.</li>
            </ul>

            <h2>En qué me fijé</h2>
            <h3>Atmósfera y confianza</h3>
            <p>Un sitio web sobre un lugar con historia requiere calma y carácter. El diseño apoya la historia en lugar de distraer de ella. Sin elementos innecesarios, tipografía deliberada, espacio para respirar.</p>

            <h3>Jerarquía de información</h3>
            <p>¿Qué quiere saber primero un visitante? Esa pregunta guió cada diseño de página. Desde la introducción hasta la página de contacto: todo está donde se espera.</p>

            <h3>Optimización del rendimiento</h3>
            <p>Imágenes en formatos modernos, carga diferida y un bundle ligero garantizan una experiencia rápida en cada dispositivo y conexión.</p>

            <h2>Resultados</h2>
            <ul>
                <li>Un sitio que cuenta la historia de Villa Vredestein de forma clara y acogedora.</li>
                <li>Código limpio y extensible listo para cambios futuros.</li>
                <li>Rápido, accesible y cómodo en cualquier pantalla.</li>
            </ul>

            <h2>Ver en vivo</h2>
            <p><a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
    it: () => (
        <>
            <h2>Cos'è questo progetto?</h2>
            <p>Villa Vredestein è un posto con una storia. Avevano bisogno di un sito web che raccontasse bene quella storia: chi sono, per cosa si battono, cosa fanno e come contattarli. Non un prodotto tecnico, ma un biglietto da visita digitale che invita e crea fiducia.</p>
            <p>Ho costruito l'intero frontend: dal design al sito funzionante.</p>

            <h2>Cosa ho costruito?</h2>
            <ul>
                <li><strong>Sito web pubblico</strong> con informazioni sulla storia, lo scopo e il futuro di Villa Vredestein.</li>
                <li><strong>Navigazione chiara</strong> — i visitatori trovano subito quello che cercano.</li>
                <li><strong>Opzioni di contatto</strong> presentate chiaramente e in modo accessibile.</li>
                <li><strong>Responsive e veloce</strong> — funziona su qualsiasi schermo, si carica all'istante.</li>
                <li><strong>Accessibile</strong> — utilizzabile anche con tastiera e screen reader.</li>
            </ul>

            <h2>Stack & approccio</h2>
            <ul>
                <li><strong>React + Vite</strong> — strumenti moderni per una base di codice veloce e manutenibile.</li>
                <li><strong>React Router</strong> — navigazione fluida senza ricaricamenti di pagina.</li>
                <li><strong>Token CSS</strong> — identità visiva coerente su tutto il sito.</li>
                <li><strong>Immagini ottimizzate</strong> (AVIF/WebP) per tempi di caricamento rapidi.</li>
            </ul>

            <h2>A cosa ho prestato attenzione</h2>
            <h3>Atmosfera e fiducia</h3>
            <p>Un sito web su un posto con storia richiede calma e carattere. Il layout supporta la storia invece di distrarre da essa. Nessun elemento inutile, tipografia deliberata, spazio per respirare.</p>

            <h3>Gerarchia delle informazioni</h3>
            <p>Cosa vuole sapere prima un visitatore? Questa domanda ha guidato ogni struttura di pagina. Dall'introduzione alla pagina dei contatti: tutto è dove ci si aspetta.</p>

            <h3>Ottimizzazione delle prestazioni</h3>
            <p>Immagini in formati moderni, lazy loading e un bundle leggero garantiscono un'esperienza veloce su ogni dispositivo e connessione.</p>

            <h2>Risultati</h2>
            <ul>
                <li>Un sito che racconta la storia di Villa Vredestein in modo chiaro e accogliente.</li>
                <li>Codice pulito ed estendibile pronto per future modifiche.</li>
                <li>Veloce, accessibile e confortevole su qualsiasi schermo.</li>
            </ul>

            <h2>Vedi live</h2>
            <p><a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></p>
        </>
    ),
};

const ui = {
    nl: { title: "Villa Vredestein – Publieke website (Frontend)", summary: "Een uitnodigende publieke website voor Villa Vredestein: geschiedenis, doel en toekomst helder gepresenteerd. Gebouwd met React, snel, toegankelijk en prettig op elk scherm.", liveBtn: "Bekijk de website ↗", backBtn: "← Terug naar Portfolio" },
    en: { title: "Villa Vredestein – Public website (Frontend)", summary: "An inviting public website for Villa Vredestein: history, purpose and future clearly presented. Built with React, fast, accessible and comfortable on every screen.", liveBtn: "View the website ↗", backBtn: "← Back to Portfolio" },
    fr: { title: "Villa Vredestein – Site web public (Frontend)", summary: "Un site web public accueillant pour Villa Vredestein : histoire, objectif et avenir présentés clairement. Construit avec React, rapide, accessible et agréable sur tous les écrans.", liveBtn: "Voir le site ↗", backBtn: "← Retour au Portfolio" },
    de: { title: "Villa Vredestein – Öffentliche Website (Frontend)", summary: "Eine einladende öffentliche Website für Villa Vredestein: Geschichte, Ziel und Zukunft klar präsentiert. Mit React gebaut, schnell, zugänglich und angenehm auf jedem Bildschirm.", liveBtn: "Website ansehen ↗", backBtn: "← Zurück zum Portfolio" },
    es: { title: "Villa Vredestein – Sitio web público (Frontend)", summary: "Un sitio web público acogedor para Villa Vredestein: historia, propósito y futuro presentados claramente. Construido con React, rápido, accesible y cómodo en cualquier pantalla.", liveBtn: "Ver el sitio web ↗", backBtn: "← Volver al Portfolio" },
    it: { title: "Villa Vredestein – Sito web pubblico (Frontend)", summary: "Un sito web pubblico accogliente per Villa Vredestein: storia, scopo e futuro presentati chiaramente. Costruito con React, veloce, accessibile e confortevole su qualsiasi schermo.", liveBtn: "Vedi il sito ↗", backBtn: "← Torna al Portfolio" },
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
                        <span className="tag">UX/UI</span>
                        <span className="tag">Responsive</span>
                    </span>
                </div>

                <div className="article-cover">
                    <div className="media">
                        <GuardedPicture base={COVER_BASE} fallback={FallbackFront} alt="Villa Vredestein – publieke website" />
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