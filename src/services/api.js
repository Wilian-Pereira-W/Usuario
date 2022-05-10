import axios from 'axios';

const api = axios.create({
  baseURL: 'https://devfront.vize.solutions/api/',
});

export default api;
