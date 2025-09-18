// scripts/resize.mjs
import sharp from "sharp";
import { mkdirSync, existsSync } from "fs";

mkdirSync("public", { recursive: true });

// Gebruik jouw échte paden + korte namen voor de outputbestanden:
const images = [
    { src: "src/assets/Pics/ManonKeemanFullStackDeveloper.png", base: "hero" },           // hero
    { src: "src/assets/Pics/ManonKeemanAbout.png",               base: "about-portrait" },
    { src: "src/assets/Pics/KlmPushback.jpeg",                   base: "klm-pushback" },
    { src: "src/assets/Pics/ManonKeemanContact.png",             base: "contact-portrait" },
    { src: "src/assets/Pics/ContactLocaties.png",                base: "contact-map" },
];

const sizes = [400, 800, 1200];          // pas aan indien nodig
const formats = ["webp", "avif"];        // beide formaten maken

for (const { src, base } of images) {
    if (!existsSync(src)) {
        console.warn(`⚠️  Bestaat niet, overslaan: ${src}`);
        continue;
    }
    for (const width of sizes) {
        for (const format of formats) {
            const out = `public/${base}-${width}w.${format}`;
            try {
                await sharp(src)
                    .resize({ width })
                    .toFormat(format, { quality: format === "webp" ? 75 : 45 })
                    .toFile(out);
                console.log(`✓ ${out}`);
            } catch (e) {
                console.error(`✗ Fout bij ${src} → ${out}`, e);
            }
        }
    }
}
console.log("Klaar: bestanden staan in /public/");