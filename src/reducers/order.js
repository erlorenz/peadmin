import { ORDER_ERROR, ORDER_PENDING, ORDER_SUCCESS } from '../actions/types';

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

    case ORDER_ERROR:
      return { ...state, status: 'error' };
    //
    default:
      return state;
  }
};

export default orderReducer;
