/* eslint-disable autofix/no-unused-vars */
export interface StandingsData {
  resultSets: ResultSet[];
}

export enum StandingsHeaders {
  EastConfStandingsByDay = 'EastConfStandingsByDay',
  WestConfStandingsByDay = 'WestConfStandingsByDay',
}

export type ResultSet = {
  name: string;
  headers: string[];
  rowSet: (number | string)[][];
};
