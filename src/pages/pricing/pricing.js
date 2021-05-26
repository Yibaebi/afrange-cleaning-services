import React, { useState } from "react";
import "react-widgets/styles.css";
import { PricingCard } from "../../components";

import "./pricing.css";
import { NavLink } from "react-router-dom";
import { WashAndIronSideBar } from "./sidebarSections/washAndIron";
import { DropdownList, Listbox, NumberPicker } from "react-widgets/cjs";

const Pricing = () => {
  const [totalPrice, setTotalPrice] = useState({ price: 0 });
  const [selectedClothes, setSelectedClothes] = useState([]);
  const [clothQuantities, setClothQuantities] = useState([]);
  const [deliveryFrequencyPrice, setDeliveryFrequencyPrice] = useState(0);
  const [firstTimeDiscount, setFirstTimeDiscount] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  const frequency = [
    "Once a week",
    "Twice a week",
    "Monthly",
    "Not applicable",
  ];

  const pricingList = [
    {
      sectionTitle: "Cloth Types",
      pricingDetailsList: [
        {
          title: "Tops",
          background:
            "url(https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80) center 43%",
          listDetails: [
            {
              type: "All Shirts",
              price: "₦3.95",
            },
            {
              type: "Polo",
              price: "₦3.95",
            },
            {
              type: "Blouse",
              price: "₦3.95",
            },
            {
              type: "Sweater",
              price: "₦3.95",
            },
            {
              type: "Jacket/Blazer",
              price: "₦3.95",
            },
            {
              type: "Vest",
              price: "₦3.95",
            },
          ],
        },
        {
          title: "Bottoms",
          background:
            "url(https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80) 80% 15%",
          listDetails: [
            {
              type: " Pants",
              price: "₦3.95",
            },
            {
              type: "Skirt",
              price: "₦3.95",
            },
            {
              type: "Shorts",
              price: "₦3.95",
            },
          ],
        },
        {
          title: "Full body",
          background:
            "url(https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80) left 20%",
          listDetails: [
            {
              type: "Casual Dress",
              price: "₦3.95",
            },
            {
              type: "Formal Dress",
              price: "₦3.95",
            },
            {
              type: "Coat",
              price: "₦3.95",
            },
            {
              type: "Suit (Jacket & Pants)",
              price: "₦3.95",
            },
          ],
        },
        {
          title: "Household",
          background:
            "url(https://images.unsplash.com/photo-1610973310510-82f514ea1986?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80) 80% 20%",
          listDetails: [
            {
              type: "Bath mat",
              price: "₦3.95",
            },
            {
              type: "Formal Dress",
              price: "₦3.95",
            },
            {
              type: "Sheets/Blanket",
              price: "₦3.95",
            },
            {
              type: "Duvet cover",
              price: "₦3.95",
            },
            {
              type: "Comforter/Duvet",
              price: "₦3.95",
            },
            {
              type: "Tablecloth",
              price: "₦3.95",
            },
          ],
        },
        {
          title: "Accessories",
          background:
            "url(https://images.unsplash.com/photo-1572427734891-5592aae758b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80) 70% 69% ",
          listDetails: [
            {
              type: "Napkin",
              price: "₦3.95",
            },
            {
              type: "Pillowcase",
              price: "₦3.95",
            },
            {
              type: "Tie/Scarf",
              price: "₦3.95",
            },
            {
              type: "Suit (Jacket & Pants)",
              price: "₦3.95",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Cloth Repairs",
      pricingDetailsList: [
        {
          title: "General",
          background:
            "url(https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80) left 20%",
          listDetails: [
            {
              type: "Missing/broken buttons",
              price: "FREE",
            },
            {
              type: "Basic repairs",
              price: "₦3.95",
            },
            {
              type: "Complex repairs",
              price: "₦3.95",
            },
          ],
        },
      ],
    },
  ];

  const handlePriceUpdate = (price, name, index) => {
    const newClothQuantities = clothQuantities;
    if (newClothQuantities) {
      newClothQuantities[index] = { price, name };
      const newTotal = newClothQuantities.reduce((newTotal, currentValue) => {
        return { price: newTotal.price + currentValue.price };
      });
      setTotalPrice(newTotal);
    }
  };

  console.log("Cloth Quantities", clothQuantities);

  const calculatedTotal =
    (totalPrice.price + deliveryFrequencyPrice + deliveryPrice) *
    (1 - firstTimeDiscount / 100);

  return (
    <div className="aae-pricing container-styles">
      <section className="pricing-customization__section">
        <aside className="customization__info">
          <h1>Find A Plan.</h1>
          <p>Made For You. Flexible. Straightforward. No hidden costs.</p>
        </aside>
        <p className="suitable-plan">Select a suitable plan</p>
        <aside className="customization__container">
          <div className="customization__sidebar">
            <ul>
              <li className="sidebar--item">
                <NavLink
                  to="#wash-and-iron"
                  isActive={() => {
                    if (window.location.hash === "#wash-and-iron") {
                      return true;
                    }
                  }}
                >
                  Wash and Iron
                </NavLink>
              </li>
              <li className="sidebar--item">
                <NavLink
                  to="#dry-cleaning"
                  isActive={(match, location) => {
                    if (window.location.hash === "#dry-cleaning") {
                      return true;
                    }
                  }}
                >
                  Dry Cleaning
                </NavLink>
              </li>
              <li className="sidebar--item">
                <NavLink
                  to="#cloth-repairs"
                  isActive={() => {
                    if (window.location.hash === "#cloth-repairs") {
                      return true;
                    }
                  }}
                >
                  Cloth Repairs
                </NavLink>
              </li>
              <li className="sidebar--item">
                <NavLink
                  to="#office-cleaning"
                  isActive={() => {
                    if (window.location.hash === "#office-cleaning") {
                      return true;
                    }
                  }}
                >
                  Office Cleaning
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="customization__selector">
            <section className="selector__section">
              <h5>Cloth Types</h5>
              <WashAndIronSideBar
                setSelectedClothes={setSelectedClothes}
                setTotalPrice={setTotalPrice}
                totalPrice={totalPrice}
              />
              <h5>Frequency</h5>
              <DropdownList
                data={frequency}
                dataKey="service-frequency"
                textField="service-frequency"
                placeholder="Select service frequency"
                style={{ width: "300px", marginBottom: "5px" }}
                onChange={(value) => console.log(value)}
              />
              <h5>First Time</h5>
              <DropdownList
                data={["Yes", "No"]}
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
              <h5>
                Delivery <span>(₦200)</span>
              </h5>
              <Listbox
                onChange={(value) => {
                  value === "Yes" ? setDeliveryPrice(200) : setDeliveryPrice(0);
                  return;
                }}
                className="delivery__request"
                data={["Yes", "No"]}
              />
            </section>
            <section className="selector__cloth-type-number--container">
              {selectedClothes.length ? (
                <>
                  <h5>Number of laundry items</h5>
                  <section className="selector__cloth-type-number">
                    {selectedClothes.map((cloth, index) => {
                      return (
                        <aside key={cloth.id}>
                          <h6>
                            {cloth.name} <span>{`(₦${cloth.price})`}</span>
                          </h6>
                          <NumberPicker
                            key={cloth.id}
                            placeholder="Quantity"
                            className="customization__number-picker"
                            onChange={(value) =>
                              handlePriceUpdate(
                                value * cloth.price,
                                cloth.name,
                                index
                              )
                            }
                            min={1}
                          />
                        </aside>
                      );
                    })}
                  </section>
                </>
              ) : (
                <div className="empty-price-list">
                  <i className="fas fa-info-circle fa-2x"></i> <br /> No cloth
                  type selected. To select a cloth type, click on the select box
                  on the left section
                </div>
              )}
            </section>
            {!!selectedClothes.length && (
              <section className="price__container">
                <aside className="price__container--section">
                  <h5>Total Items </h5>
                  <span className="total--items__count">10</span>
                </aside>
                <aside className="price__container--section">
                  <h5>Total Price (₦)</h5>
                  <span className="price-tag price-tag--one-line">
                    <span className="price-tag__main">₦{calculatedTotal}</span>
                    <span>{firstTimeDiscount}% off</span>
                  </span>
                </aside>
              </section>
            )}
          </div>
        </aside>
      </section>

      {pricingList.map((item, index) => {
        return (
          <section className="pricing-group__section" key={`index${index + 1}`}>
            <h2 className="pricing-section__title">{item.sectionTitle}</h2>
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
          </section>
        );
      })}
    </div>
  );
};

export { Pricing };
