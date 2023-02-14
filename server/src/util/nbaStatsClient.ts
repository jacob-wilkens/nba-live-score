import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://stats.nba.com/stats/',
});

instance.interceptors.request.use((config) => {
  const { headers } = config;

  headers.set('Accept', 'application/json, text/plain, */*');
  headers.set('Accept-Encoding', 'gzip, deflate, br');
  headers.set('Accept-Language', 'en-US,en;q=0.9');
  headers.set('Cache-Control', 'no-cache');
  headers.set('Connection', 'keep-alive');
  headers.set('Host', 'stats.nba.com');
  headers.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0');
  headers.set('Referer', 'https://stats.nba.com/');
  headers.set('Pragma', 'no-cache');
  headers.set('x-nba-stats-origin', 'stats');
  headers.set('x-nba-stats-token', 'true');

  return config;
});

export default instance;
