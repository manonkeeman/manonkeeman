import portrait from "../assets/Pics/ManonKeemanAbout.png";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

export default function About() {
  return (
      <section id="about" className="section section-alt" style={{ padding: 0, margin: 0 }}>
        <div className="about-shell">
          {/* TEKST */}
          <div className="about-copy">
            <h2 className="about-title">Typemachine & Toekomst</h2>
            <blockquote className="about-quote">
              “Met vingers op de toetsen, verhalen in de lucht — techniek brengt ze samen.”
            </blockquote>
            <p className="about-text">
              Een oude typemachine, nostalgie in elk geluid, herinneringen aan iets ouderwets maar krachtigs. Net als die typemachine ben ik gefascineerd door precisie, ritme en het creëren met aandacht.
            </p>
            <p className="about-text">
              Van KLM pushback-trekker tot communicatie bij de gemeente, ervaringen stapelen zich op — maar mijn hart klopt altijd voor duidelijkheid en verbinding. Techniek mag dan modern zijn, mijn waarden zijn klassiek: loyaliteit, samenwerking en avontuur.
            </p>

            <h3 className="about-subtitle">Skills</h3>
            <ul className="about-skills">
              <li>Full stack: React, Java, API’s</li>
              <li>Agile teamwork & Scrum</li>
              <li>UX/UI & visuele branding met karakter</li>
              <li>Communicatie & storytelling</li>
            </ul>

            {/* Social icons */}
            <div className="about-socials">
              <a href="https://github.com/manonkeeman" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/manonkeeman/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://www.instagram.com/manonkeeman" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.facebook.com/editor.lifestyle/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://substack.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Substack"><SiSubstack /></a>
            </div>
          </div>

          {/* FOTO */}
          <div className="about-photo">
            <img src={portrait} alt="Portret Manon" />
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

        /* Social icons */
        .about-socials{
          margin-top: 32px;   /* extra witruimte */
          display: flex;
          justify-content: center;  /* centreren */
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