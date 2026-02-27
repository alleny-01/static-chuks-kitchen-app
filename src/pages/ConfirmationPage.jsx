import "../styles/ConfirmationPage.css";
import Check from "../assets/images/ConfirmationPage/Check.png";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

function ConfirmationPage() {
  return (
    <>
      <NavBar />
      <section className="confirmation-section">
        <img src={Check} alt="Success" />
        <p>Order Placed Succesfully!</p>
        <p>Your delicious Chuks Kitchen meal is on its way!</p>

        <div></div>

        <h3>Order #123RGR231567Y Confirmed</h3>
        <button>Track Order</button>
        <p className="generate">Generate Receipt</p>
        <a href="#">Need help with your order?</a>
      </section>

      <Footer />
    </>
  );
}

export default ConfirmationPage;
