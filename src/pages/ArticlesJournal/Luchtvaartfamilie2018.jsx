import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";

export default function Luchtvaartfamilie2018() {
    const base = "/journal/luchtvaartfamilie2018";

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "Luchtvaartfamilies — Deel 3 (2018)",
                    text: "Generaties verbonden door een passie voor de luchtvaart.",
                    url: window.location.href,
                })
                .catch((err) => console.error("Delen geannuleerd of mislukt:", err));
        } else {
            alert("Delen wordt niet ondersteund in deze browser. Kopieer de URL handmatig.");
        }
    };

    return (
        <section id="luchtvaartfamilie2018" className="section section-alt">
            <div className="container article-container">
                <Link to="/#journal" className="back-link">
                    ← Terug naar journal
                </Link>

                {/* Cover */}
                <figure className="story-cover">
                    <picture>
                        <source
                            type="image/avif"
                            srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w, ${base}-1200w.avif 1200w`}
                            sizes="(max-width: 920px) 100vw, 1200px"
                        />
                        <source
                            type="image/webp"
                            srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w, ${base}-1200w.webp 1200w`}
                            sizes="(max-width: 920px) 100vw, 1200px"
                        />
                        <img
                            src={`${base}-800w.webp`}
                            width="1200"
                            height="630"
                            alt="Luchtvaartfamilies – Deel 3"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </picture>
                </figure>

                {/* Header */}
                <header className="story-header">
                    <h1>Luchtvaartfamilies – Interview Up in the Sky</h1>
                    <p className="small meta">
                        Gepubliceerd op <time dateTime="2018-02-18">18 februari 2018</time> • Longread
                    </p>
                </header>

                {/* Body */}
                <article className="story-body card">
                    <p>
                        Het is voor velen een sprookje: de vlieger die een stewardess ontmoet. Deel 3 van de serie{" "}
                        <em>Luchtvaartfamilies</em> gaat over dat sprookje. Ondanks een scheiding van een Lufthansa-piloot
                        blijft luchtvaart een centrale rol spelen in mijn leven, zeker sinds mijn relatie met Maxim Staal,
                        KLM-copiloot op de Boeing 777/787.
                    </p>
                    <p>
                        Het originele interview verscheen in 2018 op Up in the Sky.{" "}
                        <a
                            href="https://www.upinthesky.nl/2018/02/18/luchtvaartfamilies-deel-3-longread/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Lees het hele artikel hier
                        </a>
                        .
                    </p>
                </article>

                {/* Footer */}
                <footer className="story-footer">
                    <div className="socials">
                        <a
                            href="https://www.linkedin.com/in/manonkeeman/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://substack.com/@manonkeeman"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Substack"
                        >
                            <SiSubstack />
                        </a>
                        <a
                            href="https://medium.com/@manonkeeman"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Medium"
                        >
                            <FaMedium />
                        </a>
                        <button
                            onClick={handleShare}
                            className="share-btn"
                            aria-label="Deel dit artikel"
                            title="Deel dit artikel"
                        >
                            <FiShare />
                        </button>
                    </div>
                </footer>
            </div>

            <style>{`
        .back-link { display:inline-block; margin:14px 0 8px; text-decoration:none; color:var(--accent); }
        .back-link:hover { text-decoration:underline; }

        .article-container { max-width:72rem; margin:0 auto; padding:0 clamp(16px,3vw,48px); }

        .story-cover { margin:8px auto 16px; max-width:68ch; border-radius:14px; overflow:hidden; }
        .story-cover img { display:block; width:100%; object-fit:cover; }

        .story-header { text-align:center; margin-bottom:12px; }
        .story-header h1 { margin:8px 0 6px; line-height:1.15; }
        .meta { margin:0; color:var(--muted); }

        .story-body {
          max-width:68ch;
          margin:0 auto;
          padding:clamp(16px,2.2vw,24px);
          border:1px solid var(--border);
          border-radius:14px;
          background:var(--bg-alt);
          box-shadow:var(--shadow);
        }
        .story-body p { margin:0 0 12px; line-height:1.68; }
        .story-body a { color:var(--accent); text-decoration:underline; }

        .story-footer { text-align:center; margin-top:18px; }
        .socials {
          display:flex;
          justify-content:center;
          gap:20px;
          font-size:1.8rem;
          margin-top:12px;
        }
        .socials a,.share-btn {
          color:var(--muted);
          background:none;
          border:none;
          cursor:pointer;
          transition:color .2s ease, transform .2s ease;
        }
        .socials a:hover,.share-btn:hover { color:var(--accent); transform:translateY(-2px); }
      `}</style>
        </section>
    );
}