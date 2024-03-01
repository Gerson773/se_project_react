import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import UserPlaceHolder from "../UserPlaceHolder/UserPlaceHolder";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({ onCreateModal, setLocation, onSignUp, onLogin }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { currentUser, loggedIn } = useContext(CurrentUserContext);

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
      <div className="header__signin-container">
        <ToggleSwitch />

        {loggedIn && (
          <div>
            <button
              className="add__clothes-button"
              type="text"
              onClick={onCreateModal}
            >
              + Add Clothes
            </button>
          </div>
        )}
        {loggedIn ? (
          currentUser && currentUser.name ? (
            <Link to="/profile" className="header__avatar-name">
              {currentUser.name}
            </Link>
          ) : (
            <div>Welcome</div>
          )
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
          {loggedIn ? (
            currentUser && currentUser.avatar ? (
              <Link to="/profile">
                <img
                  src={currentUser.avatar}
                  className="header__avatar-signedin"
                  alt="Avatar"
                />
              </Link>
            ) : (
              <div>
                <UserPlaceHolder userName={currentUser.name} />
              </div>
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
