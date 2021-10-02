import React, { useState } from "react";

const NewBookings = () => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [bookings, setBooking] = useState([]);
  const [inputForm, setInputForm] = useState("");
  const [toConcat, setToConcat] = useState([]);

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };
  const handleFirstNameChange = event => {
    setFirstName(event.target.value);
  };
  const handleSurnameChange = event => {
    setSurname(event.target.value);
  };
  const handleRoomIdChange = event => {
    setRoomId(event.target.value);
  };
  const handleCheckInChange = event => {
    setCheckIn(event.target.value);
  };
  const handleCheckOutChange = event => {
    setCheckOut(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
  };

  const catchEntry = () => {
    const newConcat = bookings.concat(inputForm);
    setBooking(newConcat);
    setInputForm("");
  };

  return (
    <div>
      <form className="form-group search-box" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={surname}
            onChange={handleSurnameChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="roomId"
            placeholder="Room-Id"
            value={roomId}
            onChange={handleRoomIdChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="checkIn"
            placeholder="Check-In"
            value={checkIn}
            onChange={handleCheckInChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="checkOut"
            placeholder="Check-out"
            value={checkOut}
            onChange={handleCheckOutChange}
          />
        </div>
      </form>
      <button onClick={catchEntry}>Submmit</button>
      <ul>
        {toConcat.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewBookings;
