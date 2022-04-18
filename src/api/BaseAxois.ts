import baseAxios, { AxiosRequestConfig } from 'axios';
import { API_URL } from '@env';

export const DefaultAxiosConfig: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  responseType: 'json',
};

export const axios = baseAxios.create({
  ...DefaultAxiosConfig,
});
