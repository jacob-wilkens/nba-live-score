import type { NBATeam } from '@types';

/* eslint-disable autofix/no-unused-vars */
export type StandingsData = {
  eastConfStandingsByDay: TeamStanding[];
  westConfStandingsByDay: TeamStanding[];
};

export type TeamStanding = {
  teamId: string;
  team: string;
  g: string;
  w: string;
  l: string;
  wPct: string;
  homeRecord: string;
  roadRecord: string;
  teamCode: NBATeam;
};
