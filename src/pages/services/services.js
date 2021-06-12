import React from "react";
import { NavLink } from "react-router-dom";
import { DryCleaning } from "./serviceSections/dryCleaning";
import { OtherServices } from "./serviceSections/otherServices";
import { WashAndIron } from "./serviceSections/washAndIron";

import "./services.css";

const Services = () => {
  return (
    <div className="aae-services container-styles">
      <nav className="aae-services--nav">
        <ul className={`aae-services-nav-bar--links-wrapper`}>
          <NavLink
            className="aae-nav-link desktop-view"
            to="#wash-and-iron"
            isActive={() => {
              if (
                window.location.hash === "#wash-and-iron" ||
                window.location.hash === ""
              ) {
                return true;
              }
            }}
          >
            Wash and Fold
          </NavLink>
          <NavLink
            className="aae-nav-link mobile-view"
            to="#wash-and-iron"
            isActive={() => {
              if (
                window.location.hash === "#wash-and-iron" ||
                window.location.hash === ""
              ) {
                return true;
              }
            }}
          >
            Wash
          </NavLink>

          <NavLink
            className="aae-nav-link"
            to="#dry-clean"
            isActive={() => {
              if (window.location.hash === "#dry-clean") {
                return true;
              }
            }}
          >
            Dry Cleaning
          </NavLink>
          <NavLink
            className="aae-nav-link"
            to="#other-services"
            isActive={() => {
              if (window.location.hash === "#other-services") {
                return true;
              }
            }}
          >
            Other Services
          </NavLink>
        </ul>
      </nav>
      {window.location.hash === "#wash-and-iron" ||
      window.location.hash === "" ? (
        <WashAndIron />
      ) : window.location.hash === "#dry-clean" ? (
        <DryCleaning />
      ) : (
        <OtherServices />
      )}

      <section className="aae-services--schedule-pickup-section">
        <aside className="schedule-pickup-section--content">
          <h1>
            Save 3+ hours a week when you leave your laundry to the experts
          </h1>
          <button className="primary-button">Schedule Pickup</button>
        </aside>
        <aside className="schedule-pickup-section--overlay"></aside>
      </section>
    </div>
  );
};

export { Services };
