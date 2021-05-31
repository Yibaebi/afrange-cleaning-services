import { AnimatePresence } from "framer-motion";
import React from "react";
import { primaryLogo } from "../../assets";
import { Footer } from "../footer/footer";
import { NavBar } from "../navbar/navbar";
import Router from "./../../router/index";

import "./app.css";

/*
 * FIXME:
 */

const Afrange = () => {
  return (
    <AnimatePresence>
      <div className="aae-main-app--container">
        <aside className="aae-nav-bar--extra-info">
          <div className="logo-container">{primaryLogo("white")}</div>
          <div className="location-container">
            <i className="fas fa-map-marker mr-4 fa-2x"></i>
            <div className="aae-nav--contact-details">
              <p>
                5-7 Mandeville Pl, <br />
                Marylebone, London W1U 3AY
              </p>
            </div>
          </div>
          <div className="location-container">
            <i className="fas fa-clock mr-4 fa-2x"></i>
            <div className="aae-nav--contact-details">
              <p>
                Mon - Fri, 08.00am - 06.00pm <br />
                Saturday and Sunday closed.
              </p>
            </div>
          </div>
          <button className="secondary-button">Schedule Pickup</button>
        </aside>

        <header>
          <NavBar />
        </header>
        <main>
          <Router />
        </main>
        <div type="button" class="email-bt">
          <div class="text-call">
            <i class="fab fa-whatsapp my-float"></i>
          </div>
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Afrange;
