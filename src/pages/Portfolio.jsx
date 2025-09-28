import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FallbackFront from "../assets/Pics/Portfolio/VredesteinFrontend.jpeg";
import FallbackAcu   from "../assets/Pics/Portfolio/WebdesignAcupuncture.jpeg";
import FallbackBack  from "../assets/Pics/Portfolio/VredesteinBackend.jpeg";

// Public varianten (resize.mjs output) — basis zonder maat/extensie
const PUB_FRONT = "/portfolio/villa-vredestein-frontend";
const PUB_ACU   = "/portfolio/webdesign-acupuncture";
const PUB_BACK  = "/portfolio/villa-vredestein-backend";

function PortfolioImage({ basePublic, fallback, alt }) {
    const [ok, setOk] = useState(null);

    useEffect(() => {
        let cancelled = false;
        const testUrl = `${basePublic}-800w.webp`;
        const img = new Image();
        img.onload = () => { if (!cancelled) setOk(true); };
        img.onerror = () => { if (!cancelled) setOk(false); };
        img.src = testUrl;
        return () => { cancelled = true; };
    }, [basePublic]);

    const sizes = "(max-width: 920px) 100vw, (max-width: 1400px) 33vw, 400px";

    if (ok === false || ok === null) {
        return (
            <img
                src={fallback}
                alt={alt}
                loading="lazy"
                decoding="async"
                width={1200}
                height={675}
            />
        );
    }

    return (
        <picture>
            <source
                type="image/avif"
                srcSet={`${basePublic}-400w.avif 400w, ${basePublic}-800w.avif 800w, ${basePublic}-1200w.avif 1200w`}
                sizes={sizes}
            />
            <source
                type="image/webp"
                srcSet={`${basePublic}-400w.webp 400w, ${basePublic}-800w.webp 800w, ${basePublic}-1200w.webp 1200w`}
                sizes={sizes}
            />
            <img
                src={`${basePublic}-800w.webp`}
                alt={alt}
                loading="lazy"
                decoding="async"
                width={1200}
                height={675}
            />
        </picture>
    );
}

const projects = [
    {
        title: "Villa Vredestein – Studenten Dashboard Frontend",
        desc: "React Frontend, met JWT-auth, API en UX-UI design.",
        tags: ["React", "API", "JWT"],
        route: "/frontendvredestein",
        basePublic: PUB_FRONT,
        fallbackSrc: FallbackFront,
    },
    {
        title: "Webdesign – Acupuncture by Saskia",
        desc: "WordPress-site met rustige uitstraling en duidelijke info voor cliënten.",
        tags: ["WordPress", "Adobe Suite"],
        route: "/webdesignacupuncture",
        basePublic: PUB_ACU,
        fallbackSrc: FallbackAcu,
    },
    {
        title: "Villa Vredestein – Studenten Dashboard Backend",
        desc: "Spring Boot backend met JWT-auth, API en database-koppeling.",
        tags: ["Springboot", "Java", "API"],
        route: "/backendstudentendashboard",
        basePublic: PUB_BACK,
        fallbackSrc: FallbackBack,
    },
];

export default function Portfolio() {
    const safeProjects = projects.filter((p) => p?.title && p?.desc);

    return (
        <section id="portfolio" className="section">
            <h2 className="portfolio-title">Portfolio</h2>

            <div className="portfolio-grid">
                {safeProjects.map((p, i) => {
                    const Card = (
                        <>
                            <figure className="card-img">
                                <div className="media">
                                    <PortfolioImage basePublic={p.basePublic} fallback={p.fallbackSrc} alt={p.title} />
                                </div>
                            </figure>

                            <header className="card-header">
                                <h3 className="card-title" title={p.title}>{p.title}</h3>
                            </header>

                            <p className="card-desc">{p.desc}</p>

                            {!!p.tags && (
                                <div className="tags" aria-label="Tags">
                                    {p.tags.map((t) => <span key={`${t}-${i}`} className="tag">{t}</span>)}
                                </div>
                            )}

                            <div className="card-actions">
                                <span className="btn btn-outline" aria-hidden="true">Bekijk</span>
                            </div>
                        </>
                    );

                    return (
                        <article key={p.title || i} className="portfolio-card is-link">
                            <Link className="card-link" to={p.route} aria-label={`Open ${p.title}`}>
                                {Card}
                            </Link>
                        </article>
                    );
                })}
            </div>

            <style>{`
        .portfolio-title { text-align: center; margin-bottom: 6px; }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin: 0 auto;
          max-width: 1200px;
          padding: 0 3cm;
        }

        .portfolio-card {
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 14px;
          box-shadow: var(--shadow);
          transition: transform .2s, box-shadow .2s, border-color .2s;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .portfolio-card.is-link:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(0,0,0,.45);
          border-color: var(--accent);
        }

        .card-link {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          width: 100%;
          padding: 20px;
          min-height: 240px;
        }

        /* Full-bleed afbeelding zoals in je Journal fix */
        .card-img {
          margin: -20px -20px 12px;   /* trek de afbeelding uit de padding */
        }
        .card-img .media {
          width: 100%;
          aspect-ratio: 16 / 9;       /* consistente hoogte */
          overflow: hidden;
          border-radius: 14px 14px 0 0;
          background: transparent;
        }
        .card-img picture, .card-img img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;          /* vullend bijsnijden */
        }

        .card-header { margin-bottom: 6px; }
        .card-title { margin: 0; line-height: 1.25; }
        .card-desc { margin: 6px 0 12px; color: var(--text); line-height: 1.55; }

        .tags { display: flex; gap: 8px; flex-wrap: wrap; margin: auto 0 12px; }
        .tag { font-size: .85rem; padding: 4px 8px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); background: var(--bg); white-space: nowrap; }

        .btn { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 8px; font-size: .95rem; font-weight: 500; cursor: pointer; text-decoration: none; transition: .18s; }
        .btn-outline { background: transparent; color: var(--text); border: 1px solid var(--border); }

        @media (max-width: 920px) {
          .portfolio-grid { grid-template-columns: 1fr; padding: 0 16px; }
          .card-img .media { aspect-ratio: 16 / 9; }
        }
      `}</style>
        </section>
    );
}