import { useTranslation } from "react-i18next";

// For raw <a href="/#contact"> anchors that aren't router Links.
export function useLangPrefix() {
    const { i18n } = useTranslation();
    const lang = i18n.language?.split("-")[0] || "nl";
    return lang === "en" ? "/en" : "";
}
