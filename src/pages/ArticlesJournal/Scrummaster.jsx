import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";

export default function Scrummaster() {
    const base = "/journal/klm-pushback";

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: "Van vliegtuigsleper tot Scrum Master",
                text: "Lees mijn verhaal van platform naar productteam.",
                url: window.location.href,
            }).catch((err) =>
                console.error("Delen geannuleerd of mislukt:", err)
            );
        } else {
            alert("Delen wordt niet ondersteund in deze browser. Kopieer de URL handmatig.");
        }
    };

    return (
        <section id="article-scrummaster" className="section section-alt">
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
                            alt="KLM — vliegtuigsleper/pushback op het platform"
                            width="1200"
                            height="630"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </picture>
                </figure>

                {/* Header */}
                <header className="story-header">
                    <h1>Van vliegtuigsleper tot Scrum&nbsp;Master</h1>
                    <p className="small meta">
                        Gepubliceerd op <time dateTime="2025-09-01">1 september 2025</time> • ~4–5 min lezen
                    </p>
                </header>

                {/* Body */}
                <article className="story-body card">
                    <p>
                        Na mijn remigratie uit München en een scheiding startte ik bij de gemeente Amsterdam
                        als callcentermedewerker bij DWI. Daar leerde ik omgaan met lastige situaties en
                        ontdekte ik mijn talent voor communicatie. In mijn vrije tijd maakte ik samen met
                        collega’s een personeelsblad, dat zo populair werd dat ik promoveerde naar interne
                        communicatie. Mijn opdracht: 16.000 collega’s actief krijgen op het intranet – mijn
                        eerste ervaring met organisatiebreed veranderen en transparant werken.
                    </p>

                    <hr className="rule" />

                    <h2>Op het platform: ritme, signalen en veiligheid</h2>
                    <p>
                        Toen het combineren van werk en opvang als alleenstaande moeder te zwaar werd, koos ik
                        voor flexibel werk bij KLM. Ik werkte als grondstewardess en bagagemedewerker en werd
                        tijdens corona geselecteerd voor de docusoap <em>KL2020 Terug in de Lucht</em>, naast
                        CEO Pieter Elbers. Uiteindelijk rolde ik de driejarige opleiding in tot vliegtuigsleper
                        en pushback tugger – een rol waarin samenwerking, communicatie en veiligheid cruciaal zijn.
                    </p>
                    <p>
                        Op het platform draait alles om korte, duidelijke signalen en strakke checks. Geen vage
                        halfslachtige handgebaren: je weet wie wanneer wat doet. Dat leerde me hoe belangrijk
                        korte feedbackloops en heldere afspraken zijn – precies de kern van Scrum.
                    </p>

                    <hr className="rule" />

                    <h2>Van platform naar productteam</h2>
                    <p>
                        Na jaren in ploegendiensten werd het tijd voor rust, regelmaat en meer vrijheid! Mijn achtergrond
                        als grafisch vormgever en webdesigner leidde me terug naar IT. Via Equals, een vrouwennetwerk
                        dat vrouwen in tech ondersteunt, kwam ik in contact met Brunel en behaalde ik mijn
                        Scrum-certificaat.
                    </p>
                    <p>
                        Ik begon met vliegtuigen achteruit duwen. Nu help ik teams vooruit.
                        De overstap van platform naar productteam lijkt groot, maar de kern is hetzelfde gebleven:
                        samenwerken onder druk, helder communiceren en elke dag beter willen worden.
                        Alleen de headset is verruild voor een scrumboard, en dat voelt net zo spannend.
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
        .back-link {display:inline-block;margin:14px 0 8px;text-decoration:none;color: var(--accent);}
        .back-link:hover {text-decoration:underline;}

        .article-container {max-width:72rem;margin:0 auto;padding:0 clamp(16px,3vw,48px);}

        .story-cover {margin:8px auto 16px;max-width:68ch;}
        .story-cover img {display:block;width:100%;border-radius:14px;object-fit:cover;}

        .story-header {text-align:center;margin-bottom:12px;}
        .story-header h1 {margin:8px 0 6px;line-height:1.15;}
        .meta {margin:0;color:var(--muted);}

        .story-body {
          max-width:68ch;
          margin:0 auto;
          padding:clamp(16px,2.2vw,24px);
          border:1px solid var(--border);
          border-radius:14px;
          background:var(--bg-alt);
          box-shadow:var(--shadow);
        }
        .story-body p {margin:0 0 12px;line-height:1.68;}
        .story-body h2 {margin:18px 0 10px;}
        .rule {height:1px;background:var(--border);margin:14px 0;}

        .story-footer {text-align:center;margin-top:18px;}
        .socials {
          display:flex;
          justify-content:center;
          gap:20px;
          font-size:1.8rem;
          margin-top:12px;
        }
        .socials a, .share-btn {
          color:var(--muted);
          background:none;
          border:none;
          cursor:pointer;
          transition:color .2s ease, transform .2s ease;
        }
        .socials a:hover, .share-btn:hover {
          color:var(--accent);
          transform:translateY(-2px);
        }
      `}</style>
        </section>
    );
}