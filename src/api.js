import axios from 'axios';

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://simpleblogapi.herokuapp.com`,
    timeout: 1000 * 5,
  });

  return api;
};
