import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBooking] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [customerProfileId, setCustomerProfileId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => {
        if (data.error) throw new Error(data.error);

        const bookings = searchVal
          ? data.filter(
              value =>
                value.firstName === searchVal || value.surname === searchVal
            )
          : data;
        setBooking(bookings);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setIsLoading(false);
      });
  }, [searchVal]);

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
            results={bookings}
            onShowCustomerProfile={setCustomerProfileId}
          />
        )}

        {customerProfileId && <CustomerProfile id={customerProfileId} />}
      </div>
      <form>
        <label htmlFor="customerName">Booking Form</label>
        <input First Name type="text" placeholder="first name" />
        <input First Name type="text" placeholder="Surname" />
        <input First Name type="text" placeholder="Title" />
        <input First Name type="text" placeholder="Room Id" />
        <input First Name type="text" placeholder="Check In Date" />
        <input First Name type="text" placeholder="Check out Date" />
      </form>
    </div>
  );
};

export default Bookings;
