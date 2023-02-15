import { axiosGet } from '@hooks';
import type { QueryKey } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { ScoreboardData } from '@types';

const ROUTE = 'live';
const RETRY_DELAY = 5 * 1000;
const REFETCH_INTERVAL = 7.5 * 1000;
const RETRY = 1;

export const useQueryGetLive = () => {
  const queryKey: QueryKey = [ROUTE];

  return useQuery<ScoreboardData | undefined>({
    queryKey,
    queryFn: () => axiosGet(ROUTE),
    refetchInterval: REFETCH_INTERVAL,
    retryDelay: RETRY_DELAY,
    retry: RETRY,
  });
};
