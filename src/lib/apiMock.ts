import { QueryFunction } from '@tanstack/react-query';
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mockQuery: QueryFunction<any> = async ({ queryKey }) => {
  const [url] = queryKey;

  const { data } = await apiMock.get(url as string);
  return data;
};
