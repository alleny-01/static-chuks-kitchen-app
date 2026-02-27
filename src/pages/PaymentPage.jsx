import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import { Link } from "react-router-dom";
import "../styles/PaymentPage.css";

function PaymentPage() {
  return (
    <>
      <NavBar />
      <section className="payment-section">
        <h2>Payment</h2>

        <h3>Pay With:</h3>

        <div className="payment-method">
          <div>
            <input type="radio" />
            <label>Card</label>
          </div>

          <div>
            <input type="radio" />
            <label>Bank</label>
          </div>

          <div>
            <input type="radio" />
            <label>Transfer</label>
          </div>
        </div>

        <div className="card-input">
          <label>Card Number</label>
          <input type="text" placeholder="1234  5678  9101  1121" />
        </div>

        <div className="other-inputs">
          <div>
            <label>Expiration date</label>
            <input type="text" placeholder="MM/YY" />
          </div>

          <div>
            <label>CVV</label>
            <input type="text" placeholder="123" />
          </div>
        </div>

        <div className="save-flex">
          <input type="checkbox" />
          <label>Save card details</label>
        </div>

        <Link to='/loading'>Pay ₦9,900</Link>
        <p className="privacy-policy">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default PaymentPage;
