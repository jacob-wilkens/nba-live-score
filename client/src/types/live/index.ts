import type { NBATeam } from '@types';

/* eslint-disable autofix/no-unused-vars */
export enum GameStatus {
  NotStarted = 1,
  Live = 2,
  Finished = 3,
}

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
