import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customerProfileData, setCustomerProfileData] = useState();

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/customers/" + props.id)
      .then(res => res.json())
      .then(data => setCustomerProfileData(data));
  }, [props.id]);

  if (!customerProfileData) return <p>Loading...</p>;
  return (
    <ul>
      <li>ID: {customerProfileData.id}</li>
      <li>Email: {customerProfileData.email}</li>
      {customerProfileData.vip && (
        <li>PhoneNumber: {customerProfileData.phoneNumber}</li>
      )}
    </ul>
  );
};

export default CustomerProfile;
