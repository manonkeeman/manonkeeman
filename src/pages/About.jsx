import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiFigma } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function About() {
  const { t } = useTranslation();

  return (
      <section id="about" className="section section-alt" style={{ padding: 0, margin: 0 }}>
        <div className="about-shell">
          {/* TEKST */}
          <div className="about-copy">
            <h2 className="about-title">{t('about.title')}</h2>
            <blockquote className="about-quote">
              {t('about.quote')}
            </blockquote>
            <p className="about-text">{t('about.bio1')}</p>
            <p className="about-text">{t('about.bio2')}</p>

            <div className="about-journal-cta">
              <span className="about-journal-tagline">{t('about.journalCta')}</span>
              <Link to="/journal" className="about-journal-btn">{t('about.journalBtn')}</Link>
            </div>

            <h3 className="about-subtitle">{t('about.skillsTitle')}</h3>
            <ul className="about-skills">
              <li>{t('about.skills.stack')}</li>
              <li>{t('about.skills.systems')}</li>
              <li>{t('about.skills.uxui')}</li>
              <li>{t('about.skills.storytelling')}</li>
            </ul>

            {/* Tech stack icons met tooltip */}
            <div className="about-stack" aria-label="Tech stack">
              <span data-tooltip="React"><FaReact /></span>
              <span data-tooltip="Spring Boot"><SiSpringboot /></span>
              <span data-tooltip="PostgreSQL"><SiPostgresql /></span>
              <span data-tooltip="Git"><FaGitAlt /></span>
              <span data-tooltip="Figma"><SiFigma /></span>
            </div>

          </div>

          {/* FOTO */}
          <div className="about-photo">
            <picture>
              <source
                  type="image/avif"
                  srcSet="/about-portrait-400w.avif 400w, /about-portrait-800w.avif 800w, /about-portrait-1200w.avif 1200w"
                  sizes="(max-width: 768px) 100vw, 48vw"
              />
              <source
                  type="image/webp"
                  srcSet="/about-portrait-400w.webp 400w, /about-portrait-800w.webp 800w, /about-portrait-1200w.webp 1200w"
                  sizes="(max-width: 768px) 100vw, 48vw"
              />
              <img
                  src="/about-portrait-800w.webp"
                  width="800"
                  height="600"
                  alt="Portrait Manon"
                  loading="lazy"
                  decoding="async"
              />
            </picture>
          </div>
        </div>

        <style>{`
        .about-shell{
          min-height: 80vh;
          display:grid;
          grid-template-columns: 1fr minmax(420px, 48vw);
          grid-template-areas: "copy photo";
        }
        .about-copy {
          grid-area: copy;
          align-self:center;
          padding: 48px 48px 48px 3cm;
          max-width: 56ch;
        }
        .about-photo{ grid-area: photo; position:relative; overflow:hidden; }
        .about-photo img{ display:block; width:100%; height:92vh; object-fit:cover; margin: -6vh 0 -8vh; }

        @media (max-width: 920px){
          .about-shell{ grid-template-columns: 1fr; grid-template-areas:"copy" "photo"; }
          .about-copy{ padding: 32px 20px; }
          .about-photo img{ height:58vh; margin:0; }
        }

        .about-title{ margin: 0 0 8px; }
        .about-quote{ margin: 0 0 16px; font-style: italic; color: var(--muted); line-height: 1.5; }
        .about-text{ margin: 0 0 12px; }
        .about-journal-cta{
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 20px 0 4px;
          flex-wrap: wrap;
        }
        .about-journal-tagline{
          color: var(--muted);
          font-size: .92rem;
        }
        .about-journal-btn{
          display: inline-block;
          padding: 7px 18px;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: .88rem;
          font-weight: 600;
          color: var(--text);
          text-decoration: none;
          white-space: nowrap;
          transition: background .18s ease, color .18s ease, border-color .18s ease;
        }
        .about-journal-btn:hover{
          background: var(--accent);
          color: #fff;
          border-color: var(--accent);
        }
        .about-subtitle{ margin: 18px 0 6px; }
        .about-skills{
          margin:0;
          padding:0 0 0 1.1rem;
          display:grid;
          gap:6px;
          color: var(--muted);
          font-size: .92rem;
        }

        .about-stack{
          display: flex;
          gap: 18px;
          font-size: 1.7rem;
          margin: 20px 0 0;
          flex-wrap: wrap;
        }
        .about-stack span{
          position: relative;
          color: var(--muted);
          transition: color .2s ease, transform .2s ease;
          cursor: default;
          display: flex;
          align-items: center;
        }
        .about-stack span:hover{
          color: var(--accent);
          transform: translateY(-2px);
        }
        /* Tooltip */
        .about-stack span::after{
          content: attr(data-tooltip);
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-alt);
          color: var(--text);
          font-size: .72rem;
          font-weight: 600;
          letter-spacing: .03em;
          padding: 4px 9px;
          border-radius: 7px;
          border: 1px solid var(--border);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity .18s ease;
          box-shadow: var(--shadow);
        }
        .about-stack span:hover::after{ opacity: 1; }

      `}</style>
      </section>
  );
}