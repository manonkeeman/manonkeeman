import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

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

            <h3 className="about-subtitle">{t('about.skillsTitle')}</h3>
            <ul className="about-skills">
              <li>{t('about.skills.stack')}</li>
              <li>{t('about.skills.systems')}</li>
              <li>{t('about.skills.uxui')}</li>
              <li>{t('about.skills.storytelling')}</li>
            </ul>

            {/* Social icons */}
            <div className="about-socials">
              <a href="https://github.com/manonkeeman" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/manonkeeman/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://www.instagram.com/manonkeeman" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.facebook.com/editor.lifestyle/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://substack.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Substack"><SiSubstack /></a>
              <a href="https://medium.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Medium"><FaMedium /></a>
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
        .about-subtitle{ margin: 18px 0 6px; }
        .about-skills{
          margin:0;
          padding:0 0 0 1.1rem;
          display:grid;
          gap:6px;
          color: var(--muted);
          font-size: .92rem;
        }

        .about-socials{
          margin-top: 32px;
          display: flex;
          justify-content: center;
          gap: 20px;
          font-size: 1.6rem;
        }
        .about-socials a{
          color: var(--muted);
          transition: color .2s ease, transform .2s ease;
        }
        .about-socials a:hover{
          color: var(--accent);
          transform: translateY(-2px);
        }
      `}</style>
      </section>
  );
}