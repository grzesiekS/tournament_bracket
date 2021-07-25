/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
interface ActionInt {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any,
}

interface TeamInt {
  _id: string,
  name: string,
  players: string[],
  win: number,
  draw: number,
  lose: number,
}

/* SELECTORS */
export const getTeams = (state: { teams: TeamInt[]; }):TeamInt[] => state.teams;

/* ACTIONS */

// action name creator
const reducerName = 'teams';
const createActionName = (name:string) => `app/${reducerName}/${name}`;

// Action types
const ADD_TEAM = createActionName('ADD_TEAM');

// Action creators
interface NewTeamPayload {
  payload: TeamInt,
  type: string,
}
export const addNewTeam = (payload: TeamInt): NewTeamPayload => ({ payload, type: ADD_TEAM });

// reducer
export default function reducer(state: { teams: never; }, action:ActionInt = { type: '' }) {
  switch(action.type) {
    case ADD_TEAM: {
      return {
        ...state,
        teams: [
          ...state.teams,
          action.payload,
        ],
      };
    }
    default:
      return state;
  }
}