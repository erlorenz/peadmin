import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://press-express-server.herokuapp.com',
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWtAcHJlc3NleHByZXNzbHYuY29tIiwiaWF0IjoxNTM5NDE2OTQ0LCJleHAiOjE1Mzk0MjA1NDR9.zAJijw8A82xA4u0Dfmfw9EL10HhYYFeBCvF_n7ziByw',
  },
});

export default instance;
