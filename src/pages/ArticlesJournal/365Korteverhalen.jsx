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
                Ik schrijf een boek dat nog geen boek is. Het is een verzameling scènes, losse fragmenten, momenten die me nooit meer
                losgelaten hebben. Soms schrijf ik een alinea alsof het een kort verhaal is, soms een losse flard van een herinnering
                die pas later een plek krijgt.
            </p>
            <p>
                Bij de Schrijversacademie in Amsterdam ontdekte mijn lerares Tanja Heimans, zelf schrijfster van onder andere{" "}
                <em>De Huurmoeder</em>, iets dat ik zelf niet durfde te geloven: dat ik talent had. Vooral de stukken waarin ik schreef
                over mijn jeugd raakten haar. Ze zei: "Dit is je stem. Hier zit je kracht." Zonder haar aanmoediging had ik dit project
                misschien nooit serieus genomen.
            </p>
            <p>
                Toch schrijf ik niet op de klassieke manier. Komma's, punten, grammatica, het waren altijd mijn struikelblokken. Alleen
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
                <br /><br />
                Wat doe je met een jeugd vol bizarre scènes die eerder op een absurde film lijken dan op een familiegeschiedenis? Je
                schrijft ze op. Een voor elke dag. 365 keer.
                <br /><br />
                In dit boek vind je fragmenten die soms wrang, soms wat zwarte humor, en altijd ongelooflijk echt zijn. Van nagelriemen tot
                het moment dat mijn moeder me bij jeugdzorg aanmeldde als kindermishandelaar.
                <br /><br />
                Het is geen ode aan haar, maar een inventaris van de absurditeit. Een jaar lang opnieuw beginnen, niet omdat ik dat wilde,
                maar omdat het de enige manier was om te overleven.
            </blockquote>
            <p>
                Misschien is dit boek straks een roman, misschien een bundel fragmenten. Misschien blijft het iets ertussenin. Maar wat ik
                zeker weet: dit keer blijf ik schrijven. Niet om terug te kijken, maar om vooruit te bewegen. 365 keer.
            </p>
        </>
    ),
    en: () => (
        <>
            <p>
                I am writing a book that is not yet a book. It is a collection of scenes, loose fragments, moments that have never let
                go of me. Sometimes I write a paragraph as if it were a short story, sometimes a loose shred of a memory that will only
                find its place later.
            </p>
            <p>
                At the Writers Academy in Amsterdam, my teacher Tanja Heimans, herself the author of among other things{" "}
                <em>De Huurmoeder</em>, discovered something I did not dare believe myself: that I had talent. Especially the pieces in
                which I wrote about my childhood moved her. She said: "This is your voice. This is where your strength lies." Without
                her encouragement I might never have taken this project seriously.
            </p>
            <p>
                Yet I do not write in the classical way. Commas, full stops, grammar, those were always my stumbling blocks. Only
                thanks to ChatGPT can I now write without mistakes. Not because I have suddenly changed, but because technology removes
                the noise. I can focus entirely on the essence: telling the story. And yes, I use AI without shame. Because honestly?
                It is my lifeline.
            </p>
            <p>The result is a book still in progress. Not a finished work, but a process that is allowed to be visible. A book in the making.</p>
            <blockquote>
                <strong>365 times starting over</strong>
                <br />
                Some mothers bake apple pies. Mine baked accusations. She did not only cut vegetables in the kitchen, but also my
                reputation at institutions.
                <br /><br />
                What do you do with a childhood full of bizarre scenes that resemble an absurd film more than a family history? You
                write them down. One for each day. 365 times.
                <br /><br />
                In this book you find fragments that are sometimes bitter, sometimes dark humour, and always incredibly real. From nail
                clippings to the moment my mother reported me to child services as a child abuser.
                <br /><br />
                It is not an ode to her, but an inventory of the absurdity. A year of starting over, not because I wanted to, but
                because it was the only way to survive.
            </blockquote>
            <p>
                Maybe this book will become a novel, maybe a bundle of fragments. Maybe it will stay something in between. But what I
                know for certain: this time I will keep writing. Not to look back, but to move forward. 365 times.
            </p>
        </>
    ),
    fr: () => (
        <>
            <p>
                J'écris un livre qui n'est pas encore un livre. C'est une collection de scènes, de fragments épars, de moments qui ne
                m'ont jamais quittée. Parfois j'écris un paragraphe comme si c'était une nouvelle, parfois un lambeau de souvenir qui
                ne trouvera sa place que plus tard.
            </p>
            <p>
                A l'Académie des écrivains d'Amsterdam, ma professeure Tanja Heimans, elle-même auteure notamment de{" "}
                <em>De Huurmoeder</em>, a découvert quelque chose que je n'osais pas croire moi-même: que j'avais du talent. Surtout
                les textes dans lesquels j'écrivais sur mon enfance la touchaient. Elle a dit: "C'est ta voix. C'est là que réside ta
                force." Sans ses encouragements, je n'aurais peut-être jamais pris ce projet au sérieux.
            </p>
            <p>
                Pourtant, je n'écris pas à la manière classique. Les virgules, les points, la grammaire, c'était toujours mes points
                de trébuchement. C'est seulement grâce à ChatGPT que je peux maintenant écrire sans fautes. Non pas parce que j'ai
                soudainement changé, mais parce que la technologie enlève le bruit. Je peux me concentrer entièrement sur l'essentiel:
                raconter. Et oui, j'utilise l'IA sans honte. Parce qu'honnêtement? C'est ma bouée de sauvetage.
            </p>
            <p>Le résultat est un livre encore en cours. Pas une oeuvre achevée, mais un processus qui peut être visible. Un livre en devenir.</p>
            <blockquote>
                <strong>365 fois recommencer</strong>
                <br />
                Certaines mères font des tartes aux pommes. La mienne faisait des accusations. Elle ne coupait pas seulement des légumes
                dans la cuisine, mais aussi ma réputation auprès des institutions.
                <br /><br />
                Que fait-on d'une enfance pleine de scènes bizarres qui ressemblent davantage à un film absurde qu'à une histoire
                familiale? On les écrit. Une pour chaque jour. 365 fois.
                <br /><br />
                Dans ce livre, vous trouverez des fragments parfois amers, parfois avec un humour noir, et toujours incroyablement
                vrais. Des ongles coupés au moment où ma mère m'a signalée à la protection de l'enfance comme maltraitante.
                <br /><br />
                Ce n'est pas une ode à elle, mais un inventaire de l'absurdité. Une année à recommencer, non pas parce que je le
                voulais, mais parce que c'était la seule façon de survivre.
            </blockquote>
            <p>
                Peut-être que ce livre deviendra un roman, peut-être un recueil de fragments. Peut-être restera-t-il quelque chose
                entre les deux. Mais ce que je sais avec certitude: cette fois je continuerai à écrire. Non pas pour regarder en
                arrière, mais pour aller de l'avant. 365 fois.
            </p>
        </>
    ),
    de: () => (
        <>
            <p>
                Ich schreibe ein Buch, das noch kein Buch ist. Es ist eine Sammlung von Szenen, losen Fragmenten, Momenten, die mich
                nie losgelassen haben. Manchmal schreibe ich einen Absatz, als wäre er eine Kurzgeschichte, manchmal ein loses Fetzen
                einer Erinnerung, die erst später einen Platz findet.
            </p>
            <p>
                An der Schriftstellerakademie in Amsterdam entdeckte meine Lehrerin Tanja Heimans, selbst Autorin unter anderem von{" "}
                <em>De Huurmoeder</em>, etwas, was ich selbst nicht zu glauben wagte: dass ich Talent hatte. Besonders die Stücke,
                in denen ich über meine Kindheit schrieb, berührten sie. Sie sagte: "Das ist deine Stimme. Hier liegt deine Stärke."
                Ohne ihre Ermutigung hätte ich dieses Projekt vielleicht nie ernsthaft betrieben.
            </p>
            <p>
                Dennoch schreibe ich nicht auf klassische Weise. Kommas, Punkte, Grammatik, das waren immer meine Stolpersteine. Nur
                dank ChatGPT kann ich jetzt fehlerfrei schreiben. Nicht weil ich plötzlich anders bin, sondern weil Technologie das
                Rauschen entfernt. Ich kann mich vollständig auf das Wesentliche konzentrieren: erzählen. Und ja, ich nutze KI ohne
                Scham. Denn ehrlich gesagt? Es ist mein Rettungsring.
            </p>
            <p>Das Ergebnis ist ein Buch, das noch unterwegs ist. Kein fertiges Werk, sondern ein Prozess, der sichtbar sein darf. Ein Buch im Entstehen.</p>
            <blockquote>
                <strong>365 mal neu anfangen</strong>
                <br />
                Manche Mütter backen Apfelkuchen. Meine buk Anschuldigungen. Sie schnitt in der Küche nicht nur Gemüse, sondern auch
                meinen Ruf bei Behörden.
                <br /><br />
                Was macht man mit einer Kindheit voller bizarrer Szenen, die eher einem absurden Film als einer Familiengeschichte
                ähneln? Man schreibt sie auf. Eine für jeden Tag. 365 Mal.
                <br /><br />
                In diesem Buch finden Sie Fragmente, die manchmal bitter, manchmal schwarzhumorig und immer unglaublich echt sind. Von
                Nagelresten bis zu dem Moment, als meine Mutter mich beim Jugendamt als Kindesmisshandlerin meldete.
                <br /><br />
                Es ist keine Ode an sie, sondern ein Inventar der Absurdität. Ein Jahr lang neu anfangen, nicht weil ich das wollte,
                sondern weil es der einzige Weg war zu überleben.
            </blockquote>
            <p>
                Vielleicht wird dieses Buch ein Roman, vielleicht ein Fragmentband. Vielleicht bleibt es etwas dazwischen. Aber was
                ich mit Sicherheit weiß: diesmal bleibe ich am Schreiben. Nicht um zurückzublicken, sondern um vorwärtszugehen.
                365 Mal.
            </p>
        </>
    ),
    es: () => (
        <>
            <p>
                Estoy escribiendo un libro que todavía no es un libro. Es una colección de escenas, fragmentos sueltos, momentos que
                nunca me han soltado. A veces escribo un párrafo como si fuera un cuento corto, a veces un trozo suelto de un recuerdo
                que solo encontrará su lugar más adelante.
            </p>
            <p>
                En la Academia de Escritores de Amsterdam, mi profesora Tanja Heimans, ella misma autora de entre otras cosas{" "}
                <em>De Huurmoeder</em>, descubrió algo que yo misma no me atrevía a creer: que tenía talento. Especialmente los textos
                en los que escribía sobre mi infancia la conmovían. Dijo: "Esta es tu voz. Aquí está tu fuerza." Sin su aliento, quizás
                nunca hubiera tomado este proyecto en serio.
            </p>
            <p>
                Sin embargo, no escribo de la manera clásica. Comas, puntos, gramática, siempre fueron mis tropiezos. Solo gracias a
                ChatGPT puedo ahora escribir sin errores. No porque de repente haya cambiado, sino porque la tecnología elimina el
                ruido. Puedo centrarme completamente en lo esencial: contar. Y sí, uso la IA sin vergüenza. Porque honestamente? Es
                mi salvavidas.
            </p>
            <p>El resultado es un libro que aún está en camino. No una obra terminada, sino un proceso que puede ser visible. Un libro en construcción.</p>
            <blockquote>
                <strong>365 veces empezar de nuevo</strong>
                <br />
                Algunas madres hornean tartas de manzana. La mía horneaba acusaciones. No solo cortaba verduras en la cocina, sino
                también mi reputación ante las instituciones.
                <br /><br />
                ¿Qué haces con una infancia llena de escenas bizarras que se parecen más a una película absurda que a una historia
                familiar? Las escribes. Una por cada día. 365 veces.
                <br /><br />
                En este libro encontrarás fragmentos que a veces son amargos, a veces con humor negro, y siempre increíblemente
                reales. Desde cutículas hasta el momento en que mi madre me denunció a los servicios de protección infantil como
                maltratadora.
                <br /><br />
                No es una oda a ella, sino un inventario de lo absurdo. Un año empezando de nuevo, no porque quisiera, sino porque
                era la única manera de sobrevivir.
            </blockquote>
            <p>
                Quizás este libro se convierta en una novela, quizás en una colección de fragmentos. Quizás se quede en algo
                intermedio. Pero lo que sé con certeza: esta vez seguiré escribiendo. No para mirar atrás, sino para avanzar.
                365 veces.
            </p>
        </>
    ),
    it: () => (
        <>
            <p>
                Sto scrivendo un libro che non e' ancora un libro. E' una raccolta di scene, frammenti sciolti, momenti che non mi
                hanno mai lasciato andare. A volte scrivo un paragrafo come se fosse un racconto breve, a volte un brandello sciolto
                di un ricordo che trovera' il suo posto solo piu' tardi.
            </p>
            <p>
                All'Accademia degli scrittori di Amsterdam, la mia insegnante Tanja Heimans, lei stessa autrice tra l'altro di{" "}
                <em>De Huurmoeder</em>, ha scoperto qualcosa che io stessa non osavo credere: che avevo talento. Specialmente i
                pezzi in cui scrivevo della mia infanzia la commovevano. Ha detto: "Questa e' la tua voce. Qui c'e' la tua forza."
                Senza il suo incoraggiamento forse non avrei mai preso sul serio questo progetto.
            </p>
            <p>
                Eppure non scrivo nel modo classico. Virgole, punti, grammatica, erano sempre i miei ostacoli. Solo grazie a
                ChatGPT posso ora scrivere senza errori. Non perche' sia improvvisamente cambiata, ma perche' la tecnologia elimina
                il rumore. Posso concentrarmi completamente sull'essenziale: raccontare. E si', uso l'IA senza vergogna. Perche'
                onestamente? E' il mio salvagente.
            </p>
            <p>Il risultato e' un libro ancora in corso. Non un'opera finita, ma un processo che puo' essere visibile. Un libro in divenire.</p>
            <blockquote>
                <strong>365 volte ricominciare</strong>
                <br />
                Alcune madri fanno le torte di mele. La mia faceva le accuse. Non tagliava solo le verdure in cucina, ma anche la
                mia reputazione presso le istituzioni.
                <br /><br />
                Cosa si fa con un'infanzia piena di scene bizzarre che assomigliano piu' a un film assurdo che a una storia di
                famiglia? Le si scrive. Una per ogni giorno. 365 volte.
                <br /><br />
                In questo libro troverai frammenti a volte amari, a volte con umorismo nero, e sempre incredibilmente reali. Dalle
                cuticole al momento in cui mia madre mi ha segnalato ai servizi sociali come maltrattante.
                <br /><br />
                Non e' un'ode a lei, ma un inventario dell'assurdita'. Un anno a ricominciare, non perche' lo volessi, ma perche'
                era l'unico modo per sopravvivere.
            </blockquote>
            <p>
                Forse questo libro diventer&agrave; un romanzo, forse una raccolta di frammenti. Forse resters qualcosa nel mezzo.
                Ma quello che so con certezza: questa volta continuo a scrivere. Non per guardare indietro, ma per andare avanti.
                365 volte.
            </p>
        </>
    ),
};

const ui = {
    nl: { back: "← Terug naar journal", date: "25 september 2025", read: "~6 min lezen", title: "Het boek in wording: 365 fragmenten van wat achterbleef en weer opnieuw begon", shareTitle: "365 fragmenten van wat er achterbleef en weer opnieuw begon", shareText: "Het boek in wording: fragmenten uit een verleden die eerder absurd dan gewoon was." },
    en: { back: "← Back to journal", date: "September 25, 2025", read: "~6 min read", title: "The Book in Progress: 365 Fragments of What Remained and Began Again", shareTitle: "365 fragments of what remained and began again", shareText: "The book in progress: fragments from a past that was more absurd than ordinary." },
    fr: { back: "← Retour au journal", date: "25 septembre 2025", read: "~6 min de lecture", title: "Le livre en devenir: 365 fragments de ce qui est reste et a recommence", shareTitle: "365 fragments de ce qui est reste et a recommence", shareText: "Le livre en devenir: fragments d'un passe plus absurde qu'ordinaire." },
    de: { back: "← Zurück zum Journal", date: "25. September 2025", read: "~6 Min. Lesezeit", title: "Das Buch im Entstehen: 365 Fragmente von dem, was blieb und neu begann", shareTitle: "365 Fragmente von dem, was blieb und neu begann", shareText: "Das Buch im Entstehen: Fragmente einer Vergangenheit, die eher absurd als gewohnlich war." },
    es: { back: "← Volver al diario", date: "25 de septiembre de 2025", read: "~6 min de lectura", title: "El libro en construccion: 365 fragmentos de lo que quedo y empezo de nuevo", shareTitle: "365 fragmentos de lo que quedo y empezo de nuevo", shareText: "El libro en construccion: fragmentos de un pasado mas absurdo que ordinario." },
    it: { back: "← Torna al journal", date: "25 settembre 2025", read: "~6 min di lettura", title: "Il libro in divenire: 365 frammenti di cio' che rimase e ricominciò", shareTitle: "365 frammenti di cio che rimase e ricominciò", shareText: "Il libro in divenire: frammenti di un passato piu' assurdo che ordinario." },
};

export default function BoekArtikel() {
    const { i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const t = ui[lang] || ui.en;
    const Body = bodies[lang] || bodies.en;
    const base = "/journal/cover365fragmenten";

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({ title: t.shareTitle, text: t.shareText, url: window.location.href })
                .catch((err) => console.error("Share cancelled:", err));
        } else {
            navigator.clipboard?.writeText(window.location.href);
        }
    };

    return (
        <section id="boek" className="section section-alt">
            <div className="container article-container">
                <Link to="/#journal" className="back-link">{t.back}</Link>

                <figure className="story-cover story-cover--contain">
                    <picture>
                        <source type="image/avif" srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w, ${base}-1200w.avif 1200w`} sizes="(max-width: 920px) 100vw, 1200px" />
                        <source type="image/webp" srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w, ${base}-1200w.webp 1200w`} sizes="(max-width: 920px) 100vw, 1200px" />
                        <img src={`${base}-800w.webp`} alt="Cover 365 keer opnieuw beginnen" loading="eager" fetchPriority="high" decoding="async" />
                    </picture>
                </figure>

                <header className="story-header">
                    <h1>{t.title}</h1>
                    <p className="small meta">
                        <time dateTime="2025-09-25">{t.date}</time> • {t.read}
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
        .story-cover{margin:8px auto 16px;max-width:68ch;}
        .story-cover img{display:block;width:100%;border-radius:14px;}
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
        .socials{display:flex;justify-content:center;gap:20px;font-size:1.8rem;margin-top:12px;}
        .socials a,.share-btn{color:var(--muted);background:none;border:none;cursor:pointer;transition:color .2s ease, transform .2s ease;}
        .socials a:hover,.share-btn:hover{color:var(--accent);transform:translateY(-2px);}
      `}</style>
        </section>
    );
}