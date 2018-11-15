import axios from 'axios';

export default () => {
  // Check if there is any information in local storage
  const isAdmin = localStorage.getItem('isAdmin');
  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('userName');
  const email = localStorage.getItem('email');

  // Axios URL and Header setup on load and refresh
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.defaults.headers.common['x-auth-token'] = token;

  return {
    isAuthenticated: token,
    userName,
    isAdmin,
    email,
  };
};
