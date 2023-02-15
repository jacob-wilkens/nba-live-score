import { useQueryGetStandings } from '@hooks';
import type { StandingsData } from '@types';
import { NBA_TEAMS } from '@utils/IconPicker';

const defaultData: StandingsData = { eastConfStandingsByDay: [], westConfStandingsByDay: [] };

export function Standings() {
  const { data: { eastConfStandingsByDay /*westConfStandingsByDay*/ } = defaultData } = useQueryGetStandings();

  return (
    <div className='flex justify-end'>
      <table className='table table-compact'>
        <thead>
          <tr>
            <th />
            <th>Team</th>
            <th>W</th>
            <th>L</th>
            <th>W %</th>
            <th>Home W/L</th>
            <th>Road W/L</th>
          </tr>
        </thead>
        <tbody>
          {eastConfStandingsByDay.map((i) => {
            const { homeRecord, roadRecord, l, w, wPct, team, teamId, teamCode } = i;
            return (
              <tr key={teamId}>
                <td>{NBA_TEAMS[teamCode]}</td>
                <td>{team}</td>
                <td>{w}</td>
                <td>{l}</td>
                <td>{wPct}</td>
                <td>{homeRecord}</td>
                <td>{roadRecord}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
