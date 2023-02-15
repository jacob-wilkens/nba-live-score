import { axiosGet } from '@hooks';
import type { QueryKey } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { NBATeam } from '@types';
import dayjs from '@utils/dayjs';
import type { StandingsData, TeamStanding } from 'src/types/standings';

const ROUTE = 'stats/standings';

export const useQueryGetStandings = () => {
  const date = dayjs.utc().local().format('YYYY-MM-DD');
  const queryKey: QueryKey = [ROUTE, date];

  const urlSearchParameters = new URLSearchParams({ date });

  return useQuery<StandingsData | undefined>({
    queryKey,
    queryFn: () => axiosGet(`${ROUTE}?${urlSearchParameters.toString()}`),
    cacheTime: Number.POSITIVE_INFINITY,
    select(data) {
      if (!data) return data;

      const { eastConfStandingsByDay, westConfStandingsByDay } = data;

      return { eastConfStandingsByDay: updateTeamCode(eastConfStandingsByDay), westConfStandingsByDay: updateTeamCode(westConfStandingsByDay) };
    },
  });
};

function updateTeamCode(teams: TeamStanding[]): TeamStanding[] {
  if (!teams || teams.length === 0) return [];
  return teams.map((teamEle): TeamStanding => {
    const { g, homeRecord, l, roadRecord, team, teamId, w, wPct } = teamEle;
    return { g, homeRecord, l, roadRecord, team, teamId, w, wPct, teamCode: team.slice(0, 3).toUpperCase() as NBATeam };
  });
}
