import React, { useState } from "react";
import moment from "moment";

const daysBetweenDates = (a, b) => {
  const firstMoment = moment(a);
  const secondMoment = moment(b);

  return firstMoment.diff(secondMoment, "days");
};

const TableRow = props => (
  <tr
    className={props.isSelected ? "selected-search-row" : undefined}
    onClick={props.handleClick}
  >
    <td scope="col">{props.booking.id}</td>
    <td scope="col">{props.booking.title}</td>
    <td scope="col">{props.booking.firstName}</td>
    <td scope="col">{props.booking.surname}</td>
    <td scope="col">{props.booking.email}</td>
    <td scope="col">{props.booking.roomId}</td>
    <td scope="col">{props.booking.checkInDate}</td>
    <td scope="col">{props.booking.checkOutDate}</td>
    <td scope="col">
      {daysBetweenDates(props.booking.checkOutDate, props.booking.checkInDate)}
    </td>
  </tr>
);

const SearchResults = props => {
  const [selectedRows, setSelectedRows] = useState([]);
  // removes or adds an index to the selectedRows state array variable
  const toggleSelectedAtPosition = index => {
    // check if the given index is in the selectedRows array
    if (selectedRows.includes(index)) {
      // if it is:
      // create a new array without this index
      const newArray = selectedRows.filter(i => i !== index);
      //setSelectedRows with this new array
      setSelectedRows(newArray);
    } else {
      // if it's NOT:
      // create a new array which includes this index
      const newArray = selectedRows.concat(index);
      // setSelectedRows with this new array
      setSelectedRows(newArray);
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check-in-Date</th>
          <th scope="col">Check-out-Date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, i) => (
          <TableRow
            key={i}
            booking={booking}
            handleClick={() => toggleSelectedAtPosition(i)}
            isSelected={selectedRows.includes(i)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
