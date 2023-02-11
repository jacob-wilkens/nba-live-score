import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cdn.nba.com/static/json/liveData/',
});

instance.interceptors.request.use((config) => {
  const { headers } = config;

  headers.set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9');
  headers.set('Accept-Encoding', 'gzip, deflate, br');
  headers.set('Accept-Language', 'en-US,en;q=0.9');
  headers.set('Cache-Control', 'max-age=0');
  headers.set('Connection', 'keep-alive');
  headers.set('Host', 'cdn.nba.com');
  headers.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36');

  return config;
});

export default instance;
