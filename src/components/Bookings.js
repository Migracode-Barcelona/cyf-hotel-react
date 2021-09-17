import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  // const setBookings = () => {
  //   const
  // }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={fakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;
