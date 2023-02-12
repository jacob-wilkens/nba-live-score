import * as NBAIcons from '@components/icons';
import type { Icon } from '@types';
import { NBATeam } from '@types';

// eslint-disable-next-line autofix/no-unused-vars
const NBA_TEAMS: { [key in keyof typeof NBATeam]: Icon } = {
  [NBATeam.ATL]: <NBAIcons.ATL />,
  [NBATeam.BOS]: <NBAIcons.BOS />,
  [NBATeam.BKN]: <NBAIcons.BKN />,
  [NBATeam.CHA]: <NBAIcons.CHA />,
  [NBATeam.CHI]: <NBAIcons.CHI />,
  [NBATeam.CLE]: <NBAIcons.CLE />,
  [NBATeam.DAL]: <NBAIcons.DAL />,
  [NBATeam.DEN]: <NBAIcons.DEN />,
  [NBATeam.DET]: <NBAIcons.DET />,
  [NBATeam.GSW]: <NBAIcons.GSW />,
  [NBATeam.HOU]: <NBAIcons.HOU />,
  [NBATeam.IND]: <NBAIcons.IND />,
  [NBATeam.LAC]: <NBAIcons.LAC />,
  [NBATeam.LAL]: <NBAIcons.LAL />,
  [NBATeam.MEM]: <NBAIcons.MEM />,
  [NBATeam.MIA]: <NBAIcons.MIA />,
  [NBATeam.MIL]: <NBAIcons.MIL />,
  [NBATeam.MIN]: <NBAIcons.MIN />,
  [NBATeam.NOP]: <NBAIcons.NOP />,
  [NBATeam.NYK]: <NBAIcons.NYK />,
  [NBATeam.OKC]: <NBAIcons.OKC />,
  [NBATeam.ORL]: <NBAIcons.ORL />,
  [NBATeam.PHI]: <NBAIcons.PHI />,
  [NBATeam.PHX]: <NBAIcons.PHX />,
  [NBATeam.POR]: <NBAIcons.POR />,
  [NBATeam.SAC]: <NBAIcons.SAC />,
  [NBATeam.SAS]: <NBAIcons.SAS />,
  [NBATeam.TOR]: <NBAIcons.TOR />,
  [NBATeam.UTA]: <NBAIcons.UTA />,
  [NBATeam.WAS]: <NBAIcons.WAS />,
};

type IconPickerProperties = {
  size?: number;
  teamCode: NBATeam;
};

export const IconPicker = ({ size = 100, teamCode }: IconPickerProperties) => {
  const team = NBA_TEAMS[teamCode];

  return { ...team, props: { ...team.props, size } };
};
