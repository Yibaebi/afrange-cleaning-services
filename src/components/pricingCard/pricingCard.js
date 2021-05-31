import React from "react";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

import "./pricingCard.css";

const PricingCard = ({ background, pricingDetailsList, cardTitle }) => {
  return (
    <InView triggerOnce threshold={0}>
      {({ inView, ref }) => (
        <motion.aside
          className="aae-pricing-card__container"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : ""}
          exit={{ opacity: 0, y: 50 }}
        >
          <header
            className="pricing-card__header"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              background:
                background ||
                "url(https://images.unsplash.com/photo-1605506412358-303da9ea238a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80) center 0%",
            }}
          >
            {cardTitle || "Card Title"}
          </header>
          <section className="pricing-card__details">
            {pricingDetailsList.map((item, index) => {
              return (
                <div className="pricing-list__item" key={`index${index + 1}`}>
                  <span>{item.type}</span> <span>{item.price}</span>
                </div>
              );
            })}
          </section>
        </motion.aside>
      )}
    </InView>
  );
};

export { PricingCard };
