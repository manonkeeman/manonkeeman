import { Link } from "react-router-dom";

const projects = [
    {
        title: "Villa Vredestein – Studenten Dashboard Frontend",
        desc: "Frontend, UX-UI, JWT-auth, API.",
        tags: ["React", "API", "JWT"],
        route: "/frontendvredestein",
        image: "/portfolio/villa-vredestein-800w.webp",
    },
    {
        title: "Webdesign – Acupuncture by Saskia",
        desc: "WordPress-site met rustige uitstraling en duidelijke info voor cliënten.",
        tags: ["WordPress", "Adobe Suite"],
        route: "/webdesignacupunture",
        image: "/portfolio/acupuncture-saskia-800w.webp",
    },
    {
        title: "Villa Vredestein – Studenten Dashboard Backend",
        desc: "Spring Boot backend met JWT-auth, API en database-koppeling.",
        tags: ["Springboot", "Java", "API"],
        route: "/backendstudentendashboard",
        image: "/portfolio/scrum-board-800w.webp",
    },
];

export default function Portfolio() {
    const safeProjects = projects.filter((p) => p?.title && p?.desc);

    return (
        <section id="portfolio" className="section">
            <h2 className="portfolio-title">Portfolio</h2>
            <p className="portfolio-subtitle small">
                Een selectie van projecten waarin design, techniek en storytelling samenkomen.
            </p>

            <div className="portfolio-grid">
                {safeProjects.map((p, i) => {
                    const hasRoute = Boolean(p.route);

                    const CardContent = (
                        <>
                            {p.image && (
                                <figure className="card-img">
                                    <img src={p.image} alt={p.title} loading="lazy" decoding="async" />
                                </figure>
                            )}

                            <header className="card-header">
                                <h3 className="card-title" title={p.title}>
                                    {p.title}
                                </h3>
                            </header>

                            <p className="card-desc">{p.desc}</p>

                            <div className="tags" aria-label="Tags">
                                {(p.tags ?? []).map((t) => (
                                    <span key={`${t}-${i}`} className="tag">{t}</span>
                                ))}
                            </div>

                            <div className="card-actions">
                                {hasRoute ? (
                                    <span className="btn btn-outline" aria-hidden="true">Bekijk</span>
                                ) : (
                                    <span className="btn btn-outline is-disabled" aria-hidden="true">Niet beschikbaar</span>
                                )}
                            </div>
                        </>
                    );

                    return (
                        <article
                            key={p.title || i}
                            className={`portfolio-card ${hasRoute ? "is-link" : ""}`}
                        >
                            {hasRoute ? (
                                <Link
                                    className="card-link"
                                    to={p.route}
                                    aria-label={`Open ${p.title}`}
                                >
                                    {CardContent}
                                </Link>
                            ) : (
                                <div className="card-link" aria-label={`${p.title} (geen live voorbeeld)`}>
                                    {CardContent}
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>

            <style>{`
        .portfolio-title {
          text-align: center;
          margin-bottom: 6px;
        }
        .portfolio-subtitle {
          text-align: center;
          margin: 0 0 24px;
          color: var(--muted);
        }

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
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .portfolio-card.is-link:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(0,0,0,.45);
          border-color: var(--accent);
        }

        .portfolio-card.is-link:has(.card-link:focus-visible) {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
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

        .card-img {
          margin: -20px -20px 12px;
        }
        .card-img img {
          display: block;
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 14px 14px 0 0;
        }

        .card-header { margin-bottom: 6px; }
        .card-title {
          margin: 0;
          line-height: 1.25;
        }
        .card-desc {
          margin: 6px 0 12px;
          color: var(--text);
          line-height: 1.55;
        }

        .tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin: auto 0 12px;
        }
        .tag {
          font-size: .85rem;
          padding: 4px 8px;
          border: 1px solid var(--border);
          border-radius: 999px;
          color: var(--muted);
          background: var(--bg);
          white-space: nowrap;
        }

        .card-actions { margin-top: auto; }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: .95rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: background .18s ease, color .18s ease, transform .18s ease, border-color .18s ease;
        }
        .btn-outline {
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
        }
        .portfolio-card.is-link:hover .btn-outline {
          color: var(--accent);
          border-color: var(--accent);
        }
        .btn-outline.is-disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        @media (max-width: 920px) {
          .portfolio-grid { grid-template-columns: 1fr; padding: 0 16px; }
          .card-img img { height: 200px; }
        }
      `}</style>
        </section>
    );
}