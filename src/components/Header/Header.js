import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import UserPlaceHolder from "../UserPlaceHolder/UserPlaceHolder";

const Header = ({
  onCreateModal,
  setLocation,
  onSignUp,
  onLogin,
  isLoggedIn,
  currentUser,
}) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <div className="current__date">
            {currentDate}, {setLocation}
          </div>
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="add__clothes-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        {isLoggedIn ? (
          <Link to="/profile" className="header__user-name">
            {currentUser.name}
          </Link>
        ) : (
          <div>
            <Link
              to="/signup"
              className="sign__up-button"
              type="text"
              onClick={onSignUp}
            >
              Sign Up
            </Link>
          </div>
        )}
        <div>
          {isLoggedIn ? (
            currentUser.avatar ? (
              <Link to="/profile">
                <img
                  src={currentUser.avatar}
                  className="header__avatar-logo"
                  alt="Avatar"
                />
              </Link>
            ) : (
              <UserPlaceHolder userName={currentUser.name} />
            )
          ) : (
            <div>
              <Link to="/login" className="log__in-button" onClick={onLogin}>
                Log In
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
