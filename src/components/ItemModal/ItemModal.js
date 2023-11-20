import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");

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
          <div className="selected__card-name">{selectedCard.name}</div>
          <div className="selected__card-weather">
            Weather type: {selectedCard.weather}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
