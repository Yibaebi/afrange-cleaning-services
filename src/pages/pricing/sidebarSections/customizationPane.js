import React, { useState } from "react";
import { Multiselect } from "react-widgets/cjs";

const clothes = [
  { id: 0, name: "3-Piece Suit", price: 1200, quantity: 1 },
  { id: 1, name: "2-Piece Suit", price: 1000, quantity: 1 },
  { id: 2, name: "Jacket", price: 600, quantity: 1 },
  {
    id: 3,
    name: "Jean",
    price: 300,
    quantity: 1,
    ironOnly: false,
    ironQuantity: 1,
    ironOnlyPrice: 200,
  },
  {
    id: 4,
    name: "Chinos",
    price: 300,
    quantity: 1,
    ironOnly: false,
    ironQuantity: 1,
    ironOnlyPrice: 200,
  },
  { id: 5, name: "Singlet", price: 300, quantity: 1 },
  {
    id: 6,
    name: "Tie",
    price: 300,
    quantity: 1,
    ironOnly: false,
    ironQuantity: 1,
    ironOnlyPrice: 200,
  },
  {
    id: 7,
    name: "Trousers",
    price: 300,
    quantity: 1,
    ironOnly: false,
    ironQuantity: 1,
    ironOnlyPrice: 200,
  },
  {
    id: 8,
    name: "Shirt",
    price: 300,
    quantity: 1,
    ironOnly: false,
    ironQuantity: 1,
    ironOnlyPrice: 200,
  },
  {
    id: 9,
    name: "T-shirt",
    price: 250,
    quantity: 1,
    ironOnly: false,
    ironQuantity: 1,
    ironOnlyPrice: 200,
  },
  {
    id: 10,
    name: "Polo",
    price: 200,
    quantity: 1,
    ironOnly: false,
    ironQuantity: 1,
    ironOnlyPrice: 150,
  },
  {
    id: 11,
    name: "Short ",
    price: 300,
    quantity: 1,
    ironOnly: false,
    ironQuantity: 1,
    ironOnlyPrice: 200,
  },
  { id: 12, name: "Native Caps", price: 300, quantity: 1 },
  { id: 13, name: "Sweat Shirt", price: 400, quantity: 1 },
  {
    id: 14,
    name: "Kaftan",
    price: 500,
    quantity: 1,
    ironOnly: false,
    ironQuantity: 1,
    ironOnlyPrice: 300,
  },
  {
    id: 15,
    name: "Lace Kaftan",
    price: 600,
    quantity: 1,
    ironOnly: false,
    ironQuantity: 1,
    ironOnlyPrice: 400,
  },
  {
    id: 16,
    name: "Safari Suit",
    price: 600,
    quantity: 1,
    ironOnly: false,
    ironQuantity: 1,
    ironOnlyPrice: 400,
  },
  { id: 17, name: "Bath Robe", price: 1000, quantity: 1 },
  {
    id: 18,
    name: "Sweater",
    price: 400,
    quantity: 1,
    ironOnly: false,
    ironQuantity: 1,
    ironOnlyPrice: 400,
  },
];

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
        data={clothes}
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
