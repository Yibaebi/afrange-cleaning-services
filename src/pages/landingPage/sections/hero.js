import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  return (
    <section className="aae-landing-hero--container container-styles">
      <section className="aae-landing-hero--wrapper">
        <aside className="aae-landing-hero--content flex flex-col">
          <p className="content-intro">SAVE VALUABLE TIME EVERY WEEK</p>
          <h1>Say Goodbye to Laundry Day.</h1>
          <p className="content-close mb-8 w-4/5 font-bold text-lg">
            Afrange picks up, cleans, and delivers your laundry and dry
            cleaning. We also help individuals and businesses manage their homes
            and offices.
          </p>
          <div className="aae-landing-hero--links">
            <a
              href="https://wa.me/message/TOKS546P3O5PI1"
              target="_blank"
              rel="noreferrer"
              className="primary-link mr-6"
            >
              Book a Service <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <Link to="/contact-us" className="secondary-link p-3">
              <i className="fas fa-mail-bulk mr-2"></i> Contact Us
            </Link>
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
