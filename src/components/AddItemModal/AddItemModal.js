import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, isOpen, handleAddItemSubmit }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [weatherType, setWeatherType] = useState("");
  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItemSubmit({ name, link, weatherType });
  };

  return (
    <ModalWithForm
      className="new__garment-modal"
      title="New Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Add Garment"
    >
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

      <label className="modal__label" htmlFor="imageLink">
        <p className="modal__header">image</p>
        <input
          id="imageLink"
          className="modal__input modal__input_type_image"
          type="url"
          placeholder="Image URL"
          name="link"
          minLength="1"
          maxLength="300"
          value={link}
          onChange={handleUrlChange}
        />
      </label>
      <p className="weather__type-title">Select the Weather Type:</p>
      <div className="weather__type-container">
        <div className="weather__type-option">
          <input
            className="weather__radio-input"
            name="name"
            type="radio"
            id="hot"
            value="hot"
            checked={weatherType === "hot"}
            onChange={handleWeatherTypeChange}
          />
          <label htmlFor="hot" className="weather__radio-label">
            Hot
          </label>
        </div>
        <div>
          <input
            className="weather__radio-input"
            name="name"
            type="radio"
            id="warm"
            value="warm"
            checked={weatherType === "warm"}
            onChange={handleWeatherTypeChange}
          />
          <label htmlFor="warm" className="weather__radio-label">
            Warm
          </label>
        </div>
        <div>
          <input
            className="weather__radio-input"
            name="name"
            type="radio"
            id="cold"
            value="cold"
            checked={weatherType === "cold"}
            onChange={handleWeatherTypeChange}
          />
          <label htmlFor="cold" className="weather__radio-label">
            Cold
          </label>
          <div className="button-container">
            <button type="submit" className="add__garment-btn">
              Add Garment
            </button>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
