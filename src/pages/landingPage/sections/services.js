import React from "react";
import { Link } from "react-router-dom";

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
            <em>Redefining Ease</em> with our <em>simple 4-step process</em>
          </h1>
          <p>
            We know the importance of time, that is why our pickup and delivery
            processes have been simplified to save time. We take care of the
            hard part so that you can channel your time into being more
            productive.
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
            <a
              href="https://wa.me/message/TOKS546P3O5PI1"
              target="_blank"
              rel="noreferrer"
              className="secondary-link  mt-4 mx-auto"
            >
              Talk to our agent <i className="fas fa-caret-right ml-2"></i>
            </a>
            <Link to="/pricing/#pricing-table" className="primary-link mt-2">
              Go to Pricing Table <i className="fas fa-caret-right ml-2"></i>
            </Link>
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
              We'll meet you with two laundry bags; one for dry cleaning or
              ironed laundry and another for our wash, tumble dry and fold
              service.
            </p>
          </div>
          <div className="service-item">
            <img src={WashAndFold} alt="" />
            <h4>Professional Cleaning</h4>
            <p>
              We'll clean your items at our nearest cleaning partner facility,
              then return them to you in as little as 48 hours. Our 24 hours
              Express delivery is 100% of basic price.
            </p>
            <Link to="/pricing/#delivery" className="secondary-link mt-2">
              See Delivery Details <i className="fas fa-caret-right ml-2"></i>
            </Link>
          </div>
        </section>
      </aside>
    </section>
  );
};

export default Services;
