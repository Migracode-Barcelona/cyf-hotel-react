import React from "react";
import moment from "moment";

const daysBetweenDates = (a, b) => {
  const firstMoment = moment(a);
  const secondMoment = moment(b);

  return firstMoment.diff(secondMoment, "days");
};

const TableRow = props => (
  <tr>
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
        {props.results.map((booking, index) => (
          <TableRow key={index} booking={booking} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
