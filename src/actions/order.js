import axios from 'axios';
import {
  ORDER_PENDING,
  ORDER_SUCCESS,
  ORDER_ERROR,
  ORDER_CLEAR,
} from './types';

export const submitOrder = formData => async dispatch => {
  const submitData = { ...formData };
  try {
    // Validation
    if (
      !submitData.name ||
      !submitData.phone ||
      !submitData.email ||
      // !submitData.stripeToken ||
      !submitData.description ||
      !submitData.totalPrice
    ) {
      throw new Error('Missing information, did not send to server');
    }

    // Start Spinner
    dispatch({ type: ORDER_PENDING });

    //Change Dollar Amount
    submitData.totalPrice = submitData.totalPrice * 100;

    // Get Stripe Token
    // const tokenResponse = await createToken();
    // console.log(tokenResponse.token.id);
    // submitData.stripeToken = tokenResponse.token.id;
    console.log(submitData);
    // Make API call
    const response = await axios.post('/orderForm', submitData);
    console.log(response.data);
    // Remove Spinner and Show Returned Message
    dispatch({
      type: ORDER_SUCCESS,
      payload: { message: response.data.message },
    });

    setTimeout(() => {
      dispatch({
        type: ORDER_CLEAR,
      });
    }, 3000);
    // Handle Erorrs
  } catch (e) {
    dispatch({ type: ORDER_ERROR, payload: e.message });
  }
};
