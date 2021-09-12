import React from "react";

const Footer = props => {
  return (
    <ul className="footer">
      {props.footerArray.map((str, index) => (
        <li key={index}>{str}</li>
      ))}
    </ul>
  );
};

export default Footer;
