import express from 'express';

import { errorHandler, errorNotFoundHandler } from '@middleware';
import logger from 'morgan';
import path from 'path';

// Create Express server
export const app = express();

// Express configuration
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, '../views'));

app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Hi');
});

app.use(errorNotFoundHandler);
app.use(errorHandler);
