import { useQueryGetStandings, useToggle } from '@hooks';
import type { StandingsData } from '@types';

import { ConferenceStandings } from './ConferenceStandings';

const defaultData: StandingsData = { eastConfStandingsByDay: [], westConfStandingsByDay: [] };

export function Standings() {
  const { data: { eastConfStandingsByDay, westConfStandingsByDay } = defaultData } = useQueryGetStandings();
  const [showEastConf, toggle] = useToggle(true);

  return (
    <div className='flex justify-end'>
      <div>
        <div className='grid grid-cols-2'>
          <button className={`btn ${showEastConf ? 'btn-active' : ''} no-text-transform`} onClick={toggle}>
            East Standings
          </button>
          <button className={`btn ${showEastConf ? '' : 'btn-active'} no-text-transform`} onClick={toggle}>
            West Standings
          </button>
        </div>
        <table className='table table-compact'>
          <thead>
            <tr>
              <th />
              <th>Team</th>
              <th>W</th>
              <th>L</th>
              <th>W %</th>
              <th>Home</th>
              <th>Road</th>
            </tr>
          </thead>
          {showEastConf ? <ConferenceStandings teams={eastConfStandingsByDay} /> : <ConferenceStandings teams={westConfStandingsByDay} />}
        </table>
      </div>
    </div>
  );
}
