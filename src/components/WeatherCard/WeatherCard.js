import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const weatherOptions = [
  {
    url: require("../../images/day/sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../../images/day/day-cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../../images/night/night-cloudy.svg").default,
    day: false,
    type: "cloud",
  },
  {
    url: require("../../images/night/clear-moon.svg").default,
    day: false,
    type: "moon",
  },
];

// {
//   weatherData.temperature[currentTemperatureUnit];
// }

const WeatherCard = ({
  day,
  type,
  weatherTemp,
  currentTemperatureUnit = 0,
}) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <img src={imageSrcUrl} className="weather_image" alt="Weather Icon" />
      <div className="weather_info">
        {weatherTemp} ° {currentTemperatureUnit}
      </div>
    </section>
  );
};

export default WeatherCard;
