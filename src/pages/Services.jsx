import { useTranslation } from "react-i18next";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";

export default function Services() {
    const { t } = useTranslation();
    const prefix = useLangPrefix();

    const services = [
        { key: "websites" },
        { key: "design" },
        { key: "copy" },
        { key: "seo" },
        { key: "media" },
        { key: "social" },
    ];

    const steps = [
        { nr: "01", key: "meet" },
        { nr: "02", key: "quote" },
        { nr: "03", key: "build" },
        { nr: "04", key: "launch" },
    ];

    return (
        <>
            {/* ── WAT IK DOE ──────────────────────────────── */}
            <section className="svc-section section-alt" id="services">
                <div className="container">
                    <p className="svc-label">{t("services.label")}</p>
                    <h2>{t("services.title")}</h2>
                    <p className="svc-intro">{t("services.intro")}</p>

                    <div className="svc-grid">
                        {services.map((s) => (
                            <div key={s.key} className="svc-card">
                                <h3 className="svc-name">{t(`services.items.${s.key}.name`)}</h3>
                                <p className="svc-desc">{t(`services.items.${s.key}.desc`)}</p>
                                <p className="svc-tags">{t(`services.items.${s.key}.tags`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ZO WERKT HET ────────────────────────────── */}
            <section className="svc-steps-section section" id="hoe-werkt-het">
                <div className="container">
                    <p className="svc-label">{t("howItWorks.label")}</p>
                    <h2>{t("howItWorks.title")}</h2>
                    <p className="svc-intro">{t("howItWorks.intro")}</p>

                    <div className="svc-steps">
                        {steps.map((s) => (
                            <div key={s.key} className="svc-step">
                                <div className="svc-step-nr">{s.nr}</div>
                                <h3 className="svc-step-title">{t(`howItWorks.steps.${s.key}.title`)}</h3>
                                <p className="svc-step-text">{t(`howItWorks.steps.${s.key}.text`)}</p>
                            </div>
                        ))}
                    </div>

                    <div className="svc-steps-cta">
                        <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow>{t("howItWorks.cta")}</a>
                    </div>
                </div>
            </section>

            <style>{`
                .svc-section {
                    padding: 72px 20px;
                }
                .svc-steps-section {
                    padding: 72px 20px;
                }
                .svc-label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--accent);
                    margin: 0 0 10px;
                }
                .svc-intro {
                    color: var(--muted);
                    font-size: 0.96rem;
                    max-width: 58ch;
                    line-height: 1.65;
                    margin: 8px 0 40px;
                }

                /* Services grid */
                .svc-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 16px;
                }
                @media (max-width: 760px) {
                    .svc-grid { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 480px) {
                    .svc-grid { grid-template-columns: 1fr; }
                }

                .svc-card {
                    background: var(--bg);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    padding: 24px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                }
                .svc-card:hover {
                    border-color: color-mix(in srgb, var(--accent) 45%, transparent);
                    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
                }
                .svc-name {
                    font-size: 1rem;
                    font-weight: 600;
                    margin: 0;
                    color: var(--text);
                }
                .svc-desc {
                    font-size: 0.87rem;
                    color: var(--muted);
                    margin: 0;
                    line-height: 1.6;
                    flex: 1;
                }
                .svc-tags {
                    font-size: 0.75rem;
                    color: color-mix(in srgb, var(--accent) 70%, transparent);
                    margin: 0;
                    font-weight: 600;
                    letter-spacing: 0.03em;
                }

                /* Steps */
                .svc-steps {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                    position: relative;
                }
                @media (max-width: 760px) {
                    .svc-steps { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 440px) {
                    .svc-steps { grid-template-columns: 1fr; }
                }

                .svc-step {
                    background: var(--bg-alt);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    padding: 24px 20px;
                }
                .svc-step-nr {
                    font-family: 'Space Grotesk', Montserrat, ui-sans-serif;
                    font-size: 2rem;
                    font-weight: 700;
                    color: color-mix(in srgb, var(--accent) 35%, transparent);
                    line-height: 1;
                    margin-bottom: 12px;
                }
                .svc-step-title {
                    font-size: 1rem;
                    font-weight: 600;
                    margin: 0 0 8px;
                    color: var(--text);
                }
                .svc-step-text {
                    font-size: 0.86rem;
                    color: var(--muted);
                    margin: 0;
                    line-height: 1.6;
                }

                .svc-steps-cta {
                    margin-top: 40px;
                    text-align: center;
                }
            `}</style>
        </>
    );
}
