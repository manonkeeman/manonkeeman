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
                title: "Van vliegtuigsleper tot Full Stack Developer",
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
                            alt="KLM platform, pushback tugger aan het werk"
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
                    <h1>Van vliegtuigsleper tot Full Stack&nbsp;Developer</h1>
                    <p className="small meta">
                        Gepubliceerd op <time dateTime="2025-09-01">1 september 2025</time> • ~5 min lezen
                    </p>
                </header>

                {/* Body */}
                <article className="story-body card">
                    <p>
                        Mensen denken soms dat mijn loopbaan een kronkelpad is. KLM, gemeente Amsterdam,
                        grafisch ontwerp, en nu code. Maar als ik terugkijk, zie ik één rechte lijn:
                        ik heb altijd systemen willen begrijpen. En als ik ze begrijp, wil ik ze bouwen.
                    </p>

                    <hr className="rule" />

                    <h2>Amsterdam: communicatie als systeem</h2>
                    <p>
                        Na mijn remigratie uit München startte ik bij de gemeente Amsterdam als
                        callcentermedewerker bij DWI. Daar ontdekte ik al snel dat communicatie zelf
                        een systeem is: wie zegt wat, via welk kanaal, met welk effect. In mijn vrije
                        tijd maakte ik met collega's een personeelsblad dat zo goed aansloeg dat ik
                        doorgroeide naar interne communicatie. Mijn opdracht: 16.000 collega's actief
                        krijgen op het intranet. Mijn eerste grote project op schaal, en ik was
                        verslaafd aan de structuur die eronder lag.
                    </p>

                    <hr className="rule" />

                    <h2>Op het platform: signalen, systemen en veiligheid</h2>
                    <p>
                        Toen het combineren van werk en opvang als alleenstaande moeder te zwaar werd,
                        koos ik voor flexibel werk bij KLM. Ik werkte als grondstewardess en
                        bagagemedewerker, en werd tijdens corona geselecteerd voor de docusoap{" "}
                        <em>KL2020 Terug in de Lucht</em>, naast CEO Pieter Elbers. Uiteindelijk
                        rolde ik de driejarige opleiding in tot vliegtuigsleper en pushback tugger.
                    </p>
                    <p>
                        Op het platform draait alles om precisie. Geen vage halfslachtige gebaren:
                        je weet exact wie, wanneer, wat doet. Korte checks, heldere signalen,
                        voortdurende feedback. Een vliegtuig van 80 ton achteruit rijden is geen
                        kwestie van kracht, maar van communicatie en timing. Dat leerde me hoe
                        je complexe processen beheerst: door ze op te splitsen in kleine,
                        controleerbare stappen.
                    </p>

                    <hr className="rule" />

                    <h2>Van systemen denken naar systemen bouwen</h2>
                    <p>
                        Na jaren ploegendiensten, vroege ochtenden en late nachten op de tarmac
                        was het tijd voor iets anders. Niet minder intensief, wel met meer controle
                        over mijn eigen tijd. Ik had altijd al websites gebouwd en als grafisch
                        vormgever gewerkt, maar nu wilde ik dieper gaan. Wat zit er eigenlijk
                        achter een webpagina? Hoe praat een frontend met een backend? Hoe zorg je
                        dat data betrouwbaar stroomt van database naar scherm?
                    </p>
                    <p>
                        Via Equals, een netwerk dat vrouwen in tech ondersteunt, en Brunel startte
                        ik een intensieve opleiding Full Stack Development. React, Spring Boot,
                        databases, REST API's, Git. Het klikte meteen. Niet omdat het makkelijk was,
                        maar omdat de manier van denken vertrouwd aanvoelde: een systeem analyseren,
                        de lagen begrijpen, weten hoe de onderdelen met elkaar praten. Precies wat
                        ik op het platform had geleerd, maar nu in code.
                    </p>
                    <p>
                        Bugs debuggen is eigenlijk niet zo anders dan een storing op het platform
                        oplossen. Je kijkt waar het systeem afwijkt van het verwachte gedrag,
                        werkt terug naar de bron en herstelt. Methodisch, rustig, stap voor stap.
                    </p>

                    <hr className="rule" />

                    <h2>Nu</h2>
                    <p>
                        Ik begon met vliegtuigen achteruit duwen. Nu bouw ik systemen vooruit.
                        De overstap van platform naar productteam lijkt groot, maar de kern is
                        hetzelfde gebleven: begrijpen hoe iets werkt, weten waar je moet ingrijpen,
                        en elke dag iets scherpere vragen stellen. Alleen de headset is verruild
                        voor een keyboard, en dat voelt precies zo spannend.
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
        .story-body p {margin:0 0 14px;line-height:1.72;}
        .story-body h2 {margin:22px 0 10px;}
        .rule {height:1px;background:var(--border);margin:18px 0;}

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