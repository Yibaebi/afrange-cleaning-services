import React from "react";
import { primaryLogo } from "../../assets";
import "./footer.css";

const Footer = () => {
  return (
    <footer class="aae-footer container-styles">
      <div class="aae-footer--info-container">
        <div class="aae-footer--mission-statement">
          {primaryLogo("white")}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt culpa
            sed non repellendus quas esse amet fugiat odio illum aperiam nisi,
            dolores rem quos obcaecati, voluptatem quasi aliquam ipsa nobis!
            Fuga, quaerat commodi.
          </p>
        </div>

        <div>
          <div class="aae-footer--services">
            <h6>Services</h6>
            <ul class="footer-links">
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  Winter Coat
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  Dry Clean
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Ironing Services
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">
                  Wash and Fold
                </a>
              </li>

              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Customer Care
                </a>
              </li>
            </ul>
          </div>

          <div class="aae-footer--customer-care">
            <h6>Customer Care</h6>
            <ul class="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Pricing
                </a>
              </li>

              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="aae-footer--contact-details">
            <h6>Contact details</h6>
            <p>5-7 Mandeville Pl, Marylebone, London W1U 3AY</p>
            <p>info@laundrapp.com</p>
            <p>Mon - Sun: 7:00 am - 11:00 pm</p>
          </div>
        </div>
      </div>
      <div class="copy-social--container">
        <p class="copyright-text">
          Copyright &copy; 2021 All Rights Reserved by <a href="#a">Afrange</a>.
        </p>{" "}
        <ul className="social-icons">
          <li>
            <a class="instagram" href="#a">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </li>
          <li>
            <a class="twitter" href="#b">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
          </li>

          <li>
            <a class="facebook" href="#d">
              <i class="fab fa-facebook-f fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
