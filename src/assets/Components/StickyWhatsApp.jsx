import { FaWhatsapp } from "react-icons/fa";

export default function StickyWhatsApp() {
    return (
        <>
            <a
                href="https://wa.me/31624766568"
                target="_blank"
                rel="noreferrer"
                className="sticky-wa"
                aria-label="WhatsApp Manon Keeman"
            >
                <FaWhatsapp />
            </a>

            <style>{`
        .sticky-wa {
          position: fixed;
          bottom: 24px;
          right: 20px;
          z-index: 900;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #25d366;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 4px 16px rgba(0,0,0,.35);
          transition: transform .2s ease, box-shadow .2s ease;
          text-decoration: none;
        }
        .sticky-wa:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,.45);
          color: #fff;
        }

        /* Only show on mobile */
        @media (min-width: 920px) {
          .sticky-wa { display: none; }
        }
      `}</style>
        </>
    );
}