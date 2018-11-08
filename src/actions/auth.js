import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const login = formData => async dispatch => {
  try {
    const response = await axios.post('/auth/login', formData);
    const jwt = response.data.token;
    const name = response.data.userName;
    axios.defaults.headers.common.Authorization = jwt;
    dispatch({
      type: AUTH_USER,
      payload: { token: jwt, user: formData.email, userName: name },
    });
    localStorage.setItem('user', formData.email);
    localStorage.setItem('token', jwt);
    localStorage.setItem('userName', name);
  } catch (e) {
    let errorMessage = 'Failure with axios sending';
    if (e.response) {
      errorMessage = e.response.data.message;
    } else if (e.request) {
      errorMessage = 'No response from server.';
    }
    dispatch({ type: AUTH_ERROR, payload: errorMessage });
    setTimeout(() => {
      dispatch({ type: AUTH_ERROR, payload: '' });
    }, 5000);
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  delete axios.defaults.headers.common.Authorization;
  return {
    type: AUTH_USER,
    payload: { token: '', user: '', userName: '' },
  };
};
