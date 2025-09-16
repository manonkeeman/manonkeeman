const projects = [
    {
        title: "Villa Vredestein – Studenten Dashboard",
        desc: "Fontend, UX-UI, JWT-auth, API",
        tags: ["React", "API", "JWT"],
        link: "https://villavredestein.com/",
    },
    {
        title: "Webdesign - Acupuncture by Saskia",
        desc: "WordPress-website ontworpen en gebouwd voor een acupunctuurpraktijk, met een rustige uitstraling en duidelijke informatie voor cliënten.",
        tags: ["WordPress", "Adobe Suite"],
        link: "https://acupuncturebysaskia.com/",
    },
    {
        title: "Scrum Board Demo",
        desc: "Interactieve kanban met WIP-limits, burndown en retro notes.",
        tags: ["Scrum", "UX", "JS"],
        link: "#",
    },
];

export default function Portfolio() {
    const safeProjects = projects.filter(p => p && p.title && p.desc);

    return (
        <div className="container">
            <h2>Portfolio</h2>
            <p className="small">Een selectie van werk: development, Scrum & storytelling.</p>

            <div className="grid grid-3" style={{ marginTop: 16 }}>
                {safeProjects.map((p, i) => (
                    <article key={p.link || p.title || i} className="card">
                        <h3 style={{ marginBottom: 8, color: "var(--text)" }}>{p.title}</h3>

                        <p>{p.desc}</p>

                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "12px 0" }}>
                            {(p.tags ?? []).map((t) => (
                                <span key={t} className="tag">{t}</span>
                            ))}
                        </div>

                        {p.link ? (
                            <a className="btn btn-outline" href={p.link} aria-label={`Open ${p.title}`}>
                                Bekijk
                            </a>
                        ) : (
                            <button className="btn btn-outline" disabled aria-label={`${p.title} (geen link)`}>
                                Niet beschikbaar
                            </button>
                        )}
                    </article>
                ))}
            </div>
        </div>
    );
}