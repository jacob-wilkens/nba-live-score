import { config } from '@config';
import axios from 'axios';

const { API_HOST, API_KEY } = config;

const instance = axios.create({
  baseURL: 'https://api-nba-v1.p.rapidapi.com',
});

instance.interceptors.request.use((config) => {
  const { headers } = config;

  headers.set('X-RapidAPI-Key', API_KEY);
  headers.set('X-RapidAPI-Host', API_HOST);

  return config;
});

export default instance;
