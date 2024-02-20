import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather } from "../../utils/weatherApi";
import { parseWeatherData } from "../../utils/weatherApi";
import { parseLocation } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import {
  getItems,
  addItem,
  removeItem,
  addCardLike,
  removeCardLike,
} from "../../utils/Api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { verifyToken } from "../../utils/auth";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    console.log("Closing modal...");
    setActiveModal("");
    history.push("/");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleSignupModal = () => {
    setActiveModal("signup");
  };

  const handleSignUp = (user) => {
    auth
      .registration(user)
      .then((newUser) => {
        console.log(newUser);
        setLoggedIn(true);
        setCurrentUser(newUser.data);
        handleCloseModal();
        console.log(newUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleLogIn = (user) => {
    auth
      .authorize(user)
      .then((res) => {
        console.log(res);
        setLoggedIn(true);
        setCurrentUser(res.data);
        handleCloseModal();
        if (res.token) {
          localStorage.setItem("jwt", res.token);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    console.log({ jwt });
    if (jwt) {
      localStorage.setItem("jwt", jwt);
      auth
        .verifyToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser({ currentUser: res.data });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, []);

  const handleUpdateUser = (name, avatar) => {
    return auth
      .updateUser(name, avatar)
      .then(() => {
        verifyToken();
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onAddItem = (values) => {
    console.log(values);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        const city = parseLocation(data);

        setTemp(temperature);
        setLocation(city);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const handleAddItemSubmit = ({ name, link, weatherType }) => {
    const item = { _id: null, name, link, weather: weatherType };
    const token = localStorage.getItem("jwt");

    addItem(item, token)
      .then((res) => {
        const newItem = { ...item, _id: res._id };
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteItem = (id) => {
    const token = localStorage.getItem("jwt");

    removeItem(id, token)
      .then(() => {
        const filteredCards = clothingItems.filter((card) => card._id !== id);
        setClothingItems(filteredCards);
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleCardLike = ({ id, isLiked, setIsLiked }) => {
    isLiked
      ? addCardLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard.data : c))
            );
            setIsLiked(true);
          })
          .catch((err) => console.log(err))
      : removeCardLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard.data : c))
            );
          })
          .catch((error) => {
            console.error("Error", error);
          });
  };

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <CurrentUserContext.Provider value={currentUser} loggedIn={loggedIn}>
          <Header
            onCreateModal={handleCreateModal}
            onSignUp={handleSignupModal}
            onLogin={handleLoginModal}
            temp={temp}
            setLocation={location}
            loggedIn={loggedIn}
            currentUser={currentUser}
          />

          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onCardLike={handleCardLike}
              />
            </Route>

            <Route path="/signup">
              <RegisterModal
                onClose={handleCloseModal}
                handleUserSubmit={handleSignUp}
              />
            </Route>
            <Route path="/login">
              <LoginModal
                onClose={handleCloseModal}
                handleUserLogin={handleLogIn}
              />
            </Route>
            <ProtectedRoute path="/profile">
              <Profile
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
                clothingItems={clothingItems}
                onEditProfile={handleUpdateUser}
              />
            </ProtectedRoute>
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={onAddItem}
              handleAddItemSubmit={handleAddItemSubmit}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectCard}
              onClose={handleCloseModal}
              handleDelete={handleDeleteItem}
            />
          )}
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
