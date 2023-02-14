/* eslint-disable autofix/no-unused-vars */
export interface StandingsData {
  resultSets: ResultSet[];
}

export enum StandingsHeaders {
  EastConfStandingsByDay = 'EastConfStandingsByDay',
  WestConfStandingsByDay = 'WestConfStandingsByDay',
}

type ResultSet = {
  name: string;
  headers: string[];
  rowSet: (number | string)[][];
};

type TeamStanding = {
  teamId: unknown;
  leagueId: unknown;
  seasonId: unknown;
  standingsDate: unknown;
  conference: unknown;
  team: unknown;
  g: unknown;
  w: unknown;
  l: unknown;
  wPct: unknown;
  homeRecord: unknown;
  roadRecord: unknown;
  returnToPlay: unknown;
};
