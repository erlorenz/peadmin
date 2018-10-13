import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://press-express-server.herokuapp.com',
  baseURL: 'http://localhost:3001',
  // headers: {
  //   Authorization:
  //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWtAcHJlc3NleHByZXNzbHYuY29tIiwiaWF0IjoxNTM5NDUxMzg3LCJleHAiOjE1Mzk0NTQ5ODd9.5rzkrm4xLgXbNXhk_tgI7iTGsKJhkK_-QMHR4QnUfFw',
  // },
});

export default instance;
