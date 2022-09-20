import axios from 'axios';

const DOMAIN = 'http://localhost:5000';

export const api = axios.create({
  baseURL: DOMAIN,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
//
export const apiWithDomain = axios.create({
  baseURL: DOMAIN,
  withCredentials: true,
});
