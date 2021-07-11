import React, { useEffect, useState } from "react";
import { Multiselect } from "react-widgets/cjs";
import clothList from "../../../dummy-data/dummyLists.json";
import { useLocation } from "react-router-dom";

const CustomizationPane = ({ setSelectedClothes, setTotalPrice }) => {
  const [currentView, setCurrentView] = useState("maleClothes");
  const { hash } = useLocation();

  useEffect(() => {
    const view =
      hash === "#male" || hash === ""
        ? "maleClothes"
        : hash === "#female"
        ? "femaleClothes"
        : "otherItems";

    window.addEventListener("hashchange", setCurrentView(view), false);
    return () => window.removeEventListener("hashchange", () => {});
  }, [hash]);

  const handleMultiSelectChange = (value) => {
    if (value.length !== 0) {
      const calculatedTotal = value
        .map((cloth) => {
          let {
            specifyNumber,
            price,
            ironQuantity,
            ironOnlyPrice,
            quantity,
            ironAll,
          } = cloth;

          if (specifyNumber === true) {
            cloth.calculatedPrice =
              price * (quantity - ironQuantity) + ironQuantity * ironOnlyPrice;
          } else if (ironAll === true) {
            cloth.calculatedPrice = ironOnlyPrice * quantity;
          } else cloth.calculatedPrice = price * quantity;
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
    <React.Fragment>
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
    </React.Fragment>
  );
};

export { CustomizationPane };
