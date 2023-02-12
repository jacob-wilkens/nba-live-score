import { ScoreboardCard } from '@components';
import { useQueryGetLive } from '@hooks';
import type { ScoreboardData } from '@types';

const defaultData: ScoreboardData = { gameDate: '', games: [] };

export function Scoreboard() {
  const { data: { games, gameDate } = defaultData, isFetching } = useQueryGetLive();

  // if (isLoading) return <div className='stats shadow animate-pulse'>
  //   <div className='stat h-2.5 bg-gray-200 dark:bg-gray-700 w-48 mb-4' />
  // </div>

  return (
    <div className={`stats shadow ${isFetching ? 'animate-pulse' : ''}`}>
      <div className='stat'>
        <div className='stat-title flex text-sm items-center'>{gameDate}</div>
      </div>
      {games.map((game) => (
        <ScoreboardCard key={game.gameId} game={game} />
      ))}
    </div>
  );
}
