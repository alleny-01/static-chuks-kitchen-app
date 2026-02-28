import { Link } from "react-router-dom";
import "../styles/SignUpPage.css";
import Footer from "../components/layout/Footer";

function SignUpPage() {
  return (
    <>
      <main className="sign-up">
      <section className="sign-up-background-section hidden">
        <h1>Chuks Kitchen</h1>
        <p>
          Your journey to delicious, authentic Nigerian meals starts here. Sign
          up or log in to order your favorites today!
        </p>
      </section>

      <section className="sign-in-section">
        <img src="/images/SignUpPage/Logo.png" alt="Logo" />
        <h2>Create Your Account</h2>

        <div className="sign-in-form">
          <label>Email</label>
          <input type="text" placeholder="Enter your email" id="sign-in-email"/>

          <label>Phone Number</label>
          <input type="text" placeholder="Phone number" id="sign-in-phone"/>

          <label>Password</label>
          <input type="password" placeholder="Password" id="sign-in-password"/>

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" id="sign-in-cp"/>
        </div>

        <div className="check">
          <input type="checkbox" />
          <p>
            I agree to <a href="#">Terms & Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>
          </p>
          </div>

        <div className="cont">
          <Link to="/signin">Continue</Link>
          <p>Or continue with</p>
        </div>

        <div className="sign-in-with">
          <img src="/images/SignUpPage/Google.png" alt="Google" />
          <a href="#">Continue with Google</a>
        </div>
        <div className="sign-in-with">
          <img src="/images/SignUpPage/Facebook.png" alt="Facebook" />
          <a href="#">Continue with Apple</a>
        </div>

        <p className="already-have">
          Already have an account? <Link to='/signin'>Sign In</Link>
        </p>
      </section>
    </main>

    <Footer />
    </>
  );
}

export default SignUpPage;
