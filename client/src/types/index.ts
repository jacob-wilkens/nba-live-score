import type { ReactElement, SVGAttributes } from 'react';

/* eslint-disable autofix/no-unused-vars */
export type UseQueryResponse<T> = {
  data: T;
};

export enum NBATeam {
  ATL = 'ATL',
  BOS = 'BOS',
  BKN = 'BKN',
  CHA = 'CHA',
  CHI = 'CHI',
  CLE = 'CLE',
  DAL = 'DAL',
  DEN = 'DEN',
  DET = 'DET',
  GSW = 'GSW',
  HOU = 'HOU',
  IND = 'IND',
  LAC = 'LAC',
  LAL = 'LAL',
  MEM = 'MEM',
  MIA = 'MIA',
  MIL = 'MIL',
  MIN = 'MIN',
  NOP = 'NOP',
  NYK = 'NYK',
  OKC = 'OKC',
  ORL = 'ORL',
  PHI = 'PHI',
  PHX = 'PHX',
  POR = 'POR',
  SAC = 'SAC',
  SAS = 'SAS',
  TOR = 'TOR',
  UTA = 'UTA',
  WAS = 'WAS',
}

export interface IconProperties extends SVGAttributes<SVGElement> {
  size?: number;
}

export type Icon = ReactElement<IconProperties>;

export * from './live';
export * from './standings';
