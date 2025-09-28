import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FallbackAcu from "../../assets/Pics/Portfolio/WebdesignAcupuncture.jpeg";

const COVER_BASE = "/portfolio/webdesign-acupuncture";
const LIVE_URL = "https://acupuncturebysaskia.com/over-saskia/";

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

export default function WebdesignAcupuncture() {
    return (
        <article className="post">
            <header className="post-header">
                <h1 className="post-title">Webdesign – Acupuncture by Saskia</h1>

                <figure className="post-cover">
                    <div className="media">
                        <GuardedPicture
                            base={COVER_BASE}
                            fallback={FallbackAcu}
                            alt="Homepage van Acupuncture by Saskia – rustig webdesign met duidelijke call-to-actions"
                        />
                    </div>
                </figure>
            </header>

            {/* 2-koloms layout */}
            <div className="post-grid">
                <main className="post-body">
                    <h2>Context</h2>
                    <p>
                        De praktijk wilde een website die rust uitstraalt en vertrouwen geeft. Geen marketing-schreeuw,
                        wel helderheid: wat is acupunctuur, waarbij helpt het, en hoe maak je een afspraak?
                    </p>

                    <h2>Doelen</h2>
                    <ul>
                        <li>Serene visuele stijl die past bij de praktijk.</li>
                        <li>Snelle toegang tot praktische info (locatie, tarieven, vergoedingen, intake).</li>
                        <li>Heldere flow naar contact/afspraak, ook op mobiel.</li>
                        <li>Basis-SEO en performance.</li>
                    </ul>

                    <h2>Ontwerp & Implementatie</h2>
                    <ul>
                        <li><strong>Typografie & kleur:</strong> zachte kleuren, ruime line-height, rustige headings.</li>
                        <li><strong>UI & navigatie:</strong> compacte hoofdnavigatie, sticky contactknop op mobiel.</li>
                        <li><strong>Performance:</strong> slank thema, caching, lazy-loading.</li>
                        <li><strong>SEO basis:</strong> nette titels/descriptions, Google Business Profile.</li>
                    </ul>
                </main>

                <aside className="post-aside">
                    <div className="aside-card">
                        <h3>Highlights</h3>
                        <ul>
                            <li>Snel bruikbaar: geen lange laadtijd</li>
                            <li>Duidelijke knoppen op logische plekken</li>
                            <li>Goed leesbare tekst voor iedereen</li>
                        </ul>
                    </div>

                    <div className="aside-card">
                        <h3>Stack</h3>
                        <ul>
                            <li>WordPress</li>
                            <li>Adobe Suite</li>
                            <li>Responsive layout</li>
                            <li>SEO</li>
                        </ul>
                    </div>

                    {/* 🔹 Bron & link: tekst links, button gecentreerd */}
                    <div className="aside-card link-card">
                        <h3>Bron & link</h3>
                        <a className="btn btn-primary" href={LIVE_URL} target="_blank" rel="noreferrer noopener">
                            Naar website ↗
                        </a>
                    </div>
                </aside>
            </div>

            <footer className="post-footer">
                <Link className="btn btn-outline" to="/#portfolio">← Terug naar Portfolio</Link>
            </footer>

            <style>{`
        .post { max-width: 980px; margin: 0 auto; padding: 0 16px; }

        .post-header { margin: 8px 0 20px; }
        .post-title { margin: 0 0 8px; line-height: 1.15; }

        .post-cover { margin: 14px 0 8px; }
        .post-cover .media { width: 100%; aspect-ratio: 16/9; max-height: 460px; overflow: hidden; border-radius: 14px; }
        .post-cover picture, .post-cover img { display: block; width: 100%; height: 100%; object-fit: cover; }

        .post-grid {
          display: grid;
          grid-template-columns: 1fr minmax(240px, 280px);
          gap: 28px;
          align-items: start;
          margin-top: 8px;
        }
        .post-body h2 { margin-top: 24px; }
        .post-body h3 { margin-top: 18px; }
        .post-body p { line-height: 1.75; margin: 12px 0; }
        .post-body ul { margin: 10px 0 16px 18px; }
        .post-body li { margin: 6px 0; }

        .post-aside { position: sticky; top: 16px; }

        .aside-card {
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 12px;
          box-shadow: var(--shadow);
          margin-bottom: 16px;
        }
        .aside-card h3 { margin: 0 0 8px; font-size: 1rem; }
        .aside-card ul { margin: 0 0 0 16px; }
        .aside-card li { margin: 6px 0; }

        /* 🔹 Alleen "Bron & link": tekst links, button gecentreerd */
        .aside-card.link-card {
          display: flex;
          flex-direction: column;
          align-items: stretch;   /* laat tekst links uitlijnen */
          text-align: left;
        }
        .aside-card.link-card .btn {
          align-self: center;     /* centreer alleen de knop */
          display: inline-block;
          margin-top: 6px;
        }
        .aside-card .aside-url {
          margin: 8px 0 0;
          font-size: .9rem;
          word-break: break-word;
        }

        /* Buttons */
        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 8px; font-size: .95rem; font-weight: 500; cursor: pointer; text-decoration: none; transition: background .18s ease, color .18s ease, border-color .18s ease; }
        .btn-outline { background: transparent; color: var(--text); border: 1px solid var(--border); }
        .btn-primary { background: var(--accent); color: var(--bg); border: 1px solid var(--accent); }

        .post-footer { margin: 20px 0; }

        @media (max-width: 980px) {
          .post { padding: 0 12px; }
          .post-grid { grid-template-columns: 1fr; }
          .post-aside { position: static; }
          .post-cover .media { max-height: 360px; }
        }
      `}</style>
        </article>
    );
}