import Jollof from "../assets/images/OrdersPage/Jollof.png";
import Egusi from "../assets/images/OrdersPage/Egusi.png";
import Snails from "../assets/images/OrdersPage/Snails.png";
import "../styles/OrdersPage.css";
import { Link } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

function OrdersPage() {
  return (
    <>
      <NavBar />
      <section className="orders-section">
        <h2>Your Cart</h2>

        <div className="orders">
          <div className="order">
            <img src={Jollof} alt="Jollof" />

            <div className="order-details">
              <div>
                <h3>Jollof Rice & Fried Chicken</h3>
                <p>With plantain, extra pepper sauce</p>
              </div>

              <div className="quantity-flex">
                <button className="increment">+</button>
                <h2>1</h2>
                <button className="decrement">-</button>
              </div>

              <div className="order-price-flex">
                <h3 className="price">₦3,200</h3>
                <button className="remove">&times;</button>
              </div>
            </div>
          </div>

          <div className="order">
            <img src={Egusi} alt="Egusi" />

            <div className="order-details">
              <div>
                <h3>Jollof Rice & Fried Chicken</h3>
                <p>With plantain, extra pepper sauce</p>
              </div>

              <div className="quantity-flex">
                <button className="increment">+</button>
                <h2>1</h2>
                <button className="decrement">-</button>
              </div>

              <div className="order-price-flex">
                <h3 className="price">₦3,200</h3>
                <button className="remove">&times;</button>
              </div>
            </div>
          </div>

          <div className="order">
            <img src={Snails} alt="Snails" />

            <div className="order-details">
              <div>
                <h3>Jollof Rice & Fried Chicken</h3>
                <p>With plantain, extra pepper sauce</p>
              </div>

              <div className="quantity-flex">
                <button className="increment">+</button>
                <h2>1</h2>
                <button className="decrement">-</button>
              </div>

              <div className="order-price-flex">
                <h3 className="price">₦3,200</h3>
                <button className="remove">&times;</button>
              </div>
            </div>
          </div>

          <div className="order">
            <img src={Jollof} alt="Jollof" />

            <div className="order-details">
              <div>
                <h3>Jollof Rice & Fried Chicken</h3>
                <p>With plantain, extra pepper sauce</p>
              </div>

              <div className="quantity-flex">
                <button className="increment">+</button>
                <h2>1</h2>
                <button className="decrement">-</button>
              </div>

              <div className="order-price-flex">
                <h3 className="price">₦3,200</h3>
                <button className="remove">&times;</button>
              </div>
            </div>
          </div>
        </div>

        <div className="proceed-section">
          <Link to='/home'>+ Add more items from Chuks Kitchen</Link>
          <Link to = '/summary' className="proceed">Proceed &rarr;</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default OrdersPage;
