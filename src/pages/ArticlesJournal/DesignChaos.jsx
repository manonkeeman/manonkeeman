import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";

const bodies = {
    nl: () => (
        <>
            <p>
                Ik heb een zwak voor chaos. Niet de grote apocalyptische chaos van rampenfilms, maar de alledaagse versie:
                te veel tabbladen open, drie half afgewerkte schetsen op tafel, een bug in je code die je pas om 23:47
                ontdekt, en oh ja, een mail van een verre vriend die al drie dagen onbeantwoord in je inbox hangt.
            </p>
            <p>
                Chaos voelt levendig. Het is bruisend, creatief, soms zelfs comfortabel. Maar er komt een punt waarop
                chaos omslaat in ruis. Dan zit je niet meer in de flow, maar ploeter je door een moeras van "waar was ik
                ook alweer mee bezig?". Precies daar begint mijn liefde voor structuur.
            </p>
            <p>
                Niet de kille, Excel-achtige structuur die alles dooddrukt, maar de soort die ademruimte geeft. Zoals
                ritme in muziek: je hoort de cadans, en daarbinnen kun je improviseren.
            </p>
            <p>
                Bij KLM leerde ik dat je zonder duidelijke afspraken letterlijk niet van de grond komt. Probeer maar eens
                een Boeing 777 achteruit te duwen zonder overleg, sensatie gegarandeerd. Bij de gemeente ontdekte ik dat
                communicatie zonder structuur voelt als een vergadering waar iedereen tegelijk praat, veel energie, nul
                resultaat.
            </p>
            <p>
                En nu, als junior developer, zie ik dat code eigenlijk hetzelfde is. Een function hier, een class daar,
                en ineens ontstaat er een patroon. Waar eerst een muur van onbegrijpelijke brackets {"{}"} stond, zie je orde:
                een systeem dat werkt, uitbreidbaar is, en zelfs elegant kan zijn.
            </p>
            <p>
                Het grappige is: structuur geeft vrijheid. Een goed grid in design laat ruimte voor speelsheid. Een nette
                codebase maakt experimenteren makkelijker. Het is als een typemachine met regelafstand: juist doordat
                er lijnen zijn, kun je losgaan met woorden.
            </p>
            <p>
                Ik moest dat leren, want jarenlang dacht ik dat structuur me zou opsluiten. Dat regels beperkend waren.
                Maar de echte beperking zat in het eindeloze zoeken, het niet weten waar te beginnen omdat ik geen
                fundament had.
            </p>
            <p>
                Structuur is geen gevangenis. Het is een trampoline. Je springt hoger, je landt zachter, en je durft meer
                omdat je weet dat het vangnet klopt.
            </p>
            <p>
                Misschien klinkt dit allemaal heel stoer, maar eerlijk? Ik stuntel nog vaak zat. Ik open twintig tabs,
                vergeet een puntkomma, of ontwerp iets wat verdacht veel lijkt op een PowerPoint van groep acht. Maar dat
                is oké. Chaos hoort erbij, het is de brandstof. Structuur is niet de rem; het is hoe je vaart maakt.
            </p>
        </>
    ),
    en: () => (
        <>
            <p>
                I have a weakness for chaos. Not the grand apocalyptic chaos of disaster films, but the everyday kind:
                too many tabs open, three half-finished sketches on the table, a bug in your code you only discover at
                23:47, and oh right, an email from a distant friend that has been sitting unanswered in your inbox for
                three days.
            </p>
            <p>
                Chaos feels alive. It is buzzing, creative, sometimes even comforting. But there comes a point where
                chaos tips into noise. You are no longer in the flow, but trudging through a swamp of "what was I
                actually working on again?" That is exactly where my love for structure begins.
            </p>
            <p>
                Not the cold, spreadsheet-like structure that kills everything, but the kind that gives breathing room.
                Like rhythm in music: you hear the cadence, and within it you can improvise.
            </p>
            <p>
                At KLM I learned that without clear agreements you literally do not get off the ground. Try pushing a
                Boeing 777 backwards without coordination, and you are guaranteed an adventure. At the municipality I
                discovered that communication without structure feels like a meeting where everyone talks at once:
                lots of energy, zero result.
            </p>
            <p>
                And now, as a junior developer, I see that code is really the same. A function here, a class there,
                and suddenly a pattern emerges. Where once there was a wall of incomprehensible brackets {"{}"}, you see
                order: a system that works, that can be extended, and can even be elegant.
            </p>
            <p>
                The funny thing is: structure gives freedom. A good grid in design leaves room for playfulness. A clean
                codebase makes experimenting easier. It is like a typewriter with line spacing: precisely because there
                are lines, you can go wild with words.
            </p>
            <p>
                I had to learn that, because for years I thought structure would trap me. That rules were restrictive.
                But the real limitation was in the endless searching, not knowing where to start because I had no
                foundation.
            </p>
            <p>
                Structure is not a prison. It is a trampoline. You jump higher, you land softer, and you dare more
                because you know the safety net holds.
            </p>
            <p>
                Maybe all this sounds very clever, but honestly? I still stumble plenty. I open twenty tabs, forget a
                semicolon, or design something that looks suspiciously like a PowerPoint from primary school. But that
                is okay. Chaos belongs, it is the fuel. Structure is not the brake; it is how you build momentum.
            </p>
        </>
    ),
    fr: () => (
        <>
            <p>
                J'ai un faible pour le chaos. Pas le grand chaos apocalyptique des films catastrophe, mais la version
                du quotidien: trop d'onglets ouverts, trois esquisses à moitié terminées sur la table, un bug dans le
                code découvert à 23h47, et ah oui, un email d'un ami lointain qui traîne sans réponse depuis trois jours.
            </p>
            <p>
                Le chaos semble vivant. Il est effervescent, créatif, parfois même confortable. Mais il arrive un moment
                où il bascule dans le bruit. On n'est plus dans le flow, on barbote dans un marais de "sur quoi je
                travaillais déjà?". C'est exactement là que commence mon amour pour la structure.
            </p>
            <p>
                Pas la structure froide et digne d'une feuille de calcul qui étouffe tout, mais celle qui donne de
                l'espace pour respirer. Comme le rythme en musique: on entend la cadence, et dans ce cadre on peut
                improviser.
            </p>
            <p>
                Chez KLM, j'ai appris que sans accords clairs, on ne décolle littéralement pas. Essayez de pousser un
                Boeing 777 en marche arrière sans coordination, et vous avez l'aventure garantie. A la mairie, j'ai
                découvert que la communication sans structure ressemble à une réunion où tout le monde parle en même
                temps: beaucoup d'énergie, zéro résultat.
            </p>
            <p>
                Et maintenant, en tant que développeuse junior, je vois que le code c'est pareil. Une fonction ici, une
                classe là, et soudain un motif émerge. Là où se dressait un mur d'accolades incompréhensibles {"{}"}, on
                voit l'ordre: un système qui fonctionne, qui peut évoluer, et peut même être élégant.
            </p>
            <p>
                Le truc amusant, c'est que la structure donne de la liberté. Une bonne grille en design laisse place à
                la fantaisie. Un code propre facilite l'expérimentation. C'est comme une machine à écrire avec
                l'interligne: c'est justement parce qu'il y a des lignes qu'on peut se lâcher avec les mots.
            </p>
            <p>
                J'ai dû apprendre ça, parce que pendant des années j'ai cru que la structure m'enfermerait. Que les
                règles étaient restrictives. Mais la vraie limitation était dans cette recherche sans fin, de ne pas
                savoir par où commencer parce que je n'avais pas de fondation.
            </p>
            <p>
                La structure n'est pas une prison. C'est un trampoline. On saute plus haut, on atterrit plus doucement,
                et on ose davantage parce qu'on sait que le filet tient.
            </p>
            <p>
                Tout ça semble peut-être très malin, mais honnêtement? Je trébuche encore souvent. J'ouvre vingt
                onglets, j'oublie un point-virgule, ou je conçois quelque chose qui ressemble étrangement à un
                PowerPoint d'école primaire. Mais c'est normal. Le chaos en fait partie, c'est le carburant. La
                structure n'est pas le frein; c'est ce qui fait avancer.
            </p>
        </>
    ),
    de: () => (
        <>
            <p>
                Ich habe eine Schwäche für Chaos. Nicht das große apokalyptische Chaos aus Katastrophenfilmen, sondern
                die alltägliche Version: zu viele Tabs offen, drei halbfertige Skizzen auf dem Tisch, ein Bug im Code
                den man erst um 23:47 entdeckt, und ach ja, eine E-Mail von einem alten Freund, die seit drei Tagen
                unbeantwortet im Postfach liegt.
            </p>
            <p>
                Chaos fühlt sich lebendig an. Es ist aufregend, kreativ, manchmal sogar beruhigend. Aber es kommt ein
                Punkt, wo Chaos in Lärm umschlägt. Man ist nicht mehr im Flow, sondern wattet durch einen Sumpf von
                "womit war ich nochmal beschäftigt?". Genau da beginnt meine Liebe zur Struktur.
            </p>
            <p>
                Nicht die kalte, tabellenkalkulationsartige Struktur, die alles erdrückt, sondern die Art, die Raum
                zum Atmen lässt. Wie Rhythmus in der Musik: Man hört die Kadenz, und darin kann man improvisieren.
            </p>
            <p>
                Bei KLM lernte ich, dass man ohne klare Absprachen buchstäblich nicht vom Boden kommt. Versuchen Sie
                mal, eine Boeing 777 rückwärts zu schieben ohne Koordination, das Abenteuer ist garantiert. Bei der
                Gemeinde entdeckte ich, dass Kommunikation ohne Struktur sich wie eine Besprechung anfühlt, wo alle
                gleichzeitig reden: viel Energie, null Ergebnis.
            </p>
            <p>
                Und jetzt, als Junior-Entwicklerin, sehe ich, dass Code eigentlich dasselbe ist. Eine Funktion hier,
                eine Klasse dort, und plötzlich entsteht ein Muster. Wo einst eine Wand unverständlicher geschwungener
                Klammern {"{}"} stand, sieht man Ordnung: ein System, das funktioniert, das erweiterbar ist und sogar
                elegant sein kann.
            </p>
            <p>
                Das Lustige ist: Struktur gibt Freiheit. Ein gutes Raster im Design lässt Raum für Verspieltheit. Eine
                saubere Codebase macht Experimentieren einfacher. Es ist wie eine Schreibmaschine mit Zeilenabstand:
                gerade weil es Linien gibt, kann man mit Worten loslegen.
            </p>
            <p>
                Das musste ich lernen, denn jahrelang glaubte ich, Struktur würde mich einengen. Dass Regeln
                einschränkend wären. Aber die echte Einschränkung lag in der endlosen Suche, im Nichtwissen, wo man
                anfangen soll, weil kein Fundament vorhanden war.
            </p>
            <p>
                Struktur ist kein Gefängnis. Sie ist ein Trampolin. Man springt höher, landet weicher und wagt mehr,
                weil man weiß, dass das Sicherheitsnetz hält.
            </p>
            <p>
                Das klingt vielleicht alles sehr schlau, aber ehrlich gesagt? Ich stolpere noch oft genug. Ich öffne
                zwanzig Tabs, vergesse ein Semikolon oder entwerfe etwas, das verdächtig nach einer PowerPoint-
                Präsentation aus der Grundschule aussieht. Aber das ist okay. Chaos gehört dazu, es ist der Treibstoff.
                Struktur ist nicht die Bremse; sie ist das, was einen voranbringt.
            </p>
        </>
    ),
    es: () => (
        <>
            <p>
                Tengo debilidad por el caos. No el gran caos apocalíptico de las películas de desastres, sino la versión
                cotidiana: demasiadas pestañas abiertas, tres bocetos a medio terminar sobre la mesa, un bug en el código
                que solo descubres a las 23:47, y ah sí, un email de un amigo lejano que lleva tres días sin respuesta
                en tu bandeja de entrada.
            </p>
            <p>
                El caos se siente vivo. Es efervescente, creativo, a veces incluso reconfortante. Pero llega un momento
                en que el caos se convierte en ruido. Ya no estás en el flujo, sino chapoteando en un pantano de "¿en
                qué estaba trabajando?". Ahí es exactamente donde empieza mi amor por la estructura.
            </p>
            <p>
                No la estructura fría y tipo hoja de cálculo que lo aplasta todo, sino la que da espacio para respirar.
                Como el ritmo en la música: oyes la cadencia, y dentro de ella puedes improvisar.
            </p>
            <p>
                En KLM aprendí que sin acuerdos claros literalmente no despegas. Intenta empujar un Boeing 777 hacia
                atrás sin coordinación, y la aventura está garantizada. En el ayuntamiento descubrí que la comunicación
                sin estructura se siente como una reunión donde todos hablan a la vez: mucha energía, cero resultado.
            </p>
            <p>
                Y ahora, como desarrolladora junior, veo que el código es realmente lo mismo. Una función aquí, una
                clase allá, y de repente surge un patrón. Donde antes había una pared de llaves incomprensibles {"{}"},
                ves orden: un sistema que funciona, que puede extenderse y hasta puede ser elegante.
            </p>
            <p>
                Lo gracioso es que la estructura da libertad. Una buena cuadrícula en diseño deja espacio para la
                creatividad. Una base de código limpia facilita la experimentación. Es como una máquina de escribir con
                interlineado: precisamente porque hay líneas, puedes soltarte con las palabras.
            </p>
            <p>
                Tuve que aprenderlo, porque durante años pensé que la estructura me encerraría. Que las reglas eran
                restrictivas. Pero la verdadera limitación estaba en la búsqueda interminable, en no saber por dónde
                empezar porque no tenía cimientos.
            </p>
            <p>
                La estructura no es una prisión. Es una cama elástica. Saltas más alto, aterrizas más suave, y te
                atreves a más porque sabes que la red aguanta.
            </p>
            <p>
                Quizás todo esto suena muy impresionante, pero ¿la verdad? Todavía tropiezo bastante. Abro veinte
                pestañas, olvido un punto y coma, o diseño algo que se parece sospechosamente a un PowerPoint de
                primaria. Pero está bien. El caos forma parte, es el combustible. La estructura no es el freno; es
                lo que te da impulso.
            </p>
        </>
    ),
    it: () => (
        <>
            <p>
                Ho un debole per il caos. Non il grande caos apocalittico dei film catastrofici, ma la versione
                quotidiana: troppi tab aperti, tre schizzi a metà sul tavolo, un bug nel codice che scopri solo alle
                23:47, e ah sì, un'email di un amico lontano che giace senza risposta nella tua casella da tre giorni.
            </p>
            <p>
                Il caos sembra vivo. E' frizzante, creativo, a volte persino confortante. Ma arriva un momento in cui
                il caos si trasforma in rumore. Non sei più nel flusso, ma ti trascini attraverso un pantano di "su
                cosa stavo lavorando?". E' esattamente lì che inizia il mio amore per la struttura.
            </p>
            <p>
                Non la struttura fredda stile foglio di calcolo che soffoca tutto, ma quella che dà spazio per
                respirare. Come il ritmo in musica: senti la cadenza, e al suo interno puoi improvvisare.
            </p>
            <p>
                In KLM ho imparato che senza accordi chiari non si decolla letteralmente. Prova a spingere un Boeing
                777 all'indietro senza coordinazione, e l'avventura è garantita. Al comune ho scoperto che la
                comunicazione senza struttura sembra una riunione dove tutti parlano contemporaneamente: molta energia,
                zero risultato.
            </p>
            <p>
                E ora, come sviluppatrice junior, vedo che il codice è proprio lo stesso. Una funzione qui, una classe
                lì, e all'improvviso emerge un pattern. Dove prima c'era un muro di parentesi incomprensibili {"{}"}, si
                vede l'ordine: un sistema che funziona, che può essere esteso e può persino essere elegante.
            </p>
            <p>
                La cosa divertente è che la struttura dà libertà. Una buona griglia nel design lascia spazio alla
                giocosità. Una codebase pulita rende la sperimentazione più facile. E' come una macchina da scrivere
                con l'interlinea: proprio perché ci sono le righe, puoi sbizzarrirti con le parole.
            </p>
            <p>
                Ho dovuto impararlo, perché per anni ho pensato che la struttura mi avrebbe imprigionato. Che le
                regole fossero restrittive. Ma la vera limitazione stava nella ricerca infinita, nel non sapere da
                dove iniziare perché non avevo fondamenta.
            </p>
            <p>
                La struttura non è una prigione. E' un trampolino. Salti più in alto, atterri più dolcemente, e osi
                di più perché sai che la rete regge.
            </p>
            <p>
                Forse tutto questo sembra molto brillante, ma onestamente? Inciampo ancora spesso. Apro venti tab,
                dimentico un punto e virgola, o progetto qualcosa che assomiglia sospettosamente a un PowerPoint delle
                elementari. Ma va bene. Il caos ne fa parte, è il carburante. La struttura non è il freno; è ciò che
                ti dà slancio.
            </p>
        </>
    ),
};

const ui = {
    nl: { back: "← Terug naar journal", date: "24 augustus 2025", read: "~4-5 min lezen", shareTitle: "Over chaos, structuur, code en design.", shareText: "Waarom structuur niet saai is, maar juist vrijheid geeft." },
    en: { back: "← Back to journal", date: "August 24, 2025", read: "~4-5 min read", shareTitle: "On chaos, structure, code and design.", shareText: "Why structure isn't boring, but actually gives you freedom." },
    fr: { back: "← Retour au journal", date: "24 août 2025", read: "~4-5 min de lecture", shareTitle: "Sur le chaos, la structure, le code et le design.", shareText: "Pourquoi la structure n'est pas ennuyeuse, mais donne de la liberté." },
    de: { back: "← Zurück zum Journal", date: "24. August 2025", read: "~4-5 Min. Lesezeit", shareTitle: "Über Chaos, Struktur, Code und Design.", shareText: "Warum Struktur nicht langweilig ist, sondern Freiheit gibt." },
    es: { back: "← Volver al diario", date: "24 de agosto de 2025", read: "~4-5 min de lectura", shareTitle: "Sobre el caos, la estructura, el código y el diseño.", shareText: "Por qué la estructura no es aburrida sino que da libertad." },
    it: { back: "← Torna al journal", date: "24 agosto 2025", read: "~4-5 min di lettura", shareTitle: "Su caos, struttura, codice e design.", shareText: "Perché la struttura non è noiosa ma da' liberta'." },
};

const titles = {
    nl: "Waarom structuur niet saai is, maar juist vrijheid geeft",
    en: "Why Structure Is Not Boring, But Actually Gives You Freedom",
    fr: "Pourquoi la structure n'est pas ennuyeuse, mais donne de la liberté",
    de: "Warum Struktur nicht langweilig ist, sondern Freiheit gibt",
    es: "Por qué la estructura no es aburrida sino que da libertad",
    it: "Perché la struttura non è noiosa ma dà libertà",
};

export default function DesignChaos() {
    const { i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const t = ui[lang] || ui.en;
    const Body = bodies[lang] || bodies.en;
    const title = titles[lang] || titles.en;
    const base = "/journal/Design-Chaos";

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({ title: t.shareTitle, text: t.shareText, url: window.location.href })
                .catch((err) => console.error("Share cancelled:", err));
        } else {
            navigator.clipboard?.writeText(window.location.href);
        }
    };

    return (
        <section id="chaosdesign" className="section section-alt">
            <div className="container article-container">
                <Link to="/#journal" className="back-link">{t.back}</Link>

                <figure className="story-cover">
                    <div className="media">
                        <picture>
                            <source type="image/avif" srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w, ${base}-1200w.avif 1200w`} sizes="(max-width: 920px) 100vw, 68ch" />
                            <source type="image/webp" srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w, ${base}-1200w.webp 1200w`} sizes="(max-width: 920px) 100vw, 68ch" />
                            <img src={`${base}-800w.webp`} alt="Abstracte visual: orde in chaos met grid en code" loading="eager" fetchPriority="high" decoding="async" />
                        </picture>
                    </div>
                </figure>

                <header className="story-header">
                    <h1>{title}</h1>
                    <p className="small meta">
                        <time dateTime="2025-08-24">{t.date}</time> • {t.read}
                    </p>
                </header>

                <article className="story-body card">
                    <Body />
                </article>

                <footer className="story-footer">
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/manonkeeman/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><FaLinkedin /></a>
                        <a href="https://substack.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Substack" title="Substack"><SiSubstack /></a>
                        <a href="https://medium.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Medium" title="Medium"><FaMedium /></a>
                        <button onClick={handleShare} className="share-btn" aria-label="Share"><FiShare /></button>
                    </div>
                </footer>
            </div>

            <style>{`
        .back-link{display:inline-block;margin:14px 0 8px;text-decoration:none;color:var(--accent);}
        .back-link:hover{text-decoration:underline;}
        .article-container{max-width:72rem;margin:0 auto;padding:0 clamp(16px,3vw,48px);}
        .story-cover{margin:8px auto 16px;max-width:68ch;border-radius:14px;overflow:hidden;}
        .story-cover .media{position:relative;aspect-ratio:16/9;}
        .story-cover picture,.story-cover img{display:block;width:100%;height:100%;object-fit:cover;}
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
        .socials{display:flex;justify-content:center;gap:20px;font-size:1.8rem;margin-top:12px;}
        .socials a,.share-btn{color:var(--muted);background:none;border:none;cursor:pointer;transition:color .2s ease, transform .2s ease;}
        .socials a:hover,.share-btn:hover{color:var(--accent);transform:translateY(-2px);}
        @media (max-width:920px){.story-cover{max-width:100%;}.story-body{max-width:100%;}}
      `}</style>
        </section>
    );
}