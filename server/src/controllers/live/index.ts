import type { NextFunction, Request, Response } from 'express';

import nbaClient from '@util/nbaClient';

const getLive = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data } = await nbaClient.get('/games', { params: { live: 'all' } });

    res.json({ data });
  } catch (error) {
    next(error);
  }
};

export { getLive };
