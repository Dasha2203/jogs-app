import axios from 'axios';

const baseURL = 'https://jogs-tracker-production.up.railway.app/';

export const axiosClient = axios.create({
  baseURL,
});

export const authAxios = axios.create({
  baseURL,
});

authAxios.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('token');

    if (!accessToken) return config;

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);