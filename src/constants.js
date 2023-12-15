export const weatherOptions = [
  {
    url: require("./images/day/sunny.svg").default,
    day: true,
    type: "sunny",
  },

  {
    url: require("./images/day/day-cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("./images/night/night-cloudy.svg").default,
    day: false,
    type: "cloud",
  },
  {
    url: require("./images/night/clear-moon.svg").default,
    day: false,
    type: "moon",
  },
];
