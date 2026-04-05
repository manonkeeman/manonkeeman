import { Link } from "react-router-dom";

/**
 * items = [{ label: "Home", to: "/" }, { label: "Journal", to: "/#journal" }, { label: "Article Title" }]
 * Last item has no `to` — rendered as current page.
 */
export default function Breadcrumbs({ items }) {
    return (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            {items.map((item, i) => (
                <span key={i} style={{ display:"contents" }}>
                    {i > 0 && <span className="breadcrumb-sep" aria-hidden="true">›</span>}
                    {item.to
                        ? <Link to={item.to}>{item.label}</Link>
                        : <span aria-current="page">{item.label}</span>
                    }
                </span>
            ))}
        </nav>
    );
}