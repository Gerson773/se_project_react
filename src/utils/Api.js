const baseUrl =
  "https://my-json-server.typicode.com/gerson773/se_project_react";

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

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

export function addItem(name, link, weather) {
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

// function itemsApi() {
//   return {
//     getItem: () => {
//       return fetch(`${baseUrl}/items`).then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(`Error: ${res.status}`);
//       });
//     },

//     addItem: (name, imageUrl, weather) => {
//       return fetch(`${baseUrl}/items`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           imageUrl,
//           weather,
//         }),
//       }).then((res) => {
//         console.log(res);
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(`Error: ${res.status}`);
//       });
//     },

//     removeItem: (id) => {
//       console.log(id);
//       return fetch(`${baseUrl}/items/${id}`, {
//         method: "DELETE",
//       }).then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(`Error: ${res.status}`);
//       });
//     },
//   };
// }

// export default itemsApi;
