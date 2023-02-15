import type { NextFunction, Request, Response } from 'express';

import { transformStandings } from '@services';
import type { StandingsData } from '@types';
import nbaStatsClient from '@util/nbaStatsClient';
import type { StandingsQuerySchema } from '@validators/standings';

const SEARCH_PARAMS = { DayOffset: '0', LeagueID: '00' };

export const getStandings = async (req: Request, res: Response, next: NextFunction) => {
  const { date } = req.query as StandingsQuerySchema;
  const urlParams = new URLSearchParams({ ...SEARCH_PARAMS, GameDate: date });
  const URL = `scoreboardv2?${urlParams.toString()}`;

  try {
    const {
      data: { resultSets },
    } = await nbaStatsClient.get<StandingsData>(URL);

    const data = await transformStandings(resultSets);

    res.json({ data });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
