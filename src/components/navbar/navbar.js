import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { afrangeLogo } from "../../assets";

import "./navbar.css";

const NavBar = () => {
  const [hamburgerState, setHamburgerState] = useState("");

  const handleHamburgerOpen = () => {
    const hamState = !hamburgerState ? "open" : "";
    setHamburgerState(hamState);
  };
  return (
    <nav
      className={`aae-nav-bar--container container-styles ${hamburgerState}`}
    >
      <img src={afrangeLogo} alt="afrange-logo" className="afrange-logo" />
      <div
        id="nav-icon1"
        className={hamburgerState}
        onClick={handleHamburgerOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`aae-nav-bar--links-wrapper`}>
        <NavLink className="nav-link" to="/home">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about-us">
          About Us
        </NavLink>
        <NavLink className="nav-link" to="/services">
          Services
        </NavLink>
        <NavLink className="nav-link" to="/gallery">
          Gallery
        </NavLink>
        <NavLink className="nav-link" to="/pricing">
          Pricing
        </NavLink>
        <NavLink className="nav-link" to="/contact-us">
          Contact Us
        </NavLink>
        <button className="primary-button">Place Order</button>
      </ul>
    </nav>
  );
};

export { NavBar };
