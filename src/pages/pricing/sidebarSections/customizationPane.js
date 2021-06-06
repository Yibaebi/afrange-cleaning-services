import React from "react";
import { Multiselect } from "react-widgets/cjs";
import { maleClothes } from "../../../dummy-data/dummyLists.json";

const CustomizationPane = ({ setSelectedClothes, setTotalPrice }) => {
  const handleMultiSelectChange = (value) => {
    if (value.length !== 0) {
      const calculatedTotal = value
        .map((cloth) => {
          console.log("Current cloth", cloth);
          if (cloth.specifyNumber === true) {
            cloth.calculatedPrice =
              cloth.price * (cloth.quantity - cloth.ironQuantity) +
              cloth.ironQuantity * cloth.ironOnlyPrice;
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
        data={maleClothes}
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
