import './PopularCategories.css'

function PopularCategories() {
  return (
    <section className="popular">
      <h2>Popular Categories</h2>

      <div className="popular-container">
        <div className="popular-item">
          <img src="/images/HomePage/Jollof.png" alt='Jollof'/>
          <h3>Jollof Delights</h3>
        </div>

        <div className="popular-item">
          <img src="/images/HomePage/Swallow.png" alt='Swallow'/>
          <h3>Swallow and Soups</h3>
        </div>

        <div className="popular-item">
          <img src="/images/HomePage/Grills.png" alt='Grills and BBQ'/>
          <h3>Grills and BBQ</h3>
        </div>

        <div className="popular-item">
          <img src="/images/HomePage/Treats.png" alt='Treats'/>
          <h3>Sweet Treats</h3>
        </div>

        <div className="popular-item">
          <img src="/images/HomePage/Swallow.png" alt='Swallow'/>
          <h3>Jollof Delights</h3>
        </div>

        <div className="popular-item">
          <img src="/images/HomePage/Grills.png" alt='Grills'/>
          <h3>Jollof Delights</h3>
        </div>

        <a href='#' className='view-all-categories'>View All Categories</a>
      </div>
    </section>
  );
}

export default PopularCategories;
