import "./ModalWithForm.css";

// const isButtonDisabled = true;
const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button className="close__button-x" type="button" onClick={onClose} />
        <h3 className="modal__title"> {title} </h3>
        <form onSubmit={onSubmit}>
          {children}
          <button
            className="add__garment-btn"
            type="submit"
            // disabled={isButtonDisabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
