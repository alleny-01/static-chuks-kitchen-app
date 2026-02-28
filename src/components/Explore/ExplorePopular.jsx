import './ExplorePopular.css'

function ExplorePopular() {
  return (
    <section className="explore-popular-section">
      <h2>Popular</h2>

      <div className="popular-wrapper">
        <div className="explore-popular">
          <img src="/images/ExplorePage/Jollof.png" alt="Jollof" />
          <div>
            <h3>Jollof Rice & Fried Chicken</h3>
            <p>
              Our signature Jollof rice, served with crispy fried chicken and
              plantain.
            </p>

            <div className="explore-flex">
              <p>₦3,500</p>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="explore-popular">
          <img src="/images/ExplorePage/Eba.png" alt="Eba" />
          <div>
            <h3>Eba & Egusi Soup (Goat Meat)</h3>
            <p>
              Hearty Egusi soup with tender goat meat, served with soft Eba.
            </p>

            <div className="explore-flex">
              <p>₦3,500</p>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="explore-popular">
          <img src="/images/ExplorePage/Pounded.png" alt="Pounded" />
          <div>
            <h3>Pounded Yam & Edikaikong</h3>
            <p>Traditional pounded yam with rich, leafy Edikaikong soup.</p>

            <div className="explore-flex">
              <p>₦3,800</p>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="explore-popular">
          <img src="/images/ExplorePage/Snail.png" alt="Snail" />
          <div>
            <h3>Peppered Snail</h3>
            <p>
              Spicy and savory peppered snail, perfect as a starter.
            </p>

            <div className="explore-flex">
              <p>₦2,500</p>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="explore-popular">
          <img src="/images/ExplorePage/Grilled.png" alt="Grilled" />
          <div>
            <h3>Grilled Tilapia Fish</h3>
            <p>
              Whole grilled tilapia seasoned with our special spices.
            </p>

            <div className="explore-flex">
              <p>₦4,500</p>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="explore-popular">
          <img src="/images/ExplorePage/Jollof.png" alt="Jollof" />
          <div>
            <h3>Jollof Rice & Fried Chicken</h3>
            <p>
              Our signature Jollof rice, served with crispy fried chicken and
              plantain.
            </p>

            <div className="explore-flex">
              <p>₦3,500</p>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>

      <a href='#' className='explore-popular-view-all-categories'>View All Categories</a>
    </section>
  );
}

export default ExplorePopular;
