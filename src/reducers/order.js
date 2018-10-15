import {
  ORDER_ERROR,
  ORDER_PENDING,
  ORDER_SUCCESS,
  ORDER_CLEAR,
} from '../actions/types';

const initialState = {
  status: '',
  errorMessage: '',
  message: '',
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    case ORDER_PENDING:
      return { ...state, status: 'pending' };
    //
    case ORDER_SUCCESS:
      return { ...state, status: 'success' };
    //
    case ORDER_CLEAR:
      return { ...state, status: '' };
    //
    case ORDER_ERROR:
      return { ...state, status: 'error', errorMessage: action.payload };
    //
    default:
      return state;
  }
};

export default orderReducer;
