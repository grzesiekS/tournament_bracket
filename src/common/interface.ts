export interface Action {
  type: string,
  payload: any;
}

export interface Team {
  name: string,
  players: string[],
  win: number,
  draw: number,
  lose: number,
}