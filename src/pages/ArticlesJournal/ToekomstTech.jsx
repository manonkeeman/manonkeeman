import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";

export default function ToekomstTech() {
    const base = "/journal/Typemachine-Toekomst";

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "De toekomst van tech",
                    text: "AI, remote werken en waarom creativiteit ons redt.",
                    url: window.location.href,
                })
                .catch((err) => console.error("Delen geannuleerd of mislukt:", err));
        } else {
            alert("Delen wordt niet ondersteund in deze browser. Kopieer de URL handmatig.");
        }
    };

    return (
        <section id="article-toekomsttech" className="section section-alt">
            <div className="container article-container">
                <Link to="/#journal" className="back-link">
                    ← Terug naar journal
                </Link>

                {/* Cover binnen de container en gelijk getrokken met body-breedte */}
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
                            alt="Abstracte tech-visual over AI, remote werken en creativiteit"
                            width="1200"
                            height="630"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </picture>
                </figure>

                <header className="story-header">
                    <h1>De toekomst van tech</h1>
                    <p className="small meta">
                        Gepubliceerd op <time dateTime="2025-09-22">22 september 2025</time> • ~5 min lezen
                    </p>
                </header>

                <article className="story-body card">
                    <p>
                        Toen ik bij de gemeente werkte, leerde ik dat communicatie soms net een callcenter was:
                        eindeloos herhalen, strak in het systeem, en tóch altijd chaos aan de lijn. Bij KLM ontdekte ik
                        dat een vliegtuig de lucht in slepen draait om ritme, samenwerking en duidelijke signalen. Nu,
                        als junior in IT, herken ik diezelfde dynamiek. Alleen zijn de vliegtuigen vervangen door code,
                        en de pushbacks door pull requests.
                    </p>

                    <p>
                        En dan heb je AI. Iedereen praat erover alsof het de nieuwe copiloot is die straks alles van je
                        overneemt. Maar eerlijk? AI is meer een stagiair die heel snel typt, maar waarvan je elke regel
                        nog moet dubbelchecken. Handig, maar als je hem loslaat, land je met je B787 in de sloot.
                    </p>

                    <hr className="rule" />

                    <h2>Remote werken: chaos in pyjama</h2>
                    <p>
                        De toekomst van werk lijkt remote. En dat betekent dat we niet langer vertrouwen op een
                        gezicht-tot-gezicht knikje bij het koffiezetapparaat. Je moet je werk zichtbaar maken, al is het
                        om 23:00 uur in je joggingbroek met een kat op je toetsenbord.
                    </p>
                    <p>
                        Tools als GitHub, Slack en Figma zijn niet alleen software; het zijn eigenlijk je nieuwe
                        collega’s. En net als met collega’s moet je leren hoe je ermee praat. Async communiceren is niet
                        “later reageren”, het is <em>slim genoeg schrijven</em> dat de ander geen tien vragen hoeft terug
                        te sturen.
                    </p>

                    <hr className="rule" />

                    <h2>Creativiteit als superpower</h2>
                    <p>
                        AI kan code genereren, teksten schrijven en zelfs design schetsen. Maar er is één ding dat het
                        niet kan: levenservaring combineren met verbeelding.
                    </p>
                    <p>
                        Jij, de mens achter de machine, ziet verbanden die een algoritme niet snapt. Je weet dat
                        structuur geen keurslijf is, maar een speelveld. Zoals een scrumbord je niet vastzet, maar
                        vrijheid geeft. Zoals een grid in design niet saai is, maar je de ruimte geeft om te spelen.
                    </p>
                    <p>
                        Creativiteit is niet de kers op de taart, het ís het deeg. Zonder dat valt alles uit elkaar.
                    </p>

                    <hr className="rule" />

                    <h2>Skills die blijven plakken</h2>
                    <p>In een toekomst vol AI en automatisering blijven een paar dingen goud waard:</p>
                    <ul>
                        <li><strong>Empathie.</strong> Kun je je verplaatsen in de gebruiker?</li>
                        <li><strong>Storytelling.</strong> Kun je uitleggen waarom jouw code ertoe doet?</li>
                        <li><strong>Ethiek.</strong> Durf je te vragen: wat betekent dit voor de mens?</li>
                        <li><strong>Levenswijsheid.</strong> Glimlachen om de omweg en zien dat die óók ergens heen leidt.</li>
                    </ul>

                    <p>
                        Soms voelt de toekomst eerlijk gezegd best beangstigend. AI die sneller schrijft dan ik kan denken,
                        banen die verdwijnen, systemen die slimmer lijken dan mensen. En we vragen ons af: waar gaat dit naartoe?
                        Maar angst en nieuwsgierigheid zijn vaak twee kanten van dezelfde munt. Ik kies voor nieuwsgierigheid.
                        Zolang ik blijf leren, spelen met code, schrijven alsof het mijn eigen boek is en lachen om mijn fouten,
                        blijf ik vooruit bewegen. Misschien niet in één rechte lijn, maar wél in een richting die klopt.
                    </p>
                </article>

                <footer className="story-footer">
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/manonkeeman/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://substack.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Substack">
                            <SiSubstack />
                        </a>
                        <a href="https://medium.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Medium">
                            <FaMedium />
                        </a>
                        <button onClick={handleShare} className="share-btn" aria-label="Deel dit artikel" title="Deel dit artikel">
                            <FiShare />
                        </button>
                    </div>
                </footer>
            </div>

            <style>{`
        .back-link{display:inline-block;margin:14px 0 8px;text-decoration:none;color:var(--accent);}
        .back-link:hover{text-decoration:underline;}

        .article-container{max-width:72rem;margin:0 auto;padding:0 clamp(16px,3vw,48px);}

        /* Cover gelijk aan body-breedte en gecentreerd */
        .story-cover{margin:8px auto 16px;max-width:68ch;}
        .story-cover picture,.story-cover img{
          display:block;width:100%;height:auto;border-radius:14px;object-fit:cover;
        }

        .story-header{text-align:center;margin-bottom:12px;}
        .story-header h1{margin:8px 0 6px;line-height:1.15;}
        .meta{margin:0;color:var(--muted);}

        .story-body{
          max-width:68ch;margin:0 auto;
          padding:clamp(16px,2.2vw,24px);
          border:1px solid var(--border);
          border-radius:14px;
          background:var(--bg-alt);
          box-shadow:var(--shadow);
        }
        .story-body p{margin:0 0 12px;line-height:1.68;}
        .story-body h2{margin:18px 0 10px;}
        .story-body ul{margin:0 0 12px 1.1rem;}
        .story-body li{margin:0 0 6px;}
        .rule{height:1px;background:var(--border);border:0;margin:14px 0;}

        .story-footer{text-align:center;margin-top:18px;}
        .socials{
          display:flex;justify-content:center;gap:20px;font-size:1.8rem;margin-top:12px;
        }
        .socials a,.share-btn{
          color:var(--muted);background:none;border:none;cursor:pointer;
          transition:color .2s ease, transform .2s ease;
        }
        .socials a:hover,.share-btn:hover{color:var(--accent);transform:translateY(-2px);}

        @media (max-width: 920px){
          .story-cover{max-width:100%;}
          .story-body{max-width:100%;}
        }
      `}</style>
        </section>
    );
}