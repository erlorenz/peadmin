import axios from 'axios';

export default async page => {
  try {
    const response = await axios.get(`/admin/${page}`);
    console.log('the response:', response.data);
    this.setState({ orders: response.data, error: false });
  } catch (e) {
    this.setState({ error: true });
    console.log(e.response.data.message);
  }
};
