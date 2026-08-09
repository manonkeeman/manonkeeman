import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { withLang } from "../../i18n/langPath.js";

const SITE_URL = "https://manonit.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const SITE_NAME = "ManonIT";

const LOCALE_MAP = {
    nl: "nl_NL", en: "en_US", fr: "fr_FR",
    de: "de_DE", es: "es_ES", it: "it_IT", uk: "uk_UA",
};
const ALT_LOCALES = ["nl_NL", "en_US", "fr_FR", "de_DE", "es_ES", "it_IT", "uk_UA"];

export default function Seo({ title, description, path = "", image, type = "website" }) {
    const { i18n } = useTranslation();
    const lang = i18n.language?.split("-")[0] || "nl";
    const canonical = `${SITE_URL}${withLang(path, lang)}`;
    const ogImage = image || DEFAULT_IMAGE;
    const ogLocale = LOCALE_MAP[lang] || "nl_NL";

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
            {/* NL en EN zijn de enige talen met een eigen URL en dus de enige
                geldige hreflang-alternates; FR/DE/ES/IT/UK delen de NL-URL. */}
            <link rel="alternate" hrefLang="nl" href={`${SITE_URL}${path}`} />
            <link rel="alternate" hrefLang="en" href={`${SITE_URL}${withLang(path, "en")}`} />
            <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${path}`} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content={ogLocale} />
            {ALT_LOCALES.filter(l => l !== ogLocale).map(l => (
                <meta key={l} property="og:locale:alternate" content={l} />
            ))}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={ogImage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
}