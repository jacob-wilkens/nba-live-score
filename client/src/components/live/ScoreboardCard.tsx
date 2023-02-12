import { ScoreboardTeamRow } from '@components';
import type { Game } from '@types';
import dayjs from '@utils/dayjs';

type Properties = {
  game: Game;
};

/* 
TODO: Separate out component with home and away team
TODO: Add specific component for games that have not started
TODO: Add component for games that are currently in progress
TODO: Add component for games that are finished
TODO: Size components accordingly based on number of games
TODO: Add some loading logic
TODO: Add some UI error messages etc
TODO: Experiment with responsiveness
*/

export function ScoreboardCard({ game }: Properties) {
  // eslint-disable-next-line autofix/no-unused-vars
  const { gameStatusText, gameTimeUTC, awayTeam, homeTeam } = game;

  // Parse the UTC date and time string
  const userGameTime = dayjs.utc(gameTimeUTC).local().format('h:mm a z');

  return (
    <div className='stat'>
      <div className='stat-title'>{userGameTime}</div>
      <ScoreboardTeamRow team={homeTeam} />
      <ScoreboardTeamRow team={awayTeam} />
    </div>
  );
}
