import React from "react";
import { Link } from "react-router-dom";
import { dryCleaning, homeCleaning, nairaIcon, teach } from "../../../assets";

import "./pricing.css";

const Pricing = () => {
  return (
    <section className="aae-landing-pricing--section container-styles">
      <aside className="landing-services--content-header">
        <span className="naira-icon">{nairaIcon()}</span>
        <h1>
          We Offer <em>Very Affordable Prices</em>
        </h1>
        <p>
          Afrange offers a wide range of prices for our laundry and home
          cleaning services. Our pricing is very flexible for all individual
          class and business type. We also have a free and handy{" "}
          <strong>
            <em>
              <Link to="/pricing" className="calculator">
                calculator
              </Link>
            </em>
          </strong>{" "}
          to get you started.
        </p>
      </aside>
      <div className="landing-pricing--content-body">
        <div className="pricing pricing-palden">
          <div className="pricing-item">
            <div className="pricing-deco">
              <svg
                className="pricing-deco-img"
                enableBackground="new 0 0 300 100"
                height="100px"
                id="Layer_1"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 300 100"
                width="300px"
                x="0px"
                xmlns="http://www.w3.org/2000/svg"
                y="0px"
              >
                <path
                  className="deco-layer deco-layer--1"
                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                  fill="#FFFFFF"
                  opacity="0.6"
                ></path>
                <path
                  className="deco-layer deco-layer--2"
                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                  fill="#FFFFFF"
                  opacity="0.6"
                ></path>
                <path
                  className="deco-layer deco-layer--3"
                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                  fill="#FFFFFF"
                  opacity="0.7"
                ></path>
                <path
                  className="deco-layer deco-layer--4"
                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                  fill="#FFFFFF"
                ></path>
              </svg>
              <h3 className="pricing-title">
                Staff <br />
                Training
              </h3>
              <div className="item-image">
                {teach()}

                <aside className="pricing-offer-details p-2">
                  <p>Quality cleaning curriculum</p>
                  <p>Well paced for cleaners and organizations</p>
                </aside>
              </div>
            </div>
            <div className="pricing-price">
              <span className="pricing-currency">
                Pricing list available on request
              </span>
            </div>
          </div>
        </div>

        <div className="pricing pricing-palden focused">
          <div className="pricing-item">
            <div className="pricing-deco">
              <svg
                className="pricing-deco-img"
                enableBackground="new 0 0 300 100"
                height="100px"
                id="Layer_1"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 300 100"
                width="300px"
                x="0px"
                xmlns="http://www.w3.org/2000/svg"
                y="0px"
              >
                <path
                  className="deco-layer deco-layer--1"
                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                  fill="white"
                  opacity="0.6"
                ></path>
                <path
                  className="deco-layer deco-layer--2"
                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                  fill="white"
                  opacity="0.6"
                ></path>
                <path
                  className="deco-layer deco-layer--3"
                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                  fill="white"
                  opacity="0.7"
                ></path>
                <path
                  className="deco-layer deco-layer--4"
                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                  fill="white"
                ></path>
              </svg>
              <h3 className="pricing-title">
                Dry <br /> Cleaning
              </h3>
              <div className="item-image">
                {dryCleaning()}
                <aside className="pricing-offer-details">
                  <p>+Comfortable prices</p>
                  <p>
                    +Discounted price on bulk washing of items from 35pieces and
                    above
                  </p>
                  <p> ₦150 Minimum Cost</p>
                </aside>
              </div>
            </div>
            <div className="pricing-price">
              <span className="pricing-currency">N</span>150
              <span className="pricing-period">(minimum)</span>
            </div>
          </div>
        </div>
        <div className="pricing pricing-palden">
          <div className="pricing-item">
            <div className="pricing-deco">
              <svg
                className="pricing-deco-img"
                enableBackground="new 0 0 300 100"
                height="100px"
                id="Layer_1"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 300 100"
                width="300px"
                x="0px"
                xmlns="http://www.w3.org/2000/svg"
                y="0px"
              >
                <path
                  className="deco-layer deco-layer--1"
                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                  fill="#FFFFFF"
                  opacity="0.6"
                ></path>
                <path
                  className="deco-layer deco-layer--2"
                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                  fill="#FFFFFF"
                  opacity="0.6"
                ></path>
                <path
                  className="deco-layer deco-layer--3"
                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                  fill="#FFFFFF"
                  opacity="0.7"
                ></path>
                <path
                  className="deco-layer deco-layer--4"
                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                  fill="#FFFFFF"
                ></path>
              </svg>
              <h3 className="pricing-title">
                Home <br /> Cleaning
              </h3>
              <div className="item-image">
                {homeCleaning()}
                <aside className="pricing-offer-details p-2">
                  <p>100% cleaninless assured</p>
                  <p>Cleaning done at your own convenience</p>
                </aside>
              </div>
            </div>
            <div className="pricing-price">
              <span className="pricing-currency">
                Pricing list available on request
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link to="/pricing" className="secondary-link">
        See more pricing info
        <i className="fas fa-arrow-right ml-2"></i>
      </Link>
      <div className="svg-blob-1">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stopColor="rgba(59, 143, 86, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stopColor="rgba(59, 143, 86, 1)"
                offset="100%"
              ></stop>{" "}
            </linearGradient>{" "}
          </defs>{" "}
          <path
            fill="url(#sw-gradient)"
            d="M28.1,6.7C28.1,16.3,14,32.5,4.8,32.5C-4.5,32.5,-9,16.3,-9,6.7C-9,-2.9,-4.5,-5.7,4.8,-5.7C14,-5.7,28.1,-2.9,28.1,6.7Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            style={{ transition: "all 0.3s ease 0s" }}
            stroke="url(#sw-gradient)"
          ></path>{" "}
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
