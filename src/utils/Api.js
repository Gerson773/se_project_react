import { processServerResponse, request } from "./utils";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.weatherchi.hollandweather.net"
    : "http://localhost:3001";

export function getItems() {
  return fetch(`${baseUrl}/items`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);
}

export function addItem({ name, link, weather, token }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl: link,
    }),
  }).then(processServerResponse);
}

export function removeItem(_id, token) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
}

export const addCardLike = (_id, token) => {
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};

export const removeCardLike = (_id, token) => {
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};
