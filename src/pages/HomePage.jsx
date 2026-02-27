import HomeHeroTop from "../components/Home/HomeHeroTop"
import SearchBar from "../components/Home/SearchBar"
import PopularCategories from "../components/Home/PopularCategories"
import ChefSpecials from "../components/Home/ChefSpecials"
import HomeHeroBottom from "../components/Home/HomeHeroBottom"
import Footer from "../components/layout/Footer"
import NavBar from "../components/layout/NavBar"

function HomePage() {
  return (
    <div>
        <NavBar />
        <HomeHeroTop />
        <SearchBar />
        <PopularCategories />
        <ChefSpecials />
        <HomeHeroBottom />
        <Footer />
    </div>
  )
}

export default HomePage;