import playersData from '../data/players.json';

const initialState: PlayerState = {
  players: playersData,
};

/* SELECTORS */
export const getPlayers = (state: state): IPlayer[] => state.players.players;

/* ACTIONS */

// action name creator
// const reducerName = 'players';
// const createActionName = (name:string) => `app/${reducerName}/${name}`;

// Action types

// reducer
export default function reducer(state: PlayerState = initialState, action:PlayerAction): PlayerState {
  switch(action.type) {
    default:
      return state;
  }
}