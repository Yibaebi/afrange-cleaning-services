import React from "react";
import { AnimatePresence } from "framer-motion";

import { primaryLogo } from "../../assets";
import { Link } from "react-router-dom";
import { Footer } from "../footer/footer";
import { NavBar } from "../navbar/navbar";
import Router from "./../../router/index";

import "./app.css";

const Afrange = () => {
  return (
    <AnimatePresence>
      <div className="aae-main-app--container">
        <aside className="aae-nav-bar--extra-info">
          <Link to="/home" className="primary-logo">
            <span className="logo-container">{primaryLogo("white")}</span>
          </Link>
          <div className="location-container">
            <i className="fas fa-map-marker mr-4 fa-2x"></i>
            <div className="aae-nav--contact-details">
              <p>
                No 4 North Fifth Avenue, <br />
                Trans Ekulu, Enugu
              </p>
            </div>
          </div>
          <div className="location-container open-hours">
            <i className="fas fa-clock mr-4 fa-2x"></i>
            <div className="aae-nav--contact-details">
              <p>
                Office opens from 7:30am – 7:00pm, <br />
                Monday – Saturday.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/message/TOKS546P3O5PI1"
            target="_blank"
            rel="noreferrer"
            className="primary-link"
          >
            Schedule Pickup
          </a>
        </aside>

        <header>
          <NavBar />
        </header>
        <main>
          <Router />
        </main>
        <a
          class="email-bt link"
          href="https://wa.me/message/TOKS546P3O5PI1"
          target="_blank"
          rel="noreferrer"
        >
          <span class="text-call">
            <i class="fab fa-whatsapp my-float"></i>
          </span>
          <span className="contact-us--direction">
            <span>Click here to contact us</span>
          </span>
        </a>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Afrange;
