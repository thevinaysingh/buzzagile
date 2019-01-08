/* global fetch:true  */
/* eslint no-undef: "error" */
/* eslint no-underscore-dangle: 0 */

function statusHelper(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(response);
}

const getApiCall = (url, method, headers) => (
  fetch(url, {
    method,
    headers,
  })
    .then(statusHelper)
    .catch(error => error)
    .then(response => response)
);

const postApiCall = (url, method, headers, body) => (
  fetch(url, {
    method,
    headers,
    body,
  })
    .then(statusHelper)
    .catch(error => error)
    .then(response => response)
);

export const api = (url, method, headers, body) => (
  method === 'GET' ? getApiCall(url, method, headers) : postApiCall(url, method, headers, body)
);
