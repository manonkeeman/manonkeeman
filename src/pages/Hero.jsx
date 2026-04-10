import { memo } from "react";
import { useTranslation } from "react-i18next";

function Hero() {
    const { t } = useTranslation();

    return (
        <section id="home" style={{ padding: 0, margin: 0 }}>
            <div className="hero-shell">

                {/* FOTO */}
                <div className="hero-left">
                    <picture>
                        <source
                            type="image/avif"
                            srcSet="/hero-400w.avif 400w, /hero-800w.avif 800w, /hero-1200w.avif 1200w"
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                        <source
                            type="image/webp"
                            srcSet="/hero-400w.webp 400w, /hero-800w.webp 800w, /hero-1200w.webp 1200w"
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                        <img
                            src="/hero-800w.webp"
                            width="800"
                            height="450"
                            fetchPriority="high"
                            decoding="async"
                            alt="Manon Keeman – full stack developer, systems thinker, storyteller & builder"
                        />
                    </picture>
                </div>

                {/* TEKST */}
                <div className="hero-copy">
                    <span className="hero-badge">
                        <span className="badge-dot" aria-hidden="true"/>
                        {t('hero.available')}
                    </span>
                    <h1>{t('hero.greeting')}</h1>
                    <h3>{t('hero.tagline')}</h3>
                    <p>{t('hero.bio')}</p>
                    <p className="small">{t('hero.roles')}</p>
                    <div className="hero-ctas">
                        <a href="/#portfolio" className="btn btn-primary">{t('hero.projects')}</a>
                        <a href="/journal" className="btn btn-outline" data-arrow>{t('hero.journal')}</a>
                    </div>
                </div>
            </div>

            <style>{`
        .hero-shell{
          width:100vw;
          min-height:100vh;
          display:grid;
          grid-template-columns: 1fr minmax(420px, 48vw);
          grid-template-areas: "image copy";
          position: relative;
        }
        .hero-left  { grid-area: image; }
        .hero-left img{
          display:block; width:100%; height:100vh; object-fit:cover; border-radius:0;
        }
        .hero-copy{
          grid-area: copy;
          align-self:center;
          justify-self:end;
          max-width: 56ch;
          padding: 0 96px 0 32px;
          text-align: left;
        }
        .hero-badge{
          display:inline-flex; align-items:center; gap:8px;
          font-size:.82rem; font-weight:600; letter-spacing:.04em;
          color:var(--accent); border:1px solid var(--accent);
          border-radius:999px; padding:5px 12px;
          margin-bottom:16px;
          text-transform:uppercase;
        }
        .badge-dot{
          width:7px; height:7px; border-radius:50%;
          background:var(--accent);
          animation: pulse 2s ease-in-out infinite;
          flex-shrink:0;
        }
        @keyframes pulse{
          0%,100%{ opacity:1; transform:scale(1); }
          50%{ opacity:.5; transform:scale(.85); }
        }
        .hero-ctas{ display:flex; gap:16px; margin-top:16px; }

        @media (max-width: 920px){
          .hero-shell{
            grid-template-columns: 1fr;
            grid-template-areas: "image" "copy";
          }
          .hero-left img{ height:52vh; }
          .hero-copy{ justify-self:start; padding:20px 20px 32px; max-width:65ch; }
          .hero-ctas{ margin-top:18px; flex-wrap:wrap; }
        }
        @media (max-width: 480px){
          .hero-left img{ height:42vh; }
          .hero-copy{ padding:16px 16px 28px; }
          .hero-ctas{ gap:10px; }
        }
      `}</style>
        </section>
    );
}

export default memo(Hero);