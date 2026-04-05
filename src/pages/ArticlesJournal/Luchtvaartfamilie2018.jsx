import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";

const content = {
    nl: {
        back: "← Terug naar journal",
        date: "18 februari 2018",
        readLabel: "Longread",
        title: "Luchtvaartfamilies, Interview Up in the Sky",
        shareTitle: "Luchtvaartfamilies, Deel 3 (2018)",
        shareText: "Generaties verbonden door een passie voor de luchtvaart.",
        p1: <>
            Het is voor velen een sprookje: de vlieger die een stewardess ontmoet. Deel 3 van de serie{" "}
            <em>Luchtvaartfamilies</em> gaat over dat sprookje. Ondanks een scheiding van een Lufthansa-piloot
            blijft luchtvaart een centrale rol spelen in mijn leven, zeker sinds mijn relatie met Maxim Staal,
            KLM-copiloot op de Boeing 777/787.
        </>,
        p2: <>
            Het originele interview verscheen in 2018 op Up in the Sky.{" "}
            <a href="https://www.upinthesky.nl/2018/02/18/luchtvaartfamilies-deel-3-longread/" target="_blank" rel="noreferrer">
                Lees het hele artikel hier
            </a>
            .
        </>,
    },
    en: {
        back: "← Back to journal",
        date: "February 18, 2018",
        readLabel: "Long read",
        title: "Aviation Families, Interview Up in the Sky",
        shareTitle: "Aviation Families, Part 3 (2018)",
        shareText: "Generations connected by a passion for aviation.",
        p1: <>
            For many it is a fairy tale: the pilot who meets a flight attendant. Part 3 of the{" "}
            <em>Aviation Families</em> series is about that fairy tale. Despite a separation from a Lufthansa
            pilot, aviation continues to play a central role in my life, especially since my relationship with
            Maxim Staal, KLM co-pilot on the Boeing 777/787.
        </>,
        p2: <>
            The original interview was published in 2018 on Up in the Sky.{" "}
            <a href="https://www.upinthesky.nl/2018/02/18/luchtvaartfamilies-deel-3-longread/" target="_blank" rel="noreferrer">
                Read the full article here
            </a>
            .
        </>,
    },
    fr: {
        back: "← Retour au journal",
        date: "18 février 2018",
        readLabel: "Long article",
        title: "Familles de l'aviation, Interview Up in the Sky",
        shareTitle: "Familles de l'aviation, Partie 3 (2018)",
        shareText: "Des generations reliees par une passion pour l'aviation.",
        p1: <>
            Pour beaucoup, c'est un conte de fées: le pilote qui rencontre une hôtesse de l'air. La partie 3 de
            la série <em>Familles de l'aviation</em> parle de ce conte de fées. Malgré une séparation d'avec un
            pilote Lufthansa, l'aviation continue de jouer un rôle central dans ma vie, surtout depuis ma
            relation avec Maxim Staal, co-pilote KLM sur le Boeing 777/787.
        </>,
        p2: <>
            L'interview originale a été publiée en 2018 sur Up in the Sky.{" "}
            <a href="https://www.upinthesky.nl/2018/02/18/luchtvaartfamilies-deel-3-longread/" target="_blank" rel="noreferrer">
                Lire l'article complet ici
            </a>
            .
        </>,
    },
    de: {
        back: "← Zurück zum Journal",
        date: "18. Februar 2018",
        readLabel: "Langer Artikel",
        title: "Luftfahrtfamilien, Interview Up in the Sky",
        shareTitle: "Luftfahrtfamilien, Teil 3 (2018)",
        shareText: "Generationen verbunden durch eine Leidenschaft fur die Luftfahrt.",
        p1: <>
            Für viele ist es ein Märchen: der Pilot, der eine Stewardess trifft. Teil 3 der Serie{" "}
            <em>Luftfahrtfamilien</em> handelt von diesem Märchen. Trotz einer Trennung von einem
            Lufthansa-Piloten spielt die Luftfahrt weiterhin eine zentrale Rolle in meinem Leben, besonders
            seit meiner Beziehung mit Maxim Staal, KLM-Kopilot auf der Boeing 777/787.
        </>,
        p2: <>
            Das Originalinterview erschien 2018 auf Up in the Sky.{" "}
            <a href="https://www.upinthesky.nl/2018/02/18/luchtvaartfamilies-deel-3-longread/" target="_blank" rel="noreferrer">
                Den ganzen Artikel hier lesen
            </a>
            .
        </>,
    },
    es: {
        back: "← Volver al diario",
        date: "18 de febrero de 2018",
        readLabel: "Articulo largo",
        title: "Familias de la aviacion, Entrevista Up in the Sky",
        shareTitle: "Familias de la aviacion, Parte 3 (2018)",
        shareText: "Generaciones unidas por una pasion por la aviacion.",
        p1: <>
            Para muchos es un cuento de hadas: el piloto que conoce a una azafata. La parte 3 de la serie{" "}
            <em>Familias de la aviacion</em> trata de ese cuento de hadas. A pesar de una separacion de un
            piloto de Lufthansa, la aviacion sigue desempenando un papel central en mi vida, especialmente
            desde mi relacion con Maxim Staal, copiloto de KLM en el Boeing 777/787.
        </>,
        p2: <>
            La entrevista original se publico en 2018 en Up in the Sky.{" "}
            <a href="https://www.upinthesky.nl/2018/02/18/luchtvaartfamilies-deel-3-longread/" target="_blank" rel="noreferrer">
                Leer el articulo completo aqui
            </a>
            .
        </>,
    },
    it: {
        back: "← Torna al journal",
        date: "18 febbraio 2018",
        readLabel: "Articolo lungo",
        title: "Famiglie dell'aviazione, Intervista Up in the Sky",
        shareTitle: "Famiglie dell'aviazione, Parte 3 (2018)",
        shareText: "Generazioni unite da una passione per l'aviazione.",
        p1: <>
            Per molti e' una fiaba: il pilota che incontra una hostess. La parte 3 della serie{" "}
            <em>Famiglie dell'aviazione</em> parla di quella fiaba. Nonostante una separazione da un pilota
            Lufthansa, l'aviazione continua a svolgere un ruolo centrale nella mia vita, specialmente dalla
            mia relazione con Maxim Staal, co-pilota KLM sul Boeing 777/787.
        </>,
        p2: <>
            L'intervista originale e' stata pubblicata nel 2018 su Up in the Sky.{" "}
            <a href="https://www.upinthesky.nl/2018/02/18/luchtvaartfamilies-deel-3-longread/" target="_blank" rel="noreferrer">
                Leggi l'articolo completo qui
            </a>
            .
        </>,
    },
};

export default function Luchtvaartfamilie2018() {
    const { i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const c = content[lang] || content.en;
    const base = "/journal/luchtvaartfamilie2018";

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({ title: c.shareTitle, text: c.shareText, url: window.location.href })
                .catch((err) => console.error("Share cancelled:", err));
        } else {
            navigator.clipboard?.writeText(window.location.href);
        }
    };

    return (
        <section id="luchtvaartfamilie2018" className="section section-alt">
            <div className="container article-container">
                <Link to="/#journal" className="back-link">{c.back}</Link>

                <figure className="story-cover">
                    <picture>
                        <source type="image/avif" srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w, ${base}-1200w.avif 1200w`} sizes="(max-width: 920px) 100vw, 1200px" />
                        <source type="image/webp" srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w, ${base}-1200w.webp 1200w`} sizes="(max-width: 920px) 100vw, 1200px" />
                        <img src={`${base}-800w.webp`} width="1200" height="630" alt="Luchtvaartfamilies, Deel 3" loading="eager" fetchPriority="high" decoding="async" />
                    </picture>
                </figure>

                <header className="story-header">
                    <h1>{c.title}</h1>
                    <p className="small meta">
                        <time dateTime="2018-02-18">{c.date}</time> • {c.readLabel}
                    </p>
                </header>

                <article className="story-body card">
                    <p>{c.p1}</p>
                    <p>{c.p2}</p>
                </article>

                <footer className="story-footer">
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/manonkeeman/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://substack.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Substack"><SiSubstack /></a>
                        <a href="https://medium.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Medium"><FaMedium /></a>
                        <button onClick={handleShare} className="share-btn" aria-label="Share"><FiShare /></button>
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