export const defaultClothingItems = {
  items: [
    {
      _id: 1,
      name: "Hoodie",
      weather: "warm",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
    },
    {
      _id: 4,
      name: "T-Shirt",
      weather: "hot",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
    },
    {
      name: "Warm Scarf",
      link: "https://unsplash.com/photos/z5UuOcQjXCY/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAyMTAwMjQzfA&force=true",
      weather: "cold",
      _id: 9,
    },
    {
      name: "Winter Hat",
      link: "https://unsplash.com/photos/GsKf0FXVj3Y/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHdpbnRlciUyMGhhdHxlbnwwfHx8fDE3MDIzNjAzNjZ8MA&force=true",
      weather: "cold",
      _id: 10,
    },
    {
      name: "Cold Boots",
      link: "https://unsplash.com/photos/pj0A8jVrKWc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8ODB8fFdpbnRlciUyMEJvb3RzfGVufDB8fHx8MTcwMjM2MDQxM3ww&force=true",
      weather: "cold",
      _id: 11,
    },
    {
      name: "Jacket",
      link: "https://unsplash.com/photos/Fg15LdqpWrs/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzA4NDY3OTA4fA&force=true",
      weather: "cold",
      _id: 12,
    },
  ],
};

export const latitude = 41.8781;
export const longitude = -87.6298;
export const APIkey = "3fdcab5b4db1f7a8742bb88aa12fe5bf";

export const weatherOptions = [
  {
    url: require("../images/day/sunny.svg").default,
    day: true,
    type: "sunny",
  },

  {
    url: require("../images/day/day-cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/night/night-cloudy.svg").default,
    day: false,
    type: "cloud",
  },
  {
    url: require("../images/night/clear-moon.svg").default,
    day: false,
    type: "moon",
  },
];
