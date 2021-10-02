import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";
import NewBookings from "./NewBookings.js";

const Bookings = props => {
  const [bookings, setBooking] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [customerProfileId, setCustomerProfileId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  // const [toConcat, setToContact] = useState([]);
  // const [inputForm, setInputForm] = useState("");

  // const catchEntry = () => {
  //   const newConcat = bookings.concat(inputForm);
  //   setBooking(newConcat);
  //   setInputForm("");
  // };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
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
      {/* <form onSubmit={props.handleSubmit}>
        <h1>Booking Form</h1>
        <label> First Name :</label>
        <input
          onChange={props.handleSearchInput}
          value={props.searchInput}
          type="text"
          id="customerName"
          className="form-control"
          placeholder="first name"
        />
        <label> Surname :</label>
        <input
          onChange={props.handleSearchInput}
          value={props.searchInput}
          type="text"
          id="customerName"
          className="form-control"
          placeholder="Surname"
        />
        <label> Title :</label>
        <input
          onChange={props.handleSearchInput}
          value={props.searchInput}
          type="text"
          id="customerName"
          className="form-control"
          placeholder="title"
        />
        <label> Email :</label>
        <input
          onChange={props.handleSearchInput}
          value={props.searchInput}
          type="text"
          id="customerName"
          className="form-control"
          placeholder=" email"
        />
        <label> Check In Date :</label>
        <input
          onChange={props.handleSearchInput}
          value={props.searchInput}
          type="text"
          id="customerName"
          className="form-control"
          placeholder="check-in-date"
        />
        <label> Check Out Date :</label>
        <input
          onChange={props.handleSearchInput}
          value={props.searchInput}
          type="text"
          id="customerName"
          className="form-control"
          placeholder="check-out-date"
        />
      </form>

      <button onClick={catchEntry} className="btn btn-primary">
        Submit
      </button>
      <ul>
        {toConcat.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul> */}
      <NewBookings />
    </div>
  );
};

export default Bookings;
