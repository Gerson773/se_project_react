export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export function request(url, options) {
  return fetch(url, options).then(processServerResponse);
}
