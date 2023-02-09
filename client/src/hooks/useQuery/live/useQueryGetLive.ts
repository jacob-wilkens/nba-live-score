import { axiosGet } from '@hooks';
import type { QueryKey } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { GameData } from '@types';

const ROUTE = 'live';

export const useQueryGetLive = () => {
  const queryKey: QueryKey = [ROUTE];

  return useQuery<GameData>({ queryKey, queryFn: () => axiosGet(ROUTE) });
};
