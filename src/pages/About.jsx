import portrait from "../assets/Pics/ManonVintage.png";

export default function About() {
    return (
        <section id="about" className="section section-alt" style={{ padding: 0, margin: 0 }}>
            <div className="about-shell">
                {/* TEKST */}
                <div className="about-copy">
                    <h2 className="about-title">Passie & Praktijk</h2>
                    <blockquote className="about-quote">“Techniek is mooi, maar zonder mensen verliest het zijn ziel.”</blockquote>
                    <p className="about-text">Van KLM pushback-trekker via werving & communicatie bij gemeente Amsterdam — plekken waar samenwerking & precisie tellen.</p>
                    <p className="about-text">Mijn nieuwsgierigheid + ervaring vormen mijn fundament. Techniek én menselijk begrip gaan hand in hand.</p>

                    <h3 className="about-subtitle">Skills</h3>
                    <ul className="about-skills">
                        <li>Full stack: React, Java, API’s</li>
                        <li>Agile teamwork & transparante metrics</li>
                        <li>UX/UI & visuele branding met heldere copy</li>
                        <li>Communicatie & storytelling</li>
                    </ul>
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
        .about-copy { grid-area: copy; align-self:center; padding: 48px clamp(20px,3vw,48px); max-width: 56ch; }
        .about-photo{ grid-area: photo; position:relative; overflow:hidden; }
        .about-photo img{ display:block; width:100%; height:92vh; object-fit:cover; margin: -6vh 0 -8vh; }

        /* Mobiel: tekst → foto */
        @media (max-width: 920px){
          .about-shell{
            grid-template-columns: 1fr;
            grid-template-areas:
              "copy"
              "photo";
          }
          .about-copy{ padding: 32px 20px; }
          .about-photo img{ height:58vh; margin:0; }
        }

        /* Kleine typografie accenten */
        .about-title{ margin: 0 0 8px; }
        .about-quote{ margin: 0 0 16px; font-style: italic; color: var(--muted); line-height: 1.5; }
        .about-text{ margin: 0 0 12px; }
        .about-subtitle{ margin: 18px 0 6px; }
        .about-skills{ margin:0; padding:0 0 0 1.1rem; display:grid; gap:6px; color: var(--muted); font-size: .92rem; }
      `}</style>
        </section>
    );
}