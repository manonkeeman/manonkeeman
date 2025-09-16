export default function StorytellingForDevelopers() {
    return (
        <section id="storytelling" className="section section-alt">
            <div className="container">
                <article className="card" style={{ padding: 28 }}>
                    <header style={{ marginBottom: 18 }}>
                        <a href="#journal" style={{ color: "var(--turqoise)", textDecoration: "none" }}>
                            ← Terug naar journal
                        </a>
                        <h1 style={{ margin: "10px 0 8px" }}>
                            Storytelling voor Developers: waarom jouw code ook een verhaal vertelt
                        </h1>
                        <p className="small" style={{ margin: 0 }}>
                            Gepubliceerd op <time dateTime="2025-09-14">14 september 2025</time> · ~5 min lezen
                        </p>
                    </header>

                    <p>
                        Veel developers denken dat storytelling vooral iets is voor marketeers of schrijvers. Toch is het ook in IT
                        een krachtige skill. Of je nu een feature uitlegt aan een product owner, documentatie schrijft of een
                        presentatie geeft op een hackathon: jouw boodschap blijft pas echt hangen als je er een verhaal van maakt.
                        Voor degene die zoals ik nog nooit van een hackathon had gehoord; het zijn evenementen (meestal 24-48 uur)
                        waarin teams in korte tijd samenwerken om een idee uit te werken tot een werkend prototype of demo.
                        Er is vaak een thema of uitdaging zoals "bedenk een app die duurzaam reizen stimuleert".
                        Teams vormen zich ter plekke of komen al voorbereid. Iedereen werkt dag en nacht (met veel pizza en koffie) aan design, code, pitches.
                        Aan het eid presenteer je het resultaat aan een jury.
                    </p>

                    <h2>1. Code is logica, maar mensen denken in verhalen</h2>
                    <p>
                        Ik ontdekte dat developers gewend zijn te denken in structuren: functies, classes, API’s. Maar de meeste mensen buiten
                        tech snappen die logica niet meteen. Verhalen werken als een brug: ze vertalen abstracte code naar concrete
                        waarde. Een goed verhaal legt niet de technische details uit, maar de impact: <em>wat</em> lost dit op,
                        voor wie, en waarom maakt het uit?
                    </p>

                    <h2>2. User stories zijn eigenlijk mini-verhalen</h2>
                    <p>
                        Agile en Scrum gebruiken al storytelling, vaak zonder dat we het zo noemen. Een user story —{" "}
                        <em>“Als gebruiker wil ik X zodat Y”</em> — is in feite een micro-verhaal. Het heeft een hoofdpersoon (de
                        user), een behoefte (het probleem) en een oplossing (de feature). Door dit simpel te houden, onthoudt
                        iedereen de bedoeling en blijft het team gefocust.
                    </p>

                    <h2>3. Storytelling in je dagelijkse werk</h2>
                    <ul>
                        <li>
                            <strong>Code reviews:</strong> Leg niet alleen uit <em>wat</em> je hebt aangepast, maar <em>waarom</em>.
                            “Deze refactor maakt de code sneller en beter leesbaar voor het team.”
                        </li>
                        <li>
                            <strong>Presentaties:</strong> Begin met een voorbeeld of anekdote van een gebruiker i.p.v. direct met
                            technische details.
                        </li>
                        <li>
                            <strong>Documentatie:</strong> Schrijf scenario’s in plaats van droge opsommingen. “Stel, je bent een
                            nieuwe developer en je wilt in 5 minuten draaien — zo doe je dat.”
                        </li>
                    </ul>

                    <h2>4. Hoe je beter wordt in storytelling als developer</h2>
                    <ul>
                        <li>
                            <strong>Ken je publiek.</strong> Praat met een designer anders dan met een CTO.
                        </li>
                        <li>
                            <strong>Gebruik metaforen.</strong> Vergelijk een API met een restaurantmenu of een database met een
                            archiefkast.
                        </li>
                        <li>
                            <strong>Hou het kort.</strong> Een verhaal hoeft niet lang te zijn; vaak is een pakkende anekdote genoeg.
                        </li>
                        <li>
                            <strong>Oefen.</strong> Deel kleine verhaaltjes in stand-ups of retrospectives en merk hoe mensen anders
                            reageren.
                        </li>
                    </ul>

                    <h2>5. De bonus: jij valt op</h2>
                    <p>
                        In een wereld waar veel developers vooral praten in code, onderscheid jij je door helder en menselijk te
                        communiceren. Storytelling maakt je niet alleen een betere teamplayer, maar ook een bruggenbouwer tussen
                        techniek en business. En dat zijn vaak de developers die doorgroeien naar lead, architect of Scrum Master.
                    </p>

                    <footer style={{ marginTop: 18 }}>
                        <div className="hr" />
                        <p className="small" style={{ marginTop: 12 }}>
                            Tags: <span className="tag">Storytelling</span>{" "}
                            <span className="tag">Agile</span> <span className="tag">Developer Skills</span>
                        </p>
                    </footer>
                </article>
            </div>
        </section>
    );
}