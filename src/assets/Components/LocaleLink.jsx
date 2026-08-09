import { Link as RouterLink, NavLink as RouterNavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { withLang } from "../../i18n/langPath.js";

function useCurrentLang() {
    const { i18n } = useTranslation();
    return i18n.language?.split("-")[0] || "nl";
}

function localizeTo(to, lang) {
    if (lang !== "en") return to;
    if (typeof to === "string") {
        if (/^https?:\/\//.test(to) || to.startsWith("#")) return to;
        return withLang(to, "en");
    }
    if (to && typeof to === "object") {
        const pathname = to.pathname ?? "/";
        return { ...to, pathname: withLang(pathname, "en") };
    }
    return to;
}

// Drop-in replacements for react-router-dom's Link/NavLink that automatically
// prefix internal hrefs with /en when the active language is English —
// so page content stays in sync with the URL everywhere, with no per-link changes.
export function Link({ to, ...props }) {
    const lang = useCurrentLang();
    return <RouterLink to={localizeTo(to, lang)} {...props} />;
}

export function NavLink({ to, ...props }) {
    const lang = useCurrentLang();
    return <RouterNavLink to={localizeTo(to, lang)} {...props} />;
}
