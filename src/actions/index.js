import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const login = (formProps, rerouteToAdmin) => async dispatch => {
  try {
    const response = await axios.post('/auth/login', formProps);
    const jwt = response.data.token;
    dispatch({
      type: AUTH_USER,
      payload: { token: jwt, user: formProps.email },
    });
    localStorage.setItem('user', formProps.email);
    localStorage.setItem('token', jwt);
    axios.defaults.headers.common.Authorization = jwt;
    rerouteToAdmin();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: e.response.data.message });
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
    payload: { token: '', user: '' },
  };
};
