import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://press-express-server.herokuapp.com',
  // baseURL: 'http://localhost:3001',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWtAcHJlc3NleHByZXNzbHYuY29tIiwiaWF0IjoxNTM5Mzk2MjAwLCJleHAiOjE1MzkzOTk4MDB9.K8o05zc63XGabMKRxd1Y3yAwM7YJI42D-_Q_bywOEDg',
  },
});

export default instance;
