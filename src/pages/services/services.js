import React from "react";
import { NavLink } from "react-router-dom";

import "./services.css";
import { WashAndIron } from "./serviceSections/washAndIron";

const Services = () => {
  return (
    <div className="aae-services container-styles">
      <nav className="aae-services--nav">
        <ul className={`aae-services-nav-bar--links-wrapper`}>
          <NavLink className="aae-nav-link" to="/services/wash">
            Wash and Fold
          </NavLink>
          <NavLink className="aae-nav-link" to="/services/dry-clean">
            Dry Cleaning
          </NavLink>
          <NavLink className="aae-nav-link" to="/services/others">
            Other Services
          </NavLink>
        </ul>
      </nav>

      <WashAndIron />

      <section className="aae-services--schedule-pickup-section">
        <aside className="schedule-pickup-section--content">
          <h1>
            Save 3+ hours a week when you leave your laundry to the experts
          </h1>
          <button className="secondary-button">Schedule Pickup</button>
        </aside>
        <aside className="schedule-pickup-section--overlay"></aside>
      </section>
    </div>
  );
};

export { Services };
