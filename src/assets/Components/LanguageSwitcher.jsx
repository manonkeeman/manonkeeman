import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { stripEnPrefix, withLang } from '../../i18n/langPath.js';

const LANGUAGES = [
  { code: 'nl', label: 'NL', name: 'Nederlands' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'it', label: 'IT', name: 'Italiano' },
  { code: 'uk', label: 'УК', name: 'Українська' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  // NL en EN zijn de enige talen met een eigen, indexeerbare URL (/ vs /en/...).
  // FR/DE/ES/IT/UK schakelen alleen i18n om, zonder de URL aan te raken.
  const change = (code) => {
    const basePath = stripEnPrefix(location.pathname);
    const target = withLang(basePath, code) + location.search + location.hash;
    if (target !== location.pathname + location.search + location.hash) {
      navigate(target);
    }
    i18n.changeLanguage(code);
    if (code === 'en') {
      localStorage.removeItem('lang');
    } else {
      localStorage.setItem('lang', code);
    }
    setOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        className="lang-trigger"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <span>{current.label}</span>
        <svg className={`lang-chevron${open ? ' open' : ''}`} width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <ul className="lang-dropdown" role="listbox" aria-label="Language">
          {LANGUAGES.map(({ code, label, name }) => (
            <li key={code} role="option" aria-selected={i18n.language === code}>
              <button
                className={`lang-option${i18n.language === code ? ' active' : ''}`}
                onClick={() => change(code)}
              >
                <span className="lang-code">{label}</span>
                <span className="lang-name">{name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}