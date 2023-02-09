import express from 'express';

import { config } from '@config';
import { errorHandler, errorNotFoundHandler } from '@middleware';
import routes from '@routes';
import logger from 'morgan';
import path from 'path';

const { PORT } = config;

// Create Express server
export const app = express();

// Express configuration
app.set('port', PORT);
app.set('views', path.join(__dirname, '../views'));

app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes);

app.use(errorNotFoundHandler);
app.use(errorHandler);
