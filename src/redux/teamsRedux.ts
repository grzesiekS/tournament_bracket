//import shortid from 'shortid'
import teamsData from '../data/teams.json';

const newTeamsData = teamsData.map(team => ({
  ...team,
  timeStamp: new Date(),
}));

const initialState: TeamState = {
  teams: newTeamsData,
};
/* SELECTORS */
export const getTeams = (state: state): ITeam[] => state.teams.teams;

/* ACTIONS */

// action name creator
const reducerName = 'teams';
const createActionName = (name: string) => `app/${reducerName}/${name}`;

// Action types
const ADD_TEAM = createActionName('ADD_TEAM');
const ADD_TEAM_PLAYER = createActionName('ADD_TEAM_PLAYER');

// Action creators
const createNewTeamTemplate = (
  _id: string, 
  name: string, 
  players: string[], 
  draw: number, 
  lose: number, 
  win: number):ITeam => (
  {
    _id:_id,
    name:name,
    players: players,
    draw: draw,
    lose: lose,
    win: win,
    timeStamp: new Date(),
  }
);

export const addNewTeam = (teamName: string): TeamAction => (
  {team: createNewTeamTemplate('1234', teamName, [], 0, 0, 0), type: ADD_TEAM}
);

export const addNewTeamPlayer = (teamID: string, playerID: string): TeamAction => ({
  team: createNewTeamTemplate(teamID, 'Team', [playerID], 0, 0, 0), type: ADD_TEAM_PLAYER,
});

// reducer
export default function reducer(state:TeamState = initialState, action: TeamAction): TeamState {
  switch(action.type) {
    case ADD_TEAM: {
      return {
        teams: [
          ...state.teams,
          action.team,
        ],
      };
    }
    case ADD_TEAM_PLAYER:
      const newTeams = state.teams.map(team => {
        if(team._id === action.team._id) {
          team.players = [
            ...team.players,
            ...action.team.players,
          ];
        }
        return team;
      });
      return {
        teams: newTeams,
      };
    default:
      return state;
  }
}