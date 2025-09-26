import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";

export default function BoekArtikel() {
    const base = "/journal/cover365fragmenten";

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "365 fragmenten van wat er achterbleef en weer opnieuw begon",
                    text: "Het boek in wording: fragmenten uit een verleden die eerder absurd dan gewoon was.",
                    url: window.location.href,
                })
                .catch((err) => console.error("Delen geannuleerd of mislukt:", err));
        } else {
            alert("Delen wordt niet ondersteund in deze browser. Kopieer de URL handmatig.");
        }
    };

    return (
        <section id="boek" className="section section-alt">
            <div className="container article-container">
                <Link to="/#journal" className="back-link">
                    ← Terug naar journal
                </Link>

                {/* Cover */}
                <figure className="story-cover story-cover--contain">
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
                            alt="Coverbeeld van 365 keer opnieuw beginnen"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </picture>
                </figure>

                {/* Header */}
                <header className="story-header">
                    <h1>Het boek in wording: 365 fragmenten van wat achterbleef en weer opnieuw begon</h1>
                    <p className="small meta">
                        Gepubliceerd op <time dateTime="2025-09-25">25 september 2025</time> • ~6 min lezen
                    </p>
                </header>

                {/* Body */}
                <article className="story-body card">
                    <p>
                        Ik schrijf een boek dat nog geen boek is. Het is een verzameling scènes, losse fragmenten, momenten die me nooit meer
                        losgelaten hebben. Soms schrijf ik een alinea alsof het een kort verhaal is, soms een losse flard van een herinnering
                        die pas later een plek krijgt.
                    </p>

                    <p>
                        Bij de Schrijversacademie in Amsterdam ontdekte mijn lerares Tanja Heimans — zelf schrijfster van onder andere{" "}
                        <em>De Huurmoeder</em> — iets dat ik zelf niet durfde te geloven: dat ik talent had. Vooral de stukken waarin ik schreef
                        over mijn jeugd raakten haar. Ze zei: “Dit is je stem. Hier zit je kracht.” Zonder haar aanmoediging had ik dit project
                        misschien nooit serieus genomen.
                    </p>

                    <p>
                        Toch schrijf ik niet op de klassieke manier. Komma’s, punten, grammatica — het waren altijd mijn struikelblokken. Alleen
                        dankzij ChatGPT kan ik nu foutloos schrijven. Niet omdat ik ineens anders ben, maar omdat techniek de ruis weghaalt. Ik
                        kan me volledig richten op de essentie: vertellen. En ja, ik gebruik AI zonder schaamte. Want eerlijk? Het is mijn
                        reddingsboei.
                    </p>

                    <p>Het resultaat is een boek dat nog onderweg is. Geen afgerond werk, maar een proces dat zichtbaar mag zijn. Een boek in wording.</p>

                    <blockquote>
                        <strong>365 keer opnieuw beginnen</strong>
                        <br />
                        Sommige moeders bakken appeltaarten. De mijne bakte beschuldigingen. Ze sneed niet alleen groenten in de keuken, maar ook
                        mijn reputatie bij instanties.
                        <br />
                        <br />
                        Wat doe je met een jeugd vol bizarre scènes die eerder op een absurde film lijken dan op een familiegeschiedenis? Je
                        schrijft ze op. Een voor elke dag. 365 keer.
                        <br />
                        <br />
                        In dit boek vind je fragmenten die soms wrang, soms wat zwarte humor, en altijd ongelooflijk echt zijn. Van nagelriemen tot
                        het moment dat mijn moeder me bij jeugdzorg aanmeldde als kindermishandelaar.
                        <br />
                        <br />
                        Het is geen ode aan haar, maar een inventaris van de absurditeit. Een jaar lang opnieuw beginnen — niet omdat ik dat wilde,
                        maar omdat het de enige manier was om te overleven.
                    </blockquote>

                    <p>
                        Misschien is dit boek straks een roman, misschien een bundel fragmenten. Misschien blijft het iets ertussenin. Maar wat ik
                        zeker weet: dit keer blijf ik schrijven. Niet om terug te kijken, maar om vooruit te bewegen. 365 keer.
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

        .story-cover{margin:8px auto 16px;max-width:68ch;}
        /* Cover standaard */
        .story-cover img{display:block;width:100%;border-radius:14px;}
        /* Speciale contain variant: hele cover zichtbaar */
        .story-cover--contain img{
          width:100%;
          height:auto;
          object-fit:contain;
          border-radius:14px;
          display:block;
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
        .story-body blockquote{
          margin:20px 0;
          padding:16px;
          border-left:4px solid var(--accent);
          background:rgba(255,255,255,0.05);
          border-radius:8px;
          font-style:italic;
        }
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
      `}</style>
        </section>
    );
}