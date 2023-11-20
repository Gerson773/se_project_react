// import logo from "./images/logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import ItemModal from "./ItemModal/ItemModal";
import { getForecastWeather } from "../utils/weatherApi";
import { parseWeatherData } from "../utils/weatherApi";
import { parseLocation } from "../utils/weatherApi";

function App() {
  // const weatherTemp = "30°F";
  const [activeModal, setActiveModal] = useState("");
  const [selectCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      const city = parseLocation(data);

      console.log(temperature);
      setTemp(temperature);
      setLocation(city);
    });
  }, []);

  return (
    <div>
      <Header
        onCreateModal={handleCreateModal}
        temp={temp}
        setLocation={location}
      />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          className="new__garment-modal"
          title="New Garment"
          onClose={handleCloseModal}
        >
          <p className="modal__header">Name</p>

          <label className="modal__label">
            <input
              className="modal__input modal__input_type_name"
              type="text"
              name="name"
              placeholder="Name"
              minLength="1"
              maxLength="30"
            />{" "}
          </label>

          <p className="modal__header">Image</p>
          <label className="modal__label">
            <input
              className="modal__input modal__input_type_image"
              type="url"
              placeholder="Image URL"
              name="link"
              minLength="1"
              maxLength="30"
            />{" "}
          </label>
          <p className="weather__type-title">Select the Weather Type:</p>
          <div className="weather__type-container">
            <div className="weather__type-option">
              <input
                className="weather__radio-input"
                type="radio"
                id="hot"
                value="hot"
              />
              <label htmlFor="hot" className="weather__radio-label">
                Hot
              </label>
            </div>
            <div>
              <input
                className="weather__radio-input"
                type="radio"
                id="warm"
                value="warm"
              />
              <label htmlFor="warm" className="weather__radio-label">
                Warm
              </label>
            </div>
            <div>
              <input
                className="weather__radio-input"
                type="radio"
                id="warm"
                value="warm"
              />
              <label htmlFor="cold" className="weather__radio-label">
                Cold
              </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
