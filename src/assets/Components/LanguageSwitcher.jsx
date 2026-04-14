import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'nl', label: 'NL', name: 'Nederlands' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'it', label: 'IT', name: 'Italiano' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[1];

  const change = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
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