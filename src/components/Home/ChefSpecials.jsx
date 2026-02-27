import "./ChefSpecials.css";
import Jollof from "../../assets/images/HomePage/Jollof.png";
import Egusi from "../../assets/images/HomePage/Egusi.png";
import Jollof2 from "../../assets/images/HomePage/Jollof2.png";
import { Link } from "react-router-dom";
import Tilapia from "../../assets/images/HomePage/Tilapia.png";

function ChefSpecials() {
  return (
    <section className="specials">
      <h2>Chef's Specials</h2>

      <div className="special-container">
        <div className="special-item">
          <img src={Tilapia} alt="Tilapia" />
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
          <img src={Jollof} alt="Jollof" />
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
          <img src={Jollof} alt="Jollof" />

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
          <img src={Jollof} alt="Jollof" />
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
          <img src={Jollof2} alt="Jollof2" />
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
          <img src={Egusi} alt="Egusi" />

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
