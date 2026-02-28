import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import '../styles/DeliveryDetailsPage.css'

function DeliveryDetailsPage() {
  return (
    <>
    <NavBar />
      <section className="delivery-details-section">
      <h2>Delivery Details</h2>

      <div className="home-address-section">
        <p>
          Home: 123 Main Street, Victoria Island, Lagos Apt 4B, Opposite Mega
          Plaza
        </p>

        <p className="change-address">Change Address</p>
      </div>

      <h3>Delivery Time</h3>
      <div className="delivery-time-section">ASAP(30-25)</div>

      <h3>Delivery Instructions (Optional)</h3>
      <div className="delivery-instructions-section">
        E.g leave at the front of the door, knock twice...................
      </div>

      <h3>Contact Address</h3>
      <div className="contact-address-section">+234 801 234 5678</div>

      <Link to='/payment'>Proceed to Pay &rarr;</Link>
    </section>

    <Footer />
    </>
  );
}

export default DeliveryDetailsPage;
