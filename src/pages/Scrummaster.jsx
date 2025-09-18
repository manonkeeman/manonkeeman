export default function Scrummaster() {
    return (
        <section id="scrummaster" className="section">
            <div className="container">
                <h2>Van vliegtuigsleper tot Scrum Master</h2>

                {/* Blok 1 */}
                <div className="story-block">
                    <div className="text">
                        <p>
                            Na mijn remigratie uit München en een scheiding startte ik bij de
                            gemeente Amsterdam als callcentermedewerker bij DWI. Daar leerde ik
                            omgaan met lastige situaties en ontdekte ik mijn talent voor
                            communicatie. In mijn vrije tijd maakte ik samen met collega’s een
                            personeelsblad, dat zo populair werd dat ik promoveerde naar interne
                            communicatie. Mijn opdracht: 16.000 collega’s actief krijgen op het
                            intranet – mijn eerste ervaring met organisatiebreed veranderen en
                            transparant werken.
                        </p>
                    </div>
                </div>

                {/* Blok 2 */}
                <div className="story-block reverse">
                    <div className="image">
                        <picture>
                            <source
                                type="image/avif"
                                srcSet="/klm-pushback-400w.avif 400w, /klm-pushback-800w.avif 800w, /klm-pushback-1200w.avif 1200w"
                                sizes="(max-width: 920px) 100vw, 48vw"
                            />
                            <source
                                type="image/webp"
                                srcSet="/klm-pushback-400w.webp 400w, /klm-pushback-800w.webp 800w, /klm-pushback-1200w.webp 1200w"
                                sizes="(max-width: 920px) 100vw, 48vw"
                            />
                            <img
                                src="/klm-pushback-800w.webp"
                                width="800"
                                height="533"
                                alt="KLM — vliegtuigsleper/pushback"
                                loading="lazy"
                                decoding="async"
                            />
                        </picture>
                    </div>
                    <div className="text">
                        <p>
                            Toen het combineren van werk en opvang als alleenstaande moeder te zwaar werd,
                            koos ik voor flexibel werk bij KLM. Ik werkte als grondstewardess, bagagemedewerker
                            en werd tijdens corona geselecteerd voor de docusoap <em>KL2020 Terug in de Lucht</em>,
                            naast CEO Pieter Elbers. Uiteindelijk belandde ik in de driejarige opleiding tot
                            vliegtuigsleper en pushback tugger – een rol waarin samenwerking, communicatie en
                            veiligheid cruciaal waren. Daar besefte ik hoe belangrijk korte feedbackloops en
                            duidelijke afspraken zijn: precies de kern van Scrum.
                        </p>
                    </div>
                </div>

                {/* Blok 3 */}
                <div className="story-block">
                    <div className="text">
                        <p>
                            Na jaren in ploegendiensten koos ik voor meer rust, regelmaat en vrijheid.
                            Mijn achtergrond als grafisch vormgever en webdesigner leidde me terug naar IT.
                            Via Equals, een vrouwennetwerk dat vrouwen in tech ondersteunt, kwam ik in
                            contact met Brunel en behaalde ik mijn Scrum-certificaat.
                        </p>
                        <p>
                            Vandaag zet ik mijn brede ervaring in om teams te begeleiden: mensen verbinden,
                            obstakels wegnemen en samen waarde creëren in korte iteraties. Met enthousiasme,
                            veerkracht en een focus op samenwerking bouw ik mee aan duurzame verandering.
                        </p>
                    </div>
                </div>

                <footer className="small">
                    Categorie: Scrum • Gepubliceerd op 1 september 2025
                    <div style={{ marginTop: 12 }}>
                        Tags:{" "}
                        <span className="tag">Storytelling</span>{" "}
                        <span className="tag">Agile</span>{" "}
                        <span className="tag">Developer</span>{" "}
                        <span className="tag">Skills</span>
                    </div>
                </footer>
            </div>
        </section>
    );
}