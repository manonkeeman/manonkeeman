export function getResponsiveImage(srcBase, alt) {
    // srcBase = "/journal/scrummaster"
    return (
        <picture>
            <source
                type="image/avif"
                srcSet={`${srcBase}-400w.avif 400w, ${srcBase}-800w.avif 800w, ${srcBase}-1200w.avif 1200w`}
                sizes="(max-width: 768px) 100vw, 800px"
            />
            <source
                type="image/webp"
                srcSet={`${srcBase}-400w.webp 400w, ${srcBase}-800w.webp 800w, ${srcBase}-1200w.webp 1200w`}
                sizes="(max-width: 768px) 100vw, 800px"
            />
            <img
                src={`${srcBase}-800w.webp`}
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
                alt={alt}
            />
        </picture>
    );
}