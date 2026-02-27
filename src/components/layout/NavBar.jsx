import "./NavBar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Welcomepage/Logo.png";
import Hamburger from "../../assets/images/Welcomepage/Hamburger.png";
import { useState } from "react";

function NavBar() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <section className="nav-section">
        <img src={Logo} alt="Logo" />

        <div className="nav-flex">
          <NavLink to='/home'>Home</ NavLink>
          <NavLink to='/explore'>Explore</NavLink>
          <NavLink to='/cart'>My Orders</NavLink>
          <NavLink to='#'>Account</NavLink>
          <NavLink to='/signin' className='login' style={{ color: "#fff" }}>Login</NavLink>
        </div>

        <div className="hamburger-section">
          <img src={Hamburger} alt="Hamburger" onClick={() => setToggle(!toggle)}/>
        </div>
      </section>

     {/*  Mobile Nav */}
     {
      toggle ? <div className="mobile-nav">
          <NavLink to='/home'>Home</ NavLink>
          <NavLink to='/explore'>Explore</NavLink>
          <NavLink to='/cart'>My Orders</NavLink>
          <NavLink to='#'>Account</NavLink>
          <NavLink to='/signin' className='login' style={{ color: "#fff" }}>Login</NavLink>
        </div> : null
     }
      

    </>
  );
}

export default NavBar;
