import type { TeamData } from '@types';
import { IconPicker } from '@utils/IconPicker';

type Properties = {
  team: TeamData;
};

export function ScoreboardTeamRow({ team }: Properties) {
  const { teamTricode, wins, losses } = team;

  return (
    <div className='flex flex-row items-center w-full'>
      <IconPicker teamCode={teamTricode} size={30} />
      <div className='stat-desc'>{teamTricode}</div>
      <div className='stat-figure inline-block w-10'>
        <div className='stat-desc text-end'>
          {wins}-{losses}
        </div>
      </div>
    </div>
  );
}
