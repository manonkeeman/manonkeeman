import { Helmet } from "react-helmet-async";

const SITE_URL = "https://manonkeeman.nl";
const DEFAULT_IMAGE = `${SITE_URL}/hero-1200w.webp`;

export default function Seo({ title, description, path = "", image }) {
    const canonical = `${SITE_URL}${path}`;
    const ogImage = image || DEFAULT_IMAGE;
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
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