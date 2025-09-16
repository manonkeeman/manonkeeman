import portrait from "../assets/Pics/ManonVintage.png";

export default function About() {
    return (
        <section id="about" className="section section-alt" style={{ padding: 0, margin: 0, overflow: "hidden" }}>
            <div className="about-shell" style={{
                display: "grid",
                gridTemplateColumns: "1fr minmax(420px, 48vw)",
                gap: 32,
                alignItems: "stretch",
                minHeight: "70vh"
            }}>
                {/* TEKST LINKS: flink verder naar rechts */}
                <div className="about-copy" style={{
                    padding: "48px clamp(20px,3vw,48px) 48px clamp(80px,10vw,140px)", // linker padding nu hoger
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    maxWidth: "45ch" // smaller gemaakte tekstkolom
                }}>
                    <h2 className="about-title" style={{ marginBottom: "1.5rem" }}>Passie & Praktijk</h2>

                    <blockquote className="about-quote" style={{ margin: "0 0 16px", fontStyle: "italic", color: "var(--muted)", lineHeight: 1.5 }}>
                        “Techniek is mooi, maar zonder mensen verliest het zijn ziel.”
                    </blockquote>

                    <p className="about-text" style={{ marginBottom: "1.4rem" }}>
                        Van KLM pushback-trekker via werving & communicatie bij gemeente Amsterdam — plekken waar samenwerking & precisie tellen.
                    </p>

                    <p className="about-text" style={{ marginBottom: "1.4rem" }}>
                        Mijn nieuwsgierigheid + ervaring vormen mijn fundament. Techniek én menselijk begrip gaan hand in hand.
                    </p>

                    <h3 className="about-subtitle" style={{ margin: "1.8rem 0 0.8rem" }}>Skills</h3>

                    <ul className="about-skills small" style={{ color: "var(--muted)", fontSize: "0.9rem", paddingLeft: "1.1rem", margin: 0, lineHeight: 1.4 }}>
                        <li>Full stack: React, Java, API’s</li>
                        <li>Agile teamwork & scrum</li>
                        <li>UX/UI & visuele branding</li>
                        <li>Communicatie & storytelling</li>
                    </ul>
                </div>

                {/* FOTO RECHTS — full-bleed */}
                <div className="about-photo" style={{ position: "relative", overflow: "hidden" }}>
                    <img
                        src={portrait}
                        alt="Portret Manon"
                        style={{
                            display: "block",
                            width: "100%",
                            height: "95vh",
                            objectFit: "cover",
                            objectPosition: "center",
                            marginTop: "-5vh",
                            marginBottom: "-5vh",
                            borderRadius: 0,
                        }}
                    />
                </div>
            </div>
        </section>
    );
}