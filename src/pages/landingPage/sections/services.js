import React from "react";

import WashAndIron from "../../../assets/landing-page/dry-clean and Ironed laundry.svg";
import TwentyFourSeven from "../../../assets/landing-page/24-7 service.svg";
import BookService from "../../../assets/landing-page/book-service.svg";
import ClothRepairs from "../../../assets/landing-page/cloth repairs.svg";
import DeliveryBus from "../../../assets/landing-page/delivery-bus.svg";
import Hanger from "../../../assets/landing-page/hanger.svg";
import HomeClean from "../../../assets/landing-page/home-clean.svg";
import IndustrialCleaning from "../../../assets/landing-page/industrial-cleaning.svg";
import IroningOnly from "../../../assets/landing-page/ironing-only.svg";
import LaundryWashingMachine from "../../../assets/landing-page/laundry-washing-machine.svg";
import OfficeCleaning from "../../../assets/landing-page/office cleaning.svg";
import Towel from "../../../assets/landing-page/towel.svg";
import WashMachine from "../../../assets/landing-page/washing machine.svg";

import "./services.css";

const Services = () => {
  return (
    <section className="aae-landing-services-container container-styles">
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <aside className="landing-services--content">
        <div className="landing-services--content-header">
          <h1>
            <span>We believe in the luxury that comes with variety... </span>
            Our <em>Services</em>
          </h1>
        </div>

        <section className="services-container">
          <div className="service-item">
            <img src={TwentyFourSeven} alt="" />
            <h4>Laundry Only</h4>
            <p>Washed, Tumbled, Dried, and Folded</p>
            <div className="blob-wrapper">
              <div className="blob"></div>
            </div>
          </div>
          <div className="service-item">
            <img src={BookService} alt="" />
            <h4>Laundry Only</h4>
            <p>Washed, Tumbled, Dried, and Folded</p>
          </div>
          <div className="service-item">
            <img src={DeliveryBus} alt="" />
            <h4>Laundry Only</h4>
            <p>Washed, Tumbled, Dried, and Folded</p>
          </div>
          <div className="service-item">
            <img src={TwentyFourSeven} alt="" />
            <h4>Laundry Only</h4>
            <p>Washed, Tumbled, Dried, and Folded</p>
          </div>
          <div className="service-item">
            <img src={BookService} alt="" />
            <h4>Laundry Only</h4>
            <p>Washed, Tumbled, Dried, and Folded</p>
          </div>
          <div className="service-item">
            <img src={DeliveryBus} alt="" />
            <h4>Laundry Only</h4>
            <p>Washed, Tumbled, Dried, and Folded</p>
          </div>
          <div className="service-item">
            <img src={TwentyFourSeven} alt="" />
            <h4>Laundry Only</h4>
            <p>Washed, Tumbled, Dried, and Folded</p>
          </div>
          <div className="service-item">
            <img src={BookService} alt="" />
            <h4>Laundry Only</h4>
            <p>Washed, Tumbled, Dried, and Folded</p>
          </div>
          <div className="service-item">
            <img src={DeliveryBus} alt="" />
            <h4>Laundry Only</h4>
            <p>Washed, Tumbled, Dried, and Folded</p>
          </div>
        </section>

        {/* <div className="service-item">
          <img src={IroningOnly} alt="" />
          <h4>Laundry Only</h4>
          <p>Washed, Tumbled, Dried, and Folded</p>
        </div>

        <div className="service-item">
          <img src={Hanger} alt="" />
          <h4>Laundry Only</h4>
          <p>Washed, Tumbled, Dried, and Folded</p>
        </div>
        <div className="service-item">
          <img src={ClothRepairs} alt="" />
          <h4>Laundry Only</h4>
          <p>Washed, Tumbled, Dried, and Folded</p>
        </div>
        <div className="service-item">
          <img src={HomeClean} alt="" />
          <h4>Laundry Only</h4>
          <p>Washed, Tumbled, Dried, and Folded</p>
        </div>
        <div className="service-item">
          <img src={IndustrialCleaning} alt="" />
          <h4>Laundry Only</h4>
          <p>Washed, Tumbled, Dried, and Folded</p>
        </div>
        <div className="service-item">
          <img src={LaundryWashingMachine} alt="" />
          <h4>Laundry Only</h4>
          <p>Washed, Tumbled, Dried, and Folded</p>
        </div>
        <div className="service-item">
          <img src={OfficeCleaning} alt="" />
          <h4>Laundry Only</h4>
          <p>Washed, Tumbled, Dried, and Folded</p>
        </div>
        <div className="service-item">
          <img src={Towel} alt="" />
          <h4>Laundry Only</h4>
          <p>Washed, Tumbled, Dried, and Folded</p>
        </div>
        <div className="service-item">
          <img src={WashMachine} alt="" />
          <h4>Laundry Only</h4>
          <p>Washed, Tumbled, Dried, and Folded</p>
        </div>
        <div className="service-item">
          <img src={WashAndIron} alt="" />
          <h4>Laundry Only</h4>
          <p>Washed, Tumbled, Dried, and Folded</p>
        </div> */}
      </aside>
    </section>
  );
};

export default Services;
