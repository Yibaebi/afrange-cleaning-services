import React from "react";

import PickADate from "../../../assets/landing-page/pick-a-date.jpg";
import PickUp from "../../../assets/landing-page/pickup.jpg";
import PlaceOrder from "../../../assets/landing-page/place-order.jpg";
import WashAndFold from "../../../assets/landing-page/wash and fold.jpg";

import "./services.css";

const Services = () => {
  return (
    <section className="aae-landing-services-container container-styles">
      <aside className="landing-services--content">
        <aside className="landing-services--content-header">
          <h1>
            <em>Redefining Ease</em> with our simple process
          </h1>
          <p>
            BrainStation offers a full spectrum of cutting-edge digital
            learning, giving professionals and organizations of all sizes the
            skills they need to thrive in the digital economy.
          </p>
        </aside>

        <section className="services-container">
          <div className="service-item">
            <img src={PlaceOrder} alt="" />
            <h4>Place a Service Request</h4>
            <p>
              Choose items from our price list or skip ahead and talk to one of
              our agents.
            </p>

            <button className="primary-button mt-2">
              Go to Pricing Table <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
          <div className="service-item">
            <img src={PickADate} alt="" />
            <h4>Choose Date</h4>
            <p>
              Pick a day and time for collection and delivery. Each time slot is
              only 1-hour long, so there's no waiting around!
            </p>
          </div>
          <div className="service-item">
            <img src={PickUp} alt="" />
            <h4>Meet with Our Agent</h4>
            <p>
              We'll meet you with two laundry bags; a black one for dry cleaning
              or ironed laundry and a blue one for our wash, tumble dry and fold
              service.
            </p>
          </div>
          <div className="service-item">
            <img src={WashAndFold} alt="" />
            <h4>Professional Cleaning</h4>
            <p>
              We'll clean your items at our nearest cleaning partner facility,
              then return them to you in as little as 48 hours.
            </p>
            <button className="secondary-button mt-2">
              See Delivery Details <i className="fas fa-caret-right ml-2"></i>
            </button>
          </div>
        </section>
      </aside>
    </section>
  );
};

export default Services;
