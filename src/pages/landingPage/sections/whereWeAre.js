import React from "react";
import "./whereWeAre.css";

const WhereWeAre = () => {
  return (
    <div className="">
      <aside className="aae-where-we-are landing-services--content-header">
        <i className="fas fa-location-arrow fa-2x"></i>
        <h1>
          <em>Where We Are</em>
        </h1>
        <p>
          Afrange offers a full spectrum of cutting-edge digital learning,
          giving professionals and organizations of all sizes the skills they
          need to thrive in the digital economy.
        </p>
      </aside>
      <div className="aae-where-we-are container-styles">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.859410723795!2d7.5000275!3d6.460398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a39738c9bf8d%3A0x169284b972b942e8!2sEkulu%20East%20Estate!5e0!3m2!1sen!2sng!4v1619970209493!5m2!1sen!2sng"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="afrange locale"
          className="mr-8"
        ></iframe>
        <aside className="aae-landing-hero--content ">
          <div className="box">
            <div className="circle">
              <div className="inner"></div>
              <div className="highlight"></div>
            </div>
            <div className="square"></div>
          </div>
          <div className="shadow"></div>
          <button className="primary-button">
            Get Directions <i className="fas fa-directions ml-2"></i>
          </button>
        </aside>
      </div>
    </div>
  );
};

export default WhereWeAre;
