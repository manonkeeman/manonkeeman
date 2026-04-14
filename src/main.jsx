import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import "./Styles.css";
import i18n, { loadLocale } from './i18n/index.js';

const SUPPORTED = ['nl', 'en', 'fr', 'de', 'es', 'it'];
const savedLang = localStorage.getItem('lang') || 'nl';
const initLang = SUPPORTED.includes(savedLang) ? savedLang : 'nl';

// Render pas nadat de actieve locale geladen is — voorkomt lege tekst
loadLocale(initLang).then(() => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </React.StrictMode>
    );
});
