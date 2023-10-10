import { BASE_URL_BEAT } from "./constants";

export const checkRequestResult = (res) => {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getFilms = () => {
  return fetch(BASE_URL_BEAT, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    return checkRequestResult(res);
  })
};