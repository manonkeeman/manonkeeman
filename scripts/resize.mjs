import sharp from "sharp";
import path from "path";
import { mkdirSync, existsSync } from "fs";

const SIZES = [400, 800, 1200];
const FORMATS = ["webp", "avif"];

async function processOne(src, outBase) {
    if (!existsSync(src)) {
        console.warn(`⚠️  Bestaat niet, overslaan: ${src}`);
        return;
    }

    const outDir = path.dirname(outBase);
    mkdirSync(outDir, { recursive: true });

    for (const width of SIZES) {
        for (const format of FORMATS) {
            const outFile = `${outBase}-${width}w.${format}`;
            try {
                await sharp(src)
                    .resize({ width })
                    .toFormat(format, { quality: format === "webp" ? 75 : 45 })
                    .toFile(outFile);
                console.log(`✓ ${outFile}`);
            } catch (e) {
                console.error(`✗ Fout bij ${src} → ${outFile}`, e);
            }
        }
    }
}

const batch = [
    { src: "src/assets/Pics/ManonKeemanFullStackDeveloper.png", outBase: "public/hero" },
    { src: "src/assets/Pics/ManonKeemanAbout.png",               outBase: "public/about-portrait" },
    { src: "src/assets/Pics/Journal/KlmPushback.jpeg",           outBase: "public/journal/klm-pushback" },
    { src: "src/assets/Pics/Journal/DesignChaos.png",            outBase: "public/journal/design-chaos" },
    { src: "src/assets/Pics/Journal/TypemachineNaarToekomst.png",outBase: "public/journal/typemachine-toekomst" },
    { src: "src/assets/Pics/Journal/StorytellinginIT.png",       outBase: "public/journal/storytelling-it" },
    { src: "src/assets/Pics/ManonKeemanContact.png",             outBase: "public/contact-portrait" },
    { src: "src/assets/Pics/ContactLocaties.png",                outBase: "public/contact-map" },
];

const [, , cliSrc, cliOutBase] = process.argv;

(async () => {
    if (cliSrc && cliOutBase) {
        await processOne(cliSrc, cliOutBase);
    } else {
        for (const { src, outBase } of batch) {
            await processOne(src, outBase);
        }
    }
    console.log("Klaar 🎉");
})();