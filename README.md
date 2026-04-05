# manonkeeman.nl

Persoonlijke portfolio- en journalsite van **Manon Keeman** — Full Stack Developer, Systems Thinker, Designer, Storyteller & Builder.

Live: [manonkeeman.com](https://manonkeeman.com)

---

## Over dit project

Een volledig zelfgebouwde portfolio in React, met meertalige ondersteuning, journalartikelen, portfoliocases en een contactformulier. Gebouwd met aandacht voor prestaties, SEO en responsive design.

---

## Tech stack

| Laag                | Technologie                       |
|---------------------|-----------------------------------|
| Framework           | React 19 + Vite 6                 |
| Routing             | React Router DOM 7                |
| Internationalisatie | i18next + react-i18next (6 talen) |
| SEO                 | react-helmet-async                |
| Icons               | react-icons                       |
| Hosting             | Netlify (met Forms)               |
| Images              | AVIF / WebP via sharp-cli         |

---

## Structuur

```
src/
├── assets/
│   ├── Components/       # Navbar, Footer, Seo, Breadcrumbs, MobileMenu, ...
│   ├── Helpers/          # contentHelpers (formatDate, ageFrom, toCard)
│   └── Pics/             # Fallback JPEG afbeeldingen
├── content/
│   └── contentJournal.json   # Journaldata (slug, datum, cover, woorden)
├── i18n/
│   ├── index.js          # i18n initialisatie
│   └── locales/          # nl, en, fr, de, es, it
├── pages/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Portfolio.jsx
│   ├── Journal.jsx
│   ├── Contact.jsx
│   ├── ArticlesJournal/  # Journalartikelen per slug
│   └── Portfolio/        # Portfolio detailpagina's
public/
├── journal/              # Journalafbeeldingen (AVIF + WebP)
├── portfolio/            # Portfolioafbeeldingen (AVIF + WebP)
├── robots.txt
└── sitemap.xml
```

---

## Pagina's & routes

| Route                        | Inhoud                                              |
|------------------------------|-----------------------------------------------------|
| `/`                          | Homepage (Hero, About, Portfolio, Journal, Contact) |
| `/frontendvredestein`        | Case: React frontend Villa Vredestein               |
| `/webdesignacupuncture`      | Case: WordPress webdesign acupunctuur               |
| `/backendstudentendashboard` | Case: Spring Boot studentendashboard                |
| `/journal/:slug`             | Journalartikel op slug                              |

---

## Lokaal draaien

```bash
npm install
npm run dev
```

Opent op `http://localhost:5173`.

---

## Bouwen

```bash
npm run build
```

Netlify voert dit automatisch uit via `netlify.toml`:

```toml
[build]
command = "node scripts/resize.mjs && npm run build"
publish = "dist"
```

De `resize.mjs` genereert responsive AVIF/WebP varianten (400w, 800w, 1200w) via sharp.

---

## Internationalisatie

De site ondersteunt 6 talen: **Nederlands, Engels, Frans, Duits, Spaans en Italiaans**. De actieve taal wordt opgeslagen in `localStorage` en het `lang`-attribuut op `<html>` wordt dynamisch gesynchroniseerd.

Vertaalbestanden staan in `src/i18n/locales/`. Elke taal heeft sleutels voor navigatie, hero, about, contact, portfolio, journal en SEO-metateksten.

---

## SEO

- Dynamische `<title>` en `<meta name="description">` per pagina via `react-helmet-async`
- Canonical URL per route
- Open Graph en Twitter Card tags
- JSON-LD Person schema in `index.html`
- `robots.txt` + `sitemap.xml`
- Google Analytics 4 klaar (vervang `G-XXXXXXXXXX` in `index.html` door jouw Measurement ID)

---

## Contactformulier

Verwerkt via **Netlify Forms**. De statische form-definitie staat in `index.html` zodat Netlify het formulier detecteert bij de build. Bij een succesvolle verzending wordt een `form_submit` GA4-event getriggerd.

---

## Design tokens

```css
--bg:       #1b1b1b   /* paginaachtergrond */
--bg-alt:   #2a2a2a   /* kaarten, footer */
--text:     #f9f0dd   /* primaire tekstkleur */
--muted:    #c6c1b5   /* subtekst */
--accent:   #c9a97a   /* amber — buttons, links, logo */
--border:   #3a3a3a   /* randen */
--nav-h:    60px      /* navbar hoogte (gebruikt als offset) */
```

---

## Licentie

Code en content © Manon Keeman. Alle rechten voorbehouden.