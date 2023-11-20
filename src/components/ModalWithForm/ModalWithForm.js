import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="close__button-x"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title"> {title} </h3>
        <form>
          {children}{" "}
          <button className="add__garment-btn" type="submit">
            {" "}
            {buttonText}{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
