export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const checkRequestResult = (res) => {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getFilms = () => {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    return checkRequestResult(res);
  })
};