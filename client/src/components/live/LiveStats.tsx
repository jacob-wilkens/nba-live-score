import { LiveStat } from '@components';
import { useQueryGetLive } from '@hooks';

export function LiveStats() {
  const { data: { games, gameDate } = { gameDate: '', games: [] } } = useQueryGetLive();

  return (
    <div className='stats shadow'>
      <div className='stat'>
        <div className='stat-title flex items-center'>{gameDate}</div>
      </div>
      {games.map((game) => (
        <LiveStat key={game.gameId} game={game} />
      ))}
    </div>
  );
}
