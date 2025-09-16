import { useState } from "react";
import heroImg from "../assets/pics/manonfront.png";

export default function Hero() {
    const [open, setOpen] = useState(false);

    return (
        <section id="home" style={{ padding: 0, margin: 0 }}>
            <div className="hero-shell">
                {/* NAV als eigen grid-item (desktop) + hamburger (mobiel) */}
                <nav className={`hero-nav ${open ? "open" : ""}`} aria-label="Primaire navigatie">
                    <button
                        className="hero-menu-btn"
                        aria-label="Open menu"
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>

                    <ul className="hero-links">
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
                        <li><a href="#journal" className="nav-link">Journal</a></li>
                        <li><a href="#contact" className="btn btn-primary" data-arrow>Samenwerken</a></li>
                    </ul>
                </nav>

                {/* FOTO */}
                <div className="hero-left">
                    <img src={heroImg} alt="Hero visual" />
                </div>

                {/* TEKST */}
                <div className="hero-copy">
                    <h1>- Hi! Ik ben Manon -</h1>
                    <h3>Ik maak orde in de chaos — met design, code en een flinke dosis nieuwsgierigheid.</h3>
                    <p>Techniek zonder verhaal is kaal. Verhalen zonder structuur waaien weg. Ik leer elke dag en bouw met teams aan oplossingen die er echt toe doen.</p>
                    <p className="small">Full Stack Developer • Scrum Master • Storyteller</p>
                    <div className="hero-ctas">
                        <a href="#portfolio" className="btn btn-primary">Projecten</a>
                        <a href="#journal" className="btn btn-outline" data-arrow>Journal</a>
                    </div>
                </div>
            </div>

            {/* Component styles */}
            <style>{`
        .hero-shell{
          width:100vw;
          min-height:100vh;
          display:grid;
          grid-template-columns: 1fr minmax(420px, 48vw);
          grid-template-areas:
            "image nav"
            "image copy";
        }
        .hero-nav   { 
          grid-area: nav;  
          display:flex; 
          align-items:flex-start; 
          gap:28px; 
          justify-self:end; 
        }
        .hero-left  { grid-area: image; }
        .hero-copy  { 
          grid-area: copy; 
          align-self:start; 
          justify-self:end; 
          max-width: 56ch; 
          padding-top: 12px; 
        }
        .hero-ctas  { display:flex; gap:16px; margin-top:16px; }
        .hero-left img{ display:block; width:100%; height:100vh; object-fit:cover; border-radius:0; }

        /* Desktop nav layout */
        .hero-menu-btn{ display:none; background:none; border:1px solid var(--border); padding:8px 12px; border-radius:8px; color:var(--text); cursor:pointer; }
        .hero-links{ list-style:none; display:flex; gap:28px; margin:0; padding:0; align-items:center; }
        .hero-links li{ margin:0; }

        /* Mobiel: hamburger bovenaan, daarna image, dan copy met extra ruimte */
        @media (max-width: 920px){
          .hero-shell{
            grid-template-columns: 1fr;
            grid-template-areas:
              "nav"
              "image"
              "copy";
          }
          .hero-nav{ 
            width:100%; 
            justify-self:center; /* <-- hier centreer je de nav container in mobiel */
            align-items:center; 
            justify-content:center; /* centreert contents binnen de nav */
            padding:12px 16px; 
          }
          .hero-menu-btn{ display:inline-flex; }
          .hero-links{ display:none; }
          .hero-nav.open .hero-links{
            display:flex; flex-direction:column; align-items:center; gap:10px; width:100%; margin-top:12px;
            background: var(--bg-alt); border:1px solid var(--border); border-radius:12px; padding:12px;
          }
          .hero-left img{ height:58vh; }
          .hero-copy{ justify-self:start; padding: 16px 20px 28px; max-width: 65ch; }
          .hero-ctas{ margin-top: 18px; }
        }
      `}</style>
        </section>
    );
}