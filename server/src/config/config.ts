import * as dotenv from 'dotenv';
import * as env from 'env-var';

//Need to load env vars before requiring them
dotenv.config();

const PORT = env.get('PORT').required().asIntPositive();

export const config = { PORT };
