import React from "react";
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
            <img
              src="https://hellolaundry.co.uk/storage/app/uploads/blogs/18/NxDk733CcgBGx9NbRDWiJyEKWSfMDkqR5J1VXVvN.jpeg"
              alt=""
            />
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
              <div class="delivery-container">
                <div class="delivery">
                  <div class="delivery-preview free">
                    <h2>Free - $0</h2>
                    <div className="delivery-bus-icon">
                      {deliveryBus("#fff")}
                    </div>
                  </div>

                  <div class="delivery-info free">
                    The $7.95 Service Fee covers pickup and delivery with
                    Standard 3–4 day turnaround.
                  </div>
                </div>
                <div class="delivery">
                  <div class="delivery-preview">
                    <h2>Standard - $7.95</h2>
                    <div className="delivery-bus-icon">
                      {deliveryBus("#fff")}
                    </div>
                  </div>

                  <div class="delivery-info">
                    The $7.95 Service Fee covers pickup and delivery with
                    Standard 3–4 day turnaround.
                  </div>
                </div>
              </div>
            </div>
            <div className="aae-deliver---image-container">
              <img
                src="https://images.pexels.com/photos/4391478/pexels-photo-4391478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export { DryCleaning };
