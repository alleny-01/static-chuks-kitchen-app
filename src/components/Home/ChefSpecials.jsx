import "./ChefSpecials.css";
import { Link } from "react-router-dom";

function ChefSpecials() {
  return (
    <section className="specials">
      <h2>Chef's Specials</h2>

      <div className="special-container">
        <div className="special-item">
          <img src="/images/HomePage/Tilapia.png" alt="Tilapia" />
          <div>
            <h3>Spicy Tilapia Pepper Soup</h3>
            <p>
              A comforting and spicy soup with tender tilapia fish, a true
              Nigerian delicacy.
            </p>

            <div className="special-flex">
              <p>₦3,500</p>
              <a href="#">Add to cart</a>
            </div>
          </div>
        </div>
        <div className="special-item">
          <img src="/images/HomePage/Jollof.png" alt="Jollof" />
          <div>
            <h3>Jollof Rice & Fried Chicken</h3>
            <p>
              Our signature Jollof rice, cooked to perfection, served with
              succulent fried chicken.
            </p>

            <div className="special-flex">
              <p>₦3,500</p>
              <Link to='/fooddetails'>Add to cart</Link>
            </div>
          </div>
        </div>
        <div className="special-item">
          <img src="/images/HomePage/Jollof.png" alt="Jollof" />

          <div>
            <h3>Jollof Rice & Fried Chicken</h3>
            <p>
              Our signature Jollof rice, cooked to perfection, served with
              succulent fried chicken.
            </p>

            <div className="special-flex">
              <p>₦3,500</p>
              <Link to='/fooddetails'>Add to cart</Link>
            </div>
          </div>
        </div>
        <div className="special-item">
          <img src="/images/HomePage/Jollof.png" alt="Jollof" />
          <div>
            <h3>Jollof Rice & Smoked Chicken</h3>
            <p>
              Our signature Jollof rice, cooked to perfection, served with
              succulent Smoked chicken.
            </p>

            <div className="special-flex">
              <p>₦3,500</p>
              <a href="#">Add to cart</a>
            </div>
          </div>
        </div>
        <div className="special-item">
          <img src="/images/HomePage/Jollof2.png" alt="Jollof2" />
          <div>
            <h3>Jollof Rice & Fried Chicken</h3>
            <p>
              Our signature Jollof rice, cooked to perfection, served with
              succulent fried chicken.
            </p>

            <div className="special-flex">
              <p>₦3,500</p>
               <Link to='/fooddetails'>Add to cart</Link>
            </div>
          </div>
        </div>
        <div className="special-item">
          <img src="/images/HomePage/Egusi.png" alt="Egusi" />

          <div>
            <h3>Egusi Soup & Pounded Yam</h3>
            <p>
              Rich and savory Egusi soup with assorted meats, paired with
              freshly pounded yam.
            </p>

            <div className="special-flex">
              <p>₦3,500</p>
              <a href="#">Add to cart</a>
            </div>
          </div>
        </div>

        <a href="#" className="view-all-specials">View All Specials</a>
      </div>
    </section>
  );
}

export default ChefSpecials;
