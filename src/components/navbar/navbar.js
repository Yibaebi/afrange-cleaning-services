import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
      <Link to="/home">
        <img src={afrangeLogo} alt="afrange-logo" className="afrange-logo" />
      </Link>
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
        <NavLink
          onClick={() => setHamburgerState("")}
          className="aae-nav-link"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setHamburgerState("")}
          className="aae-nav-link"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => setHamburgerState("")}
          className="aae-nav-link"
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          onClick={() => setHamburgerState("")}
          className="aae-nav-link"
          to="/gallery"
        >
          Gallery
        </NavLink>
        <NavLink
          onClick={() => setHamburgerState("")}
          className="aae-nav-link"
          to="/pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          onClick={() => setHamburgerState("")}
          className="aae-nav-link"
          to="/contact-us"
        >
          Contact
        </NavLink>
        <a
          className="primary-link"
          href="https://wa.me/message/TOKS546P3O5PI1"
          target="_blank"
          rel="noreferrer"
        >
          Schedule Pickup
        </a>
      </ul>
    </nav>
  );
};

export { NavBar };
