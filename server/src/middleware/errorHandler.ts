import type { NextFunction, Request, Response } from 'express';

import createError from 'http-errors';

declare type WebError = Error & { status?: number };

export const errorHandler = (err: WebError, req: Request, res: Response, next: NextFunction): void => {
  const { message, status, name } = err;
  // set locals, only providing error in development
  res.locals.message = message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //Validation error bail out
  if (status === 400) {
    res.status(status).json({ message });
    return;
  }

  // render the error page
  res.status(status || 500);
  res.render('error', { title: name, message });
};

export const errorNotFoundHandler = (req: Request, res: Response, next: NextFunction): void => {
  next(createError(404, { message: 'The page cannot be found' }));
};
