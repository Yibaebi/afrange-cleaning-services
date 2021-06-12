import React from "react";
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
            <button className="primary-button">
              See Pricing Info <i className="fas fa-arrow-right ml-2"></i>
            </button>
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
                <i class="fas fa-book-open"></i>
              </span>
              <h5>Schedule pickup</h5>
              Pick a day and time for collection and delivery. Each time slot is
              only 1-hour long, so there's no waiting around!
            </aside>

            <aside className="how-it-works part-1">
              <span>
                <i class="fas fa-search"></i>
              </span>
              <h5>Stain inspection</h5>
              Our “spotters” have decades of experience in identifying and
              treating stains with their acquired knowledge of organic chemistry
              so your garments are returned pristine.
            </aside>
            <aside className="how-it-works part-2">
              <span>
                <i class="fas fa-hand-sparkles"></i>
              </span>
              <h5>Expert care </h5>
              We follow the care label (and know what all the symbols mean!) so
              your clothes receive the optimal cleaning treatment and last for
              years to come.
            </aside>
            <aside className="how-it-works part-3">
              <span>
                <i class="fas fa-tshirt"></i>
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
            Free contactless delivery available with Rinse Drop.
          </p>
          <aside className="aae-deliver--container">
            <div>
              <div class="delivery">
                <div class="delivery-preview">
                  <h2>Affordable Delivery</h2>
                  <div className="delivery-info">
                    <p>
                      Get unlimited free pickups and deliveries with Rinse Go.
                      Waive the $7.95 Service Fee on all your Rinse orders for
                      just $7.95/mo or $79/yr
                    </p>
                    <button className="primary-button">
                      Find Delivery Price
                    </button>
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
