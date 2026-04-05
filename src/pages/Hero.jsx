import { memo } from "react";

function Hero() {
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
                    <h1>- Hi! I'm Manon -</h1>
                    <h3>I find the pattern in the noise then build something from it.</h3>
                    <p>
                        Give me a tangle of ideas and I'll map the system underneath. I work at the intersection of
                        design, code, and language: translating complex problems into clear structures, and clear
                        structures into things that actually work. I think in systems, build in layers, and tell the
                        story along the way.
                    </p>
                    <p className="small">Full Stack Developer • Systems Thinker • Designer • Storyteller • Builder</p>
                    <div className="hero-ctas">
                        <a href="/#portfolio" className="btn btn-primary">Projects</a>
                        <a href="/#journal" className="btn btn-outline" data-arrow>Journal</a>
                    </div>
                </div>
            </div>

            {/* Styles (zonder hero-nav / mobile menu) */}
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

        @media (max-width: 920px){
          .hero-shell{
            grid-template-columns: 1fr;
            grid-template-areas: "image" "copy";
          }
          .hero-left img{ height:58vh; }
          .hero-copy{ justify-self:start; padding:16px 20px 28px; max-width:65ch; }
          .hero-ctas{ margin-top:18px; }
        }
      `}</style>
        </section>
    );
}

export default memo(Hero);