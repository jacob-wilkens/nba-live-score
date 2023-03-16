import { axiosGet } from '@hooks';
import type { QueryKey } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import dayjs from '@utils/dayjs';
import type { StandingsData } from 'src/types/standings';

const ROUTE = 'stats/standings';

export const useQueryGetStandings = () => {
  const date = dayjs.utc().local().format('YYYY-MM-DD');
  const queryKey: QueryKey = [ROUTE, date];

  const urlSearchParameters = new URLSearchParams({ date });

  return useQuery<StandingsData | undefined>({
    queryKey,
    queryFn: () => axiosGet(`${ROUTE}?${urlSearchParameters.toString()}`),
    cacheTime: Number.POSITIVE_INFINITY,
  });
};
