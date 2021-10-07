import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";
import NewBookings from "./NewBookings.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [customerProfileId, setCustomerProfileId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const addToBooking = booking => {
    const newBookings = bookings.concat(booking);
    // const anotherBookings = [...bookings, booking]

    setBookings(newBookings);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://cyf-react.glitch.me/`)
      .then(res => res.json())
      .then(data => {
        if (data.error) throw new Error(data.error);

        // set the full result
        setBookings(data);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setIsLoading(false);
      });
  }, []); // empty array means only run ONCE, when the component first loads

  const filteredBookings = searchVal
    ? bookings.filter(
        value => value.firstName === searchVal || value.surname === searchVal
      )
    : bookings;

  // onSearch should filter the booking results and only include ones where the first or last
  // name match the search value

  return (
    <div className="App-content">
      <div className="container">
        <Search search={setSearchVal} />
        {error && <p>{error}</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <SearchResults
            results={filteredBookings}
            onShowCustomerProfile={setCustomerProfileId}
          />
        )}

        {customerProfileId && <CustomerProfile id={customerProfileId} />}
      </div>
      <NewBookings onSubmit={addToBooking} />
    </div>
  );
};

export default Bookings;
