import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiShare2 } from "react-icons/fi";

export default function ShareButton({ shareTitle, shareText }) {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: shareTitle,
                    text: shareText,
                    url: window.location.href,
                });
            } catch {
                // cancelled by user, ignore
            }
            return;
        }
        // Desktop fallback: copy URL + show confirmation
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // clipboard not available
        }
    };

    return (
        <button className="share-btn-labeled" onClick={handleShare} aria-label={t('share.label')}>
            <FiShare2 />
            <span>{copied ? t('share.copied') : t('share.label')}</span>

            <style>{`
        .share-btn-labeled {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--muted);
          font-size: .95rem;
          font-weight: 500;
          cursor: pointer;
          transition: color .2s ease, border-color .2s ease, background .2s ease;
          white-space: nowrap;
        }
        .share-btn-labeled:hover {
          color: var(--text);
          border-color: var(--accent);
          background: rgba(255,255,255,.04);
        }
        .share-btn-labeled svg {
          font-size: 1.1rem;
          flex-shrink: 0;
        }
      `}</style>
        </button>
    );
}