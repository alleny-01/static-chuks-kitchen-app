import { NavLink } from "react-router-dom";
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="footer-logo">
          <img src="/images/WelcomePage/Logo.png" alt="Logo" />
          <p>Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
        </div>

        <div className="flex-footer-info">
          <h4>Quick Links</h4>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/explore'>Explore</NavLink>
          <NavLink to='/cart'>My Order</NavLink>
          <NavLink to='#'>Account</NavLink>
          <NavLink to='#'>Contact</NavLink>
        </div>

        <div className="flex-footer-info">
          <h4>Contact Us</h4>
          <a href="#">+234 801 234 5678</a>
          <a href="#">hello@chukskitchen.com</a>
          <a>123 Taste Blvd, Lagos, Nigeria</a>
        </div>

        <div className="flex-footer-info socials">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Linkedin</a>
          <a href="#">Instagram</a>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="flex-copyright">
        <p>&copy; 2020 Lift Media. All rights reserved.</p>
        <button className="scroll-top" ><a href="#">&uarr;</a></button>
      </div>
    </footer>
  );
}

export default Footer;