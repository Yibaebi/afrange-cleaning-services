import React from "react";
import { Link } from "react-router-dom";
import { primaryLogo } from "../../assets";
import "./footer.css";

const Footer = () => {
  return (
    <footer class="aae-footer container-styles">
      <div class="aae-footer--info-container">
        <div class="aae-footer--mission-statement">
          {primaryLogo("white")}
          <p>
            We are a cleaning and hospitality management company with huge
            experience in providing tailor-made consumer laundry and dry
            cleaning, home/office cleaning, move in/out cleaning, industrial
            cleaning and training services to diverse clients.
          </p>
        </div>

        <div>
          <div class="aae-footer--services">
            <h6>Services</h6>
            <ul class="footer-links">
              <li>
                <Link to="/services#dry-cleaning">Dry Clean</Link>
              </li>

              <li>
                <Link to="/services#wash-and-iron">Ironing Services</Link>
              </li>
              <li>
                <Link to="/services#wash-and-iron">Wash and Fold</Link>
              </li>

              <li>
                <Link to="/contact-us#message">Customer Care</Link>
              </li>
            </ul>
          </div>

          <div class="aae-footer--customer-care">
            <h6>Customer Care</h6>
            <ul class="footer-links">
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact-us#message">Contact Us</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>

              <li>
                <a href="/src/assets/OVERVIEW_AFRANGE.docx" download>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="aae-footer--contact-details">
            <h6>Contact details</h6>
            <p>No. 4 North Fifth Avenue, Trans Ekulu, Enugu State.</p>
            <p>info@afrange.com</p>
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
