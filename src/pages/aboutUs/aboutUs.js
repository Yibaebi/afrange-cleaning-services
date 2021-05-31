import React from "react";
import AboutUsImage from "../../assets/about-us/laundry-hero-image-about-us.jpg";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="aae-about-us--container">
      <header className="aae-about-us--header">
        <div className="mission-container">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            dolorem saepe iusto? Quaerat nesciunt facere, corrupti adipisci
            natus ea laboriosam beatae dolorum molestiae amet accusantium quos
            possimus dicta animi. Quibusdam!
          </p>
        </div>
        <div className="about-us-image-container">
          <img src={AboutUsImage} alt="" />
        </div>
      </header>

      <main>
        <section className="aae-about-us--values">
          <div className="landing-services--content-header">
            <h1>
              Our <em>Values</em>
              <span>We believe in the luxury that comes with variety... </span>
            </h1>
          </div>
          <aside className="aae-about-us--values-container">
            <div>
              <div className="about-us--values-container">
                <h5 className="values-header">
                  <i class="fas fa-soap fa-2x"></i>Clean Wash
                </h5>
                <p className="values-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate harum doloribus quasi dignissimos et. Libero
                  inventore nam non blanditiis cumque sunt. Sunt, dolorum
                  voluptates! Dolorem eius minus praesentium porro
                  incidunt.Sunt, dolorum voluptates! Dolorem eius minus
                  praesentium porro incidunt.Sunt, dolorum voluptates! Dolorem
                  eius minus praesentium porro incidunt.
                </p>
              </div>
              <div className="about-us--values-container">
                <h5 className="values-header">
                  <i class="fas fa-broom fa-2x"></i>
                  Swift Delivery
                </h5>
                <p className="values-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate harum doloribus quasi dignissimos et. Libero
                  inventore nam non blanditiis cumque sunt. Sunt, dolorum
                  voluptates! Dolorem eius minus praesentium porro incidunt.
                </p>
              </div>
            </div>
            <div>
              <div className="about-us--values-container">
                <h5 className="values-header">
                  <i class="fas fa-soap fa-2x"></i>Satisfaction
                </h5>
                <p className="values-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate harum doloribus quasi dignissimos et. Libero
                  inventore nam non blanditiis cumque sunt.
                </p>
              </div>
              <div className="about-us--values-container">
                <h5 className="values-header">
                  <i class="fas fa-soap fa-2x"></i>
                  24/7 Service
                </h5>
                <p className="values-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate harum doloribus quasi dignissimos et. Libero
                  inventore nam non blanditiis cumque sunt. Sunt, dolorum
                  voluptates! Dolorem eius minus praesentium porro incidunt.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export { AboutUs };
