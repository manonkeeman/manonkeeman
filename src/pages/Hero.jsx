import { useRef, useState } from "react";

export default function Hero() {
    const [mOpen, setMOpen] = useState(false);
    const hoverTimer = useRef(null);

    const openMenu = () => {
        if (hoverTimer.current) clearTimeout(hoverTimer.current);
        setMOpen(true);
    };
    const closeMenu = () => {
        if (hoverTimer.current) clearTimeout(hoverTimer.current);
        hoverTimer.current = setTimeout(() => setMOpen(false), 120);
    };

    return (
        <section id="home" style={{ padding: 0, margin: 0 }}>
            <div className="hero-shell">
                {/* NAV */}
                <nav className="hero-nav" aria-label="Primaire navigatie">
                    {/* Desktop */}
                    <ul className="hero-links-desktop">
                        <li><a href="/#about" className="nav-link">About</a></li>
                        <li><a href="/#portfolio" className="nav-link">Portfolio</a></li>
                        <li><a href="/#journal" className="nav-link">Journal</a></li>
                        <li><a href="/#contact" className="btn btn-primary" data-arrow>Contact</a></li>
                    </ul>

                    {/* Mobile */}
                    <div
                        className="hero-menu-mobile"
                        onMouseEnter={openMenu}
                        onMouseLeave={closeMenu}
                    >
                        <button
                            className="hero-menu-btn"
                            aria-label="Open menu"
                            aria-expanded={mOpen}
                            aria-haspopup="true"
                            onClick={() => setMOpen(v => !v)}
                            onFocus={openMenu}
                            onBlur={closeMenu}
                        >
                            ☰
                        </button>

                        <ul
                            className={`hero-links-mobile ${mOpen ? "show" : ""}`}
                            role="menu"
                            aria-label="Hoofdmenu"
                        >
                            <li role="none">
                                <a role="menuitem" href="/#about" className="nav-link" onClick={() => setMOpen(false)}>
                                    About
                                </a>
                            </li>
                            <li role="none">
                                <a role="menuitem" href="/#portfolio" className="nav-link" onClick={() => setMOpen(false)}>
                                    Portfolio
                                </a>
                            </li>
                            <li role="none">
                                <a role="menuitem" href="/#journal" className="nav-link" onClick={() => setMOpen(false)}>
                                    Journal
                                </a>
                            </li>
                            <li role="none">
                                <a role="menuitem" href="/#contact" className="nav-link" onClick={() => setMOpen(false)}>
                                    Samenwerken
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

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
                            alt="Manon Keeman – full stack developer, scrum master & storyteller"
                        />
                    </picture>
                </div>

                {/* TEKST */}
                <div className="hero-copy">
                    <h1>- Hi! Ik ben Manon -</h1>
                    <h3>Met design, code en nieuwsgierigheid maak ik orde uit chaos.</h3>
                    <p>
                        Geef me een wirwar van ideeën en ik zie er het patroon in. Met design en code leg ik lijnen,
                        alsof ik chaos in slow motion stilzet en opnieuw orden. Ik hou van samenwerken: de energie van
                        een team dat scherp blijft, elkaar optilt en samen resultaat neerzet. Daar kom ik tot mijn recht.
                    </p>
                    <p className="small">Full Stack Developer • Scrum Master • Storyteller</p>
                    <div className="hero-ctas">
                        <a href="/#portfolio" className="btn btn-primary">Projecten</a>
                        <a href="/#journal" className="btn btn-outline" data-arrow>Journal</a>
                    </div>
                </div>
            </div>

            {/* Styles */}
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
        .hero-ctas{ display:flex; gap:16px; margin-top:16px; }

        .hero-nav{
          position: absolute;
          top: 0; left: 0; right: 0;
          z-index: 10;
          display: flex;
          justify-content: flex-end;
          padding: 20px clamp(16px, 3vw, 48px);
          pointer-events: none;
        }
        .hero-links-desktop{
          pointer-events: auto;
          display:flex; gap:28px; list-style:none; margin:0; padding:0; align-items:center;
        }

        .hero-menu-mobile{ display:none; }

        @media (max-width: 920px){
          .hero-shell{
            grid-template-columns: 1fr;
            grid-template-areas:
              "image"
              "copy";
          }

          .hero-links-desktop{ display:none; }

          .hero-nav{
            position: static;
            pointer-events: auto;
            padding: 0;
          }
          .hero-menu-mobile{
            display:block;
            position: fixed;
            top: 10px;
            right: 12px;
            z-index: 1000;
          }
          .hero-menu-btn{
            background:none;
            border:1px solid var(--border);
            padding:8px 12px;
            border-radius:8px;
            color:var(--text);
            cursor:pointer;
            line-height:1;
          }

          .hero-links-mobile{
            position: fixed;
            top: 56px;
            right: 12px;
            background: #000;
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 8px;
            list-style: none;
            display: flex; flex-direction: column; gap: 6px;
            min-width: 180px;
            font-size: 11px;
            line-height: 1.25;

            max-height: 0;
            opacity: 0;
            overflow: hidden;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(-6px);
            transition:
              max-height .28s ease,
              opacity .22s ease,
              transform .22s ease,
              visibility 0s linear .28s;
          }
          .hero-links-mobile.show{
            max-height: 300px;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
          }

          .hero-left img{ height:58vh; }
          .hero-copy{ justify-self:start; padding: 16px 20px 28px; max-width: 65ch; }
          .hero-ctas{ margin-top: 18px; }
        }
      `}</style>
        </section>
    );
}