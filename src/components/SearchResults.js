import React, { useState, useEffect } from "react";
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
    key={props.booking.id}
  >
    <td>{props.booking.id}</td>
    <td>{props.booking.title}</td>
    <td>{props.booking.firstName} </td>
    <td>{props.booking.surname}</td>
    <td>{props.booking.email}</td>
    <td>{props.booking.roomId}</td>
    <td>{props.booking.checkInDate}</td>
    <td>{props.booking.checkOutDate}</td>
    <td>
      {daysBetweenDates(props.booking.checkOutDate, props.booking.checkInDate)}
    </td>
    <td>
      <button onClick={() => props.setShowProfile(props.booking.id)}>
        Show Profile
      </button>
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
  const [result, setResult] = useState([]);
  // const [sorted, setIsSorted] = useState(false);
  const [sortedBy, setSortedBy] = useState({
    order: "ASC",
    field: "firstName"
  });
  useEffect(() => {
    let results = [...props.results];
    console.log("fieldName", sortedBy.field);

    results.sort((a, b) => {
      const titleNameA = a[sortedBy.field];
      const titleNameB = b[sortedBy.field];
      if (isNaN(titleNameA)) {
        // TODO: use the sortby.order
        return titleNameA.localeCompare(titleNameB);
      }
      return titleNameA - titleNameB;
    });

    setResult(results);
  }, [props.results, sortedBy]);

  const clickHandler = e => {
    let fieldClicked = e.target.getAttribute("value");

    // add code here to figure out which field was actually clicked
    // let state = {field: 'firstName', order: 'ASC'}
    setSortedBy(
      ({
        title,
        firstName,
        surname,
        email,
        roomId,
        checkInDate,
        checkOutDate
      }) => {
        // const newState = { ...state };
        const newState = {
          title,
          firstName,
          surname,
          email,
          roomId,
          checkInDate,
          checkOutDate
        };
        // TODO: set order

        newState.field = fieldClicked;

        return newState;
      }
    );
  };
  console.log(result);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" onClick={clickHandler} className="toPoint" value="id">
            Id
          </th>
          <th
            scope="col"
            onClick={clickHandler}
            className="toPoint"
            value="title"
          >
            Title
          </th>
          <th
            scope="col"
            onClick={clickHandler}
            className="toPoint"
            value="firstName"
          >
            First Name
          </th>
          <th
            scope="col"
            onClick={clickHandler}
            className="toPoint"
            value="surname"
          >
            Surname
          </th>
          <th
            scope="col"
            onClick={clickHandler}
            className="toPoint"
            value="email"
          >
            Email
          </th>
          <th
            scope="col"
            onClick={clickHandler}
            className="toPoint"
            value="roomId"
          >
            Room Id
          </th>
          <th
            scope="col"
            onClick={clickHandler}
            className="toPoint"
            value="checkInDate"
          >
            Check-in-Date
          </th>
          <th
            scope="col"
            onClick={clickHandler}
            className="toPoint"
            value="checkOutDate"
          >
            Check-out-Date
          </th>
          <th
            scope="col"
            onClick={clickHandler}
            className="toPoint"
            value="nights"
          >
            Nights
          </th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {result.map((booking, i) => (
          <TableRow
            key={booking.id}
            booking={booking}
            setShowProfile={val => props.onShowCustomerProfile(val)}
            handleClick={() => toggleSelectedAtPosition(i)}
            isSelected={selectedRows.includes(i)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
