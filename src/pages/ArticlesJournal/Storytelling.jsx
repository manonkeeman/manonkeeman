import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";

export default function StorytellingForDevelopers() {
    const base = "/journal/storytelling-it";

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "Storytelling voor Developers",
                    text: "Waarom jouw code ook een verhaal vertelt.",
                    url: window.location.href,
                })
                .catch((err) => console.error("Delen geannuleerd of mislukt:", err));
        } else {
            alert("Delen wordt niet ondersteund in deze browser. Kopieer de URL handmatig.");
        }
    };

    return (
        <section id="storytelling" className="section section-alt">
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
                            alt="Storytelling voor developers"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </picture>
                </figure>

                {/* Header */}
                <header className="story-header">
                    <h1>Storytelling voor Developers, een vergeten superkracht</h1>
                    <p className="small meta">
                        Gepubliceerd op <time dateTime="2025-09-14">14 september 2025</time> · ~5 min lezen
                    </p>
                </header>

                {/* Body */}
                <article className="story-body card">
                    <p>
                        De meeste developers zien storytelling als iets voor marketeers of schrijvers met een MacBook in een koffiebar.
                        Maar vergis je niet: ook in IT is het een gamechanger. Of je nu een feature uitlegt aan een product owner,
                        documentatie schrijft voor je team of je code pitcht tijdens een hackathon—het verschil zit hem niet in de logica,
                        maar in het verhaal dat je vertelt.
                    </p>
                    <p>
                        En over hackathons gesproken: toen ik er voor het eerst van hoorde dacht ik dat het iets met bijlen was.
                        Het bleek een soort creatieve marathon van 24 tot 48 uur,
                        waarin je met een team non-stop bouwt aan een prototype rond een thema.
                        Denk: “bedenk een app die duurzaam reizen stimuleert.” Verwacht slapeloze nachten,
                        teveel pizza en een zee van lege koffiebekers—maar ook een zaal vol energie.
                        En op het einde: een pitch voor de jury alsof je leven er vanaf hangt.

                    </p>

                    <h2>1. Code is logica, maar mensen denken in verhalen</h2>
                    <p>
                        Jij denkt in functies, classes en API’s. De rest van de wereld niet.
                        Een goed verhaal is de brug: het legt niet alle technische details bloot,
                        maar wel<em>waarom het uitmaakt.</em> Wat lost dit op? Voor wie?
                        Waarom is dit waardevol?

                    </p>

                    <h2>2. User stories zijn eigenlijk mini-verhalen</h2>
                    <p>
                        Agile doet het stiekem al.<em>“Als gebruiker wil ik X zodat Y”</em>
                        Hoofdpersoon: de user. Conflict: het probleem. Oplossing: de feature.
                        Dat is een microverhaal. Korte verhalen = betere focus = makkelijker onthouden.
                    </p>

                    <h2>3. Storytelling in je dagelijkse werk</h2>
                    <ul>
                        <li>
                            <strong>Code reviews:</strong> vertel niet alleen <em>wat</em> je hebt aangepast, maar <em>waarom</em>.
                        </li>
                        <li>
                            <strong>Presentaties:</strong> Begin met een herkenbaar voorbeeld in plaats van een diagram vol pijltjes.
                        </li>
                        <li>
                            <strong>Documentatie:</strong> Schrijf scenario’s. “Stel, je bent nieuw en wilt in 5 minuten draaien; zo doe je dat.”
                        </li>
                    </ul>

                    <h2>4. Zo word je beter</h2>
                    <ul>
                        <li><strong>Ken je publiek.</strong> Een designer denkt anders dan een CTO.</li>
                        <li><strong>Gebruik metaforen.</strong> API = restaurantmenu. Database = archiefkast.</li>
                        <li><strong>Hou het scherp.</strong> Eén anekdote zegt vaak meer dan tien slides.</li>
                        <li><strong>Oefen.</strong> Gooi mini-verhalen in een stand-up en kijk hoe anders mensen reageren.</li>
                    </ul>

                    <h2>5. De bonus: jij valt op</h2>
                    <p>
                        In een wereld waar veel developers vooral praten in code, val jij op als je helder en menselijk communiceert.
                        Storytelling maakt je een sterkere teamgenoot en laat zien dat je meer brengt dan alleen technische kennis.
                        Voor mij is het nog oefenen, maar ik merk nu al dat een verhaal deuren opent die een droge uitleg gesloten laat.
                        Het is geen eindpunt, maar een vaardigheid die me meeneem in mijn groei als developer,
                        en wie weet straks ook in een rol als Scrum Master.
                    </p>
                </article>

                {/* Footer: socials + share */}
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

        .story-cover{margin:8px auto 16px;max-width:68ch;}
        .story-cover img{display:block;width:100%;border-radius:14px;object-fit:cover;}

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
        .story-body li{margin:0 0 8px;}
        .rule{height:1px;background:var(--border);margin:14px 0;}

        .story-footer{text-align:center;margin-top:18px;}
        .socials{
          display:flex;
          justify-content:center;
          gap:20px;
          font-size:1.8rem; /* icon-grootte gelijk */
          margin-top:12px;
        }
        .socials a,.share-btn{
          color:var(--muted);
          background:none;border:none;cursor:pointer;
          transition:color .2s ease, transform .2s ease;
        }
        .socials a:hover,.share-btn:hover{color:var(--accent);transform:translateY(-2px);}
      `}</style>
        </section>
    );
}