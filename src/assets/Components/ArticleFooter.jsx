import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SiSubstack, SiX, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { FiLink, FiCheck } from "react-icons/fi";

const SUBSTACK = "https://manonkeeman.substack.com";

export default function ArticleFooter({ shareTitle, shareText }) {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);
    const [articleUrl, setArticleUrl] = useState("");

    useEffect(() => {
        setArticleUrl(window.location.href);
    }, []);

    const enc = encodeURIComponent(articleUrl);
    const encTweet = encodeURIComponent(`${shareText || shareTitle} — door Manon Keeman`);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(articleUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            // clipboard unavailable
        }
    };

    return (
        <footer className="af-wrap">
            <a href={SUBSTACK} target="_blank" rel="noreferrer" className="af-substack">
                <SiSubstack />
                {t('articleFooter.substack')}
            </a>

            <div className="af-share-section">
                <span className="af-share-label">{t('articleFooter.shareLabel')}</span>
                <div className="af-btns">
                    <a
                        className="af-btn af-btn--linkedin"
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiLinkedin /><span>LinkedIn</span>
                    </a>
                    <a
                        className="af-btn af-btn--x"
                        href={`https://twitter.com/intent/tweet?url=${enc}&text=${encTweet}&via=manonkeeman`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiX /><span>X</span>
                    </a>
                    <a
                        className="af-btn af-btn--facebook"
                        href={`https://www.facebook.com/sharer/sharer.php?u=${enc}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SiFacebook /><span>Facebook</span>
                    </a>
                    <button
                        className="af-btn af-btn--instagram"
                        onClick={handleCopy}
                        title="Kopieer link en plak in Instagram-verhaal of bio"
                    >
                        <SiInstagram /><span>Instagram</span>
                    </button>
                    <button
                        className={`af-btn af-btn--copy${copied ? " af-btn--copied" : ""}`}
                        onClick={handleCopy}
                    >
                        {copied ? <FiCheck /> : <FiLink />}
                        <span>{copied ? t('share.copied') : "Link"}</span>
                    </button>
                </div>
            </div>

            <style>{`
        .af-wrap {
          max-width: 68ch;
          margin: 32px auto 0;
          padding-top: 28px;
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .af-substack {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 26px;
          border-radius: 999px;
          border: 1px solid var(--accent);
          color: var(--accent);
          background: transparent;
          font-size: .95rem;
          font-weight: 600;
          text-decoration: none;
          transition: background .18s ease, color .18s ease;
        }
        .af-substack:hover { background: var(--accent); color: var(--bg); }

        .af-share-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: 100%;
        }
        .af-share-label {
          font-size: .78rem;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .af-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }
        .af-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--muted);
          font-size: .85rem;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          text-decoration: none;
          transition: border-color .15s ease, color .15s ease;
          white-space: nowrap;
          line-height: 1;
        }
        .af-btn svg { font-size: 1rem; flex-shrink: 0; }

        .af-btn--linkedin:hover  { color: #0a66c2; border-color: #0a66c2; }
        .af-btn--x:hover         { color: var(--text); border-color: var(--text); }
        .af-btn--facebook:hover  { color: #1877f2; border-color: #1877f2; }
        .af-btn--instagram:hover { color: #e1306c; border-color: #e1306c; }
        .af-btn--copy:hover      { color: var(--accent); border-color: var(--accent); }
        .af-btn--copied          { color: var(--accent); border-color: var(--accent); }

        @media (max-width: 480px) {
          .af-btns { gap: 6px; }
          .af-btn  { padding: 7px 11px; font-size: .82rem; }
        }
      `}</style>
        </footer>
    );
}
