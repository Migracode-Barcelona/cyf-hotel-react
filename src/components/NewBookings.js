import React, { useState } from "react";

const NewBookings = props => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };
  const handleFirstNameChange = event => {
    setFirstName(event.target.value);
  };
  const handleSurnameChange = event => {
    setSurname(event.target.value);
  };
  const handleEmailChange = event => {
    setEmail(event.target.value);
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

    // all properties here must match the ones we're using in SearchResults.js
    props.onSubmit({
      title,
      firstName,
      surname,
      email,
      roomId,
      checkInDate: checkIn,
      checkOutDate: checkOut
    });
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
            name="email"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewBookings;
