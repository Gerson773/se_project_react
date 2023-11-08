// import React from "react";
import "./Header.css";

const Header = () => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src="./images/Logo.svg" alt="logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text"> Add New Clothes</button>
        </div>
        <div>name</div>
        <div>
          <img src="./images/avatar.svg" alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
