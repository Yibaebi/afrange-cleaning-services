import React, { useState } from "react";
import "react-widgets/styles.css";
import Collapse from "rc-collapse";
import "rc-collapse/assets/index.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { DropdownList, Listbox, NumberPicker } from "react-widgets/cjs";

import { PricingCard } from "../../components";
import { CustomizationPane } from "./sidebarSections/customizationPane";
import { nairaIcon } from "../../assets";
import { deliveryList, pricingList } from "../../dummy-data/dummyLists.json";

import "./pricing.css";

const Panel = Collapse.Panel;

const Pricing = () => {
  const [totalPrice, setTotalPrice] = useState({ price: 0, quantity: 0 });
  const [selectedClothes, setSelectedClothes] = useState([]);
  const [deliveryType, setDeliveryType] = useState({});
  const [delvCollSelection, setDelvCollSelection] = useState(deliveryList);

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

  const deliveryPrice =
    deliveryType.type === "Remove Cost"
      ? 0
      : deliveryType.type === "Collection Only"
      ? delvCollSelection.collection
      : deliveryType.type === "Delivery Only"
      ? delvCollSelection.delivery
      : delvCollSelection.collAndDelv;
  const calculatedTotal = totalPrice.price + (deliveryPrice || 0);

  return (
    <div className='aae-pricing container-styles'>
      <section className='pricing-customization__section'>
        <motion.aside
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          className='customization__info'
        >
          <h1>Find the right price for your laundry items.</h1>
          <p style={{ textAlign: "left", marginBottom: "20px" }}>
            Made For You. Flexible. Straightforward. No hidden costs.
          </p>
          <a
            href='#pricing-table'
            rel='noreferrer'
            className='primary-link my-5'
          >
            Go to pricing table
          </a>
          <span className='naira-icon'>{nairaIcon()}</span>
        </motion.aside>
        <h2 className='suitable-plan'>
          <i className='fas fa-cut mr-3'></i>Select a suitable plan
        </h2>
        <aside className='customization__container'>
          <div className='customization__sidebar'>
            <ul>
              <li className='sidebar--item'>
                <NavLink
                  to='#male'
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
              <li className='sidebar--item'>
                <NavLink
                  to='#female'
                  isActive={(match, location) => {
                    if (window.location.hash === "#female") {
                      return true;
                    }
                  }}
                >
                  Female
                </NavLink>
              </li>
              <li className='sidebar--item'>
                <NavLink
                  to='#others'
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
          <div className='customization__selector'>
            <section className='selector__section'>
              <aside>
                <h5>Cloth Types</h5>
                <CustomizationPane
                  setSelectedClothes={setSelectedClothes}
                  setTotalPrice={setTotalPrice}
                />
              </aside>

              <aside>
                <h5>Delivery</h5>
                <DropdownList
                  data={deliveryList}
                  dataKey='delivery-list'
                  textField='name'
                  placeholder='Enter delivery location'
                  style={{ width: "300px", marginBottom: "5px" }}
                  onChange={(value) => {
                    setDeliveryType({ id: 1, type: "Collection Only" });
                    setDelvCollSelection(value);
                  }}
                />
                {deliveryType?.id && (
                  <React.Fragment>
                    <h5>Delivery Preferences</h5>
                    <Listbox
                      value={deliveryType}
                      dataKey='id'
                      textField='type'
                      data={[
                        { id: 1, type: "Collection Only" },
                        { id: 2, type: "Delivery Only" },
                        { id: 3, type: "Delivery and Collection" },
                        { id: 4, type: "Remove Cost" },
                      ]}
                      onChange={(value) => {
                        setDeliveryType(value);
                      }}
                    />
                  </React.Fragment>
                )}
              </aside>
              <aside>
                <h5>Enter Home Address</h5>
                <input
                  type='text'
                  placeholder='Enter location'
                  className='aae-location-input'
                  style={{ width: "300px" }}
                />
              </aside>
            </section>
            <section className='selector__cloth-type-number--container'>
              {selectedClothes.length || deliveryPrice ? (
                <React.Fragment>
                  <h5>Customize service request </h5>

                  <section className='selector__cloth-type-number'>
                    {!selectedClothes.length && (
                      <h6 style={{ color: "red", minWidth: "200px" }}>
                        <i className='fas fa-info-circle mr-2'></i>
                        No clothes selected
                      </h6>
                    )}
                    {selectedClothes.map((cloth, index) => {
                      return (
                        <aside
                          className='cloth-type-number--item'
                          key={cloth.id}
                        >
                          <h6>
                            {cloth.name}{" "}
                            <span>{`(₦${cloth.price})${
                              cloth.name.includes("Curtain")
                                ? " per sq. meters"
                                : ""
                            }`}</span>
                          </h6>
                          <NumberPicker
                            key={cloth.id}
                            placeholder='Quantity'
                            className='customization__number-picker'
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
                            <React.Fragment>
                              <DropdownList
                                defaultValue='Wash and Iron'
                                data={[
                                  "Iron All",
                                  "Wash and Iron",
                                  "Iron Specific Number",
                                ]}
                                containerClassName='service-type'
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
                                  placeholder='Quantity'
                                  className='customization__number-picker'
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
                            </React.Fragment>
                          )}
                        </aside>
                      );
                    })}
                  </section>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className='empty-price-list'>
                    <i className='fas fa-info-circle fa-2x'></i> <br /> No cloth
                    type selected. To select a cloth type, click on the select
                    box on the left section Or
                  </div>
                  <div className='aae-about-us-hero--buttons my-0 justify-center flex mx-auto'>
                    <a
                      href='https://wa.me/message/TOKS546P3O5PI1'
                      className='secondary-link p-3  '
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='fab fa-whatsapp mr-2'></i> Contact Us
                    </a>
                  </div>
                </React.Fragment>
              )}
            </section>
            {(!!selectedClothes.length || deliveryPrice) && (
              <section className='price__container'>
                <aside className='price__container--section'>
                  <h5>Total Items </h5>
                  <span className='total--items__count'>
                    {totalPrice.quantity || 0}
                  </span>
                </aside>
                <aside className='price__container--section'>
                  <h5>Delivery Price</h5>
                  <span className='total--delivery-price'>
                    ₦{deliveryPrice || 0}
                  </span>
                </aside>
                <aside className='price__container--section'>
                  <h5>Total Price (₦)</h5>
                  <span className='price-tag price-tag--one-line'>
                    <span className='price-tag__main'>₦{calculatedTotal}</span>
                  </span>
                </aside>
                <div className='mt-7 justify-center screenshot-request items-center flex flex-col mx-auto'>
                  <p className='not-satisfied-info'>
                    Please take a screenshot of your request and send data to
                    the <b>WhatsApp account</b> below.
                  </p>

                  <a
                    href='https://wa.me/message/TOKS546P3O5PI1'
                    className='secondary-link p-3'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i className='fab fa-whatsapp mr-2'></i> Send Request
                  </a>
                </div>
              </section>
            )}
          </div>
        </aside>
      </section>

      <h2 className='suitable-plan pricing-table' id='pricing-table'>
        <i className='fas fa-table mr-3'></i>Our Pricing Table
      </h2>

      <div className='pricing-table--info'>
        <span>Note</span>
        <p>
          * All <b>white garment</b> attracts extra ₦100{" "}
        </p>
        <p>
          * All <b>white suits</b> attracts extra ₦200{" "}
        </p>
      </div>

      {pricingList.map((item, index) => {
        return (
          <section className='pricing-group__section' key={`index${index + 1}`}>
            <Collapse
              collapsible={false}
              accordion={true}
              key={index}
              defaultActiveKey={index === 0 && ["0"]}
              className='pricing-table-header'
            >
              <Panel
                header={
                  <h2 className='pricing-section__title'>
                    {item.sectionTitle}
                  </h2>
                }
                headerclassName='pricing-title-header'
              >
                <aside className='pricing-section__cards'>
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
