import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import nl from './locales/nl.json';
import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import es from './locales/es.json';
import it from './locales/it.json';

const savedLang = localStorage.getItem('lang') || 'nl';

i18n.use(initReactI18next).init({
  resources: {
    nl: { translation: nl },
    en: { translation: en },
    fr: { translation: fr },
    de: { translation: de },
    es: { translation: es },
    it: { translation: it },
  },
  lng: savedLang,
  fallbackLng: 'nl',
  interpolation: { escapeValue: false },
});

export default i18n;
