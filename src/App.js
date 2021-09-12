import React from "react";
import HeaderElement from "./components/Header";
import TouristInformationsCards from "./components/TouristInfo";
import Bookings from "./components/Bookings";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <HeaderElement />
      <TouristInformationsCards />
      <Bookings />
      <Footer
        footerArray={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
