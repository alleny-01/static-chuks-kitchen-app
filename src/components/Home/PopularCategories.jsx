import './PopularCategories.css'
import Grills  from "../../assets/images/HomePage/Grills.png"
import Jollof from "../../assets/images/HomePage/Jollof.png"
import Swallow from "../../assets/images/HomePage/Swallow.png"
import Treats from "../../assets/images/HomePage/Treats.png"

function PopularCategories() {
  return (
    <section className="popular">
      <h2>Popular Categories</h2>

      <div className="popular-container">
        <div className="popular-item">
          <img src={Jollof} alt='Jollof'/>
          <h3>Jollof Delights</h3>
        </div>

        <div className="popular-item">
          <img src={Swallow} alt='Swallow'/>
          <h3>Swallow and Soups</h3>
        </div>

        <div className="popular-item">
          <img src={Grills} alt='Grills and BBQ'/>
          <h3>Grills and BBQ</h3>
        </div>

        <div className="popular-item">
          <img src={Treats} alt='Treats'/>
          <h3>Sweet Treats</h3>
        </div>

        <div className="popular-item">
          <img src={Swallow} alt='Swallow'/>
          <h3>Jollof Delights</h3>
        </div>

        <div className="popular-item">
          <img src={Grills} alt='Grills'/>
          <h3>Jollof Delights</h3>
        </div>

        <a href='#' className='view-all-categories'>View All Categories</a>
      </div>
    </section>
  );
}

export default PopularCategories;
