export type LiveData = {
  scoreboard: Scoreboard;
};

type Scoreboard = {
  gameDate: string;
  games: Game[];
};

type Game = {
  gameId: string;
  gameCode: string;
  gameStatus: number;
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

type TeamData = {
  teamId: number;
  teamName: string;
  teamCity: string;
  teamTricode: string;
  wins: number;
  losses: number;
  score: number;
  seed?: unknown;
  inBonus?: string;
  timeoutsRemaining: number;
  periods: Period[];
};

type Period = {
  period: number;
  periodType: string;
  score: number;
};
