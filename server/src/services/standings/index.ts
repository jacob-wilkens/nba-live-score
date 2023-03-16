import Teams from '@data/teams.json';
import type { ResultSet } from '@types';
import { StandingsHeaders } from '@types';
import Case from 'case';
import csv from 'csvtojson';
import { parseAsync } from 'json2csv';

export async function transformStandings(resultSets: ResultSet[]) {
  const headers: string[] = Object.values(StandingsHeaders).map((i) => Case.camel(i));
  const dataSets = resultSets.filter((i) => headers.includes(Case.camel(i.name)));

  const data: { [key: string]: unknown } = {};
  const teamMap = new Map<number, string>(Teams.map((i) => [i.id, i.abbreviation]));

  await Promise.all(
    dataSets.map(async (dataSet, index) => {
      const { rowSet, headers: rowHeaders } = dataSet;
      rowHeaders.push('teamTriCode');

      const idIndex = rowHeaders.indexOf('TEAM_ID');
      for (const row of rowSet) {
        const teamId = row[idIndex];
        row.push(teamMap.get(+teamId) ?? '');
      }

      const csvString = await parseAsync(rowSet);

      const back2json = await csv({ headers: rowHeaders.map((i) => Case.camel(i)) }).fromString(csvString);

      data[headers[index]] = back2json;
    })
  );

  return data;
}
