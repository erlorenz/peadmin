import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://press-express-server.herokuapp.com',
  // baseURL: 'http://localhost:3001',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWtAcHJlc3NleHByZXNzbHYuY29tIiwiaWF0IjoxNTM5MzkyMjEzLCJleHAiOjE1MzkzOTU4MTN9.JIgUJyR6RNN1XXf2eZfr9Zf1RzdIdwFYvtolPVPpcrY',
  },
});

export default instance;
