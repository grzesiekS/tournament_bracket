//import shortid from 'shortid'
import Axios from 'axios';
import { Dispatch } from 'react';

/* SELECTORS */
export const getTeams = (state: state): ITeam[] => state.teams.teams || [] ;

/* ACTIONS */

// action name creator
const reducerName = 'teams';
const createActionName = (name: string) => `app/${reducerName}/${name}`;

// Action types
const FETCH_SUCESS = createActionName('FETCH_SUCESS');
const ADD_TEAM = createActionName('ADD_TEAM');
const ADD_TEAM_PLAYER = createActionName('ADD_TEAM_PLAYER');
const REMOVE_TEAM = createActionName('REMOVE_TEAM');

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

export const fetchSucess = (teamsData: ITeam[]): TeamAction => ({
  team: teamsData, type: FETCH_SUCESS,
});

export const addNewTeam = (team: ITeam): TeamAction => (
  {team: [team], type: ADD_TEAM}
);

export const addNewTeamPlayer = (teamID: string, playerID: string): TeamAction => ({
  team: [createNewTeamTemplate(teamID, 'Team', [playerID], 0, 0, 0)], type: ADD_TEAM_PLAYER,
});

export const removeTeam = (teamID: string): TeamAction => ({
  team: [createNewTeamTemplate(teamID, 'Team', [], 0, 0, 0)], type: REMOVE_TEAM,
});

/* Thunk actions */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchAllTeams = () => (dispatch: Dispatch<TeamAction>) => {
  Axios
    .get('http://localhost:8000/api/teams')
    .then(res => {
      dispatch(fetchSucess(res.data));
    })
    .catch(err => {
      console.warn(err);
    });
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const addNewTeamDb = (teamName: string) => async (dispatch: Dispatch<TeamAction>) => {
  try {
    const res = await Axios.post('http://localhost:8000/api/team', {name: teamName});
    dispatch(addNewTeam(res.data.newTeam));
  } catch(err) {
    console.warn(err);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const removeTeamDb = (id: string) => async (dispatch: Dispatch<TeamAction>) => {
  try {
    await Axios.delete(`http://localhost:8000/api/team/${id}`);
    dispatch(removeTeam(id));
  } catch(err) {
    console.warn(err);
  }
};

// reducer
export default function reducer(state:TeamState, action: TeamAction): TeamState {
  switch(action.type) {
    case ADD_TEAM: {
      return {
        teams: [
          ...state.teams,
          ...action.team,
        ],
      };
    }
    case ADD_TEAM_PLAYER:
      const newTeams = state.teams.map(team => {
        if(team._id === action.team[0]._id) {
          team.players = [
            ...team.players,
            ...action.team[0].players,
          ];
        }
        return team;
      });
      return {
        teams: newTeams,
      };
    case REMOVE_TEAM:
      return {
        teams: [
          ...state.teams.filter(team => team._id !== action.team[0]._id),
        ],
      };
    case FETCH_SUCESS:
      
      return {
        teams: action.team,
      };
    default:
      return state || [];
  }
}