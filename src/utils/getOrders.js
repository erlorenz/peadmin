import axios from 'axios';

export default async (page, component) => {
  try {
    const response = await axios.get(`/admin/${page}`);
    console.log('the response:', response.data);
    component.setState({ orders: response.data, error: false });
  } catch (e) {
    component.setState({ error: true });
    console.log(e.response.data.message);
  }
};
