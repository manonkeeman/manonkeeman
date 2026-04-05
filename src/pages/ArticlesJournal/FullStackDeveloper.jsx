import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import ShareButton from "../../assets/Components/ShareButton.jsx";

const bodies = {
    nl: () => (
        <>
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
                Via het Novi college en Equals, een netwerk dat vrouwen in tech ondersteunt startte
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
        </>
    ),
    en: () => (
        <>
            <p>
                People sometimes think my career is a winding road. KLM, Amsterdam municipality,
                graphic design, and now code. But when I look back, I see one straight line:
                I always wanted to understand systems. And once I understand them, I want to build them.
            </p>
            <hr className="rule" />
            <h2>Amsterdam: Communication as a System</h2>
            <p>
                After returning from Munich, I started at the Amsterdam municipality as a call
                centre agent at DWI. I quickly discovered that communication itself is a system:
                who says what, through which channel, with what effect. In my spare time I made a
                staff magazine with colleagues that went down so well that I moved into internal
                communications. My assignment: get 16,000 colleagues active on the intranet. My
                first large-scale project, and I was hooked on the structure underneath it.
            </p>
            <hr className="rule" />
            <h2>On the Platform: Signals, Systems and Safety</h2>
            <p>
                When combining work and childcare as a single mother became too much, I chose
                flexible work at KLM. I worked as a ground stewardess and baggage handler, and
                during the pandemic was selected for the docusoap{" "}
                <em>KL2020 Back in the Air</em>, alongside CEO Pieter Elbers. Eventually I
                entered the three-year training to become an aircraft tug driver and pushback operator.
            </p>
            <p>
                On the platform, everything revolves around precision. No vague half-hearted
                gestures: you know exactly who does what, when. Short checks, clear signals,
                continuous feedback. Pushing an 80-tonne aircraft backwards is not a matter of
                strength, but of communication and timing. That taught me how to manage complex
                processes: by splitting them into small, controllable steps.
            </p>
            <hr className="rule" />
            <h2>From Systems Thinking to Systems Building</h2>
            <p>
                After years of shift work, early mornings and late nights on the tarmac, it was
                time for something different. Not less intensive, but with more control over my
                own time. I had always built websites and worked as a graphic designer, but now I
                wanted to go deeper. What is actually behind a webpage? How does a frontend talk
                to a backend? How do you ensure data flows reliably from database to screen?
            </p>
            <p>
                Through Novi College and Equals, a network supporting women in tech, I started an
                intensive Full Stack Development programme. React, Spring Boot, databases, REST
                APIs, Git. It clicked immediately. Not because it was easy, but because the way of
                thinking felt familiar: analysing a system, understanding the layers, knowing how
                the parts communicate. Exactly what I had learned on the platform, but now in code.
            </p>
            <p>
                Debugging is actually not so different from solving a problem on the platform. You
                look where the system deviates from expected behaviour, trace back to the source and
                fix it. Methodical, calm, step by step.
            </p>
            <hr className="rule" />
            <h2>Now</h2>
            <p>
                I started by pushing aircraft backwards. Now I build systems forwards. The move
                from platform to product team seems big, but the core has stayed the same:
                understanding how something works, knowing where to intervene, and asking slightly
                sharper questions every day. The headset has just been swapped for a keyboard, and
                that feels just as exciting.
            </p>
        </>
    ),
    fr: () => (
        <>
            <p>
                Les gens pensent parfois que mon parcours est sinueux. KLM, la ville d'Amsterdam,
                le design graphique, et maintenant le code. Mais quand je regarde en arrière, je
                vois une ligne droite: j'ai toujours voulu comprendre les systèmes. Et quand je
                les comprends, je veux les construire.
            </p>
            <hr className="rule" />
            <h2>Amsterdam: la communication comme système</h2>
            <p>
                Après mon retour de Munich, j'ai commencé à la mairie d'Amsterdam comme agente de
                centre d'appels au DWI. J'ai rapidement découvert que la communication elle-même
                est un système: qui dit quoi, par quel canal, avec quel effet. Durant mon temps
                libre, j'ai créé un journal interne avec des collègues qui a si bien fonctionné
                que je suis passée à la communication interne. Ma mission: rendre actifs 16 000
                collègues sur l'intranet. Mon premier grand projet à grande échelle, et j'étais
                accro à la structure qui le sous-tendait.
            </p>
            <hr className="rule" />
            <h2>Sur le tarmac: signaux, systèmes et sécurité</h2>
            <p>
                Quand combiner travail et garde d'enfant en tant que mère célibataire est devenu
                trop lourd, j'ai choisi un travail flexible chez KLM. J'ai travaillé comme hôtesse
                au sol et bagagiste, et pendant la pandémie j'ai été sélectionnée pour le docusoap{" "}
                <em>KL2020 Retour dans les airs</em>, aux côtés du PDG Pieter Elbers. J'ai
                finalement intégré la formation de trois ans pour devenir conductrice de
                remorqueur d'avion.
            </p>
            <p>
                Sur le tarmac, tout repose sur la précision. Pas de gestes vagues: on sait
                exactement qui fait quoi, quand. Contrôles courts, signaux clairs, retour continu.
                Pousser un avion de 80 tonnes en marche arrière n'est pas une question de force,
                mais de communication et de timing. Cela m'a appris comment gérer des processus
                complexes: en les divisant en petites étapes contrôlables.
            </p>
            <hr className="rule" />
            <h2>De la pensée systémique à la construction de systèmes</h2>
            <p>
                Après des années de travail en équipe, de matins très tôt et de nuits tardives sur
                le tarmac, il était temps pour autre chose. Pas moins intensif, mais avec plus de
                contrôle sur mon propre temps. J'avais toujours construit des sites web et travaillé
                comme designer graphique, mais maintenant je voulais aller plus loin. Qu'est-ce qui
                se cache derrière une page web? Comment un frontend parle-t-il à un backend? Comment
                s'assurer que les données circulent de manière fiable de la base de données à l'écran?
            </p>
            <p>
                Via le Novi College et Equals, un réseau soutenant les femmes dans la tech, j'ai
                démarré une formation intensive en développement Full Stack. React, Spring Boot,
                bases de données, REST APIs, Git. Ca a tout de suite cliqué. Pas parce que c'était
                facile, mais parce que la façon de penser était familière: analyser un système,
                comprendre les couches, savoir comment les parties communiquent. Exactement ce que
                j'avais appris sur le tarmac, mais maintenant en code.
            </p>
            <p>
                Déboguer n'est finalement pas si différent de résoudre un problème sur le tarmac.
                On cherche où le système s'écarte du comportement attendu, on remonte à la source
                et on corrige. Méthodique, calme, étape par étape.
            </p>
            <hr className="rule" />
            <h2>Maintenant</h2>
            <p>
                J'ai commencé par pousser des avions en arrière. Maintenant je construis des
                systèmes vers l'avant. Le passage du tarmac à une équipe produit semble grand,
                mais le fondement est resté le même: comprendre comment quelque chose fonctionne,
                savoir où intervenir, et poser des questions un peu plus précises chaque jour. Le
                casque a juste été échangé contre un clavier, et c'est tout aussi passionnant.
            </p>
        </>
    ),
    de: () => (
        <>
            <p>
                Manche denken, mein Berufsweg ist ein Zickzackpfad. KLM, die Stadt Amsterdam,
                Grafikdesign und jetzt Code. Aber wenn ich zurückblicke, sehe ich eine gerade
                Linie: Ich wollte immer Systeme verstehen. Und wenn ich sie verstehe, will ich
                sie bauen.
            </p>
            <hr className="rule" />
            <h2>Amsterdam: Kommunikation als System</h2>
            <p>
                Nach meiner Rückkehr aus München begann ich bei der Stadt Amsterdam als
                Call-Center-Mitarbeiterin beim DWI. Ich entdeckte schnell, dass Kommunikation
                selbst ein System ist: wer sagt was, über welchen Kanal, mit welchem Effekt. In
                meiner Freizeit erstellte ich mit Kollegen eine Mitarbeiterzeitung, die so gut
                ankam, dass ich in die interne Kommunikation wechselte. Mein Auftrag: 16.000
                Kollegen auf dem Intranet aktiv machen. Mein erstes großes Projekt in diesem
                Maßstab, und ich war süchtig nach der Struktur dahinter.
            </p>
            <hr className="rule" />
            <h2>Auf dem Vorfeld: Signale, Systeme und Sicherheit</h2>
            <p>
                Als die Kombination aus Arbeit und Kinderbetreuung als alleinerziehende Mutter
                zu schwer wurde, wählte ich flexible Arbeit bei KLM. Ich arbeitete als
                Bodenstewardess und Gepäckabfertigerin, und wurde während der Pandemie für die
                Dokumentarserie{" "}
                <em>KL2020 Zurück in der Luft</em> ausgewählt, neben CEO Pieter Elbers.
                Schließlich begann ich die dreijährige Ausbildung zur Flugzeugschlepperin und
                Pushback-Fahrerin.
            </p>
            <p>
                Auf dem Vorfeld dreht sich alles um Präzision. Keine unklaren Gesten: Man weiß
                genau, wer wann was tut. Kurze Checks, klare Signale, kontinuierliches Feedback.
                Ein 80-Tonnen-Flugzeug rückwärts zu fahren ist keine Frage der Kraft, sondern
                der Kommunikation und des Timings. Das lehrte mich, wie man komplexe Prozesse
                beherrscht: indem man sie in kleine, kontrollierbare Schritte aufteilt.
            </p>
            <hr className="rule" />
            <h2>Vom Systemdenken zum Systembauen</h2>
            <p>
                Nach Jahren von Schichtarbeit, frühen Morgen und späten Nächten auf dem Rollfeld
                war es Zeit für etwas anderes. Nicht weniger intensiv, aber mit mehr Kontrolle
                über meine eigene Zeit. Ich hatte immer schon Websites gebaut und als
                Grafikdesignerin gearbeitet, aber jetzt wollte ich tiefer gehen. Was steckt
                eigentlich hinter einer Webseite? Wie spricht ein Frontend mit einem Backend?
                Wie stellt man sicher, dass Daten zuverlässig von der Datenbank zum Bildschirm
                fließen?
            </p>
            <p>
                Über das Novi College und Equals, ein Netzwerk für Frauen in der Technik, startete
                ich eine intensive Full-Stack-Development-Ausbildung. React, Spring Boot,
                Datenbanken, REST APIs, Git. Es klickte sofort. Nicht weil es einfach war, sondern
                weil die Denkweise vertraut wirkte: ein System analysieren, die Schichten verstehen,
                wissen wie die Teile miteinander kommunizieren. Genau das, was ich auf dem Vorfeld
                gelernt hatte, aber jetzt in Code.
            </p>
            <p>
                Bugs zu debuggen ist eigentlich nicht so anders als ein Problem auf dem Vorfeld zu
                lösen. Man schaut, wo das System vom erwarteten Verhalten abweicht, verfolgt den
                Weg zur Quelle und behebt es. Methodisch, ruhig, Schritt für Schritt.
            </p>
            <hr className="rule" />
            <h2>Jetzt</h2>
            <p>
                Ich fing damit an, Flugzeuge rückwärts zu schieben. Jetzt baue ich Systeme
                vorwärts. Der Wechsel vom Vorfeld zum Produktteam scheint groß, aber der Kern
                ist gleich geblieben: verstehen wie etwas funktioniert, wissen wo man eingreifen
                muss und jeden Tag etwas schärfere Fragen stellen. Das Headset wurde nur gegen
                eine Tastatur getauscht, und das fühlt sich genauso aufregend an.
            </p>
        </>
    ),
    es: () => (
        <>
            <p>
                La gente a veces piensa que mi carrera es un camino sinuoso. KLM, el ayuntamiento
                de Amsterdam, diseño gráfico, y ahora código. Pero cuando miro atrás, veo una
                línea recta: siempre he querido entender los sistemas. Y cuando los entiendo,
                quiero construirlos.
            </p>
            <hr className="rule" />
            <h2>Ámsterdam: la comunicación como sistema</h2>
            <p>
                Tras mi regreso de Múnich, empecé en el ayuntamiento de Ámsterdam como agente de
                centro de llamadas en el DWI. Descubrí rápidamente que la comunicación en sí misma
                es un sistema: quién dice qué, a través de qué canal, con qué efecto. En mi tiempo
                libre creé con compañeros una revista interna que tuvo tanto éxito que pasé a la
                comunicación interna. Mi misión: conseguir que 16.000 compañeros fueran activos en
                la intranet. Mi primer gran proyecto a escala, y me volví adicta a la estructura
                subyacente.
            </p>
            <hr className="rule" />
            <h2>En la plataforma: señales, sistemas y seguridad</h2>
            <p>
                Cuando combinar el trabajo y el cuidado de los hijos como madre soltera se volvió
                demasiado pesado, elegí un trabajo flexible en KLM. Trabajé como azafata de tierra
                y manejadora de equipaje, y durante la pandemia fui seleccionada para el docusoap{" "}
                <em>KL2020 De vuelta en el aire</em>, junto al CEO Pieter Elbers. Finalmente me
                incorporé a la formación de tres años para convertirme en conductora de remolcadores
                de aviones.
            </p>
            <p>
                En la plataforma, todo gira en torno a la precisión. Sin gestos vagos: se sabe
                exactamente quién hace qué, cuándo. Controles cortos, señales claras,
                retroalimentación continua. Empujar un avión de 80 toneladas hacia atrás no es
                una cuestión de fuerza, sino de comunicación y sincronización. Eso me enseñó cómo
                gestionar procesos complejos: dividiéndolos en pequeños pasos controlables.
            </p>
            <hr className="rule" />
            <h2>Del pensamiento sistémico a la construcción de sistemas</h2>
            <p>
                Después de años de turnos, mañanas tempranas y noches tardías en la pista, era hora
                de algo diferente. No menos intensivo, pero con más control sobre mi propio tiempo.
                Siempre había construido sitios web y trabajado como diseñadora gráfica, pero ahora
                quería ir más profundo. ¿Qué hay realmente detrás de una página web? ¿Cómo habla
                un frontend con un backend? ¿Cómo asegurarse de que los datos fluyen de forma
                fiable de la base de datos a la pantalla?
            </p>
            <p>
                A través del Colegio Novi y Equals, una red que apoya a las mujeres en la
                tecnología, inicié una formación intensiva de desarrollo Full Stack. React, Spring
                Boot, bases de datos, REST APIs, Git. Encajó de inmediato. No porque fuera fácil,
                sino porque la forma de pensar me resultaba familiar: analizar un sistema, entender
                las capas, saber cómo se comunican las partes. Exactamente lo que había aprendido
                en la plataforma, pero ahora en código.
            </p>
            <p>
                Depurar errores en realidad no es tan diferente de resolver un problema en la
                plataforma. Buscas dónde el sistema se desvía del comportamiento esperado, rastrear
                hasta la fuente y corregirlo. Metódico, tranquilo, paso a paso.
            </p>
            <hr className="rule" />
            <h2>Ahora</h2>
            <p>
                Empecé empujando aviones hacia atrás. Ahora construyo sistemas hacia adelante. El
                salto de la plataforma al equipo de producto parece grande, pero la esencia ha
                permanecido igual: entender cómo funciona algo, saber dónde intervenir y hacer
                preguntas un poco más precisas cada día. El auricular solo se ha cambiado por un
                teclado, y eso se siente igual de emocionante.
            </p>
        </>
    ),
    it: () => (
        <>
            <p>
                La gente pensa a volte che la mia carriera sia un percorso tortuoso. KLM, il
                comune di Amsterdam, il design grafico e ora il codice. Ma guardando indietro,
                vedo una linea retta: ho sempre voluto capire i sistemi. E quando li capisco,
                voglio costruirli.
            </p>
            <hr className="rule" />
            <h2>Amsterdam: la comunicazione come sistema</h2>
            <p>
                Dopo il mio ritorno da Monaco, ho iniziato al comune di Amsterdam come operatrice
                di call center al DWI. Ho scoperto rapidamente che la comunicazione stessa è un
                sistema: chi dice cosa, attraverso quale canale, con quale effetto. Nel mio tempo
                libero ho creato con i colleghi un giornale del personale che ha avuto così tanto
                successo da portarmi alla comunicazione interna. Il mio compito: rendere attivi
                16.000 colleghi sulla intranet. Il mio primo grande progetto su larga scala, e mi
                sono appassionata alla struttura che lo sosteneva.
            </p>
            <hr className="rule" />
            <h2>Sulla piazzola: segnali, sistemi e sicurezza</h2>
            <p>
                Quando la combinazione di lavoro e cura dei figli come madre single diventò troppo
                pesante, scelsi un lavoro flessibile in KLM. Ho lavorato come hostess di terra e
                addetta ai bagagli, e durante la pandemia sono stata selezionata per il docusoap{" "}
                <em>KL2020 Di ritorno in volo</em>, accanto al CEO Pieter Elbers. Alla fine sono
                entrata nella formazione triennale per diventare operatrice di rimorchiatori e
                pushback.
            </p>
            <p>
                Sulla piazzola, tutto ruota attorno alla precisione. Nessun gesto vago: si sa
                esattamente chi fa cosa, quando. Controlli brevi, segnali chiari, feedback
                continuo. Spingere indietro un aereo da 80 tonnellate non è una questione di
                forza, ma di comunicazione e tempismo. Questo mi ha insegnato come gestire
                processi complessi: suddividendoli in piccoli passi controllabili.
            </p>
            <hr className="rule" />
            <h2>Dal pensiero sistematico alla costruzione di sistemi</h2>
            <p>
                Dopo anni di lavoro a turni, mattine presto e notti tardive sulla pista, era ora
                di qualcosa di diverso. Non meno intensivo, ma con più controllo sul mio tempo.
                Ho sempre costruito siti web e lavorato come designer grafica, ma ora volevo
                andare più in profondità. Cosa c'è davvero dietro una pagina web? Come parla un
                frontend con un backend? Come si garantisce che i dati fluiscano in modo affidabile
                dal database allo schermo?
            </p>
            <p>
                Tramite il Novi College ed Equals, una rete di supporto alle donne nel settore
                tech, ho iniziato una formazione intensiva di sviluppo Full Stack. React, Spring
                Boot, database, REST API, Git. Ha funzionato subito. Non perché fosse facile, ma
                perché il modo di pensare mi sembrava familiare: analizzare un sistema, capire i
                livelli, sapere come le parti comunicano tra loro. Esattamente quello che avevo
                imparato sulla piazzola, ma ora in codice.
            </p>
            <p>
                Il debugging non è poi così diverso dal risolvere un problema sulla piazzola. Si
                cerca dove il sistema si discosta dal comportamento atteso, si risale alla fonte e
                si corregge. Metodico, calmo, passo dopo passo.
            </p>
            <hr className="rule" />
            <h2>Ora</h2>
            <p>
                Ho iniziato spingendo aerei indietro. Ora costruisco sistemi in avanti. Il
                passaggio dalla piazzola al team di prodotto sembra grande, ma il nucleo è rimasto
                lo stesso: capire come funziona qualcosa, sapere dove intervenire e fare domande
                un po' più precise ogni giorno. La cuffia è stata semplicemente scambiata con una
                tastiera, ed è altrettanto emozionante.
            </p>
        </>
    ),
};

const ui = {
    nl: { back: "← Terug naar journal", date: "1 september 2025", read: "~5 min lezen", shareTitle: "Van vliegtuigsleper tot Full Stack Developer", shareText: "Lees mijn verhaal van platform naar productteam." },
    en: { back: "← Back to journal", date: "September 1, 2025", read: "~5 min read", shareTitle: "From Aircraft Tug Driver to Full Stack Developer", shareText: "Read my story from the tarmac to a product team." },
    fr: { back: "← Retour au journal", date: "1er septembre 2025", read: "~5 min de lecture", shareTitle: "De conductrice de remorqueur a Full Stack Developer", shareText: "Mon parcours du tarmac a une equipe produit." },
    de: { back: "← Zurück zum Journal", date: "1. September 2025", read: "~5 Min. Lesezeit", shareTitle: "Vom Flugzeugschlepper zur Full Stack Entwicklerin", shareText: "Mein Weg vom Vorfeld zum Produktteam." },
    es: { back: "← Volver al diario", date: "1 de septiembre de 2025", read: "~5 min de lectura", shareTitle: "De remolcadora de aviones a Full Stack Developer", shareText: "Mi historia desde la plataforma hasta el equipo de producto." },
    it: { back: "← Torna al journal", date: "1 settembre 2025", read: "~5 min di lettura", shareTitle: "Da operatrice di rimorchiatori a Full Stack Developer", shareText: "La mia storia dalla piazzola al team di prodotto." },
};

export default function FullStackDeveloper() {
    const { t: tr, i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const t = ui[lang] || ui.en;
    const Body = bodies[lang] || bodies.en;
    const base = "/journal/klm-pushback";

    return (
        <section id="article-scrummaster" className="section section-alt">
            <div className="container article-container">
                <Link to="/#journal" className="back-link">{t.back}</Link>
                <nav aria-label="Breadcrumb" className="breadcrumbs">
                    <Link to="/">{tr('nav.home')}</Link>
                    <span className="breadcrumb-sep" aria-hidden="true">›</span>
                    <Link to="/#journal">{tr('nav.journal')}</Link>
                    <span className="breadcrumb-sep" aria-hidden="true">›</span>
                    <span aria-current="page">{t.shareTitle}</span>
                </nav>

                <figure className="story-cover">
                    <picture>
                        <source type="image/avif" srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w, ${base}-1200w.avif 1200w`} sizes="(max-width: 920px) 100vw, 1200px" />
                        <source type="image/webp" srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w, ${base}-1200w.webp 1200w`} sizes="(max-width: 920px) 100vw, 1200px" />
                        <img src={`${base}-800w.webp`} alt="KLM platform, pushback tugger" width="1200" height="630" loading="eager" fetchPriority="high" decoding="async" />
                    </picture>
                </figure>

                <header className="story-header">
                    <h1>Van vliegtuigsleper tot Full Stack&nbsp;Developer</h1>
                    <p className="small meta">
                        <time dateTime="2025-09-01">{t.date}</time> • {t.read}
                    </p>
                </header>

                <article className="story-body card">
                    <Body />
                </article>

                <footer className="story-footer">
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/manonkeeman/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://substack.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Substack"><SiSubstack /></a>
                        <ShareButton shareTitle={t.shareTitle} shareText={t.shareText} />
                    </div>
                </footer>
                <div className="story-back-bottom">
                    <Link to="/#journal" className="back-link">{t.back}</Link>
                </div>
            </div>

            <style>{`
        .story-back-bottom{margin-top:24px;padding-top:8px;border-top:1px solid var(--border);}
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
        .socials {display:flex;justify-content:center;gap:20px;font-size:1.8rem;margin-top:12px;}
        .socials a, .share-btn {
          color:var(--muted);background:none;border:none;cursor:pointer;
          transition:color .2s ease, transform .2s ease;
        }
        .socials a:hover, .share-btn:hover {color:var(--accent);transform:translateY(-2px);}
      `}</style>
        </section>
    );
}