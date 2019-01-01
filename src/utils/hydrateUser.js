import axios from 'axios';

export default () => {
  const user = {
    name: localStorage.getItem('name'),
    token: localStorage.getItem('token'),
    email: localStorage.getItem('email'),
    access_level: localStorage.getItem('access_level'),
  };

  if (user.token) user.isAuthenticating = true;

  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.defaults.headers.common['x-auth-token'] = user.token;

  return user;
};
