/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import shortid from 'shortid';
/* SELECTORS */
export const getTeams = state => state.teams;

/* ACTIONS */

// action name creator
const reducerName = 'teams';
const createActionName = (name) => `app/${reducerName}/${name}`;

// Action types
const ADD_TEAM = createActionName('ADD_TEAM');

// Action creators
export const addNewTeam = (payload) => ({ payload, type: ADD_TEAM });

// reducer
export default function reducer(state = {}, action) {
  switch(action.type) {
    case ADD_TEAM: {
      return [
        ...state,
        {
          _id: shortid.generate(),
          name: action.payload,
          players: [],
          win: 0,
          draw: 0,
          lose: 0,
        },
      ];
    }
    default:
      return state;
  }
}