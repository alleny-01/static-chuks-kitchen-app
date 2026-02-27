import "../styles/WelcomePage.css";
import { Link } from "react-router-dom";
import Banner from "../assets/images/Welcomepage/Banner.png";
import Mobile from "../assets/images/Welcomepage/Welcome Mobile.png"
import Logo from "../assets/images/Welcomepage/Logo.png";
import Cutleries from "../assets/images/Welcomepage/Cutleries.png";
import Delivery from "../assets/images/Welcomepage/Delivery.png";
import Footer from "../components/layout/Footer";

function WelcomePage() {
  return (
    <>
      <main className="welcome-section">
      <section className="welcome-img">
        <img src={Banner} alt="banner" className="welcome-desktop"/>
        <img src={Mobile} alt="Mobile-img" className="welcome-mobile"/>
      </section>

      <section className="get-started">
        <div className="nav">
          <Link to='/signin'>Sign in</Link>
          <img src={Logo} alt="logo" />
        </div>

        <div className="main-section">
          <div className="write-up">
            <h1>Your Authentic Taste of Nigeria</h1>
            <p>
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your
              doorstep.
            </p>
          </div>

          <div className="grid">
            <div className="flex">
              <img src={Cutleries} alt="Cutleries" />
              <p>Freshly Prepared</p>
            </div>

            <div className="flex">
              <img src={Cutleries} alt="Cutleries" />
              <p>Support Local Business</p>
            </div>

            <div className="flex">
              <img src={Delivery} alt="Delivery" />
              <p>Fast & Reliable Delivery</p>
            </div>
          </div>

          <div className="links">
            <Link to='/signup'>Start Your Order</Link>
            <a href="#">Learn More About Us</a>
          </div>
        </div>

        <div className="footer-section hidden">
          <p>&copy; 2024 Chuks Kitchen.</p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </section>
    </main>

    <Footer />
    </>
  );
    
    
}

export default WelcomePage;
