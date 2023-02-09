export type UseQueryResponse<T> = {
  data: T;
};

/* eslint-disable autofix/no-unused-vars */
export enum Stage {
  NotStarted = 1,
  Live = 2,
  Finished = 3,
}

export type GameData = {
  errors: unknown[];
  results: number;
  response: Response[];
};

export type Response = {
  id?: number;
  date?: GameDate;
  stage?: Stage;
  status?: Status;
  periods?: Periods;
  teams?: Teams;
  scores?: Scores;
};

export type Scores = {
  visitors: TeamGameSummary;
  home: TeamGameSummary;
};

export type TeamGameSummary = {
  linescore: string[];
  points: number;
};

export type Series = {
  win: number;
  loss: number;
};

export type Teams = {
  visitors: TeamInfo;
  home: TeamInfo;
};

export type TeamInfo = {
  id: number;
  name: string;
  nickname: string;
  code: string;
  logo: string;
};

export type Periods = {
  current: number;
  total: number;
  endOfPeriod: boolean;
};

export type Status = {
  clock: string;
  halftime: boolean;
  short: number;
  long: string;
};

export type GameDate = {
  start: string;
  end?: string;
  duration?: string | number;
};
