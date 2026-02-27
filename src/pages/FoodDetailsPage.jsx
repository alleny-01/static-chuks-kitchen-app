import DetailImg from "../assets/images/FoodDetailsPage/Detail_img.png";
import Mobile from "../assets/images/FoodDetailsPage/Mobile.png"
import Vector from "../assets/images/FoodDetailsPage/Vector.png";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import "../styles/FoodDetailsPage.css";

function FoodDetailsPage() {
  return (
    <>
      <NavBar />
      <section className="details-section">
      <section className="detail-img">
        <img src={DetailImg} alt="Detail-img" className="desktop-img"/>
        <img src={Mobile} alt="Mobile img" className="mobile-img"/>
      </section>

      <section className="main-details">
        <p className="close">&times;</p>

        <h2>Jollof Rice with Fried Chicken</h2>
        <h3 className="price">₦2,800</h3>

        <p>
          Our signature Jollof rice, cooked to perfection with aromatic spices,
          served with juicy, golden-fried chicken. A classic Nigerian comfort
          food, rich in flavor and satisfying. Perfect for a quick lunch or a
          hearty dinner.
        </p>

        <div className="flex-options">
          <div>
            <img src={Vector} alt="Vector" />
            <p>Mildly spicy</p>
          </div>

          <div>
            <img src={Vector} alt="Vector" />
            <p>Vegetarian option available</p>
          </div>

          <div>
            <img src={Vector} alt="Vector" />
            <p>View Allergies</p>
          </div>
        </div>

        <h3>Choose Your Protein</h3>

        <div className="protein-options">
          <div className="protein">
            <div>
              <input type="radio" />
              <p>Fried Chicken</p>
            </div>
            <span>(Default)</span>
          </div>

          <div className="protein">
            <div>
              <input type="radio" />
              <p>Grilled Fish</p>
            </div>
            <span>+₦500</span>
          </div>

          <div className="protein">
            <div>
              <input type="radio" />
              <p>Beef</p>
            </div>
            <span>+₦700</span>
          </div>
        </div>

        <h3>Extra Sides (Optional)</h3>

        <div className="extra-options">
          <div className="extra">
            <div>
              <input type="checkbox" />
              <p>Fried Plantain</p>
            </div>
            <span>+₦700</span>
          </div>

          <div className="extra">
            <div>
              <input type="checkbox" />
              <p>Coleslaw</p>
            </div>
            <span>+₦500</span>
          </div>

          <div className="extra">
            <div>
              <input type="checkbox" />
              <p>Extra Pepper Sauce</p>
            </div>
            <span>+₦300</span>
          </div>
        </div>

        <h3>Special Instructions</h3>

        <div className="textarea">
          E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is
          tasty
        </div>
      </section>
    </section>

    <Footer />
    </>
  );
}

export default FoodDetailsPage;
