import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

import { weatherOptions } from "../../constants";

const WeatherCard = ({
  day,
  type,
  weatherTemp,
  currentTemperatureUnit = 0,
}) => {
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = weatherOption ? weatherOption.url : "";
  return (
    <section className="weather" id="weather">
      <img src={imageSrcUrl} className="weather_image" alt="Weather Icon" />
      <div className="weather_info">
        {weatherTemp} ° {currentTemperatureUnit}
      </div>
    </section>
  );

  // const imageSrc = weatherOptions.filter((i) => {
  //   return i.day === day && i.type === type;
  // });

  // const imageSrcUrl = weatherOption[0].url || "";
  // return (
  //   <section className="weather" id="weather">
  //     <img src={imageSrcUrl} className="weather_image" alt="Weather Icon" />
  //     <div className="weather_info">
  //       {weatherTemp} ° {currentTemperatureUnit}
  //     </div>
  //   </section>
  // );
};

export default WeatherCard;
