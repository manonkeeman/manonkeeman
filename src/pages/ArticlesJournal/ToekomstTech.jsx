import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import ShareButton from "../../assets/Components/ShareButton.jsx";

const bodies = {
    nl: () => (
        <>
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
                Tools als GitHub, Slack en Figma zijn je nieuwe collega's.
                Je moet leren hoe je ermee praat en duidelijkheid scheppen voordat vragen zich opstapelen.
            </p>
            <h2>Structuur en vrijheid</h2>
            <p>
                AI kan patronen herkennen, voorstellen doen, maar betekenis geven?
                Dat blijft menselijk werk. Je ziet verbanden, emoties, keuzes.
                Een bord met taken of een grid in design is geen keurslijf,
                het is speelruimte om te bewegen en te groeien.
            </p>
            <h2>Wat AI met onze data kan, voor ons of tegen ons?</h2>
            <p>
                Dit is waar het spannend wordt. AI systemen draaien op data.
                En met alle informatie die over ons verzameld wordt;
                wat we klikken, wat we liken, waar we verblijven, ontstaat macht.
            </p>
            <p>
                <strong>Misbruik:</strong> AI zou kunnen voorspellen wat je voelt, wat je koopt, welke kant je opgaat, en dat tegen je inzetten (advertenties, manipulatie).{" "}
                <strong>Onderdrukking:</strong> in autoritaire regimes kan AI gebruikt worden voor surveillance, censuur en sociale controle.{" "}
                <strong>Onderscheiding en vooroordelen:</strong> als de data is bevooroordeeld, zal AI beslissingen herhalen die ongelijkheid in stand houden.
            </p>
            <p>
                Aan de andere kant:{" "}
                <strong>Personalisatie:</strong> AI kan adviezen geven die echt op jou afgestemd zijn, beter onderwijs, medische zorg, toegankelijkheid.{" "}
                <strong>Versterking:</strong> AI kan dienen als assistent, een tweede paar ogen, niet om te vervangen, maar om jou sterker te maken.{" "}
                <strong>Innovatie en efficiëntie:</strong> complexe problemen oplossen, milieu, gezondheidszorg, logistiek, op manieren die mensen alleen niet kunnen.
            </p>
            <h2>Welke AI moet je kiezen, Amerikaans, Frans of Chinees?</h2>
            <p>
                Er is nu een wedloop tussen AI-modellen met verschillende achtergronden:
            </p>
            <ul>
                <li><strong>ChatGPT (VS / OpenAI)</strong> robuust, veel documentatie, maar werkt binnen Amerikaanse wetten en regels, soms met beperkingen buiten de VS.</li>
                <li><strong>Mistral (Frankrijk / EU)</strong> met nadruk op Europese waarden, mogelijk striktere privacyregels, betere controle over data-soevereiniteit.</li>
                <li><strong>Claude (Anthropic / VS)</strong> vaak gepositioneerd als "veiligere AI", met meer maatregelen tegen desinformatie of ongepaste output.</li>
                <li><strong>Chinese AI-modellen (zoals Baidu Ernie, Tencent AI, Huawei)</strong> gebouwd in een anders gereguleerd systeem. Mogelijk krachtig in massale uitvoeringen, maar met andere risicokaders qua censuur, data-toegang en staatsinterventie.</li>
            </ul>
            <p>Welke je kiest, hangt af van:</p>
            <ul>
                <li><strong>Vertrouwen en transparantie:</strong> Wie controleert de AI? Wat kun je weten over de data en de beslissingen?</li>
                <li><strong>Privacy en soevereiniteit:</strong> in welke jurisdictie staat je data?</li>
                <li><strong>Ethiek en waarden:</strong> sluit het model aan bij jouw normen en die van je organisatie?</li>
                <li><strong>Prestatie en compatibiliteit:</strong> hoe goed werkt het model voor jouw taal, domein en behoeften?</li>
            </ul>
            <h2>Mijn standpunt en twijfel</h2>
            <p>
                Ik gebruik AI, ja en voorzichtig. Niet blind vertrouwen. Ik zie het als een gereedschap, geen autoriteit.
                Ik denk dat we nu middenin een keuze zitten: óf we laten technologie bepalen hoe we leven, óf we bouwen technologie die mensen sterker maakt.
                Ik weet niet of ik de juiste richting heb gekozen. Soms twijfel ik of ik te naïef ben. Maar ik geloof dat menselijkheid,
                nieuwsgierigheid en kritische keuzes ons kunnen leiden, niet perfect, maar betekenisvol.
            </p>
        </>
    ),
    en: () => (
        <>
            <p>
                I once started in a call centre. Repeating scripts for hours while people usually meant something else.
                At KLM I learned that collaboration only works when everyone understands the same signals. Now that I
                am in IT, I recognise the same quest: how do you make something as complex as code feel human and
                understandable?
            </p>
            <h2>AI: Between Hype and Practice</h2>
            <p>
                Everyone talks as if AI will become the co-pilot. But to me it feels like an intern who types at
                lightning speed: useful, but you have to keep watching. Sometimes brilliant, sometimes nonsense. AI
                speeds up work, but does not simply take the lead.
            </p>
            <h2>Remote Work: Visibility Without a Coffee Nod</h2>
            <p>
                Since the pandemic, remote work has become the norm. But you miss the subtle signals: nods, glances,
                informal conversations. Tools like GitHub, Slack and Figma are your new colleagues. You have to learn
                how to communicate through them and create clarity before questions pile up.
            </p>
            <h2>Structure and Freedom</h2>
            <p>
                AI can recognise patterns and make suggestions, but give meaning? That remains human work. You see
                connections, emotions, choices. A task board or a grid in design is not a straitjacket, it is room to
                move and grow.
            </p>
            <h2>What AI Can Do With Our Data, For Us or Against Us?</h2>
            <p>
                This is where it gets interesting. AI systems run on data. And with all the information collected about
                us, what we click, what we like, where we are, power emerges.
            </p>
            <p>
                <strong>Misuse:</strong> AI could predict what you feel, what you buy, which direction you are heading, and use that against you (ads, manipulation).{" "}
                <strong>Suppression:</strong> in authoritarian regimes AI can be used for surveillance, censorship and social control.{" "}
                <strong>Discrimination and bias:</strong> if the data is biased, AI will repeat decisions that perpetuate inequality.
            </p>
            <p>
                On the other hand:{" "}
                <strong>Personalisation:</strong> AI can give advice genuinely tailored to you, better education, healthcare, accessibility.{" "}
                <strong>Empowerment:</strong> AI can serve as an assistant, a second pair of eyes, not to replace but to make you stronger.{" "}
                <strong>Innovation and efficiency:</strong> solving complex problems in environment, healthcare and logistics in ways humans alone cannot.
            </p>
            <h2>Which AI Should You Choose: American, French or Chinese?</h2>
            <p>There is now a race between AI models with different backgrounds:</p>
            <ul>
                <li><strong>ChatGPT (US / OpenAI)</strong> robust, extensive documentation, but operates within US laws and regulations, sometimes with restrictions outside the US.</li>
                <li><strong>Mistral (France / EU)</strong> emphasising European values, potentially stricter privacy rules, better control over data sovereignty.</li>
                <li><strong>Claude (Anthropic / US)</strong> often positioned as "safer AI", with more measures against disinformation or inappropriate output.</li>
                <li><strong>Chinese AI models (such as Baidu Ernie, Tencent AI, Huawei)</strong> built in a differently regulated system. Potentially powerful at scale, but with different risk frameworks around censorship, data access and state intervention.</li>
            </ul>
            <p>Which you choose depends on:</p>
            <ul>
                <li><strong>Trust and transparency:</strong> Who controls the AI? What can you know about the data and the decisions?</li>
                <li><strong>Privacy and sovereignty:</strong> in which jurisdiction does your data reside?</li>
                <li><strong>Ethics and values:</strong> does the model align with your standards and those of your organisation?</li>
                <li><strong>Performance and compatibility:</strong> how well does the model work for your language, domain and needs?</li>
            </ul>
            <h2>My Position and Doubts</h2>
            <p>
                I use AI, yes, and carefully. Not with blind trust. I see it as a tool, not an authority. I think we
                are now in the middle of a choice: either we let technology determine how we live, or we build
                technology that makes people stronger. I do not know if I have chosen the right direction. Sometimes I
                wonder if I am too naive. But I believe that humanity, curiosity and critical choices can guide us,
                not perfectly, but meaningfully.
            </p>
        </>
    ),
    fr: () => (
        <>
            <p>
                J'ai commencé dans un centre d'appels. Répéter des scripts pendant des heures, alors que les gens
                voulaient souvent dire autre chose. Chez KLM, j'ai appris que la collaboration ne fonctionne que
                quand tout le monde comprend les mêmes signaux. Maintenant que je suis dans l'IT, je reconnais la
                même quête: comment rendre quelque chose d'aussi complexe que le code humain et compréhensible?
            </p>
            <h2>L'IA: entre hype et pratique</h2>
            <p>
                Tout le monde parle comme si l'IA allait devenir le copilote. Mais pour moi, ca ressemble à un
                stagiaire qui tape à toute vitesse: utile, mais on doit continuer à surveiller. Parfois brillant,
                parfois n'importe quoi. L'IA accélère le travail, mais ne prend pas simplement les rênes.
            </p>
            <h2>Travail à distance: visibilité sans le hochement de tête autour d'un café</h2>
            <p>
                Depuis la pandémie, le télétravail est devenu la norme. Mais on manque les signaux subtils: les
                hochements de tête, les regards, les conversations informelles. Des outils comme GitHub, Slack et
                Figma sont vos nouveaux collègues. Il faut apprendre à communiquer avec eux et créer de la clarté
                avant que les questions ne s'accumulent.
            </p>
            <h2>Structure et liberté</h2>
            <p>
                L'IA peut reconnaître des patterns, faire des suggestions, mais donner du sens? Ca reste du travail
                humain. On voit des connexions, des émotions, des choix. Un tableau de tâches ou une grille en design
                n'est pas une camisole de force, c'est un espace pour bouger et grandir.
            </p>
            <h2>Ce que l'IA peut faire avec nos données, pour nous ou contre nous?</h2>
            <p>
                C'est là que ca devient intéressant. Les systèmes d'IA fonctionnent avec des données. Et avec toutes
                les informations collectées sur nous, ce sur quoi on clique, ce qu'on aime, où on se trouve, naît le
                pouvoir.
            </p>
            <p>
                <strong>Abus:</strong> l'IA pourrait prédire ce que vous ressentez, ce que vous achetez, quelle direction vous prenez, et l'utiliser contre vous (publicités, manipulation).{" "}
                <strong>Répression:</strong> dans les régimes autoritaires, l'IA peut être utilisée pour la surveillance, la censure et le contrôle social.{" "}
                <strong>Discrimination et biais:</strong> si les données sont biaisées, l'IA répétera des décisions qui perpétuent les inégalités.
            </p>
            <p>
                D'un autre côté:{" "}
                <strong>Personnalisation:</strong> l'IA peut donner des conseils vraiment adaptés à vous, une meilleure éducation, des soins médicaux, l'accessibilité.{" "}
                <strong>Renforcement:</strong> l'IA peut servir d'assistant, d'un deuxième regard, non pas pour remplacer mais pour vous rendre plus fort.{" "}
                <strong>Innovation et efficacité:</strong> résoudre des problèmes complexes en matière d'environnement, de santé et de logistique d'une manière que les humains seuls ne peuvent pas.
            </p>
            <h2>Quelle IA choisir: américaine, française ou chinoise?</h2>
            <p>Il existe maintenant une course entre des modèles d'IA aux origines différentes:</p>
            <ul>
                <li><strong>ChatGPT (Etats-Unis / OpenAI)</strong> robuste, beaucoup de documentation, mais fonctionne selon les lois et règlements américains, parfois avec des restrictions hors des Etats-Unis.</li>
                <li><strong>Mistral (France / UE)</strong> mettant l'accent sur les valeurs européennes, des règles de confidentialité potentiellement plus strictes, un meilleur contrôle sur la souveraineté des données.</li>
                <li><strong>Claude (Anthropic / Etats-Unis)</strong> souvent positionné comme une "IA plus sûre", avec plus de mesures contre la désinformation ou les sorties inappropriées.</li>
                <li><strong>Modèles d'IA chinois (comme Baidu Ernie, Tencent AI, Huawei)</strong> construits dans un système différemment réglementé. Potentiellement puissants à grande échelle, mais avec d'autres cadres de risque concernant la censure, l'accès aux données et l'intervention de l'Etat.</li>
            </ul>
            <p>Celui que vous choisissez dépend de:</p>
            <ul>
                <li><strong>Confiance et transparence:</strong> Qui contrôle l'IA? Que pouvez-vous savoir sur les données et les décisions?</li>
                <li><strong>Confidentialité et souveraineté:</strong> dans quelle juridiction se trouvent vos données?</li>
                <li><strong>Ethique et valeurs:</strong> le modèle correspond-il à vos normes et à celles de votre organisation?</li>
                <li><strong>Performance et compatibilité:</strong> dans quelle mesure le modèle fonctionne-t-il pour votre langue, domaine et besoins?</li>
            </ul>
            <h2>Mon point de vue et mes doutes</h2>
            <p>
                J'utilise l'IA, oui, et avec prudence. Pas une confiance aveugle. Je la vois comme un outil, pas comme
                une autorité. Je pense que nous sommes maintenant au milieu d'un choix: soit on laisse la technologie
                déterminer comment nous vivons, soit on construit une technologie qui rend les gens plus forts. Je ne
                sais pas si j'ai choisi la bonne direction. Parfois je me demande si je suis trop naïve. Mais je crois
                que l'humanité, la curiosité et les choix critiques peuvent nous guider, pas parfaitement, mais de
                manière significative.
            </p>
        </>
    ),
    de: () => (
        <>
            <p>
                Ich begann einmal in einem Callcenter. Stundenlang Skripte wiederholen, während die Leute oft etwas
                anderes meinten. Bei KLM lernte ich, dass Zusammenarbeit nur funktioniert, wenn alle die gleichen
                Signale verstehen. Jetzt, wo ich in der IT bin, erkenne ich dieselbe Suche: Wie macht man etwas so
                Komplexes wie Code menschlich und verständlich?
            </p>
            <h2>KI: Zwischen Hype und Praxis</h2>
            <p>
                Alle reden, als würde KI der Kopilot werden. Aber für mich fühlt es sich wie ein Praktikant an, der
                blitzschnell tippt: nützlich, aber man muss weiter zuschauen. Manchmal brillant, manchmal Unsinn. KI
                beschleunigt Arbeit, übernimmt aber nicht einfach das Steuer.
            </p>
            <h2>Remote-Arbeit: Sichtbarkeit ohne Kaffeenicken</h2>
            <p>
                Seit der Pandemie ist Remote-Arbeit zur Norm geworden. Aber man vermisst die subtilen Signale: Nicken,
                Blicke, informelle Gespräche. Tools wie GitHub, Slack und Figma sind Ihre neuen Kollegen. Man muss
                lernen, wie man damit kommuniziert, und Klarheit schaffen, bevor sich Fragen anhäufen.
            </p>
            <h2>Struktur und Freiheit</h2>
            <p>
                KI kann Muster erkennen, Vorschläge machen, aber Bedeutung geben? Das bleibt menschliche Arbeit. Man
                sieht Zusammenhänge, Emotionen, Entscheidungen. Ein Aufgabenbord oder ein Raster im Design ist kein
                Zwangsjacke, es ist Spielraum zum Bewegen und Wachsen.
            </p>
            <h2>Was KI mit unseren Daten machen kann, für uns oder gegen uns?</h2>
            <p>
                Hier wird es interessant. KI-Systeme laufen auf Daten. Und mit all den Informationen, die über uns
                gesammelt werden, was wir anklicken, was wir mögen, wo wir uns befinden, entsteht Macht.
            </p>
            <p>
                <strong>Missbrauch:</strong> KI könnte vorhersagen, was Sie fühlen, was Sie kaufen, wohin Sie gehen, und das gegen Sie einsetzen (Werbung, Manipulation).{" "}
                <strong>Unterdrückung:</strong> in autoritären Regimen kann KI für Überwachung, Zensur und soziale Kontrolle genutzt werden.{" "}
                <strong>Diskriminierung und Vorurteile:</strong> wenn die Daten voreingenommen sind, wiederholt KI Entscheidungen, die Ungleichheit aufrechterhalten.
            </p>
            <p>
                Auf der anderen Seite:{" "}
                <strong>Personalisierung:</strong> KI kann Ratschläge geben, die wirklich auf Sie zugeschnitten sind, bessere Bildung, medizinische Versorgung, Barrierefreiheit.{" "}
                <strong>Stärkung:</strong> KI kann als Assistent dienen, als zweites Augenpaar, nicht um zu ersetzen, sondern um Sie stärker zu machen.{" "}
                <strong>Innovation und Effizienz:</strong> komplexe Probleme in Umwelt, Gesundheitswesen und Logistik lösen, auf Weisen, die Menschen allein nicht können.
            </p>
            <h2>Welche KI soll man wählen: amerikanisch, französisch oder chinesisch?</h2>
            <p>Es gibt jetzt ein Rennen zwischen KI-Modellen mit unterschiedlichem Hintergrund:</p>
            <ul>
                <li><strong>ChatGPT (USA / OpenAI)</strong> robust, viel Dokumentation, funktioniert aber nach US-amerikanischen Gesetzen und Vorschriften, manchmal mit Einschränkungen außerhalb der USA.</li>
                <li><strong>Mistral (Frankreich / EU)</strong> mit Betonung auf europäischen Werten, möglicherweise strengeren Datenschutzregeln, besserer Kontrolle über Datensouveränität.</li>
                <li><strong>Claude (Anthropic / USA)</strong> oft als "sicherere KI" positioniert, mit mehr Maßnahmen gegen Desinformation oder unangemessene Ausgaben.</li>
                <li><strong>Chinesische KI-Modelle (wie Baidu Ernie, Tencent AI, Huawei)</strong> in einem anders regulierten System gebaut. Möglicherweise leistungsstark in großem Maßstab, aber mit anderen Risikorahmen bezüglich Zensur, Datenzugang und staatlicher Intervention.</li>
            </ul>
            <p>Welches Sie wählen, hängt ab von:</p>
            <ul>
                <li><strong>Vertrauen und Transparenz:</strong> Wer kontrolliert die KI? Was können Sie über die Daten und Entscheidungen wissen?</li>
                <li><strong>Datenschutz und Souveränität:</strong> In welcher Jurisdiktion befinden sich Ihre Daten?</li>
                <li><strong>Ethik und Werte:</strong> Entspricht das Modell Ihren Normen und denen Ihrer Organisation?</li>
                <li><strong>Leistung und Kompatibilität:</strong> Wie gut funktioniert das Modell für Ihre Sprache, Ihren Bereich und Ihre Bedürfnisse?</li>
            </ul>
            <h2>Mein Standpunkt und meine Zweifel</h2>
            <p>
                Ich nutze KI, ja, und mit Bedacht. Kein blindes Vertrauen. Ich sehe es als Werkzeug, nicht als
                Autorität. Ich denke, wir stehen jetzt mitten in einer Wahl: Entweder lassen wir Technologie
                bestimmen, wie wir leben, oder wir bauen Technologie, die Menschen stärker macht. Ich weiß nicht, ob
                ich die richtige Richtung gewählt habe. Manchmal zweifle ich, ob ich zu naiv bin. Aber ich glaube,
                dass Menschlichkeit, Neugier und kritische Entscheidungen uns leiten können, nicht perfekt, aber
                bedeutungsvoll.
            </p>
        </>
    ),
    es: () => (
        <>
            <p>
                Una vez comencé en un centro de llamadas. Repitiendo guiones durante horas mientras la gente a menudo
                quería decir algo diferente. En KLM aprendí que la colaboración solo funciona cuando todos entienden
                las mismas señales. Ahora que estoy en IT, reconozco la misma búsqueda: ¿cómo hacer que algo tan
                complejo como el código sea humano y comprensible?
            </p>
            <h2>IA: entre el hype y la práctica</h2>
            <p>
                Todo el mundo habla como si la IA fuera a convertirse en el copiloto. Pero para mí se siente como un
                becario que escribe a velocidad de rayo: útil, pero hay que seguir mirando. A veces brillante, a veces
                sin sentido. La IA acelera el trabajo, pero no toma simplemente las riendas.
            </p>
            <h2>Trabajo remoto: visibilidad sin el gesto de cabeza del café</h2>
            <p>
                Desde la pandemia, el trabajo remoto se ha convertido en la norma. Pero echas de menos las señales
                sutiles: cabeceos, miradas, conversaciones informales. Herramientas como GitHub, Slack y Figma son tus
                nuevos compañeros. Hay que aprender a comunicarse con ellas y crear claridad antes de que las preguntas
                se acumulen.
            </p>
            <h2>Estructura y libertad</h2>
            <p>
                La IA puede reconocer patrones, hacer sugerencias, pero ¿dar significado? Eso sigue siendo trabajo
                humano. Ves conexiones, emociones, elecciones. Un tablero de tareas o una cuadrícula en diseño no es
                una camisa de fuerza, es espacio para moverse y crecer.
            </p>
            <h2>Lo que la IA puede hacer con nuestros datos, ¿para nosotros o contra nosotros?</h2>
            <p>
                Aquí es donde se pone interesante. Los sistemas de IA funcionan con datos. Y con toda la información
                recopilada sobre nosotros, en qué hacemos clic, qué nos gusta, dónde estamos, surge el poder.
            </p>
            <p>
                <strong>Abuso:</strong> la IA podría predecir lo que sientes, lo que compras, hacia dónde vas, y usar eso contra ti (publicidad, manipulación).{" "}
                <strong>Represión:</strong> en regímenes autoritarios la IA puede usarse para vigilancia, censura y control social.{" "}
                <strong>Discriminación y sesgos:</strong> si los datos están sesgados, la IA repetirá decisiones que perpetúan la desigualdad.
            </p>
            <p>
                Por otro lado:{" "}
                <strong>Personalización:</strong> la IA puede dar consejos genuinamente adaptados a ti, mejor educación, atención médica, accesibilidad.{" "}
                <strong>Empoderamiento:</strong> la IA puede servir de asistente, un segundo par de ojos, no para reemplazar sino para hacerte más fuerte.{" "}
                <strong>Innovación y eficiencia:</strong> resolver problemas complejos de medio ambiente, salud y logística de formas que los humanos solos no pueden.
            </p>
            <h2>¿Qué IA elegir: americana, francesa o china?</h2>
            <p>Ahora hay una carrera entre modelos de IA con diferentes orígenes:</p>
            <ul>
                <li><strong>ChatGPT (EE.UU. / OpenAI)</strong> robusto, mucha documentación, pero opera según las leyes y regulaciones de EE.UU., a veces con restricciones fuera de EE.UU.</li>
                <li><strong>Mistral (Francia / UE)</strong> con énfasis en valores europeos, posiblemente normas de privacidad más estrictas, mejor control sobre la soberanía de datos.</li>
                <li><strong>Claude (Anthropic / EE.UU.)</strong> a menudo posicionado como "IA más segura", con más medidas contra la desinformación o la producción inapropiada.</li>
                <li><strong>Modelos de IA chinos (como Baidu Ernie, Tencent AI, Huawei)</strong> construidos en un sistema regulado de forma diferente. Potencialmente potentes a escala, pero con marcos de riesgo diferentes en cuanto a censura, acceso a datos e intervención estatal.</li>
            </ul>
            <p>Cuál elijas depende de:</p>
            <ul>
                <li><strong>Confianza y transparencia:</strong> ¿Quién controla la IA? ¿Qué puedes saber sobre los datos y las decisiones?</li>
                <li><strong>Privacidad y soberanía:</strong> ¿en qué jurisdicción residen tus datos?</li>
                <li><strong>Ética y valores:</strong> ¿el modelo se alinea con tus estándares y los de tu organización?</li>
                <li><strong>Rendimiento y compatibilidad:</strong> ¿qué tan bien funciona el modelo para tu idioma, dominio y necesidades?</li>
            </ul>
            <h2>Mi posición y dudas</h2>
            <p>
                Uso la IA, sí, y con cuidado. Sin confianza ciega. La veo como una herramienta, no como una autoridad.
                Creo que ahora estamos en medio de una elección: o dejamos que la tecnología determine cómo vivimos, o
                construimos tecnología que haga a las personas más fuertes. No sé si he elegido la dirección correcta.
                A veces me pregunto si soy demasiado ingenua. Pero creo que la humanidad, la curiosidad y las
                elecciones críticas pueden guiarnos, no perfectamente, pero de manera significativa.
            </p>
        </>
    ),
    it: () => (
        <>
            <p>
                Ho iniziato in un call center. Ripetere script per ore, mentre le persone di solito intendevano
                qualcos'altro. In KLM ho imparato che la collaborazione funziona solo quando tutti capiscono gli stessi
                segnali. Ora che sono nell'IT, riconosco la stessa ricerca: come si rende qualcosa di complesso come il
                codice umano e comprensibile?
            </p>
            <h2>IA: tra hype e pratica</h2>
            <p>
                Tutti parlano come se l'IA dovesse diventare il co-pilota. Ma per me sembra un tirocinante che digita a
                velocità fulminea: utile, ma devi continuare a guardare. A volte brillante, a volte assurdo. L'IA
                accelera il lavoro, ma non prende semplicemente le redini.
            </p>
            <h2>Lavoro remoto: visibilità senza il cenno del caffè</h2>
            <p>
                Dalla pandemia, il lavoro remoto è diventato la norma. Ma mancano i segnali sottili: cenni, sguardi,
                conversazioni informali. Strumenti come GitHub, Slack e Figma sono i tuoi nuovi colleghi. Devi
                imparare a comunicare con loro e creare chiarezza prima che le domande si accumulino.
            </p>
            <h2>Struttura e libertà</h2>
            <p>
                L'IA può riconoscere pattern, fare suggerimenti, ma dare significato? Quello rimane lavoro umano. Vedi
                connessioni, emozioni, scelte. Una lavagna dei compiti o una griglia nel design non è una camicia di
                forza, è spazio per muoversi e crescere.
            </p>
            <h2>Cosa può fare l'IA con i nostri dati, per noi o contro di noi?</h2>
            <p>
                Qui le cose si fanno interessanti. I sistemi di IA funzionano sui dati. E con tutte le informazioni
                raccolte su di noi, su cosa clicchiamo, cosa ci piace, dove siamo, nasce il potere.
            </p>
            <p>
                <strong>Abuso:</strong> l'IA potrebbe prevedere cosa senti, cosa compri, in quale direzione vai, e usarlo contro di te (pubblicità, manipolazione).{" "}
                <strong>Repressione:</strong> nei regimi autoritari l'IA può essere usata per sorveglianza, censura e controllo sociale.{" "}
                <strong>Discriminazione e pregiudizi:</strong> se i dati sono distorti, l'IA ripeterà decisioni che perpetuano la disuguaglianza.
            </p>
            <p>
                D'altra parte:{" "}
                <strong>Personalizzazione:</strong> l'IA può dare consigli genuinamente adattati a te, migliore istruzione, assistenza sanitaria, accessibilità.{" "}
                <strong>Potenziamento:</strong> l'IA può servire da assistente, un secondo paio di occhi, non per sostituire ma per renderti più forte.{" "}
                <strong>Innovazione ed efficienza:</strong> risolvere problemi complessi di ambiente, sanità e logistica in modi che gli umani da soli non possono.
            </p>
            <h2>Quale IA scegliere: americana, francese o cinese?</h2>
            <p>C'è ora una corsa tra modelli di IA con background diversi:</p>
            <ul>
                <li><strong>ChatGPT (USA / OpenAI)</strong> robusto, molta documentazione, ma opera secondo le leggi e i regolamenti statunitensi, a volte con restrizioni al di fuori degli USA.</li>
                <li><strong>Mistral (Francia / UE)</strong> con enfasi sui valori europei, potenzialmente regole sulla privacy più rigide, migliore controllo sulla sovranità dei dati.</li>
                <li><strong>Claude (Anthropic / USA)</strong> spesso posizionato come "IA più sicura", con più misure contro la disinformazione o i contenuti inappropriati.</li>
                <li><strong>Modelli di IA cinesi (come Baidu Ernie, Tencent AI, Huawei)</strong> costruiti in un sistema regolato diversamente. Potenzialmente potenti su larga scala, ma con diversi quadri di rischio riguardo censura, accesso ai dati e intervento statale.</li>
            </ul>
            <p>Quale scegliere dipende da:</p>
            <ul>
                <li><strong>Fiducia e trasparenza:</strong> Chi controlla l'IA? Cosa puoi sapere sui dati e le decisioni?</li>
                <li><strong>Privacy e sovranità:</strong> in quale giurisdizione risiedono i tuoi dati?</li>
                <li><strong>Etica e valori:</strong> il modello si allinea con i tuoi standard e quelli della tua organizzazione?</li>
                <li><strong>Prestazioni e compatibilità:</strong> quanto bene funziona il modello per la tua lingua, dominio e bisogni?</li>
            </ul>
            <h2>La mia posizione e i miei dubbi</h2>
            <p>
                Uso l'IA, sì, e con cautela. Non con fiducia cieca. La vedo come uno strumento, non come un'autorità.
                Penso che ora siamo nel mezzo di una scelta: o lasciamo che la tecnologia determini come viviamo, o
                costruiamo tecnologia che renda le persone più forti. Non so se ho scelto la direzione giusta. A volte
                mi chiedo se sono troppo ingenua. Ma credo che l'umanità, la curiosità e le scelte critiche possano
                guidarci, non perfettamente, ma in modo significativo.
            </p>
        </>
    ),
};

const ui = {
    nl: { back: "← Terug naar journal", date: "22 september 2025", read: "~5 min lezen", shareTitle: "De toekomst van tech", shareText: "Over AI, remote werken, data en menselijkheid in IT." },
    en: { back: "← Back to journal", date: "September 22, 2025", read: "~5 min read", shareTitle: "The Future of Tech", shareText: "On AI, remote work, data and humanity in IT." },
    fr: { back: "← Retour au journal", date: "22 septembre 2025", read: "~5 min de lecture", shareTitle: "L'avenir de la tech", shareText: "Sur l'IA, le travail a distance, les donnees et l'humanite dans l'IT." },
    de: { back: "← Zurück zum Journal", date: "22. September 2025", read: "~5 Min. Lesezeit", shareTitle: "Die Zukunft der Technik", shareText: "Uber KI, Remote-Arbeit, Daten und Menschlichkeit in der IT." },
    es: { back: "← Volver al diario", date: "22 de septiembre de 2025", read: "~5 min de lectura", shareTitle: "El futuro de la tecnologia", shareText: "Sobre IA, trabajo remoto, datos y humanidad en IT." },
    it: { back: "← Torna al journal", date: "22 settembre 2025", read: "~5 min di lettura", shareTitle: "Il futuro della tecnologia", shareText: "Su IA, lavoro remoto, dati e umanita nell'IT." },
};

const titles = {
    nl: "De toekomst van tech",
    en: "The Future of Tech",
    fr: "L'avenir de la tech",
    de: "Die Zukunft der Technik",
    es: "El futuro de la tecnologia",
    it: "Il futuro della tecnologia",
};

export default function ToekomstTech() {
    const { t: tr, i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const t = ui[lang] || ui.en;
    const Body = bodies[lang] || bodies.en;
    const title = titles[lang] || titles.en;
    const base = "/journal/toekomst-it";

    return (
        <section id="toekomsttech" className="section section-alt">
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
                        <img src={`${base}-800w.webp`} width="1200" height="630" alt='Quote: "the hardest part of leadership today is staying human in a world that is becoming machine-led."' loading="eager" fetchPriority="high" decoding="async" />
                    </picture>
                </figure>

                <header className="story-header">
                    <h1>{title}</h1>
                    <p className="small meta">
                        <time dateTime="2025-09-22">{t.date}</time> • {t.read}
                    </p>
                </header>

                <article className="story-body card">
                    <Body />
                </article>

                <footer className="story-footer">
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/manonkeeman/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><FaLinkedin /></a>
                        <a href="https://substack.com/@manonkeeman" target="_blank" rel="noreferrer" aria-label="Substack" title="Substack"><SiSubstack /></a>
                        <ShareButton shareTitle={t.shareTitle} shareText={t.shareText} />
                    </div>
                </footer>
                <div className="story-back-bottom">
                    <Link to="/#journal" className="back-link">{t.back}</Link>
                </div>
            </div>

            <style>{`
        .story-back-bottom{margin-top:24px;padding-top:8px;border-top:1px solid var(--border);}
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
        .socials{display:flex;justify-content:center;gap:20px;font-size:1.8rem;margin-top:12px;}
        .socials a,.share-btn{color:var(--muted);background:none;border:none;cursor:pointer;transition:color .2s ease, transform .2s ease;}
        .socials a:hover,.share-btn:hover{color:var(--accent);transform:translateY(-2px);}
      `}</style>
        </section>
    );
}