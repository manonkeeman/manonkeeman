import heroImg from "../assets/Pics/ManonFront.png";

export default function Hero() {
    return (
        <section id="home" style={{ padding: 0, margin: 0 }}>
            <div className="hero-shell">
                <div className="hero-left">
                    <img src={heroImg} alt="Hero visual" />
                </div>

                <div className="hero-right">
                    <nav className="hero-nav" aria-label="Primaire navigatie">
                        <a href="#about" className="nav-link">About</a>
                        <a href="#portfolio" className="nav-link">Portfolio</a>
                        <a href="#journal" className="nav-link">Journal</a>
                        <a href="#contact" className="btn btn-primary" data-arrow="true">Samenwerken</a>
                    </nav>

                    <div className="hero-copy spaced">
                        <h1>- Hi! Ik ben Manon -</h1>
                        <h3>Ik maak orde in de chaos — met design, code en een flinke dosis nieuwsgierigheid.</h3>
                        <p>
                            Techniek zonder verhaal is kaal.
                            Verhalen zonder structuur waaien weg.
                            Ik leer, probeer, verfijn.
                            Met mijn ervaring en teamkracht bouwen we aan impact.</p>
                        <p className="small">Full Stack Developer • Scrum Master • Storyteller</p>
                        <div style={{ display: "flex", gap: 16 }}>
                            <a href="#portfolio" className="btn btn-primary" data-arrow="true">Projecten</a>
                            <a href="#journal" className="btn btn-outline" data-arrow="true">Journal</a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        /* Full-bleed grid zonder container */
        .hero-shell {
          width: 100vw;
          display: grid;
          grid-template-columns: 1fr minmax(420px, 48vw);
          min-height: 100vh;
        }

        .hero-left img {
          display: block;
          width: 100%;
          height: 100vh;
          object-fit: cover;
          border-radius: 0;
        }

        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 28px clamp(20px, 3vw, 48px);
          gap: 40px; /* meer ruimte tussen nav en hero-copy */
        }

        .hero-nav {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 28px;
          justify-content: flex-end;
        }

        .nav-link {
          color: var(--text);
          text-decoration: none;
        }
        .nav-link:hover,
        .nav-link:focus-visible {
          color: var(--accent);
          text-decoration: underline;
          text-decoration-color: var(--accent);
        }

        /* Spacing voor hero-copy */
        .hero-copy.spaced {
          /* Verschuif wat naar beneden */
          padding-top: 80px;
        }
        .hero-copy.spaced h1 {
          margin: 0 0 24px;
        }
        .hero-copy.spaced h3 {
          margin: 0 0 24px;
        }
        .hero-copy.spaced p {
          margin: 0 0 30px;
          line-height: 1.5;
        }

        .hero-copy p.small {
          margin: 0 0 30px;
        }

        @media (max-width: 920px) {
          .hero-shell {
            grid-template-columns: 1fr;
          }
          .hero-left img {
            height: 58vh;
          }
          .hero-right {
            align-items: flex-start;
            padding: 20px;
            gap: 30px;
          }
          .hero-nav {
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 16px;
          }
          .hero-copy.spaced {
            padding-top: 60px;
          }
        }
      `}</style>
        </section>
    );
}