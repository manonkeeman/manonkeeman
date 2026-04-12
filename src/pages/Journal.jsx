import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import data from "../content/contentJournal.json";
import { toCard } from "../assets/Helpers/contentHelpers";
import Seo from "../assets/Components/Seo.jsx";

export default function Journal() {
    const { t } = useTranslation();
    const items = data.map(toCard);

    return (
        <section id="journal" className="section">
            <Seo
                title={t('seo.journalPage.title')}
                description={t('seo.journalPage.description')}
                path="/journal"
            />
            <h2 className="journal-title">Journal</h2>
            <p className="journal-subtitle small"></p>

            <div className="journal-grid">
                {items.map((item) => {
                    const base = item.cover.replace(/-\d+w\.\w+$/, "");
                    const title   = t(`journalSection.articles.${item.slug}.title`);
                    const excerpt = t(`journalSection.articles.${item.slug}.excerpt`);
                    return (
                        <article key={item.slug} className="journal-card">
                            <Link to={`/journal/${item.slug}`} className="card-link" aria-label={title}>
                                <div className="card-img">
                                    <picture>
                                        <source
                                            type="image/avif"
                                            srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w, ${base}-1200w.avif 1200w`}
                                            sizes="(max-width: 920px) 100vw, 33vw"
                                        />
                                        <source
                                            type="image/webp"
                                            srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w, ${base}-1200w.webp 1200w`}
                                            sizes="(max-width: 920px) 100vw, 33vw"
                                        />
                                        <img
                                            src={`${base}-800w.webp`}
                                            width="1200"
                                            height="675"
                                            loading="lazy"
                                            decoding="async"
                                            alt={title}
                                            style={{ objectPosition: item.imgPosition }}
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
                                <h3>{title}</h3>
                                <p>{excerpt}</p>
                            </Link>
                        </article>
                    );
                })}
            </div>

            <style>{`
        .journal-title { text-align: center; margin-bottom: 6px; }
        .journal-subtitle { text-align: center; margin: 0 0 24px; color: var(--muted); }

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
        .journal-card:hover { transform: translateY(-4px); box-shadow: 0 8px 28px rgba(0,0,0,.45); }

        .card-link { display: flex; flex-direction: column; color: inherit; text-decoration: none; height: 100%; }

        /* Afbeelding bovenaan de card */
        .card-img {
          width: 100%;
          height: 200px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .card-img picture {
          display: block;
          width: 100%;
          height: 100%;
        }
        .card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .card-meta { font-size: .85rem; color: var(--muted); margin: 12px 16px 0; }
        .journal-card h3 { margin: 8px 16px; }
        .journal-card p { margin: 0 16px 16px; line-height: 1.5; }

        @media (max-width: 920px) {
          .journal-grid { grid-template-columns: repeat(2, 1fr); padding: 0 16px; }
          .card-img { height: 190px; }
        }
        @media (max-width: 600px) {
          .journal-grid { grid-template-columns: 1fr; padding: 0 12px; gap: 16px; }
          .card-img { height: 200px; }
        }
      `}</style>
        </section>
    );
}