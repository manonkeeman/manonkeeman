import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const SUPPORTED = ['nl', 'en', 'fr', 'de', 'es', 'it'];
const savedLang = localStorage.getItem('lang') || 'nl';
const initLang = SUPPORTED.includes(savedLang) ? savedLang : 'nl';

// Dynamic importers — elk locale apart chunk, alleen geladen als nodig
const loaders = {
  nl: () => import('./locales/nl.json'),
  en: () => import('./locales/en.json'),
  fr: () => import('./locales/fr.json'),
  de: () => import('./locales/de.json'),
  es: () => import('./locales/es.json'),
  it: () => import('./locales/it.json'),
};

// Laad één locale en registreer in i18n
export async function loadLocale(lang) {
  if (!loaders[lang]) return;
  if (i18n.hasResourceBundle(lang, 'translation')) return;
  const { default: data } = await loaders[lang]();
  i18n.addResourceBundle(lang, 'translation', data, true, true);
}

// Init met lege resources — initiële locale wordt hieronder direct geladen
i18n.use(initReactI18next).init({
  resources: {},
  lng: initLang,
  fallbackLng: 'nl',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

// Laad de actieve taal direct; daarna taal beschikbaar zonder flicker
loadLocale(initLang).then(() => {
  if (i18n.language !== initLang) i18n.changeLanguage(initLang);
});

export default i18n;
