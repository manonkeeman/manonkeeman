const projects = [
    {
        title: "Villa Vredestein – Studenten Dashboard",
        desc: "Frontend, UX-UI, JWT-auth, API",
        tags: ["React", "API", "JWT"],
        link: "https://villavredestein.com/",
    },
    {
        title: "Webdesign – Acupuncture by Saskia",
        desc: "WordPress-site voor een acupunctuurpraktijk met rustige uitstraling en duidelijke info voor cliënten.",
        tags: ["WordPress", "Adobe Suite"],
        link: "https://acupuncturebysaskia.com/",
    },
    {
        title: "Scrum Board Demo",
        desc: "Interactieve kanban met WIP-limits, burndown en retro notes.",
        tags: ["Scrum", "UX", "JavaScript"],
        link: "#",
    },
];

export default function Portfolio() {
    const safeProjects = projects.filter((p) => p && p.title && p.desc);

    return (
        <section id="portfolio" className="section">
            <h2 className="portfolio-title">Portfolio</h2>
            <p className="portfolio-subtitle small">
            </p>

            <div className="portfolio-grid">
                {safeProjects.map((p, i) => (
                    <article key={p.link || p.title || i} className="portfolio-card">
                        <header>
                            <h3>{p.title}</h3>
                        </header>

                        <p>{p.desc}</p>

                        <div className="tags">
                            {(p.tags ?? []).map((t) => (
                                <span key={t} className="tag">
                  {t}
                </span>
                            ))}
                        </div>

                        {p.link ? (
                            <a
                                className="btn btn-outline"
                                href={p.link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Open ${p.title}`}
                            >
                                Bekijk
                            </a>
                        ) : (
                            <button className="btn btn-outline" disabled>
                                Niet beschikbaar
                            </button>
                        )}
                    </article>
                ))}
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
          padding: 0 3cm; /* ~3cm marge links/rechts */
        }

        .portfolio-card {
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: var(--shadow);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .portfolio-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(0,0,0,.45);
        }

        .tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin: 12px 0;
        }

        @media (max-width: 920px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            padding: 0 16px;
          }
        }
      `}</style>
        </section>
    );
}