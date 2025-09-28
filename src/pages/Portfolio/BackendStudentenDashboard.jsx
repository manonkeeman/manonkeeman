import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// ✅ Fallback die altijd werkt (uit bundel)
import FallbackBack from "../../assets/Pics/Portfolio/VredesteinBackend.jpeg";

// ✅ Public varianten (resize.mjs): basis zonder maat/extensie
const COVER_BASE = "/portfolio/villa-vredestein-backend";

// Optioneel: live URL / API-docs (vervang indien beschikbaar)
const LIVE_URL = ""; // bv. "https://api.villavredestein.com/docs"

// ---------- Zelfde guard als bij de andere cases ----------
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
        return (
            <img
                src={fallback}
                alt={alt}
                loading="lazy"
                decoding="async"
                style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
            />
        );
    }

    return (
        <picture>
            {webp && (
                <source
                    type="image/webp"
                    srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w, ${base}-1200w.webp 1200w`}
                    sizes={sizes}
                />
            )}
            {avif && (
                <source
                    type="image/avif"
                    srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w, ${base}-1200w.avif 1200w`}
                    sizes={sizes}
                />
            )}
            <img
                src={`${base}-800w.${webp ? "webp" : "avif"}`}
                alt={alt}
                loading="lazy"
                decoding="async"
                style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
            />
        </picture>
    );
}

// ---------- Page ----------
export default function BackendStudentenDashboard() {
    return (
        <article className="section article">
            <header className="article-header">
                <h1 className="article-title">Villa Vredestein – Studenten Dashboard (Backend)</h1>

                <div className="article-meta">
                    <time dateTime="2025-09-01">{new Date("2025-09-01").toLocaleDateString("nl-NL")}</time>
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
                        <GuardedPicture
                            base={COVER_BASE}
                            fallback={FallbackBack}
                            alt="Villa Vredestein – Backend van het studenten dashboard (Spring Boot / REST / JWT)"
                        />
                    </div>
                </div>

                <p className="article-summary">
                    Een robuuste Spring Boot-backend met beveiligde REST-endpoints (JWT), duidelijke domeinmodellen,
                    migraties, en nette foutafhandeling — ontworpen voor rust, voorspelbaarheid en groei.
                </p>

                {LIVE_URL && (
                    <p className="article-cta">
                        <a className="btn btn-outline" href={LIVE_URL} target="_blank" rel="noreferrer">
                            Bekijk API / docs ↗
                        </a>
                    </p>
                )}
            </header>

            <main className="article-body">
                <h2>Context</h2>
                <p>
                    Het studenten dashboard heeft betrouwbare data nodig. Ik heb de backend neergezet als
                    strakke, voorspelbare REST-laag met heldere boundaries en beveiliging bovenop.
                </p>

                <h2>Doelen</h2>
                <ul>
                    <li>Beveiligde endpoints met <strong>JWT</strong> (access/refresh).</li>
                    <li>Duidelijke domeinmodellen en validatie (request/response DTO’s).</li>
                    <li>Dataconsistentie met <strong>PostgreSQL</strong> en migraties (<strong>Flyway</strong>).</li>
                    <li>Meetbare performance & observability (logging, metrics).</li>
                </ul>

                <h2>Architectuur & Stack</h2>
                <ul>
                    <li><strong>Spring Boot</strong> (Web, Security), <strong>JPA/Hibernate</strong>, <strong>PostgreSQL</strong>.</li>
                    <li><strong>JWT</strong> authenticatie + role-based autorisatie.</li>
                    <li><strong>DTO + Mapper</strong> (scheiding domein ↔ API), <strong>Bean Validation</strong>.</li>
                    <li><strong>Flyway</strong> migraties; <strong>Testcontainers</strong> voor integratietests.</li>
                    <li><strong>Global exception handler</strong> met consistente foutcodes.</li>
                </ul>

                <h2>Uitdagingen → Oplossingen</h2>
                <h3>1) Token-verversing zonder race conditions</h3>
                <p>
                    Refresh-flow zo ingericht dat gelijktijdige verversingen worden gekalmd (één refresh,
                    overige requests wachten gecontroleerd of krijgen nette 401/Retry).
                </p>

                <h3>2) Duidelijke contracten</h3>
                <p>
                    Strikte DTO’s, inputvalidatie en betekenisvolle foutcodes. Hierdoor voorspelbaar gedrag
                    in de frontend en minder defensieve code.
                </p>

                <h3>3) Migraties & data-integriteit</h3>
                <p>
                    Flyway bewaakt schemawijzigingen; constraints en indices zijn expliciet opgezet.
                    Testcontainers checkt dit in CI met een échte PostgreSQL-instance.
                </p>

                <h2>Resultaat</h2>
                <ul>
                    <li>Beveiligde, voorspelbare API’s met nette performance.</li>
                    <li>Snellere frontend-ontwikkeling dankzij strakke contracten.</li>
                    <li>Stabiele database-laag met herhaalbare migraties.</li>
                </ul>

                <h2>Link & Bron</h2>
                <p>
                    {LIVE_URL ? (
                        <>Live/API: <a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></>
                    ) : (
                        <>De live-link of API-documentatie is op aanvraag beschikbaar.</>
                    )}
                </p>
            </main>

            <footer className="article-footer">
                <Link className="btn btn-outline" to="/#portfolio">← Terug naar Portfolio</Link>
            </footer>

            <style>{`
        .article { max-width: 920px; margin: 0 auto; padding: 0 16px; }

        .article-header { margin-bottom: 16px; }
        .article-title { margin: 0 0 8px; }
        .article-meta { display: flex; gap: 12px; align-items: center; color: var(--muted); margin-bottom: 16px; flex-wrap: wrap; }

        .article-cover { margin: 16px 0 12px; border-radius: 14px; overflow: hidden; }
        .article-cover .media {
          width: 100%;
          aspect-ratio: 16 / 9;
          max-height: 420px;
        }
        .article-cover picture, .article-cover img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 14px;
        }

        .article-summary { color: var(--muted); margin: 8px 0 16px; }
        .article-cta { margin: 8px 0 16px; }

        .article-body h2 { margin-top: 24px; }
        .article-body h3 { margin-top: 18px; }
        .article-body p { line-height: 1.75; margin: 12px 0; }
        .article-body ul { margin: 10px 0 16px 18px; }
        .article-body li { margin: 6px 0; }

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