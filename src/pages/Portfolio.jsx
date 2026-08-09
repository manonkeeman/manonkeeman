import { useRef } from "react";
import { Link } from "../assets/Components/LocaleLink.jsx";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";
import { useTranslation } from "react-i18next";

const PUB_BACK = "/Portfolio/studenten-dashboard-backend";

function PortfolioImage({ basePublic, imgSrc, alt }) {
    if (imgSrc) {
        return <img src={imgSrc} alt={alt} loading="lazy" decoding="async" />;
    }
    return (
        <picture>
            <source
                type="image/avif"
                srcSet={`${basePublic}-400w.avif 400w, ${basePublic}-800w.avif 800w, ${basePublic}-1200w.avif 1200w`}
                sizes="(max-width: 600px) 90vw, 480px"
            />
            <source
                type="image/webp"
                srcSet={`${basePublic}-400w.webp 400w, ${basePublic}-800w.webp 800w, ${basePublic}-1200w.webp 1200w`}
                sizes="(max-width: 600px) 90vw, 480px"
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
        key: "backend",
        title: "Studenten Verhuur Dashboard",
        tags: ["Spring Boot", "Java", "PostgreSQL", "JWT"],
        route: "/backendstudentendashboard",
        basePublic: PUB_BACK,
        num: "01",
    },
    {
        key: "frontend",
        title: "Webdevelopment - Villa Vredestein",
        tags: ["React", "Vite", "UX/UI", "SEO"],
        route: "/frontendvredestein",
        imgSrc: "/Portfolio/villa-vredestein-mockup.png",
        num: "02",
    },
    {
        key: "acupuncture",
        title: "Webdesign – Acupuncture by Saskia",
        tags: ["WordPress", "Adobe Suite", "SEO"],
        route: "/webdesignacupuncture",
        imgSrc: "/Portfolio/webdesign-acupuncture-mockup.png",
        num: "03",
    },
    {
        key: "bigthree",
        title: "Webdesign Concept — The Big Three",
        tags: ["HTML/CSS", "Webdesign", "Dark theme", "Concept"],
        route: "/thebigthree",
        imgSrc: "/Portfolio/bigthree-concept.png",
        num: "04",
    },
    {
        key: "marieboddaert",
        title: "Webdesign — Marie H. Boddaert",
        tags: ["HTML/CSS", "Webdesign", "Typografie", "Netlify", "SEO", "CMS"],
        route: "/marieboddaert",
        imgSrc: "/Portfolio/marie-boddaert-mockup.png",
        num: "05",
        journalLink: "/journal/pastelvanbuiten",
    },
];

export default function Portfolio() {
    const { t } = useTranslation();
    const prefix = useLangPrefix();
    const trackRef = useRef(null);

    const scroll = (dir) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.querySelector(".portfolio-card");
        const cardW = card ? card.offsetWidth + 24 : 480;
        track.scrollBy({ left: dir * cardW, behavior: "smooth" });
    };

    return (
        <section id="portfolio" className="section portfolio-section">

            <div className="portfolio-header">
                <h2>Portfolio</h2>
                <div className="portfolio-arrows">
                    <button
                        className="arrow-btn"
                        onClick={() => scroll(-1)}
                        aria-label={t('portfolio.prev')}
                    >←</button>
                    <button
                        className="arrow-btn"
                        onClick={() => scroll(1)}
                        aria-label={t('portfolio.next')}
                    >→</button>
                </div>
            </div>

            <div className="portfolio-track" ref={trackRef}>
                {projects.map((p) => {
                    const desc = t(`portfolio.projects.${p.key}.desc`);
                    return (
                        <article key={p.key} className="portfolio-card">
                            <Link className="card-link" to={p.route} aria-label={`Open ${p.title}`}>
                                <div className="card-media">
                                    <PortfolioImage basePublic={p.basePublic} imgSrc={p.imgSrc} alt={p.title} />
                                </div>
                                <div className="card-body">
                                    <span className="card-num">{p.num}</span>
                                    <h3 className="card-title">{p.title}</h3>
                                    <p className="card-desc">{desc}</p>
                                    <div className="card-tags">
                                        {p.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                            <div className="card-actions">
                                <Link to={p.route} className="btn-cta">{t('portfolio.viewBtn')} →</Link>
                                {p.journalLink && (
                                    <Link to={p.journalLink} className="btn-cta-story">{t('portfolio.readStory')} →</Link>
                                )}
                            </div>
                        </article>
                    );
                })}

                {/* Laatste kaart: CTA naar contact */}
                <article className="portfolio-card portfolio-card--cta">
                    <div className="cta-card-inner">
                        <p className="cta-card-label">{t('portfolio.cta.label')}</p>
                        <h3>{t('portfolio.cta.title')}</h3>
                        <p className="cta-card-sub">{t('portfolio.cta.sub')}</p>
                        <a href={`${prefix}/#contact`} className="btn-cta-solid">{t('portfolio.cta.btn')} →</a>
                    </div>
                </article>
            </div>

            <style>{`
        .portfolio-section { padding-bottom: 80px; overflow-x: clip; }

        .portfolio-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto 32px;
          padding: 0 40px;
        }
        .portfolio-header h2 { margin: 0; }

        .portfolio-arrows { display: flex; gap: 10px; }
        .arrow-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--bg-alt);
          color: var(--text);
          font-size: 1.1rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color .2s, color .2s, transform .15s;
        }
        .arrow-btn:hover { border-color: var(--accent); color: var(--accent); transform: scale(1.08); }

        /* Track */
        .portfolio-track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding: 8px 40px 32px;
          scrollbar-width: none;
        }
        .portfolio-track::-webkit-scrollbar { display: none; }

        /* Kaart */
        .portfolio-card {
          flex: 0 0 440px;
          scroll-snap-align: start;
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: transform .2s, border-color .2s, box-shadow .2s;
        }
        .portfolio-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
          box-shadow: 0 12px 36px rgba(0,0,0,.5);
        }

        .card-link {
          display: flex;
          flex-direction: column;
          height: 100%;
          text-decoration: none;
          color: inherit;
        }

        .card-media {
          aspect-ratio: 16/9;
          overflow: hidden;
          flex-shrink: 0;
        }
        .card-media picture, .card-media img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s ease;
        }
        .portfolio-card:hover .card-media img { transform: scale(1.04); }

        .card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-num {
          font-size: .78rem;
          font-weight: 700;
          letter-spacing: .12em;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }
        .card-title {
          font-size: 1.15rem;
          margin: 0 0 10px;
          line-height: 1.3;
        }
        .card-desc {
          font-size: .92rem;
          color: var(--muted);
          line-height: 1.6;
          margin: 0 0 16px;
          flex: 1;
        }
        .card-tags {
          display: flex; gap: 8px; flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .tag {
          font-size: .78rem;
          padding: 3px 10px;
          border: 1px solid var(--border);
          border-radius: 999px;
          color: var(--muted);
          background: var(--bg);
          white-space: nowrap;
        }
        .card-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 24px 22px;
          flex-wrap: wrap;
        }
        .btn-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--accent);
          font-weight: 600;
          font-size: .95rem;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color .2s, gap .2s;
        }
        .portfolio-card:hover .btn-cta { border-color: var(--accent); gap: 10px; }
        .btn-cta-story {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--muted);
          font-size: .88rem;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: color .2s, border-color .2s, gap .2s;
        }
        .btn-cta-story:hover { color: var(--accent); border-color: var(--accent); gap: 10px; }

        /* CTA-kaart */
        .portfolio-card--cta {
          background: linear-gradient(145deg, var(--bg-alt), color-mix(in srgb, var(--accent) 8%, var(--bg-alt)));
          border-color: color-mix(in srgb, var(--accent) 30%, var(--border));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .portfolio-card--cta:hover { transform: translateY(-5px); }
        .cta-card-inner {
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
          justify-content: center;
        }
        .cta-card-label {
          font-size: .78rem;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0;
        }
        .cta-card-inner h3 { margin: 0; font-size: 1.4rem; }
        .cta-card-sub { color: var(--muted); font-size: .92rem; line-height: 1.6; margin: 0; }
        .btn-cta-solid {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          padding: 12px 22px;
          background: var(--bordeaux);
          color: var(--bg);
          border-radius: 10px;
          font-weight: 600;
          font-size: .95rem;
          text-decoration: none;
          border: 1px solid var(--bordeaux);
          cursor: pointer;
          width: fit-content;
          transition: background .2s, border-color .2s, color .2s, transform .15s;
        }
        .btn-cta-solid:hover { background:var(--accent); border-color:var(--accent); color:var(--bordeaux); transform: translateY(-2px); }

        @media (max-width: 920px) {
          .portfolio-header { padding: 0 20px; }
          .portfolio-track { padding: 8px 20px 24px; gap: 16px; }
          .portfolio-card { flex: 0 0 85vw; }
        }
        @media (max-width: 480px) {
          .portfolio-card { flex: 0 0 92vw; }
          .portfolio-track { padding: 8px 16px 20px; }
          .portfolio-header { padding: 0 16px; }
          .card-body { padding: 18px; }
        }
      `}</style>
        </section>
    );
}