const SITE = "https://manonit.com";

const ARTICLES = {
    fullstackdeveloper: {
        nl: { title: "Van vliegtuigsleper tot Full Stack Developer | Manon Keeman", description: "Hoe ik van KLM pushback belandde in de wereld van code en systemen." },
        en: { title: "From Aircraft Tug Driver to Full Stack Developer | Manon Keeman", description: "Read my story from the tarmac to a product team." },
        image: `${SITE}/journal/klm-pushback-1200w.webp`,
    },
    scrummaster: {
        nl: { title: "Van vliegtuigsleper tot Full Stack Developer | Manon Keeman", description: "Hoe ik van KLM pushback belandde in de wereld van code en systemen." },
        en: { title: "From Aircraft Tug Driver to Full Stack Developer | Manon Keeman", description: "Read my story from the tarmac to a product team." },
        image: `${SITE}/journal/klm-pushback-1200w.webp`,
    },
    designchaos: {
        nl: { title: "Chaos ordenen met code en design | Manon Keeman", description: "Waarom structuur niet saai is maar vrijheid geeft." },
        en: { title: "On Chaos, Structure, Code and Design | Manon Keeman", description: "Why structure isn't boring, but actually gives you freedom." },
        image: `${SITE}/journal/Design-Chaos-1200w.webp`,
    },
    storytelling: {
        nl: { title: "Storytelling in IT | Manon Keeman", description: "Waarom verhalen onmisbaar zijn in technologie." },
        en: { title: "Storytelling for Developers | Manon Keeman", description: "Why your code also tells a story." },
        image: `${SITE}/journal/storytelling-it-1200w.webp`,
    },
    luchtvaartfamilie2018: {
        nl: { title: "Luchtvaartfamilie (Up in the Sky) | Manon Keeman", description: "Een kijkje in onze luchtvaartfamilie. Interview Up in the Sky, 2018." },
        en: { title: "Aviation Families, Interview Up in the Sky | Manon Keeman", description: "Generations connected by a passion for aviation." },
        image: `${SITE}/journal/luchtvaartfamilie2018-1200w.webp`,
    },
    "365korteverhalen": {
        nl: { title: "365 Korte verhalen: van idee naar boek | Manon Keeman", description: "Een boek in wording: 365 scènes van absurditeit en overleven." },
        en: { title: "365 Fragments of What Remained and Began Again | Manon Keeman", description: "The book in progress: fragments from a past that was more absurd than ordinary." },
        image: `${SITE}/journal/cover365fragmenten-1200w.webp`,
    },
    toekomsttech: {
        nl: { title: "De toekomst van tech | Manon Keeman", description: "AI, remote werken en de rol van creativiteit." },
        en: { title: "The Future of Tech | Manon Keeman", description: "On AI, remote work, data and humanity in IT." },
        image: `${SITE}/journal/toekomst-it-1200w.webp`,
    },
    pastelvanbuiten: {
        nl: { title: "Pastel van buiten, verrassend van binnen | Manon Keeman", description: "Hoe ik de website van mijn nichtje Marie bouwde: zoet van buiten, doordacht van binnen." },
        en: { title: "Pastel on the Outside, Surprising on the Inside | Manon Keeman", description: "How I built my cousin Marie's website: sweet on the outside, thoughtful on the inside." },
        image: `${SITE}/journal/marie-boddaert-og.png`,
    },
};

const BOT_RE = /facebookexternalhit|linkedin|twitterbot|whatsapp|telegrambot|slackbot|discordbot|applebot|pinterest|bingbot|googlebot|iframely|prerender|screaming.frog/i;

export default async (request, _context) => {
    const ua = request.headers.get("user-agent") || "";
    if (!BOT_RE.test(ua)) return;

    const { pathname } = new URL(request.url);
    const isEn = pathname.startsWith("/en/");
    const slug = pathname.replace(/^\/en\/journal\/|^\/journal\//, "").replace(/\/$/, "").toLowerCase();
    const article = ARTICLES[slug];
    if (!article) return;

    const lang = isEn ? "en" : "nl";
    const meta = article[lang];
    const canonical = `${SITE}${isEn ? "/en" : ""}/journal/${slug}`;

    const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<title>${meta.title}</title>
<meta name="description" content="${meta.description}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="nl" href="${SITE}/journal/${slug}">
<link rel="alternate" hreflang="en" href="${SITE}/en/journal/${slug}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="ManonIT">
<meta property="og:locale" content="${isEn ? "en_US" : "nl_NL"}">
<meta property="og:title" content="${meta.title}">
<meta property="og:description" content="${meta.description}">
<meta property="og:image" content="${article.image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="675">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@manonkeeman">
<meta name="twitter:title" content="${meta.title}">
<meta name="twitter:description" content="${meta.description}">
<meta name="twitter:image" content="${article.image}">
</head>
<body></body>
</html>`;

    return new Response(html, {
        headers: { "content-type": "text/html;charset=UTF-8" },
    });
};

