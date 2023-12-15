import { processServerResponse } from "./utils";

const baseUrl = "http://localhost:3001";

export function request(url, options) {
  return fetch(url, options).then(processServerResponse);
}

export function getItems() {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);
}

export function addItem({ name, link, weather }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      link,
      weather,
    }),
  }).then(processServerResponse);
}

export function removeItem(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
  }).then(processServerResponse);
}
