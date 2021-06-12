import React from "react";
import OurStory from "../../assets/about-us/our story.jpg";
import AboutUsImg from "../../assets/about-us/laundry-hero-image-about-us.jpg";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="aae-about-us--container">
      <header className="aae-about-us--header">
        <div className="background-overlay"></div>
        <div className="mission-container">
          <h1>Laundry, Dry Cleaning & Home Cleaning</h1>
          <p>
            From home cleaning to dry cleaning and laundry we’re here to help,
            every step of the way.
          </p>
          <div className="aae-about-us-hero--buttons">
            <button className="primary-button mr-6">
              Book a Service <i className="fas fa-arrow-right ml-2"></i>
            </button>
            <button className="secondary-button p-3">
              <i className="fas fa-mail-bulk mr-2"></i> Send us feedback
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="aae-about-us--values">
          <aside className="landing-services--content-header homes-buildings">
            <i className="fas fa-braille fa-3x"></i>
            <i className="fas fa-bolt fa-3x"></i>
            <h1>
              Powering <em>homes and buildings </em>
            </h1>
            <p>
              We built our service to help both individuals and families as well
              as real estate partners managing the buildings in our community..
            </p>
          </aside>
          <aside className="aae-about-us--homes-buildings-container">
            <div className="homes-buildings-container">
              <div className="background-overlay homes-buildings"></div>
              <div className="content-container">
                <h5 className="homes-buildings-header">For Individuals</h5>
                <p className="homes-buildings-content">
                  Live in an area serviced Afrange? Receive concierge laundry,
                  dry-cleaning, and home cleaning services at the tap of a
                  button.
                </p>
                <button className="primary-button">
                  Find out more<i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
            <div className="homes-buildings-container">
              <div className="background-overlay homes-buildings"></div>
              <div className="content-container">
                <h5 className="homes-buildings-header">For Buildings</h5>
                <p className="homes-buildings-content">
                  We work with some of the biggest names in real estate to help
                  bring modern amenities their residents expect
                </p>
                <button className="secondary-button p-3">
                  Find out more <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </aside>
        </section>

        <section className="aae-about-us--our-story">
          <aside className="our-story--image-container">
            <div className="about-us-background-overlay"></div>
            <img src={AboutUsImg} alt="our story" />
          </aside>
          <aside className="landing-services--content-header our-story">
            <h1>
              <em>Our Story</em>
            </h1>
            <p>
              We are a cleaning and hospitality management company with huge
              experience in providing tailor-made consumer laundry and dry
              cleaning, home/office cleaning, move in/out cleaning, industrial
              cleaning and training services to diverse clients. Our goal is to
              deliver world class cleaning and management services to
              individuals and organizations.
            </p>
            <p>
              Afrange provides cleaning services to individuals, homes, offices
              and factories/industries. We are committed to excellence and our
              experience in providing cleaning services that stand out has
              helped us build a high standard profile. First, we understand the
              dynamics of maintaining hygienic and healthy lifestyle. That's why
              we are not afraid to think outside the box in providing cleaning
              solutions tailored to our clients.
            </p>
            <div className="aae-about-us-hero--buttons">
              <button className="primary-button">
                Find out more about our services
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </aside>
        </section>
        <section className="aae-about-us--values">
          <aside className="landing-services--content-header known-for">
            <i class="fas fa-broom fa-2x"></i>
            <i class="fas fa-soap fa-2x"></i>
            <i class="fas fa-laugh-beam fa-2x"></i>
            <i class="fas fa-clock fa-2x"></i>
            <h1>
              What <em>We're Known</em> for
            </h1>
            <p>
              We built our service to help both individuals and families as well
              as real estate partners managing the buildings in our community..
            </p>
          </aside>
          <aside className="aae-about-us--values-container">
            <div>
              <div className="about-us--values-container clean-wash">
                <h5 className="values-header">
                  <i class="fas fa-soap fa-2x"></i>Clean Wash
                </h5>
                <p className="values-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate harum doloribus quasi dignissimos et. Libero
                  inventore nam non blanditiis cumque sunt.
                </p>
              </div>
              <div className="about-us--values-container known-delivery">
                <h5 className="values-header">
                  <i class="fas fa-broom fa-2x"></i>
                  Swift Delivery
                </h5>
                <p className="values-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate harum doloribus quasi dignissimos et. Libero
                  inventore nam non blanditiis cumque sunt.
                </p>
              </div>
            </div>
            <div>
              <div className="about-us--values-container satisfaction">
                <h5 className="values-header">
                  <i class="fas fa-laugh-beam fa-2x"></i>Satisfaction
                </h5>
                <p className="values-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate harum doloribus quasi dignissimos et. Libero
                  inventore nam non blanditiis cumque sunt.
                </p>
              </div>
              <div className="about-us--values-container service">
                <h5 className="values-header">
                  <i class="fas fa-clock fa-2x"></i>
                  24/7 Service
                </h5>
                <p className="values-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate harum doloribus quasi dignissimos et. Libero
                  inventore nam non blanditiis cumque sunt.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <section className="aae-services--schedule-pickup-section">
        <aside className="schedule-pickup-section--content">
          <h1>
            Save 3+ hours a week when you leave your laundry to the experts
          </h1>
          <button className="primary-button">Schedule Pickup</button>
        </aside>
      </section>
    </div>
  );
};

export { AboutUs };
