import React, { useContext } from "react";

import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

// import { weatherOptions } from "../../utils/constants";

import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

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
};

export default WeatherCard;
