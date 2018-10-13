import axios from '../axios-auth';
import router from '../router';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

export default {
  state: {
    jwt: null,
    userID: null,
    error: null,
  },

  getters: {
    //
    isAuthenticated: state => !!state.jwt,

    errorStatus: state => state.error,

    currentUser: state => state.userID,
  },

  mutations: {
    // Set user id and token on login
    LOGIN_SUCCESS(state, payload) {
      state.jwt = payload.jwt;
      state.userID = payload.userID;
      state.error = null;
    },
    // Clear user ID and token on logout
    LOGIN_CLEAR(state) {
      state.jwt = null;
      state.userID = null;
      state.error = null;
    },
    // Show error
    LOGIN_ERROR(state) {
      state.error = 'Incorrect email/password';
    },
  },

  actions: {
    //
    // ------------------Log In Action-----------------------------
    //
    async logIn({ commit, dispatch }, formData) {
      try {
        // Send login to server and wait for response
        const response = await axios.post('/auth/login', formData);

        const jwt = response.data.token;
        const userID = formData.email;

        // Add token and email to session storage
        localStorage.setItem('userID', userID);
        localStorage.setItem('jwt', jwt);

        // Add token/id into state and set headers
        commit('LOGIN_SUCCESS', { jwt, userID });
        axios.defaults.headers.common.Authorization = jwt;

        router.push('/dashboard');
      } catch (err) {
        // Clear everything on error
        dispatch('logOut');
        commit('LOGIN_ERROR');
        console.log(err.message);
      }
    },
    //
    // ----------------Log Out Action----------------------------
    //
    logOut({ commit }) {
      // Clear token and user ID from state
      commit('LOGIN_CLEAR');
      // Clear local storage items
      localStorage.removeItem('jwt');
      localStorage.removeItem('userID');
      // Remove axios headers
      delete axios.defaults.headers.common.Authorization;

      // Route to login page
      router.replace('/');
    },

    tryAutoLogin({ commit }) {
      try {
        const jwt = localStorage.getItem('jwt');
        const userID = localStorage.getItem('userID');

        if (!jwt) {
          throw Error('No JWT');
        }

        commit('LOGIN_SUCCESS', { jwt, userID });
        axios.defaults.headers.common.Authorization = jwt;

        router.push('/dashboard');
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
