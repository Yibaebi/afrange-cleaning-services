import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DryCleaning } from "./serviceSections/dryCleaning";
import { OtherServices } from "./serviceSections/otherServices";
import { WashAndIron } from "./serviceSections/washAndIron";

import "./services.css";

const Services = () => {
  const [currentView, setCurrentView] = useState("#wash-and-iron");

  useEffect(() => {
    const view = window.location.hash;

    window.addEventListener("hashchange", setCurrentView(view), false);
    return () => window.removeEventListener("hashchange", () => {});
  });
  return (
    <div className="aae-services container-styles">
      <nav className="aae-services--nav">
        <ul className={`aae-services-nav-bar--links-wrapper`}>
          <NavLink
            className="aae-nav-link desktop-view"
            to="#wash-and-iron"
            isActive={() => {
              if (currentView === "#wash-and-iron" || currentView === "") {
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
              if (currentView === "#wash-and-iron" || currentView === "") {
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
              if (currentView === "#dry-clean") {
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
              if (
                currentView === "#other-services" ||
                currentView === "#hang-dry" ||
                currentView === "#cloth-repairs" ||
                currentView === "#home-cleaning" ||
                currentView === "#industrial-cleaning" ||
                currentView === "#office-cleaning" ||
                currentView === "#staff-training"
              ) {
                return true;
              }
            }}
          >
            Other Services
          </NavLink>
        </ul>
      </nav>
      {currentView === "#wash-and-iron" || currentView === "" ? (
        <WashAndIron />
      ) : currentView === "#dry-clean" ? (
        <DryCleaning />
      ) : (
        <OtherServices />
      )}

      <section className="aae-services--schedule-pickup-section">
        <aside className="schedule-pickup-section--content">
          <h1>
            Save 3+ hours a week when you leave your laundry to the experts
          </h1>
          <a
            href="https://wa.me/message/TOKS546P3O5PI1"
            target="_blank"
            rel="noreferrer"
            className="primary-link"
          >
            Schedule Pickup
          </a>
        </aside>
        <aside className="schedule-pickup-section--overlay"></aside>
      </section>
    </div>
  );
};

export { Services };
