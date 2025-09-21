// Format "2025-08-10" -> "10 augustus 2025"
export function formatDate(date) {
    return new Date(date).toLocaleDateString("nl-NL", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

// Hoeveel dagen/maanden geleden
export function ageFrom(date) {
    const days = Math.floor((Date.now() - new Date(date)) / 86400000);
    if (days < 1) return "vandaag";
    if (days === 1) return "1 dag geleden";
    const months = Math.floor(days / 30);
    return months < 1 ? `${days} dagen geleden` :
        (months === 1 ? "1 maand geleden" : `${months} maanden geleden`);
}

// Leestijd obv woorden
export function readTimeFromWords(words, wpm = 225) {
    const mins = Math.max(1, Math.ceil((words || 0) / wpm));
    return `${mins} min leestijd`;
}

// Uniformeer artikeldata naar kaart
export function toCard(item) {
    return {
        slug: item.slug,
        title: item.title,
        dateISO: item.date,
        dateLabel: formatDate(item.date),
        ageLabel: ageFrom(item.date),
        readLabel: item.words ? readTimeFromWords(item.words) : "",
        cover: item.cover,
        excerpt: item.excerpt ?? "",
    };
}