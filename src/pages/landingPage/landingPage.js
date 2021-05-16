import Hero from "./sections/hero";
import Services from "./sections/services";
import AboutUs from "./sections/aboutUs";

import "./landingPage.css";
import Pricing from "./sections/pricing";
import WhereWeAre from "./sections/whereWeAre";

const LandingPage = () => {
  return (
    <main id="aae-landing-page" className="aae-landing-page--container">
      <Hero />

      <AboutUs />
      <Services />
      <Pricing />
      <WhereWeAre />

      <a
        href="https://api.whatsapp.com/send?phone=08107837035&text=Hi%20There%21%20Welcome%20to%20Afrange!"
        class="float"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-whatsapp my-float mr-3"></i> Contact Us
      </a>
    </main>
  );
};

export { LandingPage };
