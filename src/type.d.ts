interface IPopUp {
  closePopUp: (value: boolean) => void;
}

interface IFormComponents {
  ComponentType: 'input' | 'select'
  labelText: string
  type?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
  selectOptions?: selectElement[]
}

interface ITeam {
  _id: string,
  name: string,
  players: string[],
  win: number,
  draw: number,
  lose: number,
}

interface ITeamAction {
  _id?: string,
  name?: string,
  players?: string[],
  win?: number,
  draw?: number,
  lose?: number,
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
  team: ITeam,
}

type AddTeam = {
  type: string,
  teamName: string,
}

type PlayerState = {
  players: IPlayer[]
}

type PlayerAction = {
  type: string,
  player: IPlayer
}

type state = {
  players: PlayerState,
  teams: TeamState
}

type selectElement = {
  optionValue: string,
  optionText: string
}