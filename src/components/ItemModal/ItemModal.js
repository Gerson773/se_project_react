import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, handleDelete }) => {
  const { currentUser, loggedIn } = useContext(CurrentUserContext);
  const isOwner = selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = `delete__button-item ${
    isOwner ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;

  return (
    <div className={`modal `}>
      <div className="modal__content modal__container_item_view">
        <img
          className="modal__image"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <button
          className="close__button-item"
          type="button"
          onClick={onClose}
        ></button>
        <div className="modal__container_item-title">
          <h3 className="selected__card-name">{selectedCard.name}</h3>
          <div className="selected__card-weather">
            Weather type: {selectedCard.weather}
          </div>
          {loggedIn && (
            <button
              className={itemDeleteButtonClassName}
              onClick={() => handleDelete(selectedCard._id)}
            >
              Delete Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
