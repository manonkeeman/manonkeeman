// NL leeft op "/", EN op "/en/..." — enige twee talen met een eigen, indexeerbare URL.
// FR/DE/ES/IT/UK blijven client-side taalkeuzes zonder eigen URL (niet geïndexeerd).
export const EN_PREFIX = "/en";

export function isEnPath(pathname) {
    return pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`);
}

export function stripEnPrefix(pathname) {
    if (!isEnPath(pathname)) return pathname;
    return pathname.slice(EN_PREFIX.length) || "/";
}

export function withLang(path, lang) {
    if (lang !== "en") return path;
    if (path === "/") return EN_PREFIX;
    return isEnPath(path) ? path : `${EN_PREFIX}${path}`;
}
