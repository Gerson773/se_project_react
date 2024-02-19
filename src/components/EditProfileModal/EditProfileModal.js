import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({
  handleCloseModal,
  activeModal,
  currentUser,
  handleSaveProfile,
  onEditProfile,
}) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatarUrl, setAvatarUrl] = useState("");
  const handleAvatarUrlChange = (e) => {
    setAvatarUrl(e.target.value);
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    handleSaveProfile({ name, avatarUrl });
  };
  return (
    <ModalWithForm
      className="edit__profile-modal"
      title="Change profile data"
      onClose={handleCloseModal}
      isOpen={activeModal === "edit"}
      onSubmit={handleEditProfile}
      buttonText="Save changes"
      showButton={true}
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
          value={currentUser.name}
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
          value={currentUser.avatarUrl}
          onChange={handleAvatarUrlChange}
        />
      </label>
    </ModalWithForm>
  );
};
export default EditProfileModal;
