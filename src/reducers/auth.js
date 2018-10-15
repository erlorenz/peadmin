import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const initialState = {
  authenticated: '',
  errorMessage: '',
  user: '',
  userName: '',
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload.token,
        user: action.payload.user,
        userName: action.payload.userName,
      };
    //
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    //
    default:
      return state;
  }
};

export default authReducer;
