const posts = [
    {
        title: "Van vliegtuigsleper tot scrummaster",
        date: "2025-09-01",
        cat: "Scrum",
        link: "#scrummaster",
    },
    {
        title: "Van designer naar full stack",
        date: "2025-08-24",
        cat: "Coding",
        link: "#fullstack",
    },
    {
        title: "Storytelling voor developers",
        date: "2025-08-10",
        cat: "Story",
        link: "#storytelling",
    },
];

export default function Journal() {
    return (
        <div className="container">
            <h2 style={{ marginBottom: 12 }}>Journal</h2>
            <div className="grid grid-3" style={{ marginTop: 16 }}>
                {posts.map((post, i) => (
                    <a key={i} href={post.link} className="card link-reset">
                        <span className="tag" aria-hidden="true">{post.cat}</span>
                        <h3 className="post-title">{post.title}</h3>
                        <time
                            className="small post-date"
                            dateTime={post.date}
                        >
                            {new Date(post.date).toLocaleDateString("nl-NL", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                        </time>
                    </a>
                ))}
            </div>
        </div>
    );
}