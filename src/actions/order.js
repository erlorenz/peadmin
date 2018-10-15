import axios from 'axios';
import { ORDER_PENDING, ORDER_SUCCESS, ORDER_ERROR } from './types';

export const submitOrder = formData => async dispatch => {
  const submitData = { ...formData };
  try {
    // Validation
    if (
      !submitData.name ||
      !submitData.phone ||
      !submitData.email ||
      !submitData.stripeToken ||
      !submitData.description ||
      !submitData.totalPrice
    ) {
      throw new Error('Missing information, did not send to server');
    }

    // Start Spinner
    dispatch({ type: ORDER_PENDING });

    // Get Stripe Token
    // const tokenResponse = await createToken();
    // console.log(tokenResponse.token.id);
    // submitData.stripeToken = tokenResponse.token.id;

    // Make API call
    const response = await axios.post('/customOrder', submitData);
    console.log(response.data);
    // Remove Spinner and Show Returned Message
    dispatch({
      type: ORDER_SUCCESS,
      payload: { message: response.data.message },
    });
    // Handle Erorrs
  } catch (e) {
    dispatch({ type: ORDER_ERROR, payload: e.response.data.message });
  }
};
