import { ScoreboardTeamRow } from '@components';
import type { Game } from '@types';
import { GameStatus } from '@types';
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
  const { gameStatusText, gameTimeUTC, awayTeam, homeTeam, gameStatus } = game;

  // Parse the UTC date and time string
  const userGameTime = dayjs.utc(gameTimeUTC).local().format('h:mm A z');

  return (
    <div className='stat'>
      <div className='stat-title text-sm'>{gameStatus === GameStatus.NotStarted ? userGameTime : gameStatusText}</div>
      <ScoreboardTeamRow team={homeTeam} gameStatus={gameStatus} />
      <ScoreboardTeamRow team={awayTeam} gameStatus={gameStatus} />
    </div>
  );
}
