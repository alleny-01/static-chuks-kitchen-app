import "./SwallowSection.css";

function SwallowSection() {
  return (
    <section className="swallow-container">
      <h2>Swallows & soup</h2>

      <div className="swallow-section">
        <div className="swallow-item">
          <img src="/images/ExplorePage/Amala.png" alt="Amala" />

          <div>
            <h3>Amala with Gbegiri & Ewedu</h3>
            <p>
              Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf)
              soup.
            </p>

            <div className="swallow-flex">
              <p>₦3,100</p>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="swallow-item">
          <img src="/images/ExplorePage/Fufu.png" alt="Fufu" />

          <div>
            <h3>Fufu & Okra Soup (Fish)</h3>
            <p>Light Fufu served with fresh okra soup and tilapia fish.</p>

            <div className="swallow-flex">
              <p>₦3,300</p>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="swallow-item">
          <img src="/images/ExplorePage/Fufu.png" alt="Fufu" />

          <div>
            <h3>Fufu & Okra Soup (Fish)</h3>
            <p>
              Light Fufu served with fresh okra soup and tilapia fish.
            </p>

            <div className="swallow-flex">
              <p>₦3,500</p>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="swallow-section-view-all-categories">View All Categories</a>
    </section>
  );
}

export default SwallowSection;
