import { Link } from "react-router-dom";
import data from "../content/contentJournal.json";
import { toCard } from "../assets/Helpers/contentHelpers";

export default function Journal() {
    const items = data.map(toCard);

    return (
        <section id="journal" className="section">
            <h2 className="journal-title">Journal</h2>
            <p className="journal-subtitle small">
            </p>

            <div className="journal-grid">
                {items.map((item) => {
                    const base = item.cover.replace(/-\d+w\.\w+$/, "");
                    return (
                        <article key={item.slug} className="journal-card">
                            <Link
                                to={`/journal/${item.slug}`}
                                className="card-link"
                                aria-label={item.title}
                            >
                                <div className="card-img">
                                    <picture>
                                        <source
                                            type="image/avif"
                                            srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w, ${base}-1200w.avif 1200w`}
                                            sizes="(max-width: 768px) 100vw, 800px"
                                        />
                                        <source
                                            type="image/webp"
                                            srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w, ${base}-1200w.webp 1200w`}
                                            sizes="(max-width: 768px) 100vw, 800px"
                                        />
                                        <img
                                            src={`${base}-800w.webp`}
                                            width="800"
                                            height="450"
                                            loading="lazy"
                                            decoding="async"
                                            alt={item.title}
                                        />
                                    </picture>
                                </div>

                                <div className="card-meta">
                                    <time dateTime={item.dateISO}>{item.dateLabel}</time> {" • "}
                                    <span>{item.ageLabel}</span>
                                    {item.readLabel ? (
                                        <>
                                            {" • "}
                                            <span>{item.readLabel}</span>
                                        </>
                                    ) : null}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.excerpt}</p>
                            </Link>
                        </article>
                    );
                })}
            </div>

            <style>{`
        .journal-title {
          text-align: center;
          margin-bottom: 6px;
        }
        .journal-subtitle {
          text-align: center;
          margin: 0 0 24px;
          color: var(--muted);
        }

        .journal-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin: 24px auto;
          max-width: 1200px;
          padding: 0 3cm;
        }

        .journal-card {
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .card-link {
          display: block;
          color: inherit;
          text-decoration: none;
          height: 100%;
        }
        .journal-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(0,0,0,.45);
        }

        .card-img img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
        }

        .card-meta {
          font-size: .85rem;
          color: var(--muted);
          margin: 12px 16px 0;
        }
        .journal-card h3 {
          margin: 8px 16px;
        }
        .journal-card p {
          margin: 0 16px 16px;
          line-height: 1.5;
        }

        @media (max-width: 920px) {
          .journal-grid {
            grid-template-columns: 1fr;
            padding: 0 16px;
          }
          .card-img img {
            height: 160px;
          }
        }
      `}</style>
        </section>
    );
}