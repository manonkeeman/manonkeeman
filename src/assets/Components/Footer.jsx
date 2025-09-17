import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <p className="footer-text">
                    © {new Date().getFullYear()} Alle rechten voorbehouden | Code & Content - Manon Keeman
                </p>
            </div>

            <style>{`
        .footer {
          padding: 20px;
          background: var(--bg-alt);
          border-top: 1px solid var(--border);
        }

        .footer-inner {
          display: flex;
          flex-direction: column;   /* tekst + icons onder elkaar */
          align-items: center;      /* alles centreren */
          text-align: center;
          gap: 10px;
        }

        .footer-text {
          margin: 0;
          font-size: 11px;          /* altijd kleiner */
          color: var(--muted);
        }
      `}</style>
        </footer>
    );
}