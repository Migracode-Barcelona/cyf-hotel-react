import React from "react";
import Restaurant from "./Restaurant";
import Order from "./Order";

const RestaurantButton = props => {
  return (
    <button onClick={props.orderOne} className="btn btn-primary">
      Add
    </button>
  );
};
export default RestaurantButton;
