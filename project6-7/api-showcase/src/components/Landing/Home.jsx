import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="main"></div>
      <div className="country-container">
        <div className="one">
          <div className="shape widthOne"> CONTENT</div>
          <div className="shape widthTwo"></div>
          <div className="shape widthThree"></div>
          <div className="shape widthFour"></div>
          <div className="shape widthFive"></div>
        </div>
        <div className="one flipped">
          <div className="shape widthOne"> CONTENT</div>
          <div className="shape widthTwo"></div>
          <div className="shape widthThree"></div>
          <div className="shape widthFour"></div>
          <div className="shape widthFive"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
