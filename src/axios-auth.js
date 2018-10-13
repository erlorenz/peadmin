import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://press-express-server.herokuapp.com',
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWtAcHJlc3NleHByZXNzbHYuY29tIiwiaWF0IjoxNTM5NDIwOTM5LCJleHAiOjE1Mzk0MjQ1Mzl9.WBhcZGHjyXeQkMB2RfdkTe1xHHl2pBFV7r_GtUfbrsQ',
  },
});

export default instance;
