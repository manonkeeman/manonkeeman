import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";

export default function StorytellingForDevelopers() {
    const base = "/journal/storytelling";

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
                    <h1>Storytelling voor Developers</h1>
                    <p className="small meta">
                        Gepubliceerd op <time dateTime="2025-09-14">14 september 2025</time> · ~5 min lezen
                    </p>
                </header>

                {/* Body */}
                <article className="story-body card">
                    <p>
                        Veel developers denken dat storytelling vooral iets is voor marketeers of schrijvers. Toch is het ook in IT
                        een krachtige skill. Of je nu een feature uitlegt aan een product owner, documentatie schrijft of een
                        presentatie geeft op een hackathon: jouw boodschap blijft pas echt hangen als je er een verhaal van maakt.
                    </p>
                    <p>
                        Voor degene die—zoals ik—nog nooit van een hackathon had gehoord: het zijn evenementen (meestal 24–48 uur)
                        waarin teams in korte tijd samenwerken om een idee uit te werken tot een werkend prototype of demo. Er is
                        vaak een thema zoals “bedenk een app die duurzaam reizen stimuleert”. Iedereen werkt dag en nacht (met veel
                        pizza en koffie) aan design, code en pitches. Aan het eind presenteer je aan een jury.
                    </p>

                    <h2>1. Code is logica, maar mensen denken in verhalen</h2>
                    <p>
                        Developers denken in structuren: functies, classes, API’s. De meeste mensen buiten tech niet. Verhalen werken
                        als een brug: ze vertalen abstracte code naar concrete waarde. Een goed verhaal legt niet alle technische
                        details uit, maar de impact: <em>wat</em> lost dit op, voor wie, en waarom maakt het uit?
                    </p>

                    <h2>2. User stories zijn eigenlijk mini-verhalen</h2>
                    <p>
                        Agile en Scrum gebruiken al storytelling, vaak zonder dat we het zo noemen. Een user story —
                        <em>“Als gebruiker wil ik X zodat Y”</em> — is in feite een micro-verhaal. Het heeft een hoofdpersoon (de
                        user), een behoefte (het probleem) en een oplossing (de feature). Simpel = onthouden = focus.
                    </p>

                    <h2>3. Storytelling in je dagelijkse werk</h2>
                    <ul>
                        <li>
                            <strong>Code reviews:</strong> Leg niet alleen uit <em>wat</em> je hebt aangepast, maar <em>waarom</em>.
                        </li>
                        <li>
                            <strong>Presentaties:</strong> Begin met een gebruikersvoorbeeld i.p.v. direct met technische details.
                        </li>
                        <li>
                            <strong>Documentatie:</strong> Schrijf scenario’s. “Stel, je bent nieuw en wilt in 5 minuten draaien—zo doe je dat.”
                        </li>
                    </ul>

                    <h2>4. Zo word je beter</h2>
                    <ul>
                        <li><strong>Ken je publiek.</strong> Praat met een designer anders dan met een CTO.</li>
                        <li><strong>Gebruik metaforen.</strong> API ≈ restaurantmenu, database ≈ archiefkast.</li>
                        <li><strong>Hou het kort.</strong> Een scherpe anekdote is vaak genoeg.</li>
                        <li><strong>Oefen.</strong> Deel mini-verhalen in stand-ups of retrospectives en merk het verschil.</li>
                    </ul>

                    <h2>5. De bonus: jij valt op</h2>
                    <p>
                        In een wereld waar veel developers vooral praten in code, val jij op door helder en menselijk te
                        communiceren. Storytelling maakt je niet alleen een betere teamplayer, maar ook de brug tussen techniek en
                        business—vaak de route naar lead, architect of Scrum Master.
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