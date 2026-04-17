import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function NewsletterSignup() {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ "form-name": "newsletter", email }).toString(),
            });
            setStatus(res.ok ? "success" : "error");
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="newsletter-wrap">
            <p className="newsletter-label">{t("newsletter.label")}</p>
            <p className="newsletter-sub">{t("newsletter.sub")}</p>

            {status === "success" ? (
                <p className="newsletter-success">{t("newsletter.success")}</p>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    name="newsletter"
                    data-netlify="true"
                    className="newsletter-form"
                >
                    <input type="hidden" name="form-name" value="newsletter" />
                    <input
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("newsletter.placeholder")}
                        className="newsletter-input"
                        disabled={status === "sending"}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary newsletter-btn"
                        disabled={status === "sending"}
                    >
                        {status === "sending" ? t("newsletter.sending") : t("newsletter.btn")}
                    </button>
                    {status === "error" && (
                        <p className="newsletter-error">{t("newsletter.error")}</p>
                    )}
                </form>
            )}

            <style>{`
                .newsletter-wrap {
                    margin-top: 48px;
                    padding: 32px;
                    background: var(--bg-alt);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                }
                .newsletter-label {
                    margin: 0 0 6px;
                    font-size: 1.05rem;
                    font-weight: 600;
                    color: var(--text);
                }
                .newsletter-sub {
                    margin: 0 0 20px;
                    font-size: .87rem;
                    color: var(--muted);
                }
                .newsletter-form {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }
                .newsletter-input {
                    flex: 1;
                    min-width: 200px;
                    padding: 10px 14px;
                    border-radius: 8px;
                    border: 1px solid var(--border);
                    background: var(--bg);
                    color: var(--text);
                    font-size: .95rem;
                    outline: none;
                    transition: border-color .2s;
                }
                .newsletter-input:focus { border-color: var(--accent); }
                .newsletter-input::placeholder { color: var(--muted); }
                .newsletter-btn { white-space: nowrap; }
                .newsletter-success {
                    margin: 0;
                    color: var(--accent);
                    font-weight: 600;
                }
                .newsletter-error {
                    width: 100%;
                    margin: 8px 0 0;
                    font-size: .85rem;
                    color: #e07070;
                }
            `}</style>
        </div>
    );
}