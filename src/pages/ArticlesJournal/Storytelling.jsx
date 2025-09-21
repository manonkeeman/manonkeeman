export default function StorytellingForDevelopers() {
    return (
        <section id="storytelling" className="section section-alt">
            <div className="container">
                <article className="card storytelling-article">
                    <header className="story-header">
                        <a href="/#journal" className="back-link" aria-label="Terug naar journal">
                            ← Terug naar journal
                        </a>

                        {/* Optionele header-afbeelding; zorg dat deze bestanden bestaan in /public/journal/ */}
                        <div className="story-hero">
                            <picture>
                                <source
                                    type="image/avif"
                                    srcSet="/journal/storytelling-400w.avif 400w, /journal/storytelling-800w.avif 800w, /journal/storytelling-1200w.avif 1200w"
                                    sizes="(max-width: 920px) 100vw, 960px"
                                />
                                <source
                                    type="image/webp"
                                    srcSet="/journal/storytelling-400w.webp 400w, /journal/storytelling-800w.webp 800w, /journal/storytelling-1200w.webp 1200w"
                                    sizes="(max-width: 920px) 100vw, 960px"
                                />
                                <img
                                    src="/journal/storytelling-800w.webp"
                                    width="960"
                                    height="540"
                                    alt="Storytelling voor developers"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </div>

                        <h1>Storytelling voor Developers: waarom jouw code ook een verhaal vertelt</h1>
                        <p className="small meta">
                            Gepubliceerd op{" "}
                            <time dateTime="2025-09-14">14 september 2025</time> · ~5 min lezen
                        </p>
                    </header>

                    <div className="story-body">
                        <p>
                            Veel developers denken dat storytelling vooral iets is voor marketeers of schrijvers.
                            Toch is het ook in IT een krachtige skill. Of je nu een feature uitlegt aan een product owner,
                            documentatie schrijft of een presentatie geeft op een hackathon: jouw boodschap blijft pas echt
                            hangen als je er een verhaal van maakt. Voor degene die—zoals ik—nog nooit van een hackathon had gehoord:
                            het zijn evenementen (meestal 24–48 uur) waarin teams in korte tijd samenwerken om een idee uit te werken
                            tot een werkend prototype of demo. Er is vaak een thema of uitdaging zoals “bedenk een app die duurzaam
                            reizen stimuleert”. Teams vormen zich ter plekke of komen al voorbereid. Iedereen werkt dag en nacht
                            (met veel pizza en koffie) aan design, code, en pitches. Aan het eind presenteer je het resultaat aan een jury.
                        </p>

                        <h2>1. Code is logica, maar mensen denken in verhalen</h2>
                        <p>
                            Developers denken in structuren: functies, classes, API’s. De meeste mensen buiten tech niet.
                            Verhalen werken als een brug: ze vertalen abstracte code naar concrete waarde. Een goed verhaal legt
                            niet alle technische details uit, maar de impact: <em>wat</em> lost dit op, voor wie, en waarom maakt
                            het uit?
                        </p>

                        <h2>2. User stories zijn eigenlijk mini-verhalen</h2>
                        <p>
                            Agile en Scrum gebruiken al storytelling, vaak zonder dat we het zo noemen. Een user story —
                            <em>“Als gebruiker wil ik X zodat Y”</em> — is in feite een micro-verhaal. Het heeft een hoofdpersoon (de user),
                            een behoefte (het probleem) en een oplossing (de feature). Door dit simpel te houden, onthoudt iedereen de bedoeling
                            en blijft het team gefocust.
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
                                <strong>Documentatie:</strong> Schrijf scenario’s in plaats van droge opsommingen. “Stel, je bent
                                nieuw in het project en je wilt in 5 minuten draaien — zo doe je dat.”
                            </li>
                        </ul>

                        <h2>4. Hoe je beter wordt in storytelling als developer</h2>
                        <ul>
                            <li><strong>Ken je publiek.</strong> Praat met een designer anders dan met een CTO.</li>
                            <li><strong>Gebruik metaforen.</strong> Een API als restaurantmenu, een database als archiefkast.</li>
                            <li><strong>Hou het kort.</strong> Vaak is een scherpe anekdote genoeg.</li>
                            <li><strong>Oefen.</strong> Deel mini-verhalen in stand-ups of retrospectives en merk het verschil.</li>
                        </ul>

                        <h2>5. De bonus: jij valt op</h2>
                        <p>
                            In een wereld waar veel developers vooral praten in code, val jij op door helder en menselijk te communiceren.
                            Storytelling maakt je niet alleen een betere teamplayer, maar ook de brug tussen techniek en business.
                            Dat zijn vaak de developers die doorgroeien naar lead, architect of Scrum Master.
                        </p>
                    </div>

                    <footer className="story-footer">
                        <div className="hr" />
                        <p className="small tags">
                            Tags: <span className="tag">Storytelling</span>{" "}
                            <span className="tag">Agile</span>{" "}
                            <span className="tag">Developer Skills</span>
                        </p>
                    </footer>
                </article>
            </div>

            <style>{`
        .storytelling-article {
          padding: 24px;
          border-radius: 14px;
        }
        .back-link {
          display: inline-block;
          margin-bottom: 12px;
          text-decoration: none;
          color: var(--accent); /* i.p.v. mogelijke tikfout --turqoise */
        }
        .back-link:hover { text-decoration: underline; }

        .story-hero img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
          margin-bottom: 14px;
        }

        .story-header h1 {
          margin: 10px 0 8px;
          line-height: 1.2;
        }
        .meta {
          margin: 0;
          color: var(--muted);
        }

        .story-body p { margin: 0 0 12px; line-height: 1.65; }
        .story-body ul { margin: 0 0 12px 1.1rem; }
        .story-body li { margin: 0 0 8px; }

        .story-footer { margin-top: 18px; }
        .hr {
          height: 1px;
          background: var(--border);
          margin: 16px 0 8px;
        }
        .tags { margin-top: 8px; }
      `}</style>
        </section>
    );
}