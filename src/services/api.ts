import axios from 'axios';

const api = axios.create({
  baseURL: 'https://foody-api-xi.vercel.app/api/',
  // withCredentials: true,
  headers: {
    Accept: 'application/json',
    'content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // or sessionStorage
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  } else if (config.headers) {
    delete config.headers.Authorization;
  }
  return config;
});

// Optional: auto-redirect to login on 401
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // e.g. token expired
      // window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default api;
