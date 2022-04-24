import baseAxios, { AxiosRequestConfig } from 'axios';
import { API_KEY, API_URL } from '@env';

export const DefaultAxiosConfig: AxiosRequestConfig = {
  baseURL: API_URL + API_KEY,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
};

export const axios = baseAxios.create({
  ...DefaultAxiosConfig,
});
