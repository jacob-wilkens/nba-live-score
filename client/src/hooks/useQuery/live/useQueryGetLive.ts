import { axiosGet } from '@hooks';
import type { QueryKey } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { Scoreboard } from '@types';

const ROUTE = 'live';
const RETRY_DELAY = 5 * 1000;
const REFETCH_INTERVAL = 10 * 1000;

export const useQueryGetLive = () => {
  const queryKey: QueryKey = [ROUTE];

  return useQuery<Scoreboard | undefined>({
    queryKey,
    queryFn: () => axiosGet(ROUTE),
    refetchInterval: REFETCH_INTERVAL,
    retryDelay: RETRY_DELAY,
  });
};
