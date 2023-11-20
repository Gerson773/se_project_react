import React from "react";
import "./Header.css";

const Header = ({ onCreateModal, setLocation }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/logo.svg").default} alt="logo" />
        </div>
        <div>
          <div className="current__date">
            {currentDate}, {setLocation}
          </div>
        </div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="add__clothes-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <div className="header__avatar-name">Gerson G</div>
        <div>
          <img src={require("../../images/avatar.svg").default} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
