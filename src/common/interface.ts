export interface ActionInt {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any,
}

export interface TeamInt {
  _id: string,
  name: string,
  players: string[],
  win: number,
  draw: number,
  lose: number,
}

export interface PlayerInt {
  _id: string,
  name: string,
  win: number,
  draw: number,
  lose: number,
}

export interface TitleInt {
  text: string,
  color: 'dark' | 'light',
}

export interface ScoreDetailsInt {
  win: number,
  draw: number,
  lose: number,
}