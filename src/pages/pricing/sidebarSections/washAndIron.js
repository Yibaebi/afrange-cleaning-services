import React, { useState } from "react";
import { Multiselect } from "react-widgets/cjs";

const clothes = [
  { id: 0, name: "T-shirt", price: 200 },
  { id: 1, name: "Trousers", price: 200 },
  { id: 2, name: "Polo", price: 200 },
  { id: 3, name: "Blouse", price: 200 },
  { id: 4, name: "Sweater", price: 200 },
  { id: 5, name: "Skirt", price: 200 },
  { id: 6, name: "Vest", price: 200 },
];

const WashAndIronSideBar = ({
  setSelectedClothes,
  setTotalPrice,
  totalPrice,
}) => {
  const [value, setValue] = useState([]);
  //   const [clothes, setClothes] = useState([]);

  const handleMultiSelectChange = (value, trigger) => {
    // console.log(Array.isArray(value), value, trigger);
    // if (!(!Array.isArray(value) && trigger === "remove")) {
    //   alert("Item Removed");
    // }

    if (value.length) {
      setTotalPrice({ price: totalPrice.price });
    }
    setSelectedClothes(value);
  };

  const addMultiSelectValue = (value, trigger) => {
    // console.log(Array.isArray(value), value, trigger);
    // if (!Array.isArray(value) && trigger === "remove") {
    //   alert("Item removed");
    //   return;
    // }
    // console.log(Array.isArray(value), value, trigger, "Selected");
    // if (Array.isArray(value) === false && trigger === "add") {
    //   console.log("Item added");
    //   return;
    // }
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
          handleMultiSelectChange(value, "remove");
        }}
        // onSelect={(value) => {
        //   addMultiSelectValue(value, "remove");
        // }}
      />
      <aside
        className="customization__number-picker--container"
        style={{ width: "50px" }}
      ></aside>
    </div>
  );
};

export { WashAndIronSideBar };
