import type { NextFunction, Request, Response } from 'express';

import type { LiveData } from '@types';
import nbaClient from '@util/nbaClient';

const SCOREBOARD_URL = '/scoreboard/todaysScoreboard_00.json';

const getLive = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      data: { scoreboard },
    } = await nbaClient.get<LiveData>(SCOREBOARD_URL, { params: { live: 'all' } });

    res.json({ data: scoreboard });
  } catch (error) {
    next(error);
  }
};

export { getLive };
