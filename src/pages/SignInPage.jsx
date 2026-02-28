import "../styles/SignInPage.css";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

function SignInPage() {
  return (
    <>
      <main className="sign-in">
      <section className="sign-in-background-section">
        <h1>Chuks Kitchen</h1>
        <p>
          Your journey to delicious, authentic Nigerian meals starts here. Sign
          up or log in to order your favorites today!
        </p>
      </section>

      <section className="log-in-section">
        <img src="/images/SignInPage/Logo.png" alt="Logo" />
        <h2>Login your Account</h2>

        <div className="log-in-form">
          <label>Email or phone number</label>
          <input type="text" id="log-in-email" placeholder="Enter your Email"/>

          <label>Password</label>
          <input type="password" id="log-in-password" placeholder="Enter your password"/>
        

        <a href="#" className="forgot-password">
          Forgot Password?
        </a>

        </div>

        <div className="continue">
          <Link to='/home' >Continue</Link>
          <p>Or continue with</p>
        </div>

        <div className="flex-item">
          <img src="/images/SignInPage/Google.png" alt="Google" />
          <a href="#">Continue with Google</a>
        </div>
        <div className="flex-item">
          <img src="/images/SignInPage/Facebook.png" alt="Facebook" />
          <a href="#">Continue with Apple</a>
        </div>

        <p className="dont-have">
          Don't have an account? <Link to='/signup'>Create an account</Link>
        </p>
      </section>
    </main>

    <Footer />
    </>
    
  );
}

export default SignInPage;
