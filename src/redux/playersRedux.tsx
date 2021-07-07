import { ActionInt, PlayerInt } from '../common/interface';

/* SELECTORS */
export const getPlayersFromTeam = (state: { players: PlayerInt[]; }, playerId:string):PlayerInt[] => state.players.filter(player => 
  player._id === playerId);

/* ACTIONS */

// action name creator
const reducerName = 'players';
const createActionName = (name:string) => `app/${reducerName}/${name}`;

// Action types

// reducer
export default function reducer(state = [], action:ActionInt = { type: '' }):PlayerInt[] {
  switch(action.type) {
    default:
      return state;
  }
}