import axios from 'axios';

export default async (state, component) => {
  const { phone, email, company, name, description, totalPrice } = state;
  try {
    // Validate
    if (!phone || !email || !company || !name || !description || !totalPrice)
      throw new Error('not all data filled in');

    // Set Spinner
    component.setState({ orderStatus: 'pending' });

    // Set data in object
    const submitData = {
      phone,
      email,
      company,
      name,
      description,
      totalPrice: Math.round(totalPrice * 100),
      stripeToken: 'tok_visa',
    };

    // API call
    const response = await axios.post('/specialOrder', submitData);
    console.log(response.data);

    // Remove spinner
    component.setState({ orderStatus: 'success' });
  } catch (e) {
    let errorMessage = e.message || 'Something went wrong';
    if (e.request) errorMessage = 'Problem reaching the server';
    if (e.response) errorMessage = e.response.data.error;

    component.setState({ orderStatus: 'error', errorMessage: errorMessage });
  }
};
