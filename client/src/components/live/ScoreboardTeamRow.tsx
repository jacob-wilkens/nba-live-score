import type { TeamData } from '@types';
import { GameStatus } from '@types';
import { IconPicker, NBA_TEAMS } from '@utils/IconPicker';

type Properties = {
  team: TeamData;
  gameStatus: GameStatus;
};

export function ScoreboardTeamRow({ team, gameStatus }: Properties) {
  const { teamTricode, wins, losses, score } = team;

  const scoreboardDescription = gameStatus === GameStatus.NotStarted ? `${wins}-${losses}` : score;
  const validTriCode = Object.keys(NBA_TEAMS).includes(teamTricode);

  return (
    <div className='flex flex-row items-center w-full'>
      {validTriCode ? <IconPicker teamCode={teamTricode} size={30} /> : <></>}
      <div className='stat-desc'>{teamTricode}</div>
      <div className='stat-figure inline-block w-10'>
        <div className='stat-desc text-end'>{scoreboardDescription}</div>
      </div>
    </div>
  );
}
