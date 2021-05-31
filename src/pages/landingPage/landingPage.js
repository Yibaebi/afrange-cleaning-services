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
    </main>
  );
};

export { LandingPage };
