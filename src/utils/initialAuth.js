import axios from 'axios';

export default () => {
  // Check if there is any information in local storage
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const userName = localStorage.getItem('userName');

  // Axios URL and Header setup on load and refresh
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.defaults.headers.common['x-auth-token'] = token;

  return {
    authenticated: token,
    user,
    userName,
  };
};
