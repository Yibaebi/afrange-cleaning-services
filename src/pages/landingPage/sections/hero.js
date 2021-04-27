import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="aae-landing-hero--container container-styles">
      <section className="aae-landing-hero--wrapper">
        <aside className="aae-landing-hero--content flex flex-col">
          <p className="content-intro">SAVE 3 HOURS PER WEEK</p>
          <h1>Say Goodbye to Laundry Day.</h1>
          <p className="content-close mb-8 w-4/5 font-bold text-lg">
            Rinse picks up, cleans, and delivers your laundry and dry cleaning.
          </p>
          <div className="aae-landing-hero--buttons">
            <button className="primary-button mr-6">
              Book a Service <i className="fas fa-arrow-right ml-2"></i>
            </button>
            <button className="secondary-button p-3">
              <i className="fas fa-mail-bulk mr-2"></i> Contact Us
            </button>
          </div>
        </aside>
        <aside className="aae-landing-hero--image">
          <img
            src="https://laundry.drop.id/wp-content/uploads/2020/10/Hero-Picture-1536x1277.png"
            alt=""
          />
        </aside>
      </section>
    </section>
  );
};

export default Hero;
