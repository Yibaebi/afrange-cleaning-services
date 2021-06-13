import ClothFold from "../../../assets/landing-page/about-us-fold.jpg";
import Cloth from "../../../assets/landing-page/about-us-image-1.jpg";
import ClothIroning from "../../../assets/landing-page/about-us-image-ironing.jpg";
import IndustryCleaning from "../../../assets/landing-page/about-us-industry-cleaning.jpg";
import OfficeCleaning from "../../../assets/landing-page/about-us-office-cleaning.jpg";
import ClothRepairs from "../../../assets/landing-page/about-us-image-cloth repairs.jpg";
import ClothDelivery from "../../../assets/landing-page/about-us-image-delivery.jpg";

import "./aboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="aae-landing-about-us--container container-styles">
      <section className="aae-landing-about-us--wrapper">
        <aside className="aae-landing-about-us--content">
          <aside className="landing-services--content-header">
            <h1>
              Defining the Future of <em>Cleaning Servies</em>
            </h1>
            <p>
              Afrange offers a full spectrum of cutting-edge digital learning,
              giving professionals and organizations of all sizes the skills
              they need to thrive in the digital economy.
            </p>
            <div className="key-info__container">
              <aside className="key-info__item">
                <i className="fas fa-heart mr-5"></i>
                <div className="key-info__item--stats">
                  <h6>100%</h6>
                  <p>Trusted</p>
                </div>
              </aside>
              <aside className="key-info__item">
                <i className="far fa-smile mr-5"></i>
                <div className="key-info__item--stats">
                  <h6>2,000+</h6>
                  <p>Happy Clients</p>
                </div>
              </aside>
              <aside className="key-info__item">
                <i className="fas fa-chart-line mr-5"></i>
                <div className="key-info__item--stats">
                  <h6>99.9%</h6>
                  <p>Customer Retention</p>
                </div>
              </aside>
              <aside className="key-info__item">
                <i className="fas fa-truck mr-5"></i>
                <div className="key-info__item--stats">
                  <h6>856+</h6>
                  <p>Successful Deliveries</p>
                </div>
              </aside>
            </div>
          </aside>
          <h3 className="gallery--header">What We Do</h3>
        </aside>
        <div class="container">
          <div class="gallery">
            <figure class="gallery__item gallery__item--3">
              <aside className="gallery__item--desc">
                <Link to="/services">
                  Dry Cleaning <i className="fas fa-caret-right ml-3"></i>
                </Link>
              </aside>
              <img src={Cloth} alt="Gallery item 3" className="gallery__img" />
            </figure>
            <figure class="gallery__item gallery__item--4">
              <aside className="gallery__item--desc">
                <Link to="">
                  Ironing <i className="fas fa-caret-right ml-3"></i>
                </Link>
              </aside>
              <img
                src={ClothIroning}
                alt="Gallery item 4"
                className="gallery__img"
              />
            </figure>

            <figure class="gallery__item gallery__item--1">
              <aside className="gallery__item--desc">
                <Link to="">
                  Industrial Cleaning
                  <i className="fas fa-caret-right ml-3"></i>
                </Link>
              </aside>
              <img
                src={IndustryCleaning}
                alt="Galler item 1"
                className="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--2">
              <aside className="gallery__item--desc">
                <Link to="">
                  Cloth Repairs <i className="fas fa-caret-right ml-3"></i>
                </Link>
              </aside>
              <img
                src={ClothRepairs}
                alt="Gallery item 5"
                className="gallery__img"
              />
            </figure>

            <figure class="gallery__item gallery__item--7">
              <aside className="gallery__item--desc">
                <Link to="">
                  Office Cleaning <i className="fas fa-caret-right ml-3"></i>
                </Link>
              </aside>
              <img
                src={OfficeCleaning}
                alt="Gallery item 2"
                className="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--5">
              <aside className="gallery__item--desc">
                <Link to="">
                  Delivery <i className="fas fa-caret-right ml-3"></i>
                </Link>
              </aside>
              <img
                src={ClothDelivery}
                alt="Gallery item 5"
                className="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--6">
              <aside className="gallery__item--desc">
                <Link to="">
                  Wash and Fold <i className="fas fa-caret-right ml-3"></i>
                </Link>
              </aside>
              <img
                src={ClothFold}
                alt="Gallery item 6"
                className="gallery__img"
              />
            </figure>
          </div>
        </div>
        <button className="primary-button my-7">
          See more information <i className="fas fa-caret-right ml-3"></i>
        </button>
      </section>
    </section>
  );
};

export default AboutUs;
