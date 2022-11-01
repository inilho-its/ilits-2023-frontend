import axios from 'axios';
const baseURL = 'https://inilho.its.ac.id/api';

export const apiMock = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

apiMock.defaults.withCredentials = false;

apiMock.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (config.headers) {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }
  return config;
});

export default apiMock;
