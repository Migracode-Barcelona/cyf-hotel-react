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

const SearchResults = ({ results, onShowCustomerProfile }) => {
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
  const [sortedBy, setSortedBy] = useState({
    order: "ASC",
    field: "id"
  });

  //const { order, field } = sortedBy;

  useEffect(() => {
    console.log("fieldName", sortedBy.field);

    results.sort((a, b) => {
      const titleNameA = a[sortedBy.field];
      const titleNameB = b[sortedBy.field];
      // return 0
      // return > 1
      // return < 1
      // 5, 9
      // titleNameA 10
      // titleNameB 5
      // titleNameA - titleNameB (5) DSC
      // (titleNameA - titleNameB) * -1 (-5) ASC
      let mult;
      // sortedBy.order ==> 'ASC' || 'DSC'
      if (sortedBy.order !== "ASC") {
        mult = -1;
      } else {
        mult = 1;
      }

      if (isNaN(titleNameA)) {
        // TODO: use the sortby.order
        return titleNameA.localeCompare(titleNameB) * mult;
      }

      return (titleNameA - titleNameB) * mult;
    });

    setResult(results);
  }, [results, sortedBy]);

  const clickHandler = e => {
    let fieldClicked = e.target.getAttribute("value");

    if (sortedBy.field !== fieldClicked) {
      setSortedBy(previousState => {
        const newState = {
          ...previousState
        };

        newState.field = fieldClicked;

        return newState;
      });
    } else {
      setSortedBy(previousState => {
        const newState = {
          ...previousState
        };
        if (sortedBy.order !== "ASC") {
          newState.order = "ASC";

          return newState;
        } else {
          newState.order = "DSC";
          return newState;
        }
      });
    }
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
            setShowProfile={val => onShowCustomerProfile(val)}
            handleClick={() => toggleSelectedAtPosition(i)}
            isSelected={selectedRows.includes(i)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
