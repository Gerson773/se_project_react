// import { defaultClothingItems } from "../../utils/constants";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems, onCardLike }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const getWeatherType = () => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    } else if (currentTemperatureUnit === "C") {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 18 && temp <= 29) {
        return "warm";
      } else if (temp < 18) {
        return "cold";
      }
    }
  };

  const weatherType = getWeatherType();
  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard
        day={true}
        type="sunny"
        weatherTemp={temp}
        currentTemperatureUnit={currentTemperatureUnit}
      />
      <section className="card_section" id="card-sectopn">
        Today is {temp} ° {currentTemperatureUnit} / You may want to wear:
        <div className="card_items">
          {filteredCards?.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
              // id={item.id}
              link={item.link}
              name={item.name}
              weather={item.weather}
              onCardLike={onCardLike}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
