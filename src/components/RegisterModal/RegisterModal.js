import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { Link, withRouter } from "react-router-dom";

const RegisterModal = ({
  handleCloseModal,
  isOpen,
  handleUserSubmit,
  activeModal,
}) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatarUrl, setAvatarUrl] = useState("");
  const handleAvatarUrlChange = (e) => {
    setAvatarUrl(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    handleUserSubmit({ email, password, name, avatarUrl });
  };

  return (
    <ModalWithForm
      className="new__user-modal"
      title="Sign Up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSignup={handleRegister}
      showButton={false}
    >
      <label className="modal__label" htmlFor="email">
        <p className="modal__header">Email*</p>
        <input
          id="email"
          className="modal__input modal__input_type_email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label className="modal__label" htmlFor="password">
        <p className="modal__header">Password*</p>
        <input
          id="password"
          className="modal__input modal__input_type_password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>

      <label className="modal__label" htmlFor="name">
        <p className="modal__header">Name</p>
        <input
          id="name"
          className="modal__input modal__input_type_name"
          type="text"
          name="name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label className="modal__label" htmlFor="avatarURL">
        <p className="modal__header">Avatar URL</p>
        <input
          id="avatarURL"
          className="modal__input modal__input_type_avatarURL"
          type="url"
          placeholder="Avatar URL"
          name="link"
          minLength="1"
          maxLength="300"
          value={avatarUrl}
          onChange={handleAvatarUrlChange}
        />
      </label>
      <div className="button-container">
        <button
          type="submit"
          onSubmit={handleRegister}
          className="next__signup-btn"
        >
          Next
        </button>
        <div className="login__signin">
          <Link to="login" className="signin__login-link">
            or Log In
          </Link>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
