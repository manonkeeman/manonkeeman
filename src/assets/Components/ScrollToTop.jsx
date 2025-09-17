import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

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