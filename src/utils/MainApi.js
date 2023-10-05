export const BASE_URL = 'https://api.denis-diachenko.grad.nomoreparties.co';

export const checkRequestResult = async (res) => {
  if (res.ok) {
      return res.json();
  }
  let text = await new Response(res.body).text();

  return Promise.reject(`Ошибка: ${res.status}, ${JSON.parse(text).message}`);
}

export const registerUser = (password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email, name})
  })
  .then((res) => {
    return checkRequestResult(res);
  })
};

export const loginUser = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
  .then((res) => {
    return checkRequestResult(res);
  })
};

export const getUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((res) => {
    return checkRequestResult(res);
  })
}

export const updateUserInfo = (name, email, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({name, email})
  })
  .then((res) => {
    return checkRequestResult(res);
  })
}