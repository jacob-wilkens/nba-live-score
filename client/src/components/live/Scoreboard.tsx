import { useQueryGetLive } from '@hooks';
import type { ScoreboardData } from '@types';

import { ScoreboardCard } from './ScoreboardCard';

const defaultData: ScoreboardData = { gameDate: '', games: [] };

export function Scoreboard() {
  const { data: { gameDate, games } = defaultData, isFetching } = useQueryGetLive();

  return (
    <div className={`stats shadow ${isFetching ? 'animate-pulse' : ''}`}>
      <div className='stat'>
        <div className='stat-title flex text-sm items-center'>{gameDate}</div>
      </div>
      {games.length === 0 ? <>No Games</> : games.map((game) => <ScoreboardCard key={game.gameId} game={game} />)}
    </div>
  );
}
