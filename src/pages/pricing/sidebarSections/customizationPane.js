import React, { useEffect, useState } from "react";
import { Multiselect } from "react-widgets/cjs";
import clothList from "../../../dummy-data/dummyLists.json";

const CustomizationPane = ({ setSelectedClothes, setTotalPrice }) => {
  const [currentView, setCurrentView] = useState("maleClothes");

  useEffect(() => {
    const view =
      window.location.hash === "#male" || window.location.hash === ""
        ? "maleClothes"
        : window.location.hash === "#female"
        ? "femaleClothes"
        : "otherItems";

    window.addEventListener("hashchange", setCurrentView(view), false);
    return () => window.removeEventListener("hashchange", () => {});
  });

  const handleMultiSelectChange = (value) => {
    if (value.length !== 0) {
      const calculatedTotal = value
        .map((cloth) => {
          if (cloth.specifyNumber === true) {
            cloth.calculatedPrice =
              cloth.price * (cloth.quantity - cloth.ironQuantity) +
              cloth.ironQuantity * cloth.ironOnlyPrice;
          } else if (cloth.ironAll === true) {
            cloth.calculatedPrice = cloth.ironOnlyPrice * cloth.quantity;
          } else cloth.calculatedPrice = cloth.price * cloth.quantity;
          return cloth;
        })
        .reduce((newTotal, currentValue) => {
          return {
            calculatedPrice:
              newTotal.calculatedPrice + currentValue.calculatedPrice,
            quantity: newTotal.quantity + currentValue.quantity,
          };
        });
      setTotalPrice({
        price: calculatedTotal.calculatedPrice,
        quantity: calculatedTotal.quantity,
      });
    } else {
      setTotalPrice({ price: 0 });
    }
    setSelectedClothes(value);
  };

  return (
    <div>
      <Multiselect
        data={clothList[currentView]}
        dataKey="cloth-list"
        textField="name"
        placeholder="Select cloth type.."
        style={{ width: "300px", marginBottom: "5px" }}
        onChange={(value) => {
          handleMultiSelectChange(value);
        }}
      />
      <aside
        className="customization__number-picker--container"
        style={{ width: "50px" }}
      ></aside>
    </div>
  );
};

export { CustomizationPane };
