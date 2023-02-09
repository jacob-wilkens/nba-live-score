import * as dotenv from 'dotenv';
import * as env from 'env-var';

//Need to load env vars before requiring them
dotenv.config();

const PORT = env.get('PORT').required().asIntPositive();
const API_KEY = env.get('API_KEY').required().asString();
const API_HOST = env.get('API_HOST').required().asString();

export const config = {
  PORT,
  API_KEY,
  API_HOST,
};
