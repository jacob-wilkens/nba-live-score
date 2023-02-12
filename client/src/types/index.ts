import type { ReactElement, SVGAttributes } from 'react';

/* eslint-disable autofix/no-unused-vars */
export type UseQueryResponse<T> = {
  data: T;
};

export type ScoreboardData = {
  gameDate: string;
  games: Game[];
};

export type Game = {
  gameId: string;
  gameCode: string;
  gameStatus: GameStatus;
  gameStatusText: string;
  period: number;
  gameClock: string;
  gameTimeUTC: string;
  gameEt: string;
  regulationPeriods: number;
  ifNecessary: boolean;
  seriesGameNumber: string;
  seriesText: string;
  homeTeam: TeamData;
  awayTeam: TeamData;
};

export type TeamData = {
  teamId: number;
  teamName: string;
  teamCity: string;
  teamTricode: NBATeam;
  wins: number;
  losses: number;
  score: number;
  seed?: unknown;
  inBonus?: string;
  timeoutsRemaining: number;
  periods: Period[];
};

export type Period = {
  period: number;
  periodType: string;
  score: number;
};

export enum NBATeam {
  ATL = 'ATL',
  BOS = 'BOS',
  BKN = 'BKN',
  CHA = 'CHA',
  CHI = 'CHI',
  CLE = 'CLE',
  DAL = 'DAL',
  DEN = 'DEN',
  DET = 'DET',
  GSW = 'GSW',
  HOU = 'HOU',
  IND = 'IND',
  LAC = 'LAC',
  LAL = 'LAL',
  MEM = 'MEM',
  MIA = 'MIA',
  MIL = 'MIL',
  MIN = 'MIN',
  NOP = 'NOP',
  NYK = 'NYK',
  OKC = 'OKC',
  ORL = 'ORL',
  PHI = 'PHI',
  PHX = 'PHX',
  POR = 'POR',
  SAC = 'SAC',
  SAS = 'SAS',
  TOR = 'TOR',
  UTA = 'UTA',
  WAS = 'WAS',
}

export enum GameStatus {
  NotStarted = 1,
  Live = 2,
  Finished = 3,
}

export interface IconProperties extends SVGAttributes<SVGElement> {
  size?: number;
}

export type Icon = ReactElement<IconProperties>;
