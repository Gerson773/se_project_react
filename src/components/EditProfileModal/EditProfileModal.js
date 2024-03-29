import React, { useState, useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ handleCloseModal, isOpen, handleSaveProfile }) => {
  const { loggedIn, currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setName(currentUser.name || "");
    setAvatar(currentUser.avatar || "");
  }, [currentUser]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarUrlChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    handleSaveProfile({ name, avatar });
  };

  return (
    <ModalWithForm
      className="edit__profile-modal"
      title="Change profile data"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleEditProfile}
      buttonText="Save changes"
    >
      <label className="modal__label" htmlFor="name">
        <p className="modal__header">Name*</p>
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
          required
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
          value={avatar}
          onChange={handleAvatarUrlChange}
        />
      </label>
      <div className="button-container">
        <button type="submit" className="add__garment-btn">
          Save changes
        </button>
      </div>
    </ModalWithForm>
  );
};
export default EditProfileModal;
