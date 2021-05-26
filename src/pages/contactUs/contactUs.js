import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import "./contactUs.css";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xeqvgojb");

  const errorMessage = state?.errors[0]?.message;
  return (
    <>
      <div className="aae-contact-us container-styles">
        <i className="fas fa-id-card-alt fa-2x"></i>
        <i className="fas fa-id-card fa-2x"></i>
        <i className="fas fa-location-arrow fa-2x"></i>
        <i className="fas fa-compass fa-2x"></i>
        <i className="fas fa-address-book fa-2x"></i>
        <i className="fas fa-map-marker-alt fa-2x"></i>

        <section className="contact-us__intro">
          <h1>Contact Us</h1>
          <p>
            Let's start something great together. Get in touch with us today.
          </p>
          <i className="fas fa-chevron-down fa-2x"></i>
        </section>
        <section className="contact-us__form--container">
          <aside className="contact-us__form--intro">
            <div className="background">
              <div className="container">
                <div className="screen">
                  <div className="screen-header">
                    <div className="screen-header-left">
                      <div className="screen-header-button close"></div>
                      <div className="screen-header-button maximize"></div>
                      <div className="screen-header-button minimize"></div>
                    </div>
                    <div className="screen-header-right">
                      <div className="screen-header-ellipsis"></div>
                      <div className="screen-header-ellipsis"></div>
                      <div className="screen-header-ellipsis"></div>
                    </div>
                  </div>
                  <div className="screen-body">
                    <div className="screen-body-item left">
                      <div className="app-title">
                        <span>CONTACT DETAILS</span>
                      </div>
                      <aside className="intro-sections--container">
                        <div className="intro__section">
                          <h5>Phone</h5>
                          <p>08107837035</p>
                        </div>
                        <div className="intro__section">
                          <h5>Email</h5>
                          <p>afrange@info.com</p>
                        </div>
                        <div className="intro__section">
                          <h5>Address</h5>
                          <p>5-7 Mandeville Pl, Marylebone, London W1U 3AY</p>
                        </div>
                        <div className="copy-social--container">
                          <ul className="social-icons">
                            <li>
                              <a className="instagram" href="#a">
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a className="twitter" href="#b">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>

                            <li>
                              <a className="facebook" href="#d">
                                <i className="fab fa-facebook-f "></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </aside>
                    </div>
                    <div className="screen-body-item">
                      <form className="app-form" onSubmit={handleSubmit}>
                        <div className="app-form-group">
                          <input
                            className="app-form-control"
                            placeholder="Name"
                            id="name"
                            type="name"
                            name="name"
                          />
                          <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                          />
                        </div>
                        <div className="app-form-group">
                          <input
                            id="email"
                            type="email"
                            name="email"
                            className="app-form-control"
                            placeholder="Email"
                          />
                          <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                          />
                        </div>
                        <div className="app-form-group">
                          <ValidationError
                            prefix="Phone Number"
                            field="tel"
                            errors={state.errors}
                          />
                          <input
                            id="tel"
                            type="tel"
                            name="tel"
                            className="app-form-control"
                            placeholder="Contact no."
                          />
                        </div>
                        <div className="app-form-group message">
                          <textarea
                            className="app-form-control"
                            placeholder="Message"
                            id="message"
                            name="message"
                          />
                          <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                          />
                        </div>

                        <div className="app-form-group buttons">
                          <button
                            type="submit"
                            disabled={state.submitting}
                            className="secondary-button"
                          >
                            Send us a message
                          </button>
                          {
                            <p
                              className="feedback-success"
                              style={{
                                visibility:
                                  (state.succeeded || errorMessage) &&
                                  "visible",
                                color: errorMessage && "#af2939",
                                backgroundColor: errorMessage && "#fff",
                                padding: errorMessage && "6px",
                                borderRadius: errorMessage && "10px",
                              }}
                            >
                              {errorMessage
                                ? "Error. Can't send an incomplete/empty form."
                                : "We've successfully received your message. We'll get back to you soon."}
                            </p>
                          }
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
      <div className="google-map-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.859410723795!2d7.5000275!3d6.460398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a39738c9bf8d%3A0x169284b972b942e8!2sEkulu%20East%20Estate!5e0!3m2!1sen!2sng!4v1619970209493!5m2!1sen!2sng"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          title="afrange locale"
          className="mr-8"
        ></iframe>
      </div>
    </>
  );
};

export { ContactUs };
