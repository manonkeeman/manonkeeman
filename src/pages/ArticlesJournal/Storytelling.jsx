import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import ShareButton from "../../assets/Components/ShareButton.jsx";

const bodies = {
    nl: () => (
        <>
            <p>
                De meeste developers zien storytelling als iets voor marketeers of schrijvers met een MacBook in een koffiebar.
                Maar vergis je niet: ook in IT is het een gamechanger. Of je nu een feature uitlegt aan een product owner,
                documentatie schrijft voor je team of je code pitcht tijdens een hackathon, het verschil zit hem niet in de logica,
                maar in het verhaal dat je vertelt.
            </p>
            <p>
                En over hackathons gesproken: toen ik er voor het eerst van hoorde dacht ik dat het iets met bijlen was.
                Het bleek een soort creatieve marathon van 24 tot 48 uur,
                waarin je met een team non-stop bouwt aan een prototype rond een thema.
                Denk: "bedenk een app die duurzaam reizen stimuleert." Verwacht slapeloze nachten,
                teveel pizza en een zee van lege koffiebekers, maar ook een zaal vol energie.
                En op het einde: een pitch voor de jury alsof je leven er vanaf hangt.
            </p>
            <h2>1. Code is logica, maar mensen denken in verhalen</h2>
            <p>
                Jij denkt in functies, classes en API's. De rest van de wereld niet.
                Een goed verhaal is de brug: het legt niet alle technische details bloot,
                maar wel <em>waarom het uitmaakt.</em> Wat lost dit op? Voor wie?
                Waarom is dit waardevol?
            </p>
            <h2>2. User stories zijn eigenlijk mini-verhalen</h2>
            <p>
                Agile doet het stiekem al. <em>"Als gebruiker wil ik X zodat Y"</em>
                Hoofdpersoon: de user. Conflict: het probleem. Oplossing: de feature.
                Dat is een microverhaal. Korte verhalen = betere focus = makkelijker onthouden.
            </p>
            <h2>3. Storytelling in je dagelijkse werk</h2>
            <ul>
                <li><strong>Code reviews:</strong> vertel niet alleen <em>wat</em> je hebt aangepast, maar <em>waarom</em>.</li>
                <li><strong>Presentaties:</strong> Begin met een herkenbaar voorbeeld in plaats van een diagram vol pijltjes.</li>
                <li><strong>Documentatie:</strong> Schrijf scenario's. "Stel, je bent nieuw en wilt in 5 minuten draaien; zo doe je dat."</li>
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
                Het is geen eindpunt, maar een vaardigheid die me meeneemt in mijn groei als Full Stack Developer.
            </p>
        </>
    ),
    en: () => (
        <>
            <p>
                Most developers see storytelling as something for marketers or writers with a MacBook in a coffee shop.
                But make no mistake: in IT it is a game-changer too. Whether you are explaining a feature to a product
                owner, writing documentation for your team or pitching your code at a hackathon, the difference is not
                in the logic but in the story you tell.
            </p>
            <p>
                Speaking of hackathons: when I first heard the word I thought it had something to do with axes. It
                turned out to be a creative marathon of 24 to 48 hours, where you build a prototype with a team around
                a theme. Think: "create an app that encourages sustainable travel." Expect sleepless nights, too much
                pizza and a sea of empty coffee cups, but also a room buzzing with energy. And at the end: a pitch to
                the jury as if your life depends on it.
            </p>
            <h2>1. Code is logic, but people think in stories</h2>
            <p>
                You think in functions, classes and APIs. The rest of the world does not.
                A good story is the bridge: it does not expose all the technical details, but it does show{" "}
                <em>why it matters.</em> What does this solve? For whom? Why is this valuable?
            </p>
            <h2>2. User stories are actually mini-narratives</h2>
            <p>
                Agile is already doing it quietly. <em>"As a user I want X so that Y"</em> Character: the user.
                Conflict: the problem. Resolution: the feature. That is a micro-story. Short stories = better focus = easier to remember.
            </p>
            <h2>3. Storytelling in your daily work</h2>
            <ul>
                <li><strong>Code reviews:</strong> explain not just <em>what</em> you changed, but <em>why</em>.</li>
                <li><strong>Presentations:</strong> Start with a relatable example rather than a diagram full of arrows.</li>
                <li><strong>Documentation:</strong> Write scenarios. "Imagine you are new and want to get running in 5 minutes; here is how."</li>
            </ul>
            <h2>4. How to get better</h2>
            <ul>
                <li><strong>Know your audience.</strong> A designer thinks differently than a CTO.</li>
                <li><strong>Use metaphors.</strong> API = restaurant menu. Database = filing cabinet.</li>
                <li><strong>Keep it sharp.</strong> One anecdote often says more than ten slides.</li>
                <li><strong>Practice.</strong> Drop mini-stories into a stand-up and see how differently people react.</li>
            </ul>
            <h2>5. The bonus: you stand out</h2>
            <p>
                In a world where many developers mainly speak in code, you stand out when you communicate clearly and
                humanly. Storytelling makes you a stronger team member and shows that you bring more than just
                technical knowledge. For me it is still practice, but I already notice that a story opens doors that a
                dry explanation keeps closed. It is not an endpoint, but a skill that carries me forward in my growth as
                a Full Stack Developer.
            </p>
        </>
    ),
    fr: () => (
        <>
            <p>
                La plupart des développeurs voient le storytelling comme quelque chose réservé aux marketeurs ou aux
                écrivains avec un MacBook dans un café. Mais ne vous y trompez pas: en IT c'est aussi un game-changer.
                Que vous expliquiez une fonctionnalité à un product owner, rédigiez de la documentation pour votre
                équipe ou pitchiez votre code lors d'un hackathon, la différence ne réside pas dans la logique, mais
                dans l'histoire que vous racontez.
            </p>
            <p>
                En parlant de hackathons: quand j'en ai entendu parler pour la première fois, j'ai pensé que c'était
                lié aux haches. Il s'est avéré que c'est une sorte de marathon créatif de 24 à 48 heures, où l'on
                construit un prototype en équipe autour d'un thème. Pensez: "créez une application qui encourage le
                voyage durable." Attendez-vous à des nuits sans sommeil, trop de pizzas et une mer de tasses de café
                vides, mais aussi une salle remplie d'énergie. Et à la fin: un pitch devant le jury comme si votre vie
                en dépendait.
            </p>
            <h2>1. Le code est logique, mais les humains pensent en histoires</h2>
            <p>
                Vous pensez en fonctions, classes et APIs. Le reste du monde, non.
                Une bonne histoire est le pont: elle ne révèle pas tous les détails techniques, mais montre{" "}
                <em>pourquoi cela compte.</em> Qu'est-ce que ça résout? Pour qui? Pourquoi est-ce précieux?
            </p>
            <h2>2. Les user stories sont en fait des mini-récits</h2>
            <p>
                L'Agile le fait déjà discrètement. <em>"En tant qu'utilisateur, je veux X afin de Y"</em> Personnage:
                l'utilisateur. Conflit: le problème. Résolution: la fonctionnalité. C'est un micro-récit. Des histoires
                courtes = meilleure concentration = plus facile à retenir.
            </p>
            <h2>3. Le storytelling dans votre travail quotidien</h2>
            <ul>
                <li><strong>Revues de code:</strong> expliquez non seulement <em>ce que</em> vous avez modifié, mais <em>pourquoi</em>.</li>
                <li><strong>Présentations:</strong> Commencez par un exemple familier plutôt qu'un diagramme plein de flèches.</li>
                <li><strong>Documentation:</strong> Rédigez des scénarios. "Imaginez que vous êtes nouveau et voulez démarrer en 5 minutes; voici comment."</li>
            </ul>
            <h2>4. Comment progresser</h2>
            <ul>
                <li><strong>Connaissez votre public.</strong> Un designer pense différemment d'un CTO.</li>
                <li><strong>Utilisez des métaphores.</strong> API = menu de restaurant. Base de données = classeur.</li>
                <li><strong>Soyez précis.</strong> Une anecdote dit souvent plus que dix diapositives.</li>
                <li><strong>Pratiquez.</strong> Glissez des mini-histoires dans un stand-up et voyez comment les gens réagissent différemment.</li>
            </ul>
            <h2>5. Le bonus: vous vous démarquez</h2>
            <p>
                Dans un monde où beaucoup de développeurs parlent surtout en code, vous vous démarquez quand vous
                communiquez clairement et humainement. Le storytelling fait de vous un membre d'équipe plus fort et
                montre que vous apportez plus que de simples connaissances techniques. Pour moi c'est encore de la
                pratique, mais je remarque déjà qu'une histoire ouvre des portes qu'une explication sèche garde
                fermées. Ce n'est pas une fin en soi, mais une compétence qui m'accompagne dans ma croissance en tant
                que développeuse Full Stack.
            </p>
        </>
    ),
    de: () => (
        <>
            <p>
                Die meisten Entwickler sehen Storytelling als etwas für Marketer oder Schreiber mit einem MacBook im
                Café. Aber täuschen Sie sich nicht: Auch in der IT ist es ein Game-Changer. Ob Sie eine Funktion einem
                Product Owner erklären, Dokumentation für Ihr Team schreiben oder Ihren Code beim Hackathon pitchen,
                der Unterschied liegt nicht in der Logik, sondern in der Geschichte, die Sie erzählen.
            </p>
            <p>
                Apropos Hackathons: Als ich davon zum ersten Mal hörte, dachte ich, das hätte mit Äxten zu tun. Es
                stellte sich heraus, dass es eine Art kreativer Marathon von 24 bis 48 Stunden ist, bei dem man mit
                einem Team rund um die Uhr ein Prototyp zu einem Thema baut. Denken Sie: "Entwickeln Sie eine App, die
                nachhaltiges Reisen fördert." Erwarten Sie schlaflose Nächte, zu viel Pizza und ein Meer leerer
                Kaffeebecher, aber auch einen Raum voller Energie. Und am Ende: ein Pitch vor der Jury, als hinge Ihr
                Leben davon ab.
            </p>
            <h2>1. Code ist Logik, aber Menschen denken in Geschichten</h2>
            <p>
                Sie denken in Funktionen, Klassen und APIs. Der Rest der Welt nicht.
                Eine gute Geschichte ist die Brücke: Sie legt nicht alle technischen Details offen, zeigt aber{" "}
                <em>warum es wichtig ist.</em> Was löst das? Für wen? Warum ist das wertvoll?
            </p>
            <h2>2. User Stories sind eigentlich Mini-Geschichten</h2>
            <p>
                Agile macht das bereits heimlich. <em>"Als Nutzer möchte ich X, damit Y"</em> Hauptfigur: der Nutzer.
                Konflikt: das Problem. Lösung: das Feature. Das ist eine Mikrogeschichte. Kurze Geschichten = besserer
                Fokus = leichter zu merken.
            </p>
            <h2>3. Storytelling in Ihrer täglichen Arbeit</h2>
            <ul>
                <li><strong>Code-Reviews:</strong> erklären Sie nicht nur <em>was</em> Sie geändert haben, sondern <em>warum</em>.</li>
                <li><strong>Präsentationen:</strong> Beginnen Sie mit einem nachvollziehbaren Beispiel statt einem Diagramm voller Pfeile.</li>
                <li><strong>Dokumentation:</strong> Schreiben Sie Szenarien. "Stellen Sie sich vor, Sie sind neu und wollen in 5 Minuten loslegen; so geht das."</li>
            </ul>
            <h2>4. So werden Sie besser</h2>
            <ul>
                <li><strong>Kennen Sie Ihr Publikum.</strong> Ein Designer denkt anders als ein CTO.</li>
                <li><strong>Verwenden Sie Metaphern.</strong> API = Restaurantmenü. Datenbank = Aktenschrank.</li>
                <li><strong>Bleiben Sie präzise.</strong> Eine Anekdote sagt oft mehr als zehn Folien.</li>
                <li><strong>Üben Sie.</strong> Werfen Sie Mini-Geschichten in ein Stand-up und sehen Sie, wie anders Menschen reagieren.</li>
            </ul>
            <h2>5. Der Bonus: Sie fallen auf</h2>
            <p>
                In einer Welt, in der viele Entwickler hauptsächlich in Code sprechen, fallen Sie auf, wenn Sie klar
                und menschlich kommunizieren. Storytelling macht Sie zu einem stärkeren Teammitglied und zeigt, dass
                Sie mehr mitbringen als nur technisches Wissen. Für mich ist es noch Übungssache, aber ich merke
                schon jetzt, dass eine Geschichte Türen öffnet, die eine trockene Erklärung geschlossen lässt. Es ist
                kein Endpunkt, sondern eine Fähigkeit, die mich auf meinem Weg als Full Stack Entwicklerin begleitet.
            </p>
        </>
    ),
    es: () => (
        <>
            <p>
                La mayoría de los desarrolladores ven el storytelling como algo para marketeros o escritores con un
                MacBook en una cafetería. Pero no te equivoques: en IT también es un game-changer. Ya sea que estés
                explicando una función a un product owner, escribiendo documentación para tu equipo o haciendo pitch
                de tu código en un hackathon, la diferencia no está en la lógica, sino en la historia que cuentas.
            </p>
            <p>
                Hablando de hackathons: cuando lo escuché por primera vez pensé que tenía que ver con hachas. Resultó
                ser una especie de maratón creativa de 24 a 48 horas, donde construyes un prototipo con un equipo
                alrededor de un tema. Piensa: "crea una app que fomente el viaje sostenible." Espera noches sin dormir,
                demasiada pizza y un mar de tazas de café vacías, pero también una sala llena de energía. Y al final:
                un pitch al jurado como si tu vida dependiera de ello.
            </p>
            <h2>1. El código es lógica, pero las personas piensan en historias</h2>
            <p>
                Tú piensas en funciones, clases y APIs. El resto del mundo, no.
                Una buena historia es el puente: no expone todos los detalles técnicos, pero sí muestra{" "}
                <em>por qué importa.</em> ¿Qué resuelve? ¿Para quién? ¿Por qué es valioso?
            </p>
            <h2>2. Las user stories son en realidad mini-relatos</h2>
            <p>
                Agile ya lo hace discretamente. <em>"Como usuario quiero X para que Y"</em> Personaje: el usuario.
                Conflicto: el problema. Solución: la función. Eso es un micro-relato. Historias cortas = mejor
                enfoque = más fácil de recordar.
            </p>
            <h2>3. Storytelling en tu trabajo diario</h2>
            <ul>
                <li><strong>Code reviews:</strong> explica no solo <em>qué</em> cambiaste, sino <em>por qué</em>.</li>
                <li><strong>Presentaciones:</strong> Empieza con un ejemplo reconocible en lugar de un diagrama lleno de flechas.</li>
                <li><strong>Documentación:</strong> Escribe escenarios. "Imagina que eres nuevo y quieres estar en marcha en 5 minutos; así se hace."</li>
            </ul>
            <h2>4. Cómo mejorar</h2>
            <ul>
                <li><strong>Conoce a tu audiencia.</strong> Un diseñador piensa diferente que un CTO.</li>
                <li><strong>Usa metáforas.</strong> API = menú de restaurante. Base de datos = archivador.</li>
                <li><strong>Sé preciso.</strong> Una anécdota suele decir más que diez diapositivas.</li>
                <li><strong>Practica.</strong> Lanza mini-historias en un stand-up y observa cómo reacciona la gente de manera diferente.</li>
            </ul>
            <h2>5. El bonus: destacas</h2>
            <p>
                En un mundo donde muchos desarrolladores hablan principalmente en código, destacas cuando te comunicas
                con claridad y humanidad. El storytelling te convierte en un miembro del equipo más fuerte y demuestra
                que aportas más que solo conocimiento técnico. Para mí aún es práctica, pero ya noto que una historia
                abre puertas que una explicación árida mantiene cerradas. No es un destino, sino una habilidad que me
                lleva adelante en mi crecimiento como desarrolladora Full Stack.
            </p>
        </>
    ),
    it: () => (
        <>
            <p>
                La maggior parte degli sviluppatori vede lo storytelling come qualcosa per i marketer o gli scrittori
                con un MacBook in una caffetteria. Ma non ingannarsi: anche nell'IT è un game-changer. Che tu stia
                spiegando una funzionalità a un product owner, scrivendo documentazione per il tuo team o facendo il
                pitch del tuo codice a un hackathon, la differenza non sta nella logica, ma nella storia che racconti.
            </p>
            <p>
                A proposito di hackathon: quando ne ho sentito parlare per la prima volta pensavo avessero a che fare
                con le asce. Si è scoperto che è una sorta di maratona creativa di 24-48 ore, in cui si costruisce un
                prototipo in team attorno a un tema. Pensa: "crea un'app che incoraggi i viaggi sostenibili." Aspettati
                notti senza sonno, troppa pizza e un mare di tazze di caffè vuote, ma anche una sala piena di energia.
                E alla fine: un pitch alla giuria come se la tua vita ne dipendesse.
            </p>
            <h2>1. Il codice è logica, ma le persone pensano in storie</h2>
            <p>
                Tu pensi in funzioni, classi e API. Il resto del mondo no.
                Una buona storia è il ponte: non espone tutti i dettagli tecnici, ma mostra{" "}
                <em>perché è importante.</em> Cosa risolve? Per chi? Perché è prezioso?
            </p>
            <h2>2. Le user story sono in realtà mini-narrazioni</h2>
            <p>
                L'Agile lo fa già in silenzio. <em>"Come utente voglio X affinché Y"</em> Protagonista: l'utente.
                Conflitto: il problema. Soluzione: la funzionalità. Quella è una micro-storia. Storie brevi = migliore
                focus = più facile da ricordare.
            </p>
            <h2>3. Lo storytelling nel tuo lavoro quotidiano</h2>
            <ul>
                <li><strong>Code review:</strong> spiega non solo <em>cosa</em> hai cambiato, ma <em>perché</em>.</li>
                <li><strong>Presentazioni:</strong> Inizia con un esempio riconoscibile invece di un diagramma pieno di frecce.</li>
                <li><strong>Documentazione:</strong> Scrivi scenari. "Immagina di essere nuovo e di voler essere operativo in 5 minuti; ecco come farlo."</li>
            </ul>
            <h2>4. Come migliorare</h2>
            <ul>
                <li><strong>Conosci il tuo pubblico.</strong> Un designer pensa diversamente da un CTO.</li>
                <li><strong>Usa le metafore.</strong> API = menu del ristorante. Database = schedario.</li>
                <li><strong>Sii preciso.</strong> Un aneddoto dice spesso più di dieci slide.</li>
                <li><strong>Esercitati.</strong> Lancia mini-storie in uno stand-up e osserva come le persone reagiscono in modo diverso.</li>
            </ul>
            <h2>5. Il bonus: ti distingui</h2>
            <p>
                In un mondo in cui molti sviluppatori parlano principalmente in codice, ti distingui quando comunichi
                in modo chiaro e umano. Lo storytelling ti rende un membro del team più forte e dimostra che porti
                qualcosa in più della sola conoscenza tecnica. Per me è ancora pratica, ma già noto che una storia
                apre porte che una spiegazione arida tiene chiuse. Non è un punto di arrivo, ma una competenza che mi
                accompagna nella crescita come sviluppatrice Full Stack.
            </p>
        </>
    ),
};

const ui = {
    nl: { back: "← Terug naar journal", date: "14 september 2025", read: "~5 min lezen", shareTitle: "Storytelling voor Developers", shareText: "Waarom jouw code ook een verhaal vertelt." },
    en: { back: "← Back to journal", date: "September 14, 2025", read: "~5 min read", shareTitle: "Storytelling for Developers", shareText: "Why your code also tells a story." },
    fr: { back: "← Retour au journal", date: "14 septembre 2025", read: "~5 min de lecture", shareTitle: "Le storytelling pour les developpeurs", shareText: "Pourquoi votre code raconte aussi une histoire." },
    de: { back: "← Zurück zum Journal", date: "14. September 2025", read: "~5 Min. Lesezeit", shareTitle: "Storytelling fur Entwickler", shareText: "Warum auch Ihr Code eine Geschichte erzahlt." },
    es: { back: "← Volver al diario", date: "14 de septiembre de 2025", read: "~5 min de lectura", shareTitle: "Storytelling para Desarrolladores", shareText: "Por que tu codigo tambien cuenta una historia." },
    it: { back: "← Torna al journal", date: "14 settembre 2025", read: "~5 min di lettura", shareTitle: "Storytelling per Sviluppatori", shareText: "Perche anche il tuo codice racconta una storia." },
};

const titles = {
    nl: "Storytelling voor Developers, een vergeten superkracht",
    en: "Storytelling for Developers, a Forgotten Superpower",
    fr: "Le storytelling pour les developpeurs, un superpouvoir oublie",
    de: "Storytelling fur Entwickler, eine vergessene Superkraft",
    es: "Storytelling para Desarrolladores, un superpoder olvidado",
    it: "Storytelling per Sviluppatori, un superpotere dimenticato",
};

export default function StorytellingForDevelopers() {
    const { i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const t = ui[lang] || ui.en;
    const Body = bodies[lang] || bodies.en;
    const title = titles[lang] || titles.en;
    const base = "/journal/storytelling-it";

    return (
        <section id="storytelling" className="section section-alt">
            <div className="container article-container">
                <Link to="/#journal" className="back-link">{t.back}</Link>

                <figure className="story-cover">
                    <picture>
                        <source type="image/avif" srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w, ${base}-1200w.avif 1200w`} sizes="(max-width: 920px) 100vw, 1200px" />
                        <source type="image/webp" srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w, ${base}-1200w.webp 1200w`} sizes="(max-width: 920px) 100vw, 1200px" />
                        <img src={`${base}-800w.webp`} width="1200" height="630" alt="Storytelling voor developers" loading="eager" fetchPriority="high" decoding="async" />
                    </picture>
                </figure>

                <header className="story-header">
                    <h1>{title}</h1>
                    <p className="small meta">
                        <time dateTime="2025-09-14">{t.date}</time> · {t.read}
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
        .socials{display:flex;justify-content:center;gap:20px;font-size:1.8rem;margin-top:12px;}
        .socials a,.share-btn{color:var(--muted);background:none;border:none;cursor:pointer;transition:color .2s ease, transform .2s ease;}
        .socials a:hover,.share-btn:hover{color:var(--accent);transform:translateY(-2px);}
      `}</style>
        </section>
    );
}