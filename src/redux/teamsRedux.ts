//import shortid from 'shortid';
import teamsData from '../data/teams.json';

const initialState: TeamState = {
  teams: teamsData,
};
/* SELECTORS */
export const getTeams = (state: state): ITeam[] => state.teams.teams;

/* ACTIONS */

// action name creator
const reducerName = 'teams';
const createActionName = (name: string) => `app/${reducerName}/${name}`;

// Action types
const ADD_TEAM = createActionName('ADD_TEAM');

// Action creators
export const addNewTeam = (team: ITeam): TeamAction => ({team, type: ADD_TEAM});

// reducer
export default function reducer(state:TeamState = initialState, action: TeamAction): TeamState {
  switch(action.type) {
    case ADD_TEAM: {
      return state;
    }
    default:
      return state;
  }
}