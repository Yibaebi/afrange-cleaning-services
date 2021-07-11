import React from "react";
import { Link } from "react-router-dom";

import dryCleaning from "../../../assets/services/dry-cleaning.jpg";
import { deliveryBus } from "../../../assets";

const DryCleaning = () => {
  return (
    <>
      <main className="aae-wash-fold-service--main">
        <section className="aae-wash-fold-service">
          <aside className="wash-fold-service--intro">
            <h2>Dry Cleaning</h2>
            <p>
              This is the perfect service for items you want professionally
              cleaned and returned pressed and on a hanger (this service
              includes both Dry Cleaning and Launder & Press).{" "}
            </p>
            <p>
              Enjoy premium cleaning from the comfort of your home and never go
              to the dry cleaners again.
            </p>
            <Link to="/pricing/#dry-clean" className="primary-link">
              See Pricing Info <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </aside>
          <aside className="wash-fold-service--intro--image">
            <img src={dryCleaning} alt="" />
          </aside>
        </section>
        <section className="aae-how-it-works">
          <h2>How it works</h2>
          <div className="how-it-works--steps">
            <aside className="how-it-works part-4">
              <span>
                <i className="fas fa-book-open"></i>
              </span>
              <h5>Schedule pickup</h5>
              Pick a day and time for collection and delivery. Each time slot is
              only 1-hour long, so there's no waiting around!
            </aside>

            <aside className="how-it-works part-1">
              <span>
                <i className="fas fa-search"></i>
              </span>
              <h5>Stain inspection</h5>
              Our “spotters” have decades of experience in identifying and
              treating stains with their acquired knowledge of organic chemistry
              so your garments are returned pristine.
            </aside>
            <aside className="how-it-works part-2">
              <span>
                <i className="fas fa-hand-sparkles"></i>
              </span>
              <h5>Expert care </h5>
              We follow the care label (and know what all the symbols mean!) so
              your clothes receive the optimal cleaning treatment and last for
              years to come.
            </aside>
            <aside className="how-it-works part-3">
              <span>
                <i className="fas fa-tshirt"></i>
              </span>
              <h5>Pressed and hung </h5>
              Your clothes are crisply pressed, put on hangers, and placed in
              your protective garment bag, ready to wear upon delivery.
            </aside>
          </div>
        </section>
        <section className="aae-services-delivery">
          <h2>Delivery</h2>
          <p>
            We pick up and deliver 7 days a week, always between 8pm and 10pm.
            We also provide laundry bag for clients on bulk washing.
          </p>
          <p className="pickup-delivery-info">
            Pickup & delivery time: from 7:30am – 1:00pm, Monday – Saturday.
          </p>
          <aside className="aae-deliver--container">
            <div>
              <div className="delivery">
                <div className="delivery-preview">
                  <h2>Affordable Delivery</h2>
                  <div className="delivery-info">
                    <p>
                      Our 24 hours Express delivery is 100% of basic price. Our
                      pricing is flexible and solely depends on your location
                      relative to our operational outlets.
                    </p>
                    <Link to="/pricing" className="primary-link">
                      Find Delivery Price
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export { DryCleaning };
