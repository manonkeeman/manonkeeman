import { useParams } from "react-router-dom";
import StorytellingForDevelopers from "./ArticlesJournal/Storytelling.jsx";
import VanvliegtuigslepertotScrumMaster from "./ArticlesJournal/Scrummaster.jsx";
import DesignChaos from "./ArticlesJournal/DesignChaos.jsx";
import ToekomstTech from "./ArticlesJournal/ToekomstTech.jsx";

function NotFound({ slug }) {
    return (
        <section className="section">
            <div className="container">
                <h2>Artikel niet gevonden</h2>
                <p>Het artikel dat je zoekt bestaat niet{slug ? ` (slug: ${slug})` : ""}.</p>
            </div>
        </section>
    );
}

export default function ArticleRoute() {
    const { slug } = useParams();

    const views = {
        storytelling: <StorytellingForDevelopers />,
        scrummaster: <VanvliegtuigslepertotScrumMaster />,
        designchaos: <DesignChaos />,
        toekomsttech: <ToekomstTech />,
    };

    return views[slug] ?? <NotFound slug={slug} />;
}