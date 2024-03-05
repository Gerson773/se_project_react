import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import { Link, withRouter } from "react-router-dom";

const LoginModal = ({
  onClose,
  isOpen,
  handleUserLogin,
  onSignUp,
  handleSignUpModal,
}) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    handleUserLogin({ email, password });
  };

  return (
    <ModalWithForm
      className="login__modal"
      title="Login"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleLogin}
      showButton={false}
    >
      <label className="modal__label" htmlFor="email">
        <p className="modal__header">Email</p>
        <input
          id="email"
          className="modal__input modal__input_type_login-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label className="modal__label" htmlFor="password">
        <p className="modal__header">Password</p>
        <input
          id="password"
          className="modal__input modal__input_type_login-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>
      <div className="button-container">
        <button
          type="submit"
          onClick={handleLogin}
          className="next__signup-btn"
        >
          Next
        </button>
        <div>
          <button
            type="button"
            className="register__login-link"
            onClick={onSignUp}
          >
            or Register
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default withRouter(LoginModal);
