import type { Game } from '@types';
import dayjs from '@utils/dayjs';

type Properties = {
  game: Game;
};

export function LiveStat({ game }: Properties) {
  // eslint-disable-next-line autofix/no-unused-vars
  const { gameClock, gameTimeUTC, period, awayTeam, homeTeam } = game;

  // Parse the UTC date and time string
  const userGameTime = dayjs.utc(gameTimeUTC).local().format('h:mm a z');

  return (
    <div className='stat'>
      <div className='stat-title'>{userGameTime}</div>
      <div>
        <div className='stat-desc'>{homeTeam.teamTricode}</div>
      </div>
      <div>
        <div className='stat-desc'>{awayTeam.teamTricode}</div>
      </div>
    </div>
  );
}
