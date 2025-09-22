import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";

export default function DesignChaos() {
    const base = "/journal/Design-Chaos";

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "Over chaos, structuur, code en design.",
                    text: "Waarom structuur niet saai is, maar juist vrijheid geeft.",
                    url: window.location.href,
                })
                .catch((err) => console.error("Delen geannuleerd of mislukt:", err));
        } else {
            alert("Delen wordt niet ondersteund in deze browser. Kopieer de URL handmatig.");
        }
    };

    return (
        <section id="chaosdesign" className="section section-alt">
            <div className="container article-container">
                <Link to="/#journal" className="back-link">
                    ← Terug naar journal
                </Link>

                {/* Cover — exact dezelfde content-breedte als de body (68ch), mooie crop */}
                <figure className="story-cover">
                    <div className="media">
                        <picture>
                            <source
                                type="image/avif"
                                srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w, ${base}-1200w.avif 1200w`}
                                sizes="(max-width: 920px) 100vw, 68ch"
                            />
                            <source
                                type="image/webp"
                                srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w, ${base}-1200w.webp 1200w`}
                                sizes="(max-width: 920px) 100vw, 68ch"
                            />
                            <img
                                src={`${base}-800w.webp`}
                                alt="Abstracte visual: orde in chaos met grid en code"
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                            />
                        </picture>
                    </div>
                </figure>

                {/* Header */}
                <header className="story-header">
                    <h1>Waarom structuur niet saai is, maar juist vrijheid geeft</h1>
                    <p className="small meta">
                        Gepubliceerd op <time dateTime="2025-08-24">24 augustus 2025</time> • ~4–5 min lezen
                    </p>
                </header>

                {/* Body */}
                <article className="story-body card">
                    <p>
                        Ik heb een zwak voor chaos. Niet de grote apocalyptische chaos van rampenfilms, maar de alledaagse versie:
                        te veel tabbladen open, drie halfafgewerkte schetsen op tafel, een bug in je code die je pas om 23:47
                        ontdekt, en oh ja — een mail van je schoonmoeder die al drie dagen onbeantwoord in je inbox hangt.
                    </p>

                    <p>
                        Chaos voelt levendig. Het is bruisend, creatief, soms zelfs comfortabel. Maar er komt een punt waarop
                        chaos omslaat in ruis. Dan zit je niet meer in de flow, maar ploeter je door een moeras van “waar was ik
                        ook alweer mee bezig?”. Precies daar begint mijn liefde voor structuur.
                    </p>

                    <p>
                        Niet de kille, Excel-achtige structuur die alles dooddrukt, maar de soort die ademruimte geeft. Zoals
                        ritme in muziek: je hoort de cadans, en daarbinnen kun je improviseren.
                    </p>

                    <p>
                        Bij KLM leerde ik dat je zonder duidelijke afspraken letterlijk niet van de grond komt. Probeer maar eens
                        een Boeing 777 achteruit te duwen met zes ego’s en nul overleg. Bij de gemeente ontdekte ik dat
                        communicatie zonder structuur voelt als een vergadering waar iedereen tegelijk praat — veel energie, nul
                        resultaat.
                    </p>

                    <p>
                        En nu, als junior developer, zie ik dat code eigenlijk hetzelfde is. Een function hier, een class daar,
                        en ineens ontstaat er een patroon. Waar eerst een muur van onbegrijpelijke brackets stond, zie je orde:
                        een systeem dat werkt, uitbreidbaar is, en zelfs elegant kan zijn.
                    </p>

                    <p>
                        Het grappige is: structuur geeft vrijheid. Een goed grid in design laat ruimte voor speelsheid. Een nette
                        codebase maakt experimenteren makkelijker. Het is als een typemachine met regelafstand: juist doordat
                        er lijnen zijn, kun je losgaan met woorden.
                    </p>

                    <p>
                        Ik moest dat leren, want jarenlang dacht ik dat structuur me zou opsluiten. Dat regels beperkend waren.
                        Maar de echte beperking zat in het eindeloze zoeken — het telkens opnieuw beginnen omdat ik geen
                        fundament had.
                    </p>

                    <p>
                        Structuur is geen gevangenis. Het is een trampoline. Je springt hoger, je landt zachter, en je durft meer
                        omdat je weet dat het vangnet klopt.
                    </p>

                    <p>
                        Misschien klinkt dit allemaal heel stoer, maar eerlijk? Ik stuntel nog vaak zat. Ik open twintig tabs,
                        vergeet een puntkomma, of ontwerp iets wat verdacht veel lijkt op een PowerPoint van groep acht. Maar dat
                        is oké. Chaos hoort erbij — het is de brandstof. Structuur is niet de rem; het is hoe je vaart maakt.
                    </p>
                </article>

                {/* Footer: socials + share */}
                <footer className="story-footer">
                    <div className="socials">
                        <a
                            href="https://www.linkedin.com/in/manonkeeman/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            title="Bekijk op LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://substack.com/@manonkeeman"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Substack"
                            title="Volg op Substack"
                        >
                            <SiSubstack />
                        </a>
                        <a
                            href="https://medium.com/@manonkeeman"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Medium"
                            title="Lees op Medium"
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
        .back-link{display:inline-block;margin:14px 0 8px;text-decoration:none;color:var(--accent);}
        .back-link:hover{text-decoration:underline;}

        .article-container{max-width:72rem;margin:0 auto;padding:0 clamp(16px,3vw,48px);}

        /* Cover exact gelijk aan body-breedte, nette crop */
        .story-cover{margin:8px auto 16px;max-width:68ch;border-radius:14px;overflow:hidden;}
        .story-cover .media{position:relative;aspect-ratio:16/9;}
        .story-cover picture,
        .story-cover img{display:block;width:100%;height:100%;object-fit:cover;}

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
        .rule{height:1px;background:var(--border);margin:14px 0;}

        .story-footer{text-align:center;margin-top:18px;}
        .socials{
          display:flex;
          justify-content:center;
          gap:20px;
          font-size:1.8rem;
          margin-top:12px;
        }
        .socials a,.share-btn{
          color:var(--muted);
          background:none;border:none;cursor:pointer;
          transition:color .2s ease, transform .2s ease;
        }
        .socials a:hover,.share-btn:hover{color:var(--accent);transform:translateY(-2px);}

        @media (max-width:920px){
          .story-cover{max-width:100%;}
          .story-body{max-width:100%;}
        }
      `}</style>
        </section>
    );
}