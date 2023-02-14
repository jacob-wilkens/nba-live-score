import type { NextFunction, Request, Response } from 'express';

import type { StandingsData } from '@types';
import { StandingsHeaders } from '@types';
import nbaStatsClient from '@util/nbaStatsClient';
import Case from 'case';
import csv from 'csvtojson';
import { parse } from 'json2csv';

export const getStandings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //TODO: Cleanup controller and type req.query
    const date = req.query.date;

    const urlParams = new URLSearchParams({ DayOffset: '0', GameDate: date as string, LeagueID: '00' });

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
        const csvString = parse(rowSet);

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
