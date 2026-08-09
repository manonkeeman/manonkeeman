import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import Seo from "../../assets/Components/Seo.jsx";
import JsonLd from "../../assets/Components/JsonLd.jsx";

// Artikelen — elk apart lazy geladen
const StorytellingForDevelopers = lazy(() => import("./Storytelling.jsx"));
const FullStackDeveloper         = lazy(() => import("./FullStackDeveloper.jsx"));
const DesignChaos                = lazy(() => import("./DesignChaos.jsx"));
const ToekomstTech               = lazy(() => import("./ToekomstTech.jsx"));
const Luchtvaartfamilie2018      = lazy(() => import("./Luchtvaartfamilie2018.jsx"));
const Korteverhalen365           = lazy(() => import("./365Korteverhalen.jsx"));
const PastelVanBuiten            = lazy(() => import("./PastelVanBuiten.jsx"));

function NotFound({ slug }) {
    const { t } = useTranslation();
    return (
        <section className="section">
            <div className="container">
                <h2>{t('article.notFound')}</h2>
                <p>{t('article.notFoundText')}{slug ? ` (slug: ${slug})` : ""}</p>
            </div>
        </section>
    );
}

const normalize = (s = "") =>
    s
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^a-z0-9-]/g, "");

const ARTICLE_META = {
    fullstackdeveloper: {
        date: "2025-08-10",
        title: "Van vliegtuigsleper tot Full Stack Developer",
        image: "https://manonit.com/journal/klm-pushback-1200w.webp",
        words: 750,
    },
    scrummaster: {
        date: "2025-08-10",
        title: "Van vliegtuigsleper tot Full Stack Developer",
        image: "https://manonit.com/journal/klm-pushback-1200w.webp",
        words: 750,
    },
    designchaos: {
        date: "2025-09-01",
        title: "Chaos ordenen met code en design",
        image: "https://manonit.com/journal/Design-Chaos-1200w.webp",
        words: 480,
    },
    storytelling: {
        date: "2025-09-05",
        title: "Storytelling in IT",
        image: "https://manonit.com/journal/storytelling-it-1200w.webp",
        words: 530,
    },
    luchtvaartfamilie2018: {
        date: "2018-02-18",
        title: "Luchtvaartfamilie (Up in the Sky)",
        image: "https://manonit.com/journal/luchtvaartfamilie2018-1200w.webp",
        words: 600,
    },
    "365korteverhalen": {
        date: "2025-09-12",
        title: "365 Korte verhalen: van idee naar boek",
        image: "https://manonit.com/journal/cover365fragmenten-1200w.webp",
        words: 400,
    },
    toekomsttech: {
        date: "2025-09-18",
        title: "De toekomst van tech",
        image: "https://manonit.com/journal/toekomst-it-1200w.webp",
        words: 700,
    },
    pastelvanbuiten: {
        date: "2026-06-19",
        title: "Pastel van buiten, verrassend van binnen",
        image: "https://manonit.com/journal/marie-boddaert-og.png",
        words: 400,
    },
};

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
        pastelvanbuiten: <PastelVanBuiten />,
    };

    const article = views[key];
    if (!article) return <NotFound slug={slug} />;

    const meta = ARTICLE_META[key];
    const articleSchema = meta ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": t(`seo.journal.${key}.title`, { defaultValue: meta.title }),
        "description": t(`seo.journal.${key}.description`, { defaultValue: "" }),
        "url": `https://manonit.com/journal/${slug}`,
        "image": meta.image,
        "datePublished": meta.date,
        "dateModified": meta.date,
        "wordCount": meta.words,
        "inLanguage": "nl",
        "author": {
            "@type": "Person",
            "@id": "https://manonit.com/#manon",
            "name": "Manon Keeman",
            "url": "https://manonit.com",
        },
        "publisher": {
            "@type": "Person",
            "@id": "https://manonit.com/#manon",
            "name": "Manon Keeman",
            "logo": { "@type": "ImageObject", "url": "https://manonit.com/MKlogo.png" },
        },
        "isPartOf": { "@id": "https://manonit.com/#website" },
    } : null;

    return (
        <>
            <Seo
                title={t(`seo.journal.${key}.title`, { defaultValue: "Manon Keeman — Journal" })}
                description={t(`seo.journal.${key}.description`, { defaultValue: "" })}
                path={`/journal/${slug}`}
                type="article"
                image={meta?.image}
            />
            {articleSchema && <JsonLd data={articleSchema} />}
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