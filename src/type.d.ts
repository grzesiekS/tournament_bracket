interface ITeam {
  _id: string,
  name: string,
  players: string[],
  win: number,
  draw: number,
  lose: number,
}

interface IScoreDetails {
  win: number,
  draw: number,
  lose: number,
}

interface IPlayer {
  _id: string,
  name: string,
  win: number,
  draw: number,
  lose: number,
}

interface ITeamComponent extends ITeam {
  viewPlayerStatus?: boolean
}

type TeamState = {
  teams: ITeam[]
}

type TeamAction = {
  type: string,
  teams: ITeam[]
}

type DispatchType = (args: TeamAction) => TeamAction