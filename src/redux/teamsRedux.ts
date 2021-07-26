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
export const addNewTeam = (teamName: string): TeamAction => (
  {team: 
    {
      _id: '4',
      name: teamName,
      players: [],
      draw: 0,
      lose: 0,
      win: 0,
    }, type: ADD_TEAM}
);

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
    default:
      return state;
  }
}