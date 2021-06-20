import { ActionInt, TeamInt } from '../common/interface';

/* SELECTORS */
export const getTeams = (state: { teams: TeamInt[]; }):TeamInt[] => state.teams;

/* ACTIONS */

// action name creator
const reducerName = 'teams';
const createActionName = (name:string) => `app/${reducerName}/${name}`;

// Action types

// reducer
export default function reducer(state = [], action:ActionInt = { type: '' }):TeamInt[] {
  switch(action.type) {
    default:
      return state;
  }
}