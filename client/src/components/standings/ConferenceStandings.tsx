import type { TeamStanding } from '@types';
import { NBA_TEAMS } from '@utils/IconPicker';

type Params = {
  teams: TeamStanding[];
};

export function ConferenceStandings({ teams }: Params) {
  return (
    <tbody>
      {teams.map((i) => {
        const { homeRecord, roadRecord, l, w, wPct, team, teamId, teamTriCode } = i;
        return (
          <tr key={teamId}>
            <td>{NBA_TEAMS[teamTriCode]}</td>
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
  );
}
