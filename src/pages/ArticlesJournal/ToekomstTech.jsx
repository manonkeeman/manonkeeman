import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";

export default function ToekomstTech() {
    const base = "/journal/toekomst-it";

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "De toekomst van tech",
                    text: "Over AI, remote werken, data en menselijkheid in IT.",
                    url: window.location.href,
                })
                .catch((err) => console.error("Delen geannuleerd of mislukt:", err));
        } else {
            alert("Delen wordt niet ondersteund in deze browser. Kopieer de URL handmatig.");
        }
    };

    return (
        <section id="toekomsttech" className="section section-alt">
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
                            alt='Quote in beeld: “the hardest part of leadership today isn’t strategy. it’s staying human in a world that’s becoming machine-led.”'
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </picture>
                </figure>

                {/* Header */}
                <header className="story-header">
                    <h1>De toekomst van tech</h1>
                    <p className="small meta">
                        Gepubliceerd op <time dateTime="2025-09-22">22 september 2025</time> • ~5 min lezen
                    </p>
                </header>

                {/* Body */}
                <article className="story-body card">
                    <p>
                        Ik begon ooit in een callcenter. Urenlang scripts herhalen,
                        terwijl mensen vaak iets anders bedoelden.
                        Bij KLM leerde ik dat samenwerken alleen werkt als iedereen dezelfde signalen begrijpt.
                        Nu ik in IT zit, herken ik diezelfde zoektocht: hoe maak je iets ingewikkelds als code menselijk en begrijpelijk?

                    </p>

                    <h2>AI: tussen hype en praktijk</h2>
                    <p>
                        Iedereen praat alsof AI de copiloot wordt.
                        Maar voor mij voelt het als een stagiair die razendsnel typt,
                        handig, maar je moet blijven meekijken.
                        Soms briljant, soms onzin. AI versnelt werk, maar neemt niet zomaar de leiding.
                    </p>
                    <h2>Remote werken: zichtbaarheid zonder koffieknikje</h2>
                    <p>
                        Sinds corona is remote werken de norm geworden.
                        Maar je mist de subtiele signalen: knikjes, blikken, informele gesprekken.
                        Tools als GitHub, Slack en Figma zijn je nieuwe collega’s.
                        Je moet leren hoe je ermee praat en duidelijkheid scheppen voordat vragen zich opstapelen.
                    </p>

                    <h2>Structuur en vrijheid</h2>
                    <p>
                        AI kan patronen herkennen, voorstellen doen, maar betekenis geven?
                        Dat blijft menselijk werk. Je ziet verbanden, emoties, keuzes.
                        Een bord met taken of een grid in design is geen keurslijf,
                        het is speelruimte om te bewegen en te groeien.
                    </p>

                    <h2>Wat AI met onze data kan — voor ons of tegen ons?</h2>
                    <p>
                        Dit is waar het spannend wordt. AI systemen draaien op data.
                        En met alle informatie die over ons verzameld wordt;
                        wat we klikken, wat we liken, waar we verblijven, ontstaat macht.
                    </p>
                    <p>
                       <strong>	•	Misbruik: </strong> AI zou kunnen voorspellen wat je voelt, wat je koopt, welke kant je opgaat, en dat tegen je inzetten (advertenties, manipulatie).
                       <strong>	•	Onderdrukking: </strong>  in autoritaire regimes kan AI gebruikt worden voor surveillance, censuur en sociale controle.
                        <strong>•	Onderscheiding en vooroordelen: </strong> als de data is bevooroordeeld, zal AI beslissingen herhalen die ongelijkheid in stand houden.
                    </p>
                    <p>
                        Aan de andere kant:
                        <strong>		•	Personalisatie: </strong> AI kan adviezen geven die echt op jou afgestemd zijn — beter onderwijs, medische zorg, toegankelijkheid.
                        <strong>		•	Autoriseren: </strong>  AI kan dienen als assistent, een tweede paar ogen — niet om te vervangen, maar om jou sterker te maken.
                        <strong>		•	Innovatie & efficiëntie: </strong> complexe problemen oplossen — milieu, gezondheidszorg, logistiek — op manieren die mensen alleen niet kunnen.
                    </p>

                    <h2>Welke AI moet je kiezen — Amerikaans, Frans of Chinees?</h2>
                    <p>
                        Er is nu een wedloop tussen AI-modellen met verschillende achtergronden:
                    </p>
                    <ul>
                        <li><strong>ChatGPT (VS / OpenAI)</strong> robuust, veel documentatie, maar werkt binnen Amerikaanse wetten en regels, soms met beperkingen buiten de VS.</li>
                        <li><strong>Mistral (Frankrijk / EU)</strong> met nadruk op Europese waarden, mogelijk striktere privacyregels, betere controle over data-soevereiniteit.</li>
                        <li><strong>Claude (Anthropic / VS)</strong> vaak gepositioneerd als “veiligere AI”, met meer maatregelen tegen desinformatie of ongepaste output.</li>
                        <li><strong>Chinese AI-modellen (zoals Baidu Ernie, Tencent AI, Huawei’s modellen)</strong> gebouwd in een anders gereguleerd systeem. Mogelijk krachtig in massale uitvoeringen, maar met andere risicokaders qua censuur, data-toegang en staatsinterventie.
                        </li>
                    </ul>
                    <p>
                        Welke je kiest, hangt af van:
                    </p>
                    <ul>
                        <li><strong>	1.	Vertrouwen & transparantie:</strong> Wie controleert de AI? Wat kun je weten over de data en de beslissingen?</li>
                        <li><strong>	2.	Privacy & soevereiniteit:</strong>  in welke jurisdictie staat je data?</li>
                        <li><strong>	3.	Ethiek & waarden:</strong> vaak gepositioneerd als “veiligere AI”, met meer maatregelen tegen desinformatie of ongepaste output.</li>
                        <li><strong>	4.	Prestatie & compatibiliteit:</strong> hoe goed werkt het model voor jouw taal, domein en behoeften?</li>
                    </ul>

                    <h2>Mijn standpunt & twijfel</h2>
                    <p>
                        Ik gebruik AI, ja en voorzichtig. Niet blind vertrouwen. Ik zie het als een gereedschap, geen autoriteit.

                        Ik denk dat we nu middenin een keuze zitten: óf we laten technologie bepalen hoe we leven, óf we bouwen technologie die mensen sterker maakt.

                        Ik weet niet of ik de juiste richting heb gekozen. Soms twijfel ik of ik te naïef ben. Maar ik geloof dat menselijkheid,
                        nieuwsgierigheid en kritische keuzes ons kunnen leiden, niet perfect, maar betekenisvol.
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