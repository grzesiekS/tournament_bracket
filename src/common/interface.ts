export interface ActionInt {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any,
}

export interface TeamInt {
  name: string,
  players: string[],
  win: number,
  draw: number,
  lose: number,
}