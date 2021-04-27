import React from "react";
import "./landingPage.css";
import Hero from "./sections/hero";
import Services from "./sections/services";
import AboutUs from "./sections/aboutUs";

const LandingPage = () => {
  return (
    <main id="aae-landing-page" className="aae-landing-page--container">
      <Hero />
      <AboutUs />
      <Services />
    </main>
  );
};

export { LandingPage };
