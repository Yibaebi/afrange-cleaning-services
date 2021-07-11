import React from "react";
import { Link } from "react-router-dom";
import industryWorker from "../../../assets/services/industry worker.jpg";
import staffTraining from "../../../assets/services/training.jpg";

import "./otherServices.css";

const OtherServices = () => {
  return (
    <>
      <main className="aae-wash-fold-service--main">
        <section className="aae-wash-fold-service other-services">
          <aside className="wash-fold-service--intro other-services">
            <h2>Other Services</h2>
            <p>A service for everything in your closet.</p>
            <ul className="other-services-nav">
              <li className="other-services-nav--item">
                <a href="#cloth-repairs">
                  Cloth Repairs <i className="fas fa-angle-right ml-2"></i>
                </a>
              </li>
              <li className="other-services-nav--item">
                <a href="#hang-dry">
                  Hang Dry <i className="fas fa-angle-right ml-2"></i>
                </a>
              </li>
              <li className="other-services-nav--item">
                <a href="#home-cleaning">
                  Home Cleaning <i className="fas fa-angle-right ml-2"></i>
                </a>
              </li>
              <li className="other-services-nav--item">
                <a href="#office-cleaning">
                  Office Cleaning <i className="fas fa-angle-right ml-2"></i>
                </a>
              </li>
              <li className="other-services-nav--item">
                <a href="#industrial-cleaning">
                  Industrial Cleaning{" "}
                  <i className="fas fa-angle-right ml-2"></i>
                </a>
              </li>
              <li className="other-services-nav--item">
                <a href="#staff-training">
                  Staff Training <i className="fas fa-angle-right ml-2"></i>
                </a>
              </li>
            </ul>
          </aside>
          <div className="other-services--gallery-row">
            <div className="column">
              <img
                src="https://images.pexels.com/photos/4621921/pexels-photo-4621921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1421940943431-d392fcc1079f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
            </div>
          </div>
        </section>
        <article className="other-services--container">
          <figure>
            <img
              src="https://images.pexels.com/photos/4621921/pexels-photo-4621921.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </figure>
          <section className="other-services--section" id="cloth-repairs">
            <div>
              <i className="fas fa-cut"></i>
              <h2>Cloth Repairs </h2>

              <p>
                We also offer basic repairs like fixing fabric tears or re-hems,
                and complex repairs like replacing zippers and clasps. All items
                that are sent for repair are also Dry Cleaned and charged at our
                regular price per garment.
              </p>
              <Link to="/pricing" className="primary-link">
                See Pricing <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </section>

          <figure>
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
          </figure>
          <section className="other-services--section" id="hang-dry">
            <div>
              <i className="fas fa-tshirt"></i>
              <h2>Hang Dry </h2>
              <p>
                Perfect for delicates, activewear, and other clothing that
                should avoid heat from the dryer. Machine-washed, hung to dry,
                and returned neatly folded!
              </p>
              <Link to="/pricing" className="primary-link">
                See Pricing <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </section>

          <figure>
            {" "}
            <img
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"
              alt=""
            />
          </figure>
          <section className="other-services--section" id="home-cleaning">
            <div>
              <i className="fas fa-broom"></i>
              <h2>Home Cleaning </h2>
              <p>
                We clean all home type (block of flats, duplex, bungalow etc.).
              </p>

              <a
                href="https://wa.me/message/TOKS546P3O5PI1"
                target="_blank"
                rel="noreferrer"
                className="primary-link  mt-4 mx-auto"
              >
                Talk to our agent <i className="fas fa-caret-right ml-2"></i>
              </a>
            </div>
          </section>

          <figure>
            <img
              src="https://images.unsplash.com/photo-1421940943431-d392fcc1079f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
              alt=""
            />
          </figure>
          <section className="other-services--section" id="office-cleaning">
            <div>
              <i className="fas fa-building"></i>
              <h2>Office Cleaning</h2>
              <p>
                Afrange provides cleaning services to small, medium and and
                large scale offices. We are committed to excellence and
                experience in providing cleaning services that stand out.
              </p>
              <a
                href="https://wa.me/message/TOKS546P3O5PI1"
                target="_blank"
                rel="noreferrer"
                className="primary-link  mt-4 mx-auto"
              >
                Talk to our agent <i className="fas fa-caret-right ml-2"></i>
              </a>
            </div>
          </section>
          <figure>
            <img src={industryWorker} alt="industrial cleaner" />
          </figure>
          <section className="other-services--section" id="industrial-cleaning">
            <div>
              <i className="fas fa-industry"></i>
              <h2>Industrial Cleaning </h2>
              <p>
                We are currently expanding our reach to provide our quality
                service to industries around our service region.
              </p>
              <a
                href="https://wa.me/message/TOKS546P3O5PI1"
                target="_blank"
                rel="noreferrer"
                className="primary-link  mt-4 mx-auto"
              >
                Talk to our agent <i className="fas fa-caret-right ml-2"></i>
              </a>
            </div>
          </section>

          <figure>
            <img src={staffTraining} alt="staff training" />
          </figure>
          <section className="other-services--section" id="staff-training">
            <div>
              <i className="fas fa-chalkboard-teacher"></i>
              <h2>Staff Training</h2>
              <p>
                We manage and train laundry staffs for multiple organizations.
                Client under our laundry training include Gold Value hotel in
                Enugu.
              </p>
              <a
                href="https://wa.me/message/TOKS546P3O5PI1"
                target="_blank"
                rel="noreferrer"
                className="primary-link  mt-4 mx-auto"
              >
                Talk to our agent <i className="fas fa-caret-right ml-2"></i>
              </a>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export { OtherServices };
