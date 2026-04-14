import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import Seo from "../../assets/Components/Seo.jsx";

// Artikelen — elk apart lazy geladen
const StorytellingForDevelopers = lazy(() => import("./Storytelling.jsx"));
const FullStackDeveloper         = lazy(() => import("./FullStackDeveloper.jsx"));
const DesignChaos                = lazy(() => import("./DesignChaos.jsx"));
const ToekomstTech               = lazy(() => import("./ToekomstTech.jsx"));
const Luchtvaartfamilie2018      = lazy(() => import("./Luchtvaartfamilie2018.jsx"));
const Korteverhalen365           = lazy(() => import("./365Korteverhalen.jsx"));

function NotFound({ slug }) {
    return (
        <section className="section">
            <div className="container">
                <h2>Artikel niet gevonden</h2>
                <p>Het artikel dat je zoekt bestaat niet{slug ? ` (slug: ${slug})` : ""}.</p>
            </div>
        </section>
    );
}

const normalize = (s = "") =>
    s
        .toString()
        .normalize("NFD")                      // diacritics losmaken
        .replace(/[\u0300-\u036f]/g, "")       // diacritics verwijderen
        .toLowerCase()
        .replace(/\s+/g, "")                   // spaties weg
        .replace(/[^a-z0-9-]/g, "");           // alles behalve a-z 0-9 - weg

export default function ArticleRoute() {
    const { slug = "" } = useParams();
    const { t } = useTranslation();
    const key = normalize(slug);

    const views = {
        storytelling: <StorytellingForDevelopers />,
        fullstackdeveloper: <FullStackDeveloper />,
        scrummaster: <FullStackDeveloper />,
        designchaos: <DesignChaos />,
        toekomsttech: <ToekomstTech />,
        luchtvaartfamilie2018: <Luchtvaartfamilie2018 />,
        "365korteverhalen": <Korteverhalen365 />,
    };

    const article = views[key];
    if (!article) return <NotFound slug={slug} />;

    return (
        <>
            <Seo
                title={t(`seo.journal.${key}.title`, { defaultValue: "Manon Keeman — Journal" })}
                description={t(`seo.journal.${key}.description`, { defaultValue: "" })}
                path={`/journal/${slug}`}
            />
            <Suspense fallback={
                <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "var(--muted)", fontSize: "0.95rem" }}>Loading…</span>
                </div>
            }>
                {article}
            </Suspense>
        </>
    );
}