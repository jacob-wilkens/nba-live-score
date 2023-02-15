import type { NextFunction, Request, Response } from 'express';

import createError from 'http-errors';
import type { AnyZodObject } from 'zod';
import { ZodError } from 'zod';

export function validate(schema: AnyZodObject) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      let messages: string[] = [];

      if (error instanceof ZodError)
        messages = error.errors.map((err) => {
          const { path, message } = err;

          return `${path.join(' -> ')}: ${message}`;
        });

      next(createError(400, { message: messages.length === 0 ? 'Bad Request' : messages }));
    }
  };
}
