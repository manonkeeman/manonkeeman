import { useParams } from "react-router-dom";

// Import de losse artikelen
import StorytellingForDevelopers from "./ArticlesJournal/Storytelling.jsx";
import VanvliegtuigslepertotScrumMaster from "./ArticlesJournal/Scrummaster.jsx";
import Vandesignernaarfullstack from "./ArticlesJournal/DesignChaos.jsx";
import ToekomstTech from "./ArticlesJournal/ToekomstTech.jsx";

export default function ArticleRoute() {
    const { slug } = useParams();

    switch (slug) {
        case "storytelling":
            return <StorytellingForDevelopers />;
        case "scrummaster":
            return <VanvliegtuigslepertotScrumMaster />;
        case "designchaos":
            return <Vandesignernaarfullstack />;
        case "toekomsttech":
            return <ToekomstTech />;
        default:
            return (
                <section className="section">
                    <div className="container">
                        <h2>Artikel niet gevonden</h2>
                        <p>Het artikel dat je zoekt bestaat niet.</p>
                    </div>
                </section>
            );
    }
}