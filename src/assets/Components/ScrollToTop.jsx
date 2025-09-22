import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const { pathname, hash } = useLocation();

    // 1. Toggle zichtbaarheid van de "scroll naar boven"-knop
    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // 2. Scroll automatisch naar hash of bovenaan bij routewissel
    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            const tryScroll = () => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    return true;
                }
                return false;
            };

            // probeer meerdere keren tot de sectie in DOM staat
            if (!tryScroll()) {
                let attempts = 0;
                const t = setInterval(() => {
                    attempts++;
                    if (tryScroll() || attempts > 10) clearInterval(t);
                }, 50);
            }
        } else {
            // geen hash -> gewoon naar boven scrollen
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
    }, [pathname, hash]);

    // 3. Handmatige scroll naar boven via de knop
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll naar boven"
            className={`scroll-to-top ${visible ? "show" : ""}`}
        >
            <FaArrowUp />
            <style>{`
        .scroll-to-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: var(--accent);
          color: var(--bg);
          border: none;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          cursor: pointer;
          box-shadow: var(--shadow);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity .3s ease, transform .3s ease;
          z-index: 100;
        }
        .scroll-to-top.show {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-to-top:hover {
          background: var(--highlight);
          color: var(--bg);
        }
      `}</style>
        </button>
    );
}