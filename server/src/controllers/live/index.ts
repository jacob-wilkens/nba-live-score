import type { NextFunction, Request, Response } from 'express';

import { readFile } from 'fs/promises';
import path from 'path';

//import type { LiveData } from '@types';
//import nbaClient from '@util/nbaClient';

//const SCOREBOARD_URL = '/scoreboard/todaysScoreboard_00.json';

const getLive = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const {
    //   data: { scoreboard },
    // } = await nbaClient.get<LiveData>(SCOREBOARD_URL, { params: { live: 'all' } });

    const scoreboard = await readFile(path.join(__dirname, '../../example/data.json'), { encoding: 'utf8' });

    res.json({ data: JSON.parse(scoreboard) });
  } catch (error) {
    next(error);
  }
};

export { getLive };
