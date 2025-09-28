import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FallbackFront from "../../assets/Pics/Portfolio/VredesteinFrontend.jpeg";

const COVER_BASE = "/portfolio/villa-vredestein-frontend";
const LIVE_URL = "https://villavredestein.com";

// ---------------- Guard (zoals werkend bij jou) ----------------
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

    // Tijdens check of niets beschikbaar → altijd fallback tonen
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

    // Minstens één bestaat → render alleen bestaande sources (WebP eerst)
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

// ---------------- Page ----------------
export default function FrontendVredestein() {
    return (
        <article className="section article">
            <header className="article-header">
                <h1 className="article-title">Villa Vredestein – Studenten Dashboard (Frontend)</h1>

                <div className="article-meta">
                    <time dateTime="2025-09-01">{new Date("2025-09-01").toLocaleDateString("nl-NL")}</time>
                    <span className="tags">
            <span className="tag">React</span>
            <span className="tag">Vite</span>
            <span className="tag">JWT</span>
            <span className="tag">UX/UI</span>
            <span className="tag">API</span>
          </span>
                </div>

                {/* Cover met vaste verhouding/hoogte via wrapper .media */}
                <div className="article-cover">
                    <div className="media">
                        <GuardedPicture
                            base={COVER_BASE}
                            fallback={FallbackFront}
                            alt="Villa Vredestein – Studenten Dashboard Frontend"
                        />
                    </div>
                </div>

                <p className="article-summary">
                    Modulair React-frontend voor een studenten dashboard met veilige login (JWT),
                    rol-gebaseerde weergaven en een toegankelijke UI die rust en focus bewaart.
                </p>

                {LIVE_URL && (
                    <p className="article-cta">
                        <a className="btn btn-outline" href={LIVE_URL} target="_blank" rel="noreferrer">
                            Bekijk live demo ↗
                        </a>
                    </p>
                )}
            </header>

            <main className="article-body">
                <h2>Context</h2>
                <p>
                    Villa Vredestein vroeg om een helder, betrouwbaar studenten dashboard. Kern:
                    snel inloggen, direct relevante info en nul frictie. Minimalistische UI, duidelijke hiërarchie.
                </p>

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

                <h2>Uitdagingen → Oplossingen</h2>
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
                    <li>Schaalbare componenten & duidelijke mappen.</li>
                </ul>

                <h2>Link & Bron</h2>
                <p>
                    <>Live: <a href={LIVE_URL} target="_blank" rel="noreferrer">{LIVE_URL}</a></>
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
        /* Vast formaat: 16:9, begrens de hoogte zodat je content zichtbaar blijft */
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