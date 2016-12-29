export function getFetch(url) {
  // console.log(url);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(response => {
      resolve(response);
    })
    .catch(error => {
      reject(error);
    });
  });
}

export function postFetch(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(response => response);
}

export function deleteFetch(url) {
  return fetch(url, {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(response => response);
}
