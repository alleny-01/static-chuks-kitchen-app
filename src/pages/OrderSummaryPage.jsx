import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import { Link } from "react-router-dom";
import "../styles/OrderSummaryPage.css";

function OrderSummaryPage() {
  return (
    <>
      <NavBar />
      <section className="summary-section">
        <h2>Order Summary</h2>

        <h3>Add a Promo Code</h3>
        <div className="flex-input-section">
          <input type="text" placeholder="Enter Code Here" />
          <button>Login</button>
        </div>

        <div className="summary-amount">
          <div className="summary-amount-flex">
            <p>Subtotal</p>
            <p>₦9,200</p>
          </div>

          <div className="summary-amount-flex">
            <p>Delivery Fee</p>
            <p>₦500</p>
          </div>

          <div className="summary-amount-flex">
            <p>Service Fee</p>
            <p>₦200</p>
          </div>

          <div className="summary-amount-flex">
            <p>Tax</p>
            <p>₦0</p>
          </div>
        </div>

        <div className="summary-flex-total">
          <h3>Total</h3>
          <h3>₦9,900</h3>
        </div>

        <div className="summary-method">
          <p className="delivery">Delivery</p>
          <p className="pick-up">Pick up</p>
        </div>

        <h3>Special Instructions for Restaurant</h3>

        <div className="summary-textarea">
          E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is
          tasty
        </div>

        <Link to="/deliverydetails">Proceed to Checkout</Link>
      </section>

      <Footer />
    </>
  );
}

export default OrderSummaryPage;
