import { Link } from "../assets/Components/LocaleLink.jsx";
import Seo from "../assets/Components/Seo.jsx";

export default function Colofon() {
    return (
        <section className="section section-alt">
            <Seo
                title="Colofon — ManonIT"
                description="Bedrijfsgegevens van ManonIT: KvK-nummer, BTW-nummer, contactgegevens en technische verantwoording van de website."
                path="/colofon"
            />

            <div className="legal-container">
                <Link to="/" className="back-link">← Terug naar home</Link>

                <header className="legal-header">
                    <h1>Colofon</h1>
                    <p className="legal-meta">ManonIT · Bijgewerkt op 19 juni 2026</p>
                </header>

                <div className="legal-body card">

                    <h2>Verantwoordelijke</h2>
                    <ul>
                        <li><strong>Naam:</strong> Manon Keeman</li>
                        <li><strong>Handelsnaam:</strong> ManonIT</li>
                        <li><strong>E-mail:</strong> <a href="mailto:lets@manonit.com">lets@manonit.com</a></li>
                        <li><strong>Website:</strong> <a href="https://manonit.com">manonit.com</a></li>
                    </ul>

                    <hr className="rule" />

                    <h2>Vestigingsadressen</h2>
                    <ul>
                        <li>Van Renesselaan 19, Bakkum</li>
                        <li>Hoofdstraat 147, Driebergen</li>
                    </ul>

                    <hr className="rule" />

                    <h2>Bedrijfsgegevens</h2>
                    <ul>
                        <li><strong>KvK-nummer:</strong> 42053266</li>
                        <li><strong>BTW-nummer:</strong> NL005459093B94</li>
                    </ul>

                    <hr className="rule" />

                    <h2>Over deze website</h2>
                    <p>
                        Deze website is volledig ontworpen, geschreven en gebouwd door Manon Keeman.
                    </p>
                    <ul>
                        <li><strong>Framework:</strong> React 19 + Vite 6</li>
                        <li><strong>Routing:</strong> React Router DOM 7</li>
                        <li><strong>Internationalisatie:</strong> i18next (Nederlands, Engels, Frans, Duits, Spaans, Italiaans)</li>
                        <li><strong>Hosting:</strong> Netlify</li>
                        <li><strong>Formulieren:</strong> Netlify Forms</li>
                        <li><strong>Nieuwsbrief:</strong> Substack</li>
                        <li><strong>Afbeeldingen:</strong> AVIF / WebP, geoptimaliseerd met sharp-cli</li>
                        <li><strong>Lettertypes:</strong> Space Grotesk &amp; Courier Prime (self-hosted via Fontsource)</li>
                    </ul>

                    <hr className="rule" />

                    <h2>Intellectueel eigendom</h2>
                    <p>
                        Alle inhoud op deze website — teksten, afbeeldingen, ontwerpen en code — is
                        eigendom van Manon Keeman, tenzij anders vermeld. Niets mag worden overgenomen
                        zonder voorafgaande schriftelijke toestemming.
                    </p>

                    <hr className="rule" />

                    <h2>Disclaimer</h2>
                    <p>
                        Hoewel ik zorgvuldigheid betracht bij het samenstellen van de inhoud van
                        deze website, kan ik de juistheid, volledigheid en actualiteit van de
                        informatie niet garanderen. Aan de inhoud van deze website kunnen geen
                        rechten worden ontleend.
                    </p>
                    <p>
                        Voor vragen of opmerkingen over de inhoud van deze website kun je contact
                        opnemen via <a href="mailto:lets@manonit.com">lets@manonit.com</a>.
                    </p>

                    <hr className="rule" />

                    <h2>Privacybeleid</h2>
                    <p>
                        Voor informatie over hoe ik met persoonsgegevens omga, zie het{" "}
                        <Link to="/privacy">privacybeleid</Link>.
                    </p>

                </div>

                <div className="legal-back">
                    <Link to="/" className="back-link">← Terug naar home</Link>
                </div>
            </div>

            <style>{`
        .legal-container {
          max-width: 72ch;
          margin: 0 auto;
          padding: clamp(24px, 4vw, 64px) clamp(16px, 3vw, 32px);
        }
        .legal-header { margin: 16px 0 24px; }
        .legal-header h1 { margin: 0 0 6px; }
        .legal-meta { color: var(--muted); font-size: .85rem; margin: 0; }
        .legal-body {
          padding: clamp(20px, 3vw, 36px);
          border: 1px solid var(--border);
          border-radius: 14px;
          background: var(--bg-alt);
          box-shadow: var(--shadow);
        }
        .legal-body h2 { margin: 24px 0 10px; font-size: 1.1rem; }
        .legal-body h2:first-child { margin-top: 0; }
        .legal-body p { margin: 0 0 12px; line-height: 1.72; }
        .legal-body ul { margin: 0 0 12px; padding-left: 1.3rem; display: flex; flex-direction: column; gap: 6px; }
        .legal-body li { line-height: 1.6; }
        .legal-body a { color: var(--accent); }
        .legal-body a:hover { text-decoration: underline; }
        .rule { height: 1px; background: var(--border); margin: 22px 0; border: none; }
        .back-link { display: inline-block; color: var(--accent); text-decoration: none; font-size: .92rem; margin-bottom: 16px; }
        .back-link:hover { text-decoration: underline; }
        .legal-back { margin-top: 24px; }
      `}</style>
        </section>
    );
}
