import React from "react";
import { Link } from "react-router-dom";

const WashAndIron = () => {
  return (
    <>
      <main className="aae-wash-fold-service--main">
        <section className="aae-wash-fold-service">
          <aside className="wash-fold-service--intro">
            <h2>Wash & Fold</h2>
            <p>This is the ideal service for your everyday laundry needs.</p>
            <p>
              Save valuable time every week by having Afrange pick up your
              clothes right from your door and return them freshly cleaned and
              perfectly folded.
            </p>

            <Link to="/pricing" className="primary-link">
              See Pricing Info <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </aside>
          <aside className="wash-fold-service--intro--image">
            <img
              src="https://images.unsplash.com/photo-1560243563-062bfc001d68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
          </aside>
        </section>
        <section className="aae-how-it-works">
          <h2>How it works</h2>
          <div className="how-it-works--steps">
            <aside className="how-it-works part-4">
              <span>
                <i className="fas fa-search"></i>
              </span>
              <h5>Detailed inspection</h5>
              Your pockets and clothes are inspected (so nothing ends up in the
              wash that shouldn’t) before being placed in their own machine.
            </aside>

            <aside className="how-it-works part-1">
              <span>
                <i className="fas fa-hand-sparkles"></i>
              </span>
              <h5>Premium cleaning</h5>
              Your lights and darks are separated and all your clothes are
              washed using cold water to preserve color (and save energy).
            </aside>
            <aside className="how-it-works part-2">
              <span>
                <i className="fas fa-user-cog"></i>
              </span>
              <h5>Your preferences </h5>
              Need hypoallergenic detergent? Want fabric softener? No problem —
              just select the laundry preferences that are right for you.
            </aside>
            <aside className="how-it-works part-3">
              <span>
                <i className="fas fa-tshirt"></i>
              </span>
              <h5>Neatly folded</h5>
              Your clothes are crisply folded and your socks are paired, ready
              to be put away upon delivery.
            </aside>
          </div>
        </section>
        <section className="aae-services-delivery">
          <h2>Delivery</h2>
          <p>
            We pick up and deliver 7 days a week, always between 8pm and 10pm.
            We also provide laundry bag for clients on bulk washing.
          </p>
          <p className="pickup-delivery-info">
            Pickup & delivery time: from 7:30am – 1:00pm, Monday – Saturday.
          </p>
          <aside className="aae-deliver--container">
            <div>
              <div className="delivery">
                <div className="delivery-preview">
                  <h2>Affordable Delivery</h2>
                  <div className="delivery-info">
                    <p>
                      Our 24 hours Express delivery is 100% of basic price. Our
                      pricing is flexible and solely depends on your location
                      relative to our operational outlets.
                    </p>
                    <Link to="/pricing" className="primary-link">
                      Find Delivery Price
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export { WashAndIron };
