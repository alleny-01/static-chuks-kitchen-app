import "./JollofSection.css";

function JollofSection() {
  return (
    <section className="jollof-container">
      <h2>Jollof Rice & Entrees</h2>

      <div className="jollof-section">
        <div className="jollof-item">
          <img src="/images/ExplorePage/Smoked.png" alt="Smoked Jollof" />
          <div>
            <h3>Jollof Rice & Smoked Fish</h3>
            <p>Flavorful jollof rice served with perfectly smoked fish.</p>

            <div className="jollof-flex">
              <p>₦3,500</p>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="jollof-item">
          <img src="/images/ExplorePage/Jollof.png" alt="Jollof" />
          <div>
            <h3>Party Jollof Rice (Veg)</h3>
            <p>Vegetarian party jollof, full of rich flavors.</p>

            <div className="jollof-flex">
              <p>₦2,800</p>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="jollof-item">
          <img src="/images/ExplorePage/Jollof.png" alt="Jollof" />

          <div>
            <h3>Party Jollof Rice (Veg)</h3>
            <p>Vegetarian party jollof, full of rich flavors.</p>

            <div className="jollof-flex">
              <p>₦3,500</p>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="jollof-section-view-all-categories">View All Categories</a>
    </section>
  );
}

export default JollofSection;
