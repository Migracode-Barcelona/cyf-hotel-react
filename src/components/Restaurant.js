import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="restaurant-orders">
      <h3>Restaurant Orders</h3>
      <ul className="order-type">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
