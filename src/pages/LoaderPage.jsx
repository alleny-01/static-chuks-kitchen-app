import { Link } from "react-router-dom";
import Loader from "../assets/images/LoaderPage/Loader.png";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import "../styles/LoaderPage.css";

function LoaderPage() {
  return (
    <>
      <NavBar />
      <div className="loader">
        <img src={Loader} alt="Loading" />
      </div>

      <div className="proceed-to-summary">
          <Link to = '/confirmation'>Proceed to Confirm &rarr;</Link>
      </div>
      <Footer />
    </>
  );
}

export default LoaderPage;
