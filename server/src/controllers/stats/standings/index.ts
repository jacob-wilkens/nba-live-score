import type { NextFunction, Request, Response } from 'express';

import type { StandingsData } from '@types';
import { StandingsHeaders } from '@types';
import nbaStatsClient from '@util/nbaStatsClient';
import type { StandingsQuerySchema } from '@validators/standings';
import Case from 'case';
import csv from 'csvtojson';
import { parseAsync } from 'json2csv';

const SEARCH_PARAMS = { DayOffset: '0', LeagueID: '00' };

export const getStandings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //TODO: Cleanup controller
    const { date } = req.query as StandingsQuerySchema;

    const urlParams = new URLSearchParams({ ...SEARCH_PARAMS, GameDate: date as string });

    const URL = `scoreboardv2?${urlParams.toString()}`;

    const {
      data: { resultSets },
    } = await nbaStatsClient.get<StandingsData>(URL);

    const headers: string[] = Object.values(StandingsHeaders);
    const dataSets = resultSets.filter((i) => headers.includes(i.name));

    const data: { [key: string]: unknown } = {};

    await Promise.all(
      dataSets.map(async (dataSet, index) => {
        const { rowSet, headers: rowHeaders } = dataSet;
        const csvString = await parseAsync(rowSet);

        const back2json = await csv({ headers: rowHeaders.map((i) => Case.camel(i)) }).fromString(csvString);

        data[headers[index]] = back2json;
      })
    );

    res.json({ data });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
