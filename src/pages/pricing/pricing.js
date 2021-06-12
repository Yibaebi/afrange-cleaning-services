import React, { useEffect, useState } from "react";
import "react-widgets/styles.css";
import Collapse from "rc-collapse";
import "rc-collapse/assets/index.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { DropdownList, Listbox, NumberPicker } from "react-widgets/cjs";

import { PricingCard } from "../../components";
import { CustomizationPane } from "./sidebarSections/customizationPane";
import { nairaIcon } from "../../assets";
import { pricingList } from "../../dummy-data/dummyLists.json";

import "./pricing.css";

const Panel = Collapse.Panel;

const Pricing = () => {
  const [totalPrice, setTotalPrice] = useState({ price: 0, quantity: 0 });
  const [isActive, setIsActive] = useState(false);
  const [selectedClothes, setSelectedClothes] = useState([]);
  const [deliveryFrequencyPrice] = useState(0);
  const [firstTimeDiscount, setFirstTimeDiscount] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  const frequency = [
    "Once a week",
    "Twice a week",
    "Monthly",
    "Not applicable",
  ];

  const handlePriceUpdate = (clothDetails, serviceType) => {
    const newClothQuantities = [...selectedClothes].map((cloth) => {
      if (cloth.id === clothDetails.id) {
        if (serviceType === "Iron All" || clothDetails.ironAll) {
          cloth.ironAll = true;
          cloth.quantity = clothDetails.quantity;
          cloth.calculatedPrice = cloth.ironOnlyPrice * cloth.quantity;
          cloth.specifyNumber = false;
        } else if (serviceType === "Iron Specific Number") {
          cloth.specifyNumber = true;
          cloth.calculatedPrice =
            cloth.price * (cloth.quantity - clothDetails.ironQuantity) +
            clothDetails.ironQuantity * cloth.ironOnlyPrice;
        } else if (serviceType === "Specified Number") {
          cloth.ironQuantity = clothDetails.ironQuantity;
          cloth.calculatedPrice =
            cloth.price * (cloth.quantity - clothDetails.ironQuantity) +
            clothDetails.ironQuantity * cloth.ironOnlyPrice;
        } else {
          cloth.ironAll = false;
          cloth.specifyNumber = false;
          cloth.quantity = clothDetails.quantity;
          cloth.calculatedPrice = cloth.price * cloth.quantity;
        }
      }
      return cloth;
    });

    setSelectedClothes(newClothQuantities);

    const calculatedTotal = newClothQuantities.reduce(
      (newTotal, currentValue) => {
        return {
          calculatedPrice:
            newTotal.calculatedPrice + currentValue.calculatedPrice,
          quantity: newTotal.quantity + currentValue.quantity,
        };
      }
    );
    setTotalPrice({
      price: calculatedTotal.calculatedPrice,
      quantity: calculatedTotal.quantity,
    });
  };

  const calculatedTotal =
    (totalPrice.price + deliveryFrequencyPrice + deliveryPrice) *
    (1 - firstTimeDiscount / 100);

  return (
    <div className="aae-pricing container-styles">
      <section className="pricing-customization__section">
        <motion.aside
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          className="customization__info"
        >
          <h1>Find the right price for your laundry items.</h1>
          <p>
            - Made For You. <br />
            - Flexible. <br />
            - Straightforward. <br />- No hidden costs.
          </p>
          <button className="primary-button">Go to pricing table</button>
          <span className="naira-icon">{nairaIcon()}</span>
        </motion.aside>
        <h2 className="suitable-plan">
          <i className="fas fa-cut mr-3"></i>Select a suitable plan
        </h2>
        <aside className="customization__container">
          <div className="customization__sidebar">
            <ul>
              <li className="sidebar--item">
                <NavLink
                  to="#male"
                  isActive={() => {
                    if (
                      window.location.hash === "#male" ||
                      window.location.hash === ""
                    ) {
                      return true;
                    }
                  }}
                >
                  Male
                </NavLink>
              </li>
              <li className="sidebar--item">
                <NavLink
                  to="#female"
                  isActive={(match, location) => {
                    if (window.location.hash === "#female") {
                      return true;
                    }
                  }}
                >
                  Female
                </NavLink>
              </li>
              <li className="sidebar--item">
                <NavLink
                  to="#others"
                  isActive={() => {
                    if (window.location.hash === "#others") {
                      return true;
                    }
                  }}
                >
                  Others
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="customization__selector">
            <section className="selector__section">
              <aside>
                <h5>Cloth Types</h5>
                <CustomizationPane
                  setSelectedClothes={setSelectedClothes}
                  setTotalPrice={setTotalPrice}
                />
              </aside>

              <aside>
                <h5>Frequency</h5>
                <DropdownList
                  data={frequency}
                  dataKey="service-frequency"
                  textField="service-frequency"
                  placeholder="Select service frequency"
                  style={{ width: "300px", marginBottom: "5px" }}
                  onChange={(value) => console.log(value)}
                />
              </aside>

              <aside>
                <h5>First Time</h5>
                <DropdownList
                  data={["Wash and Iron", "Iron All"]}
                  dataKey="first-timer"
                  textField="name"
                  placeholder="Is this your first time?"
                  style={{ width: "300px", marginBottom: "5px" }}
                  onChange={(value) => {
                    value === "Yes"
                      ? setFirstTimeDiscount(10)
                      : setFirstTimeDiscount(0);
                    return;
                  }}
                />
              </aside>

              <aside>
                <h5>
                  Delivery <span>(₦200)</span>
                </h5>
                <Listbox
                  onChange={(value) => {
                    value === "Yes"
                      ? setDeliveryPrice(200)
                      : setDeliveryPrice(0);
                    return;
                  }}
                  className="delivery__request"
                  data={["Yes", "No"]}
                />
              </aside>
            </section>
            <section className="selector__cloth-type-number--container">
              {selectedClothes.length ? (
                <>
                  <h5>Customize service request </h5>
                  <section className="selector__cloth-type-number">
                    {selectedClothes.map((cloth, index) => {
                      return (
                        <aside
                          className="cloth-type-number--item"
                          key={cloth.id}
                        >
                          <h6>
                            {cloth.name} <span>{`(₦${cloth.price})`}</span>
                          </h6>
                          <NumberPicker
                            key={cloth.id}
                            placeholder="Quantity"
                            className="customization__number-picker"
                            onChange={(value) => {
                              handlePriceUpdate({
                                price: cloth.price,
                                cloth: cloth.name,
                                id: cloth.id,
                                quantity: value,
                                ironAll: cloth.ironAll || false,
                              });
                            }}
                            disabled={cloth.specifyNumber}
                            value={cloth.quantity}
                            min={1}
                          />
                          {cloth.ironOnlyPrice && (
                            <>
                              <DropdownList
                                defaultOpen={true}
                                defaultValue="Wash and Iron"
                                data={[
                                  "Iron All",
                                  "Wash and Iron",
                                  "Iron Specific Number",
                                ]}
                                containerClassName="service-type"
                                onChange={(value) => {
                                  if (value === "Iron All") {
                                    handlePriceUpdate(
                                      {
                                        price: cloth.ironOnlyPrice,
                                        cloth: cloth.name,
                                        id: cloth.id,
                                        quantity: cloth.quantity,
                                        ironAll: true,
                                      },
                                      "Iron All"
                                    );
                                  } else if (value === "Iron Specific Number") {
                                    handlePriceUpdate(
                                      {
                                        price: cloth.ironOnlyPrice,
                                        cloth: cloth.name,
                                        id: cloth.id,
                                        quantity: cloth.quantity,
                                        ironQuantity: 1,
                                      },
                                      "Iron Specific Number"
                                    );
                                  } else {
                                    handlePriceUpdate(
                                      {
                                        price: cloth.price,
                                        cloth: cloth.name,
                                        id: cloth.id,
                                        quantity: cloth.quantity,
                                        ironAll: false,
                                      },
                                      "Wash and Iron"
                                    );
                                  }
                                }}
                              />
                              {cloth.specifyNumber && (
                                <NumberPicker
                                  key={cloth.id}
                                  placeholder="Quantity"
                                  className="customization__number-picker"
                                  onChange={(value) =>
                                    handlePriceUpdate(
                                      {
                                        price: cloth.ironOnlyPrice,
                                        cloth: cloth.name,
                                        id: cloth.id,
                                        quantity: cloth.quantity,
                                        ironQuantity: value,
                                      },
                                      "Specified Number"
                                    )
                                  }
                                  max={cloth.quantity}
                                  value={cloth.ironQuantity}
                                  defaultValue={1}
                                  min={1}
                                />
                              )}
                            </>
                          )}
                        </aside>
                      );
                    })}
                  </section>
                </>
              ) : (
                <>
                  <div className="empty-price-list">
                    <i className="fas fa-info-circle fa-2x"></i> <br /> No cloth
                    type selected. To select a cloth type, click on the select
                    box on the left section Or
                  </div>
                  <div className="aae-about-us-hero--buttons my-0 justify-center flex mx-auto">
                    <button className="secondary-button p-3  ">
                      <i className="fas fa-mail-bulk mr-2"></i> Contact Us
                    </button>
                  </div>
                </>
              )}
            </section>
            {!!selectedClothes.length && (
              <section className="price__container">
                <aside className="price__container--section">
                  <h5>Total Items </h5>
                  <span className="total--items__count">
                    {totalPrice.quantity}
                  </span>
                </aside>
                <aside className="price__container--section">
                  <h5>Total Price (₦)</h5>
                  <span className="price-tag price-tag--one-line">
                    <span className="price-tag__main">₦{calculatedTotal}</span>
                  </span>
                </aside>
                <div className="mt-7 justify-center items-center flex flex-col mx-auto">
                  <p className="not-satisfied-info">Not satisfied? </p>

                  <button className="secondary-button p-3  ">
                    <i className="fas fa-mail-bulk mr-2"></i> Send Feedback
                  </button>
                </div>
              </section>
            )}
          </div>
        </aside>
      </section>
      <h2 className="suitable-plan pricing-table">
        <i className="fas fa-table mr-3"></i>Our Pricing Table
      </h2>

      {pricingList.map((item, index) => {
        return (
          <section className="pricing-group__section" key={`index${index + 1}`}>
            <Collapse
              collapsible={false}
              accordion={true}
              key={index}
              defaultActiveKey={index === 0 && ["0"]}
              className="pricing-table-header"
            >
              <Panel
                header={
                  <h2 className="pricing-section__title">
                    {item.sectionTitle}
                  </h2>
                }
                headerClass="pricing-title-header"
              >
                <aside className="pricing-section__cards">
                  {item.pricingDetailsList.map((listItem, index) => (
                    <PricingCard
                      pricingDetailsList={listItem.listDetails}
                      cardTitle={listItem.title}
                      background={listItem.background}
                      key={`index${index + 1}`}
                    />
                  ))}
                </aside>
              </Panel>
            </Collapse>
          </section>
        );
      })}
    </div>
  );
};

export { Pricing };
