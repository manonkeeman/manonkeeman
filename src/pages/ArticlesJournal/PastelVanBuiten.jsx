import { Link } from "../../assets/Components/LocaleLink.jsx";
import { useTranslation } from "react-i18next";
import ArticleFooter from "../../assets/Components/ArticleFooter.jsx";

const bodies = {
    nl: () => (
        <>
            <p>
                Marie is familie. Mijn nichtje, en bovenal mijn vriendin.
            </p>
            <p>
                Haar website bouwen voelde anders dan elk ander project. Niet omdat de opdracht
                ingewikkeld was, maar omdat ik haar ken. Marie wilde pasteltinten, dat stond meteen
                vast. Ik had al een retro design in gedachten en heb dat aangepast op haar kleuren:
                zo zoet als Jamin op het eerste gezicht, maar ondertussen toch niet helemaal.
            </p>
            <p>
                Dat is precies wat we hebben gebouwd: een blog die op het eerste gezicht zoet en
                uitnodigend oogt, met ruimte voor wie blijft lezen om iets dieper te gaan.
                Net als Marie zelf.
            </p>
            <p>
                Het was een eer om iets te bouwen voor iemand die zo dicht bij me staat.
                Niet elk project krijgt die ruimte.
            </p>
            <hr className="rule" />
            <h2>Wat zit er achter die pasteltinten?</h2>
            <p>
                Onder die zachte kleuren op marieboddaert.nl zit best wat techniek. Even simpel
                uitgelegd, voor wie geen developer is.
            </p>
            <h3>Een CMS, ofwel: een knop in plaats van een telefoontje naar mij</h3>
            <p>
                CMS staat voor Content Management Systeem. Saaie naam, handig ding. Het betekent
                dat Marie zelf nieuwe verhalen kan plaatsen wanneer ze wil, zonder mij te hoeven
                bellen of een cursus programmeren te volgen. Ze typt haar verhaal, klikt op
                publiceren, en klaar.
            </p>
            <h3>Slugs, ofwel: een nette naam voor elke pagina</h3>
            <p>
                Een slug is het stukje van de link na de laatste slash. In plaats van een webadres
                vol rare letters en cijfers krijgt elk verhaal een leesbare naam. Dus niet
                marieboddaert.nl/post-3829x, maar bijvoorbeeld marieboddaert.nl/over-mij.
                Fijn voor lezers, en fijn voor Google.
            </p>
            <h3>SEO, ofwel: zorgen dat Google je weet te vinden</h3>
            <p>
                SEO staat voor Search Engine Optimization. In gewone taal: ervoor zorgen dat als
                iemand iets googelt waar Marie's blog over gaat, haar site ook echt naar boven
                komt. Geen toverkunst, gewoon een hoop kleine dingen goed doen: duidelijke titels,
                snelle laadtijden, en teksten die zowel mensen als Google snappen.
            </p>
            <hr className="rule" />
            <p>
                Het resultaat: een website die er rustig en zacht uitziet, maar onder de motorkap
                precies zo doordacht in elkaar zit als elk ander project dat ik bouw.
            </p>
            <p>
                Bekijk Marie's website:{" "}
                <a href="https://marie-boddaert.netlify.app" target="_blank" rel="noreferrer">
                    marieboddaert.nl
                </a>
            </p>
        </>
    ),
    en: () => (
        <>
            <p>
                Marie is family. My niece, and above all my friend.
            </p>
            <p>
                Building her website felt different from any other project. Not because the brief
                was complicated, but because I know her. Marie wanted pastel shades from the start,
                that was settled immediately. I already had a retro design in mind and adapted it
                around her colours: as sweet as candy at first glance, but not entirely so on
                closer inspection.
            </p>
            <p>
                That is exactly what we built: a blog that looks sweet and inviting at first sight,
                with room for whoever stays to read to go a little deeper. Just like Marie herself.
            </p>
            <p>
                It was an honour to build something for someone so close to me. Not every project
                gets that kind of space.
            </p>
            <hr className="rule" />
            <h2>What lies behind those pastel shades?</h2>
            <p>
                Under those soft colours on marieboddaert.nl there is quite a lot of technology.
                A brief explanation for anyone who is not a developer.
            </p>
            <h3>A CMS, or: a button instead of calling me</h3>
            <p>
                CMS stands for Content Management System. Boring name, handy thing. It means Marie
                can publish new stories whenever she wants, without needing to call me or take a
                programming course. She types her story, clicks publish, and that is that.
            </p>
            <h3>Slugs, or: a clean name for every page</h3>
            <p>
                A slug is the part of the link after the last slash. Instead of a web address full
                of strange letters and numbers, every story gets a readable name. Not
                marieboddaert.nl/post-3829x, but for example marieboddaert.nl/about-me.
                Nice for readers, and nice for Google.
            </p>
            <h3>SEO, or: making sure Google can find you</h3>
            <p>
                SEO stands for Search Engine Optimization. In plain language: making sure that when
                someone googles something Marie's blog covers, her site actually comes up. No magic,
                just doing a lot of small things right: clear titles, fast loading times, and texts
                that both people and Google understand.
            </p>
            <hr className="rule" />
            <p>
                The result: a website that looks calm and soft, but under the hood is put together
                with just as much thought as any other project I build.
            </p>
            <p>
                Visit Marie's website:{" "}
                <a href="https://marie-boddaert.netlify.app" target="_blank" rel="noreferrer">
                    marieboddaert.nl
                </a>
            </p>
        </>
    ),
    fr: () => (
        <>
            <p>
                Marie est de la famille. Ma nièce, et surtout mon amie.
            </p>
            <p>
                Construire son site web a été différent de tous mes autres projets. Non pas parce
                que la mission était complexe, mais parce que je la connais. Marie voulait des
                teintes pastels, c'était décidé dès le départ. J'avais déjà un design rétro en
                tête et je l'ai adapté à ses couleurs: doux comme des bonbons au premier regard,
                mais pas entièrement si on regarde de plus près.
            </p>
            <p>
                C'est précisément ce que nous avons construit: un blog qui paraît doux et
                accueillant au premier coup d'œil, avec de l'espace pour ceux qui restent à lire
                pour aller un peu plus loin. Tout comme Marie elle-même.
            </p>
            <p>
                C'était un honneur de construire quelque chose pour quelqu'un qui m'est si proche.
                Tous les projets n'ont pas cette dimension.
            </p>
            <hr className="rule" />
            <h2>Qu'y a-t-il derrière ces tons pastels?</h2>
            <p>
                Sous ces couleurs douces sur marieboddaert.nl se cache pas mal de technique.
                Une explication simple pour ceux qui ne sont pas développeurs.
            </p>
            <h3>Un CMS, ou: un bouton plutôt qu'un appel téléphonique</h3>
            <p>
                CMS signifie Content Management System. Nom ennuyeux, outil pratique. Cela signifie
                que Marie peut publier de nouvelles histoires quand elle le souhaite, sans avoir
                besoin de m'appeler ni de suivre un cours de programmation. Elle tape son histoire,
                clique sur publier, et c'est fait.
            </p>
            <h3>Des slugs, ou: un nom lisible pour chaque page</h3>
            <p>
                Un slug est la partie du lien après le dernier slash. Au lieu d'une adresse web
                pleine de lettres et chiffres étranges, chaque histoire reçoit un nom lisible.
                Pas marieboddaert.nl/post-3829x, mais par exemple marieboddaert.nl/a-propos.
                Agréable pour les lecteurs, et agréable pour Google.
            </p>
            <h3>Le SEO, ou: s'assurer que Google vous trouve</h3>
            <p>
                SEO signifie Search Engine Optimization. En termes simples: s'assurer que si
                quelqu'un cherche quelque chose sur lequel porte le blog de Marie, son site remonte
                vraiment dans les résultats. Pas de magie, juste plein de petites choses bien
                faites: des titres clairs, des temps de chargement rapides et des textes que les
                humains comme Google comprennent.
            </p>
            <hr className="rule" />
            <p>
                Le résultat: un site qui a l'air tranquille et doux, mais sous le capot est tout
                aussi réfléchi que n'importe quel autre projet que je construis.
            </p>
            <p>
                Visitez le site de Marie:{" "}
                <a href="https://marie-boddaert.netlify.app" target="_blank" rel="noreferrer">
                    marieboddaert.nl
                </a>
            </p>
        </>
    ),
    de: () => (
        <>
            <p>
                Marie ist Familie. Meine Nichte und vor allem meine Freundin.
            </p>
            <p>
                Ihre Website zu bauen fühlte sich anders an als jedes andere Projekt. Nicht weil
                der Auftrag kompliziert war, sondern weil ich sie kenne. Marie wollte Pastelltöne,
                das stand von Anfang an fest. Ich hatte bereits ein Retro-Design im Kopf und habe
                es an ihre Farben angepasst: auf den ersten Blick so süß wie Bonbons, aber beim
                näheren Hinsehen doch nicht ganz.
            </p>
            <p>
                Genau das haben wir gebaut: ein Blog, der auf den ersten Blick süß und einladend
                wirkt, mit Raum für diejenigen, die weiter lesen und etwas tiefer gehen möchten.
                Genau wie Marie selbst.
            </p>
            <p>
                Es war eine Ehre, etwas für jemanden zu bauen, der mir so nahe steht.
                Nicht jedes Projekt bekommt diesen Raum.
            </p>
            <hr className="rule" />
            <h2>Was steckt hinter diesen Pastelltönen?</h2>
            <p>
                Unter diesen weichen Farben auf marieboddaert.nl steckt ganz schön viel Technik.
                Kurz erklärt für alle, die keine Entwickler sind.
            </p>
            <h3>Ein CMS, oder: ein Knopf statt eines Anrufs bei mir</h3>
            <p>
                CMS steht für Content Management System. Langweiliger Name, praktisches Ding.
                Es bedeutet, dass Marie selbst neue Geschichten veröffentlichen kann, wann sie
                möchte, ohne mich anrufen oder einen Programmierkurs belegen zu müssen. Sie tippt
                ihre Geschichte, klickt auf veröffentlichen, und fertig.
            </p>
            <h3>Slugs, oder: ein ordentlicher Name für jede Seite</h3>
            <p>
                Ein Slug ist das Stück des Links nach dem letzten Schrägstrich. Statt einer
                Webadresse voller seltsamer Buchstaben und Ziffern bekommt jede Geschichte einen
                lesbaren Namen. Also nicht marieboddaert.nl/post-3829x, sondern zum Beispiel
                marieboddaert.nl/ueber-mich. Angenehm für Leser und angenehm für Google.
            </p>
            <h3>SEO, oder: dafür sorgen, dass Google einen findet</h3>
            <p>
                SEO steht für Search Engine Optimization. Auf Deutsch: dafür sorgen, dass wenn
                jemand etwas googelt, worüber Maries Blog schreibt, ihre Website auch wirklich
                auftaucht. Kein Zaubertrick, einfach viele kleine Dinge richtig machen: klare
                Titel, schnelle Ladezeiten und Texte, die sowohl Menschen als auch Google
                verstehen.
            </p>
            <hr className="rule" />
            <p>
                Das Ergebnis: eine Website, die ruhig und sanft aussieht, aber unter der Haube
                genauso durchdacht aufgebaut ist wie jedes andere Projekt, das ich baue.
            </p>
            <p>
                Besuchen Sie Maries Website:{" "}
                <a href="https://marie-boddaert.netlify.app" target="_blank" rel="noreferrer">
                    marieboddaert.nl
                </a>
            </p>
        </>
    ),
    es: () => (
        <>
            <p>
                Marie es familia. Mi sobrina, y sobre todo mi amiga.
            </p>
            <p>
                Construir su sitio web se sintió diferente a cualquier otro proyecto. No porque
                el encargo fuera complicado, sino porque la conozco. Marie quería tonos pastel,
                eso quedó claro desde el principio. Ya tenía un diseño retro en mente y lo adapté
                a sus colores: tan dulce como caramelos a primera vista, pero no del todo si se
                mira más de cerca.
            </p>
            <p>
                Eso es exactamente lo que construimos: un blog que a primera vista parece dulce
                e invitador, con espacio para quien sigue leyendo para ir un poco más profundo.
                Igual que Marie.
            </p>
            <p>
                Fue un honor construir algo para alguien tan cercana a mí.
                No todos los proyectos tienen ese espacio.
            </p>
            <hr className="rule" />
            <h2>¿Qué hay detrás de esos tonos pastel?</h2>
            <p>
                Bajo esos colores suaves en marieboddaert.nl hay bastante técnica.
                Una explicación sencilla para quien no es desarrollador.
            </p>
            <h3>Un CMS, o: un botón en lugar de llamarme</h3>
            <p>
                CMS significa Content Management System. Nombre aburrido, herramienta útil.
                Significa que Marie puede publicar nuevas historias cuando quiera, sin necesidad
                de llamarme ni de seguir un curso de programación. Escribe su historia, hace clic
                en publicar, y listo.
            </p>
            <h3>Slugs, o: un nombre ordenado para cada página</h3>
            <p>
                Un slug es la parte del enlace después de la última barra. En lugar de una
                dirección web llena de letras y números extraños, cada historia recibe un nombre
                legible. No marieboddaert.nl/post-3829x, sino por ejemplo
                marieboddaert.nl/sobre-mi. Agradable para los lectores, y agradable para Google.
            </p>
            <h3>SEO, o: asegurarse de que Google te encuentre</h3>
            <p>
                SEO significa Search Engine Optimization. En términos sencillos: asegurarse de que
                cuando alguien busca algo sobre lo que trata el blog de Marie, su sitio realmente
                aparezca. No es magia, simplemente hacer bien muchas cosas pequeñas: títulos
                claros, tiempos de carga rápidos y textos que tanto las personas como Google
                entienden.
            </p>
            <hr className="rule" />
            <p>
                El resultado: un sitio que parece tranquilo y suave, pero bajo el capó está tan
                bien pensado como cualquier otro proyecto que construyo.
            </p>
            <p>
                Visita el sitio de Marie:{" "}
                <a href="https://marie-boddaert.netlify.app" target="_blank" rel="noreferrer">
                    marieboddaert.nl
                </a>
            </p>
        </>
    ),
    it: () => (
        <>
            <p>
                Marie è di famiglia. Mia nipote, e soprattutto la mia amica.
            </p>
            <p>
                Costruire il suo sito web è stato diverso da qualsiasi altro progetto. Non perché
                l'incarico fosse complicato, ma perché la conosco. Marie voleva toni pastello, era
                chiaro fin dall'inizio. Avevo già in mente un design retrò e l'ho adattato ai suoi
                colori: dolce come caramelle a prima vista, ma non del tutto se si guarda più
                da vicino.
            </p>
            <p>
                È esattamente quello che abbiamo costruito: un blog che a prima vista sembra dolce
                e accogliente, con spazio per chi resta a leggere per andare un po' più in
                profondità. Proprio come Marie.
            </p>
            <p>
                È stato un onore costruire qualcosa per qualcuno così vicina a me.
                Non tutti i progetti hanno questo spazio.
            </p>
            <hr className="rule" />
            <h2>Cosa c'è dietro quei toni pastello?</h2>
            <p>
                Sotto quei colori morbidi su marieboddaert.nl c'è abbastanza tecnica.
                Una spiegazione semplice per chi non è sviluppatore.
            </p>
            <h3>Un CMS, ovvero: un pulsante invece di chiamarmi</h3>
            <p>
                CMS sta per Content Management System. Nome noioso, strumento utile. Significa che
                Marie può pubblicare nuove storie quando vuole, senza dover chiamare me né seguire
                un corso di programmazione. Scrive la sua storia, clicca su pubblica, e il gioco
                è fatto.
            </p>
            <h3>Slug, ovvero: un nome ordinato per ogni pagina</h3>
            <p>
                Uno slug è il pezzo del link dopo l'ultima barra. Invece di un indirizzo web pieno
                di strane lettere e numeri, ogni storia riceve un nome leggibile. Non
                marieboddaert.nl/post-3829x, ma ad esempio marieboddaert.nl/chi-sono.
                Comodo per i lettori, e comodo per Google.
            </p>
            <h3>SEO, ovvero: assicurarsi che Google ti trovi</h3>
            <p>
                SEO sta per Search Engine Optimization. In parole semplici: assicurarsi che quando
                qualcuno cerca qualcosa di cui parla il blog di Marie, il suo sito appaia davvero.
                Nessuna magia, solo tante piccole cose fatte bene: titoli chiari, tempi di
                caricamento veloci e testi che sia le persone che Google capiscono.
            </p>
            <hr className="rule" />
            <p>
                Il risultato: un sito che sembra tranquillo e morbido, ma sotto il cofano è
                costruito con la stessa cura di qualsiasi altro progetto che realizzo.
            </p>
            <p>
                Visita il sito di Marie:{" "}
                <a href="https://marie-boddaert.netlify.app" target="_blank" rel="noreferrer">
                    marieboddaert.nl
                </a>
            </p>
        </>
    ),
    uk: () => (
        <>
            <p>
                Марі — рідня. Моя племінниця і насамперед моя подруга.
            </p>
            <p>
                Будувати її сайт відчувалося інакше, ніж будь-який інший проєкт. Не тому що завдання
                було складним, а тому що я її знаю. Марі хотіла пастельні кольори — це було вирішено
                одразу. У мене вже був ретро-дизайн в голові, і я адаптувала його під її кольори:
                таке солодке, як Jamin на перший погляд, але при цьому все ж таки зовсім не те.
            </p>
            <p>
                Саме це ми й побудували: блог, який на перший погляд виглядає солодко й запрошувально,
                але дає простір тим, хто залишається читати, зануритися глибше.
                Як і сама Марі.
            </p>
            <p>
                Це була честь — будувати щось для людини, яка так близько до мене.
                Не кожен проєкт має такий простір.
            </p>
            <hr className="rule" />
            <h2>Що ховається за пастельними кольорами?</h2>
            <p>
                Під тими м'якими кольорами на marieboddaert.nl є чимало технічного. Пояснюю просто,
                для тих, хто не розробник.
            </p>
            <h3>CMS, або: кнопка замість дзвінка мені</h3>
            <p>
                CMS — це система управління контентом. Нудна назва, корисна річ. Вона означає, що Марі
                може сама публікувати нові оповідання, коли захоче, — без дзвінків мені і без курсу
                програмування. Набирає оповідання, натискає «публікувати» — і готово.
            </p>
            <h3>Slug, або: охайна назва для кожної сторінки</h3>
            <p>
                Slug — це частина посилання після останнього слеша. Замість веб-адреси з дивними
                літерами і цифрами кожне оповідання отримує читабельну назву. Не marieboddaert.nl/post-3829x,
                а, наприклад, marieboddaert.nl/over-mij. Зручно для читачів і для Google.
            </p>
            <h3>SEO, або: щоб Google знав, де тебе знайти</h3>
            <p>
                SEO — це оптимізація для пошукових систем. Простою мовою: щоб коли хтось шукає щось,
                про що пише блог Марі, її сайт справді з'являвся у видачі. Ніякої магії — просто безліч
                дрібних речей, зроблених правильно: чіткі заголовки, швидке завантаження і тексти,
                зрозумілі як людям, так і Google.
            </p>
            <hr className="rule" />
            <p>
                Результат: сайт, що виглядає спокійно й м'яко, але під капотом побудований
                з такою ж ретельністю, як і будь-який інший мій проєкт.
            </p>
            <p>
                Відвідай сайт Марі:{" "}
                <a href="https://marie-boddaert.netlify.app" target="_blank" rel="noreferrer">
                    marieboddaert.nl
                </a>
            </p>
        </>
    ),
};

const ui = {
    nl: { back: "← Terug naar journal", date: "19 juni 2026", read: "~3 min lezen", shareTitle: "Pastel van buiten, verrassend van binnen", shareText: "Hoe ik de website van mijn nichtje Marie bouwde: zoet van buiten, doordacht van binnen." },
    en: { back: "← Back to journal", date: "June 19, 2026", read: "~3 min read", shareTitle: "Pastel on the outside, surprising on the inside", shareText: "How I built my cousin Marie's website: sweet on the outside, thoughtful on the inside." },
    fr: { back: "← Retour au journal", date: "19 juin 2026", read: "~3 min de lecture", shareTitle: "Pastel en apparence, surprenant en profondeur", shareText: "Comment j'ai construit le site de ma nièce Marie: doux en surface, réfléchi en profondeur." },
    de: { back: "← Zurück zum Journal", date: "19. Juni 2026", read: "~3 Min. Lesezeit", shareTitle: "Pastellfarben außen, überraschend innen", shareText: "Wie ich die Website meiner Nichte Marie gebaut habe: außen süß, innen durchdacht." },
    es: { back: "← Volver al diario", date: "19 de junio de 2026", read: "~3 min de lectura", shareTitle: "Pastel por fuera, sorprendente por dentro", shareText: "Cómo construí el sitio web de mi sobrina Marie: dulce por fuera, reflexivo por dentro." },
    it: { back: "← Torna al journal", date: "19 giugno 2026", read: "~3 min di lettura", shareTitle: "Pastello fuori, sorprendente dentro", shareText: "Come ho costruito il sito di mia nipote Marie: dolce fuori, ragionato dentro." },
    uk: { back: "← Назад до журналу", date: "19 червня 2026", read: "~3 хв читання", shareTitle: "Пастель зовні, несподіванка всередині", shareText: "Як я будувала сайт своєї племінниці Марі: солодкий зовні, продуманий всередині." },
};

export default function PastelVanBuiten() {
    const { t: tr, i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const t = ui[lang] || ui.nl;
    const Body = bodies[lang] || bodies.nl;

    return (
        <section id="article-pastelvanbuiten" className="section section-alt">
            <div className="container article-container">
                <Link to="/journal" className="back-link">{t.back}</Link>

                <nav aria-label="Breadcrumb" className="breadcrumbs">
                    <Link to="/">{tr('nav.home')}</Link>
                    <span className="breadcrumb-sep" aria-hidden="true">›</span>
                    <Link to="/journal">{tr('nav.journal')}</Link>
                    <span className="breadcrumb-sep" aria-hidden="true">›</span>
                    <span aria-current="page">{t.shareTitle}</span>
                </nav>

                <figure className="story-cover story-cover--screenshot">
                    <img
                        src="/journal/marie-boddaert-screenshot.png"
                        alt="Website van Marie H. Boddaert — pastel design, Over mij pagina"
                        width="1200"
                        height="973"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                    />
                </figure>

                <header className="story-header">
                    <h1>Pastel van buiten, verrassend&nbsp;van binnen</h1>
                    <p className="small meta">
                        <time dateTime="2026-06-19">{t.date}</time> • {t.read}
                    </p>
                </header>

                <article className="story-body card">
                    <Body />
                </article>

                <ArticleFooter shareTitle={t.shareTitle} shareText={t.shareText} />

                <div className="story-back-bottom">
                    <Link to="/journal" className="back-link">{t.back}</Link>
                </div>
            </div>

            <style>{`
        .story-back-bottom { margin-top: 24px; padding-top: 8px; border-top: 1px solid var(--border); }
        .back-link { display: inline-block; margin: 14px 0 8px; text-decoration: none; color: var(--accent); }
        .back-link:hover { text-decoration: underline; }
        .article-container { max-width: 72rem; margin: 0 auto; padding: 0 clamp(16px,3vw,48px); }
        .story-cover { margin: 8px auto 16px; max-width: 68ch; }
        .story-cover img { display: block; width: 100%; border-radius: 14px; object-fit: cover; }
        .story-cover--screenshot { overflow: hidden; border-radius: 14px; max-height: 420px; }
        .story-cover--screenshot img { object-position: top center; height: 420px; border-radius: 0; }
        .story-header { text-align: center; margin-bottom: 12px; }
        .story-header h1 { margin: 8px 0 6px; line-height: 1.15; }
        .meta { margin: 0; color: var(--muted); }
        .story-body {
          max-width: 68ch;
          margin: 0 auto;
          padding: clamp(16px,2.2vw,24px);
          border: 1px solid var(--border);
          border-radius: 14px;
          background: var(--bg-alt);
          box-shadow: var(--shadow);
        }
        .story-body p  { margin: 0 0 14px; line-height: 1.72; }
        .story-body h2 { margin: 22px 0 10px; }
        .story-body h3 { margin: 18px 0 8px; font-size: 1rem; color: var(--muted); }
        .story-body a  { color: var(--accent); text-decoration: underline; }
        .rule { height: 1px; background: var(--border); margin: 18px 0; border: none; }
      `}</style>
        </section>
    );
}
