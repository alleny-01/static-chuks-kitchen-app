import ExploreHero from "../components/Explore/ExploreHero";
import Filters from "../components/Explore/Filters";
import ExplorePopular from "../components/Explore/ExplorePopular";
import JollofSection from "../components/Explore/JollofSection";
import SwallowSection from "../components/Explore/SwallowSection";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";

function ExplorePage(){
    return (
        <div>
            <NavBar />
            <ExploreHero />
            <Filters />
            <ExplorePopular />
            <JollofSection />
            <SwallowSection />
            <Footer />
        </div>
    )
}

export default ExplorePage;