import axios from 'axios';

export default async (page, component) => {
  try {
    const response = await axios.get(`/admin/${page}`);
    console.log('list:', page, 'the response:', response.data);
    component.setState({ orders: response.data, error: false });
  } catch (e) {
    component.setState({ error: true });
    if (e.response) console.log(e.response.data.message);
    else if (e.request) console.log('Server not responding');
    else console.log('Something went wrong with request');
  }
};
