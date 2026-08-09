import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { isEnPath } from './langPath.js';

import nl from './locales/nl.json';
import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import es from './locales/es.json';
import it from './locales/it.json';
import uk from './locales/uk.json';

// /en/... heeft een eigen, indexeerbare URL en wint altijd van de opgeslagen
// voorkeur — anders flitst een directe /en/-load eerst kort de verkeerde taal.
const savedLang = isEnPath(window.location.pathname)
    ? 'en'
    : (localStorage.getItem('lang') || 'nl');

i18n.use(initReactI18next).init({
  resources: {
    nl: { translation: nl },
    en: { translation: en },
    fr: { translation: fr },
    de: { translation: de },
    es: { translation: es },
    it: { translation: it },
    uk: { translation: uk },
  },
  lng: savedLang,
  fallbackLng: 'nl',
  interpolation: { escapeValue: false },
});

export default i18n;
